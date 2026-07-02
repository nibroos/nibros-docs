# Patient Data Integrity

> **Timeline:** ongoing throughout · **Primary services:** `msm-be-mobile`, `mysiloam-api`, `msm-be-aggregator`
> **My role:** Backend developer / production support — root-cause analysis and correction of patient data and the logic behind it.

A large, continuous part of the job was keeping **patient data correct** — names, dates of birth, phone numbers, emails, contacts, and medical-record access — across the app, the front-office system, and the EMR. Most arrived as **Help-Center (HC) email tickets** from real patients who couldn't book, couldn't see records, or saw the wrong details.

::: info Privacy
All patient-specific tickets are described here **generically**. No patient names, identifiers, or record contents are included.
:::

## The classes of issue

### Identity mismatches
The most common and most sensitive: a patient's **name, DOB, gender, phone, or email** differing between the app's home screen, the patient profile, and the medical record — including for **"others"** (family) profiles. Root causes ranged from **contact_id / patient_id mismatches** to data drift between the front office and the app. The fix pattern was: **collect the data**, identify which system held the source of truth, then **correct the record** (often a targeted query/update) and adjust the logic that let them drift.

### Medical-record access
Patients unable to open their medical record, or seeing a profile **"under review/verification"** indefinitely, or hitting blank/HTTP-400/401 errors on record/PIN/token flows. These needed tracing through the BFF → mobile → EMR path to find where the access check or data join failed.

### Appointment & booking blocks
Patients who **couldn't create an appointment** because of an underlying data problem (mismatched profile, invalid contact, payer/insurance selection issues). Each required reproducing the failure, locating the offending field, and correcting it so booking could proceed.

### OCR & profile entry
Discrepancies between **OCR-extracted ID data** (e.g. DOB) and the saved profile, plus validation errors on profile update (`email_not_valid`, postal-code crashes).

## How I investigated

Every ticket started with locating *where* the truth diverged. I used three complementary angles, picking whichever fit the symptom:

| Method | What I looked at | Best for |
|---|---|---|
| **Database** | Querying the app DB (PostgreSQL) and the HOPE/HIS reads (MSSQL) directly to compare `tm_contact` / `tm_patient` / appointment records across systems. | Identity mismatches, `contact_id` / `patient_id` divergence, "which system is wrong". |
| **Logs — APM (Kibana)** | Tracing the failing request through Elastic APM / Kibana to find the exact endpoint, payload, and error the user hit. | Blank/HTTP-400/401 errors, request-token/PIN failures, "it just fails". |
| **Mobile front-end** | Reproducing on the Android / iOS app to see the user-facing symptom and the request the app actually sends. | Wrong display vs. stored data, version-specific behaviour, UI/UX-driven bugs. |

### The repeatable loop

1. **Reproduce** — on the app (Android/iOS) and/or in UAT/preprod.
2. **Trace** — follow the request through **APM / Kibana** to the failing call.
3. **Collect** — compare the patient's data across systems via the **database** (read-only first).
4. **Locate the source of truth** and the point of divergence.
5. **Correct** the data with a targeted, reviewed change.
6. **Fix the logic** (or add a guard) so the same divergence can't recur.
7. **Hand back** to QA / Help Center for re-test and closure.

Many tickets paired a **bug** (the patient symptom) with a **`[BE] Pengecekan…` subtask** (the investigation) — reflecting that the analysis was itself the deliverable.

## Patterns I added to reduce recurrence

- Guards/validation so invalid profile states can't be saved.
- **Bulk corrections** (e.g. contact-address backfills in UAT) done safely and reviewed.
- Allowing **symbols in names** so valid patients stop being rejected by over-strict validation.
- Improved **error wording and logging** so Help Center can self-triage more tickets.

## What I took away

- A disciplined, **read-before-write** approach to production data — establish source of truth before touching anything.
- That a huge share of "app bugs" are actually **data-integrity** problems spanning multiple systems, and the durable fix is closing the gap that let the data diverge, not just patching the symptom.
- Communicating clearly with non-engineering stakeholders (Help Center, QA) to turn vague patient complaints into precise, reproducible engineering problems.
