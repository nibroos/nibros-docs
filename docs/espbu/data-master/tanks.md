<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Tanks

This module is used to manage the master data of tanks. There is a profit accumulation in each tank, if the value is anomalous, the physical tank should be repaired then the profit accumulation should be reset.

::: info
<PrefixComponent/>
:::

## Get Tanks Index Endpoint

```http
GET /tanks
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
            "name": "T1 - Pertamina Dex",
            "profit": 0,
            "updated_at_idn": "15 September 2023"
        },
        {
            "id": 2,
            "name": "T2 - Pertamax",
            "profit": 0,
            "updated_at_idn": "15 September 2023"
        },
        {
            "id": 3,
            "name": "T3 - Pertalite",
            "profit": 10.97,
            "updated_at_idn": "15 September 2023"
        },
        {
            "id": 4,
            "name": "T4 - Pertalite",
            "profit": 1077.06,
            "updated_at_idn": "15 September 2023"
        },
        {
            "id": 5,
            "name": "T5 - Pertamax Turbo",
            "profit": 9706.45,
            "updated_at_idn": "15 September 2023"
        }
    ],
    "links": {
        "first": "http://espbu.test/api/tanks?page=1",
        "last": "http://espbu.test/api/tanks?page=2",
        "prev": null,
        "next": "http://espbu.test/api/tanks?page=2"
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 2,
        "links": [
            {
                "url": null,
                "label": "&laquo; Sebelumnya",
                "active": false
            },
            {
                "url": "http://espbu.test/api/tanks?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "http://espbu.test/api/tanks?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "http://espbu.test/api/tanks?page=2",
                "label": "Berikutnya &raquo;",
                "active": false
            }
        ],
        "path": "http://espbu.test/api/tanks",
        "per_page": 5,
        "to": 5,
        "total": 6
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

- `/atgs`

## Get Tank Show Endpoint

```http
GET /tanks/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Tank ID |

### Response

::: details `200` OK
```json
{
    "message": "Hasil ditemukan",
    "data": {
        "id": 1,
        "name": "T1 - Pertamina Dex",
        "profit": "0.0000",
        "tank_timelines": [
            {
                "id": 2,
                "user": "Achmad Arifin",
                "role": "Kepala Shift",
                "prev_profit": -9142221740,
                "next_profit": 0,
                "created_at_idn": "15 Juli 2023"
            }
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
    "message": "Hasil tidak ditemukan"
}
```

:::

### Used on pages

- `/tank/edit/{id}`

## Create Tank Endpoint

```http
POST /tanks
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
    "name": "T6"
}
```

:::

| Name | Type | Description |

### Response

::: details `200` OK
```json
{
    "message": "Berhasil menambahkan Tank",
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

## Update Tank Endpoint

```http
PUT /tanks/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| id | int | Tank ID | false |

### Body

::: details JSON Body
```json
{
    "name": "T6"
}
```

:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| name | string | Tank Name | false |

### Response

::: details `200` OK
```json
{
    "message": "Berhasil mengubah Tank",
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

## Delete Tank Endpoint

```http
DELETE /tanks/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Tank ID |

### Response

::: details `200` OK
```json
{
    "message": "Tank berhasil dihapus"
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
    "message": "Masih ada ATG terkait"
}
```

:::

### Used on pages

- `/atgs`


## Get Tank Options Endpoint

```http
GET /tank/select
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
            "text": "T1 - Pertamina Dex"
        },
        {
            "id": 2,
            "text": "T2 - Pertamax"
        },
        {
            "id": 3,
            "text": "T3 - Pertalite"
        },
        {
            "id": 4,
            "text": "T4 - Pertalite"
        },
        {
            "id": 5,
            "text": "T5 - Pertamax Turbo"
        },
        {
            "id": 6,
            "text": "T6"
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

::: details `404` Not Found
```json
{
    "message": "Data tidak ditemukan"
}
```

:::

### Used on pages

- `/atgs`
- `/atgs/create`
- `/opnames/create`
- `/orderfuels/show`
- `/tankdeliveries/create`
- `/tankdeliveries/create`