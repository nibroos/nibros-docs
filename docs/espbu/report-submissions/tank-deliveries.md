<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Tank Deliveries

This module is used to record the bussiness's deliveries stock.

::: info
<PrefixComponent/>
:::

## Get Tank Deliveries Index Endpoint

```http
GET /tankDeliveries
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| page | integer | Page number | true |
| search_tank | integer | Tank ID | true |
| search_fuel | integer | Fuel ID | true |
| search_cleared_start_at | date | Cleared start date | true |
| search_cleared_end_at | date | Cleared end date | true |
| search_no_lo | string | Delivery number | true |
| search_no_so | string | Sales order number | true |
| is_full_page | boolean | Is full page | true |
| ignored_mode | string | Ignored mode | true |
| search_per_page | integer | Per page | true |
| order_column | string | Order column | true |
| order_direction | string | Order direction | true |

### Responses

::: details `200` OK
```json
{
    "data": {
        "data": [
            {
                "id": 2597,
                "row_number": 1,
                "vehicle_no": "B 9612 TEI",
                "driver_name": "MISBAKUL M",
                "supplier_name": "PT. PATRA NIAGA",
                "supply_point_name": "PENGAPON",
                "cleared_at": "16/06/2023 19:45",
                "user": "Gunarto",
                "tank": "T2 - Pertamax",
                "fuel": "Pertamax",
                "order_fuel_id": 367,
                "volume": 8000,
                "volume_actual": 8126.59,
                "sales_volume": 0,
                "losses_gain": 126.59,
                "diff_percent": 1.58,
                "no_so": 4025079161,
                "no_lo": 8095243269,
                "is_deletable": 1,
                "checked_by": null,
                "checked_at": "23/10/2023 21:15",
                "verified_by": null,
                "verified_at": "23/10/2023 21:15"
            },
            {
                "id": 2596,
                "row_number": 2,
                "vehicle_no": "B 9612 TEI",
                "driver_name": "MISBAKUL M",
                "supplier_name": "PT. PATRA NIAGA",
                "supply_point_name": "PENGAPON",
                "cleared_at": "16/06/2023 19:45",
                "user": "Gunarto",
                "tank": "T4 - Pertalite",
                "fuel": "Pertalite",
                "order_fuel_id": 368,
                "volume": 8000,
                "volume_actual": 8026.68,
                "sales_volume": 0,
                "losses_gain": 26.68,
                "diff_percent": 0.33,
                "no_so": 4025096326,
                "no_lo": 8095302117,
                "is_deletable": 1,
                "checked_by": null,
                "checked_at": "23/10/2023 21:15",
                "verified_by": null,
                "verified_at": "23/10/2023 21:15"
            },
            // and so on
        ],
        "links": {
            "first": "http://espbu.test/api/tankDeliveries?page=1",
            "last": "http://espbu.test/api/tankDeliveries?page=3",
            "prev": null,
            "next": "http://espbu.test/api/tankDeliveries?page=2"
        },
        "meta": {
            "current_page": 1,
            "from": 1,
            "last_page": 3,
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Sebelumnya",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/tankDeliveries?page=1",
                    "label": "1",
                    "active": true
                },
                {
                    "url": "http://espbu.test/api/tankDeliveries?page=2",
                    "label": "2",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/tankDeliveries?page=3",
                    "label": "3",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/tankDeliveries?page=2",
                    "label": "Berikutnya &raquo;",
                    "active": false
                }
            ],
            "path": "http://espbu.test/api/tankDeliveries",
            "per_page": 10,
            "to": 10,
            "total": 22
        }
    },
    "total": {
        "volume": 168000,
        "volume_actual": 168316.57999999996,
        "sales_volume": 0,
        "losses_gain": 316.58000000000004
    },
    "opts": {
        "group_by_fuel": {
            "data": [
                {
                    "fuel": "Pertalite",
                    "volume": 96000,
                    "sales_volume": 0,
                    "volume_actual": 95978.92,
                    "losses_gain": -21.08
                },
                {
                    "fuel": "Pertamax",
                    "volume": 56000,
                    "sales_volume": 0,
                    "volume_actual": 56454.83,
                    "losses_gain": 454.83
                },
                {
                    "fuel": "Pertamax Turbo",
                    "volume": 4000,
                    "sales_volume": 0,
                    "volume_actual": 3952.06,
                    "losses_gain": -47.94
                },
                {
                    "fuel": "Pertamina Dex",
                    "volume": 12000,
                    "sales_volume": 0,
                    "volume_actual": 11930.77,
                    "losses_gain": -69.23
                }
            ],
            "total": {
                "volume": 168000,
                "volume_actual": 168316.57999999996,
                "sales_volume": 0,
                "losses_gain": 316.58000000000004
            }
        },
        "unvalidated_report": 22,
        "unverified_report": 22,
        "verified_by": null
    }
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
    "message": "Bongkaran BBM tidak ditemukan",
    "data": [],
    "total": []
}
```

:::

### Used on pages

- `/tankdeliveries`

## Get Tank Deliveries Show Endpoint

```http
GET /tankDeliveries/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses

