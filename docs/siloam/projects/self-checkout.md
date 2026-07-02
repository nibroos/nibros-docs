# Self Checkout (SCO)

> **Timeline:** Jul 2025 → Apr 2026 · **Primary services:** `mysiloam-api`, `msm-be-mobile`, `msm-be-aggregator`
> **My role:** Backend developer — BFF routing, self-payment flows, and cross-platform (kiosk/app) correctness.

Self Checkout lets patients complete checkout and **self-payment** for their admission without queuing at a counter — from the mobile app or a hospital **kiosk**. My work spanned the original routing through the BFF and **SCO Phase 2**, which extended it to unscheduled patients and lab/radiology orders.

## Phase 1 — routing through the BFF

The first job was to make the BFF (`mysiloam-api`) a clean pass-through to the **Front Office Service** for the checkout endpoints:

- Route `checkout/appointment`, `checkout/appointment/transaction`, and `checkout/order` to the Front Office Service.
- **Forward source & version headers** (`x-source` = iOS / Android / Kiosk, `x-version`, `x-lang`) downstream so behaviour and wording adapt per platform.

This established the pattern the rest of SCO built on.

## Phase 2 — extending self-payment

Phase 2 broadened who and what could self-checkout:

- **Pre-regist self payment** — register a pre-registration self-payment using a **HOPE admission id**.
- **Get transaction status** — accept an **admission id as an alternative to appointment id**, so unscheduled flows work.
- **Lab / Rad** — allow ordering **lab and radiology without an appointment id**, and fix admission & device-type resolution for lab/rad.
- **Unscheduled outpatient** — self-payment logic for patients who don't have a scheduled appointment.

## The bugs — eligibility & visibility

Most SCO bugs were about **when the SCO button should appear** and **whether the payment state is correct** — driven by payer type, admission state, and entrypoint:

| Symptom | Root cause |
|---|---|
| SCO button missing when payer changed from PRIVATE to **PAYER** | Button-eligibility condition |
| SCO button shown for **Payer** admissions where it shouldn't be | Eligibility gating |
| Still received a **self-payment link** for **EDC** payment method | Payment-method exclusion |
| Couldn't SCO after entering SOAP with a payer then switching to **private** | State transition handling |
| Payment label still **"waiting payment"** after expiry | Expiry/state sync |
| Error **422** on SCO (cross-team) | Added proper error logging to localise the failure, then fixed |
| SCO button entrypoint not tracking the **queue** correctly | Entrypoint flag |

I also added **proper error logging** to SCO so opaque failures (like the 422) could be diagnosed, and contributed **unit tests / Sonar coverage** for the SCO log path in `msm-be-aggregator`.

## Cross-platform data sync

SCO exposed a class of **kiosk ⇄ mobile** data-consistency bugs (e.g. address data saved on the kiosk not syncing to the app, or vice-versa). Those are documented in [Delivery Address](/siloam/projects/delivery-address) and [Patient Data Integrity](/siloam/projects/patient-data), since the fixes lived in the shared address/patient layer.

## What I took away

- Using the **BFF as a routing/normalisation layer** — forwarding source/version context so one backend serves app and kiosk with platform-appropriate behaviour.
- That **eligibility logic** (who sees the button, in what state) is where checkout features actually live or die — most bugs were boolean-condition correctness against payer/admission state.
- Making cross-team failures **observable** (structured error logging) before trying to fix them.
