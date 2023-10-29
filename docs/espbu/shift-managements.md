<script setup>
import PrefixComponent from '../components/PrefixComponent.vue'
</script>

# Shift Management

Operator tasks managed by shift manager in this module.

::: info
<PrefixComponent/>
:::

## Get Tasks Index Endpoint

```http
GET /tasks
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| page | integer | Page number | true |
| search_user | string | Search by user name | true |
| search_shift | integer | Search by shift id | true |
| search_machine | integer | Search by machine id | true |
| search_shift_start_at | string | Search by shift at | true |
| search_per_page | integer | Search by per page | true |
| order_column | string | Order by column | true |
| order_direction | string | Order by direction | true |

### Responses

::: details `200` OK
```json
{
    "data": [
        {
            "id": 5562,
            "user_id": 30,
            "user": "Sobirin",
            "shift_id": 2,
            "shift": "2",
            "machine": "Pulau 5",
            "fund_start": 0,
            "status": 11,
            "status_text": "Validasi Adm. Keuangan",
            "is_closed": 1,
            "shift_start_at": "24/10/2023 13:01",
            "shift_end_at": "24/10/2023 19:59",
            "updated_at": "24/10/2023 16:42",
            "sales_ids": [
                143278,
                143279,
                143280,
                143281,
                143282,
                143283,
                143284,
                143285
            ],
            "report_id": 7863
        },
        {
            "id": 5563,
            "user_id": 30,
            "user": "Sobirin",
            "shift_id": 2,
            "shift": "2",
            "machine": "Pulau 6 A",
            "fund_start": 0,
            "status": 11,
            "status_text": "Validasi Adm. Keuangan",
            "is_closed": 1,
            "shift_start_at": "24/10/2023 13:01",
            "shift_end_at": "24/10/2023 19:59",
            "updated_at": "24/10/2023 16:42",
            "sales_ids": [
                143286,
                143287,
                143288,
                143289
            ],
            "report_id": 7864
        },
        {
            "id": 5561,
            "user_id": 41,
            "user": "Rukayah",
            "shift_id": 2,
            "shift": "2",
            "machine": "Pulau 6 B",
            "fund_start": 0,
            "status": 0,
            "status_text": "Sedang shift",
            "is_closed": 0,
            "shift_start_at": "24/10/2023 13:01",
            "shift_end_at": "24/10/2023 19:59",
            "updated_at": "24/10/2023 16:42",
            "sales_ids": [],
            "report_id": null
        },
        {
            "id": 5560,
            "user_id": 6,
            "user": "Dedy Santoso",
            "shift_id": 2,
            "shift": "2",
            "machine": "Pulau 4",
            "fund_start": 0,
            "status": 0,
            "status_text": "Sedang shift",
            "is_closed": 0,
            "shift_start_at": "24/10/2023 13:01",
            "shift_end_at": "24/10/2023 19:59",
            "updated_at": "24/10/2023 16:41",
            "sales_ids": [],
            "report_id": null
        },
        {
            "id": 5559,
            "user_id": 14,
            "user": "Anis Fufah",
            "shift_id": 2,
            "shift": "2",
            "machine": "Pulau 3",
            "fund_start": 0,
            "status": 0,
            "status_text": "Sedang shift",
            "is_closed": 0,
            "shift_start_at": "24/10/2023 13:01",
            "shift_end_at": "24/10/2023 19:59",
            "updated_at": "24/10/2023 16:41",
            "sales_ids": [],
            "report_id": null
        },
        {
            "id": 5558,
            "user_id": 19,
            "user": "Antok Novianto",
            "shift_id": 2,
            "shift": "2",
            "machine": "Pulau 2",
            "fund_start": 0,
            "status": 0,
            "status_text": "Sedang shift",
            "is_closed": 0,
            "shift_start_at": "24/10/2023 13:01",
            "shift_end_at": "24/10/2023 19:59",
            "updated_at": "24/10/2023 16:40",
            "sales_ids": [],
            "report_id": null
        },
        {
            "id": 5557,
            "user_id": 11,
            "user": "Thomas Adhi Sapu...",
            "shift_id": 2,
            "shift": "2",
            "machine": "Pulau 1",
            "fund_start": 0,
            "status": 0,
            "status_text": "Sedang shift",
            "is_closed": 0,
            "shift_start_at": "24/10/2023 13:01",
            "shift_end_at": "24/10/2023 19:59",
            "updated_at": "24/10/2023 16:40",
            "sales_ids": [],
            "report_id": null
        }
    ],
    "links": {
        "first": "http://espbu.undip.id/api/tasks?page=1",
        "last": "http://espbu.undip.id/api/tasks?page=2",
        "prev": null,
        "next": "http://espbu.undip.id/api/tasks?page=2"
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
                "url": "http://espbu.undip.id/api/tasks?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "http://espbu.undip.id/api/tasks?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "http://espbu.undip.id/api/tasks?page=2",
                "label": "Berikutnya &raquo;",
                "active": false
            }
        ],
        "path": "http://espbu.undip.id/api/tasks",
        "per_page": 7,
        "to": 7,
        "total": 14
    }
}

