<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Gross Profit

To know gross profit, this module can be one of the future reference to know the business performance.

::: info
<PrefixComponent/>
:::

## Get Gross Profit Endpoint

```http
GET /sale/grossprofit
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| search_shift_start_at | string | Search by periode start at | false |
| search_shift_end_at | string | Search by periode end at | false |
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
                "std_profit": "308",
                "sold_volume": "175950.46000",
                "gross_profit_std": 54192742,
                "fuel_price": "10.000",
                "subtotal_atg": 1759504600,
                "effective_hpp": 1705311858,
                "effective_gross_profit": 54192742,
                "variance": 0,
                "perc_gross_profit_effective": 0.030800000181869375,
                "perc_gross_profit_std": "0.03080000",
                "lr_effective": -1.818693737276611e-10
            },
            {
                "fuel_name": "Pertamax",
                "std_profit": "406",
                "sold_volume": "90800.79000",
                "gross_profit_std": 36865121,
                "fuel_price": "13.300",
                "subtotal_atg": 1207650507,
                "effective_hpp": 1170785386,
                "effective_gross_profit": 36865121,
                "variance": 0,
                "perc_gross_profit_effective": 0.03052631600476776,
                "perc_gross_profit_std": "0.03052632",
                "lr_effective": 3.9952322387903916e-9
            },
            {
                "fuel_name": "Pertamax Turbo",
                "std_profit": "493",
                "sold_volume": "5762.56000",
                "gross_profit_std": 2839055,
                "fuel_price": "15.000",
                "subtotal_atg": 86438400,
                "effective_hpp": 83599345,
                "effective_gross_profit": 2839055,
                "variance": 0,
                "perc_gross_profit_effective": 0.03284483516585222,
                "perc_gross_profit_std": "0.03284483",
                "lr_effective": -5.165852218214084e-9
            },
            {
                "fuel_name": "Pertamina Dex",
                "std_profit": "492",
                "sold_volume": "13712.98000",
                "gross_profit_std": 6744181,
                "fuel_price": "15.400",
                "subtotal_atg": 211179892,
                "effective_hpp": 204435711,
                "effective_gross_profit": 6744181,
                "variance": 0,
                "perc_gross_profit_effective": 0.03193571573566294,
                "perc_gross_profit_std": "0.03193571",
                "lr_effective": -5.735662937655928e-9
            }
        ],
        "total": {
            "sold_volume": 286226.79,
            "gross_profit_std": 100641099,
            "subtotal_atg": 3264773399,
            "effective_hpp": 3164132300,
            "effective_gross_profit": 100641099,
            "variance": 0
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




