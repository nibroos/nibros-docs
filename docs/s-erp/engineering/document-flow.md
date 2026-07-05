# Document Flow

How a piece of business travels through S-ERP — from a priced offer to on-hand stock to a paid invoice — and where the money and tax math happens.

## The sales-to-cash flow

```
Quotation ──accept──▶ Sales Order ──fulfil──▶ Inventory Out ──▶ stock ↓
    │ (header/detail/BOM)      │                                     
    │                         ├──advance──▶ DP Invoice ──allocate──┐ 
    │                         │                                    ▼ 
    └─────────────────────────┴──deliver──▶ Sales Invoice ──balance = grand_total − DP
                                                  │
                                                  ├──correct──▶ Invoice Adjustment
                                                  └──service──▶ Maintenance Invoice ──approve──▶ email
```

1. **Quotation** — a priced, revisable offer with line items and a bill-of-materials per line.
2. **Sales Order** — the accepted quote, re-numbered and locked; the commercial commitment.
3. **Inventory Out** — fulfilment issues stock against the SO (transactional movement + balance update).
4. **DP Invoice** *(optional)* — an advance billed and allocated against the eventual balance.
5. **Sales Invoice** — the full bill; balance = grand total − DP already collected.
6. **Adjustment / Maintenance** — corrections and service billing branch off the invoice.

## The purchase-to-stock flow

```
Request Order ──approve──▶ Purchase Order ──receive──▶ Inventory In ──▶ stock ↑ ──▶ Stock Closing
```

1. **Request Order** — an internal ask for goods.
2. **Purchase Order** — the supplier order that satisfies it.
3. **Inventory In** — receiving records a goods-in movement and raises stock.
4. **Stock Closing** — periodic snapshot freezes balances for the period.

## Where the math lives

Every commercial document shares the same computation chain, implemented in the **service/util layer** (not scattered in controllers or the UI), so all six document types agree:

```
line totals
  → subtotal
  → apply discount        (amount | percentage | final override, per discount_type)
  → apply VAT             (vat_perc, when is_vat)
  → apply PPh23           (pph23_perc, when is_pph23 — Indonesian withholding)
  → apply exchange rate   (when currency ≠ base)
  → grand_total
  → subtract DP allocation
  → balance
```

Each module has a `*_utils.go` (e.g. `quotation_utils.go`, `sales_invoice_utils.go`, `invoice_dp_utils.go`) that owns its recomputation, and the front end mirrors the same math for a live preview — the server remains the source of truth on submit.

## Why header / detail / BOM

Modelling documents as **header → detail → BOM** (three tables) rather than a flat line table gives:

- **Manufacturing accuracy** — a sold product explodes into the raw items it consumes, each with its own unit.
- **Clean conversion** — quotation → SO is a structured copy of all three levels.
- **Historical integrity** — the BOM stores an `item_json` snapshot, so later master-data edits don't rewrite past documents.

## Status & revision as first-class state

Documents aren't just rows — they move through a lifecycle (`status`) and accrue revisions (`rev_no`). The maintenance invoice adds an explicit **approval** state (`approved_status`, `approved_by_id`) that gates the email side-effect. Modelling state transitions explicitly is what keeps side-effects (stock changes, emails, DP allocation) from firing at the wrong time.
