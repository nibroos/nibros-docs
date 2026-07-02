# Funddock Payment Integration

> **Timeline:** Jan 2026 → ongoing (Jun 2026) · **Primary services:** `msm-be-payment`, `mysiloam-api`, `msm-be-mobile`
> **My role:** Backend integration engineer — contracts, transaction flow, callbacks, and the long tail of edge cases.

This was the single largest engineering initiative of my time on the team: replacing/extending the app's payment path with **Funddock (Kairos Pay)** — an aggregation layer that fronts multiple payment channels (**Midtrans**, **NOBU**, **QRIS**). It rolled out progressively across product types: teleconsult, telechat, secured booking, and prescription refill.

## The problem

The mobile app needed a unified, gateway-backed payment experience across very different product flows, each with its own quirks:

- **Teleconsult / Telechat** — pay for the consult, then pay again for **follow-on orders (FOO)** like prescriptions or labs that the doctor adds mid-session.
- **Secured Booking** — pay up front to hold an appointment slot.
- **Prescription Refill** — pay for a re-order of medication.

Each could be paid by **QRIS**, **Midtrans** (bank transfer / credit card / GoPay), or **NOBU**, for **self** or for **another profile (others)**, on **iOS / Android**, with the ability to **change payment method** before completing. Every one of those axes produced edge cases.

## What I built

### Transaction creation & payload signing
A Funddock utility layer (`funddock.function.js`) responsible for the whole request lifecycle:

- `generateHashForFunddock` — HMAC-style **hash signing** of every request to the gateway.
- `buildFunddockPayload` / `buildFunddockHeaders` — construct the transaction payload and signed headers.
- `defineSelectedPaymentMethodId` — route to the right channel (QRIS / Midtrans / NOBU) based on product and user choice.
- `getOverriddenHopeOrganizationId` — map the request to the correct **HOPE** hospital/organisation id.
- `defineTeleType` — distinguish **telechat vs teleconsult** so the right purpose/product config is applied.
- `isFunddockCovered` / `overrideProducts` — gate which product codes are actually routed through Funddock, so the team could **enable products incrementally** (e.g. `overrideProducts: [productCode.PREPAID]`) and flip the whole integration on/off via config (`FUNDDOCK_IS_ACTIVE`).
- `createFunddockTxService` — the wrapper the appointment controller calls in the booking and change-payment flows.

### Callback / notification handling
The gateway confirms payment asynchronously. I implemented and repeatedly hardened the **callback path** (Midtrans notification → Funddock → our services):

- Detect a Funddock order (by `FDR` prefix / `defineIsFunddockMidtransTx`) and validate the payment method before acting.
- On success, confirm the order, update the appointment/admission, and create the admission record (`funddock_id` / `funddock_allocation_id` populated).
- Redirect to the Midtrans URL when applicable.

### Change-payment & QRIS specifics
- Special **QRIS expiry-time** handling.
- **Change-payment-method** flow that survives being invoked repeatedly without duplicating the appointment or losing the new method.

## Edge cases & production bugs I resolved

This integration's value was in the edge cases. A representative set of issues I fixed:

| Symptom | Root-cause area |
|---|---|
| FOO QRIS for telechat/teleconsult couldn't be paid | QRIS link generation |
| After a successful FOO QRIS payment, the amount showed **0** | Invoice total computation in the callback |
| Telechat payment succeeded but didn't land in Kairos Pay | Callback not confirming the order |
| Teleconsult paid but card stuck on **"Waiting for Payment"** | Status sync after callback |
| Change-payment on secured booking created a **duplicate** appointment | Idempotency in change-payment |
| Booking for **others** recorded the **main account** as payor | Payor name/relation in the payment payload |
| Refill paid via Midtrans succeeded but didn't reach the payment system | Funddock order detection in Midtrans flow |
| Payment-method value showed the raw value instead of the **display name** (iOS) | Response mapping |
| User redirected to a **previous** QRIS success page | Stale transaction reference |
| Refill card not appearing in **Activity** when unpaid | Activity list query for Funddock orders |

(Many of these were paired "Bug → [BE] fix" tickets across `msm-be-payment` and `mysiloam-api`.)

### LTS recovery merge
During a Node **LTS upgrade**, a merge conflict silently dropped a large chunk of Funddock code. I performed a careful recovery merge (**7 files, ~490 insertions**), including converting the Funddock modules from **ES Modules to CommonJS** to match the target codebase, restoring the signed endpoint config (`/signed`), re-adding the `midtransPaymentMethods` recognition and `defineIsFunddockMidtransTx`, and re-wiring the appointment controller's Funddock initialisation in booking, update-payment, and callback paths. Verified with the test suite (671 passing) and node syntax checks before PR.

### Security hardening
- Added a **signature key** to payment requests.
- Fixed **signed GET** request handling for the funddock detail endpoint.
- Adjusted the integration to run correctly on the **upgraded Node runtime**.

## How it's operated

- **Feature flag:** `FUNDDOCK_IS_ACTIVE` in env config turns the integration on/off.
- **Incremental product enablement:** add a product code to `overrideProducts` in the payment/change-payment functions to route it through Funddock.
- **QRIS visibility:** the app's `FUNDDOCK_VERSION` gate controls when the QRIS method appears, so the channel only shows on app versions that support it.
- **Verification:** admissions linked to Funddock have `funddock_id` & `funddock_allocation_id` populated and are visible in the Kairos Pay admin.

## What I took away

- How to integrate an **asynchronous, callback-driven payment gateway** safely: signed requests, idempotent change-payment, and reconciling the async callback with the user-facing status.
- The discipline of **incremental rollout** behind flags and per-product allow-lists in a high-stakes (money) domain.
- Recovering non-trivially lost code during a runtime migration, with module-system conversion and a test-backed safety net.
