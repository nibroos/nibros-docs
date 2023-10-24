<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Oil Movement

::: info
<PrefixComponent/>
:::

## Get Oil Movement Endpoint

```http
GET /opnames
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

::: details Search Mode
- Shift = 1
- Per-day = 2
- Date-range = 3
- Input = 4
:::

::: details Is Group
- Tank = 1
- Fuel = 2
:::

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| page | integer | Page | true |
| search_mode | integer | it can be Shift, Per-day, date-range, or input | false |
| is_group | integer | by tank or fuel | false |
| search_shift_id | integer | Search by shift id | true |
| search_shift_at | string | Search by shift at | true |
| search_periode_start_at | string | Search by periode start at | false |
| search_periode_end_at | string | Search by periode end at | false |
| is_full_page | integer | is full page | true |
| search_per_page | integer | Search by per page | true |
| is_duplicate_check | integer | is duplicate check | true |
| dead_stock | integer | stock that can't get out from tank | true |

### Responses

::: details `200` OK
```json
{
    "data": {
        "data": [
            {
                "id": "",
                "tank": "",
                "fuel": "Pertalite",
                "start_atg": 27396.68,
                "delivery": 16013.36,
                "do_delivery": 16000,
                "loss_gain": 13.36,
                "sold_fuel_atg": 11533.84,
                "volume_theoritical": 31876.2,
                "do_stock_theoritical": 31862.84,
                "volume_physical": 25907.66,
                "difference": -5968.54,
                "difference_percent": -18.72,
                "do_difference": -5955.18,
                "do_difference_percent": -18.69,
                "sold_percent": -51.63,
                "periode_start_at": "",
                "periode_end_at": ""
            },
            {
                "id": "",
                "tank": "",
                "fuel": "Pertamax",
                "start_atg": 13906.29,
                "delivery": 8094.86,
                "do_delivery": 8000,
                "loss_gain": 94.86,
                "sold_fuel_atg": 4568.21,
                "volume_theoritical": 17432.94,
                "do_stock_theoritical": 17338.08,
                "volume_physical": 16346.63,
                "difference": -1086.31,
                "difference_percent": -6.23,
                "do_difference": -991.45,
                "do_difference_percent": -5.72,
                "sold_percent": -21.7,
                "periode_start_at": "",
                "periode_end_at": ""
            },
            {
                "id": "",
                "tank": "",
                "fuel": "Pertamax Turbo",
                "start_atg": 2962.33,
                "delivery": 0,
                "do_delivery": 0,
                "loss_gain": 0,
                "sold_fuel_atg": 308.4,
                "volume_theoritical": 2653.93,
                "do_stock_theoritical": 2653.93,
                "volume_physical": 4673.95,
                "difference": 2020.02,
                "difference_percent": 76.11,
                "do_difference": 2020.02,
                "do_difference_percent": 76.11,
                "sold_percent": 655,
                "periode_start_at": "",
                "periode_end_at": ""
            },
            {
                "id": "",
                "tank": "",
                "fuel": "Pertamina Dex",
                "start_atg": 7786.37,
                "delivery": 0,
                "do_delivery": 0,
                "loss_gain": 0,
                "sold_fuel_atg": 1007.46,
                "volume_theoritical": 6778.91,
                "do_stock_theoritical": 6778.91,
                "volume_physical": 10395.31,
                "difference": 3616.4,
                "difference_percent": 53.35,
                "do_difference": 3616.4,
                "do_difference_percent": 53.35,
                "sold_percent": 358.96,
                "periode_start_at": "",
                "periode_end_at": ""
            }
        ]
    },
    "total": {
        "start_atg": 27396.68,
        "delivery": 8073.23,
        "do_delivery": 8000,
        "loss_gain": 73.23,
        "sold_fuel_atg": 0,
        "volume_theoritical": 6690.31,
        "do_stock_theoritical": 6582.09,
        "volume_physical": 52051.67,
        "difference": 45361.36,
        "difference_percent": 678.02,
        "do_difference": 45469.58,
        "do_difference_percent": 690.81,
        "sold_percent": 0,
        "count": 4,
        "total_stock_physical_value": 0
    },
    "opts": {
        "unvalidated_report": 0,
        "unverified_report": 0,
        "verified_by": []
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
    "message": "Opname BBM tidak ditemukan",
    "data": [],
    "total": {
        "count": 0
    },
    "opts": {
        "unverified_report": 0,
        "unvalidated_report": 0
    }
}
```
:::

### Used on pages

- `/opnames`

## Get Oil Movement Detail Endpoint

```http
GET /opnames/{id}
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
        "id": 300,
        "user": "Triali Ulf...",
        "role": "Kepala Shift",
        "tank": "T3 - Pertalite",
        "fuel": "Pertalite",
        "volume": null,
        "volume_actual": "9505.71000",
        "shift_id": 3,
        "note": "OK",
        "shift_at": "06 Maret 2023",
        "created_at": "07 Maret 2023 06:21",
        "periode_start_at": "06 Maret 2023 20:01",
        "periode_end_at": "07 Maret 2023 05:59",
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
    "message": "Opname BBM tidak ditemukan",
    "data": []
}
```
:::

### Used on pages

- `/opnames/show/{id}`

## Create Oil Movement Endpoint

```http
POST /opnames
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
    "tank_id": 5,
    "volume_actual": 3963.6568,
    "note": "",
    "periode_start_at": "2023-02-07 20:01:00",
    "periode_end_at": "2023-02-07 05:59:00",
    "shift_at": "2023-02-07",
    "shift_id": 3
}
```

:::

### Responses

::: details `200` OK
```json
{
  "message": "Data opname bbm berhasil dibuat"
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
    "message": "Data opname bbm gagal dibuat",
    "errors": {
        "tank_id": [
            "Tank id tidak boleh kosong."
        ],
        "volume_actual": [
            "Volume actual tidak boleh kosong."
        ],
        "periode_start_at": [
            "Periode start at tidak boleh kosong."
        ],
        "periode_end_at": [
            "Periode end at tidak boleh kosong."
        ],
        "shift_at": [
            "Shift at tidak boleh kosong."
        ],
        "shift_id": [
            "Shift id tidak boleh kosong."
        ]
    }
}
```
:::

### Used on pages

- `/opnames/create`

## Delete Oil Movement Endpoint

```http
DELETE /opnames/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses

