# Resume Highlights

Résumé-ready bullet points distilled from this section. Copy, trim, and tailor as needed. Metrics come from the [Stats](/siloam/stats) page.

## Headline

> **Backend Engineer — Siloam Hospitals (MySiloam mobile platform)** · Jun 2025 – present
> Node.js / Express backend engineer on the team behind MySiloam, the patient app for Indonesia's largest private hospital network. Delivered payment, reminder, and health-analytics features across a BFF and five microservices, while resolving production issues for a high-traffic healthcare app.

## Impact bullets (pick & choose)

### Payments
- Integrated the **Funddock / Kairos Pay** payment gateway (Midtrans, NOBU, QRIS) across teleconsultation, telechat, secured booking, and prescription-refill flows — including HMAC-signed requests, asynchronous callback handling, and idempotent change-payment.
- Built the Funddock transaction layer (payload signing, payment-method routing, hospital-id mapping) with **feature-flagged, per-product incremental rollout** in a live payments system.
- Recovered a large block of payment code silently lost during a **Node LTS upgrade** merge (7 files, ~490 lines), converting modules ESM→CommonJS and validating against a ~700-test suite before release.

### Reliability & data
- Designed and hardened a **WhatsApp D-1 appointment reminder** system (cron scheduler, templated deep links, reschedule/cancel handling) — eliminating duplicate and post-cancellation sends and adding delivery auditing.
- Resolved a high volume of **patient-data-integrity** issues (identity, medical-record access, booking blocks) across app, front-office, and EMR systems using a disciplined read-before-write investigation process (database, APM/Kibana logs, and mobile front-end).
- Optimised **expensive doctor-search queries** and fixed filter/pagination correctness; pushed recurring data fixes into the database via **PostgreSQL triggers** (auto-populating doctor `real_name`).

### Features
- Built the **Health Analytics recommendation engine** (doctor / product / MCU suggestions from BMI, blood-pressure, and lab results) and integrated an **async AI analysis service** (migrated Gemini 2.0→2.5) with a read-through **Redis** cache for performance.
- Delivered **Self Checkout (SCO)** flows — routing self-payment through the BFF and extending it to unscheduled patients and lab/radiology orders without an appointment id.
- Integrated a **digital-commerce sales channel** into the app with channel- and version-gated rules (cancellation guards, card visibility).

### Security & quality
- Remediated a **blind SQL-injection** vulnerability and upgraded secret hashing (`scryptSync` → `pbkdf2Sync`); added signature-key signing to payment requests and hardened a public confirmation endpoint.
- Maintained **SonarQube quality gates** and unit-test coverage (Mocha/Chai/Sinon, NYC) across services; refactored flagged controllers and added structured error handling.
- Prepared builds and supported **8+ mobile app releases** (9.2.0 → 10.1.2) plus patient-portal and BAU deployments, using app-version gating for safe back-compatible rollout.

## Skills evidenced

**Languages/Frameworks:** JavaScript, Node.js, Express
**Data:** PostgreSQL, Microsoft SQL Server, Redis, Sequelize, raw SQL & query optimisation, DB triggers/functions
**Integrations:** Payment gateways (Funddock/Kairos Pay, Midtrans, NOBU, QRIS), EMR/HIS (HOPE), Agora, OneSignal, Firebase, AI (Gemini), Insider SDK
**Practices:** BFF/microservices, async callback/webhook integration, contract-first cross-team integration, feature flags & version gating, scheduled jobs, test coverage & SonarQube, CI/CD (GitLab CI, GitHub Actions), Docker, PM2, Elastic APM
**Domains:** Healthcare/hospital systems, payments, mobile backend, production support

## One-paragraph summary

> Backend engineer on Siloam Hospitals' MySiloam mobile platform team, working across a Node.js BFF and five microservices (mobile, payment, aggregator, cache, coupon). Over ~12 months I delivered the app's payment-gateway integration (Funddock/Midtrans/NOBU/QRIS), a WhatsApp appointment-reminder system, and a health-analytics recommendation engine with AI integration, while resolving hundreds of production bugs and data-integrity issues across the app, front-office, and EMR systems. Comfortable owning features end-to-end — from cross-team contracts and SQL performance to security hardening, test coverage, and release support.
