<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Sales Reports

This module is used to manage sales per meter.

::: info
<PrefixComponent/>
:::

## Get Sales Index Report Endpoint

```http
GET /sale/index
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| page | int | Page number | true |
| search_shift_start_at | string | Search by shift start at | true |
| search_shift_end_at | string | Search by shift end at | true |
| search_fuel | int | Search by fuel id | true |
| search_machine | int | Search by machine id | true |
| search_shift | int | Search by shift id | true |
| is_full_page | int | Is full page | true |
| is_group_by_fuel | int | Is group by fuel | true |
| is_group_by_meter | int | Is group by meter | true |
| search_per_page | int | Search per page | true |
| order_column | string | Order column | true |
| order_direction | string | Order direction | true |

### Response

::: details `200` OK
```json
{
    "data": {
        "data": [
            {
                "id": 118307,
                "fuel": "PERTALITE",
                "fuel_price": "10.000",
                "machine": "Pulau 1 - A1 R2",
                "hose": 1,
                "start_stock_atg": 618732.23,
                "end_atg": 618732.23,
                "volume_atg": 0,
                "volume_test": 0,
                "nett_volume": 0,
                "subtotal_atg": 0,
                "shift": 1,
                "shift_at": "25/04/2023",
                "full_name": "Noviana setyoningrum",
                "user": "Noviana sety...",
                "verified_by": null,
                "checked_by": null,
                "shift_start_at": "06:01",
                "shift_end_at": "12:59",
                "verified_at": null,
                "checked_at": null
            },
            {
                "id": 118309,
                "fuel": "PERTAMAX",
                "fuel_price": "13.300",
                "machine": "Pulau 1 - A1 R2",
                "hose": 2,
                "start_stock_atg": 190992.68000000002,
                "end_atg": 191016.42,
                "volume_atg": 23.74,
                "volume_test": 0,
                "nett_volume": 23.74,
                "subtotal_atg": 315742,
                "shift": 1,
                "shift_at": "25/04/2023",
                "full_name": "Noviana setyoningrum",
                "user": "Noviana sety...",
                "verified_by": null,
                "checked_by": null,
                "shift_start_at": "06:01",
                "shift_end_at": "12:59",
                "verified_at": null,
                "checked_at": null
            },
            {
                "id": 118311,
                "fuel": "PERTALITE",
                "fuel_price": "10.000",
                "machine": "Pulau 1 - A2 R2",
                "hose": 1,
                "start_stock_atg": 654601.35,
                "end_atg": 655452.45,
                "volume_atg": 851.1,
                "volume_test": 1.1,
                "nett_volume": 850,
                "subtotal_atg": 8500000,
                "shift": 1,
                "shift_at": "25/04/2023",
                "full_name": "Noviana setyoningrum",
                "user": "Noviana sety...",
                "verified_by": null,
                "checked_by": null,
                "shift_start_at": "06:01",
                "shift_end_at": "12:59",
                "verified_at": null,
                "checked_at": null
            },
            // and so on
        ],
        "links": {
            "first": "http://espbu.test/api/sale/index?page=1",
            "last": "http://espbu.test/api/sale/index?page=27",
            "prev": null,
            "next": "http://espbu.test/api/sale/index?page=2"
        },
        "meta": {
            "current_page": 1,
            "from": 1,
            "last_page": 27,
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Sebelumnya",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sale/index?page=1",
                    "label": "1",
                    "active": true
                },
                {
                    "url": "http://espbu.test/api/sale/index?page=2",
                    "label": "2",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sale/index?page=3",
                    "label": "3",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sale/index?page=4",
                    "label": "4",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sale/index?page=5",
                    "label": "5",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sale/index?page=6",
                    "label": "6",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sale/index?page=7",
                    "label": "7",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sale/index?page=8",
                    "label": "8",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sale/index?page=9",
                    "label": "9",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sale/index?page=10",
                    "label": "10",
                    "active": false
                },
                {
                    "url": null,
                    "label": "...",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sale/index?page=26",
                    "label": "26",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sale/index?page=27",
                    "label": "27",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sale/index?page=2",
                    "label": "Berikutnya &raquo;",
                    "active": false
                }
            ],
            "path": "http://espbu.test/api/sale/index",
            "per_page": 10,
            "to": 10,
            "total": 264
        }
    },
    "total": {
        "volume_atg": 1148.1599999999999,
        "volume_test": 2.2,
        "nett_volume": 1145.9599999999998,
        "subtotal_atg": 12436268
    },
    "shift": {
        "name": 1,
        "shift_start_at": "25/04/2023",
        "shift_end_at": ""
    },
    "opts": {
        "group_by_fuel": {
            "data": {
                "data": [
                    {
                        "fuel": "Pertalite",
                        "volume_atg": 21094.69,
                        "volume_test": 204.4,
                        "nett_volume": 20890.29,
                        "subtotal_atg": 208902900
                    },
                    {
                        "fuel": "Pertamax",
                        "volume_atg": 10705.7,
                        "volume_test": 2.2,
                        "nett_volume": 10703.5,
                        "subtotal_atg": 142356550
                    },
                    {
                        "fuel": "Pertamax Turbo",
                        "volume_atg": 811.47,
                        "volume_test": 2.2,
                        "nett_volume": 809.27,
                        "subtotal_atg": 12139050
                    },
                    {
                        "fuel": "Pertamina Dex",
                        "volume_atg": 2808.21,
                        "volume_test": 182.2,
                        "nett_volume": 2626.01,
                        "subtotal_atg": 40440554
                    }
                ]
            },
            "total": {
                "volume_atg": 35420.07,
                "volume_test": 391,
                "nett_volume": 35029.07,
                "subtotal_atg": 403839054
            }
        },
        "unvalidated_report": 264,
        "unverified_report": 264,
        "verified_by": null
    }
}
```
:::

### Used on pages

- `/sales`

## Get Sales Report Details Endpoint

```http
GET /sales/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Response

