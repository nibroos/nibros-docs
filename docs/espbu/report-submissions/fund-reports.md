<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Fund Reports

This module is used to submit, review, and approve fund reports.

::: info
<PrefixComponent/>
:::

## Get Fund Reports Index Endpoint

```http
GET /reports
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameter

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| page | int | Page number | false |
| search_machine | int | Search by machine id | true |
| search_answer | int | Search by fund report status id | true |
| search_shift_start_at | string | Search by shift start at | true |
| search_shift_end_at | string | Search by shift end at | true |
| search_shift | int | Search by shift id | true |
| search_per_page | int | Search by per page | true |
| is_full_page | int | Is full page | true |
| is_group_by_machine | int | Is group by machine | true |
| order_column | string | Order by column | true |
| order_direction | string | Order by direction | true |

### Response

::: details `200` OK
```json
{
    "data": {
        "data": [
            {
                "row_number": 1,
                "id": 3412,
                "fund_cash": 10371000,
                "fund_noncash": "380293.0000",
                "total": "10370980.0000",
                "total_fuel": "10751273.0000",
                "user": "Sella Wahyu Prabowo",
                "shift": "1",
                "machine": "Pulau 1",
                "answer_id": 5,
                "answer": "Dicek Adm Keu",
                "shift_at": "2023-04-03",
                "shift_start_at": "2023-04-03 06:01:00",
                "shift_end_at": "2023-04-03 12:59:00",
                "is_checked_pending": 0
            },
            {
                "row_number": 2,
                "id": 3410,
                "fund_cash": 6601000,
                "fund_noncash": "30094124.0000",
                "total": "6600730.0000",
                "total_fuel": "36694854.0000",
                "user": "Anis Fufah",
                "shift": "1",
                "machine": "Pulau 2",
                "answer_id": 5,
                "answer": "Dicek Adm Keu",
                "shift_at": "2023-04-03",
                "shift_start_at": "2023-04-03 06:01:00",
                "shift_end_at": "2023-04-03 12:59:00",
                "is_checked_pending": 0
            },
            // and so on
        ],
        "links": {
            "first": "http://espbu.test/api/reports?page=1",
            "last": "http://espbu.test/api/reports?page=6",
            "prev": null,
            "next": "http://espbu.test/api/reports?page=2"
        },
        "meta": {
            "current_page": 1,
            "from": 1,
            "last_page": 6,
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Sebelumnya",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/reports?page=1",
                    "label": "1",
                    "active": true
                },
                {
                    "url": "http://espbu.test/api/reports?page=2",
                    "label": "2",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/reports?page=3",
                    "label": "3",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/reports?page=4",
                    "label": "4",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/reports?page=5",
                    "label": "5",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/reports?page=6",
                    "label": "6",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/reports?page=2",
                    "label": "Berikutnya &raquo;",
                    "active": false
                }
            ],
            "path": "http://espbu.test/api/reports",
            "per_page": 7,
            "to": 7,
            "total": 42
        }
    },
    "total": {
        "fund_cash": 297968800,
        "fund_noncash": 187932877,
        "total": 297959511,
        "total_fuel": 485892388
    },
    "opts": {
        "group_by_fuel": {
            "data": [
                {
                    "fuel": "Pertalite",
                    "volume": 25250.5,
                    "fuel_value": 252505000
                },
                {
                    "fuel": "Pertamax",
                    "volume": 13876.04,
                    "fuel_value": 184551332
                },
                {
                    "fuel": "Pertamax Turbo",
                    "volume": 871.93,
                    "fuel_value": 13078950
                },
                {
                    "fuel": "Pertamina Dex",
                    "volume": 2321.89,
                    "fuel_value": 35757106
                }
            ],
            "total": {
                "volume": 42320.36,
                "fuel_value": 485892388
            }
        }
    }
}
```
:::

### Used on pages

- `/reports`

## Get Fund Reports Detail Endpoint

```http
GET /reports/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Response