::: details `200` OK
```json
{
    "message": "Hasil ditemukan",
    "data": {
        "id": 2589,
        "order_fuel_id": 366,
        "tank_id": 5,
        "shift_id": 2,
        "vehicle_no": "H 9886 OA",
        "driver_name": "M.BASUKI",
        "supplier_name": "PT. PATRA NIAGA",
        "supply_point_name": "PENGAPON",
        "cleared_at": "15 Juni 2023 18:39",
        "cleared_at_ymd": "2023-06-15 18:39",
        "created_at": "15 Juni 2023 19:00",
        "shift_at": "15 Juni 2023",
        "shift_at_ymd": "2023-06-15",
        "user": "Gunarto",
        "tank": "T5 - Pertamax Turbo",
        "fuel": "Pertamax Turbo",
        "volume": 4000,
        "volume_actual": 3952.06,
        "sales_volume": 0,
        "losses_gain": -47.94,
        "percentage": -1.1985,
        "no_so": 4025062315,
        "no_lo": 8095183842,
        "opt_input": 1,
        "updated_by_user": null,
        "updated_at": "15 Juni 2023 19:00",
        "checked_at": null,
        "checked_by_user": null,
        "verified_at": null,
        "verified_by_user": null
    }
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
    "message": "Bongkaran BBM tidak ditemukan",
    "data": []
}
```

:::

### Used on pages

- `/tankdeliveries/show/{id}`

## Create Tank Deliveries Endpoint

