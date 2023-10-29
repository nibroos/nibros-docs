<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Authorization
Authorization involves defining roles and permissions to enhance security and control access to specific features.

::: info
<PrefixComponent/>
:::

## Preview of Authorization Implementation

In this case, I'll take an example from a user list page that can only be accessed by certain roles. Let's consider two roles: `Admin` and `Operator`.
- Operator, with the permission, can access the component.
    ::: details Operator view
    ![image](https://github.com/nibroos/nibros-portfolio/assets/73767596/59ae1be3-143c-4495-93f2-de175c83028c)
	:::
- Admin, without the permission, cannot access the component that are only available to the Operator.
	::: details Admin view
	![image](https://github.com/nibroos/nibros-portfolio/assets/73767596/04366d55-ecc6-4c7c-b20b-ab520552aad0)

## Get Abilities Endpoint

<span class="get-endpoint">GET</span> `/abilities`

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses
::: details `200` OK

``` json
[
    "dashboard",
    "users.index",
    "users.show",
    "users.create",
    "users.update",
    "users.delete",
    "ref_employee_types.index",
    "ref_year_types.index",
    "ref_loan_types.index",
    "mst_configs.index",
    "mst_configs.show",
    "mst_configs.create",
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

## Authorization BE Implementation

- Create 4 tables: `roles` and `permissions` with a *name* column, as well as `permission_role` and `role_user` pivot tables.
- Ensure `app.php` file contains the `providers` key, which references the AuthServiceProvider class.
    ::: details app.php
    ```php
    'providers' => [
        // Other Service Providers...
        App\Providers\AppServiceProvider::class,
        App\Providers\AuthServiceProvider::class,
    ],
    ```
    :::
- Define gates in the AuthServiceProvider class and create a registerUserAccessToGates function. This function starts by retrieving available permissions and then checks whether the user has those permissions or not.
    ::: details AuthServiceProvider.php
    ```php
    class AuthServiceProvider extends ServiceProvider
    {
        public function boot()
        {
            $this->registerPolicies();
            $this->registerUserAccessToGates();
        }

        protected function registerUserAccessToGates()
        {
            try {
                foreach (Permission::pluck('name') as $permission) {
                    Gate::define($permission, function ($user) use ($permission) {
                        return $user->roles()->whereHas('permissions', function ($q) use ($permission) {
                            $q->where('name', $permission);
                        })->count() > 0;
                    });
                }
            } catch (\Exception $e) {
                info('registerUserAccessToGates: Database not found or not yet migrated. Ignoring user permissions while booting app.');
            }
        }
    }
    ```
    :::
- i.e add the `authorize` function to the `store` function in the MstConfigController class. This function will check whether the user has the permission to create a new master config or not.
    ::: details MstConfigController.php
    ```php
    class MstConfigController extends Controller
    {
        public function store(MstConfigStoreRequest $mstConfigStoreRequest, MstConfigStoreAction $mstConfigStoreAction)
        {
            $this->authorize(MstConfig::TABLE_NAME . '.create');
            try {
                DB::beginTransaction();
                $mstConfig = $mstConfigStoreAction->execute($mstConfigStoreRequest);
                DB::commit();
                return response(['message' => 'Data master config berhasil dibuat', 'data' => new MstConfigStoreResource($mstConfig)], 201);
            } catch (\Exception $exception) {
                DB::rollBack();
                Log::error($exception->getMessage());
                return response(['message' => $exception->getMessage()], 422);
            }
        }
    }
    ```
    :::

## Authorization FE Implementation

- @casl/vue and @casl/ability packages must be installed
- Get abilities endpoint must be implemented
- Utilize the `can` function and `rules` from AbilityBuilder with `Ability` as a parameter. Insert permissions into the `can()` function and update the ability.
    ::: details useAuth.js
	```js
	import { AbilityBuilder, Ability } from '@casl/ability';
	import { ABILITY_TOKEN } from '@casl/vue';

	export default function useAuth() {
        const config = useConfig()
		const ability = inject(ABILITY_TOKEN)

        const permissions = usePermissions() // from states.js
        const bearerToken = useToken() // from states.js
            
        const getAbilities = async () => {
            assignToken()
            await $fetch(`${config.BASE_URL}/api/abilities`, {
            method: 'GET',
            credentials: 'omit',
            headers: {
                Authorization: `Bearer ${bearerToken.value}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            })
            .then(response => {
                permissions.value = response
                const { can, rules } = new AbilityBuilder(Ability)

                can(permissions.value)

                ability.update([
                    { subject: 'all', action: permissions.value }
                ])
            })
            .catch(error => {
                navigateTo('/login')
            })
        }
    }
    :::
- Call the `getAbilities` function within the authentication or user login process.
    ::: details useAuth.js
    ```js
    const loginUser = async (response) => {
        userUuid = response.data.uuid
        userUuid.replace(/['"]+/g, '')
        userProfile.value.name = response.data.name
        userProfile.value.uuid = response.data.uuid
        userProfile.value.email_verified_at = response.data.email_verified_at
        userProfile.value.groups = response.data.groups
        userProfile.value.token = response.token
        userProfile.value.group_id = response.data.group_mode_id

        if (userProfile.value.name === '') {
            localStorage.setItem('loggedIn', JSON.stringify(false))
        } else {
            if (process.client) {
                localStorage.setItem('loggedIn', JSON.stringify(true))
                localStorage.setItem('token', JSON.stringify(userProfile.value.token))
                localStorage.setItem('userUuid', JSON.stringify(userUuid))
            }
            await getAbilities() // <--- call getAbilities() here

            if (userProfile.value.groups.length === 1) {
                userProfile.value.group_id = userProfile.value.groups[0]['id']
                userProfile.value.group = userProfile.value.groups[0]['name']
            }

            if (
                userProfile.value.group_id === groupMember ||
                !userProfile.value.group_id
            ) {
                await navigateTo(`/master/users/${userUuid}`)
            } else if (userProfile.value.group_id && userProfile.value.group_id !== groupMember) {
                await navigateTo('/')
            }
        }
    }

    const getUser = async () => {
        assignToken()
        await $fetch(`${config.BASE_URL}/api/user`, {
            method: 'GET',
            credentials: 'omit',
            headers: {
                Authorization: `Bearer ${bearerToken.value}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (userProfile.value.group_id === groupMember) {
                navigateTo(`/master/users/${userProfile.value.uuid}`)
            }

            let shortUsername = response.name.substring(0, 16)
            userProfile.value.name = `${shortUsername}`
            userProfile.value.groups = response.groups
            userProfile.value.uuid = response.uuid
            userProfile.value.email_verified_at = response.email_verified_at

            userProfile.value.group_id = response.group_mode_id
            if (userProfile.value.groups.length === 1) {
                userProfile.value.group_id = userProfile.value.groups[0]['id']
                userProfile.value.group = userProfile.value.groups[0]['name']
            }
            getAbilities() // <--- call getAbilities() here
            isLoadingUser.value = false;
        })
        .catch(error => {
            localStorage.setItem('token', '')
            navigateTo('/login', { replace: true })
        })
    }
    ```
    :::
- Add condition to the component that will be displayed based on the user's permission.
    ::: details master/configs/index.vue
    ```vue
    <template>
        <LazyButtonModalCreateConfigComponent v-if="can('mst_configs.create')" />
    </template>

    <script setup>
    import { useAbility } from "@casl/vue";
    
    const { can } = useAbility();
    </script>
    ```
    :::
- This can be applied to other components or pages that require authorization.