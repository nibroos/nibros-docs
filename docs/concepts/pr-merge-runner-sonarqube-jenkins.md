# PR & Merge Runner with SonarQube and AI Review

`9 minutes read` · Aug 23, 2026

Tech: `Jenkins`, `SonarQube`, `Docker`, `Go`, `Nuxt`, `Semgrep`, `Trivy`, `Cloudflare Tunnel`, `Groovy`, `Python`

## Summary

A self-hosted Jenkins that gates every pull request on **the code the pull
request actually changed**, not on the whole repository. One shared pipeline
serves every project; each repository declares its own commands in a small
`.ci/config.yml`, so onboarding a new repo is a config change rather than a
pipeline change.

```
Pull request ──> install ─ lint ─ typecheck ─ tests ─ new-code coverage
                        └─ Semgrep ─ dependency scan ─ SonarQube ─ AI review
                                          │
                                    quality gate ──> merge allowed

Push to main ──> the same, then ──> image build ─ image scan ─ push
                                 └─> deploy (health-gated, auto-rollback)
```

The single design decision everything else follows from: **judge new code, not
the codebase.** One project here carries ~21,000 untested lines. A project-wide
80% coverage gate could never pass, so it would be switched off within a week
and the team would be left with no gate at all. A gate on the lines a change
touches is demanding *and* reachable from the first pull request.

---

## The pieces

| Component | Role |
| --- | --- |
| **Jenkins controller** | Configuration as Code; runs **zero** builds itself |
| **Ephemeral agents** | One throwaway container per build |
| **Docker socket proxy** | Mediates the Docker API the agents use |
| **SonarQube Community** | Issue detection, duplication, server-side quality gate |
| **Shared library** | 11 pipeline steps every repo reuses |
| **AI reviewer** | Reviews the diff against the team's own written standards |
| **Cloudflare Tunnel** | Publishes the UI with no inbound port open |

---

## The repository contract

Jenkins does not know how to build anything. Each repository says so itself:

```yaml
runtime:
  type: go
  version: "1.25"

commands:
  install:   "cd service && go mod download"
  lint:      "cd service && go vet ./..."
  typecheck: "cd service && go build ./..."
  test:      "./.ci/test.sh"
  coverage:  "./.ci/test.sh"

coverage:
  minimum: 80        # of NEW code
  enforce: true

gates:
  lint:            true
  semgrep_high:    true    # security findings block
  dependency_high: false   # report first, gate after triage
  ai_critical:     false   # advisory — never the only protection
```

The loader rejects a non-deterministic install (`npm install`, or `bun install`
without `--frozen-lockfile`): a resolver free to pick new versions means the
pull request and the production build can test different code.

---

## New-code coverage

```
                 changed lines that tests execute
new-code % =    ─────────────────────────────────
                 changed lines that are executable
```

Measured with `diff-cover` against the base branch. The project-wide figure is
still reported, for context only — it is never gated. Changes that touch only
documentation or configuration report *no measurable lines changed* and pass,
rather than dividing by zero.

For Go this needs a conversion step, since `go test` emits its own profile
format:

```bash
go test -v ./... -coverprofile=coverage.out -covermode=atomic \
  | tee reports/go-test.log \
  | go-junit-report -set-exit-code > reports/junit/go.xml
gocover-cobertura < coverage.out > coverage/cobertura-coverage.xml
```

`-v` is not optional: `go-junit-report` builds test cases from the per-test
`=== RUN` lines, which `go test` only emits in verbose mode. Without it the XML
has zero cases and a passing suite is reported as *no tests found*.

`PIPESTATUS[0]` is checked explicitly — a pipeline's exit status is the **last**
command's, so a failing `go test` piped into a succeeding reporter would look
like a pass.

---

## Honest reporting

Every stage reports one of four states, and the distinction is enforced:

| State | Meaning |
| --- | --- |
| `PASS` | Ran, found nothing blocking |
| `FAIL` | Ran, found something |
| `SKIPPED` | Not configured for this repository |
| `UNAVAILABLE` | **Could not run** |

A tool that could not run is never reported as a clean scan. A mandatory tool
that reports `UNAVAILABLE` fails the gate; an optional one becomes a warning.
That single rule is what stops a broken scanner from quietly becoming a green
build.

