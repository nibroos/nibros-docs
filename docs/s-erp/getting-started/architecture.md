# System Architecture

## The big picture

The Nuxt SPA talks to a single **Nginx gateway**, which reverse-proxies to a **Go binary**. That one binary runs in three modes selected by a `SERVICE_TYPE` environment variable — **REST API**, **RabbitMQ consumer**, or **cron scheduler** — plus a separate **Asynq worker** for the Redis-backed task queue. All of it shares one PostgreSQL database and one Redis instance.

```
┌───────────────────────────────────────────────────────────────────────────┐
│                    S-ERP Web App  (Nuxt 3 SPA + Vuetify)                    │
│              data tables · forms · Pinia-persisted filters · export         │
└───────────────────────────────────────────────────────────────────────────┘
                                      │  JWT (Bearer), JSON body
                                      ▼
┌───────────────────────────────────────────────────────────────────────────┐
│                         Nginx Gateway  (port 4050)                          │
│                     reverse proxy · TLS termination · CORS                   │
└───────────────────────────────────────────────────────────────────────────┘
                                      │
        ┌─────────────────────────────┼─────────────────────────────┐
        ▼                             ▼                             ▼
┌──────────────────┐        ┌──────────────────┐        ┌──────────────────┐
│ SERVICE_TYPE=rest│        │SERVICE_TYPE=     │        │SERVICE_TYPE=     │
│ Fiber REST API   │        │  consumer        │        │  scheduler       │
│ 41 modules       │        │ RabbitMQ workers │        │ robfig/cron      │
│ :4001            │        │ :4010 (health)   │        │ (reloadable)     │
└──────────────────┘        └──────────────────┘        └──────────────────┘
        │                             │                             │
        │                    ┌──────────────────┐                  │
        │                    │  Asynq worker    │  (Redis queue)   │
        │                    │  welcome/reminder│                  │
        │                    └──────────────────┘                  │
        └─────────────────────────────┼─────────────────────────────┘
                                       ▼
┌───────────────────────────────────────────────────────────────────────────┐
│   PostgreSQL (app data, GORM + sqlx)   ·   Redis (cache + Asynq + state)    │
│   RabbitMQ (email / stock-sync, DLQ)   ·   Elasticsearch (logs)             │
└───────────────────────────────────────────────────────────────────────────┘
                                       │  metrics / traces
                                       ▼
        Prometheus (:9090)  →  Grafana        Jaeger / OpenTracing spans
```

## Request path (per REST call)

Every protected endpoint flows through the same middleware chain and layering:

```
Nginx → Fiber
   → SafetyMiddleware        (panic recovery + stack trace)
   → JWTMiddleware           (verify token, load user/roles/permissions/bid)
   → JaegerTracingMiddleware (start a span, thread it down)
   → PromDurationMiddleware  (record request latency by path)
   → ConvertRequestToFilters (flatten JSON body → filter map)
   → Controller  → Service  → Repository  → PostgreSQL
```

- **Controller** — parses the request, calls the service, shapes the JSON response.
- **Service** — business rules and money/tax math; owns transactions for multi-step writes.
- **Repository** — data access (sqlx for reads, GORM for writes), pagination, filtering, ordering.

The list repositories run the **count** and **select** queries concurrently (two goroutines + `WaitGroup`) so a paginated list returns its rows and total in one round of work.

## Layer responsibilities

### Gateway — Nginx
The single public entry point (port **4050**). It reverse-proxies to the REST service, terminates TLS in production, and centralises CORS. There is no Go API gateway — the "gateway" is Nginx config (`gateway/nginx.conf`, `nginx-prod.conf`).

### REST API — `SERVICE_TYPE=rest`
The Fiber app (`:4001`). Hosts all 41 modules — masters, sales, purchasing, inventory, invoicing, CRM. Auth (`/auth/login`, `/auth/register`) is public; everything else sits behind JWT.

### Consumer — `SERVICE_TYPE=consumer`
Runs the RabbitMQ consumers with a small health endpoint on `:4010`. Consumers: **send-email-solution** (ticket replies), **sync-stock** (inventory reconciliation), and **bulk-send-email-approved-invoice-maintenance** (email on invoice approval). Each has retry (max 3, 5s delay) and a **dead-letter queue** for poison messages.

### Scheduler — `SERVICE_TYPE=scheduler`
A `robfig/cron` scheduler that loads its jobs from the `schedulers` table at boot and can **reload schedules at runtime** (`ReloadSchedules`). Backed on the host by systemd `.service` + `.timer` units for OS-level jobs (e.g. daily stock tasks).

### Worker — Asynq
A separate process consuming the **Redis-backed Asynq queue** for deferred tasks (welcome email, reminder email, and other enqueued work), decoupled from the request path.

## Data layer

Two access layers sit on the same connection pool:

- **GORM** — CRUD and transactional writes (create/update/delete with rollback).
- **sqlx + raw SQL** — hand-written read queries for lists, joins, and reports where performance matters.

`main.go` opens GORM, borrows its underlying `*sql.DB`, and wraps it with sqlx, so both share one pool. (This dual-layer choice is revisited in [Improvements](/s-erp/engineering/improvements).)

## Cross-cutting concerns

- **Auth**: JWT carries `roles`, `permissions`, and `bid` (branch id); an algorithm-confusion guard restricts parsing to HMAC. Passwords are bcrypt.
- **Observability**: Prometheus request metrics, Jaeger spans threaded controller→service→repository, Elasticsearch logs, plus `/health` endpoints.
- **Resilience**: layered panic recovery (custom `SafetyMiddleware` + Fiber `recover`), transactional multi-step writes, and consumer retries with DLQs.
- **Delivery**: Docker Compose (dev/test/prod) → Nginx + Go binary + workers; Jenkins pipeline; k6/vegeta load tests.

## A worked example — approving a maintenance invoice

1. Front end submits an **approve** action on a maintenance invoice.
2. REST service validates the state transition (`approved_status`), records `approved_by_id` + timestamp inside a DB transaction, and bumps the revision (`rev_no`).
3. The service **publishes a message** to RabbitMQ ("invoice approved").
4. The **consumer** picks it up and sends the approval email (with retry + DLQ on failure).
5. Prometheus records the latency; a Jaeger span captures the whole path.

This decoupling — do the write synchronously, send the email asynchronously — is documented in [Background Jobs](/s-erp/engineering/background-jobs).
