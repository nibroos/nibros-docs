# Purchase Order

> **Area:** Purchasing · **Tables:** `purchase_orders`, `purchase_order_dt` · **Role:** Full-stack

A purchase order (PO) is an order placed on a **supplier** for materials or goods. It's the buy-side counterpart to the sales order and the main feeder of [inventory-in](/s-erp/modules/inventory).

## Purpose

Formalise procurement: what to buy, from whom, at what price and terms, and track it from raised → received → invoiced, so incoming stock and supplier bills reconcile.

## Data model

| Level | Table | Holds |
|---|---|---|
| Header | `purchase_orders` | supplier/customer ref, branch, currency, tax/discount config, purchase & payment type, totals, PO number, `status`. |
| Detail | `purchase_order_dt` | ordered lines (item, qty, price, line total). |

Purchase type, payment term, and shipping term come from their own master modules, so procurement policy is configurable rather than hard-coded.

## What I built

- The full PO CRUD (controller → service → repository) with the shared list/filter/paginate/export pattern.
- **Money math** consistent with the rest of the system — discount modes, VAT, PPh23, exchange rate — computed in the service layer (`utils/purchase_order_utils.go`).
- The link into **inventory-in**: receiving against a PO records goods movement and updates stock.

## Downstream links

- **Inventory** — received PO lines create [goods-in](/s-erp/modules/inventory) movements.
- **Request Order** — a PO can be raised to satisfy an internal [request order](/s-erp/modules/request-order).

## Frontend

`pages/purchases/purchase-orders` — a master/detail form with supplier selection, term pickers, currency-masked line entry, live totals, and Zod validation. List filters persist via Pinia and export to Excel/PDF/CSV.