```http
POST /tankDeliveries
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body (Case 1 - default input, task & no SO exists)
```json
{
    "tank_id": 4,
    "volume": 8000,
    "volume_actual": 8000.94,
    "sales_volume": 0,
    "cleared_at": "2023-06-28T09:39",
    "vehicle_no": "H 1727 BS",
    "driver_name": "INDRO P",
    "supplier_name": "PT. PATRA NIAGA",
    "supply_point_name": "PENGAPON",
    "order_fuel_id": 381,
    "no_lo": "80423212325",
    "opt_input": 1
}
```

:::

::: details JSON Body (Case 2 - manual input, task & no SO doesn't exists)
```json
{
    "tank_id": 4,
    "volume": 8000,
    "volume_actual": 8000.94,
    "sales_volume": 0,
    "cleared_at": "2023-06-28T09:39",
    "vehicle_no": "H 1727 BS",
    "driver_name": "INDRO P",
    "supplier_name": "PT. PATRA NIAGA",
    "supply_point_name": "PENGAPON",
    "order_fuel_id": 381,
    "no_lo": "80423212325",
    "opt_input": 2,
    "shift_id": 1,
    "shift_at": "2023-06-28",
}
```

:::

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| tank_id | integer | Tank ID | false |
| volume | integer | Volume | false |
| volume_actual | integer | Actual volume | false |
| cleared_at | datetime | Cleared date | false |
| vehicle_no | string | Vehicle number | false |
| driver_name | string | Driver name | false |
| supplier_name | string | Supplier name | false |
| supply_point_name | string | Supply point name | false |
| order_fuel_id | integer | Order fuel ID | false |
| no_lo | string | Delivery number | false |
| opt_input | integer | Input option | false |
| shift_id | integer | Shift ID | true |
| shift_at | date | Shift date | true |

### Responses

::: details `200` OK
```json
{
  "message": "Bongkaran BBM berhasil dibuat"
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
    "message": "The given data was invalid.",
    "errors": {
        "tank_id": [
            "Tank ID tidak boleh kosong."
        ],
        "volume": [
            "Volume tidak boleh kosong."
        ],
        "volume_actual": [
            "Actual volume tidak boleh kosong."
        ],
        "cleared_at": [
            "Cleared at tidak boleh kosong."
        ],
    }
}
```

:::

### Used on pages

- `/tankdeliveries/create`

## Update Tank Deliveries Endpoint

```http
PUT /tankDeliveries/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body (Case 1 - default input, task & no SO exists)
```json
{
    "volume_actual": 8000.94,
    "sales_volume": 0,
    "cleared_at": "2023-06-28T09:39",
    "vehicle_no": "H 1727 BS",
    "driver_name": "INDRO P",
    "supplier_name": "PT. PATRA NIAGA",
    "supply_point_name": "PENGAPON",
    "no_lo": "80423212325"
}
```

:::

