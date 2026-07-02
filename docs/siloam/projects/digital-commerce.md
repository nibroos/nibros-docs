# Digital Commerce Integration (DPM)

> **Timeline:** Oct 2025 → Dec 2025 · **Primary services:** `mysiloam-api`, `msm-be-mobile`
> **My role:** Backend developer — surfacing digital-commerce appointments in the app and channel-specific rules.
> **Jira area:** E-Commerce.

The digital-commerce team sells appointments through a separate channel (**DPM**, channel **id 38**). This work made those appointments behave correctly inside the MySiloam app — showing the right cards, honouring channel rules, and preventing invalid actions.

## What I built / fixed

### Surfacing DPM appointments
- Show the **OPD appointment card** for digital-commerce appointments (channelId 38) when `funddock_id` & `funddock_allocation_id` are present on the appointment.
- Built the **DPM-on-homepage** version and the **DPM × OPD appointment card** on mobile.
- Added **show/hide conditions** for the digital-commerce appointment type so only the right products appear.
- Hide the appointment-card package when the line-of-business is **doctor** (vs package).

### Channel-specific rules
- **Cancellation:** enhanced the cancellation API to **reject cancel requests from channelId 38** (digital-commerce appointments shouldn't be cancellable from the app), with proper wording explaining why.
- **Back-version guard:** older app versions **must not** be able to cancel an OPD appointment that originated from digital commerce.
- **"Others" list correctness:** fixed cases where a user's own appointment appeared in the **others** list, and errors getting the others appointment list.
- **Middleware:** handled middleware for users on **other channels** (channel 38) so requests are processed under the right rules.

### Activity & visibility
- Fixed digital-commerce (iOS) appointments not appearing in the **Activity** tab after booking.
- Funddock filtering for the DPM flow (which appointments are gateway-backed).

### Quality
Added **Sonar coverage** for the appointment/cancel DPM paths and fixed Sonar issues introduced by the cancel-OPD-digital work.

## What I took away

- Integrating a **third-party sales channel** into an existing app is mostly about **rule reconciliation**: which actions are allowed, for which channel, on which app version.
- **Version- and channel-gated behaviour** is essential when one backend serves clients that shouldn't all be able to do the same things.
