<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Authentication

This app uses bearer tokens in most of API requests. In order to get the token, user must be authenticated. This app uses built-in package [Laravel Sanctum](https://laravel.com/docs/9.x/sanctum).

::: info
<PrefixComponent/>
:::

## Preview Login Result

Every role has its own landing page. There are 3 roles in this application: `Admin`, `Operator`, and `Member`.

::: details Preview video

<iframe width="560" height="315" src="https://www.youtube.com/embed/-sZO6r3Azkk?si=6oC4pFqoIxGaeRN2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## Preview Logout Result

The logout process will delete the token from the database.

::: details Preview video
<iframe width="560" height="315" src="https://www.youtube.com/embed/jzabsMez4nA?si=rse9ElkmpFByL6e5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## Login Endpoint

```http
POST /auth/login
```

### Headers

Content-Type: application/json

### Body

``` json
{
	"email": "operator@operator.com",
	"password": "PasswordOPKOPER4ASI!"
}
```

| Name | Type | Description |
| ---- | ---- | ----------- |
| email | string | User email |
| password | string | User password |

::: tip Note
Attempt limited to **5 times** in **1 minute**. If reached, user must wait for 1 minute to attempt again.
:::


### Responses
::: details `200` OK

``` json
{
    "data": {
        "id": 475,
        "name": "Jamain",
        "email": "operator@operator.com",
        "uuid": "4845c",
        "email_verified_at": "2021-07-31T17:00:00.000000Z",
        "groups": [
            {
                "id": 2,
                "name": "Operator"
            },
            {
                "id": 3,
                "name": "Member"
            }
        ],
        "group_mode_id": 2
    },
    "token": "208|AeWukXWTDQiFocOxyQiCJFPKk1Eba9V9a0qUFnQd",
    "message": "Authenticated"
}
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

::: details `422` Unprocessable Content

::: danger Possibilities:

- Validations error

``` json
{
	"message": "The given data was invalid.",
	"errors": {
		"email": [
			"The email field is required."
		],
		"password": [
			"The password field is required."
		]
	}
}
```

- Rate limit reached

``` json
{
	"message": "Terlalu banyak upaya masuk. Silahkan coba lagi dalam 49 detik.",
	"errors": {
		"email": [
			"Terlalu banyak upaya masuk. Silahkan coba lagi dalam 49 detik."
		]
	}
}
```

:::

## Logout Endpoint

```http
POST /auth/logout
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>


### Responses
::: details `200` OK

``` json
{
	"message": "Sukses logout"
}
```

:::

::: details `401` Unauthorized

::: danger Possibilities:
- User already logout or is not active

``` json
{
	"message": "Unauthenticated."
}
```
:::

## Get Authenticated User Endpoint

```http
GET /user
```

### Headers

- Content-Type: application/json
- Authorization: Bearer <span v-pre>{token}</span>

### Responses

::: details `200` OK

``` json
{
    "id": 475,
    "name": "Jamain",
    "email": "operator@operator.com",
    "uuid": "4845c",
    "email_verified_at": "2021-07-31T17:00:00.000000Z",
    "groups": [
        {
            "id": 2,
            "name": "Operator"
        },
        {
            "id": 3,
            "name": "Member"
        }
    ],
    "group_mode_id": 2
}
```

:::

::: details `401` Unauthorized

::: danger Possibilities:
- User already logout or is not active

``` json
{
	"message": "Unauthenticated."
}
```
:::

## Login BE Implementation

1. Inside of `app/Models/User.php`, add `HasApiTokens` trait.

::: details Click to view the code
``` php
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
	use HasApiTokens;
}
```

:::

2. Create a login endpoint

::: details Click to view code details

- Create a route in `routes/api.php`

``` php
use App\Http\Controllers\Api\Auth\AuthController;
// ..
Route::post('/auth/login', [AuthController::class, 'loginUser']);
```

- Create LoginRequest class for validations
```sh
php artisan make:request LoginRequest
```

- Edit `app/Http/Requests/LoginRequest.php`

``` php
use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
{
	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
			'email' => ['required', 'string', 'email'],
			'password' => ['required', 'string'],
		];
	}

	/**
	 * Attempt to authenticate the request's credentials.
	 *
	 * @return void
	 *
	 * @throws \Illuminate\Validation\ValidationException
	 */
	public function authenticate()
	{
		$this->ensureIsNotRateLimited();

		if (! Auth::attempt($this->only('email', 'password'), $this->boolean('remember'))) {
			RateLimiter::hit($this->throttleKey());

			throw ValidationException::withMessages([
				'email' => trans('auth.failed'),
			]);
		}

		RateLimiter::clear($this->throttleKey());
	}

	/**
	 * Ensure the login request is not rate limited.
	 *
	 * @return void
	 *
	 * @throws \Illuminate\Validation\ValidationException
	 */
	public function ensureIsNotRateLimited()
	{
		if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
			return;
		}

		event(new Lockout($this));

		$seconds = RateLimiter::availableIn($this->throttleKey());

		throw ValidationException::withMessages([
			'email' => trans('auth.throttle', [
				'seconds' => $seconds,
				'minutes' => ceil($seconds / 60),
			]),
		]);
	}

	/**
	 * Get the rate limiting throttle key for the request.
	 *
	 * @return string
	 */
	public function throttleKey()
	{
		return Str::lower($this->input('email')).'|'.$this->ip();
	}
}

```


- Create loginUser method in `app/Http/Controllers/AuthController.php`
``` php
public function loginUser(LoginRequest $request)
{
  $request->authenticate();
  $request->session()->regenerate();
  $user = auth()->user();

  return (new UserAuthResource($user))->additional([
	'token' => $user->createToken('koperasiToken')->plainTextToken,
	'message' => 'Authenticated'
  ], 201);
}
```

:::


## Logout BE Implementation

- Create a route in `routes/api.php`
::: details Click to view the code
``` php
use App\Http\Controllers\Api\Auth\AuthController;

Route::group(['middleware' => 'auth:sanctum'], function () {
	// ..
	Route::post('/auth/logout', [AuthController::class, 'logoutUser']);
});
```
:::

- Create logoutUser method in `app/Http/Controllers/AuthController.php`

::: details Click to view the code
``` php
public function logoutUser(Request $request)
{
  $request->user()->currentAccessToken()->delete();
  return response()->json([
	'message' => 'Sukses logout'
  ], 200);
}
```
:::

## Get Authenticated User BE Implementation

- Create a route in `routes/api.php`

::: details Click to view the code
``` php
use App\Http\Controllers\Api\Auth\AuthController;

// ..
Route::group(['middleware' => 'auth:sanctum'], function () {
	// ..
	Route::get('/user', [AuthController::class, 'authUser']);
});
```
:::

- Create authUser method in `app/Http/Controllers/AuthController.php`

::: details Click to view the code
``` php
public function authUser(Request $request)
{
	$user = $request->user();
	return UserAuthResource::make($user)->resolve();
}
```
:::

## Login FE Implementation

- use `useConfig.js` to get `BASE_URL`.
- Create variables & functions related to login and import useConfig.js to `client/composables/useAuth.js`
- Create a login page in `client/components/login.vue`
- Import variables & functions in useAuth.js to login.vue and use it.

::: details Click to view code details
::: code-group

```js [useAuth.js]

export default function useAuth() {
  const config = useConfig()
  const processing = ref(false)
  const validationErrors = ref({})
  const isLoadingUser = ref(true)

  const groupMember = 3
	let userUuid = ''
	const userProfile = useUserProfile() // from states.js
  const bearerToken = useToken() // from states.js
  const assignToken = () => {
    if (process.client) { // nodejs process
      let token = {}
      token = localStorage.getItem('token')
      if (!!token) {
        bearerToken.value = JSON.parse(localStorage.getItem('token'))
      } else {
        bearerToken.value = ''
      }
    }
  }

  const loginForm = reactive({
	email: '',
	password: '',
	remember: false
  })

  const submitLogin = async () => {
    if (processing.value) return

    processing.value = true
    validationErrors.value = {}

    await $fetch(`${config.BASE_URL}/sanctum/csrf-cookie`, {
      method: 'GET',
      credentials: 'omit'
    })

    await $fetch(`${config.BASE_URL}/api/auth/login`, {
      method: 'POST',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: loginForm
    }).then(async response => {
      loginUser(response)
    })
      .catch(error => {
        if (error.response?._data) {
          validationErrors.value = error.response._data.errors
        }
        processing.value = false
      })
      .finally(() => processing.value = false)
  }
  
  const loginUser = async (response) => {
    userUuid = response.data.uuid
    userUuid.replace(/['"]+/g, '')
    userProfile.value.name = response.data.name
    userProfile.value.uuid = response.data.uuid
    userProfile.value.email_verified_at = response.data.email_verified_at
    userProfile.value.groups = response.data.groups
    userProfile.value.token = response.token
    userProfile.value.group_id = response.data.group_mode_id

    if (userProfile.value.name === '') { // check if states is empty
      localStorage.setItem('loggedIn', JSON.stringify(false))
    } else {
      if (process.client) {
        localStorage.setItem('loggedIn', JSON.stringify(true))
        localStorage.setItem('token', JSON.stringify(userProfile.value.token))
        localStorage.setItem('userUuid', JSON.stringify(userUuid))
      }
      await getAbilities()

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

}

```

```vue [login.vue]
<template>
	<form @submit.prevent="submitLogin">
		<input type="email" v-model="loginForm.email">
		<input type="password" v-model="loginForm.password">
		<button :disabled="processing">
			<div v-if="processing">Mengecek data</div>
			<div v-else>Masuk</div>
		</button>
	</form>
</template>
<script setup>

const { loginForm, validationErrors, processing, submitLogin, groupMember} = useAuth();

onMounted(() => {
  if (process.client) { // if its accessed from client
    let token = {};
    token = localStorage.getItem("token");
    if (!!token) { // check if token in localstorage is exists
      bearerToken.value = JSON.parse(localStorage.getItem("token"));
      if (!!bearerToken.value) {
        if (
          userProfile.value.group_id === groupMember ||
          !userProfile.value.group_id
        ) { // check if user's active role is member
          let userUuid = userProfile.value.uuid;
          userUuid.replace(/['"]+/g, "");
          navigateTo(`/master/users/${userUuid}`);
        } else if (
          userProfile.value.group_id &&
          userProfile.value.group_id !== groupMember
        ) { // check if user's active role is not member
          navigateTo("/");
        }
      }
    } else {
      bearerToken.value = "";
      navigateTo("/login");
    }
  }
});
</script>
```
:::



## Logout FE Implementation

- Create variables & functions related to logout in `client/composables/useAuth.js`
- Create a button to logout in `client/layouts/authenticated.vue`
- Import variables & functions related to logout in useAuth.js to authenticated.vue and use it.

::: details Can get triggered by
- Clicking the logout button
- Token expired
:::

::: details Click to view code details
::: code-group

```js [useAuth.js]
export default function useAuth() {
  // ..
	const config = useConfig()
  const processing = ref(false)
  const swal = inject('$swal')
	
  const userProfile = useUserProfile()
  const usersModal = useUsersModal()
  const permissions = usePermissions()
  const bearerToken = useToken()
  
  const logout = async () => {
    assignToken()
    if (processing.value) return

    processing.value = true

    $fetch(`${config.BASE_URL}/api/auth/logout`, {
      method: 'POST',
      credentials: 'omit',
      headers: {
        Authorization: `Bearer ${bearerToken.value}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (process.client) {
          localStorage.setItem('token', JSON.stringify(''))
          bearerToken.value = JSON.parse(localStorage.getItem('token'))
          usersModal.value.authGroupSelect = false
          usersModal.value.authGroupManualSelect = false
        }
        userProfile.value.name = ''
        userProfile.value.email = ''
        userProfile.value.group = ''
        userProfile.value.group_id = ''
        userProfile.value.token = ''
        navigateTo('/login')
      })
      .catch(error => {
        swal({
          icon: 'error',
          title: error.response.status,
          text: error.response.statusText
        })
      })
      .finally(() => {
        processing.value = false
      })
  }

}
```

```vue [authenticated.vue]
<template>
	<!-- .. -->
	<button @click="logout">
		Keluar
	</button>
	<!-- .. -->
</template>
<script setup>
// ..

const {
  // ..
  logout,
} = useAuth();

// ..
</script>
```

:::
