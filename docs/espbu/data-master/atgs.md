<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# ATG
ATG is a data source from computer applications (like Hanindo's Desktop App) that's integrated with fuel pumps, providing more accurate numerical data. However, errors still occur frequently when the numbers exceed the limit. This module is used to manage ATG data, including the ability to correct data that reseted to 0.

::: info
<PrefixComponent/>
:::

## Get Index ATG Endpoint

```http
GET /atgs
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description |
| --------- | ---- | ----------- |
| page | integer | The page number to get. |
| search_fuel | int | The fuel id to search. |
| search_machine | int | The machine id to search. |
| search_tank | int | The tank id to search. |
| searc_per_page | int | The number of items per page. |
| order_column | string | The column name to order results by. |
| order_direction | string | The direction to order results by. |


### Responses

::: details `200` OK

``` json
{
    "data": [
        {
            "id": 3,
            "user": "Triali Ulfanudin",
            "role": "Kepala Shift",
            "fuel": "Pertalite",
            "hose": 1,
            "machine": "Pulau 1 - A2 R2",
            "tank": "T3 - Pertalite",
            "position": "814484.99",
            "updated_at": "15 September 2023"
        },
        {
            "id": 4,
            "user": "Gunarto",
            "role": "Kepala Shift",
            "fuel": "Pertamax",
            "hose": 2,
            "machine": "Pulau 1 - A2 R2",
            "tank": "T2 - Pertamax",
            "position": "790489.97",
            "updated_at": "15 September 2023"
        },
        // and so on...
    ],
    "links": {
        "first": "http://espbu.test/atgs?page=1",
        "last": "http://espbu.test/atgs?page=5",
        "prev": null,
        "next": "http://espbu.test/atgs?page=2"
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
                "url": "http://espbu.test/atgs?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "http://espbu.test/atgs?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "http://espbu.test/atgs?page=3",
                "label": "3",
                "active": false
            },
            {
                "url": "http://espbu.test/atgs?page=4",
                "label": "4",
                "active": false
            },
            {
                "url": "http://espbu.test/atgs?page=5",
                "label": "5",
                "active": false
            },
            {
                "url": "http://espbu.test/atgs?page=2",
                "label": "Berikutnya &raquo;",
                "active": false
            }
        ],
        "path": "http://espbu.test/atgs",
        "per_page": 10,
        "to": 10,
        "total": 44
    }
}

```

:::

::: details `401` Unauthorized

``` json
{
    "message": "Unauthenticated."
}
```

:::

::: details `403` Forbidden

::: danger Possibilities:
- User don't have permission to access the endpoint

``` json
{
	"message": "This action is unauthorized"
}
```
:::

::: details `404` Not Found

``` json
{
    "message": "ATG tidak ditemukan",
    "data": []
}
```

:::

### Used on pages

- `/atgs`

## Get Show ATG Endpoint

```http
GET /atgs/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | ATG ID |

### Responses

::: details `200` OK

``` json
{
    "message": "Hasil ditemukan",
    "data": {
        "id": 4,
        "user": "Gunarto",
        "fuel_id": null,
        "fuel": "Pertamax",
        "machine_id": null,
        "machine": "Pulau 1 - A2 R2",
        "tank": {
            "id": 2,
            "name": "T2 - Pertamax",
            "fuel_id": 2,
            "profit": "0.0000",
            "created_at": null,
            "updated_at": "2023-09-15T06:58:29.000000Z",
            "bussiness_unit_id": null
        },
        "position": 790489.97,
        "created_at_idn": "16 November 2022",
        "updated_at_idn": "16 November 2022",
        "updated_at": "15 September 2023",
        "atgTimelines": [
            {
                "id": 470,
                "user": "Gunarto",
                "role": "Kepala Shift",
                "prev_position": 764417.72,
                "next_position": 764587.86,
                "created_at_idn": "25 Februari 2023"
            },
            {
                "id": 432,
                "user": "Gunarto",
                "role": "Kepala Shift",
                "prev_position": 764044.79,
                "next_position": 764378.76,
                "created_at_idn": "24 Februari 2023"
            },
            {
                "id": 394,
                "user": "Gunarto",
                "role": "Kepala Shift",
                "prev_position": 763668.91,
                "next_position": 764044.79,
                "created_at_idn": "22 Februari 2023"
            },
            {
                "id": 362,
                "user": "Gunarto",
                "role": "Kepala Shift",
                "prev_position": 763239.61,
                "next_position": 763652.51,
                "created_at_idn": "20 Februari 2023"
            },
            {
                "id": 335,
                "user": "Achmad Arifin",
                "role": "Kepala Shift",
                "prev_position": 763088.97,
                "next_position": 763239.61,
                "created_at_idn": "18 Februari 2023"
            }
        ]
    }
}
```

