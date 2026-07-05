# Tech Stack

A consolidated view of the technologies used across S-ERP, backend and frontend. Module-specific notes live on each [module page](/s-erp/modules/).

## Backend — language & framework

| Area | Tech |
|---|---|
| Language | Go **1.25** |
| Web framework | [Fiber](https://gofiber.io/) v2 (REST) |
| RPC (scaffolded) | gRPC + Protobuf (`proto/`, interceptors) — present but currently disabled in favour of REST |
| Validation | `go-playground/validator/v10` + per-module form requests |
| Auth | `golang-jwt/jwt/v4` (HMAC-only guard), bcrypt password hashing |

## Backend — data & caching

| Area | Tech |
|---|---|
| Primary DB | PostgreSQL (`lib/pq`, `jackc/pgx`) |
| ORM (writes) | GORM (`gorm.io/gorm` + `driver/postgres`) for CRUD & transactions |
| Reads | sqlx (`jmoiron/sqlx`) + hand-written SQL for lists/joins/reports |
| Migrations | `golang-migrate` style up/down SQL (150+ migration files) |
| Cache | Redis (`go-redis/redis` v8 & v9) |
| Extensions | `pgcrypto` (for `gen_salt`/hashing helpers) |

## Backend — background processing

| Capability | Tech |
|---|---|
| Task queue | [Asynq](https://github.com/hibiken/asynq) (Redis-backed) — welcome/reminder emails and deferred work |
| Message bus | RabbitMQ (`rabbitmq/amqp091-go`) — email & stock-sync consumers with retry + **dead-letter queues** |
| Cron | `robfig/cron/v3`, schedules loaded from DB and **reloadable at runtime** |
| OS scheduling | systemd `.service` + `.timer` units (e.g. daily stock jobs) |

## Backend — reporting & documents

| Capability | Tech |
|---|---|
| Excel export | `xuri/excelize/v2` |
| PDF export | `SebastiaanKlippert/go-wkhtmltopdf` + `boombuler/barcode` (barcodes/Qstill) |
| Email | SMTP + HTML templates (`service/templates`) |

## Observability & delivery

| Area | Tech |
|---|---|
| Metrics | Prometheus (`prometheus/client_golang`) → Grafana dashboards (Postgres 9628, Node 1860) |
| Exporters | `postgres-exporter`, `node-exporter` |
| Tracing | Jaeger + OpenTracing (`opentracing-go`, `uber/jaeger-client-go`), spans threaded through layers |
| Logs | Elasticsearch |
| CI/CD | Jenkins (`Jenkinsfile`) |
| Containers | Docker Compose — `docker-compose-dev.yml`, `-test.yml`, `.yml`; Nginx gateway image |
| Load testing | k6 (`load-test/`) and vegeta (`target.txt`) |

## Frontend

| Area | Tech |
|---|---|
| Framework | Nuxt 3 (**SPA / `ssr: false`**) + Vue 3 |
| UI kit | Vuetify 3 (+ MDI icons) |
| State | Pinia + `@pinia-plugin-persistedstate` (persisted filters & auth) |
| HTTP | Axios + `qs` (query encode/decode composables) |
| Validation | Zod |
| Rich text | TipTap + `vuetify-pro-tiptap` (ticket/notes editing) |
| Charts | ag-charts-vue3 (dashboard) |
| Calendar | Schedule-X (`@schedule-x/vue`) for schedules |
| Inputs | `@vuepic/vue-datepicker`, `vue-currency-input`, `maska`, `vuedraggable` |
| Alerts | SweetAlert2 (`vue-sweetalert2`) |

## Notable engineering practices

- **Consistent module skeleton** — every module is a controller → service → repository triple with matching routes, DTOs, form-request validators, and migrations.
- **Header / detail / BOM** document model — sales & purchase documents are three-level (document → line items → bill-of-materials) with computed totals.
- **Concurrent count + select** — list endpoints fetch rows and total in parallel goroutines.
- **Persisted filter state** — the front end saves table filters/sort/pagination in Pinia (survives refresh), encoded via `qs`.
- **Feature-rich ops** — Prometheus + Jaeger + load tests wired up from the start, not bolted on.

Honest trade-offs and what I'd improve are catalogued in [Improvements](/s-erp/engineering/improvements).
