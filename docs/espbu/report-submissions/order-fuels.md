<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Order Fuels

This module its function to determine fuel prices depends on the volume and value of the order fuel per product.

::: info
<PrefixComponent/>
:::

## Get Order Fuels Index Endpoint

```http
GET /order_fuels
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| page | integer | Page number | false |
| search_so | string | Search by SO | true |
| search_buy_start_at | string | Search by buy start at | true |
| search_buy_end_at | string | Search by buy end at | true |
| is_full_page | boolean | Is full page | true |
| search_per_page | integer | Search by per page | true |
| order_column | string | Order column | true |
| order_direction | string | Order direction | true |

### Responses

::: details `200` OK
```json
{
    "data": {
        "data": [
            {
                "id": 314,
                "user": "Vedo Yusti...",
                "user_full": "Vedo Yustinevan, S.M.",
                "role": "Admin Keuangan",
                "no_so": "4024276388",
                "buy_at": "06/04/2023",
                "total_value": 316243448,
                "status": "Selesai",
                "updated_at": "07/04/2023 18:41:11",
                "is_editable": 0,
                "is_deletable": 0
            },
            {
                "id": 313,
                "user": "Vedo Yusti...",
                "user_full": "Vedo Yustinevan, S.M.",
                "role": "Admin Keuangan",
                "no_so": "4024254333",
                "buy_at": "05/04/2023",
                "total_value": 258214138,
                "status": "Selesai",
                "updated_at": "05/04/2023 19:16:15",
                "is_editable": 0,
                "is_deletable": 0
            },
            {
                "id": 312,
                "user": "Vedo Yusti...",
                "user_full": "Vedo Yustinevan, S.M.",
                "role": "Admin Keuangan",
                "no_so": "4024242163",
                "buy_at": "04/04/2023",
                "total_value": 438895862,
                "status": "Selesai",
                "updated_at": "04/04/2023 11:48:12",
                "is_editable": 0,
                "is_deletable": 0
            },
            {
                "id": 311,
                "user": "Vedo Yusti...",
                "user_full": "Vedo Yustinevan, S.M.",
                "role": "Admin Keuangan",
                "no_so": "4024231374",
                "buy_at": "03/04/2023",
                "total_value": 438895862,
                "status": "Selesai",
                "updated_at": "03/04/2023 21:44:32",
                "is_editable": 0,
                "is_deletable": 0
            }
        ],
        "links": {
            "first": "http://espbu.test/api/order_fuels?page=1",
            "last": "http://espbu.test/api/order_fuels?page=1",
            "prev": null,
            "next": null
        },
        "meta": {
            "current_page": 1,
            "from": 1,
            "last_page": 1,
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Sebelumnya",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/order_fuels?page=1",
                    "label": "1",
                    "active": true
                },
                {
                    "url": null,
                    "label": "Berikutnya &raquo;",
                    "active": false
                }
            ],
            "path": "http://espbu.test/api/order_fuels",
            "per_page": 10,
            "to": 4,
            "total": 4
        }
    },
    "total": {
        "total_value": 1452249310
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
    "message": "Pembelian BBM tidak ditemukan",
    "data": [],
    "total": [],
    "shift": []
}
```

:::

### Used on pages

- `/orderfuels`

## Get Order Fuels Show Endpoint

```http
GET /order_fuels/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses

