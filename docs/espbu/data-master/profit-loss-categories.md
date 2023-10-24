<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Profit Loss Categories

This module is used to seperate profit loss items by category.

::: info
<PrefixComponent/>
:::

## Get Profit Loss Categories Endpoint

```http
GET /mstRoots
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
                "id": 2,
                "name": "LABA KOTOR USAHA",
                "parent_name": "(1) Utama",
                "is_deletable": 0,
                "is_mandatory": null
            },
            {
                "id": 11,
                "name": "BEBAN USAHA",
                "parent_name": "(1) Utama",
                "is_deletable": 0,
                "is_mandatory": null
            },
            {
                "id": 22,
                "name": "KERUGIAN PERSEDIAAN BBM AKIBAT PENURUNAN HARGA BBM",
                "parent_name": "(1) Utama",
                "is_deletable": 0,
                "is_mandatory": null
            },
            // and so on...
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

::: details `404` Not Found
```json
{
    "message": "Data tidak ditemukan"
}
```

:::

### Used on pages

- `/profitloss`

## Create Profit Loss Category Endpoint

```http
POST /mstRoots
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
    "name": "Pembayaran ABC",
    "mst_root_id": 11
}
```

:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| name | string | Profit Loss Category Name | false |
| mst_root_id | int | Parent Profit Loss Category ID | false |

### Response

::: details `200` OK 
```json
{
    "message": "Berhasil menambahkan Kategori Laba Rugi",
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
        "name": [
            "The name field is required."
        ],
        "mst_root_id": [
            "The mst root id field is required."
        ]
    }
}
```
:::

### Used on pages

- `/profitloss`

## Update Profit Loss Category Endpoint

```http
PUT /mstRoots/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Profit Loss Category ID |

### Body

::: details JSON Body
```json
{
    "name": "Pembayaran ABCD",
    "mst_root_id": 11
}
```

:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| name | string | Profit Loss Category Name | false |
| mst_root_id | int | Parent Profit Loss Category ID | false |

### Response

::: details `200` OK 
```json
{
    "message": "Berhasil mengubah Kategori Laba Rugi",
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
        "name": [
            "The name field is required."
        ],
        "mst_root_id": [
            "The mst root id field is required."
        ]
    }
}
```
:::

### Used on pages

- `/profitloss`

## Delete Profit Loss Category Endpoint

```http
DELETE /mstRoots/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Profit Loss Category ID |

### Response

::: details `200` OK 
```json
{
    "message": "Berhasil menghapus Kategori Laba Rugi",
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

- `/profitloss`

## Get Profit Loss Category Options Endpoint

```http
GET /mst_root/select
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
            "id": 2,
            "text": "LABA KOTOR USAHA"
        },
        {
            "id": 11,
            "text": "BEBAN USAHA"
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

- `/profitloss`

## Get Profit Loss Category Options to delete profit losses Endpoint

```http
GET /mst_root/delete/select
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameter

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| search_periode_start_at | string | Search by periode start at | false |
| search_periode_end_at | string | Search by periode end at | false |

### Response

::: details `200` OK
```json
{
    "data": [
        {
            "id": 2,
            "text": "LABA KOTOR USAHA"
        },
        {
            "id": 11,
            "text": "BEBAN USAHA"
        },
        {
            "id": 22,
            "text": "KERUGIAN PERSEDIAAN BBM AKIBAT PENURUNAN HARGA BBM"
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

- `/profitloss`



