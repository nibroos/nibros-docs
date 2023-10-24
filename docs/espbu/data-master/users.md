<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Users

This module is used to manage the master data of users.

::: info
<PrefixComponent/>
:::

## Get Users Index Endpoint

```http
GET /users
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| page | int | Page number | false |
| search_name | string | Search by name | true |
| search_role | int | Search by role ID | true |
| search_global | string | Search by global filter | true |
| order_column | string | Order by column | true |
| order_direction | string | Order by direction | true |

### Response

::: details `200` OK
```json
{
    "data": [
        {
            "id": 36,
            "name": "Dwi Cahyo Utomo,...",
            "email": "owner@admin.com",
            "role": {
                "id": 7,
                "name": "Owner"
            },
            "nik": "3129031092321321",
            "workstart": "08 Oktober 2023",
            "workleave": "08 Oktober 2023"
        },
        {
            "id": 37,
            "name": "Vedo Yustinevan,...",
            "email": "vedo@gmail.com",
            "role": {
                "id": 3,
                "name": "Admin Keuangan"
            },
            "nik": "3374152103920001",
            "workstart": "31 Januari 2023",
            "workleave": "31 Januari 2023"
        },
        {
            "id": 34,
            "name": "Auditor",
            "email": "auditor@auditor.com",
            "role": {
                "id": 6,
                "name": "Auditor"
            },
            "nik": "3310106357011231",
            "workstart": "07 November 2022",
            "workleave": "07 November 2022"
        },
        {
            "id": 35,
            "name": "Muhammad Galih P...",
            "email": "mgalihpratama098@gmail.com",
            "role": {
                "id": 5,
                "name": "Operator"
            },
            "nik": "3374101706040003",
            "workstart": "07 Oktober 2022",
            "workleave": "06 Februari 2023"
        },
        {
            "id": 30,
            "name": "Sobirin",
            "email": "rinduekazama@gmail.com",
            "role": {
                "id": 4,
                "name": "Kepala Shift"
            },
            "nik": "3314170904880003",
            "workstart": "30 Agustus 2022",
            "workleave": "30 Agustus 2022"
        },
        // and so on...
    ],
    "links": {
        "first": "http://espbu.test/api/users?page=1",
        "last": "http://espbu.test/api/users?page=4",
        "prev": null,
        "next": "http://espbu.test/api/users?page=2"
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 4,
        "links": [
            {
                "url": null,
                "label": "&laquo; Sebelumnya",
                "active": false
            },
            {
                "url": "http://espbu.test/api/users?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "http://espbu.test/api/users?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "http://espbu.test/api/users?page=3",
                "label": "3",
                "active": false
            },
            {
                "url": "http://espbu.test/api/users?page=4",
                "label": "4",
                "active": false
            },
            {
                "url": "http://espbu.test/api/users?page=2",
                "label": "Berikutnya &raquo;",
                "active": false
            }
        ],
        "path": "http://espbu.test/api/users",
        "per_page": 10,
        "to": 10,
        "total": 31
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
    "message": "Data tidak ditemukan",
    "data": []
}
```

:::

### Used on pages

- `/users`

## Get Show User Endpoint

```http
GET /users/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | User ID |

### Response

::: details `200` OK
```json
{
    "message": "User ditemukan",
    "data": {
        "id": 8,
        "name": "Noviana setyoningrum",
        "email": "Setyoningrumnoviana@gmail.com",
        "roles": [
            {
                "id": 5,
                "text": "Operator"
            }
        ],
        "nip": "1997 12 23 005",
        "nik": "3321016312970002",
        "address": "Jamus",
        "sign": "http://espbu.test/images/1677738721-RK4wXXRYI2AQWqvBZr8JtzNpfmwl71wW.png",
        "workstart": "2022-05-21",
        "workleave": "2022-08-22",
        "workstart_idn": "21 Mei 2022",
        "workleave_idn": "22 Agustus 2022",
        "created_at_idn": "19 Agustus 2022 15:41",
        "updated_at_idn": "02 Maret 2023 13:32"
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
    "message": "User tidak ditemukan",
    "data": []
}
```

:::

### Used on pages

- `/users/show/{id}`
- `/users/edit/{id}`

## Create User Endpoint

```http
POST /users
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
        "name": "Aw",
        "email": "oke@nibros.com",
        "roles": 4,
        "nip": "20913809123",
        "nik": 3310160212389,
        "address": "Tembalang",
        "password": "Aa0Aa0",
        "roles": 4
}
```

:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| name | string | User Name | false |
| email | string | User Email | false |
| nip | string | User NIP | true |
| nik | string | User NIK | true |
| address | string | User Address | true |
| workstart | string | User Work Start Date | true |
| workleave | string | User Work Leave Date | true |
| password | string | User Password | false |
| roles | int | User Role ID | false |

### Response

::: details `200` OK
```json
{
  "message": "Berhasil menambahkan User"
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
        "email": [
            "The email has already been taken."
        ]
    }
}
```

:::

### Used on pages

- `/users/create`

## Update User Endpoint

```http
PUT /users/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | User ID |

### Body

::: details JSON Body
```json
{
  "name": "Awi",
  "email": "oke@nibros.com",
  "roles": 4,
  "nip": "20913809123",
  "nik": 3310160212389,
  "address": "Tembalang",
  "password": "Aa0Aa0",
  "roles": 4
}
```

:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| name | string | User Name | false |
| email | string | User Email | false |
| nip | string | User NIP | true |
| nik | string | User NIK | true |
| address | string | User Address | true |
| workstart | string | User Work Start Date | true |
| workleave | string | User Work Leave Date | true |
| password | string | User Password | false |
| roles | int | User Role ID | false |

### Response

::: details `200` OK
```json
{
  "message": "Berhasil mengubah User"
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
        "email": [
            "The email has already been taken."
        ]
    }
}
```

:::

### Used on pages

- `/users/edit/{id}`

## Delete User Endpoint

```http
DELETE /users/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | User ID |

