# Glossary

Domain terms and acronyms that appear throughout this section. Many are specific to ERP / accounting and the Indonesian tax context.

## Documents & flow

| Term | Meaning |
|---|---|
| **Quotation (Quo)** | A priced offer to a customer; the entry point of the sales flow. Has a header, line details (`quo_dt`), and a bill of materials per line (`quo_dt_boms`). |
| **Sales Order (SO)** | A confirmed customer order, typically derived from a quotation. |
| **Purchase Order (PO)** | An order placed on a supplier for materials/goods. |
| **Request Order (RO)** | An internal request for goods/materials that feeds purchasing or inventory. |
| **Header / Detail** | A document is split into a header (customer, dates, tax, totals) and detail lines (`*_dt`). |
| **BOM** | Bill of Materials — the component items that make up a product line on a quotation/order. |
| **Rev No** | Document revision number; incremented as a document is amended/re-approved. |

## Inventory

| Term | Meaning |
|---|---|
| **Inventory In / Out** | Goods received into / issued out of a warehouse; recorded as inventory movements (`inv_dt`). |
| **Stock** | Current on-hand quantity per item/warehouse. |
| **Stock Closing** | Periodic snapshot that freezes stock balances for a period (`stock_closings`). |
| **Stock Sync** | An async reconciliation job (RabbitMQ consumer) that keeps stock consistent after movements. |
| **Warehouse / Branch** | Physical/organisational locations; documents and stock are scoped by branch (`bid`). |

## Invoicing & money

| Term | Meaning |
|---|---|
| **Sales Invoice** | A bill to the customer for delivered goods/services. |
| **DP Invoice** | Down-Payment invoice — an advance billed before full delivery; later allocated against the balance. |
| **Invoice Adjustment** | A correction/credit-debit note against an existing invoice. |
| **Maintenance Invoice** | A recurring/service maintenance bill; carries an approval workflow that emails the customer on approval. |
| **Subtotal / Grand Total** | Line total before / after discount, VAT, and PPh23. |
| **Discount (amount / percentage / final)** | Multi-mode discounting: fixed amount, percentage, or a final override. |
| **Balance** | Remaining amount owed after DP allocation. |

## Tax

| Term | Meaning |
|---|---|
| **VAT / PPN** | Value-Added Tax; a percentage added to the subtotal (`vat_perc`, `is_vat`). |
| **PPh23** | Indonesian withholding tax on certain services; a percentage withheld from the payable (`pph23_perc`, `is_pph23`). |
| **Exchange Rate** | Applied when a document currency differs from the base currency. |

## Master data

| Term | Meaning |
|---|---|
| **MS Item / Product** | Catalog item vs. a sellable/buyable product (a product can bundle items via BOM). |
| **Item Unit** | Unit of measure and unit conversions for an item. |
| **Customer / Contact** | The buying organisation and its people; customers can have contracts and emails. |
| **Company Profile / Branch** | The selling company and its branches. |
| **RBAC** | Role-Based Access Control — users, roles, permissions, and groups. |
| **Identifier** | A configurable document-number generator (e.g. quotation/invoice numbering). |

## Platform & ops

| Term | Meaning |
|---|---|
| **BFF / Gateway** | Here, the **Nginx** reverse proxy in front of the Go service (port 4050). |
| **SERVICE_TYPE** | Env var that selects the binary's mode: `rest`, `consumer`, or `scheduler`. |
| **Asynq** | Redis-backed Go task queue for deferred jobs. |
| **DLQ** | Dead-Letter Queue — where RabbitMQ messages land after exhausting retries. |
| **Filter bag** | The `map[string]string` produced by `ConvertRequestToFilters` from a request body. |
