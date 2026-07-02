# MySiloam — Siloam Hospitals

::: info
Backend engineering work on **MySiloam**, the patient mobile app for Indonesia's largest private hospital network. This section documents the projects I delivered, the services I worked on, and the problems I solved — written for my future self and as a portfolio reference.

It contains **no credentials, patient data, or internal URLs** — only the engineering, at a level safe to share.
:::

## What is MySiloam?

**MySiloam** is the patient-facing mobile app (iOS & Android) for **Siloam Hospitals**. Patients use it to find doctors, book appointments (outpatient, teleconsultation, telechat, MCU), pay for services, view medical records and lab results, get AI-driven health analytics, and manage their profile and family members.

I work on the **backend platform** behind all of that — a Backend-for-Frontend (BFF) plus a set of microservices owned by my team.

<div class="brand-tip">
  New here? Start with the
  <a href="/siloam/getting-started/introduction">Introduction</a>.
</div>

## My role

**Backend Engineer — MySiloam Mobile Platform Team** · since **22 June 2025**.

The team builds features for the mobile app and keeps it running: bug-fixing, fixing data issues, integrating with cross-team services, and supporting the mobile development teams. I own features end-to-end — from cross-team contracts and SQL performance to security hardening, test coverage, and release support.

## Flagship contributions

- **Funddock payment-gateway integration** (Midtrans, NOBU, QRIS) across teleconsult, telechat, secured booking, and prescription refill — signed requests, async callbacks, idempotent change-payment. → [details](/siloam/projects/funddock-payment)
- **WhatsApp D-1 appointment reminder** — cron scheduler, templated deep links, reschedule/cancel handling, delivery auditing. → [details](/siloam/projects/whatsapp-reminder)
- **Health Analytics** recommendation engine + async AI integration (Gemini) + Redis caching. → [details](/siloam/projects/health-analytics)
- **Self Checkout (SCO)** — self-payment routing through the BFF, extended to unscheduled patients and lab/rad orders. → [details](/siloam/projects/self-checkout)
- **Doctor search** performance & correctness, and a high volume of **patient-data-integrity** fixes across app, front-office, and EMR systems.

See the full set on the [Projects](/siloam/projects/) page, and the [Resume Highlights](/siloam/resume-highlights) for résumé-ready bullets.

## Technology stack

**Languages/Frameworks:** JavaScript · Node.js · Express
**Data:** PostgreSQL · Microsoft SQL Server · Redis · Sequelize · raw SQL & query optimisation · DB triggers/functions
**Integrations:** Funddock/Kairos Pay · Midtrans · NOBU · QRIS · EMR/HIS (HOPE) · Agora · OneSignal · Firebase · Gemini (AI) · Insider SDK
**Practices:** BFF/microservices · webhook/callback integration · feature flags & version gating · scheduled jobs · SonarQube & test coverage · CI/CD (GitLab CI, GitHub Actions) · Docker · PM2 · Elastic APM

Full breakdown on the [Tech Stack](/siloam/getting-started/tech-stack) page.

## Explore this section

| Page | What's there |
|---|---|
| [Introduction](/siloam/getting-started/introduction) | Role, team, and the timeline of the work. |
| [System Architecture](/siloam/getting-started/architecture) | The BFF + microservices design, with a diagram. |
| [Tech Stack](/siloam/getting-started/tech-stack) | Every technology used, by area. |
| [Glossary](/siloam/getting-started/glossary) | Domain terms (SCO, FOO, DPM, HOPE, Funddock…). |
| [Projects & Features](/siloam/projects/) | Deep dives into each initiative. |
| [Services](/siloam/services/) | Reference for each backend service. |
| [Resume Highlights](/siloam/resume-highlights) | Résumé-ready bullet points. |
| [Stats](/siloam/stats) | Quantitative summary of the work. |

## Source code

The source code is private and owned by Siloam Hospitals; it is not available for public use. This documentation describes the engineering only.
