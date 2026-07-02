# Payer Management

> **Timeline:** Oct 2025 → Feb 2026 · **Primary services:** `mysiloam-api`, `msm-be-mobile`
> **My role:** Backend developer — payer CRUD and the booking/check-in flows that depend on it.

"Payer" is **who pays** for a service — self, an insurance company, a corporate account, or another profile. The app needed patients to **add and edit payer (insurance) data** and have that choice flow correctly into booking, check-in, and payment.

## What I built / fixed

### Add / edit payer
Backend support for patients to **add and edit payer data**, choose an **insurance company** from a list, and have the selection persist. This included adding new insurers (e.g. **Fullerton**) to the available list.

### The flows that depend on payer
The interesting bugs were where a payer change rippled into other flows:

| Symptom | Root cause |
|---|---|
| **Check-in failed after changing payer** | Check-in eligibility not re-evaluated against the new payer. |
| SCO button disappeared when payer changed PRIVATE → PAYER | Eligibility gating (see [Self Checkout](/siloam/projects/self-checkout)). |
| Add-payer success didn't navigate to the added list; data missing | Post-save navigation/state (front-end paired with BE response shape). |
| List of added payers empty after returning from add/edit | Response/list refresh after mutation. |
| Save button allowed **multiple submissions** (iOS) | Idempotency on submit. |

### Wording & UX correctness
A run of smaller fixes for **wording and UI** consistency in the payer flow — missing field copy, insurer-list layout, the **"PAYOR" vs "PAYER"** typo, and bottom-sheet behaviour after edit — coordinated with UI/UX.

## What I took away

- A "simple CRUD" feature (add/edit payer) is mostly about the **downstream consequences** of a change — check-in, SCO eligibility, and payment all read the payer, so changing it must re-validate them.
- **Idempotent submits** matter anywhere money/eligibility is involved (the multiple-submission bug).
