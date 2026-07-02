# Glossary

Domain terms and acronyms that appear throughout this work log. Many are specific to the hospital/healthcare and MySiloam context.

## Products & appointment types

| Term | Meaning |
|---|---|
| **OPD** | Outpatient Department appointment (in-person doctor visit). |
| **MCU** | Medical Check-Up package. |
| **Teleconsult** | Video teleconsultation with a doctor (uses Agora). |
| **Telechat** | Chat-based teleconsultation. |
| **Secured Booking** | Appointment that requires up-front payment to hold the slot. |
| **Prescription Refill (Press Refill)** | Re-ordering medication from a previous prescription. |
| **FOO** | Follow-On Order — additional products/services ordered after a consultation (e.g. prescription, lab) that need their own payment. |
| **DPM** | Digital-commerce appointment product surfaced in the mobile app (digital × mobile commerce). |

## Systems & platforms

| Term | Meaning |
|---|---|
| **BFF** | Backend-for-Frontend — `mysiloam-api`, the app's single entry point. |
| **HOPE** | Hospital operational/information system; source of truth for admissions, sales items, delivery fees. |
| **HIS** | Hospital Information System (patient details). |
| **EMR** | Electronic Medical Records (examination, lab results, IPD SOAP). |
| **Aidoo / Kiosk** | Self-service kiosk platform in hospitals. |
| **Patient Portal** | Web portal for patients (account activation, medical-record access). |
| **DDG** | Doctor data source used by the doctor-search/discovery flow; subject of an AWS migration with a fallback mechanism. |
| **DoctorApp** | Doctor-facing application; its backend was migrated to AWS (we added a data-fetching fallback). |

## Payment

| Term | Meaning |
|---|---|
| **Funddock / Kairos Pay** | The payment-gateway aggregation layer the team integrated. |
| **Midtrans** | Payment channel behind Funddock (bank transfer, credit card, GoPay). |
| **NOBU** | Bank payment channel integrated via Funddock. |
| **QRIS** | Indonesian standardised QR payment. |
| **Payer / Payor** | The party paying for a service (self, insurance, corporate, or another profile). |
| **Self Payment** | Private-pay flow (as opposed to insurance/corporate). |

## Features & flows

| Term | Meaning |
|---|---|
| **SCO** | Self Checkout — patients self-complete checkout/payment for admissions without a counter. |
| **HA** | Health Analytics — vital signs, blood pressure, lab results, BMI, vaccinations, plus AI analysis and recommendations. |
| **WA Reminder** | WhatsApp appointment reminder (D-1 = one day before). |
| **Recommendation Engine** | Suggests doctors / products / MCU packages based on HA results (BMI, blood pressure, lab). |
| **Check-in** | Patient self-check-in for an appointment. |

## Org & process

| Term | Meaning |
|---|---|
| **BAU** | Business As Usual — ongoing support, bug-fixing, and data-correction work. |
| **HC / [HC][EMAIL]** | Help Center ticket, usually raised by email — customer-reported issues routed to engineering. |
| **BCC / MM / EC / SCP2 / PIHENC / AHA / etc.** | Jira project keys (BAU Customer Channel, MSM Mobile, E-Commerce, Self Checkout Phase 2, Patient In Hospital Experience, AI Health Analytics, …). |
| **WNA / WNI** | Foreign national / Indonesian citizen — affects pricing and validation rules. |
| **Crashlytics** | Firebase crash reporting; a recurring source of mobile bug tickets. |
| **Sonar issue / coverage** | SonarQube findings and unit-test coverage targets gated on merge. |
