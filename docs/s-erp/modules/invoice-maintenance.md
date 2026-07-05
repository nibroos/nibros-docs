# Maintenance Invoice

> **Area:** Invoicing · **Tables:** `invoice_maintenances`, `invoice_maintenance_dt` · **Role:** Full-stack

A maintenance invoice bills for **service/maintenance** work. It's the most workflow-heavy of the four invoice types: it carries an **approval step** that, once passed, emails the customer automatically.

## Purpose

Handle recurring/service billing where an invoice must be **reviewed and approved** before it goes out, and where approval should trigger customer notification without a human clicking "send".

## Data model

The header (`invoice_maintenances`) is the richest in the system — beyond the usual customer/branch/currency/tax fields it carries:

| Field group | Purpose |
|---|---|
| `status`, `approved_status`, `approved_by_id` | The approval workflow state and who signed off. |
| `rev_no`, `history_status`, `history_total_adjustment` | Revision & adjustment history. |
| `total_dp_products`, `total_balance_products` | DP allocation and remaining balance. |
| `subtotal`, `total_discount`, `total_vat`, `total_pph23`, `grand_total`, `total_adjustment` | The full money chain including adjustments. |
| `bank_id`, `due_date` | Payment routing and terms. |

Detail lines live in `invoice_maintenance_dt`.

## The approval → email workflow

This is the flagship flow of the module:

1. A maintenance invoice is created and edited (`status` = draft, `approved_status` = pending).
2. An approver approves it. The service records `approved_by_id` + timestamp and flips `approved_status` **inside a DB transaction**, bumping `rev_no`.
3. The service **publishes a message** to RabbitMQ.
4. The **`bulk-send-email-approved-invoice-maintenance` consumer** picks it up and emails the customer — with retry (max 3, 5s delay) and a **dead-letter queue** if delivery keeps failing.

Doing the approval synchronously but the email asynchronously means a slow/failing mail server never blocks or fails the approval. See [Background Jobs](/s-erp/engineering/background-jobs).

## What I built

- The maintenance-invoice CRUD, the approval state machine, and the DP/adjustment-aware money math (`utils/invoice_maintenance_utils.go`).
- The RabbitMQ **producer** (on approval) and the **bulk email consumer**, including the DLQ handling.
- Excel/PDF export for the approved document.

## Frontend

`pages/invoices/invoice-maintenances` — invoice form plus an **approve** action guarded by state, an approval-status badge, and revision history. Filters persist via Pinia; export supported.