::: details JSON Body (Case 2 - manual input, task & no SO doesn't exists)
```json
{
    "volume_actual": 8000.94,
    "sales_volume": 0,
    "cleared_at": "2023-06-28T09:39",
    "vehicle_no": "H 1727 BS",
    "driver_name": "INDRO P",
    "supplier_name": "PT. PATRA NIAGA",
    "supply_point_name": "PENGAPON",
    "no_lo": "80423212325",
    "no_so": "402381920",
    "opt_input": 2,
    "shift_id": 1,
    "shift_at": "2023-06-28",
}
```

:::

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| volume_actual | integer | Actual volume | false |
| sales_volume | integer | Sales volume | false |
| cleared_at | datetime | Cleared date | false |
| vehicle_no | string | Vehicle number | false |
| driver_name | string | Driver name | false |
| supplier_name | string | Supplier name | false |
| supply_point_name | string | Supply point name | false |
| no_lo | string | Delivery number | false |
| no_so | string | Sales order number | true |
| opt_input | integer | Input option | false |
| shift_id | integer | Shift ID | true |
| shift_at | date | Shift date | true |

### Responses

::: details `200` OK
```json
{
  "message": "Bongkaran BBM berhasil diubah"
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
    "message": "The given data was invalid.",
    "errors": {
        "volume_actual": [
            "Actual volume tidak boleh kosong."
        ],
        "sales_volume": [
            "Sales volume tidak boleh kosong."
        ],
        "cleared_at": [
            "Cleared at tidak boleh kosong."
        ],
    }
}
```

:::

### Used on pages

- `/tankdeliveries/edit/{id}`

## Delete Tank Deliveries Endpoint

```http
DELETE /tankDeliveries/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses

::: details `200` OK
```json
{
  "message": "Bongkaran BBM berhasil dihapus"
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
    "message": "Bongkaran BBM tidak ditemukan"
}
```

:::

## Get Tank Deliveries on Order Fuel Endpoint

```http
GET /tankdelivery/order_fuel
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| page | integer | Page number | true |
| order_fuel_id | integer | Order fuel ID | false |
| search_tank | integer | Tank ID | true |
| search_fuel | integer | Fuel ID | true |
| is_full_page | boolean | Is full page | true |
| order_column | string | Order column | true |
| order_direction | string | Order direction | true |

### Responses

::: details `200` OK
```json
{
    "data": {
        "data": [
            {
                "id": 2374,
                "vehicle_no": "H 1823 DS",
                "driver_name": "ABDUL SYUKUR",
                "supplier_name": "PT. PATRA NIAGA",
                "supply_point_name": "PENGAPON",
                "cleared_at": "31/03/2023 05:30",
                "user": "Achmad Ari...",
                "tank": "T2 - Pertamax",
                "fuel": "Pertamax",
                "volume": 8000,
                "volume_actual": 8131.31,
                "losses_gain": 131.31,
                "diff_percent": "1.64",
                "no_lo": "8092096850"
            },
            {
                "id": 2373,
                "vehicle_no": "H 8947 EA",
                "driver_name": "SETYO BUDI SAN...",
                "supplier_name": "PT. PATRA NIAGA",
                "supply_point_name": "PENGAPON",
                "cleared_at": "29/03/2023 11:02",
                "user": "Developer",
                "tank": "T2 - Pertamax",
                "fuel": "Pertamax",
                "volume": 8000,
                "volume_actual": 8062.55,
                "losses_gain": 62.55,
                "diff_percent": "0.78",
                "no_lo": "8092096849"
            },
            {
                "id": 2338,
                "vehicle_no": "E 9798 YA",
                "driver_name": "ARIS SETIYONO",
                "supplier_name": "PT. PATRA NIAGA",
                "supply_point_name": "PENGAPON",
                "cleared_at": "28/03/2023 14:15",
                "user": "Gunarto",
                "tank": "T4 - Pertalite",
                "fuel": "Pertalite",
                "volume": 8000,
                "volume_actual": 7980.5,
                "losses_gain": -19.5,
                "diff_percent": "-0.24",
                "no_lo": "8092096848"
            },
            // and so on
        ],
        "links": {
            "first": "http://espbu.test/api/tankdelivery/order_fuel?page=1",
            "last": "http://espbu.test/api/tankdelivery/order_fuel?page=1",
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
                    "url": "http://espbu.test/api/tankdelivery/order_fuel?page=1",
                    "label": "1",
                    "active": true
                },
                {
                    "url": null,
                    "label": "Berikutnya &raquo;",
                    "active": false
                }
            ],
            "path": "http://espbu.test/api/tankdelivery/order_fuel",
            "per_page": 10,
            "to": 5,
            "total": 5
        }
    },
    "total": {
        "volume": 40000,
        "volume_actual": 40152.31,
        "losses_gain": 152.31
    }
}
```

:::

::: details `404` Not Found
```json
{
    "message": "Bongkaran BBM tidak ditemukan",
    "data": [],
    "total": []
}
```

:::

### Used on pages

- `orderfuels/show/{order_fuel_id}`

## Export Excel Tank Deliveries Endpoint

```http
GET /tankdelivery/export/xlsx
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

Same as [Get Tank Deliveries Index Endpoint](#get-tank-deliveries-index-endpoint)

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

- `/tankdeliveries`

## Sync Tank Deliveries with Order Fuel Endpoint

```http
PUT /tankdelivery/sync/orderfuel
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses

::: details `200` OK
```json
{
    "message": "Bongkaran BBM berhasil disinkronisasi"
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

### Used on pages

- `/tankdeliveries`

## Update Tank Deliveries Validation Endpoint

```http
GET /tankdelivery/validation
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

Same as [Get Tank Deliveries Index Endpoint](#get-tank-deliveries-index-endpoint)

### Responses

::: details `200` OK
```json
{
  "message": "Bongkaran BBM berhasil divalidasi"
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

### Used on pages

- `/tankdeliveries`

## Update Tank Deliveries Verification Endpoint

```http
GET /tankdelivery/verification
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

Same as [Get Tank Deliveries Index Endpoint](#get-tank-deliveries-index-endpoint)

### Responses

::: details `200` OK
```json
{
  "message": "Bongkaran BBM berhasil diverifikasi"
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

### Used on pages

- `/tankdeliveries`











