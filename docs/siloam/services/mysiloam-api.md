# mysiloam-api — BFF

> **Role:** Backend-for-Frontend. The single entry point for the MySiloam mobile app.

## Responsibility

`mysiloam-api` is the layer the mobile app talks to. It doesn't own much domain data itself; instead it:

- **Validates** the token / JWT on every request.
- **Routes & forwards** to the right downstream service (mobile, aggregator, payment, cepetan, coupon) and external systems.
- **Shapes responses** into exactly what the app needs, often combining several downstream calls.
- **Gates by app version** (`compare-versions`) so new behaviour doesn't break back-versioned clients.
- **Hosts scheduled jobs** — the WhatsApp reminder cron, prescription-refill notification scheduling.
- **Generates reports** — CSV / Excel / PDF.

## Stack

| Area | Tech |
|---|---|
| Framework | Express 4 (Babel-transpiled ES via `babel-node`) |
| Data | PostgreSQL via Sequelize 4; raw SQL for expensive queries |
| Cache | Redis (`redis` v3) |
| Scheduling | `cron`, `node-schedule` |
| Notifications | Firebase Admin, OneSignal |
| Search/observability | Elasticsearch, Elastic APM |
| Reporting | `excel4node`, `pdfkit`, `html5-to-pdf`, `json2csv`, MJML + Mustache |
| Auth | `express-jwt`, `jsonwebtoken`, `jwk-to-pem` |
| Testing | Mocha + Chai + Sinon + `nock` + `mockdate`; NYC coverage |
| Ops | PM2 (`ecosystem.config.js`), Docker, GitLab CI |

App layout: `controllers/`, `routes/`, `services/`, `queries/`, `schemas/`, `models/`, `middlewares/`, `functions/`, `utils/`, `variables/`, `sockets/`, `polyfills/`, `tests/`.

## What I worked on here

- **WhatsApp reminder** scheduler / cron and message generation ([details](/siloam/projects/whatsapp-reminder)).
- **Funddock** appointment payment wiring and callbacks ([details](/siloam/projects/funddock-payment)).
- **Health Analytics** response shaping, recommendation fixes, version-gated back-compat ([details](/siloam/projects/health-analytics)).
- **Self Checkout** routing to the Front Office Service and header forwarding ([details](/siloam/projects/self-checkout)).
- **Doctor search** expensive-query optimisation and filter/pagination fixes ([details](/siloam/projects/doctor-search)).
- Numerous **patient-data** investigations and **build/deployment** prep.

## Notable references

- The README documents the **Create Appointment API error codes** (480–489) — e.g. `483` "active appointment exists", `485` "same-day appointment must be ≥ 4 hours out", `487` "time slot full". Useful when debugging booking failures.