::: details `200` OK
```json
{
    "message": "Penjualan ditemukan",
    "data": {
        "id": 98332,
        "fuel": {
            "name": "Pertamina Dex",
            "price": 16750,
            "buy": 16261.1,
            "hose": 4
        },
        "atg": {
            "start_stock_atg": 0,
            "start_atg": 95157.19,
            "subtotal_atg": 1675000,
            "hpp_atg": 1626110,
            "gross_profit_atg": 48890
        },
        "machine": {
            "serial": "Pulau 5 - A2"
        },
        "end_atg": 95257.19,
        "std_profit": 488.9,
        "hpp": 1626110,
        "gross_profit": 48890,
        "is_submitted": 1,
        "user": "Developer",
        "task": {
            "shift": "1",
            "fund_start": 0,
            "created_at_idn": "04 Januari 2023"
        },
        "report": {
            "id": 2236,
            "total_fuel": 94261190,
            "fund_noncash": 36210060,
            "fund_cash": 58051130,
            "surplus_deficit": 0,
            "total": 58051130
        },
        "start_stock": 0,
        "start": 95157,
        "end": 95257,
        "subtotal": 1675000,
        "is_reviewed": 1,
        "profit_now": 0,
        "profit_before": 0,
        "profit_after": 0,
        "net_loss": 0,
        "closed_loss": 0,
        "profit": 0,
        "loss": 0,
        "effective_hpp": 1626110,
        "sold_fuel": 100,
        "sold_fuel_atg": 100,
        "created_at_idn": "04 Januari 2023",
        "shift_start_at": "00:00:00",
        "shift_end_at": "00:00:00",
        "shift_at": "2023-01-04",
        "kasif_name": "Developer"
    }
}
```

:::

::: details `403` Forbidden
```json
{
    "message": "Anda tidak memiliki akses untuk melihat penjualan ini"
}
```
:::

::: details `404` Not Found
```json
{
    "message": "Penjualan tidak ditemukan",
    "data": []
}
```
:::

### Used on pages

- `/sales/show/{id}`

## Get Sales Report Android Endpoint