::: details `200` OK
```json
{
    "message": "Laporan dana ditemukan",
    "data": {
        "id": 7273,
        "kasif_name": null,
        "kasir_name": null,
        "admkeu_name": null,
        "total": 26647536,
        "total_fuel": 28095384,
        "user": "Catur Wulansari",
        "sales": [
            {
                "id": 139582,
                "fuel_name": "Pertalite",
                "fuel_price": 10000,
                "machine_name": "Pulau 7 - A1 R2 - H1",
                "start": 5456058,
                "end": 5457191,
                "start_atg": 454192.7,
                "end_atg": 455325.8,
                "subtotal": 11330000,
                "subtotal_atg": 11331000,
                "is_reviewed": 1,
                "is_pending_buy_price": null
            },
            {
                "id": 139583,
                "fuel_name": "Pertamax",
                "fuel_price": 13300,
                "machine_name": "Pulau 7 - A1 R2 - H2",
                "start": 2157134,
                "end": 2157196,
                "start_atg": 156396.8,
                "end_atg": 156459.04,
                "subtotal": 824600,
                "subtotal_atg": 827792,
                "is_reviewed": 1,
                "is_pending_buy_price": null
            },
            {
                "id": 139584,
                "fuel_name": "Pertalite",
                "fuel_price": 10000,
                "machine_name": "Pulau 7 - A2 R2 - H1",
                "start": 3903633,
                "end": 3903633,
                "start_atg": 902277.71,
                "end_atg": 902277.71,
                "subtotal": 0,
                "subtotal_atg": 0,
                "is_reviewed": 1,
                "is_pending_buy_price": null
            },
            {
                "id": 139585,
                "fuel_name": "Pertamax",
                "fuel_price": 13300,
                "machine_name": "Pulau 7 - A2 R2 - H2",
                "start": 1336905,
                "end": 1338105,
                "start_atg": 336397.1,
                "end_atg": 337595.34,
                "subtotal": 15960000,
                "subtotal_atg": 15936592,
                "is_reviewed": 1,
                "is_pending_buy_price": null
            }
        ],
        "answer_id": 1,
        "answer": "Menunggu Kep.Shift",
        "fund_noncash": 1447848,
        "noncash": {
            "qris": 0,
            "edc": 0,
            "linkaja": 0,
            "mypertamina": 0,
            "other": 0,
            "prev_total": 0
        },
        "cash": {
            "cash_100k": 0,
            "cash_75k": 0,
            "cash_50k": 0,
            "cash_20k": 0,
            "cash_10k": 0,
            "cash_5k": 0,
            "cash_2k": 0,
            "cash_1k": 0,
            "cash_500": 0,
            "cash_200": 0,
            "cash_100": 0,
            "prev_total": 0
        },
        "machine": "Pulau 6 B",
        "fund_cash": 26648000,
        "surplus_deficit": 464,
        "task": {
            "id": 4959,
            "shift": "1",
            "fund_start": 0,
            "created_at_idn": "27 September 2023"
        },
        "note": "",
        "kasif_note": "",
        "admkeu_note": "",
        "shift_at": "2023-09-27",
        "is_pending_buy_price": 0,
        "operator_sign": "http://espbu.test/images/default-sign.png",
        "created_at": "27 September 2023 13:31",
        "updated_at": "27 September 2023 13:35"
    }
}
```

:::

### Used on pages

- `/reports/show/{id}`

## Create Fund Reports Endpoint

```http
POST /reports
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
    "qris": 0,
    "edc": 50000,
    "linkaja": 0,
    "mypertamina": 9000,
    "other": 10000,
    "cash_100k": 8,
    "cash_75k": 1,
    "cash_50k": 14,
    "cash_20k": 3,
    "cash_10k": 4,
    "cash_5k": 4,
    "cash_2k": 9,
    "cash_1k": 0,
    "cash_500": 0,
    "cash_200": 0,
    "cash_100": 0
}
```

:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| qris | int | QRIS | false |
| edc | int | EDC | false |
| linkaja | int | LinkAja | false |
| mypertamina | int | MyPertamina | false |
| other | int | Other | false |
| cash_100k | int | Cash 100k | false |
| cash_75k | int | Cash 75k | false |
| cash_50k | int | Cash 50k | false |
| cash_20k | int | Cash 20k | false |
| cash_10k | int | Cash 10k | false |
| cash_5k | int | Cash 5k | false |
| cash_2k | int | Cash 2k | false |
| cash_1k | int | Cash 1k | false |
| cash_500 | int | Cash 500 | false |
| cash_200 | int | Cash 200 | false |
| cash_100 | int | Cash 100 | false |

### Response

::: details `200` OK
```json
{
    "messages": "Laporan dana berhasil dibuat",
}
```

:::

::: details `422` Unprocessable Entity
```json
{
    "message": "The given data was invalid.",
    "errors": {
        "qris": [
            "The qris field is required."
        ],
        "edc": [
            "The edc field is required."
        ],
        "linkaja": [
            "The linkaja field is required."
        ],
        "mypertamina": [
            "The mypertamina field is required."
        ],
        "other": [
            "The other field is required."
        ],
        "cash_100k": [
            "The cash 100k field is required."
        ],
    }
}
```

:::

### Used on pages

- Android create report

## Update Fund Reports Endpoint

