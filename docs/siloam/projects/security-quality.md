# Security & Code Quality

> **Timeline:** ongoing, concentrated Oct 2025 → Jun 2026 · **All services**
> **My role:** Backend developer — security fixes, hardening, refactors, test coverage, and release readiness.

A cross-cutting thread of work to keep the platform **secure, maintainable, and releasable**.

## Security

| Work | Detail |
|---|---|
| **Blind SQL Injection fix** | Remediated a High-severity blind SQL-injection finding in the mobile backend. |
| **Encryption upgrade** | Migrated password/secret hashing from `scryptSync` to **`pbkdf2Sync`** for the agreed parameters. |
| **Payment request signing** | Added **HMAC-style hash signing** and a **signature key** to Funddock payment requests; fixed **signed GET** handling for the funddock detail endpoint. |
| **Public WhatsApp confirmation** | Hardened the public WhatsApp **confirmation** endpoint against abuse. |
| **Android hardening** | Updated **DexGuard** as part of release prep. |
| **Auth/redirection guards** | Handled redirection when a patient is **not logged in** (teleconsult, AI booking room) so unauthenticated deep links don't break or leak. |

## Code quality & tech debt

- **SonarQube** was a merge gate. A steady stream of my subtasks was **"fix Sonar issue"** / **"add unit test / coverage"** across `mysiloam-api`, `msm-be-mobile`, `msm-be-payment`, and `msm-be-aggregator` — covering new features (funddock callbacks, WA reminder, address labels, DPM cancel) and cleaning legacy findings.
- **Refactors:** broke down `doctor.controller.js` functions flagged by Sonar; refactored deprecated **Agora Chat** code.
- **Error handling:** added **try/catch around JSON parsing**, and proper **OneSignal** error handling so push failures are caught and logged rather than crashing flows.
- **Crashlytics:** fixed a series of iOS/Android crashes surfaced by **Firebase Crashlytics** (e.g. postal-code input, give-feedback menu, article/explore sections, take-photo confirmation dialog).
- **UML / knowledge:** authored a **UML sequence diagram for the payment callback** flow, and ran knowledge-transfer sessions (SCO, HA, Funddock).

## Release engineering

I regularly **prepared builds and supported deployments** for the mobile app and patient portal:

- App versions: **9.2.0, 9.5.0, 9.5.1, 9.6.0, 10.0.1, 10.1.0, 10.1.1, 10.1.2**.
- Patient-portal builds and recurring **BAU-item** deployments.
- Pre-prod build prep, build verification, and post-deploy production-issue support.

This included **app-version gating** (`compare-versions`) so new behaviour ships without breaking back-versioned clients, and managing back-version compatibility for things like HA recommendations (`< 10.0.1`) and digital-commerce cancellation.

## What I took away

- Security work in a **payment + health-data** context is non-negotiable: signed requests, modern KDFs, hardened public endpoints, and auth guards on every deep link.
- **Quality gates (Sonar + coverage)** as a routine, not an afterthought — most features shipped with a paired coverage subtask.
- The operational reality of **mobile release trains**: version gating, build prep, and being on hand for production issues right after a deploy.