```http
GET /sales
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| page | int | Page number | true |

### Response

::: details `200` OK
```json
{
    "data": {
        "data": [
            {
                "id": 120421,
                "fuel": {
                    "name": "Pertamina Dex",
                    "price": "13250.0000"
                },
                "machine": {
                    "serial": "Pulau 4 - A2"
                },
                "fuel_price": "13300.0000",
                "is_submitted": 1,
                "start": "766018.00000",
                "end": "766018.00000",
                "subtotal": "0.0000",
                "task": {
                    "id": 1805,
                    "user_id": 33,
                    "user": "Developer",
                    "shift_id": 3,
                    "shift": "3",
                    "machine_id": 8,
                    "machine": "Pulau 4 - A2",
                    "machines": "Pulau 4 - A1, Pulau 4 - A2",
                    "fund_start": 0,
                    "status": 11,
                    "shift_start_at": "2023-05-10 20:01:00",
                    "shift_end_at": "2023-05-11 05:59:00",
                    "meters": [
                        {
                            "id": 21,
                            "fuel": "Pertamax Turbo",
                            "machine": "Pulau 4 - A1",
                            "hose": 1
                        },
                        {
                            "id": 22,
                            "fuel": "Pertalite",
                            "machine": "Pulau 4 - A1",
                            "hose": 2
                        },
                        {
                            "id": 23,
                            "fuel": "Pertamax",
                            "machine": "Pulau 4 - A1",
                            "hose": 3
                        },
                        {
                            "id": 24,
                            "fuel": "Pertamina Dex",
                            "machine": "Pulau 4 - A1",
                            "hose": 4
                        },
                        {
                            "id": 25,
                            "fuel": "Pertamax Turbo",
                            "machine": "Pulau 4 - A2",
                            "hose": 1
                        },
                        {
                            "id": 26,
                            "fuel": "Pertalite",
                            "machine": "Pulau 4 - A2",
                            "hose": 2
                        },
                        {
                            "id": 27,
                            "fuel": "Pertamax",
                            "machine": "Pulau 4 - A2",
                            "hose": 3
                        },
                        {
                            "id": 28,
                            "fuel": "Pertamina Dex",
                            "machine": "Pulau 4 - A2",
                            "hose": 4
                        }
                    ],
                    "created_at": "10 Mei 2023 21:19",
                    "updated_at": "10 Mei 2023 21:19"
                },
                "created_at_idn": "10 Mei 2023"
            },
            {
                "id": 120415,
                "fuel": {
                    "name": "Pertamina Dex",
                    "price": "13250.0000"
                },
                "machine": {
                    "serial": "Pulau 4 - A2"
                },
                "fuel_price": "15000.0000",
                "is_submitted": 1,
                "start": "705259.00000",
                "end": "705259.00000",
                "subtotal": "0.0000",
                "task": {
                    "id": 1805,
                    "user_id": 33,
                    "user": "Developer",
                    "shift_id": 3,
                    "shift": "3",
                    "machine_id": 8,
                    "machine": "Pulau 4 - A2",
                    "machines": "Pulau 4 - A1, Pulau 4 - A2",
                    "fund_start": 0,
                    "status": 11,
                    "shift_start_at": "2023-05-10 20:01:00",
                    "shift_end_at": "2023-05-11 05:59:00",
                    "meters": [
                        {
                            "id": 21,
                            "fuel": "Pertamax Turbo",
                            "machine": "Pulau 4 - A1",
                            "hose": 1
                        },
                        {
                            "id": 22,
                            "fuel": "Pertalite",
                            "machine": "Pulau 4 - A1",
                            "hose": 2
                        },
                        {
                            "id": 23,
                            "fuel": "Pertamax",
                            "machine": "Pulau 4 - A1",
                            "hose": 3
                        },
                        {
                            "id": 24,
                            "fuel": "Pertamina Dex",
                            "machine": "Pulau 4 - A1",
                            "hose": 4
                        },
                        {
                            "id": 25,
                            "fuel": "Pertamax Turbo",
                            "machine": "Pulau 4 - A2",
                            "hose": 1
                        },
                        {
                            "id": 26,
                            "fuel": "Pertalite",
                            "machine": "Pulau 4 - A2",
                            "hose": 2
                        },
                        {
                            "id": 27,
                            "fuel": "Pertamax",
                            "machine": "Pulau 4 - A2",
                            "hose": 3
                        },
                        {
                            "id": 28,
                            "fuel": "Pertamina Dex",
                            "machine": "Pulau 4 - A2",
                            "hose": 4
                        }
                    ],
                    "created_at": "10 Mei 2023 21:19",
                    "updated_at": "10 Mei 2023 21:19"
                },
                "created_at_idn": "10 Mei 2023"
            },
            // and so on
        ],
        "links": {
            "first": "http://espbu.test/api/sales?page=1",
            "last": "http://espbu.test/api/sales?page=10575",
            "prev": null,
            "next": "http://espbu.test/api/sales?page=2"
        },
        "meta": {
            "current_page": 1,
            "from": 1,
            "last_page": 10575,
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Sebelumnya",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sales?page=1",
                    "label": "1",
                    "active": true
                },
                {
                    "url": "http://espbu.test/api/sales?page=2",
                    "label": "2",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sales?page=3",
                    "label": "3",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sales?page=4",
                    "label": "4",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sales?page=5",
                    "label": "5",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sales?page=6",
                    "label": "6",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sales?page=7",
                    "label": "7",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sales?page=8",
                    "label": "8",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sales?page=9",
                    "label": "9",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sales?page=10",
                    "label": "10",
                    "active": false
                },
                {
                    "url": null,
                    "label": "...",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sales?page=10574",
                    "label": "10574",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sales?page=10575",
                    "label": "10575",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/sales?page=2",
                    "label": "Berikutnya &raquo;",
                    "active": false
                }
            ],
            "path": "http://espbu.test/api/sales",
            "per_page": 10,
            "to": 10,
            "total": 105748
        }
    },
    "task": {
        "id": "",
        "status": "",
        "message": "",
        "sale_remains": 0
    }
}
```
:::

::: details `403` Forbidden
```json
{
    "message": "Anda tidak memiliki akses untuk melihat penjualan ini"
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
        "message": "",
        "sale_remains": 0
    }
}
```
:::

### Used on pages

- Sales Report Android

## Create Sale Report Endpoint

```http
POST /sales
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

```json
{
    "task_id": 2893,
    "end": 2791455,
    "end_atg": 790489.97
}
```

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| task_id | int | Task id | false |
| end | int | End meter | false |
| end_atg | int | End ATG | false |

### Response

::: details `200` OK
```json
{
  "message": "Penjualan per bbm per dispenser berhasil dibuat"
}
```

:::

::: details `403` Forbidden
```json
{
    "message": "Anda tidak memiliki akses untuk membuat penjualan ini"
}
```
:::

::: details `422` Unprocessable Entity
```json
{
    "message": "The given data was invalid.",
    "errors": {
        "task_id": [
            "The task id field is required."
        ],
        "end": [
            "The end field is required."
        ],
        "end_atg": [
            "The end atg field is required."
        ]
    }
}
```
:::

### Used on pages

- Create Sale Android

## Get Sales Unsubmitted Endpoint

