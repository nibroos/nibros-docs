import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.61f21335.js";const h=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[],"relativePath":"koperasi-multiasa/getting-started/installation.md","filePath":"koperasi-multiasa/getting-started/installation.md"}'),p={name:"koperasi-multiasa/getting-started/installation.md"},o=l(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>PHP 8.0.2 or higher</li><li>Node.js 16 or above</li><li>MySQL 8.0.2</li></ul><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><ol><li>Setup environment. copy the .env.example then change the name to .env and some of the value of it based on your environment <br></li></ol><details class="details custom-block"><summary>Laravel .env</summary><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">APP_NAME=</span><span style="color:#9ECBFF;">&quot;Koperasi Multiasa&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">APP_ENV=</span><span style="color:#9ECBFF;">&quot;local&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">APP_KEY=</span></span>
<span class="line"><span style="color:#E1E4E8;">APP_DEBUG=</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">APP_URL=</span><span style="color:#9ECBFF;">&quot;http://koperasi.test&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ..</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">DB_CONNECTION=mysql </span></span>
<span class="line"><span style="color:#E1E4E8;">DB_HOST=localhost </span></span>
<span class="line"><span style="color:#E1E4E8;">DB_PORT=</span><span style="color:#79B8FF;">3307</span></span>
<span class="line"><span style="color:#E1E4E8;">DB_DATABASE=ubikar_local </span></span>
<span class="line"><span style="color:#E1E4E8;">DB_USERNAME=root </span></span>
<span class="line"><span style="color:#E1E4E8;">DB_PASSWORD= </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">SANCTUM_STATEFUL_DOMAIN=</span><span style="color:#9ECBFF;">&quot;localhost,localhost:3000,127.0.0.1,127.0.0.1:3000,127.0.0.1:8000,::1,koperasi&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// FRONTEND DOMAIN</span></span>
<span class="line"><span style="color:#E1E4E8;">FRONTEND_URL=</span><span style="color:#9ECBFF;">&quot;http://192.168.1.7:63893&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// FRONTEND BASE URL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">MAX_FLAT_LOAN_CONTRACT=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// MAX FLAT LOAN CONTRACT IN COOPERATIVE POLICY</span></span>
<span class="line"><span style="color:#E1E4E8;">MAX_DOWN_LOAN_CONTRACT=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// MAX DOWN LOAN CONTRACT IN COOPERATIVE POLICY</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">APP_NAME=</span><span style="color:#032F62;">&quot;Koperasi Multiasa&quot;</span></span>
<span class="line"><span style="color:#24292E;">APP_ENV=</span><span style="color:#032F62;">&quot;local&quot;</span></span>
<span class="line"><span style="color:#24292E;">APP_KEY=</span></span>
<span class="line"><span style="color:#24292E;">APP_DEBUG=</span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">APP_URL=</span><span style="color:#032F62;">&quot;http://koperasi.test&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ..</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">DB_CONNECTION=mysql </span></span>
<span class="line"><span style="color:#24292E;">DB_HOST=localhost </span></span>
<span class="line"><span style="color:#24292E;">DB_PORT=</span><span style="color:#005CC5;">3307</span></span>
<span class="line"><span style="color:#24292E;">DB_DATABASE=ubikar_local </span></span>
<span class="line"><span style="color:#24292E;">DB_USERNAME=root </span></span>
<span class="line"><span style="color:#24292E;">DB_PASSWORD= </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">SANCTUM_STATEFUL_DOMAIN=</span><span style="color:#032F62;">&quot;localhost,localhost:3000,127.0.0.1,127.0.0.1:3000,127.0.0.1:8000,::1,koperasi&quot;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// FRONTEND DOMAIN</span></span>
<span class="line"><span style="color:#24292E;">FRONTEND_URL=</span><span style="color:#032F62;">&quot;http://192.168.1.7:63893&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// FRONTEND BASE URL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">MAX_FLAT_LOAN_CONTRACT=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// MAX FLAT LOAN CONTRACT IN COOPERATIVE POLICY</span></span>
<span class="line"><span style="color:#24292E;">MAX_DOWN_LOAN_CONTRACT=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// MAX DOWN LOAN CONTRACT IN COOPERATIVE POLICY</span></span></code></pre></div></details><details class="details custom-block"><summary>Nuxt .env</summary><p>BASE_URL is the url of your laravel project</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">BASE_URL=http:</span><span style="color:#6A737D;">//koperasi.test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">BASE_URL=http:</span><span style="color:#6A737D;">//koperasi.test</span></span></code></pre></div></details><ol start="2"><li>Get the generated laravel key in order to fill the APP_KEY value on your .env</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">php</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">artisan</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">key:generate</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">php</span><span style="color:#24292E;"> </span><span style="color:#032F62;">artisan</span><span style="color:#24292E;"> </span><span style="color:#032F62;">key:generate</span></span></code></pre></div><ol start="3"><li>Run command to install the dependency and do the migration</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">composer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"><span style="color:#B392F0;">php</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">artisan</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">migrate:fresh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--seed</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">composer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"><span style="color:#6F42C1;">php</span><span style="color:#24292E;"> </span><span style="color:#032F62;">artisan</span><span style="color:#24292E;"> </span><span style="color:#032F62;">migrate:fresh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--seed</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div>`,11),e=[o];function t(c,r,i,E,y,d){return a(),n("div",null,e)}const A=s(p,[["render",t]]);export{h as __pageData,A as default};
