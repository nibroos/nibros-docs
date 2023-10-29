<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Authorization
Authorization involves defining roles and permissions to enhance security and control access to specific features.

::: info
<PrefixComponent/>
:::

## Preview of Authorization Implementation

In this case, I'll take an example from a user list page that can only be accessed by certain roles. Let's consider two roles: `Super Admin` and `Shift Manager`.
- Super Admin, with the permission, can access this page.
  ::: details Super Admin view
  ![image](https://github.com/nibroos/nibros-portfolio/assets/73767596/0f32bd25-1bd1-4698-9f67-14ec7dc002a9)
	:::
- Shift Manager, without the permission, cannot access this page, even when attempting to fetch user data using Postman.
	::: details Shift Manager view
	- Frontend preview:
	![image](https://github.com/nibroos/nibros-portfolio/assets/73767596/074d36bd-a986-4f9f-be89-3de4da817d9f)<br>

	- Postman response:
	![image](https://github.com/nibroos/nibros-portfolio/assets/73767596/e1ee6c34-2c49-49b0-b5d6-a268684a629d)
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
- In UserController, within the method responsible for fetching the list of users (index), use the authorize helper provided by Laravel with the permission name as a parameter. This secures the endpoint according to permissions.
    ::: details UserController.php
    ```php
    class UserController extends Controller
    {
        public function index()
        {
            $this->authorize('users.index');
            $users = $this->userService->indexUser();
            if ($users->isNotEmpty()) {
                return UserIndexResource::collection($users);
            } else {
                return response(['message' => 'Akun tidak ditemukan', 'data' => []], 404);
            }
        }
    }
    ```
    :::

## Authorization FE Implementation

- @casl/vue and @casl/ability packages must be installed
- Get abilities endpoint must be implemented
- Utilize the `can` function and `rules` from AbilityBuilder with `Ability` as a parameter. Insert permissions into the `can()` function and update the ability.
    ::: details auth.js
	```js
	import { ref, reactive, inject } from 'vue'
	import { AbilityBuilder, Ability } from '@casl/ability';
	import { ABILITY_TOKEN } from '@casl/vue';

	export default function useAuth() {
		
        const ability = inject(ABILITY_TOKEN)

            // .. other variables and functions
            
        const getAbilities = async () => {
            axios.get('/api/abilities')
            .then(response => {
                const permissions = response.data
                const { can, rules } = new AbilityBuilder(Ability)

                can(permissions)

                ability.update(rules)
            })
            .catch(error => {
                router.push({ name: 'login' })
            })
        }
    }
    :::
- Call the `getAbilities` function within the authentication or user login process.
    ::: details auth.js
    ```js
    const loginUser = async (response) => {
        user.name = response.data.data.name
        user.role = response.data.data.role
        user.role_id = response.data.data.role_id
        user.env.bussinessName = response.data.data.env.bussinessName
        user.env.bussinessAddress = response.data.data.env.bussinessAddress

        if (isInArray(user.role_id, allowedRoles) === false) {
            logout()
        }
        if (user.name === '') {
            localStorage.setItem('loggedIn', JSON.stringify(false))
        } else {
            localStorage.setItem('loggedIn', JSON.stringify(true))
            await getAbilities() // <--- call getAbilities() here
            await router.push({ name: 'reports.index' })
        }
    }

    const getUser = () => {
        axios.get('/api/user')
        .then(response => {
            user.name = response.data.name
            let shortUsername = user.name.substring(0, 16)
            user.name = `${shortUsername} ...`
            user.role = response.data.role
            user.role_id = response.data.role_id
            user.env = response.data.env

            store.commit('setAuthUser', user)

            if (isInArray(user.role_id, allowedRoles) === false) {
                logout()
            }
            getAbilities() // <--- call getAbilities() here
            isLoadingUser.value = false;
        })
        .catch(error => {
            router.push({ name: 'login' })
        })
    }
    ```
    :::
- On the user list page, in the script section, import the `can` function, and use it with the permission as a parameter within a `v-if` condition
    ::: details Users/Index.vue
    ```vue
    <template>
        <div v-if="can('users.index')">
            <!-- user list -->
        </div>
        <NotFoundComponent v-else />
    </template>

    <script setup>
        import { useAbility } from '@casl/vue'
        const { can } = useAbility()

        // other variables and functions
    </script>
    ```
    :::
- This can be applied to other components or pages that require authorization.
