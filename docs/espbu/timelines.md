# Timelines


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

::: details `404` Not Found
```json
{
    "message": "BBM tidak ditemukan"
}
```
:::

### Used on pages

- `/fuels/show/{id}`
- `/fuels/edit/{id}`