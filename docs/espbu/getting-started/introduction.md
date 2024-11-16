# Introduction

::: info
The documentation is still under development. Most of the content is API Endpoint documentation. I will add more content about the backend and frontend implementation in the future.

If you want to see how I implement features, you can use the search bar or `Ctrl + K` then type Implementation, it will show you all the implementation content.
:::

## What is E-SPBU?

E-SPBU is a Single Page Application (SPA) that seamlessly integrated with Android. Its main job is to manage gas station assets while effectively addressing common problem within the P*rtamina operational environment.

<div class="brand-tip">
  Just want to try it out? Skip to the
  <a href="/espbu/getting-started/demo-users">Quickstart</a>.
</div>

## Why E-SPBU?

In a gas station franchise, owners are provided with an application. Some owners find that the built-in features of those application are insufficient to optimize their business. This application offers solutions to address the shortcomings of the built-in app, including:

- **Advanced Control** <br>
It includes layered validation based on different roles to ensure that the data entered is accurate. Reviewers can trace the origin of the data input down to the smallest detail.

- **Flexible Report Corrections** <br>
Human errors are inevitable, so in each module, there's a feature for making corrections with easy-to-follow procedures.

- **Report Summaries** <br>
Reports that have been entered, along with additional advanced filters, become summaries that serve as valuable considerations for making future decisions

## API Specification

Understanding the API would be easier if the design is documented. Because it's a team project, we discussed the API design together, every possible scenario, and the best way to implement it in the backend, frontend, database, and android. There are case were features are requested by the client after the API design is finished, so we have to make some changes to the API design. Most of them are not documented, because the time is limited.

You can access the API design spesification in [live figma preview](https://www.figma.com/file/UbDSQI0uj2vN2A1APNf8zZ/UI%2FUX-SPBU?type=design&node-id=0%3A1&mode=design&t=ZaaayqBPL3g38Z3J-1).

## What feature do I like the most?

As a frontend developer, there is one feature that I proud of. It's the state filter saving feature. It's a feature that allows users to save the current state of the filter. It's useful when users want to save the current state of the filter and use it later.

Visit [the State Filter-saving page](/espbu/state-filter-saving) to see more details.

As a backend developer, Fuel price is the most challenging feature to implement. Because the fuel price is frequently changing. There are multiple ways to change the fuel price, so I must consider all the possible scenarios, including the human error scenario. The fuel price history also must be changed, because it's important for the audit process and affect the fuel price in the future.

## Contribution

-	Implemented robust authentication and authorization systems, ensuring secure access control.
-	Designed and implemented user management and shift management features.
-	Created comprehensive reports, including fund reports, sales reports, stock reports, and summary reports.
-	Enabled the saving of filters in Vuex state for a more personalized user experience.
-	Implemented functionality to import & export reports in PDF and Excel formats.
-	Added thorough validation and verification mechanisms to enhance data integrity and security
-	Implemented a feature to manage fuel prices, including the ability to change prices in bulk.

## Technology Stack

### Frontend
- [Vue 3 3.3.7](https://v3.vuejs.org/)
- [Tailwind CSS 3.1.6](https://tailwindcss.com/)
- [Vuex 4.0.2](https://vuex.vuejs.org/)
- [Axios 0.25](https://axios-http.com/)
- [Vue 3 Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html)
- [Vue 3 Datepicker](https://vue3datepicker.com/)
- [Vue 3 Select2](https://github.com/godbasin/vue-select2/tree/npm-publish-code-for-vue3)
- [Vue 3 Chart.js](https://www.chartjs.org/)
- [Filepond 4.30.4](https://pqina.nl/filepond/)
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
- [MySQL 8.0](https://www.mysql.com/)
- [Laravel Batch](https://github.com/mavinoo/laravelBatch)
- [Laravel Snappy](https://github.com/barryvdh/laravel-snappy)
- [Fast Excel](https://github.com/rap2hpoutre/fast-excel)

## Source Code

The source code is private and not available for public use. 