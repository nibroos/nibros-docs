<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Pump & ATG Diffs

::: info
<PrefixComponent/>
:::

## Get Gross Profit by Pump

```http
GET /sale/monthprofit/machine
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| search_shift_start_at | string | Search by shift start at | true |
| search_shift_end_at | string | Search by shift end at | true |
| search_shift | integer | Search by shift id | true |

### Responses

::: details `200` OK
```json
{
    "message": "Laporan ditemukan",
    "data": {
        "collection": [
            {
                "fuel_name": "Pertalite",
                "fuel_price": "7.650",
                "buy": "7.337",
                "sold_volume": "1606.88200",
                "hpp": "11789098.687660000",
                "subtotal": "12292647.300000000",
                "gross_profit": "503548.612340000",
                "diff_sold": "0.00000"
            },
            {
                "fuel_name": "Pertamax",
                "fuel_price": "9.000",
                "buy": "8.585",
                "sold_volume": "594.64000",
                "hpp": "5104728.704800000",
                "subtotal": "5351760.000000000",
                "gross_profit": "247031.295200000",
                "diff_sold": "0.00000"
            },
            {
                "fuel_name": "Pertamax Turbo",
                "fuel_price": "9.850",
                "buy": "8.821",
                "sold_volume": "5.42000",
                "hpp": "47812.042200000",
                "subtotal": "53387.000000000",
                "gross_profit": "5574.957800000",
                "diff_sold": "0.00000"
            },
            {
                "fuel_name": "Pertamina Dex",
                "fuel_price": "10.200",
                "buy": "9.697",
                "sold_volume": "68.62800",
                "hpp": "665497.382760000",
                "subtotal": "700005.600000000",
                "gross_profit": "34508.217240000",
                "diff_sold": "0.00000"
            }
        ],
        "total": {
            "start": 0,
            "end": 0,
            "sold_volume": 2275.57,
            "hpp": 17607136.81742,
            "subtotal": 18397799.900000002,
            "gross_profit": 790663.08258,
            "diff_sold": 0
        }
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
    "message": "Tidak ada laporan bulan ini",
    "data": []
}
```
:::

### Used on pages

- `/sales/gross_profit`

## Get Gross Profit by ATG

```http
GET /sale/monthprofit/atg
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| search_shift_start_at | string | Search by shift start at | true |
| search_shift_end_at | string | Search by shift end at | true |
| search_shift | integer | Search by shift id | true |

### Responses

::: details `200` OK
```json
{
    "message": "Laporan ditemukan",
    "data": {
        "collection": [
            {
                "fuel_name": "Pertalite",
                "fuel_price": "10.000",
                "buy": "9.692",
                "purchase_atg": "480000.00000",
                "sold_volume": "479481.44200",
                "hpp_atg": "4647134135.864000000",
                "subtotal_atg": "4794814420.000000000",
                "gross_profit_atg": "147680284.136000000"
            },
            {
                "fuel_name": "Pertamax",
                "fuel_price": "13.900",
                "buy": "13.495",
                "purchase_atg": "200000.00000",
                "sold_volume": "196423.96300",
                "hpp_atg": "2650741380.685000000",
                "subtotal_atg": "2730293085.700000000",
                "gross_profit_atg": "79551705.015000000"
            },
            {
                "fuel_name": "Pertamax Turbo",
                "fuel_price": "15.200",
                "buy": "14.708",
                "purchase_atg": "20000.00000",
                "sold_volume": "16284.29200",
                "hpp_atg": "239509366.736000000",
                "subtotal_atg": "247521238.400000000",
                "gross_profit_atg": "8011871.664000000"
            },
            {
                "fuel_name": "Pertamina Dex",
                "fuel_price": "18.800",
                "buy": "18.316",
                "purchase_atg": "40000.00000",
                "sold_volume": "38088.33300",
                "hpp_atg": "697607624.828160000",
                "subtotal_atg": "716060660.400000000",
                "gross_profit_atg": "18453035.571840000"
            }
        ],
        "total": {
            "start_atg": 0,
            "purchase_atg": 740000,
            "end_atg": 0,
            "sold_volume": 730278.03,
            "hpp_atg": 8234992508.11316,
            "subtotal_atg": 8488689404.499999,
            "gross_profit_atg": 253696896.38684002
        }
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
    "message": "Tidak ada laporan bulan ini",
    "data": []
}
```
:::

### Used on pages

- `/sales/gross_profit`