```http
PUT /reports/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

- Kepala Shift

::: details JSON Body
```json
{
    "answer_id": 2,
    "kasif_note": ""
}
```

:::

- Kasir

::: details JSON Body
```json
{
    "answer_id": 4,
    "fund_cash": 1400000,
    "noncash_mypertamina": 200000,
    "noncash_linkaja": 70000,
    "noncash_bni": 7650,
    "noncash_otherbank": 120000,
    "noncash_tcash": 0
}
```

:::

- Adm Keu

::: details JSON Body
```json
{
    "answer_id": 5,
    "admkeu_note": "Oke"
}
```

:::

- Kepala SPBU

::: details JSON Body
```json
{
    "answer_id": 6,
    "note": ""
}
```

:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| answer_id | int | Answer id | false |
| kasif_note | string | Kasif note | true |
| admkeu_note | string | Adm Keu note | true |
| note | string | Note | true |
| fund_cash | int | Fund cash | false |
| noncash_mypertamina | int | Noncash MyPertamina | true |
| noncash_linkaja | int | Noncash LinkAja | true |
| noncash_bni | int | Noncash BNI | true |
| noncash_otherbank | int | Noncash Other Bank | true |
| noncash_tcash | int | Noncash TCash | true |

### Response

::: details `200` OK
```json
{
    "messages": "Laporan dana berhasil diubah",
}
```

:::

::: details `422` Unprocessable Entity
```json
{
    "message": "The given data was invalid.",
    "errors": {
        "answer_id": [
            "The answer id field is required."
        ],
        "fund_cash": [
            "The fund cash field is required."
        ],
    }
}
```

:::

### Used on pages

- `/reports/review/{id}`

## Bulk Update Fund Report Validation

```http
PUT /report/validation/update
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
    "answer_id": 6,
    "search_periode_start_at": "2023-04-01",
    "search_periode_end_at": "2023-04-07",
    "search_shift_id": "",
    "note": "",
}
```

:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| answer_id | int | Answer id | false |
| search_periode_start_at | string | Search by periode start at | false |
| search_periode_end_at | string | Search by periode end at | false |
| search_shift_id | int | Search by shift id | true |
| note | string | Note | true |

### Response

::: details `200` OK
```json
{
    "messages": "Laporan dana berhasil divalidasi",
}
```

:::

::: details `422` Unprocessable Entity
```json
{
    "message": "The given data was invalid.",
    "errors": {
        "answer_id": [
            "The answer id field is required."
        ],
        "search_periode_start_at": [
            "The search periode start at field is required."
        ],
        "search_periode_end_at": [
            "The search periode end at field is required."
        ],
    }
}
```

:::

### Used on pages

- `/reports`

## Get Fund Reports Android Endpoint

```http
GET /android/reports
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameter

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| page | int | Page number | false |

### Response

::: details `200` OK
```json
{
    "data": {
        "data": [
            {
                "id": 4216,
                "total": "0.0000",
                "user_id": 33,
                "user": "Developer",
                "shift": "3",
                "machine": "Pulau 4",
                "answer": "Dicek Kasir",
                "created_at": "10 Mei 2023 21:19",
                "updated_at": "11 Mei 2023 09:53"
            },
            {
                "id": 3195,
                "total": "10231614.0000",
                "user_id": 33,
                "user": "Developer",
                "shift": "1",
                "machine": "Pulau 6 B",
                "answer": "Disetujui Kep. SPBU",
                "created_at": "24 Maret 2023 14:54",
                "updated_at": "24 Maret 2023 15:04"
            },
            {
                "id": 2984,
                "total": "22169371.0000",
                "user_id": 33,
                "user": "Developer",
                "shift": "2",
                "machine": "Pulau 6 B",
                "answer": "Dicek Adm Keu",
                "created_at": "14 Maret 2023 19:47",
                "updated_at": "15 Maret 2023 09:50"
            }
        ],
        "links": {
            "first": "http://espbu.test/api/android/reports?page=1",
            "last": "http://espbu.test/api/android/reports?page=1",
            "prev": null,
            "next": null
        },
        "meta": {
            "current_page": 1,
            "from": 1,
            "last_page": 1,
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Sebelumnya",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/android/reports?page=1",
                    "label": "1",
                    "active": true
                },
                {
                    "url": null,
                    "label": "Berikutnya &raquo;",
                    "active": false
                }
            ],
            "path": "http://espbu.test/api/android/reports",
            "per_page": 5,
            "to": 3,
            "total": 3
        }
    },
    "task": {
        "id": "",
        "status": "",
        "message": ""
    }
}
```

:::

::: details `404` Not Found
```json
{
    "message": "Laporan penjualan per BBM per Dispenser tidak ditemukan",
    "data": [],
    "task": {
        "id": "",
        "status": "",
        "message": ""
    }
}
```

:::

### Used on pages

- Android report list

## Export Excel Fund Reports Endpoint

```http
GET /report/export/xlsx
```

### Headers

- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameter

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| search_machine | int | Search by machine id | true |
| search_answer | int | Search by fund report status id | true |
| search_shift_start_at | string | Search by shift start at | true |
| search_shift_end_at | string | Search by shift end at | true |
| search_shift | int | Search by shift id | true |
| order_column | string | Order by column | true |
| order_direction | string | Order by direction | true |

### Response

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

- `/reports`



