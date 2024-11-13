import{P as a}from"./chunks/PrefixComponent.d016b18b.js";import{o as n,c as o,k as s,H as l,a as p,Q as t}from"./chunks/framework.61f21335.js";const e=s("h1",{id:"gross-profit",tabindex:"-1"},[p("Gross Profit "),s("a",{class:"header-anchor",href:"#gross-profit","aria-label":'Permalink to "Gross Profit"'},"​")],-1),c=s("p",null,"To know gross profit, this module can be one of the future reference to know the business performance.",-1),r={class:"info custom-block"},E=s("p",{class:"custom-block-title"},"INFO",-1),y=t(`<h2 id="get-gross-profit-endpoint" tabindex="-1">Get Gross Profit Endpoint <a class="header-anchor" href="#get-gross-profit-endpoint" aria-label="Permalink to &quot;Get Gross Profit Endpoint&quot;">​</a></h2><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /sale/grossprofit</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /sale/grossprofit</span></span></code></pre></div><h3 id="headers" tabindex="-1">Headers <a class="header-anchor" href="#headers" aria-label="Permalink to &quot;Headers&quot;">​</a></h3><ul><li>Content-Type: application/json</li><li>Authorization: Bearer <span>{token}</span></li></ul><h3 id="query-parameters" tabindex="-1">Query Parameters <a class="header-anchor" href="#query-parameters" aria-label="Permalink to &quot;Query Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th><th style="text-align:left;">Nullable</th></tr></thead><tbody><tr><td style="text-align:left;">search_shift_start_at</td><td style="text-align:left;">string</td><td style="text-align:left;">Search by periode start at</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">search_shift_end_at</td><td style="text-align:left;">string</td><td style="text-align:left;">Search by periode end at</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">search_shift</td><td style="text-align:left;">integer</td><td style="text-align:left;">Search by shift id</td><td style="text-align:left;">true</td></tr></tbody></table><h3 id="responses" tabindex="-1">Responses <a class="header-anchor" href="#responses" aria-label="Permalink to &quot;Responses&quot;">​</a></h3><details class="details custom-block"><summary><code>200</code> OK</summary><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;message&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Laporan ditemukan&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;collection&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertalite&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;std_profit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;308&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;sold_volume&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;175950.46000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;gross_profit_std&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">54192742</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;10.000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;subtotal_atg&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1759504600</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;effective_hpp&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1705311858</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;effective_gross_profit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">54192742</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;variance&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;perc_gross_profit_effective&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0.030800000181869375</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;perc_gross_profit_std&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0.03080000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;lr_effective&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-1.818693737276611e-10</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamax&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;std_profit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;406&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;sold_volume&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;90800.79000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;gross_profit_std&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">36865121</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;13.300&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;subtotal_atg&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1207650507</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;effective_hpp&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1170785386</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;effective_gross_profit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">36865121</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;variance&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;perc_gross_profit_effective&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0.03052631600476776</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;perc_gross_profit_std&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0.03052632&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;lr_effective&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3.9952322387903916e-9</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamax Turbo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;std_profit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;493&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;sold_volume&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;5762.56000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;gross_profit_std&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2839055</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;15.000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;subtotal_atg&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">86438400</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;effective_hpp&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">83599345</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;effective_gross_profit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2839055</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;variance&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;perc_gross_profit_effective&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0.03284483516585222</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;perc_gross_profit_std&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0.03284483&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;lr_effective&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-5.165852218214084e-9</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;fuel_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pertamina Dex&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;std_profit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;492&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;sold_volume&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;13712.98000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;gross_profit_std&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">6744181</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;fuel_price&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;15.400&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;subtotal_atg&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">211179892</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;effective_hpp&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">204435711</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;effective_gross_profit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">6744181</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;variance&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;perc_gross_profit_effective&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0.03193571573566294</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;perc_gross_profit_std&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0.03193571&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;lr_effective&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-5.735662937655928e-9</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;total&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;sold_volume&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">286226.79</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;gross_profit_std&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100641099</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;subtotal_atg&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3264773399</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;effective_hpp&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3164132300</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;effective_gross_profit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100641099</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;variance&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;message&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Laporan ditemukan&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;data&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;collection&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertalite&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;std_profit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;308&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;sold_volume&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;175950.46000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;gross_profit_std&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">54192742</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;10.000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;subtotal_atg&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1759504600</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;effective_hpp&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1705311858</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;effective_gross_profit&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">54192742</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;variance&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;perc_gross_profit_effective&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.030800000181869375</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;perc_gross_profit_std&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0.03080000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;lr_effective&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-1.818693737276611e-10</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamax&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;std_profit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;406&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;sold_volume&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;90800.79000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;gross_profit_std&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">36865121</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;13.300&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;subtotal_atg&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1207650507</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;effective_hpp&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1170785386</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;effective_gross_profit&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">36865121</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;variance&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;perc_gross_profit_effective&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.03052631600476776</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;perc_gross_profit_std&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0.03052632&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;lr_effective&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3.9952322387903916e-9</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamax Turbo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;std_profit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;493&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;sold_volume&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;5762.56000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;gross_profit_std&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2839055</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;15.000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;subtotal_atg&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">86438400</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;effective_hpp&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">83599345</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;effective_gross_profit&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2839055</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;variance&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;perc_gross_profit_effective&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.03284483516585222</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;perc_gross_profit_std&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0.03284483&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;lr_effective&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-5.165852218214084e-9</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;fuel_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pertamina Dex&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;std_profit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;492&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;sold_volume&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;13712.98000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;gross_profit_std&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">6744181</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;fuel_price&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;15.400&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;subtotal_atg&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">211179892</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;effective_hpp&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">204435711</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;effective_gross_profit&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">6744181</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;variance&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;perc_gross_profit_effective&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.03193571573566294</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;perc_gross_profit_std&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0.03193571&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;lr_effective&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-5.735662937655928e-9</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;total&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;sold_volume&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">286226.79</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;gross_profit_std&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100641099</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;subtotal_atg&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3264773399</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;effective_hpp&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3164132300</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;effective_gross_profit&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100641099</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;variance&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details><details class="details custom-block"><summary><code>403</code> Forbidden</summary><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;message&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Unauthorized&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;message&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Unauthorized&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details><details class="details custom-block"><summary><code>404</code> Not Found</summary><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;message&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Tidak ada laporan bulan ini&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: []</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;message&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Tidak ada laporan bulan ini&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;data&quot;</span><span style="color:#24292E;">: []</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details>`,10),d=JSON.parse('{"title":"Gross Profit","description":"","frontmatter":{},"headers":[],"relativePath":"espbu/report-summary/gross-profit.md","filePath":"espbu/report-summary/gross-profit.md"}'),u={name:"espbu/report-summary/gross-profit.md"},f=Object.assign(u,{setup(i){return(q,F)=>(n(),o("div",null,[e,c,s("div",r,[E,l(a)]),y]))}});export{d as __pageData,f as default};