### Response

::: details `200` OK
```json
{
  "message": "User berhasil diarsipkan"
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

- `/users`

## Get User Options Endpoint

```http
GET /user/select
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Response

::: details `200` OK
```json
{
    "results": [
        {
            "id": 26,
            "text": "Achmad Arifin"
        },
        {
            "id": 14,
            "text": "Anis Fufah"
        },
        {
            "id": 19,
            "text": "Antok Novianto"
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

## Get Users Archive Index Endpoint

```http
GET /users/onlytrashed
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| page | int | Page number | false |
| search_name | string | Search by name | true |
| search_role | int | Search by role ID | true |
| search_global | string | Search by global filter | true |
| order_column | string | Order by column | true |
| order_direction | string | Order by direction | true |

### Response

::: details `200` OK
```json
{
    "data": [
        {
            "id": 40,
            "name": "operator",
            "email": "operator@gmail.com",
            "nik": "1234567891011121",
            "workstart": "26 Februari 2023",
            "workleave": "31 Maret 2023"
        },
        {
            "id": 4,
            "name": "Mas Supet",
            "email": "supet@supet.com",
            "nik": "1111111111111111",
            "workstart": "19 Mei 2022",
            "workleave": "31 Agustus 2022"
        },
        // and so on
    ],
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
                "url": "http://espbu.test/api/user/onlytrashed?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Berikutnya &raquo;",
                "active": false
            }
        ],
        "path": "http://espbu.test/api/user/onlytrashed",
        "per_page": 5,
        "to": 3,
        "total": 3
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

- `/users/archive`

## Restore User Endpoint

```http
PUT /user/restore/one/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | User ID |

### Response

::: details `200` OK
```json
{
    "message": "User berhasil dipulihkan"
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

- `/users/archive`