::: details `200` OK
```json
{
    "message": "Data opname bbm berhasil dihapus"
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
    "message": "Data opname bbm gagal dihapus",
    "errors": {
        "id": [
            "Id tidak boleh kosong."
        ]
    }
}
```
:::

## Update Oil Movement Validation Endpoint

```http
PUT /opname/validation
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| search_periode_start_at | string | Search by periode start at | false |
| search_periode_end_at | string | Search by periode end at | false |
| search_shift_id | integer | Search by shift id | false |

### Responses

::: details `200` OK
```json
{
    "message": "Data opname bbm berhasil divalidasi"
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
    "message": "Data opname bbm gagal divalidasi",
    "errors": {
        "search_periode_start_at": [
            "Search periode start at tidak boleh kosong."
        ],
        "search_periode_end_at": [
            "Search periode end at tidak boleh kosong."
        ],
    }
}
```
:::

### Used on pages

- `/opnames`

## Update Oil Movement Verification Endpoint

```http
PUT /opname/verification
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
```json
{
    "message": "Data opname bbm berhasil diverifikasi"
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
    "message": "Data opname bbm gagal diverifikasi",
    "errors": {
        "search_periode_start_at": [
            "Search periode start at tidak boleh kosong."
        ],
        "search_periode_end_at": [
            "Search periode end at tidak boleh kosong."
        ],
    }
}
```
:::

### Used on pages

- `/opnames`







