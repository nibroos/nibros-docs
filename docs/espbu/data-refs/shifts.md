<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Shifts

This module is used to separate data related to shifts.

::: info
<PrefixComponent/>
:::

## Get Shifts Options Endpoint

```http
GET /shifts
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Response

::: details `200` OK

```json
{
    "message": "Daftar shift ditemukan",
    "data": [
        {
            "id": 1,
            "text": "1"
        },
        {
            "id": 2,
            "text": "2"
        },
        {
            "id": 3,
            "text": "3"
        },
        {
            "id": 4,
            "text": "4"
        },
        {
            "id": 5,
            "text": "5"
        }
    ]
}
```

:::

### Used on pages

- `/tasks`
- `/tasks/create`
- `/opnames`
- `/opnames/create`
- `/pumptests`
- `/pumptests/create`
- `/tankdeliveries/create`
- `/tankdeliveries/edit`
- `/reports`
- `/sales`
- `/sales/gross_profit`
- `/sales/profit_comparison`