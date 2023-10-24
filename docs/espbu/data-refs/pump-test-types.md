<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Pump Test Types

This module is used to separate the pump test types.

::: info
<PrefixComponent/>
:::

## Get Pump Test Types Index Endpoint

```http
GET /testTypes
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
            "id": 1,
            "text": "Tera"
        },
        {
            "id": 2,
            "text": "Density"
        },
        {
            "id": 3,
            "text": "Sirkulasi"
        },
        {
            "id": 4,
            "text": "Sample C"
        }
    ]
}
```

:::

### Used on pages

- `pumptests/create`