```

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
    "message": "Penugasan tidak ditemukan",
    "data": []
}
```
:::

### Used on pages

- `/tasks`

## Get Tasks Show Endpoint

```http
GET /tasks/{id}
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
        "id": 5563,
        "user_id": 30,
        "user": "Sobirin",
        "assistant_user": "-",
        "shift_id": 2,
        "shift": "2",
        "machine_id": 12,
        "machine": "Pulau 6 - A2 R2",
        "machine_parent": "Pulau 6 A",
        "machines": "Pulau 6 - A1 R2, Pulau 6 - A2 R2",
        "fund_start": 0,
        "status": 11,
        "status_name": "Validasi Adm. Keuangan",
        "is_closed": 1,
        "is_void_sell": 1,
        "closed_text": "Ditutup",
        "kasif_name": "Sobirin",
        "shift_start_at": "2023-10-24T13:01:00",
        "shift_end_at": "2023-10-24T19:59:00",
        "shift_at": "2023-10-24T00:00:00",
        "shift_start_at_idn": "24 Oktober 2023 13:01",
        "shift_end_at_idn": "24 Oktober 2023 19:59",
        "meters": [
            {
                "id": 37,
                "fuel": "Pertalite",
                "machine": "Pulau 6 - A1 R2",
                "hose": 1
            },
            {
                "id": 38,
                "fuel": "Pertamax",
                "machine": "Pulau 6 - A1 R2",
                "hose": 2
            },
            {
                "id": 39,
                "fuel": "Pertalite",
                "machine": "Pulau 6 - A2 R2",
                "hose": 1
            },
            {
                "id": 40,
                "fuel": "Pertamax",
                "machine": "Pulau 6 - A2 R2",
                "hose": 2
            }
        ],
        "sales_ids": [
            143286,
            143287,
            143288,
            143289
        ],
        "report_id": 7864
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
    "message": "Penugasan tidak ditemukan",
    "data": []
}
```
:::

### Used on pages

- `/tasks/show/{id}`

## Create Task Endpoint

```http
POST /tasks
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
    "shift_id": 3,
    "user_id": 19,
    "assistant_user_id": 14,
    "fund_start": 0,
    "shift_start_at": "2023-04-12T20:01",
    "shift_end_at": "2023-04-13T05:59",
    "machine_parent_id": 3,
    "shift_at": "2023-04-12"
}
```
:::

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| shift_id | integer | Shift id | false |
| user_id | integer | User id | false |
| assistant_user_id | integer | Assistant user id | true |
| fund_start | integer | Fund start | true |
| shift_start_at | string | Shift start at | false |
| shift_end_at | string | Shift end at | false |
| machine_parent_id | integer | Machine parent id | false |
| shift_at | string | Shift at | false |

### Responses

::: details `200` OK
```json
{
  "message": "Penugasan berhasil dibuat"
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
        "shift_id": [
            "The shift id field is required."
        ],
        "user_id": [
            "The user id field is required."
        ],
        "shift_start_at": [
            "The shift start at field is required."
        ],
        "shift_end_at": [
            "The shift end at field is required."
        ],
        "machine_parent_id": [
            "The machine parent id field is required."
        ],
        "shift_at": [
            "The shift at field is required."
        ]
    }
}
```
:::

### Used on pages

- `/tasks/create`

## Update Task Endpoint

```http
PUT /tasks/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
    "fund_start": 0,
    "shift_start_at": "2023-02-17T06:01",
    "shift_end_at": "2023-02-17T12:59:00",
    "shift_at": "2023-02-17",
    "is_closed": 1
}
```
:::

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| fund_start | integer | Fund start | true |
| shift_start_at | string | Shift start at | false |
| shift_end_at | string | Shift end at | false |
| shift_at | string | Shift at | false |
| is_closed | integer | Is closed | true |

### Responses

::: details `200` OK
```json
{
  "message": "Penugasan berhasil diperbarui"
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
        "shift_start_at": [
            "The shift start at field is required."
        ],
        "shift_end_at": [
            "The shift end at field is required."
        ],
        "shift_at": [
            "The shift at field is required."
        ]
    }
}
```
:::

### Used on pages

- `/tasks/edit/{id}`

## Delete Task Endpoint

