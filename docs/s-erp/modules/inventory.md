# Inventory In / Out

> **Area:** Inventory · **Tables:** `inventories`, `inv_dt`, `stock`, `stock_closings` · **Role:** Full-stack

Inventory is where documents become physical reality: goods **in** from purchasing, goods **out** to fulfil sales, running **stock** balances, and periodic **stock closing**.

## Purpose

Keep an accurate, auditable picture of what's on hand per item and warehouse, driven by the movements that sales and purchasing generate — and freeze it periodically for reporting.

## Data model

| Concept | Table | Holds |
|---|---|---|
| Movement header | `inventories` | movement type (in/out), branch/warehouse, date, reference document, status. |
| Movement detail | `inv_dt` | per-item lines of the movement (qty in/out, unit). |
| Stock | `stock` | current on-hand quantity per item / warehouse. |
| Stock closing | `stock_closings` | a period snapshot that freezes balances for reporting/carry-forward. |

The **IO type** master (`io_type`) classifies movements so the same tables serve receipts, issues, adjustments, and transfers.

## What I built

- **Goods-in / goods-out** flows that write a movement (header + detail) and update `stock` inside a transaction, so a partial failure never leaves stock half-updated.
- **Stock closing** — a periodic job that snapshots balances into `stock_closings`.
- An async **stock-sync** consumer (RabbitMQ) that reconciles stock after movements, with retry + a dead-letter queue for poison messages — see [Background Jobs](/s-erp/engineering/background-jobs).
- The system's single largest file, `inventory_repository.go` (~4,700 lines) — carrying the movement, stock, and closing queries; a prime target for the god-file split in [Improvements](/s-erp/engineering/improvements).

## Engineering notes

- **Transactional movement + stock update** — the movement and the balance change commit together (GORM transaction with rollback).
- **Async reconciliation** — heavy stock recomputation is offloaded to the stock-sync worker rather than blocking the request.
- **Daily jobs** — stock tasks also run via systemd `.timer` units on the host (see the scheduler section of [Background Jobs](/s-erp/engineering/background-jobs)).

## Frontend

`pages/inventories/in`, `pages/inventories/out`, and `pages/inventories/stocks` — movement forms and a stock browser, with warehouse filters, persisted table state, and export. Stock views surface current balances and closing snapshots.
