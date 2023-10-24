<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Pump Tests

::: info
<PrefixComponent/>
:::

## Get Pump Tests Index Endpoint

```http
GET /pumpTests
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description |
| --------- | ---- | ----------- |
| page | integer | The page number to get. |
| search_machine | int | The machine id to search. |
| search_shift | int | The shift id to search. |
| search_cleared_start_at | string | The cleared start at to search. |
| search_cleared_end_at | string | The cleared end at to search. |
| is_full_page | int | The is full page to search. |
| search_per_page | int | The per page to search. |
| order_column | string | The order column to search. |
| order_direction | string | The order direction to search. |

### Responses

::: details `200` OK
```json
{
    "data": {
        "data": [
            {
                "row_number": 1,
                "id": 9974,
                "user": "Developer",
                "shift_id": 1,
                "role": "Super Admin",
                "type": "Density",
                "machine": "Pulau 5 - A1",
                "hose": 4,
                "fuel": "Pertamina Dex",
                "fuel_price": 18800,
                "volume": "1.11",
                "fuel_value": 20680,
                "verified_by": null,
                "note": "",
                "is_deletable": 1,
                "verified_at": "23/10/2023 15:50",
                "cleared_at": "27/12/2022 06:22",
                "checked_by": null,
                "checked_at": "23/10/2023 15:50"
            },
            {
                "row_number": 2,
                "id": 9973,
                "user": "Developer",
                "shift_id": 1,
                "role": "Super Admin",
                "type": "Density",
                "machine": "Pulau 4 - A1",
                "hose": 2,
                "fuel": "Pertalite",
                "fuel_price": 10000,
                "volume": "1.11",
                "fuel_value": 11000,
                "verified_by": null,
                "note": "",
                "is_deletable": 1,
                "verified_at": "23/10/2023 15:50",
                "cleared_at": "27/12/2022 06:21",
                "checked_by": null,
                "checked_at": "23/10/2023 15:50"
            },
            {
                "row_number": 3,
                "id": 9972,
                "user": "Developer",
                "shift_id": 1,
                "role": "Super Admin",
                "type": "Density",
                "machine": "Pulau 5 - A1",
                "hose": 1,
                "fuel": "Pertamax Turbo",
                "fuel_price": 15200,
                "volume": "1.11",
                "fuel_value": 16720,
                "verified_by": null,
                "note": "",
                "is_deletable": 1,
                "verified_at": "23/10/2023 15:50",
                "cleared_at": "27/12/2022 06:20",
                "checked_by": null,
                "checked_at": "23/10/2023 15:50"
            },
            // and so on
        ],
        "links": {
            "first": "http://espbu.test/api/pumpTests?page=1",
            "last": "http://espbu.test/api/pumpTests?page=1",
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
                    "url": "http://espbu.test/api/pumpTests?page=1",
                    "label": "1",
                    "active": true
                },
                {
                    "url": null,
                    "label": "Berikutnya &raquo;",
                    "active": false
                }
            ],
            "path": "http://espbu.test/api/pumpTests",
            "per_page": 10,
            "to": 5,
            "total": 5
        }
    },
    "total": {
        "volume": 5.5,
        "fuel_value": 74690
    },
    "shift": {
        "cleared_at": "2022-12-27 06:22:00"
    },
    "opts": {
        "group_by_fuel": {
            "data": [
                {
                    "fuel": "Pertalite",
                    "volume": 2.2,
                    "fuel_value": 22000
                },
                {
                    "fuel": "Pertamax",
                    "volume": 1.1,
                    "fuel_value": 15290
                },
                {
                    "fuel": "Pertamax Turbo",
                    "volume": 1.1,
                    "fuel_value": 16720
                },
                {
                    "fuel": "Pertamina Dex",
                    "volume": 1.1,
                    "fuel_value": 20680
                }
            ]
        },
        "unvalidated_report": 5,
        "unverified_report": 5,
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
    "message": "Test pump tidak ditemukan",
    "data": [],
    "total": [],
    "shift": []
}
```
:::

### Used on pages

- `/pumptests`

## Get Pump Tests Show Endpoint

```http
GET /pumpTests/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses

