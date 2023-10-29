<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Fuel Sales Summary

You can get fuel sales summary data by calling this API endpoint on the dashboard page.

::: info
<PrefixComponent/>
:::

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


## Get Sales Report by Last 12 Months Endpoint

```http
GET report/chart/last12months
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
            "total": 264994310,
            "day": "29 Des 2022",
            "date": "Kam, 29/12/2022",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 13.900"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 18.800"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.200"
                }
            ]
        },
        {
            "total": 264932900,
            "day": "30 Des 2022",
            "date": "Jum, 30/12/2022",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 13.900"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 18.800"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.200"
                }
            ]
        },
        {
            "total": 205362630,
            "day": "31 Des 2022",
            "date": "Sab, 31/12/2022",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 13.900"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 18.800"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.200"
                }
            ]
        },
        {
            "total": 228122580,
            "day": "01 Jan 2023",
            "date": "Min, 01/01/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 13.900"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 18.800"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.200"
                }
            ]
        },
        {
            "total": 260224500,
            "day": "02 Jan 2023",
            "date": "Sen, 02/01/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 13.900"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 18.800"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.200"
                }
            ]
        }
    ]
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
    "message": "Tidak ada laporan bulan ini",
    "data": []
}
```
:::

### Used on pages

- `/dashboard`


## Get Sales Report by Last 30 days Endpoint

```http
GET report/chart/last30days
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
            "total": 159641158,
            "day": "24 Sep 2023",
            "date": "Min, 24/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 195854432,
            "day": "25 Sep 2023",
            "date": "Sen, 25/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 266026535,
            "day": "26 Sep 2023",
            "date": "Sel, 26/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 293245907,
            "day": "27 Sep 2023",
            "date": "Rab, 27/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 159268091,
            "day": "28 Sep 2023",
            "date": "Kam, 28/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 251100546,
            "day": "29 Sep 2023",
            "date": "Jum, 29/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 159807043,
            "day": "30 Sep 2023",
            "date": "Sab, 30/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 234464643,
            "day": "01 Okt 2023",
            "date": "Min, 01/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 219139144,
            "day": "02 Okt 2023",
            "date": "Sen, 02/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 299749498,
            "day": "03 Okt 2023",
            "date": "Sel, 03/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 263900496,
            "day": "04 Okt 2023",
            "date": "Rab, 04/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 239512164,
            "day": "05 Okt 2023",
            "date": "Kam, 05/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 318929361,
            "day": "06 Okt 2023",
            "date": "Jum, 06/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 222848360,
            "day": "07 Okt 2023",
            "date": "Sab, 07/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 163379736,
            "day": "08 Okt 2023",
            "date": "Min, 08/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 110408778,
            "day": "09 Okt 2023",
            "date": "Sen, 09/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 283967924,
            "day": "10 Okt 2023",
            "date": "Sel, 10/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 253134198,
            "day": "11 Okt 2023",
            "date": "Rab, 11/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 208180831,
            "day": "12 Okt 2023",
            "date": "Kam, 12/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 301563079,
            "day": "13 Okt 2023",
            "date": "Jum, 13/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 269174979,
            "day": "14 Okt 2023",
            "date": "Sab, 14/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 192620230,
            "day": "15 Okt 2023",
            "date": "Min, 15/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 242682240,
            "day": "16 Okt 2023",
            "date": "Sen, 16/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 191245813,
            "day": "17 Okt 2023",
            "date": "Sel, 17/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 261659082,
            "day": "18 Okt 2023",
            "date": "Rab, 18/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 282161474,
            "day": "19 Okt 2023",
            "date": "Kam, 19/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 296212671,
            "day": "20 Okt 2023",
            "date": "Jum, 20/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 251185508,
            "day": "21 Okt 2023",
            "date": "Sab, 21/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 221703661,
            "day": "22 Okt 2023",
            "date": "Min, 22/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 236879529,
            "day": "23 Okt 2023",
            "date": "Sen, 23/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 37210236,
            "day": "24 Okt 2023",
            "date": "Sel, 24/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        }
    ]
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
    "message": "Tidak ada laporan bulan ini",
    "data": []
}
```
:::

### Used on pages

- `/dashboard`


## Get Sales Report by Last 7 days Endpoint

