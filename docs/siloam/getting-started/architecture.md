# System Architecture

## The big picture

The MySiloam mobile app never talks to core systems directly. Every request flows through a **Backend-for-Frontend (BFF)**, which fans out to a set of microservices owned by the team, which in turn integrate with external systems (payment gateway, EMR/HIS, AI, kiosk, digital commerce).

```
┌───────────────────────────────────────────────────────────────────────────┐
│                        MySiloam Mobile App (iOS / Android)                  │
│                          + Patient Portal (web)                             │
└───────────────────────────────────────────────────────────────────────────┘
                                      │  token, x-source, x-version, x-lang
                                      ▼
┌───────────────────────────────────────────────────────────────────────────┐
│                          mysiloam-api  —  BFF Layer                         │
│   • JWT/token validation        • request routing & forwarding              │
│   • response transformation     • app-version gating (compare-versions)     │
│   • cron jobs (reminders, etc.) • CSV/PDF/Excel report generation           │
└───────────────────────────────────────────────────────────────────────────┘
        │                 │                 │                 │            │
        ▼                 ▼                 ▼                 ▼            ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌────────────┐ ┌──────────┐
│ msm-be-mobile│  │msm-be-       │  │ msm-be-      │  │ msm-be-    │ │ msm-be-  │
│ core mobile  │  │aggregator    │  │ payment      │  │ cepetan    │ │ coupon   │
│ business     │  │ data aggreg. │  │ pay gateway  │  │ Redis cache│ │ promos   │
│ logic        │  │ (HOPE/HIS)   │  │ (Funddock)   │  │ (HA data)  │ │          │
└──────────────┘  └──────────────┘  └──────────────┘  └────────────┘ └──────────┘
        │                 │                 │                 │
        └─────────────────┴────────┬────────┴─────────────────┘
                                    ▼
┌───────────────────────────────────────────────────────────────────────────┐
│                              External Systems                               │
│  HOPE / HIS (hospital info system)   EMR (exam, lab, IPD SOAP)              │
│  Funddock / Kairos Pay  →  Midtrans, NOBU, QRIS                            │
│  AI Analysis API (Gemini)   Agora (video/chat)   OneSignal / Firebase (push)│
│  Insider SDK (marketing)    Aidoo / Kiosk        Digital Commerce (DPM)     │
└───────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌───────────────────────────────────────────────────────────────────────────┐
│        PostgreSQL (app data, via Sequelize)  +  MSSQL (HOPE/HIS reads)      │
│                          Redis (cache & cross-service state)                │
└───────────────────────────────────────────────────────────────────────────┘
```

## Layer responsibilities

### BFF — `mysiloam-api`
The single entry point for the mobile app. It owns **authentication**, **request routing**, and **response shaping** so the app gets exactly the payload shape it needs regardless of how many downstream services were involved. It also hosts **scheduled jobs** (e.g. the WhatsApp reminder cron, prescription-refill notification scheduling) and **report generation** (CSV/Excel/PDF). Because it sits in front of everything, app-version gating (`compare-versions`) lives here — back-versioned apps get back-compatible responses.

### Core business logic — `msm-be-mobile` & `msm-be-aggregator`
`msm-be-mobile` holds the original mobile business logic: appointments, payments, profile, integrations. `msm-be-aggregator` is the **next-generation** version — it aggregates and unifies data from internal services and external APIs (notably **HOPE/HIS**, which it reads via **MSSQL**). The two run side by side; aggregator adds capability without replacing mobile.

### Payment — `msm-be-payment`
Owns payment processing and the **Funddock (Kairos Pay)** gateway integration, which in turn fronts **Midtrans**, **NOBU**, and **QRIS**. Handles transaction creation, payment-method routing, callbacks/notifications, and change-payment flows. It's the newest stack (Node 24, Sequelize 6, `midtrans-client`).

### Cache — `msm-be-cepetan`
A purpose-built, **Redis-backed** service for serving **Health Analytics** data fast — homepage summaries and detail pages — without hammering the EMR/HIS systems on every request. Modern ESM Node service.

### Promotions — `msm-be-coupon`
Coupon and voucher lifecycle: creation, validation, redemption — used by teleconsult/telechat promo campaigns.

## Cross-cutting concerns

- **Auth**: token/JWT validated at the BFF; downstream calls carry service-to-service context.
- **Source/version propagation**: the app sends `x-source` (iOS / Android / Kiosk), `x-version`, and `x-lang`; these are forwarded downstream so behaviour and wording can adapt per platform, version, and language.
- **Observability**: Elastic APM across services; rotating file logs; structured error logging added during BAU.
- **Quality gates**: SonarQube + ESLint (airbnb-base), with Mocha/Chai/Sinon (or Jest in cepetan) unit tests and NYC coverage enforced in CI.
- **Delivery**: GitLab CI / GitHub Actions → Docker images → PM2-managed Node processes.

## Request example

A teleconsultation payment, end to end:

1. App → **mysiloam-api**: "pay for this teleconsult" with `token`, `x-source`, `x-version`.
2. BFF validates the token, forwards to **msm-be-payment**.
3. msm-be-payment builds a **Funddock** payload (signed hash), picks the payment method (QRIS / Midtrans / NOBU), and creates the transaction.
4. Gateway responds; the app shows the payment screen (e.g. a QRIS code).
5. On payment, the gateway fires a **callback**; msm-be-payment confirms the order, updates the appointment/admission, and the app reflects the paid state.

This flow — and the many edge cases around it (expiry, change-payment, duplicate cards, callback mismatches) — is documented in [Funddock Payment Integration](/siloam/projects/funddock-payment).