::: details `200` OK
```json
{
    "message": "Test ditemukan",
    "data": {
        "id": 14,
        "user": "Developer",
        "hose": 4,
        "machine": "Pulau 3 - A1",
        "fuel": "Pertamina Dex",
        "fuel_price": 10200,
        "volume": 1.1,
        "type": "Density",
        "fuel_value": 11220,
        "start": null,
        "end": null,
        "shift": "1",
        "shift_at": "03 Januari 2021",
        "note": "",
        "cleared_at": "03 Januari 2021 08:18",
        "created_at": "03 Januari 2021 08:18",
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
    "message": "Test pump tidak ditemukan",
    "data": []
}
```
:::

### Used on pages

- `/pumptests/show/{id}`

## Create Pump Test Endpoint

```http
POST /pumpTests
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body (Case 1 - Task exists & not finish)
```json
{
  "meter_id": 2,
  "shift_id": 1,
  "volume": 21.1,
  "type": 1,
  "cleared_at": "2023-05-12T09:35",
  "note": ""
}

```
:::
::: details JSON Body (Case 2 - Task isn't exists)
```json
{
  "meter_id": 2,
  "shift_id": 1,
  "volume": 21.1,
  "type": 1,
  "cleared_at": "2023-05-12T09:35",
  "shift_at": "2023-05-12",
  "note": ""
}

```
:::

| Name | Type | Description | Nullable |
| --------- | ---- | ----------- | ----------- |
| meter_id | integer | The meter id to create. | false |
| shift_id | integer | The shift id to create. | false |
| volume | float | The volume to create. | false |
| type | integer | The type to create. | false |
| cleared_at | string | The cleared at to create. | false |
| shift_at | string | Date time when pump test clear. | false |
| note | string | The note to create. | true |
| is_fixing_settlements | integer | The is fixing settlements to create. | true |


### Responses

::: details `200` OK
```json
{
  "message": "Pump test berhasil dibuat"
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
        "meter_id": [
            "The meter id field is required."
        ],
        "shift_id": [
            "The shift id field is required."
        ],
        "volume": [
            "The volume field is required."
        ],
        "type": [
            "The type field is required."
        ],
        "cleared_at": [
            "The cleared at field is required."
        ]
    }
}
```
:::

### Used on pages

- `/pumptests/create`

## Delete Pump Test Endpoint

```http
DELETE /pumpTests/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses

::: details `200` OK
```json
{
  "message": "Pump test berhasil dihapus"
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
    "message": "Pump test tidak ditemukan"
}
```
:::

### Used on pages

- `/pumptests`

## Export Excel Pump Test Endpoint

```http
GET /pumptest/export/xlsx
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters


| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| search_machine | int | The machine id to search. | true |
| search_shift | int | The shift id to search. | true |
| search_cleared_start_at | string | The cleared start at to search. | true |
| search_cleared_end_at | string | The cleared end at to search. | true |
| order_column | string | The order column to search. | true |
| order_direction | string | The order direction to search. | true |

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

- `/pumptests`

## Update Pump Tests Validation Endpoint

```http
PUT /pumptest/validation
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| search_cleared_start_at | string | The cleared start at to search. | true |
| search_cleared_end_at | string | The cleared end at to search. | true |

### Response

::: details `200` OK
```json
{
    "message": "Laporan pump test berhasil divalidasi"
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

- `/pumptests`

## Update Pump Tests Verification Endpoint

```http
PUT /pumptest/verification
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| search_cleared_start_at | string | The cleared start at to search. | true |
| search_cleared_end_at | string | The cleared end at to search. | true |

### Response

::: details `200` OK
```json
{
    "message": "Laporan pump test berhasil diverifikasi"
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

- `/pumptests`



