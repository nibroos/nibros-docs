# Sales Invoice

> **Area:** Invoicing · **Tables:** `sales_invoices`, `sales_invoice_dt` · **Role:** Full-stack

The sales invoice bills the customer for delivered goods/services. It's the primary revenue document and the first of S-ERP's **four invoice types**.

## Purpose

Turn a fulfilled [Sales Order](/s-erp/modules/sales-order) into a legal bill with correct tax, discounting, and any down-payment already collected — and track what's still owed.

## Data model

| Level | Table | Holds |
|---|---|---|
| Header | `sales_invoices` | customer, branch, currency, invoice/due dates, tax config, discount config, subtotal/grand total, `status`, invoice number. |
| Detail | `sales_invoice_dt` | billed lines (item, qty, price, line total). |

## Money & tax

Consistent with the rest of the system:

- **Discount** — amount / percentage / final override, by `discount_type`.
- **VAT** at `vat_percentage`, **PPh23** withholding at `pph23_percentage`.
- **DP allocation** — any [down-payment](/s-erp/modules/invoice-dp) already collected is deducted, leaving a **balance**.
- **Exchange rate** for foreign-currency invoices.

The full chain — `subtotal → total_discount → total_vat → total_pph23 → grand_total → balance` — is computed in the service layer (`utils/sales_invoice_utils.go`).

## What I built

- Invoice CRUD with the shared list/filter/paginate/export pattern.
- **DP-aware totals**, so an invoice against an SO that already took a down-payment shows the correct remaining balance.
- **Excel/PDF export** (excelize / wkhtmltopdf) for issuing the printed invoice, including barcodes.

## Frontend

`pages/invoices/invoice-sales` — invoice form with line entry, live tax/discount/balance recomputation, DP linkage, and print/export actions. Filters persist via Pinia.
