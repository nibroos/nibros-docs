# Doctor Search & Discovery

> **Timeline:** Aug 2025 → Mar 2026 · **Primary services:** `mysiloam-api`, `msm-be-mobile`, `msm-be-aggregator`
> **My role:** Backend developer — query performance, search correctness, and doctor-data automation.

Finding the right doctor is the top of the booking funnel, so its **performance** and **correctness** matter enormously. This was a long-running thread of work: making search fast, making results accurate, and keeping the underlying doctor data clean.

## Performance — the expensive query

Doctor search (and the related doctor-rating and `getDoctorHospitalWithAvailability` queries) were flagged as **expensive queries** causing latency. I worked through several rounds:

- Identified and **enhanced the expensive queries** (doctor rating, doctor + hospital availability, doctor search).
- Tuned the **search threshold** and **availability ("available today") flagging**.
- Fixed a class of bug where **pagination dropped filters** — filters were being lost across pages, so I corrected the query so filter + pagination compose correctly.
- Added **automated test runners** and unit tests around the doctor-search / DDG path to lock the behaviour in.

## Correctness — why a doctor doesn't show up

A recurring, high-touch class of production tickets was **"doctor X doesn't appear in the app."** Each needed investigation into the data and the query conditions. Common root causes I found and fixed:

| Cause | Fix |
|---|---|
| `real_name` not populated / not synced | **PostgreSQL trigger** to auto-generate `real_name` after doctor insert; an automation to create `real_name` for doctors. |
| Sync error from OpAdmin | Traced and fixed the doctor sync error. |
| Availability filter excluded valid doctors | Fixed the `available today` flagging query and doctor-leave handling. |
| Filter by hospital unit + specialty hid valid cards | Corrected the filter composition. |
| MCU consultation doctors shown when they shouldn't be | Excluded that doctor type from results. |
| Search didn't honour the filter / didn't match `real_name` | Aligned search matching to `real_name`. |
| Names containing **symbols** broke search/booking | Allowed symbols in patient/doctor names and routed/filtered around them. |

I also handled **temporary schedules, extensive schedules, and doctor leave** so availability reflects reality, and added a **fallback data-fetch** for the period when DoctorApp's backend was migrated to **AWS**.

## Discovery surfaces

- Adjusted the **recommended doctor** surfacing on article/healthpedia pages (they weren't appearing).
- Enhancements to the general **searching-doctor** experience shipped as part of the 9.5.x deployments.

## What I took away

- Practical **SQL performance** work: spotting expensive queries, and the subtle bug where **pagination and filtering interact** incorrectly.
- Pushing **data-integrity automation into the database** (triggers) so a recurring manual fix (`real_name`) becomes self-healing.
- That "doctor not showing up" is rarely one bug — it's a **decision tree** over data state, sync state, schedule state, and filter logic.
