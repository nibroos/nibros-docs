# Coupon & Voucher

> **Timeline:** Aug 2025 → Jan 2026 · **Primary service:** `msm-be-coupon` (with `mysiloam-api`)
> **My role:** Backend developer — voucher population and teleconsult/telechat promo support.

`msm-be-coupon` owns the coupon/voucher lifecycle — creation, validation, redemption. My work was mainly **populating and supporting promo voucher codes** for teleconsultation campaigns.

## What I did

- **Populated coupon codes** for **teleconsult** and **telechat** promos so campaigns could run.
- Supported **partner voucher** requests (e.g. a telemedicine partner promo) and general **teleconsult voucher** requests.
- Traced a production issue where a promo code (`CHATFREE`) was reported **not valid**, to find where validation rejected it.
- Fixed a teleconsult **expensive-query** error that surfaced in the coupon/teleconsult path.

## How it fits

Coupons plug into the booking/payment flow: at checkout the app validates a code against `msm-be-coupon`, which decides eligibility and the discount, and the result feeds the payment amount (which, for teleconsult/telechat, then flows through [Funddock](/siloam/projects/funddock-payment)).

## What I took away

- The operational side of promotions: **populating valid codes**, and the importance of clear **validation rules** so a "not valid" report can be traced to a specific condition rather than guessed at.
