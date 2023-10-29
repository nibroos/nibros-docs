<script setup>
import PrefixComponent from '../components/PrefixComponent.vue'
</script>

# Timelines

There are module that needs timeline feature, such as Fuel, ATG, Meter, and Tank. This feature is used to track the changes of the data and affecting other modules calculation caused by the changes.

::: info
<PrefixComponent/>
:::

## Get Fuel Timelines Endpoint

<span class="get-endpoint">GET</span> `/fuel/timelines/{id}`

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Fuel ID |

### Query Parameter

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| page | int | Page number | false |
| search_updated_at | string | Search by updated at | true |
| order_column | string | Order by column | true |
| order_direction | string | Order by direction | true |

### Response

::: details `200` OK
```json
{
    "message": "Hasil ditemukan",
    "data": {
        "id": 113,
        "fuel": "Pertalite",
        "user": "Developer",
        "role": "Super Admin",
        "prev_price": 10000,
        "next_price": 10000,
        "prev_buy": 9692,
        "next_buy": 9692,
        "prev_std_profit": 308,
        "next_std_profit": 308,
        "prev_product_code": "A040900076",
        "next_product_code": "A040900076",
        "created_at": "01/10/2022 00:00:00",
        "changed_at": "01/10/2022 00:00:00"
    }
}
```
:::

### Used on pages

- `/fuels/show/{id}`
- `/fuels/edit/{id}`

## Get ATG Timelines Endpoint

```http
GET /atg/timelines/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameter

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| page | int | Page number | false |
| search_updated_at | string | Search by updated at | true |
| order_column | string | Order by column | true |
| order_direction | string | Order by direction | true |

### Response

::: details `200` OK
```json
{
    "data": [
        {
            "id": 619,
            "user": "Developer",
            "role": "Super Admin",
            "prev_position": 1000929.97,
            "next_position": 929.97,
            "created_at_idn": "25 September 2023"
        },
        {
            "id": 584,
            "user": "Gunarto",
            "role": "Kepala Shift",
            "prev_position": 937193.32,
            "next_position": 938416.44,
            "created_at_idn": "26 Agustus 2023"
        },
        {
            "id": 550,
            "user": "Triali Ulfanudin",
            "role": "Kepala Shift",
            "prev_position": 917810.67,
            "next_position": 924901,
            "created_at_idn": "19 Agustus 2023"
        },
        {
            "id": 533,
            "user": "Triali Ulfanudin",
            "role": "Kepala Shift",
            "prev_position": 643151.71,
            "next_position": 643152.81,
            "created_at_idn": "17 April 2023"
        },
        // and so on
    ],
    "links": {
        "first": "http://espbu.undip.id/api/atg/timelines/3?page=1",
        "last": "http://espbu.undip.id/api/atg/timelines/3?page=3",
        "prev": null,
        "next": "http://espbu.undip.id/api/atg/timelines/3?page=2"
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
                "url": "http://espbu.undip.id/api/atg/timelines/3?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "http://espbu.undip.id/api/atg/timelines/3?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "http://espbu.undip.id/api/atg/timelines/3?page=3",
                "label": "3",
                "active": false
            },
            {
                "url": "http://espbu.undip.id/api/atg/timelines/3?page=2",
                "label": "Berikutnya &raquo;",
                "active": false
            }
        ],
        "path": "http://espbu.undip.id/api/atg/timelines/3",
        "per_page": 10,
        "to": 10,
        "total": 22
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

- `/atgs/show/{id}`
- `/atgs/edit/{id}`

## Get Meter Timelines Endpoint

```http
GET /meter/timelines/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameter

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| page | int | Page number | false |
| search_updated_at | string | Search by updated at | true |
| order_column | string | Order by column | true |
| order_direction | string | Order by direction | true |

### Response

::: details `200` OK
```json
{
    "data": [
        {
            "id": 636,
            "user": "Gunarto",
            "role": "Kepala Shift",
            "prev_position": 612660,
            "next_position": 612734,
            "created_at_idn": "26 Agustus 2023 16:20:30"
        },
        {
            "id": 604,
            "user": "Triali Ulfanudin",
            "role": "Kepala Shift",
            "prev_position": 611365,
            "next_position": 611542,
            "created_at_idn": "19 Agustus 2023 16:42:48"
        },
        {
            "id": 598,
            "user": "Triali Ulfanudin",
            "role": "Kepala Shift",
            "prev_position": 603606,
            "next_position": 603649,
            "created_at_idn": "04 Juni 2023 13:40:09"
        },
        // and so on
    ],
    "links": {
        "first": "http://espbu.undip.id/api/meter/timelines/5?page=1",
        "last": "http://espbu.undip.id/api/meter/timelines/5?page=1",
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
                "url": "http://espbu.undip.id/api/meter/timelines/5?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Berikutnya &raquo;",
                "active": false
            }
        ],
        "path": "http://espbu.undip.id/api/meter/timelines/5",
        "per_page": 20,
        "to": 19,
        "total": 19
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

- `/meters/show/{id}`
- `/meters/edit/{id}`

## Get Tank Timelines Endpoint

```http
GET /tank/timelines/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameter

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| page | int | Page number | false |
| search_updated_at | string | Search by updated at | true |
| order_column | string | Order by column | true |
| order_direction | string | Order by direction | true |

### Response

::: details `200` OK
```json
{
    "data": [
        {
            "id": 2,
            "user": "Developer",
            "role": "Super Admin",
            "prev_profit": 11059,
            "next_profit": 0,
            "created_at_idn": "14 Juli 2023"
        }
    ],
    "links": {
        "first": "http://espbu.undip.id/api/tank/timelines/4?page=1",
        "last": "http://espbu.undip.id/api/tank/timelines/4?page=1",
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
                "url": "http://espbu.undip.id/api/tank/timelines/4?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Berikutnya &raquo;",
                "active": false
            }
        ],
        "path": "http://espbu.undip.id/api/tank/timelines/4",
        "per_page": 10,
        "to": 1,
        "total": 1
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

- `/tanks/show/{id}`
- `/tanks/edit/{id}`

## Get 