::: details `200` OK
```json
{
    "message": "Penebusan ditemukan",
    "data": {
        "id": 436,
        "this_user_role": 1,
        "is_approved_kaspbu": 0,
        "is_approved_owner": 0,
        "user": "Vedo Yustinevan, S.M.",
        "nip": "H.7.199203212021041001",
        "total_value": 242318793,
        "total_volume": 20000,
        "no_so": "4026246126",
        "approval_status": 3,
        "is_editable": 0,
        "is_deletable": 0,
        "buy_at": "2023-09-19",
        "buy_at_idn": "19/09/2023",
        "cleared_at": "-",
        "created_at": "13/09/2023 09:44",
        "order_fuel_products": [
            {
                "id": 1169,
                "fuel": "Pertamina Dex",
                "volume": 0,
                "price": 0,
                "product_code": "A040900040",
                "created_at": "2023-09-13 09:44",
                "timelines": [
                    {
                        "id": 396,
                        "before_volume": 0,
                        "before_price": 0,
                        "after_volume": 0,
                        "after_price": 0,
                        "created_at": "13/09/2023 09:44"
                    },
                    {
                        "id": 432,
                        "before_volume": 0,
                        "before_price": 0,
                        "after_volume": 0,
                        "after_price": 0,
                        "created_at": "20/09/2023 09:25"
                    }
                ]
            },
            {
                "id": 1170,
                "fuel": "Pertamax",
                "volume": 8000,
                "price": 103069310,
                "product_code": "A040900006",
                "created_at": "2023-09-13 09:44",
                "timelines": [
                    {
                        "id": 397,
                        "before_volume": 8000,
                        "before_price": 103017710,
                        "after_volume": 8000,
                        "after_price": 103017710,
                        "created_at": "13/09/2023 09:44"
                    },
                    {
                        "id": 433,
                        "before_volume": 8000,
                        "before_price": 103069310,
                        "after_volume": 8000,
                        "after_price": 103069310,
                        "created_at": "20/09/2023 09:25"
                    }
                ]
            },
            {
                "id": 1171,
                "fuel": "Pertalite",
                "volume": 8000,
                "price": 77612414,
                "product_code": "A040900076",
                "created_at": "2023-09-13 09:44",
                "timelines": [
                    {
                        "id": 398,
                        "before_volume": 16000,
                        "before_price": 155224828,
                        "after_volume": 16000,
                        "after_price": 155224828,
                        "created_at": "13/09/2023 09:44"
                    },
                    {
                        "id": 434,
                        "before_volume": 8000,
                        "before_price": 77612414,
                        "after_volume": 8000,
                        "after_price": 77612414,
                        "created_at": "20/09/2023 09:25"
                    }
                ]
            },
            {
                "id": 1172,
                "fuel": "Pertamax Turbo",
                "volume": 4000,
                "price": 61637069,
                "product_code": "A040900032",
                "created_at": "2023-09-13 09:44",
                "timelines": [
                    {
                        "id": 399,
                        "before_volume": 4000,
                        "before_price": 61637069,
                        "after_volume": 4000,
                        "after_price": 61637069,
                        "created_at": "13/09/2023 09:44"
                    },
                    {
                        "id": 435,
                        "before_volume": 4000,
                        "before_price": 61637069,
                        "after_volume": 4000,
                        "after_price": 61637069,
                        "created_at": "20/09/2023 09:25"
                    }
                ]
            }
        ],
        "tank_deliveries": [
            {
                "id": 3029,
                "cleared_at": "19/09/2023 22:18",
                "user": "Sobirin",
                "tank": "T2 - Pertamax",
                "volume": 8000,
                "no_lo": "8099085789"
            },
            {
                "id": 3030,
                "cleared_at": "19/09/2023 22:05",
                "user": "Sobirin",
                "tank": "T5 - Pertamax Turbo",
                "volume": 4000,
                "no_lo": "8099085790"
            }
        ],
        "progress_bar": 75,
        "kaspbu_name": "Dr. Mahfudz, S.E., M.T.",
        "kaspbu_nip": "197309101998031003",
        "owner_name": "Dwi Cahyo Utomo, S.E., M.A., Ph.D",
        "owner_nip": "197506131999031002",
        "letterhead": "268/UN7.E3.4/KU/IX/2023",
        "owner_sign": "http://espbu.test/images/default-sign.png",
        "kaspbu_sign": "http://espbu.test/images/1690146231-1EjROj6MfhgPRmuzbZwLhGhgaok0ZsPD.png",
        "additional_value": -1,
        "note_additional_value": "",
        "status": "No surat dimasukkan",
        "document_format": {
            "ministry_top": "Kemendikbud Pendidikan, Kebudayaan,",
            "ministry_bottom": "Riset, dan Teknologi",
            "address_top": "Jalan Prof Soedarto, S.H.",
            "address_bottom": "Tembalang, Semarang Kode Pos 50275",
            "phone": "Telp. 024 76480808",
            "email": "Email: spbu.undip4450223@gmail.com",
            "unit": "Unit Usaha Stasiun Pengisian Bahan Bakar Umum",
            "signed_in": "Semarang",
            "sheet": "Satu Lembar",
            "event": "Penyampaian Kebutuhan Pembelian BBM Periode",
            "requested_to_top": "Yth. Manajer TU BP UBIKAR selaku Kuasa Bendahara Usaha Komersial",
            "requested_to_bottom": "Universitas Diponergoro",
            "spbu_name": "SPBU Universitas Diponegoro",
            "user_role_funded": "Kuasa Pengguna Anggaran BP. UBIKAR",
            "supervisor_role_top": "Setara Supervisor,",
            "supervisor_role_bottom": "Unit Usaha SPBU UNDIP",
            "carbon_copy": [
                "Wakil Rektor Komunikasi dan Bisnis selaku Bendahara Usaha Komersial UNDIP",
                "Arsip",
                "Bendahara Sukpa BP. UBIKAR"
            ],
            "supervisor_full_role": "Setara Supervisor Unit Usaha SPBU UNDIP",
            "owner_unit": "Universitas Diponegoro",
            "owner_name": "Dwi Cahyo Utomo, S.E., M.A., Ph.D",
            "owner_nip": "197506131999031002",
            "owner_sign_img": "http://espbu.test/images/1677575617-JuTsfI76JDLccl6Me2r0WhTt1Nvg4QM3.png",
            "kaspbu_name": "Dr. Mahfudz, S.E., M.T.",
            "kaspbu_nip": "197309101998031003",
            "kaspbu_sign_img": "http://espbu.test/images/1690146231-1EjROj6MfhgPRmuzbZwLhGhgaok0ZsPD.png"
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
    "message": "Penebusan tidak ditemukan",
    "data": []
}
```

