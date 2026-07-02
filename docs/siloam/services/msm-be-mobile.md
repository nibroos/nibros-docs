# msm-be-mobile

> **Role:** Core mobile business logic — the original engine behind appointments, payments, profile, and integrations.

## Responsibility

`msm-be-mobile` holds the established business logic for the mobile app: creating and managing **appointments** (OPD, teleconsult, telechat, MCU), **payment** orchestration, **user/profile** management, and integration with external systems. The newer `msm-be-aggregator` extends this without replacing it.

## Stack

| Area | Tech |
|---|---|
| Framework | Express 4 (Babel-transpiled ES) |
| Data | PostgreSQL via Sequelize 4; raw SQL |
| Cache | Redis (`redis` v2) |
| Teleconsult media | **Agora** (`agora-token`) for video/chat tokens |
| Payments | `midtrans-client`, `jsrsasign` (signing) |
| Auth | `express-jwt`, `jsonwebtoken` |
| Testing | Mocha + Chai + Sinon + `nock` + `proxyquire` + `mockdate`; NYC |
| Ops | PM2, Docker, GitHub Actions |

App layout mirrors the others (`controllers/`, `routes/`, `services/`, `queries/`, `models/`, `utils/`, `variables/`, `middlewares/`, `tests/`).

## What I worked on here

- **Funddock** payment flows for teleconsult/telechat/secured booking/refill, including change-payment and callbacks ([details](/siloam/projects/funddock-payment)).
- **SCO Phase 2** — pre-regist self-payment, transaction status by admission id, lab/rad without appointment id ([details](/siloam/projects/self-checkout)).
- **WhatsApp reminder** generation and secured-booking reminder coverage ([details](/siloam/projects/whatsapp-reminder)).
- **Patient-data** corrections, medical-record access, profile validation ([details](/siloam/projects/patient-data)).
- **Payer management** add/edit and the dependent check-in flow ([details](/siloam/projects/payer-management)).
- **Security** — blind SQL-injection fix, `scryptSync` → `pbkdf2Sync`, Agora refactor, Crashlytics fixes ([details](/siloam/projects/security-quality)).
