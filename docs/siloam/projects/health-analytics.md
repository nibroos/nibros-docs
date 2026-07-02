# Health Analytics (HA)

> **Timeline:** Sep 2025 → May 2026 · **Primary services:** `mysiloam-api`, `msm-be-aggregator`, `msm-be-cepetan`
> **My role:** Backend developer — recommendation engine, data correctness, AI integration, and caching/performance.

Health Analytics turns a patient's clinical data — **vital signs, blood pressure, lab results, BMI, vaccinations, child growth** — into an at-a-glance health summary, AI-generated insights, and **actionable recommendations** (which doctor to see, which products/MCU packages to consider).

## Architecture

HA is a three-service feature:

```
Mobile App
   │
   ▼
mysiloam-api (BFF)  ── token, response shaping, version gating
   │
   ├──────────────► msm-be-aggregator   business logic, recommendation engine,
   │                                     data aggregation (EMR/HIS), vaccine mgmt
   │
   └──────────────► msm-be-cepetan       Redis-cached homepage & detail data
                                         (fast reads without hitting EMR every time)
   ▼
External: EMR (examination, lab, IPD SOAP), HIS (patient), AI Analysis API (Gemini)
   ▼
PostgreSQL: tm_health_analytic, tm_vaccine_schedule,
            tm_health_analytics_lab_test_name / _category, tm_contact / tm_patient
```

- **mysiloam-api** validates the token, forwards, and shapes the response for the app.
- **msm-be-aggregator** holds the business logic, recommendation engine, and data aggregation.
- **msm-be-cepetan** serves homepage and detail data from **Redis** so the experience stays fast without re-querying EMR/HIS every time.

## The recommendation engine

A big chunk of my HA work was the engine that recommends **doctors, products, and MCU/add-on packages** based on analysis results — primarily **BMI** and **blood pressure (TD)** categories, and **lab** results.

What I built and then iterated heavily on:

- Specialty recommendation from analysis category.
- MCU & **add-on package** recommendation that follows the patient's MCU package.
- Condition handling per category (BMI & blood pressure thresholds, including an **age > 18** rule).
- Mapping **lab item names → categories** so the right analysis and recommendations surface.

### Bugs that defined the work
The engine had to be precise — wrong recommendations are a clinical-trust problem. Issues I fixed:

| Symptom | Fix area |
|---|---|
| Recommended doctor pulled from **latest admission** instead of the analysis flow | Source-of-recommendation logic |
| **Duplicate** add-on / package recommendations | De-duplication in the recommendation query |
| Recommendation card read bookings from **entrypoints other than HA** | Entrypoint scoping |
| Product recommendation appearing for accounts **with** lab results when it shouldn't | Condition gating |
| Add-on package missing when it should follow the MCU package | Package-following logic |
| Recommendation page **decode/blank error** for accounts with lab data | Data parsing & fallback |

## Data correctness

- **Lab result freshness:** a recurring requirement was to **only consider results within the last 3 months** (and the same windowing for vital signs), so stale highlights don't mislead patients. I added the max-3-months filters and covered the > 18-year and deleted-record cases.
- **Lab dates & highlighting:** fixed mismatched dates and overlapping/missized UI-driving fields on the analysis pages.
- **Invoice access:** fixed inability to download invoices for records before 2025.

## AI integration

- Migrated the AI analysis model from **Gemini 2.0 to Gemini 2.5**.
- Built the **AI Health Analytics** APIs: a **POST feedback** endpoint for AI insights, request/response adjustments, and the **callback API** that returns AI analysis asynchronously (plus fixes to that callback).
- Added a **fallback mechanism** when fetching doctor data (DDG) so the AI/recommendation flow degrades gracefully during the DoctorApp → AWS migration.

## Performance & caching

- HA homepage and detail reads are served from **`msm-be-cepetan`** (Redis) to keep them fast and to shield EMR/HIS from request spikes.
- Optimised how lab-result data is collected for analysis (reducing expensive reads).

## What I took away

- Building a **rule-based recommendation engine** in a domain where wrong output erodes trust — precise condition gating, careful source-of-truth selection, and de-duplication matter.
- Practical **clinical data hygiene**: time-windowing results, handling deleted records, age-based rules.
- Integrating an **async AI service** (callback pattern) and a **read-through cache** to keep a data-heavy feature responsive.
