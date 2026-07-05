# Sales Order

> **Area:** Sales · **Tables:** `sales_orders`, `so_dt`, `so_dt_boms` · **Role:** Full-stack

A sales order (SO) is a **confirmed** customer order. It typically originates from an accepted [Quotation](/s-erp/modules/quotation) and is the bridge from sales into inventory and invoicing.

## Purpose

Capture what the customer has actually committed to buy — locked quantities and prices — and drive downstream fulfilment (goods out) and billing ([Sales Invoice](/s-erp/modules/sales-invoice), [DP Invoice](/s-erp/modules/invoice-dp)).

## Data model

Same three-level shape as the quotation, so a quote converts cleanly:

| Level | Table | Holds |
|---|---|---|
| Header | `sales_orders` | customer, branch, currency, tax/discount config, totals, order number, `status`. |
| Detail | `so_dt` | ordered product lines (qty, price, line total). |
| BOM | `so_dt_boms` | the item components per line, carried over from the quotation. |

Because SO mirrors the quotation structure, converting an accepted quote is a structured copy (header + details + BOM) with a new document number and a fresh status track.

## What I built

- **Quotation → SO conversion** that preserves the header commercials, detail lines, and BOM while re-numbering and resetting the lifecycle.
- **Total recomputation** in the service layer (discount → VAT → PPh23 → grand total), so an SO's numbers are recalculated rather than blindly trusted from the quote.
- One of the largest repositories in the system (`sales_order_repository.go`, ~4,000 lines) — a candidate for the generic-list refactor described in [Improvements](/s-erp/engineering/improvements).

## Downstream links

- **Inventory** — confirmed lines drive [goods-out](/s-erp/modules/inventory) movements.
- **Invoicing** — an SO can be billed in full ([Sales Invoice](/s-erp/modules/sales-invoice)) or partially in advance ([DP Invoice](/s-erp/modules/invoice-dp)), with the DP later allocated against the balance.

## Frontend

`pages/sales/sales-orders` — mirrors the quotation UI (master/detail + BOM), plus actions to convert from a quotation and to spawn invoices. Filters and sort persist via Pinia; lists export to Excel/PDF/CSV.
