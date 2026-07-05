# Modules

The business modules that make up S-ERP, grouped by area. Each page covers the **purpose**, the **data model**, and the **engineering** — at a level safe to keep and share (no credentials, customer data, or internal URLs).

## Sales

| Module | What it does |
|---|---|
| [Quotation](/s-erp/modules/quotation) | Priced customer offers with header / detail / bill-of-materials, tax, discounts, and revisions. |
| [Sales Order](/s-erp/modules/sales-order) | Confirmed customer orders derived from quotations; the bridge into invoicing and inventory. |

## Purchasing

| Module | What it does |
|---|---|
| [Purchase Order](/s-erp/modules/purchase-order) | Supplier orders for materials/goods, feeding inventory-in. |
| [Request Order](/s-erp/modules/request-order) | Internal goods requests that feed purchasing/inventory. |

## Inventory

| Module | What it does |
|---|---|
| [Inventory In / Out](/s-erp/modules/inventory) | Goods movement, stock levels, periodic stock closing, and async stock sync. |

## Invoicing

| Module | What it does |
|---|---|
| [Sales Invoice](/s-erp/modules/sales-invoice) | Billing for delivered goods/services, with VAT & PPh23. |
| [DP Invoice](/s-erp/modules/invoice-dp) | Down-payment (advance) invoices, later allocated against the balance. |
| [Invoice Adjustment](/s-erp/modules/invoice-adjustment) | Corrections / credit-debit notes against existing invoices. |
| [Maintenance Invoice](/s-erp/modules/invoice-maintenance) | Service/maintenance billing with an email-on-approval workflow. |

## Cross-module engineering

The document flow that ties these together, plus the shared list/filter pattern, logging, and background jobs, are covered under [Engineering](/s-erp/engineering/).

## Master data (supporting)

Every module above is backed by master data: **products / MS items / item units**, **customers** (with contracts & emails), **branches / company profile / warehouses**, **VAT & PPh23** rates, **payment / shipping / order / purchase types**, and **RBAC** (users / roles / permissions / groups). Document numbering is driven by a configurable **Identifier** module.
