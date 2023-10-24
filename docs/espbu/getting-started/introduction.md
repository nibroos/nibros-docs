# Introduction

::: info
The documentation is still under development. Most of the content is API Endpoint documentation. I will add more content about the backend and frontend implementation in the future.
- Current backend implementation content: Authentication
- Current frontend implementation content: Authentication
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

## Technology Stack

### Frontend
- [Vue 3 3.2.31](https://v3.vuejs.org/)
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
- [Laravel Batch](https://github.com/mavinoo/laravelBatch)
- [Laravel Snappy](https://github.com/barryvdh/laravel-snappy)
- [Fast Excel](https://github.com/rap2hpoutre/fast-excel)