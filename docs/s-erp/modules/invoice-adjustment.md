# Invoice Adjustment

> **Area:** Invoicing · **Tables:** `invoice_adjustments`, `invoice_adjustment_dt` · **Role:** Full-stack

An invoice adjustment is a **correction** against an existing invoice — a credit or debit note that changes the amount owed without deleting or rewriting the original document.

## Purpose

Give finance an auditable way to fix an issued invoice: a returned item, a price correction, a negotiated discount after the fact. The original stays intact; the adjustment records the delta.

## Data model

| Level | Table | Holds |
|---|---|---|
| Header | `invoice_adjustments` | reference to the target invoice, branch, currency, dates, adjustment total, reason/remark, `status`. |
| Detail | `invoice_adjustment_dt` | per-line adjustment amounts (positive or negative). |

The target invoice tracks a **history of adjustments** (`total_adjustment`, `history_total_adjustment`) so the running corrected total is always derivable.

## What I built

- Adjustment CRUD with the shared list/filter/export pattern.
- **Signed line math** — adjustment lines can be positive (debit) or negative (credit); the header total and the parent invoice's `total_adjustment` are recomputed in the service layer (`utils/invoice_adjustment_utils.go`).
- **Audit-friendly linkage** — the adjustment references the original invoice rather than mutating it, preserving the paper trail.

## Engineering notes

- Adjustments are a classic place for money bugs, which is exactly why the calculations are centralised and would benefit most from the unit tests called out in [Improvements](/s-erp/engineering/improvements) (money math + state transitions).

## Frontend

`pages/invoices/invoice-adjustments` — an adjustment form that loads the target invoice, lets the user enter signed line deltas with a reason, and previews the corrected total. Filters persist via Pinia.
