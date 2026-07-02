# Tech Stack

A consolidated view of the technologies used across the services I worked on. Per-service specifics are on each [service page](/siloam/services/).

## Languages & runtime

| Area | Tech |
|---|---|
| Language | JavaScript (Node.js) |
| Runtime | Node.js — legacy services on Babel-transpiled ES (`babel-node`), newer services (`msm-be-payment`, `msm-be-cepetan`) running modern Node (Node **24 LTS**) natively |
| Web framework | Express 4 |
| Module systems | CommonJS (legacy), ES Modules (cepetan); a Funddock LTS migration involved converting ESM ⇄ CommonJS to match the target codebase |

## Data & caching

| Area | Tech |
|---|---|
| Primary DB | PostgreSQL |
| ORM | Sequelize (v4 on legacy services, v6 on the modern stack) + raw SQL for performance-critical/expensive queries |
| Secondary DB | Microsoft SQL Server (HOPE/HIS reads) via `mssql` / `tedious` in msm-be-aggregator |
| Cache | Redis (`redis` v2/v3/v4 depending on service) — heavily used by msm-be-cepetan for Health Analytics |
| Stored logic | PostgreSQL triggers & functions (e.g. doctor `real_name` automation, after-insert doctor sync) |

## Payments

| Area | Tech |
|---|---|
| Gateway | **Funddock / Kairos Pay** (aggregating layer) |
| Channels | **Midtrans** (`midtrans-client`), **NOBU**, **QRIS** |
| Security | HMAC-style signed requests (hash signing), signature keys on payment requests |

## Integrations & external services

| Capability | Tech / system |
|---|---|
| Hospital systems | HOPE / HIS, EMR (examination, lab, IPD SOAP) |
| AI health analysis | AI Analysis API powered by **Gemini** (migrated 2.0 → 2.5) |
| Video / chat (teleconsult) | **Agora** (`agora-token`) |
| Push notifications | **OneSignal**, **Firebase Admin** |
| Marketing / engagement | **Insider SDK** |
| Kiosk / self-service | Aidoo / Kiosk platform |
| Digital commerce | DPM / digital-commerce channel (channelId 38) |
| Email / templating | MJML + Mustache templates, `email-validator` |
| Reporting | `excel4node`, `pdfkit`, `html5-to-pdf`, `json2csv` |
| Scheduling | `cron`, `node-schedule` (BFF reminder & notification jobs) |

## Quality, testing & tooling

| Area | Tech |
|---|---|
| Unit testing | Mocha + Chai + Sinon + `nock` (HTTP mocking) + `mockdate`; **Jest** in msm-be-cepetan |
| Coverage | NYC (Istanbul), merged & reported to SonarQube |
| Static analysis | **SonarQube** (`sonar-project.properties` per repo), Trivy (`.trivyignore`) |
| Linting | ESLint with `eslint-config-airbnb-base` |
| Git hooks | Husky, Commitizen (conventional commits) |
| Security scanning | Trivy; **DexGuard** for Android hardening (release prep) |

## Delivery & ops

| Area | Tech |
|---|---|
| CI/CD | GitLab CI (`.gitlab-ci.yml`), GitHub Actions (`.github/`) |
| Containerisation | Docker |
| Process management | PM2 (`ecosystem.config.js` / `dev.config.js` / `prod.config.js`) |
| Observability | Elastic APM (`elastic-apm-node`), Elasticsearch, rotating file logs |
| Service catalog | Backstage (`catalog-info.yaml` per repo) |

## Notable engineering practices I worked within

- **App-version gating** with `compare-versions` so new behaviour ships without breaking back-versioned apps.
- **Header propagation** (`x-source`, `x-version`, `x-lang`) end-to-end for platform/locale-aware behaviour.
- **Contract-first cross-team work** — defining request/response contracts (e.g. NOBU, WhatsApp reminder, funddock) before integration.
- **Coverage-gated merges** — Sonar coverage and issue checks tracked per PR; a recurring class of my subtasks was "cover unit test / fix sonar issue".
