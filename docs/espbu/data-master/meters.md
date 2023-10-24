<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Meters
Similiar to ATG, Meter is a data source from the dispenser itself, This module is used to manage Meter data, its main function is to reset position to 0.

::: info
<PrefixComponent/>
:::

## Get Meters Index Endpoint

```http
GET /meters
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameter

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| page | int | Page number | false |
| search_updated_at | string | Search by updated at | true |
| search_fuel | int | Search by fuel ID | true |
| search_machine | int | Search by machine ID | true |
| order_column | string | Order by column | true |
| order_direction | string | Order by direction | true |

### Response

::: details `200` OK
```json
{
    "data": [
        {
            "id": 54,
            "user": "Achmad Arifin",
            "role": "Kepala Shift",
            "fuel": "Pertalite V2",
            "machine": "Pulau 1 - A1 R2",
            "hose": 2,
            "position": 2381,
            "is_deletable": true,
            "updated_at": "19 September 2023"
        },
        {
            "id": 3,
            "user": "Developer",
            "role": "Super Admin",
            "fuel": "Pertalite",
            "machine": "Pulau 1 - A2 R2",
            "hose": 1,
            "position": 7817238,
            "is_deletable": false,
            "updated_at": "15 September 2023"
        },
        {
            "id": 4,
            "user": "Developer",
            "role": "Super Admin",
            "fuel": "Pertamax",
            "machine": "Pulau 1 - A2 R2",
            "hose": 2,
            "position": 2791455,
            "is_deletable": false,
            "updated_at": "15 September 2023"
        },
        {
            "id": 2,
            "user": "Developer",
            "role": "Super Admin",
            "fuel": "Pertamax",
            "machine": "Pulau 1 - A1 R2",
            "hose": 2,
            "position": 1234626,
            "is_deletable": false,
            "updated_at": "15 September 2023"
        },
        // and so on
    ],
    
    "links": {
        "first": "http://espbu.test/api/meters?page=1",
        "last": "http://espbu.test/api/meters?page=5",
        "prev": null,
        "next": "http://espbu.test/api/meters?page=2"
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 5,
        "links": [
            {
                "url": null,
                "label": "&laquo; Sebelumnya",
                "active": false
            },
            {
                "url": "http://espbu.test/api/meters?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "http://espbu.test/api/meters?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "http://espbu.test/api/meters?page=3",
                "label": "3",
                "active": false
            },
            {
                "url": "http://espbu.test/api/meters?page=4",
                "label": "4",
                "active": false
            },
            {
                "url": "http://espbu.test/api/meters?page=5",
                "label": "5",
                "active": false
            },
            {
                "url": "http://espbu.test/api/meters?page=2",
                "label": "Berikutnya &raquo;",
                "active": false
            }
        ],
        "path": "http://espbu.test/api/meters",
        "per_page": 10,
        "to": 10,
        "total": 45
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

### Used on pages

- `/fuels`

## Get Show Meter Endpoint

```http
GET /meters/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Response

::: details `200` OK
```json
{
    "message": "Meter ditemukan",
    "data": {
        "id": 1,
        "user": "Developer",
        "fuel_id": 1,
        "fuel": "Pertalite",
        "machine_id": 1,
        "machine": "Pulau 1 - A1 R2",
        "hose": 1,
        "position": 4620198,
        "created_at_idn": "11 November 2022",
        "updated_at_idn": "11 November 2022",
        "updated_at": "15 September 2023",
        "inactive_at": "2023-09-15 06:00:00",
        "inactive_at_idn": "15 September 2023 06:00",
        "metertimelines": [
            {
                "id": 590,
                "user": "Developer",
                "role": "Super Admin",
                "prev_position": 618732,
                "next_position": 4620198,
                "created_at_idn": "10 Mei 2023 12:36:30"
            },
            {
                "id": 96,
                "user": "Vedo Yustinevan, S.M.",
                "role": "Super Admin",
                "prev_position": 618792,
                "next_position": 618732,
                "created_at_idn": "06 Februari 2023 14:15:13"
            },
            {
                "id": 45,
                "user": "Developer",
                "role": "Super Admin",
                "prev_position": 0,
                "next_position": 618732,
                "created_at_idn": "01 Januari 2023 00:26:18"
            },
            {
                "id": 1,
                "user": "Developer",
                "role": "Super Admin",
                "prev_position": 0,
                "next_position": 0,
                "created_at_idn": "11 November 2022 11:28:15"
            }
        ]
    }
}
```

:::

::: details `404` Not Found

```json
{
    "message": "Meter tidak ditemukan"
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

- `/meters/show/{id}`
- `/meters/edit/{id}`

## Create Meter Endpoint

```http
POST /meters
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
    "fuel_id": 1,
    "hose": 1,
    "machine_id": 1,
    "position": 4620198
}
```
:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| fuel_id | int | Fuel ID | false |
| hose | int | Hose | false |
| machine_id | int | Machine ID | false |
| position | int | Position | false |

### Response

::: details `200` OK
```json
{
    "message": "Meter berhasil ditambahkan",
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
        "fuel_id": [
            "The fuel id field is required."
        ],
        "hose": [
            "The hose field is required."
        ],
        "machine_id": [
            "The machine id field is required."
        ],
        "position": [
            "The position field is required."
        ]
    }
}
```

:::

### Used on pages

- `/meters/create`

## Update Meter Endpoint

```http
PUT /meters/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Meter ID |

### Body

::: details JSON Body
```json
{
    "hose": 1,
    "position": 0,
    "inactive_at": null
}
```
:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| hose | int | Hose | false |
| position | int | Position | false |
| inactive_at | string | Inactive at | true |

### Response

::: details `200` OK
```json
{
    "message": "Meter berhasil diubah",
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
        "hose": [
            "The hose field is required."
        ],
        "position": [
            "The position field is required."
        ]
    }
}
```

:::

### Used on pages

- `/meters/edit/{id}`

## Delete Meter Endpoint

```http
DELETE /meters/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Meter ID |

### Response

::: details `200` OK
```json
{
    "message": "Meter berhasil dihapus"
}
```

:::

::: details `422` Unprocessable Entity
```json
{
    "message": "Ada penjualan yang sudah terbuat"
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

- `/fuels`

## Get Meter Options Endpoint

```http
GET /meter/select
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Response

::: details `200` OK
```json
{
    "data": [
        {
            "id": 1,
            "text": "Pulau 1 - A1 R2 - H1 - Pertalite - 618732.23 L"
        },
        {
            "id": 2,
            "text": "Pulau 1 - A1 R2 - H2 - Pertamax - 234180.93 L"
        },
        {
            "id": 3,
            "text": "Pulau 1 - A2 R2 - H1 - Pertalite - 814484.99 L"
        },
        {
            "id": 4,
            "text": "Pulau 1 - A2 R2 - H2 - Pertamax - 790489.97 L"
        },
        // and so on
    ]
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

- `/pumptests/create`
- `/profitloss`

## Get Unpaired Meter Options Endpoint

```http
GET /meter/unpaired/select
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Response

::: details `200` OK
```json
{
    "data": [
        {
            "id": 54,
            "text": "Pulau 1 - A1 R2 - H2 - Pertalite V2 - 2381.00000 L"
        }
    ]
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

- `/atgs/create`
