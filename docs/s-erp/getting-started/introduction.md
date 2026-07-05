# Introduction

::: info
This section documents my full-stack work on **S-ERP**, a manufacturing/trading ERP. It captures the systems I built and the problems I solved — with no credentials, customer data, or internal URLs.
:::

## What is S-ERP?

**S-ERP** is an ERP for a manufacturing/trading business. It covers the commercial life-cycle end to end:

- **Sales** — quotations, sales orders.
- **Purchasing** — purchase orders, internal request orders.
- **Inventory** — goods in / goods out, stock levels, periodic stock closing.
- **Invoicing** — sales invoices, down-payment (DP) invoices, invoice adjustments, and maintenance invoices — with **VAT** and **PPh23** (Indonesian withholding tax).
- **Master data** — products, items, units, customers, branches, warehouses, company profile, and RBAC (users / roles / permissions).
- **CRM & support** — customers, contacts, tickets, and email correspondence.

It's a sibling to the Laravel-based [D-ERP](/d-erp/getting-started/introduction): same problem space, but this one is built on a **Go** backend and a **Nuxt 3** front end.

## My role

**Full-stack Developer — PT Yubi Technology.**

I own the whole stack:

- **Backend** — a Go / Fiber REST API organised into 41 modules (controller → service → repository), with GORM + sqlx over PostgreSQL, Redis caching, an Asynq task queue, RabbitMQ consumers, and a cron scheduler.
- **Frontend** — a Nuxt 3 SPA with Vuetify, Pinia (with persisted filter state), Zod validation, and a reusable table/form/filter/export system.
- **Ops** — Docker Compose stack, Nginx gateway, Prometheus/Grafana/Jaeger/Elasticsearch observability, systemd timers, and k6/vegeta load tests.

I own features end-to-end — from the SQL and money math to the Vue components and the deployment pipeline.

## Timeline & shape of the work

The build follows the ERP document flow, module by module. The migration history (150+ files) traces the order things were built:

| Phase | Theme |
|---|---|
| **Foundations** | Users, RBAC (roles/permissions/groups), identifiers, contacts, addresses — the master-data spine. |
| **Company & catalog** | Company profiles, branches, VAT histories, customers, products, item units. |
| **Sales pipeline** | Quotations (header / detail / BOM), sales orders, request orders. |
| **Purchasing & inventory** | Purchase orders, inventory in/out, stock, stock closings. |
| **Invoicing** | Sales invoices, DP invoices, invoice adjustments, maintenance invoices — plus VAT/PPh23 math. |
| **Platform** | Scheduler, Asynq worker, RabbitMQ consumers (email, stock sync), observability, export (Excel/PDF), load tests. |

See [Stats](/s-erp/stats) for the quantitative breakdown.

## Contribution

A résumé-style summary of what I delivered:

- Designed and built a **41-module Go/Fiber ERP backend** (~430 endpoints, 150+ migrations) using a consistent controller → service → repository pattern behind an Nginx gateway.
- Implemented the **quotation → sales order → invoice** document pipeline with a three-level header/detail/**BOM** structure, document revisions, and status/approval transitions.
- Built **four invoice types** (sales, DP, adjustment, maintenance) with **VAT + PPh23** tax, multi-mode discounts, DP allocation, and balance tracking.
- Engineered the **inventory in/out** flow with stock movement, periodic **stock closing**, and an async **stock-sync** worker over RabbitMQ (with retries + dead-letter queues).
- Stood up a **background-job platform**: Asynq (Redis) task queue, a **robfig/cron** scheduler reloadable at runtime, systemd timers, and RabbitMQ consumers.
- Instrumented **observability** end-to-end — Prometheus metrics, Grafana dashboards, Jaeger tracing threaded through the layers, Elasticsearch logs — and added **k6/vegeta** load tests.
- Built the entire **Nuxt 3 + Vuetify** front end: a reusable data-table/filter/form system with **Pinia-persisted filter state**, Zod validation, and Excel/PDF export.

## Technology stack

### Backend
- [Go](https://go.dev/) 1.25 with the [Fiber](https://gofiber.io/) v2 web framework
- [GORM](https://gorm.io/) (writes/CRUD) + [sqlx](https://github.com/jmoiron/sqlx) (reads/raw SQL) over [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/) cache, [Asynq](https://github.com/hibiken/asynq) task queue, [RabbitMQ](https://www.rabbitmq.com/) consumers, [robfig/cron](https://github.com/robfig/cron)
- [JWT](https://github.com/golang-jwt/jwt) auth (bcrypt), [validator/v10](https://github.com/go-playground/validator), [excelize](https://github.com/xuri/excelize) (Excel), [wkhtmltopdf](https://github.com/SebastiaanKlippert/go-wkhtmltopdf) + barcode (PDF)

### Observability & ops
- [Prometheus](https://prometheus.io/) + [Grafana](https://grafana.com/), [Jaeger](https://www.jaegertracing.io/) / OpenTracing, [Elasticsearch](https://www.elastic.co/)
- [Docker](https://www.docker.com/) Compose, [Nginx](https://nginx.org/) gateway, systemd `.service`/`.timer`, Jenkins, k6 / vegeta

### Frontend
- [Nuxt 3](https://nuxt.com/) (SPA mode) + [Vuetify 3](https://vuetifyjs.com/), [Pinia](https://pinia.vuejs.org/) with persisted state
- [Zod](https://zod.dev/), [Axios](https://axios-http.com/), [TipTap](https://tiptap.dev/) (rich text), [ag-charts](https://www.ag-grid.com/charts/), [Schedule-X](https://schedule-x.dev/) (calendar)

Full breakdown on the [Tech Stack](/s-erp/getting-started/tech-stack) page.

## Source code

The source code is private and owned by the client / PT Yubi Technology; it is not available for public use.
