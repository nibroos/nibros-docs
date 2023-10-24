# Roles

## Get Roles Endpoint

```http
GET /roles
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses

::: details `200` OK

``` json
{
    "data": [
        {
            "id": 1,
            "text": "Super Admin"
        },
        {
            "id": 2,
            "text": "Kepala SPBU"
        },
        {
            "id": 3,
            "text": "Admin Keuangan"
        },
        {
            "id": 4,
            "text": "Kepala Shift"
        },
        {
            "id": 5,
            "text": "Operator"
        },
        {
            "id": 6,
            "text": "Auditor"
        },
        {
            "id": 7,
            "text": "Owner"
        },
        {
            "id": 8,
            "text": "Kasir"
        },
        {
            "id": 9,
            "text": "Koordinasi Pelaksana"
        },
        {
            "id": 10,
            "text": "Security"
        },
        {
            "id": 11,
            "text": "Customer Service"
        }
    ]
}
```

:::


