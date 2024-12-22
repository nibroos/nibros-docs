# 3 Back-End Patterns for Code Organization

`5 minutes read`

Tech: `PHP`, `Laravel`, `Node.js`, `Express`, `Go`, `Fiber`

In this article, I will discuss code conventions that I use to organize back-end functionality. These patterns are designed to make the code more readable, maintainable, and efficient. They are:
- Services pattern
- Service-Repository pattern
- Action pattern

## Services Pattern

The `services pattern` is a concept I use to fetch/manipulate data from the database. Rather than keeping the code in the controller or model, I organize it in a dedicated class called a service. This makes everything cleaner and more efficient.

A service has several public methods. I have the flexibility to name these methods as I see fit. Each method is designed to perform its job and provide the expected result.

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

  // and other methods...
}
```
:::

## Service-Repository Pattern

The `service-repository pattern` is a concept I use to separate the data access logic from the business logic. This pattern is useful when I need to interact with the database. The service is responsible for handling the business logic in short, while the repository is responsible for handling the data access logic.

Rather than keeping the code in the service, We can organize it in a dedicated class called a repository. So, when the repository is having a big function, we can separate it into a service, then look up at the service. Since the service is responsible for handling the business logic, it's easier to maintain and read.

Let's say we have a service that retrieves a list of users. The service would look something like this:

::: details UserServices.php
```php
namespace App\Services;

use App\Repositories\UserRepository;

class UserServices
{
  private $userRepository;
  public function __construct(UserRepository $userRepository)
  {
    $this->userRepository = $userRepository;
  }

  public function indexUser(): object
  {
    return $this->userRepository->indexUser();
  }
}
```
:::

The repository would look something like this:

::: details UserRepository.php
```php
namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserRepository
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

  // and other methods...
}
```
:::

## Action Pattern

The `action pattern` is a concept I use to handle the manipulation of data. It's a simple approach. Rather than keeping the code in the controller or model, I organize it in a dedicated class called an action to handle **long and complex** logic. Used when the logic **scope is too large** and complex to be placed in the service.

Let's say we have a controller that stores a purchase invoice with long and complex logic. The controller would look something like this:

::: details PurchaseInvoiceController.php
```php

    public function store(PurchaseInvoiceStoreRequest $request)
    {
        try {
            DB::beginTransaction();
            $result = (new PurchaseInvoiceStoreAction())->execute($request);
            DB::commit();

            return apiSuccessGetResponse($result, 'Purchase invoice created');
        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error($exception->getMessage());
            return apiErrorGetResponse($exception, 'Purchase invoice failed to store', [
                'status' => Response::HTTP_INTERNAL_SERVER_ERROR,
            ]);
        }
    }
```
:::

The action would look something like this:

::: details PurchaseInvoiceStoreAction.php
```php
    public function execute(PurchaseInvoiceStoreRequest $request)
    {
        $requestPurchaseOrderDetails = collect($request->purchase_order_details);

        $purchaseInvoicePurchaseOrderDetails = [];

        $totalAmount = 0;
        foreach ($requestPurchaseOrderDetails as $key => $value) {
            $shippingQty = $value['qty'];
            $price = $value['price'];

            $amount = $price * $shippingQty;
            $totalAmount += $amount;

            $purchaseInvoicePurchaseOrderDetails[] = [
                'p_i_id' => '',
                'p_o_d_id' => $value['p_o_d_id'],
                'qty' => $shippingQty,
                'price' => $price,
            ];
        }

        $pph23 = DB::table('pph23s')
            ->where('id', $request->pph23_id)
            ->value('percentage');

        $totalPph = $totalAmount * $pph23 / 100;
        $totalDiscount = $totalAmount * $request->input('disc', 0) / 100;

        $vat = 0;
        $vat = !!$request->is_vat ? 0.11 : 0;
        $totalVat = $totalAmount * $vat;

        $grandTotal = $totalAmount - $totalDiscount + $totalPph + $totalVat;

        $purchaseInvoice = PurchaseInvoice::create($request->validated() + [
            'created_by_id' => auth()->id(),
            'status' => 'Unpaid',
            'total_amount' => $totalAmount,
            'total_pph' => $totalPph,
            'total_vat' => $totalVat,
            'grand_total' => $grandTotal,
        ]);

        $purchaseInvoicePurchaseOrderDetailsSerialize = [];
        foreach ($purchaseInvoicePurchaseOrderDetails as $key => $value) {
            $value['p_i_id'] = $purchaseInvoice->id;
            $purchaseInvoicePurchaseOrderDetailsSerialize[] = $value;
        }

        DB::table('purchase_invoice_purchase_order_detail')->insert($purchaseInvoicePurchaseOrderDetailsSerialize);

        $this->setStatusPurchase($request);

        return $purchaseInvoice;
    }
```
:::

## Conclusion

Every project has its own code conventions. These patterns are designed to make the code more **readable, maintainable, and efficient**. You can combine **service-repository** and **action patterns** to handle complex logic if needed. 

Choose the pattern that best fits your project and team. Make sure to follow the conventions **consistently** to ensure a **clean and organized codebase**. By using these patterns, you can streamline the development process and deliver high-quality code.

I hope this article helps you understand the patterns I recommend for back-end functionality. If you have any questions or suggestions, feel free to drop your thoughts on [LinkedIn](https://www.linkedin.com/in/nibros/). 

Thank you for reading! :pen: