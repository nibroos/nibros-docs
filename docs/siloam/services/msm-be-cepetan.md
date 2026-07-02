# msm-be-cepetan

> **Role:** High-performance, Redis-backed cache layer for Health Analytics. ("Cepetan" ≈ "faster" in Indonesian.)

## Responsibility

`msm-be-cepetan` exists to make **Health Analytics** fast. Instead of hitting EMR/HIS on every request, it serves **homepage summaries** and **detail-page data** from **Redis**, doing background processing to keep the cache warm. It shields the slower upstream systems from request spikes and keeps the data-heavy HA experience responsive.

## Stack

| Area | Tech |
|---|---|
| Runtime | Modern Node, **ES Modules** (`"type": "module"`) |
| Framework | Express 4 |
| Cache | **Redis** (`redis` v4) — the core of the service |
| Data | PostgreSQL via Sequelize 6 |
| Validation | Joi 17 |
| Testing | **Jest** (`--experimental-vm-modules`) with coverage |
| Lint | ESLint 9 (flat config) |
| Ops | Docker, devcontainer, GitHub Actions |

It's the most "modern" service in the set — ESM, Jest, flat ESLint config, a `packages/` workspace, and `tests/`.

## What I worked on here

- Supporting the **Health Analytics** read path — the homepage and detail data that cepetan caches ([details](/siloam/projects/health-analytics)).
- Performance of HA data access, in concert with the recommendation/analysis logic in `msm-be-aggregator`.

## Why a separate cache service

Health data comes from several slow upstreams (EMR examination, lab, IPD SOAP; HIS). Computing a patient's HA homepage on demand every time would be slow and would hammer those systems. Cepetan precomputes/caches that into Redis so the app gets a fast read, with the heavier aggregation handled out of the request path.