One place decides pass/fail. Individual stages report facts; the aggregator owns
the policy — which is why a stage can fail loudly while its gate is off, and the
report says exactly that: `Lint: FAILED (gate disabled)`.

---

## SonarQube on Community Edition

Community Edition has no branch model: every analysis overwrites the single
project. The community branch plugin adds branch and pull-request analysis,
which is what makes "scan only the changes" possible.

It is third-party and unofficial, and the plugin version must match the server
version **exactly**. Worth knowing before adopting it — and worth pinning both
versions together.

The release ships **two** artefacts, and both are required:

| Artefact | Without it |
| --- | --- |
| `...-branch-plugin.jar` | No PR analysis at all |
| `sonarqube-webapp.zip` | The API returns correct per-PR data and **the UI shows none of it** — no branch selector, and `?pullRequest=N` renders blank |

Community Edition ships a web UI with the selector stripped out; the zip is the
patched front-end that restores it. Installing only the jar produces a
convincing half-working state.

### Two setup traps

**Name the main branch after your real default branch.** SonarQube creates it as
`main`. A repository on `master` then has a pull request whose base never matches
the main branch, so new code has no reference to compare against.

**Never point `sonar.newCode.referenceBranch` at your main branch.** It applies
when analysing that branch too, where it is self-referential: the UI reports
*"Measures on New Code will appear after the second analysis"* and the gate
passes vacuously while real issues exist.

**Seed the project before the first pull request.** A PR analysis is scored
against its base, so the base must already be known:

```
ERROR No branch exists in Sonarqube with the name main
```

The analysis aborts, so the project is never created, and the dashboard link
returns *"The requested project could not be found."*

---

## AI review

An advisory reviewer that reads the diff and comments inline. It is
provider-agnostic — the same four settings point it at a hosted API or a
self-hosted OpenAI-compatible endpoint.

Its rubric is the team's own written standards, selected from what the diff
touches: Go and SQL load the backend review guide, Vue and TypeScript the
frontend one. Findings cite the section they come from, which is what makes them
arguable rather than oracular.

```
🔴 BLOCKING — Access token read from localStorage
composables/useAuthFetch.ts:27 · xss

> An XSS payload on the same origin reads the token and sends it to an
> attacker. The token is valid for 15 minutes, allowing impersonation.

Recommendation: keep it in memory; use the httpOnly refresh cookie.
frontend/code-review.md §3 Token storage
```

### Advisory on purpose

It posts `COMMENT` reviews, never `REQUEST_CHANGES`, and cannot merge, push or
approve. A reviewer that blocks a merge on one false positive gets switched off
within a week — and then there is no reviewer at all. Gate it later, once it has
earned the trust.

### Batching, because one prompt is all-or-nothing

The diff is split into batches, reviewed separately, then merged and
de-duplicated by `file:line`. This is not an optimisation:

- a batch that fails costs **that batch's files**, not the review
- the summary states how many batches failed, so a partial review is never
  mistaken for a clean one
- `UNAVAILABLE` is reported only when **every** batch fails

A file whose own patch exceeds the budget is split at `@@` hunk boundaries —
a 2,600-line new file would otherwise become a single 100KB request that no
model answers, losing every finding in it.

### What a self-hosted endpoint has to survive

| Constraint | Symptom | Handling |
| --- | --- | --- |
| Cloudflare's 100s origin limit | `HTTP 524` on any real prompt | Stream, so bytes keep flowing and the idle timer never fires |
| Gateway auto-streams on large bodies | `JSONDecodeError` around ~128KB | Reassemble SSE; keep `content` and `reasoning_content` deltas **separate** |
| Reasoning models | 50–70KB of thinking, no answer | Reported as a clear error naming the two budget knobs |
| Truncated answer | JSON cut mid-array | Salvage every complete finding rather than discarding the response |
| Its own time budget | Killed mid-run, findings lost | Stops at an internal deadline and posts what it has, naming files it did not reach |

The last one is the important one. An earlier version was killed by the step
timeout with 9 of 12 batches complete and every finding still in memory.

---

## Security posture

