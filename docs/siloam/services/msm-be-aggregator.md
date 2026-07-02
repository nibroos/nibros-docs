# msm-be-aggregator

> **Role:** Data-aggregation service — an evolution of `msm-be-mobile` that unifies data from internal services and external systems.

## Responsibility

`msm-be-aggregator` aggregates data from multiple sources — internal services and external APIs — to give the app a unified view. It's where the **Health Analytics business logic and recommendation engine** live, and it's the service that reads the **HOPE / HIS** hospital system over **MSSQL**. It runs alongside `msm-be-mobile`, adding capability rather than replacing it.

## Stack

| Area | Tech |
|---|---|
| Framework | Express 4 (Babel-transpiled ES) |
| App data | PostgreSQL via Sequelize 4 |
| Hospital data | **Microsoft SQL Server** via `mssql` / `tedious` (HOPE/HIS reads) |
| Cache | Redis (`redis` v2) |
| Auth | `express-jwt`, `jsonwebtoken` |
| Testing | Mocha + Chai + Sinon + `mockdate`; NYC |
| Ops | PM2 (`dev.config.js` / `prod.config.js`), Docker, GitHub Actions |

App layout follows the standard (`controllers/`, `routes/`, `services/`, `queries/`, `models/`, `utils/`, `variables/`, `tests/`).

## What I worked on here

- **Health Analytics** recommendation engine, lab-name→category mapping, and data aggregation ([details](/siloam/projects/health-analytics)).
- **SCO** logging/coverage and Front-Office integration paths ([details](/siloam/projects/self-checkout)).
- **Delivery address** APIs and **delivery-fee** resolution from HOPE ([details](/siloam/projects/delivery-address)).
- **Patient-data** investigations that required joining app data with HOPE/HIS reads ([details](/siloam/projects/patient-data)).

## Why MSSQL matters here

This is the only service in the set that talks to **MSSQL**, because **HOPE/HIS** (the hospital's operational system) is the source of truth for admissions, sales items, and delivery fees. A lot of "wrong value" bugs (delivery fee, package, pricing) traced back to reading the wrong HOPE field — so understanding this MSSQL boundary was key to fixing them.
