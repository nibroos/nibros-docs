<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Authorization
Authorization involves defining roles and permissions to enhance security and control access to specific features.

::: info
<PrefixComponent/>
:::

## Get Abilities Endpoint

<span class="get-endpoint">GET</span> `/abilities`

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses
::: details `200` OK

``` json
[
    "reports.create",
    "reports.update",
    "reports.view",
    "users.index",
    "users.create",
    "users.update",
    // and so on...
]
```
:::

::: details `401` Unauthorized

::: danger Possibilities:
- User is not active

``` json
{
	"message": "Unauthenticated."
}
```
:::