```http
GET report/chart/last7days
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
            "total": 191245813,
            "day": "Sel",
            "date": "Sel, 17/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 261659082,
            "day": "Rab",
            "date": "Rab, 18/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 282161474,
            "day": "Kam",
            "date": "Kam, 19/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 296212671,
            "day": "Jum",
            "date": "Jum, 20/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 251185508,
            "day": "Sab",
            "date": "Sab, 21/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 221703661,
            "day": "Min",
            "date": "Min, 22/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 236879529,
            "day": "Sen",
            "date": "Sen, 23/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 37210236,
            "day": "Sel",
            "date": "Sel, 24/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        }
    ]
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
    "message": "Tidak ada laporan bulan ini",
    "data": []
}
```
:::

### Used on pages

- `/dashboard`


## Get Sales Report by Last Week Endpoint

```http
GET report/chart/lastweek
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
            "total": 242682240,
            "day": "Sen",
            "date": "Sen, 16/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 191245813,
            "day": "Sel",
            "date": "Sel, 17/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 261659082,
            "day": "Rab",
            "date": "Rab, 18/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 282161474,
            "day": "Kam",
            "date": "Kam, 19/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 296212671,
            "day": "Jum",
            "date": "Jum, 20/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 251185508,
            "day": "Sab",
            "date": "Sab, 21/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 221703661,
            "day": "Min",
            "date": "Min, 22/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        }
    ]
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
    "message": "Tidak ada laporan bulan ini",
    "data": []
}
```
:::

### Used on pages

- `/dashboard`


## Get Sales Report by This Week Endpoint

```http
GET report/chart/thisweek
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
            "total": 234464643,
            "day": "01",
            "date": "Min, 01/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 219139144,
            "day": "02",
            "date": "Sen, 02/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 299749498,
            "day": "03",
            "date": "Sel, 03/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 263900496,
            "day": "04",
            "date": "Rab, 04/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 239512164,
            "day": "05",
            "date": "Kam, 05/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 318929361,
            "day": "06",
            "date": "Jum, 06/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 222848360,
            "day": "07",
            "date": "Sab, 07/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 163379736,
            "day": "08",
            "date": "Min, 08/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 110408778,
            "day": "09",
            "date": "Sen, 09/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 283967924,
            "day": "10",
            "date": "Sel, 10/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 253134198,
            "day": "11",
            "date": "Rab, 11/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 208180831,
            "day": "12",
            "date": "Kam, 12/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 301563079,
            "day": "13",
            "date": "Jum, 13/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 269174979,
            "day": "14",
            "date": "Sab, 14/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 192620230,
            "day": "15",
            "date": "Min, 15/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 242682240,
            "day": "16",
            "date": "Sen, 16/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 191245813,
            "day": "17",
            "date": "Sel, 17/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 261659082,
            "day": "18",
            "date": "Rab, 18/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 282161474,
            "day": "19",
            "date": "Kam, 19/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 296212671,
            "day": "20",
            "date": "Jum, 20/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 251185508,
            "day": "21",
            "date": "Sab, 21/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 221703661,
            "day": "22",
            "date": "Min, 22/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 236879529,
            "day": "23",
            "date": "Sen, 23/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 37210236,
            "day": "24",
            "date": "Sel, 24/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        }
    ]
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
    "message": "Tidak ada laporan bulan ini",
    "data": []
}
```
:::

### Used on pages

- `/dashboard`


## Get Sales Report by Last Month Endpoint

```http
GET report/chart/lastmonth
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
            "total": 314489130,
            "day": "01",
            "date": "Jum, 01/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 150652073,
            "day": "02",
            "date": "Sab, 02/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 190942607,
            "day": "03",
            "date": "Min, 03/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 93166103,
            "day": "04",
            "date": "Sen, 04/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 289267903,
            "day": "05",
            "date": "Sel, 05/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 320806178,
            "day": "06",
            "date": "Rab, 06/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 265166838,
            "day": "07",
            "date": "Kam, 07/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 273178841,
            "day": "08",
            "date": "Jum, 08/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 250758137,
            "day": "09",
            "date": "Sab, 09/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 183464076,
            "day": "10",
            "date": "Min, 10/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 172541417,
            "day": "11",
            "date": "Sen, 11/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 199392744,
            "day": "12",
            "date": "Sel, 12/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 281525413,
            "day": "13",
            "date": "Rab, 13/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 269906644,
            "day": "14",
            "date": "Kam, 14/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 300920971,
            "day": "15",
            "date": "Jum, 15/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 178935891,
            "day": "16",
            "date": "Sab, 16/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 157626409,
            "day": "17",
            "date": "Min, 17/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 192073707,
            "day": "18",
            "date": "Sen, 18/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 211940808,
            "day": "19",
            "date": "Sel, 19/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 254618967,
            "day": "20",
            "date": "Rab, 20/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 240372700,
            "day": "21",
            "date": "Kam, 21/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 253931865,
            "day": "22",
            "date": "Jum, 22/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 250773522,
            "day": "23",
            "date": "Sab, 23/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 159641158,
            "day": "24",
            "date": "Min, 24/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 195854432,
            "day": "25",
            "date": "Sen, 25/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 266026535,
            "day": "26",
            "date": "Sel, 26/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 293245907,
            "day": "27",
            "date": "Rab, 27/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 159268091,
            "day": "28",
            "date": "Kam, 28/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 251100546,
            "day": "29",
            "date": "Jum, 29/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        },
        {
            "total": 159807043,
            "day": "30",
            "date": "Sab, 30/09/2023",
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
                    "fuel_price": "Rp. 16.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 15.900"
                }
            ]
        }
    ]
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
    "message": "Tidak ada laporan bulan ini",
    "data": []
}
```
:::

