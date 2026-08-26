# S-ERP — Manufacturing ERP System

::: info
Full-stack engineering work on **S-ERP**, a manufacturing/trading ERP built with a **Go (Fiber)** backend and a **Nuxt 3 + Vuetify** front end. This section documents the modules I built, the architecture I chose, and the problems I solved — written for my future self and as a portfolio reference.

It contains **no credentials, customer data, or internal URLs** — only the engineering, at a level safe to share.
:::

## What is S-ERP?

**S-ERP** is an end-to-end ERP that runs the commercial back office of a manufacturing/trading company: turning a **quotation** into a **sales order**, buying materials through **purchase** and **request orders**, tracking goods with **inventory in/out** and **stock closing**, and billing through four invoice types — **sales invoice**, **down-payment (DP) invoice**, **invoice adjustment**, and **maintenance invoice** — all with Indonesian tax handling (**VAT** and **PPh23** withholding).

I own **both sides**: a Go/Fiber REST backend (41 modules, ~430 endpoints, 150+ migrations) behind an Nginx gateway, and a Nuxt 3 single-page front end with a reusable table/form/filter system.

<div class="brand-tip">
  New here? Start with the
  <a href="/s-erp/getting-started/introduction">Introduction</a>.
</div>

## My role

**Full-stack Developer — PT Yubi Technology** · this is the Go-based ERP (a sibling product to the Laravel-based [D-ERP](/d-erp/getting-started/introduction)).

I designed the data model, the request/repository pattern, the money & tax math, the background-job pipeline (Asynq + cron + RabbitMQ), and the observability stack (Prometheus, Grafana, Jaeger, Elasticsearch) — plus the entire Nuxt front end.

## Flagship contributions

- **Quotation → Sales Order → Invoice** document pipeline with header/detail/BOM structure, revisions, and status transitions. → [details](/s-erp/modules/quotation)
- **Purchasing** — purchase orders and internal request orders feeding inventory. → [details](/s-erp/modules/purchase-order)
- **Inventory in/out** with stock movement, stock closing, and an async **stock-sync** worker. → [details](/s-erp/modules/inventory)
- **Four invoice types** — sales, DP, adjustment, and maintenance — with VAT/PPh23, discounts, DP allocation, and an **email-on-approval** workflow. → [details](/s-erp/modules/invoice-maintenance)
- A **generic list/filter/paginate pattern** and **Excel/PDF export** shared across all 41 modules. → [details](/s-erp/engineering/list-query-pattern)
- **Real-time Chat + an AI assistant** that answers from live ERP data through a *provably safe* read-only database boundary (Postgres `NOLOGIN` role + read-only views + a SQL guard). → [details](/s-erp/modules/chat-ai)

See the full set on the [Modules](/s-erp/modules/) page, the [Engineering](/s-erp/engineering/) deep-dives, and the [Resume Highlights](/s-erp/resume-highlights) for résumé-ready bullets.

## Technology stack

**Backend:** Go 1.25 · Fiber v2 · GORM + sqlx · PostgreSQL · Redis · Asynq · RabbitMQ · robfig/cron · JWT · excelize · wkhtmltopdf
**Observability:** Prometheus · Grafana · Jaeger (OpenTracing) · Elasticsearch · node/postgres exporters
**Frontend:** Nuxt 3 (SPA) · Vuetify 3 · Pinia (+ persisted state) · Zod · Axios · TipTap · ag-charts · Schedule-X
**Delivery:** Docker Compose · Nginx gateway · systemd timers · Jenkins · k6 / vegeta load tests

Full breakdown on the [Tech Stack](/s-erp/getting-started/tech-stack) page.

## Explore this section

| Page | What's there |
|---|---|
| [Introduction](/s-erp/getting-started/introduction) | Role, product, and the shape of the work. |
| [System Architecture](/s-erp/getting-started/architecture) | The modular monolith, gateway, and worker design, with a diagram. |
| [Tech Stack](/s-erp/getting-started/tech-stack) | Every technology used, by area (backend & frontend). |
| [Glossary](/s-erp/getting-started/glossary) | ERP domain terms (BOM, DP, PPh23, RO, stock closing…). |
| [Modules](/s-erp/modules/) | Deep dives into each business module. |
| [Engineering](/s-erp/engineering/) | Document flow, logging, background jobs, the list pattern, and improvements. |
| [Resume Highlights](/s-erp/resume-highlights) | Résumé-ready bullet points. |
| [Stats](/s-erp/stats) | Quantitative summary of the codebase. |

## Source code

The source code is private and owned by the client / PT Yubi Technology; it is not available for public use. This documentation describes the engineering only.
