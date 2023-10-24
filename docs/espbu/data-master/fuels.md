<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Fuels

This module is used to manage the master data of fuel.

::: info
<PrefixComponent/>
:::

## Get Fuels Index Endpoint

```http
GET /fuels
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
    "data": [
        {
            "id": 1,
            "name": "Pertalite",
            "price": 10000,
            "buy": 9702,
            "std_profit": 298,
            "profit": 298,
            "product_code": "A040900076",
            "is_deletable": false,
            "updated_at_idn": "19 Juni 2023"
        },
        {
            "id": 2,
            "name": "Pertamax",
            "price": 12500,
            "buy": 12081.94,
            "std_profit": 418.06,
            "profit": 418.06,
            "product_code": "A040900006",
            "is_deletable": false,
            "updated_at_idn": "19 Juni 2023"
        },
        // and so on...
    ],
    "links": {
        "first": "http://espbu.test/api/fuels?page=1",
        "last": "http://espbu.test/api/fuels?page=1",
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
                "url": "http://espbu.test/api/fuels?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Berikutnya &raquo;",
                "active": false
            }
        ],
        "path": "http://espbu.test/api/fuels",
        "per_page": 5,
        "to": 5,
        "total": 5
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

## Get Show Fuel Endpoint

```http
GET /fuels/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Fuel ID |

### Response

::: details `200` OK
```json
{
    "message": "BBM ditemukan",
    "data": {
        "id": 1,
        "name": "Pertalite",
        "short_name": "PL",
        "price": 10000,
        "buy": 9702,
        "std_profit": 298,
        "profit": 0,
        "product_code": "A040900076",
        "updated_at_idn": "19 Juni 2023"
    }
}
```

:::

::: details `404` Not Found

```json
{
    "message": "BBM tidak ditemukan"
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

- `/fuels/show/{id}`

## Create Fuel Endpoint

```http
POST /fuels
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
    "name": "Pertalite",
    "short_name": "PL",
    "price": 10000,
    "buy": 9692,
    "product_code": "A040900076"
}
```
:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| name | string | Fuel Name | false |
| short_name | string | Fuel Short Name | false |
| price | int | Fuel Price | false |
| buy | int | Fuel Buy | false |
| product_code | string | Fuel Product Code | false |

### Response

::: details `200` OK

```json
{
    "message": "BBM berhasil ditambahkan",
}
```

:::

::: details `422` Unprocessable Entity

```json
{
    "message": "The given data was invalid.",
    "errors": {
        "name": [
            "Nama BBM tidak boleh kosong."
        ],
        "short_name": [
            "Nama singkat BBM tidak boleh kosong."
        ],
        "price": [
            "Harga BBM tidak boleh kosong."
        ],
        "buy": [
            "Harga beli BBM tidak boleh kosong."
        ],
        "product_code": [
            "Kode produk BBM tidak boleh kosong."
        ]
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

- `/fuels/create`

## Update Fuel Endpoint

```http
PUT /fuels/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| name | string | Fuel Name |
| short_name | string | Fuel Short Name |
| price | int | Fuel Price |
| product_code | string | Fuel Product Code |
| changed_at | string | Fuel Date Changed At |

### Response

::: details `200` OK

```json
{
    "message": "BBM berhasil diperbarui"
}
```

:::

::: details `422` Unprocessable Entity

```json
{
    "message": "The given data was invalid.",
    "errors": {
        "name": [
            "Nama BBM tidak boleh kosong."
        ],
        "short_name": [
            "Nama singkat BBM tidak boleh kosong."
        ],
        "price": [
            "Harga BBM tidak boleh kosong."
        ],
        "product_code": [
            "Kode produk BBM tidak boleh kosong."
        ]
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

- `/fuels/edit/{id}`

## Delete Fuel Endpoint

```http
DELETE /fuels/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Fuel ID |

### Response

::: details `200` OK

```json
{
    "message": "BBM berhasil dihapus"
}
```

:::

::: details `422` Unprocessable Entity

```json
{
    "message": "Masih ada meter BBM"
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

## Get Fuel Options Endpoint

```http
GET /fuel/select
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Response

::: details `200` OK

```json
[
    {
        "value": 1,
        "text": "Pertalite"
    },
    {
        "value": 2,
        "text": "Pertamax"
    },
    // and so on...
]
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
- `/meters/create`
- `/atgs`
- `/orderfuels/show`
- `/sales`
- `/opnames`
- `/tankDeliveries`
