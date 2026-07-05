# Resume Highlights

Résumé-ready bullet points distilled from this section. Copy, trim, and tailor as needed.

## Headline

> **Full-stack Developer — S-ERP (Manufacturing ERP)** · PT Yubi Technology
> Designed and built a 41-module ERP end to end: a Go/Fiber backend (~430 endpoints, 150+ migrations, PostgreSQL, Redis, RabbitMQ, Asynq, cron) behind an Nginx gateway, plus a Nuxt 3 + Vuetify SPA with a reusable table/filter/export system. Owned the sales→invoice document pipeline, VAT/PPh23 money math, background-job platform, and full observability stack.

## Impact bullets (pick & choose)

### Backend & architecture
- Architected a **Go 1.25 / Fiber** ERP backend of **41 modules** (~430 endpoints) using a consistent controller → service → repository pattern, with **GORM** for writes and **sqlx + raw SQL** for reads over **PostgreSQL** (150+ migrations).
- Ran a **single binary in three modes** (`SERVICE_TYPE` = rest / consumer / scheduler) behind an **Nginx gateway**, plus a separate **Asynq** worker — a pragmatic modular-monolith deployment.
- Implemented **concurrent count + select** list queries (goroutines + `WaitGroup`) so paginated endpoints return rows and totals in one pass.

### Business logic
- Built the **quotation → sales order → invoice** document pipeline with a three-level **header / detail / bill-of-materials** structure, document revisions, and status/approval transitions.
- Delivered **four invoice types** (sales, down-payment, adjustment, maintenance) with **VAT + PPh23 (Indonesian withholding tax)**, multi-mode discounts, **DP allocation**, and balance tracking.
- Engineered **inventory in/out** with stock movement, periodic **stock closing**, and an async **stock-sync** worker.

### Platform & background jobs
- Stood up a **background-job platform**: **Asynq** (Redis) task queue, a DB-driven **cron scheduler** reloadable at runtime, systemd timers, and **RabbitMQ** consumers with retry + **dead-letter queues**.
- Added an **email-on-approval** workflow for maintenance invoices — synchronous DB write, asynchronous email via the message bus.

### Observability & quality
- Instrumented the stack with **Prometheus + Grafana**, **Jaeger** distributed tracing threaded through every layer, and **Elasticsearch** logs; added **k6/vegeta** load tests and a **Jenkins** pipeline.
- Hardened the runtime with layered **panic recovery**, transactional multi-step writes with rollback, JWT with an **algorithm-confusion guard**, and bcrypt hashing.
- Authored a candid internal **code-review** identifying and prioritising security & architecture debt (RBAC enforcement, ORDER BY/IN whitelisting, god-file refactor, test coverage) — see [Improvements](/s-erp/engineering/improvements).

### Frontend
- Built the entire **Nuxt 3 (SPA) + Vuetify 3** front end: a reusable **data-table / filter / form** system with **Pinia-persisted filter state** (survives refresh), **Zod** validation, TipTap rich text, ag-charts dashboards, and **Excel/PDF export**.

## Skills evidenced

**Languages/Frameworks:** Go, Fiber, JavaScript/TypeScript, Vue 3, Nuxt 3
**Data:** PostgreSQL, GORM, sqlx, raw SQL, Redis, query optimisation, migrations
**Async/Platform:** Asynq, RabbitMQ (DLQ), cron, systemd timers, gRPC/protobuf (scaffolded)
**Observability:** Prometheus, Grafana, Jaeger/OpenTracing, Elasticsearch, k6/vegeta
**Frontend:** Vuetify, Pinia (persisted state), Zod, Axios, TipTap, ag-charts, Schedule-X
**Practices:** modular monolith, controller/service/repository, header/detail/BOM modelling, money & tax math, Docker Compose, Nginx, Jenkins CI
**Domains:** ERP, manufacturing/trading, invoicing & tax (VAT/PPh23), inventory

## One-paragraph summary

> Full-stack engineer on S-ERP, a Go/Fiber + Nuxt 3 manufacturing ERP. I built 41 backend modules (~430 endpoints, 150+ migrations) covering the full commercial cycle — quotation, sales & purchase orders, request orders, inventory in/out with stock closing, and four invoice types with VAT/PPh23 tax — behind an Nginx gateway, with a Redis/Asynq/RabbitMQ/cron background-job platform and Prometheus/Jaeger/Elasticsearch observability. On the front end I built a reusable Vuetify data-table/filter/export system with persisted state. Comfortable owning features end to end, from SQL and money math to Vue components, deployment, and a written code-review of the system's own tech debt.
