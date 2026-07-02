# WhatsApp Appointment Reminder (D-1)

> **Timeline:** Dec 2025 → May 2026 (Phase 2 ongoing) · **Primary services:** `mysiloam-api`, `msm-be-mobile`
> **My role:** Backend developer — owned the scheduler, the message generation, and the reliability/security hardening.

A system that sends patients a **WhatsApp reminder one day before** their appointment (D-1), with a deep link back into the app, covering normal, rescheduled, and temporary-schedule appointments — and crucially, **not** sending to cancelled ones.

## The problem

Patients were missing appointments. The team wanted a proactive **D-1 WhatsApp reminder** that:

- fires reliably the day before, for all eligible appointment types;
- includes a **direct deep link** so the patient can act from the message;
- updates correctly when an appointment is **rescheduled** or set to a **temporary** schedule;
- is **not** sent for **cancelled** appointments;
- records delivery outcomes (including "no response") for audit.

Because it sends messages to real patients, correctness and idempotency mattered as much as the happy path.

## What I built

### Contracts first
Defined the **request/response contracts** for the WhatsApp reminder between the front office (FO) system, `msm-be-mobile`, and `mysiloam-api` — including a website/WhatsApp reminder contract and the header/template format — before wiring the integration.

### The scheduler
A **cron-driven scheduler** in `mysiloam-api` (the BFF hosts scheduled jobs) that:

- generates the WhatsApp reminder payloads for D-1 appointments;
- applies the **message template** and **push-notification template**;
- embeds a **direct FE deep link** so the patient lands in the right screen;
- handles **reschedule** and **temporary (pre-regist) schedule** cases by re-evaluating eligibility at send time.

### Reliability fixes (Phase 1 → Phase 2)
The hard part was making it trustworthy. Issues I traced and fixed:

| Issue | Fix |
|---|---|
| Reminders **still sent after cancellation** | Re-fetch appointment state at send time and exclude cancelled appointments. |
| **Duplicate** reminders | De-duplicate generation so a single appointment yields a single reminder. |
| **"No response"** outcomes not logged | Capture and persist the no-response result so delivery is auditable. |
| Reminder didn't match **production behaviour** | Aligned the scheduler logic to the real FO appointment lifecycle. |
| Reminder not firing for **temporary / pre-regist** schedules | Added handling for the temporary-schedule appointment path. |

### Security hardening
The public WhatsApp **confirmation** endpoint was hardened (the "improve public WhatsApp confirmation security" work) so the confirmation flow couldn't be abused — paired with the broader security work (see [Security & Code Quality](/siloam/projects/security-quality)).

### Quality
Backfilled **unit tests and Sonar coverage** for the reminder scheduler in both `mysiloam-api` and `msm-be-mobile`, including the secured-booking reminder case.

## Phase 2

A follow-up phase extended the reminder (wording change-requests for D-1 items, integration of the reminder contract with the front office, and scheduler adjustments) to broaden coverage and tighten the message content.

## What I took away

- Designing an **idempotent scheduled job** that sends real-world messages: the dangerous bugs are duplicates and stale state, so re-validating at send time and de-duplicating generation are non-negotiable.
- The value of writing the **contract** between systems before integrating, especially across team boundaries (FO ⇄ mobile ⇄ BFF).
- Treating a "simple reminder" as a reliability problem, with logging/auditing of every delivery outcome.
