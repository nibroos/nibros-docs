<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Profit Losses

::: info
<PrefixComponent/>
:::

## Get Profit Losses Endpoint

```http
GET /profit_losses
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| search_periode_start_at | string | Search by periode start at | true |
| search_periode_end_at | string | Search by periode end at | true |

### Responses

::: details `200` OK
```json
{
    "message": "Data laba rugi ditemukan",
    "data": [
        {
            "id": 0,
            "type": {
                "name": "LABA KOTOR USAHA",
                "data": [
                    {
                        "name": "BBM",
                        "data": [
                            {
                                "id": 97813,
                                "item_name": "Pertalite",
                                "report_at": "2023-01-01",
                                "quantity": "368273.43900",
                                "item_buy_price": "9692.0000",
                                "item_sell_price": "10000.0000",
                                "item_buy_value": "3682734390.000000000",
                                "item_sell_value": "3569306170.788000000",
                                "gross_profit": "113428219.212000000"
                            },
                            {
                                "id": 97814,
                                "item_name": "Pertamax",
                                "report_at": "2023-01-01",
                                "quantity": "11632.03800",
                                "item_buy_price": "13495.0000",
                                "item_sell_price": "13900.0000",
                                "item_buy_value": "161685328.200000000",
                                "item_sell_value": "156974352.810000000",
                                "gross_profit": "4710975.390000000"
                            },
                            {
                                "id": 98122,
                                "item_name": "Pertamax",
                                "report_at": "2023-01-03",
                                "quantity": "166326.52600",
                                "item_buy_price": "12393.0000",
                                "item_sell_price": "12800.0000",
                                "item_buy_value": "2128979532.800000000",
                                "item_sell_value": "2061284636.718000000",
                                "gross_profit": "67694896.082000000"
                            },
                            {
                                "id": 97817,
                                "item_name": "Pertamax Turbo",
                                "report_at": "2023-01-01",
                                "quantity": "10.79200",
                                "item_buy_price": "14708.0000",
                                "item_sell_price": "15200.0000",
                                "item_buy_value": "164038.400000000",
                                "item_sell_value": "158728.736000000",
                                "gross_profit": "5309.664000000"
                            },
                            {
                                "id": 98125,
                                "item_name": "Pertamax Turbo",
                                "report_at": "2023-01-03",
                                "quantity": "10776.38400",
                                "item_buy_price": "13555.2803",
                                "item_sell_price": "14050.0000",
                                "item_buy_value": "151408195.200000000",
                                "item_sell_value": "146076905.740435200",
                                "gross_profit": "5331289.459564800"
                            },
                            {
                                "id": 97820,
                                "item_name": "Pertamina Dex",
                                "report_at": "2023-01-01",
                                "quantity": "2250.90000",
                                "item_buy_price": "18315.5200",
                                "item_sell_price": "18800.0000",
                                "item_buy_value": "42316920.000000000",
                                "item_sell_value": "41226403.968000000",
                                "gross_profit": "1090516.032000000"
                            },
                            {
                                "id": 98128,
                                "item_name": "Pertamina Dex",
                                "report_at": "2023-01-03",
                                "quantity": "30178.89600",
                                "item_buy_price": "16261.1000",
                                "item_sell_price": "16750.0000",
                                "item_buy_value": "505496508.000000000",
                                "item_sell_value": "490742045.745600000",
                                "gross_profit": "14754462.254400000"
                            }
                        ],
                        "total": 207015668.09396482,
                        "total_hpp": 6672784912.599999,
                        "total_sold": 6465769244.506036
                    },
                    {
                        "name": "OLI",
                        "data": [
                            {
                                "id": 852,
                                "item_name": " ENDURO MATIC G 2OW-40 SL/JASO MB (1L) ",
                                "quantity": 5,
                                "item_buy_price": 40600,
                                "item_sell_price": 47500,
                                "item_buy_value": 203000,
                                "item_sell_value": 237500,
                                "gross_profit": 34500,
                                "mst_root_id": 8,
                                "report_at": "2023-01-01",
                                "user_name": "Developer"
                            },
                            {
                                "id": 869,
                                "item_name": " MESRAN B MIN 40 CD/SF PL1 (1L) ",
                                "quantity": 2,
                                "item_buy_price": 40000,
                                "item_sell_price": 47000,
                                "item_buy_value": 80000,
                                "item_sell_value": 94000,
                                "gross_profit": 14000,
                                "mst_root_id": 8,
                                "report_at": "2023-01-01",
                                "user_name": "Developer"
                            },
                            {
                                "id": 863,
                                "item_name": " PRIMA XP 20W-50 API SL (4L) ",
                                "quantity": 6,
                                "item_buy_price": 156800,
                                "item_sell_price": 182000,
                                "item_buy_value": 940800,
                                "item_sell_value": 1092000,
                                "gross_profit": 151200,
                                "mst_root_id": 8,
                                "report_at": "2023-01-01",
                                "user_name": "Developer"
                            },
                            {
                                "id": 862,
                                "item_name": " PRIMA XP 20W-50 API SL (1L) ",
                                "quantity": 5,
                                "item_buy_price": 42000,
                                "item_sell_price": 48000,
                                "item_buy_value": 210000,
                                "item_sell_value": 240000,
                                "gross_profit": 30000,
                                "mst_root_id": 8,
                                "report_at": "2023-01-01",
                                "user_name": "Developer"
                            },
                            {
                                "id": 859,
                                "item_name": " FASTRON TECHNO 10W-40 API SN (LAM) (4L) ",
                                "quantity": 1,
                                "item_buy_price": 273700,
                                "item_sell_price": 298000,
                                "item_buy_value": 273700,
                                "item_sell_value": 298000,
                                "gross_profit": 24300,
                                "mst_root_id": 8,
                                "report_at": "2023-01-01",
                                "user_name": "Developer"
                            },
                            {
                                "id": 857,
                                "item_name": " MESRANIA 2T SPR MIN 20 TC-W PL1 (1L) ",
                                "quantity": 2,
                                "item_buy_price": 38900,
                                "item_sell_price": 45000,
                                "item_buy_value": 77800,
                                "item_sell_value": 90000,
                                "gross_profit": 12200,
                                "mst_root_id": 8,
                                "report_at": "2023-01-01",
                                "user_name": "Developer"
                            },
                            {
                                "id": 854,
                                "item_name": " ENDURO 4T RACING 10W-40 API SL (1L) ",
                                "quantity": 2,
                                "item_buy_price": 47800,
                                "item_sell_price": 54500,
                                "item_buy_value": 95600,
                                "item_sell_value": 109000,
                                "gross_profit": 13400,
                                "mst_root_id": 8,
                                "report_at": "2023-01-01",
                                "user_name": "Developer"
                            },
                            {
                                "id": 853,
                                "item_name": " ENDURO 4T 20W-50 API SL JASO MA (1L) ",
                                "quantity": 6,
                                "item_buy_price": 44400,
                                "item_sell_price": 51000,
                                "item_buy_value": 266400,
                                "item_sell_value": 306000,
                                "gross_profit": 39600,
                                "mst_root_id": 8,
                                "report_at": "2023-01-01",
                                "user_name": "Developer"
                            }
                        ],
                        "total": 319200,
                        "total_hpp": 2147300,
                        "total_sold": 2466500
                    },
                    {
                        "name": "LPG",
                        "data": [
                            {
                                "id": 870,
                                "item_name": "LPG 3 Kg",
                                "quantity": 121,
                                "item_buy_price": 14250,
                                "item_sell_price": 16000,
                                "item_buy_value": 1724250,
                                "item_sell_value": 1936000,
                                "gross_profit": 211750,
                                "mst_root_id": 9,
                                "report_at": "2023-01-01",
                                "user_name": "Developer"
                            }
                        ],
                        "total": 211750,
                        "total_hpp": 1724250,
                        "total_sold": 1936000
                    },
                    {
                        "name": "Laba Kotor Lainnya",
                        "data": [
                            {
                                "id": 873,
                                "item_name": "Kompensasi Promo PUREWAX",
                                "quantity": 1,
                                "item_buy_price": 0,
                                "item_sell_price": 2000000,
                                "item_buy_value": 0,
                                "item_sell_value": 2000000,
                                "gross_profit": 2000000,
                                "mst_root_id": 10,
                                "report_at": "2023-01-01",
                                "user_name": "Developer"
                            }
                        ],
                        "total": 2000000,
                        "total_hpp": 0,
                        "total_sold": 2000000
                    }
                ],
                "total": 209546618.09396482
            }
        },
        {
            "id": 1,
            "type": {
                "name": "BEBAN USAHA",
                "data": [
                    {
                        "name": "Belanja Gaji Tenaga Kontrak",
                        "data": [
                            {
                                "id": 666,
                                "expense_name": " Biaya Gaji Kontrak Pegawai SPBU ",
                                "expense_value": 96766407,
                                "report_at": "2023-01-01",
                                "mst_root_id": 12,
                                "user_name": "Developer"
                            }
                        ],
                        "total": 96766407
                    },
                    {
                        "name": "Belanja Jasa Asuransi",
                        "data": [
                            {
                                "id": 669,
                                "expense_name": " Asuransi Karyawan (BPJS Kesehatan) ",
                                "expense_value": 4743527,
                                "report_at": "2023-01-01",
                                "mst_root_id": 13,
                                "user_name": "Developer"
                            }
                        ],
                        "total": 4743527
                    },
                    {
                        "name": "Belanja Barang Persediaan",
                        "data": [
                            {
                                "id": 671,
                                "expense_name": " ATK ",
                                "expense_value": 238500,
                                "report_at": "2023-01-01",
                                "mst_root_id": 14,
                                "user_name": "Developer"
                            }
                        ],
                        "total": 238500
                    },
                    {
                        "name": "Belanja Barang Untuk Pemeliharaan",
                        "data": [
                            {
                                "id": 673,
                                "expense_name": " RTK ",
                                "expense_value": 186000,
                                "report_at": "2023-01-01",
                                "mst_root_id": 15,
                                "user_name": "Developer"
                            }
                        ],
                        "total": 186000
                    },
                    {
                        "name": "Belanja Jasa Rutin Perkantoran",
                        "data": [
                            {
                                "id": 674,
                                "expense_name": " Biaya Langganan Telepon ",
                                "expense_value": 77000,
                                "report_at": "2023-01-01",
                                "mst_root_id": 16,
                                "user_name": "Developer"
                            }
                        ],
                        "total": 77000
                    },
                    {
                        "name": "Belanja Jasa Administrasi",
                        "data": [
                            {
                                "id": 676,
                                "expense_name": " Iuran RT ",
                                "expense_value": 50000,
                                "report_at": "2023-01-01",
                                "mst_root_id": 17,
                                "user_name": "Developer"
                            }
                        ],
                        "total": 50000
                    },
                    {
                        "name": "Biaya Administrasi BBM/BBK",
                        "data": [
                            {
                                "id": 679,
                                "expense_name": " Biaya Penebusan BBM ",
                                "expense_value": 90000,
                                "report_at": "2023-01-01",
                                "mst_root_id": 18,
                                "user_name": "Developer"
                            }
                        ],
                        "total": 90000
                    },
                    {
                        "name": "Pengendalian Losses BBM/BBK",
                        "data": [
                            {
                                "id": 681,
                                "expense_name": " Biaya Pembongkaran BBM ",
                                "expense_value": 7200000,
                                "report_at": "2023-01-01",
                                "mst_root_id": 19,
                                "user_name": "Developer"
                            }
                        ],
                        "total": 7200000
                    },
                    {
                        "name": "Belanja Pemeliharaan Peralatan dan Mesin",
                        "data": [
                            {
                                "id": 682,
                                "expense_name": " Perawatan Genset Bulan Januari 2023 ",
                                "expense_value": 167500,
                                "report_at": "2023-01-01",
                                "mst_root_id": 20,
                                "user_name": "Developer"
                            }
                        ],
                        "total": 167500
                    }
                ],
                "total": 109518934
            }
        },
        {
            "id": 2,
            "type": {
                "name": "KERUGIAN PERSEDIAAN BBM AKIBAT PENURUNAN HARGA BBM",
                "data": [
                    {
                        "report_at": "2023-01-10",
                        "fuel_name": "Pertamax Turbo",
                        "id": 156,
                        "fuel_price_before": "15409.0000",
                        "fuel_price_after": "14457.0000",
                        "fuel_price_margin": "952.0000",
                        "last_stock": "8420.9200",
                        "restricted_stock": "1500.0000",
                        "soldable_stock": "6920.9200",
                        "loss_value": "6588715.8400",
                        "user_name": "Developer"
                    },
                    {
                        "report_at": "2023-01-10",
                        "fuel_name": "Pertamax",
                        "id": 155,
                        "fuel_price_before": "14096.0000",
                        "fuel_price_after": "13495.0000",
                        "fuel_price_margin": "601.0000",
                        "last_stock": "9442.2000",
                        "restricted_stock": "1500.0000",
                        "soldable_stock": "7942.2000",
                        "loss_value": "4773262.2000",
                        "user_name": "Developer"
                    },
                    {
                        "report_at": "2023-01-09",
                        "fuel_name": "Pertamax Turbo",
                        "id": 154,
                        "fuel_price_before": "17414.0000",
                        "fuel_price_after": "15409.0000",
                        "fuel_price_margin": "2005.0000",
                        "last_stock": "10976.1600",
                        "restricted_stock": "1500.0000",
                        "soldable_stock": "9476.1600",
                        "loss_value": "18999700.8000",
                        "user_name": "Developer"
                    },
                    {
                        "report_at": "2023-01-11",
                        "fuel_name": "Pertamax Turbo",
                        "id": 157,
                        "fuel_price_before": "14457.0000",
                        "fuel_price_after": "13806.0000",
                        "fuel_price_margin": "651.0000",
                        "last_stock": "5168.3400",
                        "restricted_stock": "1500.0000",
                        "soldable_stock": "3668.3400",
                        "loss_value": "2388089.3400",
                        "user_name": "Developer"
                    },
                    {
                        "report_at": "2023-01-09",
                        "fuel_name": "Pertamina Dex",
                        "id": 153,
                        "fuel_price_before": "18416.0000",
                        "fuel_price_after": "16913.0000",
                        "fuel_price_margin": "1503.0000",
                        "last_stock": "13297.1600",
                        "restricted_stock": "1500.0000",
                        "soldable_stock": "11797.1600",
                        "loss_value": "17731131.4800",
                        "user_name": "Developer"
                    }
                ],
                "total": 50480899.66,
                "total_volume": 39804.78
            }
        }
    ],
    "total": 49546784.43396482
}
```

:::

::: details `403` Forbidden
```json
{
    "message": "Unauthorized"
}
```

:::

::: details `404` Not Found
```json
{
    "message": "Data laba rugi ditemukan",
    "data": [],
    "total": 0
}
```

:::

### Used on pages

- /profitloss

## Create Profit Losses Endpoint

```http
POST /profit_losses
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

