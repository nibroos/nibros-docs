# Quotation

> **Area:** Sales · **Tables:** `quotations`, `quo_dt`, `quo_dt_boms` · **Role:** Full-stack (model, service, repository, UI)

The quotation is the entry point of the sales flow — a priced offer to a customer that, once accepted, becomes a [Sales Order](/s-erp/modules/sales-order).

## Purpose

Let a salesperson build a multi-line, multi-component offer with correct tax and discounting, revise it as the customer negotiates, and hand a clean total off to the rest of the pipeline.

## Data model — three levels

Quotations are modelled as **header → detail → BOM**:

| Level | Table | Holds |
|---|---|---|
| Header | `quotations` | customer, branch, currency, order/payment type, tax config, discount config, computed totals, `quo_no`, `rev_no`, `status`. |
| Detail | `quo_dt` | one row per product line (qty, price, line total). |
| BOM | `quo_dt_boms` | the component items that make up each product line — `product_id`, `item_id`, `item_unit_id`, a snapshot `item_json`, and a generated code. |

The BOM level is what makes this a *manufacturing* quotation: a quoted product can be exploded into the raw items it consumes, each with its own unit.

## Money & tax

The header carries the full commercial calculation:

- **Discount** in three modes — fixed amount (`disc_am`), percentage (`disc_perc` → `disc_perc_am`), or a final override (`disc_final`) — selected by `disc_type`.
- **VAT** toggled by `is_vat` at `vat_perc`.
- **PPh23** (Indonesian withholding) toggled by `is_pph23` at `pph23_perc`.
- **Markup** (`markup_perc`) for cost-plus pricing.
- **Exchange rate** when the quote currency differs from base.

`subtotal → total_discount → total_vat → total_pph23 → grand total` is computed in the service layer so the math lives in one place (see [Document Flow](/s-erp/engineering/document-flow)).

## Revisions & status

A quotation isn't static — customers negotiate. `rev_no` tracks amendments and `status` drives the lifecycle (draft → sent → accepted/rejected). Accepting a quotation is what seeds a sales order, carrying the header, details, and BOM forward.

## Engineering notes

- **Item snapshotting** — `item_json` on the BOM row stores a copy of the item at quote time, so later master-data edits don't silently rewrite historical quotes.
- **Generated numbering** — `quo_no` comes from the configurable [Identifier](/s-erp/getting-started/glossary) module rather than a raw sequence, so numbering format is client-configurable.
- **List/filter/export** — the index endpoint uses the shared [list-query pattern](/s-erp/engineering/list-query-pattern) (filter bag, concurrent count+select, order/paginate) and supports Excel/PDF/CSV export.
- **Utilities** — quotation-specific helpers live in `utils/quotation_utils.go` (total recomputation, BOM assembly).

## Frontend

`pages/sales/quotations` — a Vuetify master/detail form with a draggable line-item table, per-line BOM editor, live total recalculation as the user types, currency-masked inputs, and Zod validation before submit. Table filters and pagination are **persisted in Pinia** so returning to the list keeps the user's context.
