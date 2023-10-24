<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Employee Performances

::: info
<PrefixComponent/>
:::

## Get Employee Performances

```http
GET /sale/rank
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| search_periode_start_at | string | Search by periode start at | true |
| search_periode_end_at | string | Search by periode end at | true |
| search_role | integer | Search by role id | true |
| order_column | string | Order by column | true |
| order_direction | string | Order by direction | true |

### Responses

::: details `200` OK
```json
{
    "message": "Laporan ditemukan",
    "data": {
        "collection": [
            {
                "id": 14,
                "no": 1,
                "user_name": "Anis Fufah",
                "total_volume": 50359.12,
                "total_value": 489765556,
                "by_fuel": [
                    {
                        "fuel_name": "PL",
                        "total_volume": "33054.52000",
                        "total_value": 271064763
                    },
                    {
                        "fuel_name": "PX",
                        "total_volume": "20388.96000",
                        "total_value": 180511438
                    },
                    {
                        "fuel_name": "PDX",
                        "total_volume": "8110.24000",
                        "total_value": 28649080.5
                    },
                    {
                        "fuel_name": "PXT",
                        "total_volume": "6649.55000",
                        "total_value": 9540463
                    }
                ]
            },
            {
                "id": 20,
                "no": 2,
                "user_name": "Catur Wulandari Agustin",
                "total_volume": 46810.77,
                "total_value": 370766865,
                "by_fuel": [
                    {
                        "fuel_name": "PL",
                        "total_volume": "35723.66000",
                        "total_value": 230737033
                    },
                    {
                        "fuel_name": "PX",
                        "total_volume": "22031.17000",
                        "total_value": 117265133
                    },
                    {
                        "fuel_name": "PDX",
                        "total_volume": "13801.21000",
                        "total_value": 15221453
                    },
                    {
                        "fuel_name": "PXT",
                        "total_volume": "13204.64000",
                        "total_value": 7543645
                    }
                ]
            },
            {
                "id": 5,
                "no": 3,
                "user_name": "Lina Yulianti",
                "total_volume": 46071.04,
                "total_value": 349707301,
                "by_fuel": [
                    {
                        "fuel_name": "PL",
                        "total_volume": "33181.69000",
                        "total_value": 186526054
                    },
                    {
                        "fuel_name": "PX",
                        "total_volume": "24958.54000",
                        "total_value": 130368154
                    },
                    {
                        "fuel_name": "PDX",
                        "total_volume": "16362.04000",
                        "total_value": 24286609
                    },
                    {
                        "fuel_name": "PXT",
                        "total_volume": "15156.07000",
                        "total_value": 8526946
                    }
                ]
            },
            // and so on
        ]
    }
}
```

:::

::: details `401` Unauthorized
```json
{
    "message": "Unauthorized"
}
```

:::

::: details `404` Not Found
```json
{
    "message": "Tidak ada laporan bulan ini",
    "data": []
}
```

:::


