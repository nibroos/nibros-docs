<script setup>
import PrefixComponent from '../components/PrefixComponent.vue'
</script>

# Log Activities

This module is used to track the activities of the users.

::: info
<PrefixComponent/>
:::

## Get Log Activities Index Endpoint

```http
GET /logActivities
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameter

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| page | int | Page number | false |
| search_global | string | Search by global | true |
| search_ref_table | int | Search by ref table id | true |
| search_log_id | int | Search by log id | true |
| search_period_start_at | string | Search by period start at | true |
| search_period_end_at | string | Search by period end at | true |
| search_per_page | int | Search by per page | true |
| order_column | string | Order by column | true |
| order_direction | string | Order by direction | true |

### Response

::: details `200` OK
```json
{
    "data": {
        "data": [
            {
                "id": 22,
                "action": "delete",
                "log_data": {
                    "old": {
                        "id": 2901,
                        "user_id": 19,
                        "shift_id": 1,
                        "fund_start": 0,
                        "created_at": "2023-09-27T01:00:56.000000Z",
                        "updated_at": "2023-09-27T01:00:56.000000Z",
                        "status": 0,
                        "shift_start_at": "2023-09-27 06:01:00",
                        "shift_end_at": "2023-09-27 12:59:00",
                        "shift_at": "2023-09-27",
                        "machine_parent_id": 2,
                        "is_closed": 0,
                        "kasif_id": 33,
                        "is_void_sell": 0,
                        "assistant_user_id": 28
                    }
                },
                "original_log_data": {
                    "old": {
                        "id": 2901,
                        "user_id": 19,
                        "shift_id": 1,
                        "fund_start": 0,
                        "created_at": "2023-09-27T01:00:56.000000Z",
                        "updated_at": "2023-09-27T01:00:56.000000Z",
                        "status": 0,
                        "shift_start_at": "2023-09-27 06:01:00",
                        "shift_end_at": "2023-09-27 12:59:00",
                        "shift_at": "2023-09-27",
                        "machine_parent_id": 2,
                        "is_closed": 0,
                        "kasif_id": 33,
                        "is_void_sell": 0,
                        "assistant_user_id": 28
                    }
                },
                "is_log_data_show": false,
                "ip_address": "127.0.0.1",
                "operating_system": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 Edg/117.0.2045.43",
                "action_at": "27/09/2023 13:53",
                "object_table": "Penugasan",
                "object_id": 2901,
                "full_user_name": "Achmad Arifin",
                "user_name": "Achmad Ari...",
                "user_id": 26,
                "deleted_at": null
            },
            {
                "id": 21,
                "action": "add",
                "log_data": {
                    "new": {
                        "user_id": 33,
                        "fuel_price": "13600.0000",
                        "volume": "20",
                        "type": "1",
                        "fuel_value": 272000,
                        "meter_id": "5",
                        "cleared_at": "2023-09-27 08:10",
                        "hose": 1,
                        "shift_id": "1",
                        "note": null,
                        "shift_at": "2023-09-27",
                        "verified_by_user_id": null,
                        "verified_at": null,
                        "updated_at": "2023-09-27T01:10:34.000000Z",
                        "created_at": "2023-09-27T01:10:34.000000Z",
                        "id": 12263
                    }
                },
                "original_log_data": {
                    "new": {
                        "user_id": 33,
                        "fuel_price": "13600.0000",
                        "volume": "20",
                        "type": "1",
                        "fuel_value": 272000,
                        "meter_id": "5",
                        "cleared_at": "2023-09-27 08:10",
                        "hose": 1,
                        "shift_id": "1",
                        "note": null,
                        "shift_at": "2023-09-27",
                        "verified_by_user_id": null,
                        "verified_at": null,
                        "updated_at": "2023-09-27T01:10:34.000000Z",
                        "created_at": "2023-09-27T01:10:34.000000Z",
                        "id": 12263
                    }
                },
                "is_log_data_show": false,
                "ip_address": "127.0.0.1",
                "operating_system": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 Edg/117.0.2045.41",
                "action_at": "27/09/2023 08:10",
                "object_table": "Pump Test",
                "object_id": 12263,
                "full_user_name": "Developer",
                "user_name": "Developer",
                "user_id": 33,
                "deleted_at": null
            },
            // and so on...
        ],
        "links": {
            "first": "http://espbu.test/api/logActivities?page=1",
            "last": "http://espbu.test/api/logActivities?page=2",
            "prev": null,
            "next": "http://espbu.test/api/logActivities?page=2"
        },
        "meta": {
            "current_page": 1,
            "from": 1,
            "last_page": 2,
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Sebelumnya",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/logActivities?page=1",
                    "label": "1",
                    "active": true
                },
                {
                    "url": "http://espbu.test/api/logActivities?page=2",
                    "label": "2",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/logActivities?page=2",
                    "label": "Berikutnya &raquo;",
                    "active": false
                }
            ],
            "path": "http://espbu.test/api/logActivities",
            "per_page": 10,
            "to": 10,
            "total": 13
        }
    }
}
```

:::

### Used on pages

- `/settings`

## Delete Log Activities Endpoint

```http
DELETE /logActivities/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Log Activity ID |

### Response

::: details `200` OK
```json
{
    "message": "Log Activity berhasil dihapus"
}
```

:::

### Used on pages

- `/settings`

