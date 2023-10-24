import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.ca2520f5.js";const F=JSON.parse('{"title":"Fuel Sales Summary","description":"","frontmatter":{},"headers":[],"relativePath":"espbu/report-summary/sales-summary.md","filePath":"espbu/report-summary/sales-summary.md"}'),p={name:"espbu/report-summary/sales-summary.md"},o=l(`<h1 id="fuel-sales-summary" tabindex="-1">Fuel Sales Summary <a class="header-anchor" href="#fuel-sales-summary" aria-label="Permalink to &quot;Fuel Sales Summary&quot;">​</a></h1><h2 id="get-sales-report-by-date-range-endpoint" tabindex="-1">Get Sales Report by Date Range Endpoint <a class="header-anchor" href="#get-sales-report-by-date-range-endpoint" aria-label="Permalink to &quot;Get Sales Report by Date Range Endpoint&quot;">​</a></h2><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> report/chart/daterange</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> report/chart/daterange</span></span></code></pre></div><h3 id="headers" tabindex="-1">Headers <a class="header-anchor" href="#headers" aria-label="Permalink to &quot;Headers&quot;">​</a></h3><ul><li>Content-Type: application/json</li><li>Authorization: Bearer <span>{token}</span></li></ul><h3 id="query-parameter" tabindex="-1">Query Parameter <a class="header-anchor" href="#query-parameter" aria-label="Permalink to &quot;Query Parameter&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Description</th><th>Nullable</th></tr></thead><tbody><tr><td>date_start_at</td><td>string</td><td>Date start at</td><td>false</td></tr><tr><td>date_end_at</td><td>string</td><td>Date end at</td><td>false</td></tr></tbody></table><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><details class="details custom-block"><summary><code>200</code> OK</summary><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;total&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">312785663</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;day&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;21 Mar 2023&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;date&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Sel, 21/03/2023&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;fuels&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertalite&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 10.000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamax&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 13.300&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamina Dex&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 15.850&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamax Turbo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 15.100&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;total&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">236708259</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;day&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;22 Mar 2023&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;date&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rab, 22/03/2023&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;fuels&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertalite&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 10.000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamax&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 13.300&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamina Dex&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 15.850&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamax Turbo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 15.100&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;total&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">168470758</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;day&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;23 Mar 2023&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;date&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Kam, 23/03/2023&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;fuels&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertalite&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 10.000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamax&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 13.300&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamina Dex&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 15.850&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamax Turbo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 15.100&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;total&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">239363538</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;day&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;24 Mar 2023&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;date&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Jum, 24/03/2023&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;fuels&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertalite&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 10.000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamax&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 13.300&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamina Dex&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 15.850&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamax Turbo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 15.100&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;total&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">196720674</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;day&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;25 Mar 2023&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;date&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Sab, 25/03/2023&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;fuels&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertalite&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 10.000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamax&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 13.300&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamina Dex&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 15.850&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamax Turbo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 15.100&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;total&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">173010395</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;day&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;26 Mar 2023&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;date&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Min, 26/03/2023&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;fuels&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertalite&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 10.000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamax&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 13.300&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamina Dex&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 15.850&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamax Turbo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 15.100&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;total&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">264498383</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;day&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;27 Mar 2023&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;date&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Sen, 27/03/2023&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;fuels&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertalite&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 10.000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamax&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 13.300&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamina Dex&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 15.850&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamax Turbo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Rp. 15.100&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;data&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;total&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">312785663</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;day&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;21 Mar 2023&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;date&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Sel, 21/03/2023&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;fuels&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertalite&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 10.000&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamax&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 13.300&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamina Dex&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 15.850&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamax Turbo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 15.100&quot;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;total&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">236708259</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;day&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;22 Mar 2023&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;date&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rab, 22/03/2023&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;fuels&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertalite&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 10.000&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamax&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 13.300&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamina Dex&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 15.850&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamax Turbo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 15.100&quot;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;total&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">168470758</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;day&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;23 Mar 2023&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;date&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Kam, 23/03/2023&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;fuels&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertalite&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 10.000&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamax&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 13.300&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamina Dex&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 15.850&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamax Turbo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 15.100&quot;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;total&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">239363538</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;day&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;24 Mar 2023&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;date&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Jum, 24/03/2023&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;fuels&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertalite&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 10.000&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamax&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 13.300&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamina Dex&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 15.850&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamax Turbo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 15.100&quot;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;total&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">196720674</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;day&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;25 Mar 2023&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;date&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Sab, 25/03/2023&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;fuels&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertalite&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 10.000&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamax&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 13.300&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamina Dex&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 15.850&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamax Turbo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 15.100&quot;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;total&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">173010395</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;day&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;26 Mar 2023&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;date&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Min, 26/03/2023&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;fuels&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertalite&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 10.000&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamax&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 13.300&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamina Dex&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 15.850&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamax Turbo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 15.100&quot;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;total&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">264498383</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;day&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;27 Mar 2023&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;date&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Sen, 27/03/2023&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;fuels&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertalite&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 10.000&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamax&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 13.300&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamina Dex&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 15.850&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamax Turbo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Rp. 15.100&quot;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details><h3 id="used-on-pages" tabindex="-1">Used on pages <a class="header-anchor" href="#used-on-pages" aria-label="Permalink to &quot;Used on pages&quot;">​</a></h3><ul><li><code>/dashboard</code></li></ul>`,11),t=[o];function e(c,E,r,y,u,q){return n(),a("div",null,t)}const C=s(p,[["render",e]]);export{F as __pageData,C as default};
