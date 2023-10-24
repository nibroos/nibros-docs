<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Machine Parents

This module is used to manage the master data of machine parents.

::: info
<PrefixComponent/>
:::

## Get Machine Parents Index Endpoint

```http
GET /machine_parents
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
            "name": "Pulau 1",
            "updated_at": "02 November 2022"
        },
        {
            "id": 2,
            "name": "Pulau 2",
            "updated_at": "02 November 2022"
        },
        // and so on...
    ],
    "links": {
        "first": "http://espbu.test/api/machine_parents?page=1",
        "last": "http://espbu.test/api/machine_parents?page=2",
        "prev": null,
        "next": "http://espbu.test/api/machine_parents?page=2"
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
                "url": "http://espbu.test/api/machine_parents?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "http://espbu.test/api/machine_parents?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "http://espbu.test/api/machine_parents?page=2",
                "label": "Berikutnya &raquo;",
                "active": false
            }
        ],
        "path": "http://espbu.test/api/machine_parents",
        "per_page": 5,
        "to": 5,
        "total": 7
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
    "message": "Dispenser Utama tidak ditemukan",
    "data": []
}
```

:::

### Used on pages
- `/machines`

## Get Machine Parents Show Endpoint

```http
GET /machine_parents/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Machine Parent ID |

### Response

::: details `200` OK
```json
{
    "message": "Hasil ditemukan",
    "data": {
        "id": 2,
        "name": "Pulau 2",
        "updated_at": "02 November 2022"
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
- `/machine_parents/edit/{id}`

## Create Machine Parents Endpoint

```http
POST /machine_parents
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
    "name": "Pulau 1"
}
```
:::

| Name | Type | Description |
| --- | --- | --- |
| name | string | Machine Parent Name |

### Response

::: details `200` OK
```json
{
    "message": "Berhasil menambahkan Dispenser Utama",
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
            "Nama Dispenser Utama harus diisi."
        ]
    }
}
```

:::

### Used on pages
- `/machine_parents/create`

## Update Machine Parents Endpoint

```http
PUT /machine_parents/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Machine Parent ID |

### Body

::: details JSON Body
```json
{
    "name": "Pulau 1"
}
```
:::

| Name | Type | Description |
| --- | --- | --- |
| name | string | Machine Parent Name |

### Response

::: details `200` OK
```json
{
    "message": "Berhasil mengubah Dispenser Utama",
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
            "Nama Dispenser Utama harus diisi."
        ]
    }
}
```

:::

### Used on pages
- `/machine_parents/edit/{id}`