```http
GET /sales/where/unsubmitted
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Response

::: details `200` OK
```json
{
  "data" :{
    {
      "id": 120421,
      "machine_name": "Pulau 4 - A2",
      "fuel_name": "Pertamina Dex",
      "fuel_price": "13300.0000",
      "is_submitted": 0,
      "start": "766018.00000",
      "end": "766018.00000",
      "subtotal": "0.0000",
      "task": {
          "fund_start": 0,
          "shift_start_at": "2023-05-10 20:01:00",
          "shift_end_at": "2023-05-11 05:59:00",
      },
      "created_at_idn": "10 Mei 2023",
    },
    // and so on
  }
}
```

::: details `403` Forbidden
```json
{
    "message": "Anda tidak memiliki akses untuk melihat penjualan ini"
}
```
:::

::: details `404` Not Found
```json
{
    "message": "Laporan penjualan per BBM per Dispenser tidak ditemukan",
    "data": []
}
```
:::

### Used on pages

- Android Fund Report Index

## Get Report Sale Bulk Endpoint

```http
GET /report/sales/edit/{id}
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
        "id": 3594,
        "answer_id": 4,
        "is_pending_buy_price": 0,
        "sales": [
            {
                "id": 116534,
                "machine": "Pulau 1 - A1 R2 H1 PERTALITE",
                "start_stock": 618732,
                "start": 618732,
                "end": 618732,
                "start_stock_atg": 618732.23,
                "start_atg": 618732.23,
                "end_atg": 618732.23,
                "volume_test": 0,
                "nett_volume": 0,
                "fuel_price": 10000,
                "fuel_buy": 9692,
                "std_profit": 308,
                "meter_id": 1,
                "task_id": 1172,
                "fuel_id": 1,
                "tank_id": 3,
                "last_end": 618732.23,
                "last_start_stock": 0,
                "last_profit": 0,
                "last_loss": 0
            },
            {
                "id": 116535,
                "machine": "Pulau 1 - A1 R2 H2 PERTAMAX",
                "start_stock": 184787,
                "start": 185313,
                "end": 185313,
                "start_stock_atg": 184787.43,
                "start_atg": 185312.92,
                "end_atg": 185312.92,
                "volume_test": 0,
                "nett_volume": 525.49,
                "fuel_price": 13300,
                "fuel_buy": 12894,
                "std_profit": 406,
                "meter_id": 2,
                "task_id": 1172,
                "fuel_id": 2,
                "tank_id": 2,
                "last_end": 185312.92,
                "last_start_stock": 0,
                "last_profit": 0,
                "last_loss": 0
            },
            {
                "id": 116536,
                "machine": "Pulau 1 - A2 R2 H1 PERTALITE",
                "start_stock": 627672,
                "start": 628257,
                "end": 628257,
                "start_stock_atg": 627671.89,
                "start_atg": 628256.91,
                "end_atg": 628256.91,
                "volume_test": 0,
                "nett_volume": 585.02,
                "fuel_price": 10000,
                "fuel_buy": 9692,
                "std_profit": 308,
                "meter_id": 3,
                "task_id": 1172,
                "fuel_id": 1,
                "tank_id": 3,
                "last_end": 628256.91,
                "last_start_stock": 0,
                "last_profit": 0,
                "last_loss": 0
            },
            {
                "id": 116537,
                "machine": "Pulau 1 - A2 R2 H2 PERTAMAX",
                "start_stock": 772163,
                "start": 772177,
                "end": 772177,
                "start_stock_atg": 772163.34,
                "start_atg": 772176.56,
                "end_atg": 772176.56,
                "volume_test": 0,
                "nett_volume": 13.22,
                "fuel_price": 13300,
                "fuel_buy": 12894,
                "std_profit": 406,
                "meter_id": 4,
                "task_id": 1172,
                "fuel_id": 2,
                "tank_id": 2,
                "last_end": 772176.56,
                "last_start_stock": 0,
                "last_profit": 0,
                "last_loss": 0
            }
        ]
    }
}
```

:::

::: details `403` Forbidden
```json
{
    "message": "Anda tidak memiliki akses untuk melihat laporan ini"
}
```
:::

::: details `404` Not Found
```json
{
    "message": "Laporan dana tidak ditemukan",
    "data": []
}
```
:::

### Used on pages

- `/reports/{reportID}/sales/edit`

## Update Report Sale Bulk Endpoint

```http
PUT /report/sales/edit/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
    "id": 2099,
    "sales": [
        {
            "id": 92269,
            "fuel": "PERTALITE",
            "machine": "Pulau I - A1",
            "hose": 1,
            "start_stock": 614689.01,
            "start": 615201.65,
            "end": 615201.65,
            "volume": 512.64,
            "volume_test": 0,
            "nett_volume": 512.64,
            "fuel_price": 10000,
            "fuel_buy": 9692.2,
            "std_profit": 308.1,
            "meter_id": 1
        },
        {
            "id": 92270,
            "fuel": "PERTAMAX",
            "machine": "Pulau I - A1",
            "hose": 2,
            "start_stock": 85596.77,
            "start": 85612.93,
            "end": 85612.93,
            "volume": 16.16,
            "volume_test": 0,
            "nett_volume": 16.16,
            "fuel_price": 12800,
            "fuel_buy": 12392.5863,
            "std_profit": 407.4138,
            "meter_id": 2
        },
        {
            "id": 92271,
            "fuel": "PERTALITE",
            "machine": "Pulau I - A2",
            "hose": 1,
            "start_stock": 264188.3,
            "start": 265217.78,
            "end": 265217.78,
            "volume": 1029.48,
            "volume_test": 0,
            "nett_volume": 1029.48,
            "fuel_price": 10000,
            "fuel_buy": 9692.2,
            "std_profit": 308.1,
            "meter_id": 3
        },
        {
            "id": 92272,
            "fuel": "PERTAMAX",
            "machine": "Pulau I - A2",
            "hose": 2,
            "start_stock": 744262.72,
            "start": 744297.19,
            "end": 744297.19,
            "volume": 34.47,
            "volume_test": 0,
            "nett_volume": 34.47,
            "fuel_price": 12800,
            "fuel_buy": 12392.5863,
            "std_profit": 407.4138,
            "meter_id": 4
        },
        {
            "id": 92273,
            "fuel": "PERTAMAX TURBO",
            "machine": "Pulau II - A1",
            "hose": 1,
            "start_stock": 591609.27,
            "start": 591688.93,
            "end": 591688.93,
            "volume": 79.66,
            "volume_test": 0,
            "nett_volume": 79.66,
            "fuel_price": 0,
            "fuel_buy": 0,
            "std_profit": 0,
            "meter_id": 5
        },
        {
            "id": 92274,
            "fuel": "PERTALITE",
            "machine": "Pulau II - A1",
            "hose": 2,
            "start_stock": 358543.97,
            "start": 358543.97,
            "end": 358543.97,
            "volume": 0,
            "volume_test": 0,
            "nett_volume": 0,
            "fuel_price": 10000,
            "fuel_buy": 9692.2,
            "std_profit": 308.1,
            "meter_id": 6
        },
        {
            "id": 92275,
            "fuel": "PERTAMAX",
            "machine": "Pulau II - A1",
            "hose": 3,
            "start_stock": 902508.66,
            "start": 902590.93,
            "end": 902590.93,
            "volume": 82.27,
            "volume_test": 0,
            "nett_volume": 82.27,
            "fuel_price": 12800,
            "fuel_buy": 12392.5863,
            "std_profit": 407.4138,
            "meter_id": 7
        },
        {
            "id": 92276,
            "fuel": "PERTAMINA DEX",
            "machine": "Pulau II - A1",
            "hose": 4,
            "start_stock": 185116.63,
            "start": 185116.63,
            "end": 185116.63,
            "volume": 0,
            "volume_test": 0,
            "nett_volume": 0,
            "fuel_price": 13700,
            "fuel_buy": 13450,
            "std_profit": 250,
            "meter_id": 8
        },
        {
            "id": 92277,
            "fuel": "PERTAMAX TURBO",
            "machine": "Pulau II - A2",
            "hose": 1,
            "start_stock": 959630.79,
            "start": 959698.72,
            "end": 959698.72,
            "volume": 67.93,
            "volume_test": 0,
            "nett_volume": 67.93,
            "fuel_price": 0,
            "fuel_buy": 0,
            "std_profit": 0,
            "meter_id": 9
        },
        {
            "id": 92278,
            "fuel": "PERTALITE",
            "machine": "Pulau II - A2",
            "hose": 2,
            "start_stock": 127207.43,
            "start": 127716.93,
            "end": 127716.93,
            "volume": 509.5,
            "volume_test": 0,
            "nett_volume": 509.5,
            "fuel_price": 10000,
            "fuel_buy": 9692.2,
            "std_profit": 308.1,
            "meter_id": 10
        },
        {
            "id": 92279,
            "fuel": "PERTAMAX",
            "machine": "Pulau II - A2",
            "hose": 3,
            "start_stock": 67616.64,
            "start": 68117.27,
            "end": 68117.27,
            "volume": 500.64,
            "volume_test": 0,
            "nett_volume": 500.64,
            "fuel_price": 12800,
            "fuel_buy": 12392.5863,
            "std_profit": 407.4138,
            "meter_id": 11
        },
        {
            "id": 92280,
            "fuel": "PERTAMINA DEX",
            "machine": "Pulau II - A2",
            "hose": 4,
            "start_stock": 555276.02,
            "start": 555578.95,
            "end": 555578.95,
            "volume": 302.93,
            "volume_test": 0,
            "nett_volume": 302.93,
            "fuel_price": 13700,
            "fuel_buy": 13450,
            "std_profit": 250,
            "meter_id": 12
        },
        {
            "id": 92281,
            "fuel": "PERTAMAX TURBO",
            "machine": "Pulau III - A1",
            "hose": 1,
            "start_stock": 625475.52,
            "start": 625534.15,
            "end": 625534.15,
            "volume": 58.63,
            "volume_test": 0,
            "nett_volume": 58.63,
            "fuel_price": 0,
            "fuel_buy": 0,
            "std_profit": 0,
            "meter_id": 13
        },
        {
            "id": 92282,
            "fuel": "PERTALITE",
            "machine": "Pulau III - A1",
            "hose": 2,
            "start_stock": 787354.1,
            "start": 788649.01,
            "end": 788649.01,
            "volume": 1294.91,
            "volume_test": 0,
            "nett_volume": 1294.91,
            "fuel_price": 10000,
            "fuel_buy": 9692.2,
            "std_profit": 308.1,
            "meter_id": 14
        },
        {
            "id": 92283,
            "fuel": "PERTAMAX",
            "machine": "Pulau III - A1",
            "hose": 3,
            "start_stock": 625723.05,
            "start": 625889.3,
            "end": 625889.3,
            "volume": 166.26,
            "volume_test": 0,
            "nett_volume": 166.26,
            "fuel_price": 12800,
            "fuel_buy": 12392.5863,
            "std_profit": 407.4138,
            "meter_id": 15
        },
        {
            "id": 92284,
            "fuel": "PERTAMINA DEX",
            "machine": "Pulau III - A1",
            "hose": 4,
            "start_stock": 201308.71,
            "start": 201330.27,
            "end": 201330.27,
            "volume": 21.56,
            "volume_test": 0,
            "nett_volume": 21.56,
            "fuel_price": 13700,
            "fuel_buy": 13450,
            "std_profit": 250,
            "meter_id": 16
        },
        {
            "id": 92285,
            "fuel": "PERTAMAX TURBO",
            "machine": "Pulau III - A2",
            "hose": 1,
            "start_stock": 352881.89,
            "start": 352953.07,
            "end": 352953.07,
            "volume": 71.18,
            "volume_test": 0,
            "nett_volume": 71.18,
            "fuel_price": 0,
            "fuel_buy": 0,
            "std_profit": 0,
            "meter_id": 17
        },
        {
            "id": 92286,
            "fuel": "PERTALITE",
            "machine": "Pulau III - A2",
            "hose": 2,
            "start_stock": 288497.34,
            "start": 289714.88,
            "end": 289714.88,
            "volume": 1217.54,
            "volume_test": 0,
            "nett_volume": 1217.54,
            "fuel_price": 10000,
            "fuel_buy": 9692.2,
            "std_profit": 308.1,
            "meter_id": 18
        },
        {
            "id": 92287,
            "fuel": "PERTAMAX",
            "machine": "Pulau III - A2",
            "hose": 3,
            "start_stock": 361427.35,
            "start": 361805.83,
            "end": 361805.83,
            "volume": 378.48,
            "volume_test": 0,
            "nett_volume": 378.48,
            "fuel_price": 12800,
            "fuel_buy": 12392.5863,
            "std_profit": 407.4138,
            "meter_id": 19
        },
        {
            "id": 92288,
            "fuel": "PERTAMINA DEX",
            "machine": "Pulau III - A2",
            "hose": 4,
            "start_stock": 947939.67,
            "start": 948136.07,
            "end": 948136.07,
            "volume": 196.41,
            "volume_test": 0,
            "nett_volume": 196.41,
            "fuel_price": 13700,
            "fuel_buy": 13450,
            "std_profit": 250,
            "meter_id": 20
        },
        {
            "id": 92289,
            "fuel": "PERTAMAX TURBO",
            "machine": "Pulau IV - A1",
            "hose": 1,
            "start_stock": 87118.22,
            "start": 87204.28,
            "end": 87204.28,
            "volume": 86.06,
            "volume_test": 0,
            "nett_volume": 86.06,
            "fuel_price": 0,
            "fuel_buy": 0,
            "std_profit": 0,
            "meter_id": 21
        },
        {
            "id": 92290,
            "fuel": "PERTALITE",
            "machine": "Pulau IV - A1",
            "hose": 2,
            "start_stock": 711645.73,
            "start": 712674.93,
            "end": 712674.93,
            "volume": 1029.2,
            "volume_test": 0,
            "nett_volume": 1029.2,
            "fuel_price": 10000,
            "fuel_buy": 9692.2,
            "std_profit": 308.1,
            "meter_id": 22
        },
        {
            "id": 92291,
            "fuel": "PERTAMAX",
            "machine": "Pulau IV - A1",
            "hose": 3,
            "start_stock": 655326.65,
            "start": 655638.77,
            "end": 655638.77,
            "volume": 312.12,
            "volume_test": 0,
            "nett_volume": 312.12,
            "fuel_price": 12800,
            "fuel_buy": 12392.5863,
            "std_profit": 407.4138,
            "meter_id": 23
        },
        {
            "id": 92292,
            "fuel": "PERTAMINA DEX",
            "machine": "Pulau IV - A1",
            "hose": 4,
            "start_stock": 231453.42,
            "start": 231575.84,
            "end": 231575.84,
            "volume": 122.42,
            "volume_test": 0,
            "nett_volume": 122.42,
            "fuel_price": 13700,
            "fuel_buy": 13450,
            "std_profit": 250,
            "meter_id": 24
        },
        {
            "id": 92293,
            "fuel": "PERTAMAX TURBO",
            "machine": "Pulau IV - A2",
            "hose": 1,
            "start_stock": 139298.77,
            "start": 139322.24,
            "end": 139322.24,
            "volume": 23.47,
            "volume_test": 0,
            "nett_volume": 23.47,
            "fuel_price": 0,
            "fuel_buy": 0,
            "std_profit": 0,
            "meter_id": 25
        },
        {
            "id": 92294,
            "fuel": "PERTALITE",
            "machine": "Pulau IV - A2",
            "hose": 2,
            "start_stock": 657608.29,
            "start": 657981.85,
            "end": 657981.85,
            "volume": 373.56,
            "volume_test": 0,
            "nett_volume": 373.56,
            "fuel_price": 10000,
            "fuel_buy": 9692.2,
            "std_profit": 308.1,
            "meter_id": 26
        },
        {
            "id": 92295,
            "fuel": "PERTAMAX",
            "machine": "Pulau IV - A2",
            "hose": 3,
            "start_stock": 225003.05,
            "start": 225016.81,
            "end": 225016.81,
            "volume": 13.76,
            "volume_test": 0,
            "nett_volume": 13.76,
            "fuel_price": 12800,
            "fuel_buy": 12392.5863,
            "std_profit": 407.4138,
            "meter_id": 27
        },
        {
            "id": 92296,
            "fuel": "PERTAMINA DEX",
            "machine": "Pulau IV - A2",
            "hose": 4,
            "start_stock": 25336.28,
            "start": 25336.28,
            "end": 25336.28,
            "volume": 0,
            "volume_test": 0,
            "nett_volume": 0,
            "fuel_price": 13700,
            "fuel_buy": 13450,
            "std_profit": 250,
            "meter_id": 28
        },
        {
            "id": 92297,
            "fuel": "PERTAMAX TURBO",
            "machine": "Pulau V - A1",
            "hose": 1,
            "start_stock": 543252.84,
            "start": 543252.84,
            "end": 543252.84,
            "volume": 0,
            "volume_test": 0,
            "nett_volume": 0,
            "fuel_price": 0,
            "fuel_buy": 0,
            "std_profit": 0,
            "meter_id": 29
        },
        {
            "id": 92298,
            "fuel": "PERTALITE",
            "machine": "Pulau V - A1",
            "hose": 2,
            "start_stock": 499026.41,
            "start": 499026.41,
            "end": 499026.41,
            "volume": 0,
            "volume_test": 0,
            "nett_volume": 0,
            "fuel_price": 10000,
            "fuel_buy": 9692.2,
            "std_profit": 308.1,
            "meter_id": 30
        },
        {
            "id": 92299,
            "fuel": "PERTAMAX",
            "machine": "Pulau V - A1",
            "hose": 3,
            "start_stock": 637623.94,
            "start": 637623.94,
            "end": 637623.94,
            "volume": 0,
            "volume_test": 0,
            "nett_volume": 0,
            "fuel_price": 12800,
            "fuel_buy": 12392.5863,
            "std_profit": 407.4138,
            "meter_id": 31
        },
        {
            "id": 92300,
            "fuel": "PERTAMINA DEX",
            "machine": "Pulau V - A1",
            "hose": 4,
            "start_stock": 361298.89,
            "start": 361298.89,
            "end": 361298.89,
            "volume": 0,
            "volume_test": 0,
            "nett_volume": 0,
            "fuel_price": 13700,
            "fuel_buy": 13450,
            "std_profit": 250,
            "meter_id": 32
        },
        {
            "id": 92301,
            "fuel": "PERTAMAX TURBO",
            "machine": "Pulau V - A2",
            "hose": 1,
            "start_stock": 223994,
            "start": 223994,
            "end": 223994,
            "volume": 0,
            "volume_test": 0,
            "nett_volume": 0,
            "fuel_price": 0,
            "fuel_buy": 0,
            "std_profit": 0,
            "meter_id": 33
        },
        {
            "id": 92302,
            "fuel": "PERTALITE",
            "machine": "Pulau V - A2",
            "hose": 2,
            "start_stock": 347969.35,
            "start": 347969.35,
            "end": 347969.35,
            "volume": 0,
            "volume_test": 0,
            "nett_volume": 0,
            "fuel_price": 10000,
            "fuel_buy": 9692.2,
            "std_profit": 308.1,
            "meter_id": 34
        },
        {
            "id": 92303,
            "fuel": "PERTAMAX",
            "machine": "Pulau V - A2",
            "hose": 3,
            "start_stock": 597964.52,
            "start": 597964.52,
            "end": 597964.52,
            "volume": 0,
            "volume_test": 0,
            "nett_volume": 0,
            "fuel_price": 12800,
            "fuel_buy": 12392.5863,
            "std_profit": 407.4138,
            "meter_id": 35
        },
        {
            "id": 92304,
            "fuel": "PERTAMINA DEX",
            "machine": "Pulau V - A2",
            "hose": 4,
            "start_stock": 91887.26,
            "start": 91887.26,
            "end": 91887.26,
            "volume": 0,
            "volume_test": 0,
            "nett_volume": 0,
            "fuel_price": 13700,
            "fuel_buy": 13450,
            "std_profit": 250,
            "meter_id": 36
        },
        {
            "id": 92305,
            "fuel": "PERTALITE",
            "machine": "Pulau VI A - A1",
            "hose": 1,
            "start_stock": 315038.24,
            "start": 315038.24,
            "end": 315038.24,
            "volume": 0,
            "volume_test": 0,
            "nett_volume": 0,
            "fuel_price": 10000,
            "fuel_buy": 9692.2,
            "std_profit": 308.1,
            "meter_id": 37
        },
        {
            "id": 92306,
            "fuel": "PERTAMAX",
            "machine": "Pulau VI A - A1",
            "hose": 2,
            "start_stock": 550547.63,
            "start": 550547.63,
            "end": 550547.63,
            "volume": 0,
            "volume_test": 0,
            "nett_volume": 0,
            "fuel_price": 12800,
            "fuel_buy": 12392.5863,
            "std_profit": 407.4138,
            "meter_id": 38
        },
        {
            "id": 92307,
            "fuel": "PERTALITE",
            "machine": "Pulau VI A - A2",
            "hose": 1,
            "start_stock": 249339.53,
            "start": 249339.53,
            "end": 249339.53,
            "volume": 0,
            "volume_test": 0,
            "nett_volume": 0,
            "fuel_price": 10000,
            "fuel_buy": 9692.2,
            "std_profit": 308.1,
            "meter_id": 39
        },
        {
            "id": 92308,
            "fuel": "PERTAMAX",
            "machine": "Pulau VI A - A2",
            "hose": 2,
            "start_stock": 416713.2,
            "start": 416713.2,
            "end": 416713.2,
            "volume": 0,
            "volume_test": 0,
            "nett_volume": 0,
            "fuel_price": 12800,
            "fuel_buy": 12392.5863,
            "std_profit": 407.4138,
            "meter_id": 40
        },
        {
            "id": 92309,
            "fuel": "PERTALITE",
            "machine": "Pulau VI B - A1",
            "hose": 1,
            "start_stock": 993401.98,
            "start": 994102.44,
            "end": 994102.44,
            "volume": 700.46,
            "volume_test": 0,
            "nett_volume": 700.46,
            "fuel_price": 10000,
            "fuel_buy": 9692.2,
            "std_profit": 308.1,
            "meter_id": 41
        },
        {
            "id": 92310,
            "fuel": "PERTAMAX",
            "machine": "Pulau VI B - A1",
            "hose": 2,
            "start_stock": 128169.38,
            "start": 128174.16,
            "end": 128174.16,
            "volume": 4.78,
            "volume_test": 0,
            "nett_volume": 4.78,
            "fuel_price": 12800,
            "fuel_buy": 12392.5863,
            "std_profit": 407.4138,
            "meter_id": 42
        },
        {
            "id": 92311,
            "fuel": "PERTALITE",
            "machine": "Pulau VI B - A2",
            "hose": 1,
            "start_stock": 902277.71,
            "start": 902277.71,
            "end": 902277.71,
            "volume": 0,
            "volume_test": 0,
            "nett_volume": 0,
            "fuel_price": 10000,
            "fuel_buy": 9692.2,
            "std_profit": 308.1,
            "meter_id": 43
        },
        {
            "id": 92312,
            "fuel": "PERTAMAX",
            "machine": "Pulau VI B - A2",
            "hose": 2,
            "start_stock": 946350.05,
            "start": 947088.02,
            "end": 947088.02,
            "volume": 737.97,
            "volume_test": 0,
            "nett_volume": 737.97,
            "fuel_price": 12800,
            "fuel_buy": 12392.5863,
            "std_profit": 407.4138,
            "meter_id": 44
        }
    ]
}
```
:::

| Name | Type | Description | Nullable|
|------|------|-------------|---------|
| id | integer | ID laporan | false |
| sales | array | Array of sales | false |
| sales.id | integer | ID sales | false |
| sales.start_stock | float | Stok awal pump | false |
| sales.end  | float | Stok akhir pump | false |
| sales.start_stock_atg  | float | Stok awal ATG | false |
| sales.end_atg | float | Stok akhir ATG | false |


### Response

::: details `200` OK
```json
{
    "message": "Laporan berhasil diubah"
}
```

:::

::: details `403` Forbidden
```json
{
    "message": "Anda tidak memiliki akses untuk mengubah laporan ini"
}
```
:::

::: details `422` Unprocessable Entity
``` json
{
    "message": "The given data was invalid.",
    "errors": {
      "id": [
        "The id field is required."
      ]
    }
}
```

:::

### Used on page

- `/reports/{reportID}/sales/edit`

## Update Report Sale Bulk Fix Endpoint

```http
PUT /report/sales/fix/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