:::

### Used on pages

- `/orderfuels/show/{id}`
- Android Order Fuel Show Page


## Create Order Fuels Endpoint

```http
POST /order_fuels
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

::: details JSON Body
```json
{
    "buy_at": "2023-06-29",
    "total_value": 251880345,
    "order_fuel_products": [
        {
            "fuel_id": 1,
            "volume": 16000,
            "price": 155224828,
            "product_code": "A040900076"
        },
        {
            "fuel_id": 2,
            "volume": 8000,
            "price": 96655517,
            "product_code": "A040900006"
        },
        {
            "fuel_id": 3,
            "volume": 0,
            "price": 0,
            "product_code": "A040900040"
        },
        {
            "fuel_id": 4,
            "volume": 0,
            "price": 0,
            "product_code": "A040900032"
        }
    ]
}
```

:::

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| buy_at | string | Buy at | false |
| total_value | integer | Total value | false |
| order_fuel_products | array | Order fuel products | false |
| order_fuel_products.fuel_id | integer | Fuel id | false |
| order_fuel_products.volume | integer | Volume | false |
| order_fuel_products.price | integer | Price | false |
| order_fuel_products.product_code | string | Product code | false |

### Responses

::: details `200` OK
```json
{
  "message": "Data pembelian BBM berhasil dibuat"
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

::: details `422` Unprocessable Entity
```json
{
    "message": "Data pembelian BBM gagal dibuat",
    "errors": {
        "buy_at": [
            "Tanggal pembelian tidak boleh lebih kecil dari tanggal hari ini"
        ]
    }
}
```

:::

### Used on pages

- Android Order Fuel Create Page

## Update Order Fuels Endpoint

```http
PUT /order_fuels/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Body

- Admin Keuangan

::: details JSON Body (Case 1 - No SO Null)
```json
{
  "buy_at": "2023-06-29",
  "letterhead": "HJHQJWHENMZXADDF",
  "order_fuel_products": [
    {
        "id": 949,
        "fuel_id": 1,
        "volume": 16000,
        "price": 155224828,
        "product_code": "A040900076"
    },
    {
        "id": 950,
        "fuel_id": 2,
        "volume": 8000,
        "price": 96655517,
        "changed_at": null,
        "product_code": "A040900006"
    },
    {
        "id": 951,
        "fuel_id": 3,
        "volume": 0,
        "price": 0,
        "product_code": "A040900040"
    },
    {
        "id": 952,
        "fuel_id": 4,
        "volume": 0,
        "price": 0,
        "product_code": "A040900032"
    }
  ]
}
```

:::

::: details JSON Body (Case 2 - No SO filled)
```json
{
    "letterhead": "HJHQJWHENMZXADDF",
    "no_so": "403789141"
}
```

:::

::: details JSON Body (Case 3 - No SO filled, tank deliveries are not completed, value changes)
```json
{
  "additional_value": 50000,
  "note_additional_value": "Kurang/Lebih bayar",
  "changed_at": "2023-09-13",
}
```

:::

- Kepala SPBU

::: details JSON Body
```json
{
  "is_approved_kaspbu": 1,
}
```

:::

- Owner

::: details JSON Body
```json
{
  "is_approved_owner": 1,
}
```

:::

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| buy_at | string | Buy at | true |
| letterhead | string | Letterhead | true |
| no_so | string | No SO | true |
| order_fuel_products | array | Order fuel products | true |
| order_fuel_products.id | integer | Order fuel product id | true |
| order_fuel_products.fuel_id | integer | Fuel id | true |
| order_fuel_products.volume | integer | Volume | true |
| order_fuel_products.price | integer | Price | true |
| order_fuel_products.product_code | string | Product code | true |
| additional_value | integer | Additional value | true |
| note_additional_value | string | Note additional value | true |
| changed_at | string | Changed at | true |
| is_approved_kaspbu | boolean | Is approved kaspbu | true |
| is_approved_owner | boolean | Is approved owner | true |

### Responses

::: details `200` OK

```json
{
  "message": "Data pembelian BBM berhasil diubah"
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

::: details `422` Unprocessable Entity
```json
{
    "message": "Data pembelian BBM gagal diubah",
    "errors": {
        "buy_at": [
            "Tanggal pembelian tidak boleh lebih kecil dari tanggal hari ini"
        ]
    }
}
```

:::

### Used on pages

- Android edit order fuel page


## Delete Order Fuels Endpoint

```http
DELETE /order_fuels/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses

::: details `200` OK
```json
{
  "message": "Data pembelian BBM berhasil dihapus"
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

### Used on pages

- Android Order Fuel Show Page

## Get Order Fuels Android Endpoint

```http
GET /android/order_fuels
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Query Parameters

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| page | integer | Page number | false |

### Responses

::: details `200` OK
```json
{
    "data": {
        "data": [
            {
                "id": 436,
                "buy_at": "19/09/2023",
                "status": "No SO dimasukkan",
                "no_so": "4026246126",
                "letterhead": "268/UN7.E3.4/KU/IX/2023",
                "is_editable": 0,
                "is_deletable": 0
            },
            {
                "id": 429,
                "buy_at": "08/09/2023",
                "status": "Selesai",
                "no_so": "4026111296",
                "letterhead": "252/UN7.E3.4/KU/VIII/2023",
                "is_editable": 0,
                "is_deletable": 0
            },
            {
                "id": 435,
                "buy_at": "18/09/2023",
                "status": "Selesai",
                "no_so": "4026228674",
                "letterhead": "267/UN7.E3.4/KU/IX/2023",
                "is_editable": 0,
                "is_deletable": 0
            },
            {
                "id": 438,
                "buy_at": "20/09/2023",
                "status": "Disetujui Owner",
                "no_so": "",
                "letterhead": "269/UN7.E3.4/KU/IX/2023",
                "is_editable": 0,
                "is_deletable": 0
            },
            {
                "id": 434,
                "buy_at": "15/09/2023",
                "status": "Selesai",
                "no_so": "4026197412",
                "letterhead": "263/UN7.E3.4/KU/IX/2023",
                "is_editable": 0,
                "is_deletable": 0
            },
            {
                "id": 433,
                "buy_at": "14/09/2023",
                "status": "Selesai",
                "no_so": "4026185895",
                "letterhead": "262/UN7.E3.4/KU/IX/2023",
                "is_editable": 0,
                "is_deletable": 0
            },
            {
                "id": 432,
                "buy_at": "13/09/2023",
                "status": "Selesai",
                "no_so": "4026173259",
                "letterhead": "261/UN7.E3.4/KU/IX/2023",
                "is_editable": 0,
                "is_deletable": 0
            },
            {
                "id": 440,
                "buy_at": "22/09/2023",
                "status": "Disetujui Owner",
                "no_so": "",
                "letterhead": "271/UN7.E3.4/KU/IX/2023",
                "is_editable": 0,
                "is_deletable": 0
            },
            {
                "id": 439,
                "buy_at": "21/09/2023",
                "status": "Disetujui Owner",
                "no_so": "",
                "letterhead": "270/UN7.E3.4/KU/IX/2023",
                "is_editable": 0,
                "is_deletable": 0
            },
            {
                "id": 431,
                "buy_at": "12/09/2023",
                "status": "Selesai",
                "no_so": "4026159224",
                "letterhead": "260/UN7.E3.4/KU/IX/2023",
                "is_editable": 0,
                "is_deletable": 0
            }
        ],
        "links": {
            "first": "http://espbu.test/api/android/order_fuels?page=1",
            "last": "http://espbu.test/api/android/order_fuels?page=41",
            "prev": null,
            "next": "http://espbu.test/api/android/order_fuels?page=2"
        },
        "meta": {
            "current_page": 1,
            "from": 1,
            "last_page": 41,
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Sebelumnya",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/android/order_fuels?page=1",
                    "label": "1",
                    "active": true
                },
                {
                    "url": "http://espbu.test/api/android/order_fuels?page=2",
                    "label": "2",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/android/order_fuels?page=3",
                    "label": "3",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/android/order_fuels?page=4",
                    "label": "4",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/android/order_fuels?page=5",
                    "label": "5",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/android/order_fuels?page=6",
                    "label": "6",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/android/order_fuels?page=7",
                    "label": "7",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/android/order_fuels?page=8",
                    "label": "8",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/android/order_fuels?page=9",
                    "label": "9",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/android/order_fuels?page=10",
                    "label": "10",
                    "active": false
                },
                {
                    "url": null,
                    "label": "...",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/android/order_fuels?page=40",
                    "label": "40",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/android/order_fuels?page=41",
                    "label": "41",
                    "active": false
                },
                {
                    "url": "http://espbu.test/api/android/order_fuels?page=2",
                    "label": "Berikutnya &raquo;",
                    "active": false
                }
            ],
            "path": "http://espbu.test/api/android/order_fuels",
            "per_page": 10,
            "to": 10,
            "total": 405
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
    "message": "Pembelian BBM tidak ditemukan",
    "data": [],
    "total": [],
    "shift": []
}
```

:::

### Used on pages

- Android Order Fuel Index Page

## Get Order Fuel Options Endpoint

```http
GET /order_fuel/select
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses

::: details `200` OK
```json
{
    "data": [
        {
            "id": 436,
            "text": "4026246126 - 19/09/2023",
            "no_so": "4026246126"
        }
    ]
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
    "message": "Pembelian BBM tidak ditemukan",
    "data": [],
    "total": [],
    "shift": []
}
```

:::

### Used on pages

- `tankdeliveries/create`
