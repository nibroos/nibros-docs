<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Fund Report Status

This module is used to change the status of the fund report after the fund report is responded by the employees.

::: info
<PrefixComponent/>
:::

## Get Fund Report Status Options Endpoint

```http
GET /api/answers
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
            "text": "Menunggu Kep.Shift"
        },
        {
            "id": 2,
            "text": "Disetujui Kep.Shift"
        },
        {
            "id": 3,
            "text": "Butuh Perbaikan Kasir"
        },
        {
            "id": 4,
            "text": "Dicek Kasir"
        },
        {
            "id": 5,
            "text": "Dicek Adm Keu"
        },
        {
            "id": 6,
            "text": "Disetujui Kep. SPBU"
        }
    ]
}
```

:::

### Used on pages

- `/reports`