# Telegram AI PC Controller

`8 minutes read` · Aug 23, 2026

Tech: `Go`, `Telegram Bot API`, `WebSocket`, `SQLite`, `Docker`, `Linux`, `OpenAI-compatible LLM`

## Summary

Control and inspect a PC from Telegram, through an AI assistant that can only
act via a fixed set of audited tools.

The design rests on one separation: **the AI decides what to do; it never
decides what is allowed.**

```
User  →  "What should happen?"
AI    →  "What do I want to do?"          chooses a tool and arguments
Bot   →  "Is this allowed?"               permission tier, approval, audit
User  →  "Do I consent?"                  Telegram button, anything mutating
Agent →  "Can this safely be done here?"  path sandbox, command policy, timeout
PC    →  executes
```

Every one of those layers can refuse. The model can be talked into *asking* for
anything; it cannot talk any of the layers below it into agreeing. That is the
whole point — a prompt-injection payload that reaches the model still has to get
past a permission tier, a human button press, and a sandbox that never saw the
prompt.

---

## What it looks like

```
You:  what is using port 3000?

Bot:  🔄 Checking network connections

Bot:  node (pid 41822) is listening on 127.0.0.1:3000.
      It was started from ~/projects/api.
```

```
You:  run the tests in ~/projects/api

Bot:  ⚠️ Approval required

      Tool: run_command
      Command   go test ./...
      Directory /home/nibros/projects/api

      [ Approve ]  [ Deny ]
```

Read-only questions answer immediately. Anything that changes the machine stops
and waits for a button.

---

## Components

| Piece | Runs where | Job |
| --- | --- | --- |
| **Telegram Bot** | Bot backend | Interface, authentication, approval prompts |
| **AI Orchestrator** | Bot backend | Request → tool calls → results → reply |
| **Permission gate** | Bot backend | SAFE / APPROVAL / DANGEROUS per call |
| **Approval manager** | Bot backend | Holds the operation, then expires it |
| **Agent Gateway** | Bot backend | Authenticated WebSocket the agents dial into |
| **PC Agent** | Your PC | Re-validates and executes — the final boundary |
| **AI Gateway** | Existing service | Model routing, OpenAI-compatible |

The PC Agent makes an **outbound** connection. Nothing on the machine listens on
a port, and nothing about it is exposed to the internet. That single choice
removes the entire class of "someone found my agent port" problems.

---

## Permission tiers

**SAFE** — runs immediately, read-only.

`get_system_info` `get_processes` `get_network_connections` `disk_usage`
`list_directory` `read_file` `git_status` `git_diff` `git_log`

**APPROVAL** — pauses for a Telegram button.

`write_file` `delete_file` `move_file` `run_command` `stop_process`
`git_checkout` `git_pull` `take_screenshot`

**DANGEROUS** — hidden entirely unless explicitly enabled, and then still
prompts, with an explanation of what will be lost.

### Tier is reached by arguments, not just by name

This is the part that matters. `delete_file` is APPROVAL; `delete_file` with
`recursive: true` is DANGEROUS. So is `stop_process` with `force: true`,
`git reset --hard`, `docker system prune`, `docker run --privileged`, or a bind
mount of the host filesystem.

A tool's baseline tier can be re-tiered in config. **Argument-derived risk can
escalate above what you set; it can never fall below it.** Configuration can
make something stricter, never weaker than the code believes it to be.

---

## What actually stops things

**Filesystem.** Every path is resolved before it is judged — symlinks followed,
`../` collapsed — then checked against the allowlist. Judging the string a user
typed rather than the path it resolves to is how sandboxes get escaped.

**Terminal.** Commands are matched against a policy, not passed to a shell to
figure out. Approval is per operation, and the approval names the exact command
and directory, so the thing you approve is the thing that runs.

**Approvals expire.** An approval that waits forever becomes an approval someone
taps to clear a notification.

**Prompt injection.** A repository's README can tell the model whatever it
likes. It cannot raise the tier of the tool the model then asks for, and it
cannot press the button.

**Secrets** never reach the model, and the audit log records what was done
rather than what was said.

---

## Design decisions worth keeping

**One separation, enforced twice.** The bot decides permission and the agent
re-validates. Duplicated work on purpose: a bug in one layer does not become an
execution on the machine.

**Approval is consent, not notification.** Anything mutating stops. The prompt
shows the literal command and the literal directory — not a summary the model
wrote, which could describe something other than what will run.

**Outbound-only agent.** The threat model shrinks to "who can reach the bot",
which Telegram authentication already answers.

**A fixed tool catalogue.** The model chooses from a list; it cannot invent a
capability. Adding a tool is a code change and a review, not a prompt change.

---

## Deliberate limitations

Things it will not do, and why that is the design rather than a gap:

- **No arbitrary shell.** `run_command` is policy-matched. If the policy does
  not know a command, the answer is no.
- **No writing outside the allowlist**, however the path is spelled.
- **No silent mutation.** If it changes the machine, a human pressed a button.
- **No memory of secrets.** Anything sensitive stays out of model context.

The honest cost: it is less capable than handing an agent a shell. That is the
trade being made, and it is worth making — the failure mode of the alternative
is unbounded.
