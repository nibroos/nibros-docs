<script setup>
import PrefixComponent from '../../components/PrefixComponent.vue'
</script>

# Authentication

This app uses bearer tokens in most of API requests. In order to get the token, user must be authenticated. This app uses built-in package [Laravel Sanctum](https://laravel.com/docs/9.x/sanctum).

::: info
<PrefixComponent/>
:::

## Preview Login Result

Every role has its own landing page. In this case, I'll take an example from a user with `Super Admin` role.

::: details Preview video

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/D6BhXi4PaV8?si=APtsCmEm3ZM6KBbm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## Preview Logout Result

The logout process will delete the token from the database.

::: details Preview video
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/81uq-k22q7g?si=4K6NcnisVd3oWGv7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
	"email": "developer@admin.com",
	"password": "password"
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
		"id": 33,
		"name": "Developer",
		"email": "developer@admin.com",
		"role": "Super Admin",
		"role_id": 1,
		"sign": "http://espbu.test/images/default-sign.png",
		"env": {
			"bussiness_name": "SPBU 44.502.23 UNIVERSITAS DIPONEGORO",
			"bussiness_address": "Jalan. Prof. Soedarto, S.H., Tembalang, Semarang",
			"logo_url": "http://espbu.test/images/1695551110-tOyHOyPn4RLUGGvEFgymuk00igIvRYd5.png"
		}
	},
	"token": "2107|D0hVYQMMmpUn3XLrerK1fjX1mSx4LQHPkI7MVWtW",
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
	"message": "Logged out"
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
	"id": 33,
	"name": "Developer",
	"email": "developer@admin.com",
	"role": "Super Admin",
	"role_id": 1,
	"sign": "http://espbu.test/images/default-sign.png",
	"env": {
		"bussiness_name": "SPBU 44.502.23 UNIVERSITAS DIPONEGORO",
		"bussiness_address": "Jalan. Prof. Soedarto, S.H., Tembalang, Semarang",
		"logo_url": "http://espbu.test/images/1695551110-tOyHOyPn4RLUGGvEFgymuk00igIvRYd5.png"
	}
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
	'token' => $user->createToken('spbuToken')->plainTextToken,
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
	'message' => 'Logged out'
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

- Create variables & functions related to login in `resources/js/composables/auth.js`
- Create a login page in `resources/js/components/Login.vue`
- Import variables & functions in auth.js to Login.vue and use it.

::: details Click to view code details
::: code-group

```js [auth.js]
import { ref, reactive } from 'vue'
import { useRouter } from "vue-router";
import { useStore } from 'vuex'

export default function useAuth() {
  const processing = ref(false)
  const validationErrors = ref({})
  const router = useRouter()
  const isLoadingUser = ref(true)
  const allowedRoles = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];

  const loginForm = reactive({
	email: '',
	password: '',
	remember: false
  })

  const submitLogin = async () => {
	if (processing.value) return

	processing.value = true
	validationErrors.value = {}

	axios.post('/api/auth/login', loginForm)
	  .then(async response => {
		loginUser(response)
	  })
	  .catch(error => {
		if (error.response?.data) {
		  validationErrors.value = error.response.data.errors
		}
	  })
	  .finally(() => processing.value = false)
  }
  
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
	  await getAbilities()
	  await router.push({ name: 'reports.index' })
	}
  }

}

```

```vue [Login.vue]
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
import { onMounted } from "vue";
import useAuth from "../composables/auth";
import { useRouter } from "vue-router";

const { loginForm, validationErrors, processing, submitLogin } = useAuth();

const router = useRouter();
const hasHistory = () => {
  return window.history.length > 2;
};

onMounted(() => {
  if (JSON.parse(localStorage.getItem("loggedIn")) === true) {
	return hasHistory()
	  ? router.go(-1)
	  : router.push({ name: "reports.index" });
  }
});

</script>
```
:::



## Logout FE Implementation

- Create variables & functions related to logout in `resources/js/composables/auth.js`
- Create a button to logout in `resources/js/layouts/Authenticated.vue`
- Import variables & functions related to logout in auth.js to Authenticated.vue and use it.

::: details Can get triggered by
- Clicking the logout button
- Token expired
- Role is not allowed to access the web
:::

::: details Click to view code details
::: code-group

```js [auth.js]
import { ref, inject } from 'vue'
import { useRouter } from "vue-router";
import { useStore } from 'vuex'
// ..

export default function useAuth() {
  // ..
  const swal = inject('$swal')
  const router = useRouter()

  const logout = async () => {
	axios.post('/api/auth/logout')
	  .then(response => router.push({ name: 'login' }))
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

```vue [Authenticated.vue]
<template>
	<!-- .. -->
	<button @click="logout">
		Keluar
	</button>
	<!-- .. -->
</template>
<script setup>
import useAuth from "../composables/auth";

// ..

const {
  // ..
  logout,
} = useAuth();

// ..
</script>
```

:::
