# Request Order

> **Area:** Purchasing · **Tables:** `request_orders`, `request_order_dt` · **Role:** Full-stack

A request order (RO) is an **internal** request for goods or materials — raised by a department/branch — that feeds procurement or inventory issue. It sits upstream of the [Purchase Order](/s-erp/modules/purchase-order).

## Purpose

Give the business a controlled way to ask for stock ("we need these items") separately from the commercial act of buying them. An approved RO can drive a PO to a supplier or an inventory issue from an existing warehouse.

## Data model

| Level | Table | Holds |
|---|---|---|
| Header | `request_orders` | requester, branch, dates, status, remarks, totals. |
| Detail | `request_order_dt` | requested lines (item, qty, unit). |

## What I built

- RO CRUD with the shared list/filter/export pattern and status lifecycle (requested → approved → fulfilled).
- Helpers in `utils/request_order_utils.go` for line assembly and quantity roll-ups.
- The bridge to purchasing/inventory: an approved RO's lines can seed a [PO](/s-erp/modules/purchase-order) or an [inventory-out](/s-erp/modules/inventory) issue.

## Frontend

`pages/purchases/request-orders` — a request form with item/qty/unit lines and approval actions. Filters persist via Pinia; lists export.
