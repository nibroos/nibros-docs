# Introduction

::: info
The documentation is still under development. Most of the content is API Endpoint documentation. I will add more content about the backend and frontend implementation in the future.

If you want to see how I implement features, you can use the search bar or `Ctrl + K` then type Implementation, it will show you all the implementation content.
:::

## What is Koperasi Multiasa?

Koperasi Multiasa is a Single Page Application (SPA). Using the latest technology and automated monthly billing, this application enables users to streamline transaction management and bookkeeping.

<div class="brand-tip">
  Just want to try it out? Skip to the
  <a href="/koperasi-multiasa/getting-started/demo-users">Quickstart</a>.
</div>

## Why Koperasi Multiasa?

In cooperative management, keeping an eye on things is crucial, especially when committee members change regularly. This app provides a solution for better oversight with clear transactions and preset calculations, making sure there are fewer slip-ups in financial records by the committee

## Contribution

-	Implemented a secured authentication and authorization system, including role modes for access control.
-	Designed and managed user profiles, saving, and loan contracts, ensuring seamless user interactions.
-	Created and maintained master periods and managed available loan and saving contracts.
-	Generated summary reports for efficient data analysis.
-	Implemented an activity log to track system actions and changes.
-	Enabled data export to Excel for convenient data sharing.
-	Implemented filter saving in Vuex state for a personalized user experience.
-	Designed a dynamic light/dark theme for user preference.
-	Utilized pop-up modals for quick access to specific data and interactions.
-	Set up the automatic generation of monthly fees for members, ensuring timely financial management

## Technology Stack

### Frontend
- [Vue 3 3.2.31](https://v3.vuejs.org/)
- [Tailwind CSS 3.1.6](https://tailwindcss.com/)
- [Vue 3 Datepicker](https://vue3datepicker.com/)
- [vue-number-format](https://github.com/coders-tm/vue-number-format)
- [auto-animate](https://auto-animate.formkit.com/)
- [vue-final-modal](https://vue-final-modal.org/)
- [vue-sweetalert2](https://www.npmjs.com/package/vue-sweetalert2)
- [moment](https://momentjs.com/)
- [vee-validate](https://vee-validate.logaretm.com/v4/)
- [casl/ability](https://casl.js.org/v5/en/)

### Backend
- [PHP 8.0.2](https://www.php.net/)
- [Laravel 9.2](https://laravel.com/)
- [Laravel Batch](https://github.com/mavinoo/laravelBatch)
- [Fast Excel](https://github.com/rap2hpoutre/fast-excel)

## Source Code

The source code is private and not available for public use. 