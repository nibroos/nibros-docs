# msm-be-payment

> **Role:** Payment processing and payment-gateway integration. The newest, most actively developed service in my time on the team.

## Responsibility

`msm-be-payment` owns everything payment: building and creating transactions, routing to the right channel, handling asynchronous **callbacks/notifications**, and **change-payment** flows. It fronts the **Funddock / Kairos Pay** gateway, which in turn aggregates **Midtrans** (bank transfer / credit card / GoPay), **NOBU**, and **QRIS**.

## Stack

| Area | Tech |
|---|---|
| Runtime | **Node 24 LTS** (runs `app/` natively — no Babel build step) |
| Framework | Express 4 |
| Data | PostgreSQL via **Sequelize 6** |
| Cache | Redis (`redis` v4) |
| Payments | `midtrans-client`, `crypto-js` (hash signing) |
| Auth | `express-jwt` v8, `jsonwebtoken` v9 |
| Testing | Mocha + Chai + Sinon; NYC; ~700 tests in the suite |
| Ops | PM2 (`prod.config.js`), Docker |

App layout: `controllers/`, `routes/`, `services/`, `queries/`, `models/`, `helpers/`, `utils/` (incl. `utils/funddock/`, `utils/midtrans/`), `variables/`, `middlewares/`, `sockets/`, `tests/`.

## Key modules (Funddock)

- `utils/funddock/funddock.function.js` — `generateHashForFunddock`, `buildFunddockPayload`, `buildFunddockHeaders`, `defineSelectedPaymentMethodId`, `getOverriddenHopeOrganizationId`, `createFunddockTxService`, `defineTeleType`, `isFunddockCovered`.
- `variables/funddock.variable.js` — Funddock config constants; `FUNDDOCK_IS_ACTIVE` flag.
- `utils/midtrans/midtrans.function.js` — `defineIsFunddockMidtransTx` (detects a Funddock order in the Midtrans flow).
- `variables/order.variable.js` — `midtransPaymentMethods` (`BANK_TRANSFER`, `CREDIT_CARD`, `GO_PAY`).
- `controllers/appointments/appointment.controller.js` — Funddock initialisation in booking, update-payment, and callback paths.

## What I worked on here

This service is where the bulk of the **[Funddock Payment Integration](/siloam/projects/funddock-payment)** lived: transaction creation & signing, callback handling, QRIS specifics, change-payment idempotency, the **LTS recovery merge** (ESM → CommonJS, 7 files), the **signature-key** hardening, and adapting the integration to the upgraded Node runtime.