### Used on pages

- `/dashboard`


## Get Sales Report by This Months Endpoint

```http
GET report/chart/thismonth
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
            "total": 234464643,
            "day": "01",
            "date": "Min, 01/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 219139144,
            "day": "02",
            "date": "Sen, 02/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 299749498,
            "day": "03",
            "date": "Sel, 03/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 263900496,
            "day": "04",
            "date": "Rab, 04/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 239512164,
            "day": "05",
            "date": "Kam, 05/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 318929361,
            "day": "06",
            "date": "Jum, 06/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 222848360,
            "day": "07",
            "date": "Sab, 07/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 163379736,
            "day": "08",
            "date": "Min, 08/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 110408778,
            "day": "09",
            "date": "Sen, 09/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 283967924,
            "day": "10",
            "date": "Sel, 10/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 253134198,
            "day": "11",
            "date": "Rab, 11/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 208180831,
            "day": "12",
            "date": "Kam, 12/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 301563079,
            "day": "13",
            "date": "Jum, 13/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 269174979,
            "day": "14",
            "date": "Sab, 14/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 192620230,
            "day": "15",
            "date": "Min, 15/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 242682240,
            "day": "16",
            "date": "Sen, 16/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 191245813,
            "day": "17",
            "date": "Sel, 17/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 261659082,
            "day": "18",
            "date": "Rab, 18/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 282161474,
            "day": "19",
            "date": "Kam, 19/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 296212671,
            "day": "20",
            "date": "Jum, 20/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 251185508,
            "day": "21",
            "date": "Sab, 21/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 221703661,
            "day": "22",
            "date": "Min, 22/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 236879529,
            "day": "23",
            "date": "Sen, 23/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        },
        {
            "total": 37210236,
            "day": "24",
            "date": "Sel, 24/10/2023",
            "fuels": [
                {
                    "fuel_name": "Pertalite",
                    "fuel_price": "Rp. 10.000"
                },
                {
                    "fuel_name": "Pertamax",
                    "fuel_price": "Rp. 14.000"
                },
                {
                    "fuel_name": "Pertamina Dex",
                    "fuel_price": "Rp. 17.900"
                },
                {
                    "fuel_name": "Pertamax Turbo",
                    "fuel_price": "Rp. 16.600"
                }
            ]
        }
    ]
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
    "message": "Tidak ada laporan bulan ini",
    "data": []
}
```
:::

### Used on pages

- `/dashboard`


## Get Total Sales by This Day Endpoint

```http
GET report/sum/thisday
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Response

::: details `200` OK
```json
{
    "total": 37210236,
    "percentage": "-84.29"
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
    "message": "Tidak ada laporan bulan ini",
    "data": []
}
```
:::

### Used on pages

- `/dashboard`

## Get Total Sales by Weekly Endpoint

```http
GET report/sum/weekly
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Response

::: details `200` OK
```json
{
    "total": 274089765,
    "percentage": "-84.31"
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
    "message": "Tidak ada laporan bulan ini",
    "data": []
}
```
:::

### Used on pages

- `/dashboard`

## Get Total Sales by This Month Endpoint

```http
GET report/sum/thismonth
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Response

::: details `200` OK
```json
{
    "total": 5601913635,
    "percentage": "-17.39"
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
    "message": "Tidak ada laporan bulan ini",
    "data": []
}
```
:::

### Used on pages

- `/dashboard`

