# Services

The six backend services my team owns, and how they relate. For the request flow between them, see [System Architecture](/siloam/getting-started/architecture).

| Service | One-liner | Stack highlights |
|---|---|---|
| [mysiloam-api](/siloam/services/mysiloam-api) | The **BFF** — single entry point for the mobile app; auth, routing, response shaping, cron jobs, reporting. | Express 4, Babel, Sequelize 4, PostgreSQL, Redis, cron/node-schedule, Firebase, OneSignal, Elasticsearch |
| [msm-be-mobile](/siloam/services/msm-be-mobile) | Core mobile **business logic** — appointments, payments, profile, integrations. | Express 4, Babel, Sequelize 4, PostgreSQL, Redis, Agora, midtrans-client |
| [msm-be-payment](/siloam/services/msm-be-payment) | **Payment** processing and gateway integration (Funddock / Midtrans / NOBU / QRIS). | Node 24, Express 4, Sequelize 6, PostgreSQL, Redis, midtrans-client |
| [msm-be-aggregator](/siloam/services/msm-be-aggregator) | **Data aggregation** across internal services and external systems (HOPE/HIS). | Express 4, Babel, Sequelize 4, PostgreSQL, **MSSQL** (mssql/tedious), Redis |
| [msm-be-cepetan](/siloam/services/msm-be-cepetan) | High-performance **Redis cache** layer for Health Analytics. | Node ESM, Express 4, Redis 4, Sequelize 6, **Jest** |
| [msm-be-coupon](/siloam/services/msm-be-coupon) | **Coupon / voucher** lifecycle — creation, validation, redemption. | Express 4, Babel, Sequelize 4, PostgreSQL, cron |

## Shared conventions

- **Express + Sequelize + PostgreSQL** is the common base; newer services (payment, cepetan) run modern Node natively, legacy services transpile with **Babel**.
- A consistent app layout: `controllers/`, `routes/`, `services/`, `queries/`, `models/`, `utils/`, `variables/`, `middlewares/`, `tests/`, `configs/`.
- **Testing** with Mocha/Chai/Sinon + NYC (Jest in cepetan); **SonarQube** + ESLint (airbnb-base) gate merges.
- **Delivery** via GitLab CI / GitHub Actions → Docker → PM2; **Elastic APM** for observability; **Backstage** catalog (`catalog-info.yaml`) per repo.