Same as [Update Report Sale Bulk](#update-report-sale-bulk)

### Response

::: details `200` OK

```json
{
    "message": "Laporan berhasil diperbaiki"
}
```

:::

::: details `403` Forbidden
```json
{
    "message": "Anda tidak memiliki akses untuk mengubah laporan ini"
}
```
:::

::: details `422` Unprocessable Entity
``` json
{
    "message": "The given data was invalid.",
    "errors": {
      "id": [
        "The id field is required."
      ]
    }
}
```

:::

### Used on page

- `/reports/{reportID}/sales/fix`

## Export Excel Sales Report

```http
GET /sale/export/xlsx
```

### Headers

- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

Same as [Get Sales Report](#get-sales-index-report-endpoint)

### Response


::: details `200` OK

File Excel

:::

::: details `403` Forbidden
```json
{
    "message": "Anda tidak memiliki akses untuk mengunduh laporan ini"
}
```
:::

### Used on page

- `/sales`

## Update Sales Report Validation Endpoint

```http
GET /sale/validation
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

Same as [Get Sales Report](#get-sales-index-report-endpoint)

### Response

::: details `200` OK
```json
{
  "message": "Laporan berhasil divalidasi"
}
```

:::

::: details `403` Forbidden
```json
{
    "message": "Anda tidak memiliki akses untuk mengubah laporan ini"
}
```
:::

### Used on page

- `/sales`

## Update Sales Report Verification Endpoint

```http
GET /sale/verification
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

Same as [Get Sales Report](#get-sales-index-report-endpoint)

### Response

::: details `200` OK
```json
{
  "message": "Laporan berhasil diverifikasi"
}
```

:::

::: details `403` Forbidden
```json
{
    "message": "Anda tidak memiliki akses untuk mengubah laporan ini"
}
```

:::

### Used on page

- `/sales`





