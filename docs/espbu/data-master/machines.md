<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Machines

This module is used to manage the master data of child machines.

::: info
<PrefixComponent/>
:::

## Get Machines Index Endpoint

```http
GET /machines
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
            "serial": "Pulau 1 - A1 R2",
            "machine_parent": "Pulau 1",
            "updated_at_idn": "15 Februari 2023"
        },
        {
            "id": 2,
            "serial": "Pulau 1 - A2 R2",
            "machine_parent": "Pulau 1",
            "updated_at_idn": "15 Februari 2023"
        },
        {
            "id": 3,
            "serial": "Pulau 2 - A1",
            "machine_parent": "Pulau 2",
            "updated_at_idn": "15 Februari 2023"
        },
        {
            "id": 4,
            "serial": "Pulau 2 - A2",
            "machine_parent": "Pulau 2",
            "updated_at_idn": "15 Februari 2023"
        },
        // and so on
    ],
    "links": {
        "first": "http://espbu.test/api/machines?page=1",
        "last": "http://espbu.test/api/machines?page=3",
        "prev": null,
        "next": "http://espbu.test/api/machines?page=2"
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
                "url": "http://espbu.test/api/machines?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "http://espbu.test/api/machines?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "http://espbu.test/api/machines?page=3",
                "label": "3",
                "active": false
            },
            {
                "url": "http://espbu.test/api/machines?page=2",
                "label": "Berikutnya &raquo;",
                "active": false
            }
        ],
        "path": "http://espbu.test/api/machines",
        "per_page": 5,
        "to": 5,
        "total": 14
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

- `/machines`

## Get Show Machine Endpoint

```http
GET /machines/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Machine ID |

### Response

::: details `200` OK
```json
{
    "message": "Hasil ditemukan",
    "data": {
        "id": 1,
        "serial": "Pulau 1 - A1 R2",
        "machine_parent_id": 1,
        "updated_at_idn": "15 Februari 2023"
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
    "message": "Hasil tidak ditemukan",
}
```

:::

### Used on pages

- `/machines/edit/{id}`

## Create Machine Endpoint

```http
POST /machines
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
    "serial": "Pulau 1 - A1 R2",
    "machine_parent_id": 1
}
```
:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| serial | string | Machine Serial | false |
| machine_parent_id | int | Machine Parent ID | false |

### Response

::: details `200` OK
```json
{
    "message": "Berhasil menambahkan dispenser"
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

- `/machines/create`

## Update Machine Endpoint

```http
PUT /machines/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| id | int | Machine ID | false |

### Body

::: details JSON Body
```json
{
    "serial": "Pulau 1 - A1 R2",
    "machine_parent_id": 1
}
```
:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| serial | string | Machine Serial | false |
| machine_parent_id | int | Machine Parent ID | false |

### Response

::: details `200` OK
```json
{
    "message": "Berhasil mengubah dispenser"
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

- `/machines/edit/{id}`




## Get Machines Options Endpoint

```http
GET /machine/select
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
            "text": "Pulau 1 - A1 R2"
        },
        {
            "id": 2,
            "text": "Pulau 1 - A2 R2"
        },
        {
            "id": 3,
            "text": "Pulau 2 - A1"
        },
        {
            "id": 4,
            "text": "Pulau 2 - A2"
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

- `/meters/create`

