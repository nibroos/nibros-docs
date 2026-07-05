# DP Invoice (Down Payment)

> **Area:** Invoicing · **Tables:** `invoice_dp`, `invoice_dp_dt` · **Role:** Full-stack

A DP invoice bills the customer for an **advance payment** before goods are fully delivered. It's later allocated against the final [Sales Invoice](/s-erp/modules/sales-invoice) balance.

## Purpose

Support the common commercial pattern of "pay X% up front": collect a down-payment against a [Sales Order](/s-erp/modules/sales-order), then net it off when the full invoice is raised — without double-counting.

## Data model

| Level | Table | Holds |
|---|---|---|
| Header | `invoice_dp` | customer, branch, currency, dates, tax config, DP amount/percentage, totals, `status`, DP invoice number. |
| Detail | `invoice_dp_dt` | the lines/products the DP is taken against. |

## What I built

- DP invoice CRUD with the shared list/filter/export pattern.
- **Allocation logic** — a DP is recorded against an SO so that when the final sales invoice is issued, `total_dp_products` reduces the `total_balance_products` (the remaining amount owed). This keeps the ledger honest across the DP → invoice → balance chain.
- Tax handling on the DP itself (VAT/PPh23) via `utils/invoice_dp_utils.go`, since a down-payment is itself a taxable event.

## Engineering notes

- The trickiest part is **not double-taxing or double-counting**: the DP carries its own tax, and the final invoice must credit the DP net amount rather than the gross. The math is centralised in the service/util layer so DP and final-invoice logic stay in sync.

## Frontend

`pages/invoices/invoice-dps` — a down-payment form with SO linkage, DP amount/percentage entry, and live balance preview. Filters persist via Pinia; export supported.
