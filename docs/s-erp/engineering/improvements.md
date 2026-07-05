# Improvements

What I'd fix if I took S-ERP further. I wrote a full internal code review of the backend; this is the honest, prioritised summary. Being able to name a system's own weaknesses — with the trade-offs — is part of owning it.

::: tip Why include this?
A portfolio that only lists wins is less credible than one that also shows judgement about what's *not* done. Everything below is a real, identified item with a concrete fix.
:::

## Severity legend

| Tag | Meaning |
|---|---|
| 🔴 Critical | Security hole or data-loss/crash risk — fix before production exposure. |
| 🟠 High | Serious correctness/security/maintainability problem — schedule soon. |
| 🟡 Medium | Real weakness worth fixing. |
| 🔵 Low | Polish / hygiene / DX. |

## Security

### 🔴 Re-enable RBAC + branch scoping
`PermissionMiddleware` exists and works, but every usage in the route files is **commented out** — so any authenticated user can hit every endpoint. The JWT already carries `roles`, `permissions`, and `bid` (branch id); none of it is enforced. **Fix:** enforce permissions centrally per route group (default-deny), and scope list/detail queries by the user's branch unless they hold a cross-branch permission.

### 🔴 Whitelist `ORDER BY`, bind `IN (...)`
List repositories interpolate `order_column`/`order_direction` and `IN (...)` id-lists as raw strings (see [List Pattern](/s-erp/engineering/list-query-pattern)). Column names can't be bound, so they must be **whitelisted**; a safe helper (`GetStringOrDefaultFromArray`) already exists but is used in only ~3 of ~36 repositories. **Fix:** whitelist columns per model, map direction to strict `asc`/`desc`, and split+validate+bind `IN` lists as integers.

### 🔴 Get secrets out of the repo & image
`.env` values were committed and baked into the Docker image. **Fix:** rotate everything, inject secrets at runtime (env/secret store), and keep `.env` out of the build context.

### 🔴 Lock down debug & seeder endpoints
Public `/test-panic` routes and an **unauthenticated seeder** endpoint should not ship. **Fix:** remove panic routes; put the seeder behind auth + a non-prod guard.

### 🟠 Tighten CORS, JWT, and login
Permissive CORS with credentials; long-lived JWTs with no revocation; no login rate-limiting. **Fix:** restrict origins, shorten token lifetime + add revocation/refresh, and rate-limit `/auth/login`.

### 🟡 Stop leaking internal errors; drop root
Raw `err.Error()` is returned to clients, and the container runs as root. **Fix:** map errors to safe messages (log the detail server-side); add a non-root user to the image.

## Architecture

### 🟠 Commit to the modular monolith
It's described as microservices/gRPC, but it's **one binary** switching on `SERVICE_TYPE`, with gRPC scaffolded-but-commented. That's a fine choice — but the half-built scaffolding creates drag. **Fix:** either remove the gRPC/microservice scaffolding and own the monolith, or actually split services. Don't carry both.

### 🟠 Pick one data layer
GORM and sqlx are stacked on the same pool (reads via sqlx/raw SQL, writes via GORM) — two escaping stories, double the surface. **Fix:** standardise on one primary layer; if raw SQL stays for complex reads, wrap it in a builder for safe parameterisation, and configure the pool once.

### 🟠 Extract the generic list builder (kills the god-files)
The list/filter/order/paginate block is copy-pasted across ~36 repositories; `inventory_repository.go` is ~4,700 lines and `sales_order_repository.go` ~4,000. **Fix:** extract one reusable, whitelisted list-query builder; move business logic from repositories into services; consider generics for the CRUD skeleton. This single change closes the SQL-injection class *and* removes thousands of lines.

### 🟡 Make reads RESTful and typed
428 of 431 routes are `POST`, even pure reads, and every body is flattened to a stringly-typed map. **Fix:** use `GET` + query params for reads and typed request DTOs (validator + `dtos` already exist) instead of the global filter bag.

## Concurrency & correctness

### 🟠 Fix the `selectErr` data race
The concurrent count+select goroutines write a shared `selectErr` without synchronisation (a real race under `go test -race`), and there's no cancellation. **Fix:** use `errgroup.Group` with a shared context — race-free, collects the first error, cancels siblings.

### 🟠 Guard nil RabbitMQ
The service is meant to run without a broker, but `defer rabbitmq.Close()` runs on a nil receiver and panics at shutdown. **Fix:** guard the defer / make `Close` nil-safe, or use a no-op publisher when the broker is absent.

### 🟡 Fail fast + graceful shutdown
The REST server retries `Listen` in an infinite loop and has no signal handling. **Fix:** fail fast on unrecoverable listen errors, add `signal.NotifyContext` + `ShutdownWithContext`, and let systemd/Docker handle restarts.

## Testing & quality

### 🟠 Add tests — starting with the money math
There are **zero** `*_test.go` files despite a `mocks/` folder and `testify` in `go.mod`. For a system doing invoice/tax/DP calculations, that's the biggest risk. **Fix:** test auth, the extracted list/query builder (esp. the ORDER BY/IN whitelist), and the money/tax math in the invoice/sales/purchase services. Wire `go test ./... -race` into the existing Jenkins pipeline.

## Ops & docs

- 🟡 Don't publish datastore/management ports (Postgres, RabbitMQ, Elasticsearch) to the public interface in the production compose file.
- 🟡 Script the manual setup steps (editing `schema_migrations` to fix migrations, creating the Grafana role/DB by hand) — make them idempotent.
- 🔵 Consolidate the multiple Dockerfiles (`.dev`, `.test`, `.prod.backup`, `.prod.pass`) into build targets; vendor the wkhtmltopdf fonts instead of pulling them at build time; move committed scratch artifacts out of VCS.

## What's already solid (kept intentionally)

The review also called out what to *keep*:

- **JWT algorithm-confusion guard** (HMAC-only) and **bcrypt** password hashing.
- **Parameterised placeholders** for the `ILIKE`/search filters — the injection gaps are specifically `ORDER BY`/`IN`, not the whole layer.
- **Real observability** — Prometheus, Jaeger spans through the layers, health endpoints, k6/vegeta load tests.
- **Transactions** with rollback around multi-step writes.
- **Layered panic recovery** (custom `SafetyMiddleware` + Fiber `recover`).
- Explicit **connection pooling**, and a **safe ordering helper that already exists** — the ORDER BY fix is mostly adopting it everywhere.

## Remediation order

| # | Item | Severity | Effort |
|---|---|---|---|
| 1 | Rotate secrets; stop baking `.env` into the image | 🔴 | Low |
| 2 | Re-enable RBAC + branch scoping | 🔴 | Med |
| 3 | Whitelist `ORDER BY`; bind `IN (...)` | 🔴 | Med |
| 4 | Remove panic routes; lock down the seeder | 🔴 | Low |
| 5 | Guard nil RabbitMQ; fix `selectErr` race (errgroup) | 🟠 | Low |
| 6 | Restrict CORS; shorten JWT + revocation; login rate-limit | 🟠 | Med |
| 7 | Extract generic list builder; split god-files | 🟠 | High |
| 8 | Add tests (auth, money math, query builder) + CI `-race` | 🟠 | High |
| 9 | Consolidate DB layer; Docker/docs cleanup | 🟡 | Med |
