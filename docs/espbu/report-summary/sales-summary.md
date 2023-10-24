# Fuel Sales Summary


## Get Sales Report by Date Range Endpoint

```http
GET report/chart/daterange
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameter

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| date_start_at | string | Date start at | false |
| date_end_at | string | Date end at | false |

### Response

::: details `200` OK
```json
{
    "data": [
        {
            "total": 312785663,
            "day": "21 Mar 2023",
            "date": "Sel, 21/03/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 13.300"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 15.850"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.100"
                }
            ]
        },
        {
            "total": 236708259,
            "day": "22 Mar 2023",
            "date": "Rab, 22/03/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 13.300"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 15.850"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.100"
                }
            ]
        },
        {
            "total": 168470758,
            "day": "23 Mar 2023",
            "date": "Kam, 23/03/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 13.300"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 15.850"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.100"
                }
            ]
        },
        {
            "total": 239363538,
            "day": "24 Mar 2023",
            "date": "Jum, 24/03/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 13.300"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 15.850"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.100"
                }
            ]
        },
        {
            "total": 196720674,
            "day": "25 Mar 2023",
            "date": "Sab, 25/03/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 13.300"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 15.850"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.100"
                }
            ]
        },
        {
            "total": 173010395,
            "day": "26 Mar 2023",
            "date": "Min, 26/03/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 13.300"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 15.850"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.100"
                }
            ]
        },
        {
            "total": 264498383,
            "day": "27 Mar 2023",
            "date": "Sen, 27/03/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 13.300"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 15.850"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.100"
                }
            ]
        }
    ]
}
```

:::

### Used on pages

- `/dashboard`
