<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Preset Shifts

::: info
<PrefixComponent/>
:::

## Get Preset Shifts Index Endpoint

```http
GET /preset_shifts
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameter

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| page | int | Page number | false |
| search_per_page | int | Search by per page | false |

### Response

::: details `200` OK
```json
{
    "data": [
        {
            "id": 1,
            "name": "1",
            "start_dmy": "22/10/2023 06:00",
            "end_dmy": "22/10/2023 13:00",
            "start_date_ymd": "2023-10-22 06:00:00",
            "end_date_ymd": "2023-10-22 13:00:00"
        },
        {
            "id": 2,
            "name": "2",
            "start_dmy": "22/10/2023 13:00",
            "end_dmy": "22/10/2023 20:00",
            "start_date_ymd": "2023-10-22 13:00:00",
            "end_date_ymd": "2023-10-22 20:00:00"
        },
        {
            "id": 3,
            "name": "3",
            "start_dmy": "22/10/2023 20:00",
            "end_dmy": "23/10/2023 06:00",
            "start_date_ymd": "2023-10-22 20:00:00",
            "end_date_ymd": "2023-10-23 06:00:00"
        },
        // and so on
    ],
    "links": {
        "first": "http://espbu.test/api/presetShifts?page=1",
        "last": "http://espbu.test/api/presetShifts?page=1",
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
                "url": "http://espbu.test/api/presetShifts?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Berikutnya &raquo;",
                "active": false
            }
        ],
        "path": "http://espbu.test/api/presetShifts",
        "per_page": 7,
        "to": 7,
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
    "message": "Preset Shift tidak ditemukan"
}
```
:::

### Used on pages

- `/tasks`

## Create Preset Shift Endpoint

```http
POST /presetShifts
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
    "name": "1",
    "start_date_ymd": "2023-10-22 06:00:00",
    "end_date_ymd": "2023-10-22 13:00:00"
}
```
:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| name | string | Preset Shift name | false |
| start_date_ymd | string | Preset Shift start date | false |
| end_date_ymd | string | Preset Shift end date | false |

### Response

::: details `200` OK
```json
{
    "message": "Preset Shift berhasil ditambahkan"
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
            "Nama Preset Shift harus diisi."
        ],
        "start_date_ymd": [
            "Tanggal Mulai harus diisi."
        ],
        "end_date_ymd": [
            "Tanggal Selesai harus diisi."
        ]
    }
}
```

:::

### Used on pages

- `/tasks`

## Update Preset Shift Endpoint

```http
PUT /presetShifts/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Preset Shift ID |

### Body

::: details JSON Body
```json
{
    "name": "1",
    "start_date_ymd": "2023-10-22 07:00:00",
    "end_date_ymd": "2023-10-22 14:00:00"
}
```
:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| name | string | Preset Shift name | false |
| start_date_ymd | string | Preset Shift start date | false |
| end_date_ymd | string | Preset Shift end date | false |

### Response

::: details `200` OK
```json
{
    "message": "Preset Shift berhasil diubah"
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

## Delete Preset Shift Endpoint

```http
DELETE /presetShifts/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Preset Shift ID |

### Response

::: details `200` OK
```json
{
    "message": "Preset Shift berhasil dihapus"
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

## Get Preset Shift Options Endpoint

```http
GET `/presetShifts/select`
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Response

::: details `200` OK
```json
{
    "message": "Daftar preset shift ditemukan",
    "data": [
        {
            "label": "1",
            "range": [
                "2023-10-22 06:01:00",
                "2023-10-22 12:59:00"
            ]
        },
        {
            "label": "2",
            "range": [
                "2023-10-22 13:01:00",
                "2023-10-22 19:59:00"
            ]
        },
        {
            "label": "3",
            "range": [
                "2023-10-22 20:01:00",
                "2023-10-23 05:59:00"
            ]
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

- `/tasks/create`
- `/tasks/edit/{id}`
- `/opnames/create`