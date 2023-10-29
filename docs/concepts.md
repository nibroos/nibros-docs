# Concepts

Every developer has their own concepts. They are the foundation of how I work. This leads to a consistent and efficient workflow. The purpose are the same, to make the code easy to read, maintain, and solve the problem. 

In short, I'm using 2 concepts as a Backend Developer:
- Services pattern
- Action pattern

## Retrieving Data (Back-end)

The `services pattern` is a concept I use to fetch data from the database. It's a simple approach. Rather than keeping the code in the controller or model, I organize it in a dedicated class called a service. This makes everything cleaner and more efficient.

a service has several public methods. I have the flexibility to name these methods as I see fit. Each method is designed to perform its job and provide the expected result.

Let's say we have a controller that retrieves a list of users. The controller would look something like this:

::: details UserController.php
```php
use App\Services\UserServices;
use App\Http\Resources\UserIndexResource;

class UserController extends Controller
{
  private $userService;
  public function __construct(UserServices $userServices)
  {
    $this->userService = $userServices;
  }

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

  public function operatorOptions()
  {
    $this->authorize('reports.view');
    $users = $this->userService->operatorOptions();
    if ($users->isNotEmpty()) {
      return response(['results' => TaskSelectUsersResource::collection($users)->resolve()]);
    } else {
      return response(['message' => 'User tidak ditemukan', 'data' => []], 404);
    }
  }

  // and other methods...
}
```
:::

The service would look something like this:

::: details UserServices.php
```php
namespace App\Services;

use App\Models\LogActivity;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserServices
{
  public function indexUser(): object
  {
    $orderColumn = request('order_column', 'users.workstart');
    if (!in_array($orderColumn, ['users.workstart', 'users.name', 'users.email', 'users.nik'])) {
      $orderColumn = 'workstart';
    }
    $orderDirection = request('order_direction', 'desc');
    if (!in_array($orderDirection, ['asc', 'desc'])) {
      $orderDirection = 'desc';
    }
    $users = DB::table('users')
      ->join('role_user', 'users.id', '=', 'role_user.user_id')
      ->join('roles', 'role_user.role_id', '=', 'roles.id')
      ->select(
        'users.id as id',
        'users.name as name',
        'users.email as email',
        'roles.id as role_id',
        'roles.name as role_name',
        DB::raw('CAST(users.nik AS CHAR) as nik'),
        'users.workstart as workstart',
        'users.workleave as workleave'
      )
      ->whereRaw('users.deleted_at IS NULL')
      ->when(request('search_workstart'), function ($query) {
        $query->whereRaw('users.workstart like ?',  ["%" . request('search_workstart') . "%"]);
      })
      ->when(request('search_name'), function ($query) {
        $query->whereRaw('users.name like ?',  ["%" . request('search_name') . "%"]);
      })
      ->when(request('search_email'), function ($query) {
        $query->whereRaw('users.email like ?',  ["%" . request('search_email') . "%"]);
      })
      ->when(request('search_nik'), function ($query) {
        $query->whereRaw('users.nik like ?',  ["%" . request('search_nik') . "%"]);
      })
      ->when(request('search_role'), function ($query) {
        $query->whereRaw('roles.id = ?', request('search_role'));
      })
      ->when(request('search_global'), function ($query) {
        $query->where(function ($q) {
          $q->where('users.nik', 'like', '%' . request('search_global') . '%')
            ->orWhere('users.name', 'like', '%' . request('search_global') . '%')
            ->orWhere('users.email', 'like', '%' . request('search_global') . '%');
        });
      })
      ->orderBy($orderColumn, $orderDirection)
      ->groupBy('users.id')
      ->paginate(10);

    return $users;
  }

  public function operatorOptions(): object
  {
    $option = [Role::ID_KASIF, Role::ID_OPERATOR];

    return User::has('roles')
      ->whereIn('role_id', $option)
      ->when(request('search_name'), function ($query) {
        $query->whereRaw('users.name like ?',  ["%" . request('search_name') . "%"]);
      })
      ->when(request('user_except'), function ($query) {
        $query->whereNotIn('users.id', request('user_except'));
      })
      ->select('id', 'name')
      ->get()
      ->sortBy('name');
  }

  // and other methods...
}
```
:::

