# msm-be-coupon

> **Role:** Coupon and promotion logic — creation, validation, redemption.

## Responsibility

`msm-be-coupon` manages the lifecycle of coupons and vouchers: creating codes, validating them at checkout, and handling redemption. It integrates with the booking/payment flow so promo campaigns (notably teleconsult/telechat) can offer discounts and free consults.

## Stack

| Area | Tech |
|---|---|
| Framework | Express 4 (Babel-transpiled ES) |
| Data | PostgreSQL via Sequelize 4 |
| Validation | Joi 14 + `joi-errors-for-forms`, `express-validator` |
| Scheduling | `cron` |
| Auth | `express-jwt`, `jsonwebtoken` |
| Testing | Mocha + Chai + Sinon + `mockdate`; NYC |
| Ops | PM2 (`ecosystem.config.js`), Docker |

## What I worked on here

- Populating **teleconsult** and **telechat** promo voucher codes.
- Supporting **partner** and general teleconsult **voucher requests**.
- Tracing a **`CHATFREE` "not valid"** production report and a teleconsult expensive-query error in the coupon path.

See [Coupon & Voucher](/siloam/projects/coupon-voucher) for the feature-level write-up.