:::

::: details `401` Unauthorized

``` json
{
    "message": "Unauthenticated."
}
```

:::

::: details `403` Forbidden

::: danger Possibilities:
- User don't have permission to access the endpoint

``` json
{
  "message": "This action is unauthorized"
}
```

:::

::: details `404` Not Found

``` json
{
    "message": "ATG tidak ditemukan",
    "data": []
}
```

:::

### Used on pages

- `/atgs/show/{id}`

## Create ATG Endpoint

```http
POST /atgs
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

```json
{
  "meter_id": 1,
  "tank_id": 1,
  "position": 123456.78
}
```

| Name | Type | Description |
| --------- | ---- | ----------- |
| meter_id | int | The meter id of the ATG. |
| tank_id | int | The tank id of the ATG. |
| position | float | The position of the ATG. |

### Responses

::: details `201` Created
```json
{
  "message": "ATG berhasil dibuat"
}
```
:::

::: details `401` Unauthorized

``` json
{
    "message": "Unauthenticated."
}
```

:::

::: details `403` Forbidden

::: danger Possibilities:

- User don't have permission to access the endpoint

``` json
{
  "message": "This action is unauthorized"
}
```

:::

::: details `422` Unprocessable Entity

::: danger Possibilities:

- Validations error

``` json
{
    "message": "The given data was invalid.",
    "errors": {
        "meter_id": [
            "The meter id field is required."
        ],
        "tank_id": [
            "The tank id field is required."
        ],
        "position": [
            "The position field is required."
        ]
    }
}
```

:::

### Used on pages

- `/atgs/create`

## Update ATG Endpoint

```http
PUT /atgs/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

```json
{
  "position": 123456.78
}
```

| Name | Type | Description | Nullable |
| --------- | ---- | ----------- | -------- |
| position | float | The position of the ATG. | false |

### Responses

::: details `200` OK
```json
{
  "message": "ATG berhasil diupdate"
}
```
:::

::: details `401` Unauthorized

``` json
{
    "message": "Unauthenticated."
}
```

:::

::: details `403` Forbidden

::: danger Possibilities:

- User don't have permission to access the endpoint

``` json
{
  "message": "This action is unauthorized"
}
```

:::

::: details `422` Unprocessable Entity

::: danger Possibilities:

- Validations error

``` json
{
    "message": "The given data was invalid.",
    "errors": {
        "position": [
            "The position field is required."
        ]
    }
}
```

:::

### Used on pages

- `/atgs/edit/{id}`

## Get ATG Options Endpoint

```http
GET /atgs/select
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses

::: details `200` OK

```json
{
    "data": [
        {
            "id": 2,
            "text": "Pulau 1 - A1 R2 - T2 - Pertamax - 234180.93 L"
        },
        {
            "id": 1,
            "text": "Pulau 1 - A1 R2 - T3 - Pertalite - 618732.23 L"
        },
        {
            "id": 4,
            "text": "Pulau 1 - A2 R2 - T2 - Pertamax - 790489.97 L"
        },
        {
            "id": 3,
            "text": "Pulau 1 - A2 R2 - T3 - Pertalite - 814484.99 L"
        },
        {
            "id": 19,
            "text": "Pulau 2 - A1 - T1 - Pertamina Dex - 193231.32 L"
        },
        {
            "id": 17,
            "text": "Pulau 2 - A1 - T2 - Pertamax - 944544.77 L"
        },
        {
            "id": 6,
            "text": "Pulau 2 - A1 - T3 - Pertalite - 358543.97 L"
        },
        // and so on...
    ]
}
```

:::

::: details `401` Unauthorized

``` json
{
    "message": "Unauthenticated."
}
```

:::

::: details `403` Forbidden

::: danger Possibilities:

- User don't have permission to access the endpoint

``` json
{
  "message": "This action is unauthorized"
}
```

:::