After getting the results, using resource class to transform the data into a format that separates the data from the controller. It's useful when the data wanted to be shown in the front-end. Here is an example of the resource class:

::: details UserIndexResource.php
```php
namespace App\Http\Resources;

// ..
use Illuminate\Http\Resources\Json\JsonResource;

class UserIndexResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => Str::limit($this->name, 16, '...'),
            'email' => $this->email,
            'role' => [
                'id' => $this->role_id,
                'name' => $this->role_name,
            ],
            'nik' => $this->nik,
            'workstart' => Carbon::parse($this->workstart)->translatedFormat('d F Y'),
            'workleave' => Carbon::parse($this->workleave)->translatedFormat('d F Y'),
        ];
    }
}
```
:::

## Storing, Updating, Deleting Data (Back-end)

Since in the beginning I'm using a concept called `action pattern`. It keeps controllers and models skinny. Instead of leaving the logic in the controller or putting it in a model, move the logic to a dedicated class called an action.

An action is a very simple class. It only has one public method: execute. You could name that method whatever you want. The execute method takes the parameters it needs to do its job and returns the result. 

Let's say we have a controller that creates a new user. The controller would look something like this:

::: details UserController.php
```php
use App\Actions\Users\UserStoreAction;
use App\Http\Requests\Users\UserStoreRequest;
use App\Http\Resources\UserStoreResource;

class UserController extends Controller{
  // ...
  public function store(UserStoreRequest $request, UserStoreAction $userStoreAction)
  {
    $this->authorize('users.create');
    try {
      DB::beginTransaction();
      $user = $userStoreAction->execute($request);
      DB::commit();
      return response(['message' => 'Data akun berhasil dibuat', 'data' => new UserStoreResource($user)], 200);
    } catch (\Exception $exception) {
      DB::rollBack();
      Log::error($exception->getMessage());
      return response(['message' => $exception->getMessage()], 422);
    }
  }
}
```
:::

The action would look something like this:

::: details UserStoreAction.php
```php
namespace App\Actions\Users;

// use ...

class UserStoreAction
{
  public function execute(UserStoreRequest $request): User
  {
    $user = $this->createUser($request);
    $this->syncRoles($user, $request);

    return $user;
  }

  private function createUser(UserStoreRequest $request): User
  {
    return User::create($request->validated());
  }

  private function syncRoles(User $user, Request $request): array
  {
    return $user->roles()->sync($request->input('roles', []));
  }
}
```
:::

The controller is responsible for handling the request and response. It's also responsible for handling any exceptions that might be thrown by the action.

In addition, Validation is handled to the request class. It's a simple class that extends the FormRequest class. It's responsible for validating and authorizing the request. 

::: details UserStoreRequest.php
```php
namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
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
      'name' => ['required', 'string', 'max:191'],
      'email' => ['required', 'string', 'email', 'max:191', Rule::unique('users')],
      'nip' => ['string', 'nullable', 'max:191'],
      'nik' => ['integer', 'nullable'],
      'address' => ['string', 'nullable', 'max:191'],
      'workstart' => ['date', 'nullable'],
      'workleave' => ['date', 'nullable'],
      'password' => [
        'required', 'string', 'min:6',
        'max:191',
        'regex:/[a-z]/',      // must contain at least one lowercase letter
        'regex:/[A-Z]/',      // must contain at least one uppercase letter
        'regex:/[0-9]/',      // must contain at least one digit
      ]
    ];
  }
}
```
:::

If the stored data wanted to be shown after, there is resource that extends the JsonResource class. It's responsible for transforming the data into a format that's easy to consume by the client.

::: details UserStoreResource.php
```php
namespace App\Http\Resources;

use Carbon\Carbon;
use App\Http\Resources\RoleResource;
use Illuminate\Http\Resources\Json\JsonResource;

class UserStoreResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'email' => $this->email,
            'roles' => RoleResource::collection($this->roles),
            'nip' => $this->nip,
            'nik' => $this->nik,
            'address' => $this->address,
            'workstart' => Carbon::parse($this->workstart)->translatedFormat('Y-m-d'),
            'workleave' => Carbon::parse($this->workleave)->translatedFormat('Y-m-d'),
        ];
    }
}
```
:::
