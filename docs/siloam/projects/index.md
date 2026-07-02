# Projects & Features

The major bodies of work I delivered, grouped by initiative. Each page covers the **problem**, the **approach**, and **what I built** — at a level safe to keep and share (no credentials, patient data, or internal URLs).

## Flagship initiatives

| Project | What it was | Services touched |
|---|---|---|
| [Funddock Payment Integration](/siloam/projects/funddock-payment) | Integrating the Funddock/Kairos Pay gateway (Midtrans, NOBU, QRIS) across teleconsult, telechat, secured booking and prescription refill. | msm-be-payment, mysiloam-api, msm-be-mobile |
| [WhatsApp Appointment Reminder](/siloam/projects/whatsapp-reminder) | A D-1 WhatsApp reminder system with scheduling, reschedule/cancel handling, and security hardening. | mysiloam-api, msm-be-mobile |
| [Health Analytics](/siloam/projects/health-analytics) | Lab/vital analysis, AI insights, and a doctor/product/MCU recommendation engine. | mysiloam-api, msm-be-aggregator, msm-be-cepetan |
| [Self Checkout (SCO)](/siloam/projects/self-checkout) | Routing checkout/self-payment through the BFF and extending it to unscheduled patients and lab/rad orders. | mysiloam-api, msm-be-mobile, msm-be-aggregator |

## Feature & platform work

| Project | What it was |
|---|---|
| [Doctor Search & Discovery](/siloam/projects/doctor-search) | Performance and correctness of the doctor-search experience — expensive-query optimisation, filters, availability, data sync. |
| [Patient Data Integrity](/siloam/projects/patient-data) | Correcting patient/profile/medical-record data and the logic that produces it; high-volume Help-Center support. |
| [Payer Management](/siloam/projects/payer-management) | Add/edit payer (insurance) data and the check-in/payment flows that depend on it. |
| [Delivery Address](/siloam/projects/delivery-address) | Address labels, cross-platform (Kiosk ⇄ Mobile) sync, and delivery-fee correctness. |
| [Digital Commerce Integration](/siloam/projects/digital-commerce) | Surfacing digital-commerce (DPM) appointments in the app and handling channel-specific rules. |
| [Coupon & Voucher](/siloam/projects/coupon-voucher) | Teleconsult/telechat promo voucher population and validation. |
| [Security & Code Quality](/siloam/projects/security-quality) | SQL-injection fix, encryption upgrade, signed requests, Sonar/coverage, refactors, release hardening. |

## Releases I helped ship

App deployments I prepared builds for and supported: **9.2.0, 9.5.0, 9.5.1, 9.6.0, 10.0.1, 10.1.0, 10.1.1, 10.1.2** — plus numerous patient-portal and BAU-item builds.
