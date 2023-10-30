import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.7ef398c2.js";const u=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[],"relativePath":"espbu/getting-started/installation.md","filePath":"espbu/getting-started/installation.md"}'),p={name:"espbu/getting-started/installation.md"},e=l(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>PHP 8.0.2 or higher</li><li>Node.js 16 or above</li><li>MySQL 8.0.2</li><li>wkhtmltopdf, if export PDF is needed. Take a look at <a href="https://github.com/barryvdh/laravel-snappy" target="_blank" rel="noreferrer">Laravel Snappy Docs</a></li></ul><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><ol><li>Setup environment. copy the .env.example then change the name to .env and some of the value of it based on your environment <br></li></ol><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">APP_NAME=</span><span style="color:#9ECBFF;">&quot;E-SPBU&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">APP_ENV=</span><span style="color:#9ECBFF;">&quot;local&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">APP_KEY=</span></span>
<span class="line"><span style="color:#E1E4E8;">APP_DEBUG=</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">APP_URL=</span><span style="color:#9ECBFF;">&quot;http://espbu.test&quot;</span></span>
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
<span class="line"><span style="color:#6A737D;">// ..</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">WKHTML_PDF_BINARY=</span><span style="color:#9ECBFF;">&quot;C:/wkhtmltopdf/bin/wkhtmltopdf.exe&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">APP_NAME=</span><span style="color:#032F62;">&quot;E-SPBU&quot;</span></span>
<span class="line"><span style="color:#24292E;">APP_ENV=</span><span style="color:#032F62;">&quot;local&quot;</span></span>
<span class="line"><span style="color:#24292E;">APP_KEY=</span></span>
<span class="line"><span style="color:#24292E;">APP_DEBUG=</span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">APP_URL=</span><span style="color:#032F62;">&quot;http://espbu.test&quot;</span></span>
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
<span class="line"><span style="color:#6A737D;">// ..</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">WKHTML_PDF_BINARY=</span><span style="color:#032F62;">&quot;C:/wkhtmltopdf/bin/wkhtmltopdf.exe&quot;</span></span></code></pre></div><ol start="2"><li>Get the generated laravel key in order to fill the APP_KEY value on your .env</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">php</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">artisan</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">key:generate</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">php</span><span style="color:#24292E;"> </span><span style="color:#032F62;">artisan</span><span style="color:#24292E;"> </span><span style="color:#032F62;">key:generate</span></span></code></pre></div><ol start="3"><li>Run command to install the dependency and do the migration</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">composer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"><span style="color:#B392F0;">php</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">artisan</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">migrate:fresh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--seed</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">composer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"><span style="color:#6F42C1;">php</span><span style="color:#24292E;"> </span><span style="color:#032F62;">artisan</span><span style="color:#24292E;"> </span><span style="color:#032F62;">migrate:fresh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--seed</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div>`,10),o=[e];function t(c,r,i,E,y,d){return a(),n("div",null,o)}const _=s(p,[["render",t]]);export{u as __pageData,_ as default};
