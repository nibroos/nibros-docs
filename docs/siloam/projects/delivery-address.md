# Delivery Address

> **Timeline:** Sep 2025 → Apr 2026 · **Primary services:** `msm-be-mobile`, `msm-be-aggregator`
> **My role:** Backend developer — address CRUD API, cross-platform sync, and delivery-fee correctness.
> **Jira area:** Patient In Hospital Experience (Non-Clinical).

Delivery addresses drive **prescription/medicine delivery** and its **delivery fee**. The work covered the address CRUD APIs, a new **address label** concept, and a thorny set of **kiosk ⇄ mobile sync** bugs.

## Address label feature

Added an **address label** (e.g. "Home", "Office") across the full CRUD surface:

- **Create** address — new payload field to save the label.
- **Update** address — new payload field to save the label.
- **Get** primary / get address — new response property for the label.
- **Get all** contact addresses by `userId` & contact.

Backfilled with **Sonar coverage** and a safe **bulk update** of contact addresses in UAT.

## Cross-platform sync

A high-severity class of bug: **address data saved on one platform not appearing on another** (kiosk ↔ mobile ↔ Aidoo). Symptoms included address used on the kiosk not saved to Aidoo, and "data saved not synced between platforms." The fix work involved tracing where each platform wrote/read the address and reconciling them onto a consistent source, plus fixing kiosk-side **map errors** and the inability to update address info on the kiosk.

## Delivery-fee correctness

Delivery fee is sourced from **HOPE** (sales item), and several bugs came from reading it wrong:

| Symptom | Fix |
|---|---|
| Delivery fee not getting replaced / showing **0** | Corrected the source (HOPE sales item) and the fee resolution. |
| Different expedition shown on the **Payment Receipt** than selected | Aligned receipt display to the chosen expedition. |
| Appt time & delivery fee "0" missing on iOS receipt | Fixed the payment-receipt payload. |
| Refill pricing pulled the wrong delivery fee | Corrected delivery-fee retrieval from HOPE for refill & SCO. |

## What I took away

- **Cross-platform data ownership** is a design problem: when kiosk, app, and a third system can all write the same entity, you need one clear source of truth or they drift.
- Reading a derived value (delivery fee) from the **correct upstream field** in HOPE is half the battle — many "wrong fee" bugs were really "wrong source" bugs.
