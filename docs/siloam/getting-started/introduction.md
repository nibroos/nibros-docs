# Introduction

::: info
This section documents my backend work on **MySiloam**, the patient mobile app for **Siloam Hospitals**. It captures the systems I built and the problems I solved — with no credentials, patient data, or internal URLs.
:::

## What is MySiloam?

**MySiloam** is the patient-facing mobile app (iOS & Android) for Indonesia's largest private hospital network. Patients use it to find doctors, book appointments (outpatient, teleconsultation, telechat, MCU), pay for services, view medical records and lab results, get AI-driven health analytics, and manage their profile and family members.

My team owns the **backend** behind all of that: a **Backend-for-Frontend (BFF)** plus a set of microservices.

## My role

**Backend Engineer — MySiloam Mobile Platform Team** · started **22 June 2025**.

Day to day, the team focuses on:

- **Feature development** for new mobile capabilities.
- **Bug fixing** across the mobile backend stack (production and pre-production).
- **Data-integrity issues** — correcting patient/appointment/payment data and the logic that produces it.
- **Cross-team integration** — wiring our services to payment, EMR/HIS, kiosk, digital-commerce, and AI teams.
- **Production support** for the live mobile app and patient portal.

## Team scope

The team owns these services (each detailed under [Services](/siloam/services/)):

| Service | Responsibility |
|---|---|
| **mysiloam-api** | BFF for the mobile app — token validation, request routing, response shaping. |
| **msm-be-mobile** | Core mobile business logic — appointments, payments, profile, integrations. |
| **msm-be-aggregator** | Data-aggregation service; an evolution of msm-be-mobile that unifies internal & external data. |
| **msm-be-payment** | Payment processing and gateway integration (Funddock / Midtrans / NOBU). |
| **msm-be-cepetan** | High-performance, Redis-backed cache layer for health-analytics data. |
| **msm-be-coupon** | Coupon and promotion logic — creation, validation, redemption. |

We integrate with several systems **outside** the team's ownership (payment gateway, EMR/HIS, kiosk/Aidoo, digital commerce, AI) — they appear throughout the docs but were not ours to maintain.

## Timeline at a glance

The work is captured in **586 Jira issues** assigned to me between **July 2025 and June 2026** — a mix of feature stories, development subtasks, and bugs.

| Period | Theme of the work |
|---|---|
| **Jul–Aug 2025** | Onboarding; Self Checkout (SCO) routing through the BFF; first BAU bug-fixing; expensive-query investigations. |
| **Sep–Oct 2025** | Health Analytics recommendation engine; doctor-search enhancement; deployments 9.2.0 → 9.5.x. |
| **Nov–Dec 2025** | SCO Phase 2; digital-commerce (DPM) integration; doctor-data automation; deployments 9.6.0 → 10.0.1. |
| **Jan–Feb 2026** | **WhatsApp appointment reminder (D-1)**; **Funddock payment integration** kickoff; security hardening; payer management. |
| **Mar–May 2026** | Funddock rollout across teleconsult / telechat / secured booking / refill (QRIS, NOBU, Midtrans); WA reminder Phase 2; heavy patient-data support. |
| **Jun 2026** | Funddock on the upgraded Node runtime; signed-request hardening; ongoing BAU/data support. |

See [Stats](/siloam/stats) for the full quantitative breakdown.

## Contribution

A résumé-style summary of what I delivered:

- Integrated the **Funddock / Kairos Pay** payment gateway (Midtrans, NOBU, QRIS) across teleconsultation, telechat, secured booking, and prescription refill — with HMAC-signed requests, asynchronous callback handling, and idempotent change-payment.
- Designed and hardened a **WhatsApp D-1 appointment reminder** system (cron scheduler, templated deep links, reschedule/cancel handling) — eliminating duplicate and post-cancellation sends.
- Built the **Health Analytics recommendation engine** (doctor / product / MCU suggestions from BMI, blood pressure, and lab results) and integrated an **async AI analysis service** (Gemini) behind a Redis cache.
- Delivered **Self Checkout (SCO)** self-payment flows through the BFF, extended to unscheduled patients and lab/radiology orders.
- Optimised **expensive doctor-search queries**, fixed filter/pagination correctness, and pushed recurring data fixes into the database via **PostgreSQL triggers**.
- Resolved a high volume of **patient-data-integrity** issues across app, front-office, and EMR systems.
- Remediated a **blind SQL-injection** vulnerability and upgraded secret hashing; maintained **SonarQube quality gates** and unit-test coverage; supported **8+ mobile releases** (9.2.0 → 10.1.2).

## Technology stack

### Runtime & frameworks
- [Node.js](https://nodejs.org/) (legacy services on Babel; newer services on Node 24 LTS)
- [Express 4](https://expressjs.com/)

### Data & cache
- [PostgreSQL](https://www.postgresql.org/) via [Sequelize](https://sequelize.org/) (v4 & v6) + raw SQL
- [Microsoft SQL Server](https://www.microsoft.com/sql-server) (HOPE/HIS reads) via `mssql` / `tedious`
- [Redis](https://redis.io/)

### Payments & integrations
- Funddock / Kairos Pay, [Midtrans](https://midtrans.com/) (`midtrans-client`), NOBU, QRIS
- EMR / HIS (HOPE), [Agora](https://www.agora.io/) (teleconsult media), [OneSignal](https://onesignal.com/) & [Firebase](https://firebase.google.com/) (push), Gemini (AI), Insider SDK

### Quality & delivery
- [Mocha](https://mochajs.org/) / [Chai](https://www.chaijs.com/) / [Sinon](https://sinonjs.org/) / [NYC](https://github.com/istanbuljs/nyc) (Jest in cepetan)
- [SonarQube](https://www.sonarsource.com/) · [ESLint](https://eslint.org/) · [Docker](https://www.docker.com/) · [PM2](https://pm2.keymetrics.io/) · GitLab CI / GitHub Actions · [Elastic APM](https://www.elastic.co/observability/application-performance-monitoring)

Full breakdown on the [Tech Stack](/siloam/getting-started/tech-stack) page.

## Source code

The source code is private and owned by Siloam Hospitals; it is not available for public use.
