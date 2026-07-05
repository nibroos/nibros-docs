# Stats

A quantitative summary of the S-ERP codebase. (Numbers reflect a snapshot of the repository; they're indicative of scope, not an official metric.)

## Backend scale

| Metric | Count |
|---|---:|
| Business modules | **41** |
| REST controllers | 41 |
| Services | 41 |
| Repositories | 41 |
| Route files | 39 |
| HTTP endpoints | ~**430** (428 `POST`, 3 `GET`) |
| Database migration files | **154** |
| GORM models | ~55 |
| RabbitMQ consumers | 3 (+ DLQs) |
| Runtime modes (`SERVICE_TYPE`) | 3 — rest / consumer / scheduler |

## Domain coverage

| Area | Modules |
|---|---|
| **Sales** | Quotation (+ detail + BOM), Sales Order (+ detail + BOM) |
| **Purchasing** | Purchase Order (+ detail), Request Order (+ detail) |
| **Inventory** | Inventory in/out (+ detail), Stock, Stock Closing |
| **Invoicing** | Sales Invoice, DP Invoice, Invoice Adjustment, Maintenance Invoice |
| **Masters** | Product, MS Item, Item Unit, Customer (+ contract/email), Branch (+ item), Company Profile, Warehouse, VAT history, PPh23, payment/shipping/order/purchase types |
| **Access & CRM** | Users, Roles, Permissions, Groups, Contacts, Addresses, Tickets, Letters, Sent Emails |

## Frontend scale

| Metric | Count |
|---|---:|
| Route sections | 9 (dashboard, masters, sales, purchases, inventories, invoices, crm, schedules, profile) |
| Pinia store groups | 8 (masters, orders, purchases, invoices, inventories, supports, dashboard, configs) + auth |
| Reusable composables | ~20 (`useApi`, `useMyFetch`, `useEncodeQuery`, `useValidations`, …) |

## Observability & quality tooling

| Tool | Purpose |
|---|---|
| Prometheus + Grafana | Request/DB/host metrics + dashboards |
| Jaeger / OpenTracing | Distributed traces threaded through the layers |
| Elasticsearch | Log aggregation |
| k6 + vegeta | Load testing |
| Jenkins | CI pipeline |

## God-files worth knowing about

A handful of files carry a disproportionate amount of logic (candidates for the refactor in [Improvements](/s-erp/engineering/improvements)):

| File | ~Lines |
|---|---:|
| `inventory_repository.go` | 4,700 |
| `sales_order_repository.go` | 4,053 |
| `dtos.go` | 2,912 |

These reflect the copy-paste list/filter/paginate pattern repeated across 36+ repositories — the single biggest lever for reducing the codebase and its bug surface.
