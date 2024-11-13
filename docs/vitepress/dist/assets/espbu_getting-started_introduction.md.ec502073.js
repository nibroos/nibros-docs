import{_ as e,o as t,c as a,Q as r}from"./chunks/framework.61f21335.js";const m=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"espbu/getting-started/introduction.md","filePath":"espbu/getting-started/introduction.md"}'),i={name:"espbu/getting-started/introduction.md"},o=r('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The documentation is still under development. Most of the content is API Endpoint documentation. I will add more content about the backend and frontend implementation in the future.</p><p>If you want to see how I implement features, you can use the search bar or <code>Ctrl + K</code> then type Implementation, it will show you all the implementation content.</p></div><h2 id="what-is-e-spbu" tabindex="-1">What is E-SPBU? <a class="header-anchor" href="#what-is-e-spbu" aria-label="Permalink to &quot;What is E-SPBU?&quot;">​</a></h2><p>E-SPBU is a Single Page Application (SPA) that seamlessly integrated with Android. Its main job is to manage gas station assets while effectively addressing common problem within the P*rtamina operational environment.</p><div class="brand-tip"> Just want to try it out? Skip to the <a href="/espbu/getting-started/demo-users">Quickstart</a>. </div><h2 id="why-e-spbu" tabindex="-1">Why E-SPBU? <a class="header-anchor" href="#why-e-spbu" aria-label="Permalink to &quot;Why E-SPBU?&quot;">​</a></h2><p>In a gas station franchise, owners are provided with an application. Some owners find that the built-in features of those application are insufficient to optimize their business. This application offers solutions to address the shortcomings of the built-in app, including:</p><ul><li><p><strong>Advanced Control</strong> <br> It includes layered validation based on different roles to ensure that the data entered is accurate. Reviewers can trace the origin of the data input down to the smallest detail.</p></li><li><p><strong>Flexible Report Corrections</strong> <br> Human errors are inevitable, so in each module, there&#39;s a feature for making corrections with easy-to-follow procedures.</p></li><li><p><strong>Report Summaries</strong> <br> Reports that have been entered, along with additional advanced filters, become summaries that serve as valuable considerations for making future decisions</p></li></ul><h2 id="api-specification" tabindex="-1">API Specification <a class="header-anchor" href="#api-specification" aria-label="Permalink to &quot;API Specification&quot;">​</a></h2><p>Understanding the API would be easier if the design is documented. Because it&#39;s a team project, we discussed the API design together, every possible scenario, and the best way to implement it in the backend, frontend, database, and android. There are case were features are requested by the client after the API design is finished, so we have to make some changes to the API design. Most of them are not documented, because the time is limited.</p><p>You can access the API design spesification in <a href="https://www.figma.com/file/UbDSQI0uj2vN2A1APNf8zZ/UI%2FUX-SPBU?type=design&amp;node-id=0%3A1&amp;mode=design&amp;t=ZaaayqBPL3g38Z3J-1" target="_blank" rel="noreferrer">live figma preview</a>.</p><h2 id="what-feature-do-i-like-the-most" tabindex="-1">What feature do I like the most? <a class="header-anchor" href="#what-feature-do-i-like-the-most" aria-label="Permalink to &quot;What feature do I like the most?&quot;">​</a></h2><p>As a frontend developer, there is one feature that I proud of. It&#39;s the state filter saving feature. It&#39;s a feature that allows users to save the current state of the filter. It&#39;s useful when users want to save the current state of the filter and use it later.</p><p>Visit <a href="/espbu/state-filter-saving.html">the State Filter-saving page</a> to see more details.</p><p>As a backend developer, Fuel price is the most challenging feature to implement. Because the fuel price is frequently changing. There are multiple ways to change the fuel price, so I must consider all the possible scenarios, including the human error scenario. The fuel price history also must be changed, because it&#39;s important for the audit process and affect the fuel price in the future.</p><h2 id="contribution" tabindex="-1">Contribution <a class="header-anchor" href="#contribution" aria-label="Permalink to &quot;Contribution&quot;">​</a></h2><ul><li>Implemented robust authentication and authorization systems, ensuring secure access control.</li><li>Designed and implemented user management and shift management features.</li><li>Created comprehensive reports, including fund reports, sales reports, stock reports, and summary reports.</li><li>Enabled the saving of filters in Vuex state for a more personalized user experience.</li><li>Implemented functionality to import &amp; export reports in PDF and Excel formats.</li><li>Added thorough validation and verification mechanisms to enhance data integrity and security</li><li>Implemented a feature to manage fuel prices, including the ability to change prices in bulk.</li></ul><h2 id="technology-stack" tabindex="-1">Technology Stack <a class="header-anchor" href="#technology-stack" aria-label="Permalink to &quot;Technology Stack&quot;">​</a></h2><h3 id="frontend" tabindex="-1">Frontend <a class="header-anchor" href="#frontend" aria-label="Permalink to &quot;Frontend&quot;">​</a></h3><ul><li><a href="https://v3.vuejs.org/" target="_blank" rel="noreferrer">Vue 3 3.3.7</a></li><li><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS 3.1.6</a></li><li><a href="https://vuex.vuejs.org/" target="_blank" rel="noreferrer">Vuex 4.0.2</a></li><li><a href="https://axios-http.com/" target="_blank" rel="noreferrer">Axios 0.25</a></li><li><a href="https://v3.vuejs.org/guide/composition-api-introduction.html" target="_blank" rel="noreferrer">Vue 3 Composition API</a></li><li><a href="https://vue3datepicker.com/" target="_blank" rel="noreferrer">Vue 3 Datepicker</a></li><li><a href="https://github.com/godbasin/vue-select2/tree/npm-publish-code-for-vue3" target="_blank" rel="noreferrer">Vue 3 Select2</a></li><li><a href="https://www.chartjs.org/" target="_blank" rel="noreferrer">Vue 3 Chart.js</a></li><li><a href="https://pqina.nl/filepond/" target="_blank" rel="noreferrer">Filepond 4.30.4</a></li><li><a href="https://github.com/coders-tm/vue-number-format" target="_blank" rel="noreferrer">vue-number-format</a></li><li><a href="https://auto-animate.formkit.com/" target="_blank" rel="noreferrer">auto-animate</a></li><li><a href="https://vue-final-modal.org/" target="_blank" rel="noreferrer">vue-final-modal</a></li><li><a href="https://www.npmjs.com/package/vue-sweetalert2" target="_blank" rel="noreferrer">vue-sweetalert2</a></li><li><a href="https://momentjs.com/" target="_blank" rel="noreferrer">moment</a></li><li><a href="https://vee-validate.logaretm.com/v4/" target="_blank" rel="noreferrer">vee-validate</a></li><li><a href="https://casl.js.org/v5/en/" target="_blank" rel="noreferrer">casl/ability</a></li></ul><h3 id="backend" tabindex="-1">Backend <a class="header-anchor" href="#backend" aria-label="Permalink to &quot;Backend&quot;">​</a></h3><ul><li><a href="https://www.php.net/" target="_blank" rel="noreferrer">PHP 8.0.2</a></li><li><a href="https://laravel.com/" target="_blank" rel="noreferrer">Laravel 9.2</a></li><li><a href="https://github.com/mavinoo/laravelBatch" target="_blank" rel="noreferrer">Laravel Batch</a></li><li><a href="https://github.com/barryvdh/laravel-snappy" target="_blank" rel="noreferrer">Laravel Snappy</a></li><li><a href="https://github.com/rap2hpoutre/fast-excel" target="_blank" rel="noreferrer">Fast Excel</a></li></ul><h2 id="source-code" tabindex="-1">Source Code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source Code&quot;">​</a></h2><p>The source code is private and not available for public use.</p>',24),n=[o];function s(l,h,c,d,u,p){return t(),a("div",null,n)}const b=e(i,[["render",s]]);export{m as __pageData,b as default};