```http
DELETE /tasks/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses

::: details `200` OK
```json
{
  "message": "Penugasan berhasil dihapus"
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

- `/tasks`

## Get Available Tasks for Petugas Endpoint

```http
GET /task/shift/ready
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses

::: details `200` OK
```json
{
    "data": {
        "id": 5559,
        "user": "Anis Fufah",
        "role": "Operator",
        "meters": {
            "id": 13,
            "fuel": "Pertamax Turbo",
            "fuel_price": 16600,
            "machine": "Pulau 3 - A1",
            "open_meter": 1652396,
            "position": 1652396,
            "hose": 1,
            "updated_at": "24 Oktober 2023 13:36"
        },
        "atg": {
            "id": 9,
            "open_meter": 652618.68,
            "position": 652618.68,
            "meter_id": 13
        },
        "shift": "2",
        "fund_start": 0,
        "status": 0,
        "updated_at": "24 Oktober 2023 19:46",
        "shift_start_at": "24 Oktober 2023 13:01",
        "shift_end_at": "24 Oktober 2023 19:59"
    }
}
```
:::

::: details `404` Not Found
```json
{
    "message": "Tidak ada tugas/shift belum ditutup/laporan dana belum diselesaikan"
}
```
:::

### Used on pages

- Android, Task page

## Get User Tasks Endpoint

```http
GET /task/user
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses

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
    "message": "Tidak ada tugas/shift"
}
```
:::

### Used on pages

- Android, Task page

## Get User Task Show Endpoint

```http
GET /task/user/{id}
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
        "id": 5560,
        "machines": "Pulau 4 - A1, Pulau 4 - A2",
        "shift": "2",
        "fund_start": 0,
        "status": "Sedang Shift",
        "created_at": "24 Oktober 2023 16:41",
        "updated_at": "24 Oktober 2023 19:50",
        "meters": [
            {
                "id": 21,
                "fuel": "Pertamax Turbo",
                "fuel_price": "16600.0000",
                "machine": "Pulau 4 - A1",
                "position": "710700.00000"
            },
            {
                "id": 22,
                "fuel": "Pertalite",
                "fuel_price": "10000.0000",
                "machine": "Pulau 4 - A1",
                "position": "5635320.00000"
            },
            {
                "id": 23,
                "fuel": "Pertamax",
                "fuel_price": "14000.0000",
                "machine": "Pulau 4 - A1",
                "position": "1858936.00000"
            },
            {
                "id": 24,
                "fuel": "Pertamina Dex",
                "fuel_price": "17900.0000",
                "machine": "Pulau 4 - A1",
                "position": "382166.00000"
            },
            {
                "id": 25,
                "fuel": "Pertamax Turbo",
                "fuel_price": "16600.0000",
                "machine": "Pulau 4 - A2",
                "position": "680352.00000"
            },
            {
                "id": 26,
                "fuel": "Pertalite",
                "fuel_price": "10000.0000",
                "machine": "Pulau 4 - A2",
                "position": "5599771.00000"
            },
            {
                "id": 27,
                "fuel": "Pertamax",
                "fuel_price": "14000.0000",
                "machine": "Pulau 4 - A2",
                "position": "785003.00000"
            },
            {
                "id": 28,
                "fuel": "Pertamina Dex",
                "fuel_price": "17900.0000",
                "machine": "Pulau 4 - A2",
                "position": "82835.00000"
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
    "message": "Tidak ada tugas/shift"
}
```
:::

### Used on pages

- Android, Show task page

## Bulk Update Task Close Endpoint

```http
PUT /task/close/shift
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: JSON Body
```json
{
    "tasks": [
        {
            
            "id": 1203,
            "is_closed": 1
        },
        {
            "id": 1204,
            "is_closed": 1
        }
    ]
}
```
:::

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| tasks | array | Tasks | false |
| tasks.id | integer | Task id | false |
| tasks.is_closed | integer | Is closed | false |

### Responses

::: details `200` OK
```json
{
    "message": "Tugas berhasil ditutup"
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

- `/tasks`

## Bulk Create Tasks No Sales Endpoint

```http
POST /task/off/sales
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
    "shift_id": 1,
    "fund_start": 0,
    "shift_start_at": "2023-03-10T07:01",
    "shift_end_at": "2023-03-10T12:58:00",
    "user_id": 36,
    "machine_parents": [ 4, 7 ],
    "shift_at": "2023-03-10"
}
```
:::

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| shift_id | integer | Shift id | false |
| fund_start | integer | Fund start | true |
| shift_start_at | string | Shift start at | false |
| shift_end_at | string | Shift end at | false |
| user_id | integer | User id | false |
| machine_parents | array | Machine parents | false |
| shift_at | string | Shift at | false |

### Responses

::: details `200` OK
```json
{
    "message": "Tugas berhasil dibuat"
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