The controller runs **zero** builds. A job on the controller can read every
credential and write to `JENKINS_HOME`; agents are ephemeral containers, one per
build, discarded afterwards.

Being direct about what the socket proxy does and does not buy: it removes
swarm, secrets, configs and system endpoints, and blocks reads of the raw
socket. But **anything that can create a container can bind-mount `/` and is
root on that host**. It is real hardening, not a sandbox.

What actually contains it:

1. **Fork pull requests are not built.** A PR build runs repository-supplied
   commands from `.ci/config.yml`. A fork PR that Jenkins builds is a stranger
   running code as root on your machine.
2. Only trusted people can trigger builds.
3. Production credentials are never bound in a stage a PR build can reach.

Jenkins on a public hostname is a scanned target with a history of
unauthenticated RCE. Either put Cloudflare Access in front of it, or — better
where a private network already exists — publish only `/github-webhook/` and
reach the UI over the tailnet. An auth-bypass CVE cannot be reached by a request
that gets a 404 at Cloudflare's edge.

---

## Deployment

Build once, promote the same digest. The image deployed to production is
byte-identical to the one that passed the tests; `:latest` is refused outright.

```bash
deploy.sh deploy --target remote --app my-app --image ghcr.io/ns/app:412-a1b2c3
```

Local and remote use the same code path — a Docker context over SSH — so the
procedure that works during an incident is the one already exercised on every
deploy. Health-gated with `compose up --wait` plus an end-to-end readiness
probe; on failure the previous tag is restored automatically and the build fails
loudly. Deploy state is recorded per app per target, so a rollback needs no
archaeology.

Production requires a human `input` approval. Everything before it is automatic.

---

## Things that only surface by running it

A short list of failures that cost real time, kept because none of them are
guessable from documentation.

**Docker-outside-of-docker bind mounts.** An agent runs
`docker run -v $(pwd):/src`, but the daemon is the *host's*, so that path is
resolved against the host filesystem where the agent's workspace does not exist.
Docker silently creates an empty directory and every scanner analyses nothing.
The fix is to bind-mount the workspace at an **identical absolute path** inside
and outside.

**Named volumes only inherit ownership if the path exists in the image.** It did
not, so the volume came up root-owned and every Go build failed with
`mkdir /home/jenkins/.cache/go-build: permission denied`.

**haproxy's `timeout http-keep-alive 10s`** in the socket proxy. Jenkins pools
connections and reuses them after longer idles, hitting dead sockets:
`NoHttpResponseException` → *Waiting for next available executor* with no agent
ever starting. Three sessions of blind restarts before the cause was found.

**A branch with an open pull request should build once.** Without
`buildOriginBranchWithPR(false)` every push builds twice — as a branch, where AI
review and SonarQube correctly skip because there is no PR context, and as the
PR. The branch job is the one people open by habit, and *"Stage AI review
skipped due to when conditional"* reads exactly like a bug.

**`--latest false` on `jenkins-plugin-cli`** resolves transitive dependencies to
their *minimum* compatible versions. That produced a genuinely broken set:
declarative pipeline, docker-workflow and workflow-aggregator all failed to
load. Reproducibility comes from pinning explicit versions, not from that flag.

---

## Rollout policy

Gates are turned on from evidence, never optimism. **Measure the tool once, then
decide** — turning one on blind is how you discover 15,000 pre-existing findings
on a Friday afternoon.

On the Nuxt project, enabling lint blind would have blocked every pull request:
4,825 errors and 10,481 warnings across 311 files, of which ~88% turned out to
be mechanically auto-fixable. Until that normalisation lands, lint runs on
**changed files only**, so the debt shrinks with each PR instead of blocking all
of them.

| Gate | Enabled when |
| --- | --- |
| Security (Semgrep) | Day one — the one gate worth its friction |
| Tests | Once the suite passes |
| Lint / typecheck | After measuring, and after any normalisation commit |
| Coverage | Ramp 0 → 30 → 50 → 80 on new code |
| Dependency CVEs | After the existing backlog is triaged |
| AI review | Advisory; gate only after it has been right for a month |

And the gate only matters if the platform enforces it: **branch protection must
require the check**. Jenkins reporting a failure does not stop a merge on its
own — without that rule every gate is advisory, whatever the config says.
