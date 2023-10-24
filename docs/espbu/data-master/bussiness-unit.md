<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Bussiness Unit

This module is used to manage business unit profiles. Any changes made will affect all document prints within the application.

::: info
<PrefixComponent/>
:::

## Get Bussiness Unit Endpoint

::: tip Note

This endpoint is used to get the business unit profile and document format.

:::
```http
GET /bussinessUnits/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Bussiness Unit ID |

### Response

::: details `200` OK

```json
{
    "message": "Hasil ditemukan",
    "data": {
        "id": 1,
        "bussiness_name": "SPBU 44.502.23 UNIVERSITAS DIPONEGORO",
        "bussiness_address": "Jalan. Prof. Soedarto, S.H., Tembalang, Semarang",
        "logo_url": "http://espbu.test/images/1695551110-tOyHOyPn4RLUGGvEFgymuk00igIvRYd5.png",
        "login_img_url": "http://espbu.test/images/1695551110-sZsaZpfzVdiJYGeJPbwVhoaZWGxzH1i6.jpg",
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
                "Bendahara Sukpa BP. UBIKAR",
                "Arsip"
            ],
            "supervisor_full_role": "Setara Supervisor Unit Usaha SPBU UNDIP",
            "owner_unit": "Universitas Diponegoro",
            "owner_name": "Dwi Cahyo Utomo, S.E., M.A., Ph.D",
            "owner_nip": "197506131999031002",
            "owner_sign_img": "http://espbu.test/images/1677575617-JuTsfI76JDLccl6Me2r0WhTt1Nvg4QM3.png",
            "kaspbu_name": "Dr. Mahfudz, S.E., M.T.",
            "kaspbu_nip": "197309101998031003",
            "kaspbu_sign_img": "http://espbu.test/images/1690146231-1EjROj6MfhgPRmuzbZwLhGhgaok0ZsPD.png"
        },
        "updated_at": "2023-10-22 05:15:16"
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

### Used on pages

- `/settings`

## Update Bussiness Unit Endpoint

```http
PUT /bussinessUnits/{id}
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Path Variable

| Name | Type | Description |
| --- | --- | --- |
| id | int | Bussiness Unit ID |

### Body

- Update Bussiness Unit Profile

::: details JSON Body
```json
{
    "bussiness_name": "SPBU 44.502.23 UNIVERSITAS DIPONEGORO",
    "bussiness_address": "Jalan. Prof. Soedarto, S.H., Tembalang, Semarang",
    "logo_url": "",
    "changed_at": "2023-10-22 05:15:16",
    "_method": "PUT"
}
```
:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| bussiness_name | string | Bussiness Unit Name | false |
| bussiness_address | string | Bussiness Unit Address | false |
| logo_url | File | Bussiness Unit Logo URL | true |
| changed_at | string | Bussiness Unit Date Changed At | false |
| _method | string | HTTP Method | true |

- Update Bussiness Unit Document Format

::: details JSON Body
```json
{
    "document_format": "{\"ministry_top\":\"Kemendikbud Pendidikan, Kebudayaan,\",\"ministry_bottom\":\"Riset, dan Teknologi\",\"address_top\":\"Jalan Prof Soedarto, S.H.\",\"address_bottom\":\"Tembalang, Semarang Kode Pos 50275\",\"phone\":\"Telp. 024 76480808\",\"email\":\"Email: spbu.undip4450223@gmail.com\",\"unit\":\"Unit Usaha Stasiun Pengisian Bahan Bakar Umum\",\"signed_in\":\"Semarang\",\"sheet\":\"Satu Lembar\",\"event\":\"Penyampaian Kebutuhan Pembelian BBM Periode\",\"requested_to_top\":\"Yth. Manajer TU BP UBIKAR selaku Kuasa Bendahara Usaha Komersial\",\"requested_to_bottom\":\"Universitas Diponergoro\",\"spbu_name\":\"SPBU Universitas Diponegoro\",\"user_role_funded\":\"Kuasa Pengguna Anggaran BP. UBIKAR\",\"supervisor_role_top\":\"Setara Supervisor,\",\"supervisor_role_bottom\":\"Unit Usaha SPBU UNDIP\",\"carbon_copy\":[\"Wakil Rektor Komunikasi dan Bisnis selaku Bendahara Usaha Komersial UNDIP\",\"Bendahara Sukpa BP. UBIKAR\",\"Arsip\"],\"supervisor_full_role\":\"Setara Supervisor Unit Usaha SPBU UNDIP\",\"owner_unit\":\"Universitas Diponegoro\"}",
    "changed_at": "2023-10-22 05:15:16",
    "_method": "PUT"
}
```
:::

| Name | Type | Description | Nullable |
| --- | --- | --- | --- |
| document_format | string | JSON object of document format | false |
| changed_at | string | Bussiness Unit Date Changed At | false |
| _method | string | HTTP Method | true |

### Response

::: details `200` OK
  
```json
{
  "message": "Data berhasil diperbarui"
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
    "message": "Data tidak valid",
    "errors": {
        "bussiness_name": [
            "Nama Unit Usaha harus diisi"
        ],
        "bussiness_address": [
            "Alamat Unit Usaha harus diisi"
        ],
        "changed_at": [
            "Tanggal perubahan harus diisi"
        ]
    }
}
```

:::

### Used on pages

- `/settings`