| Name | Type | Description | Nullable | Example |
| :--- | :--- | :--- | :--- | :--- |
| csv_misc_sales | file | CSV file | true | [csv_misc_sales.csv](https://github.com/nibroos/nibros-portfolio/files/13111595/januari2023.csv) |
| csv_expenses | file | CSV file | true | [csv_expenses.csv](https://github.com/nibroos/nibros-portfolio/files/13111603/januari2023.beban.csv) |
| csv_stock_losses | file | CSV file | true | [csv_stock_losses.csv](https://github.com/nibroos/nibros-portfolio/files/13111610/januari2023.penurunan.csv) |

### Responses

::: details `200` OK
```json
{
  "message": "Data laba rugi berhasil dibuat"
}
```

:::

::: details `403` Forbidden
```json
{
    "message": "Unauthorized"
}
```

:::

::: details `422` Unprocessable Entity
```json
{
    "message": "Data laba rugi gagal dibuat",
    "errors": {
        "csv_misc_sales": [
            "The csv misc sales must be a file of type: csv."
        ],
        "csv_expenses": [
            "The csv expenses must be a file of type: csv."
        ],
        "csv_stock_losses": [
            "The csv stock losses must be a file of type: csv."
        ]
    }
}
```

:::

### Used on pages

- /profitloss

## Delete Profit Losses by Categories Endpoint

```http
DELETE /profit_loss/categories
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
    "search_periode_start_at": "2023-01-01",
    "search_periode_end_at": "2023-02-01",
    "is_misc_sales_checked": 0,
    "is_expenses_checked": 0,
    "is_stock_losses_checked": 1
}
```

:::

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| search_periode_start_at | string | Search by periode start at | false |
| search_periode_end_at | string | Search by periode end at | false |
| is_misc_sales_checked | integer | Is misc sales checked | true |
| is_expenses_checked | integer | Is expenses checked | true |
| is_stock_losses_checked | integer | Is stock losses checked | true |

### Responses

::: details `200` OK
```json
{
    "message": "Data laba rugi untuk kategori Laba Kotor dan Beban Usaha berhasil dihapus"
}
```

:::

::: details `403` Forbidden
```json
{
    "message": "Unauthorized"
}
```

:::

::: details `422` Unprocessable Entity
```json
{
    "message": "Data laba rugi untuk kategori Laba Kotor dan Beban Usaha gagal dihapus",
    "errors": {
        "search_periode_start_at": [
            "The search periode start at field is required."
        ],
        "search_periode_end_at": [
            "The search periode end at field is required."
        ]
    }
}
```

:::

### Used on pages

- /profitloss

## Export Excel Profit Losses Endpoint

```http
GET /profitloss/export/xlsx
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| search_periode_start_at | string | Search by periode start at | false |
| search_periode_end_at | string | Search by periode end at | false |

### Responses

::: details `200` OK

File Excel

:::

::: details `403` Forbidden
```json
{
    "message": "Unauthorized"
}
```
:::

### Used on pages

- /profitloss





