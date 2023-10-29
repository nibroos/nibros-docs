<script setup>
import PrefixComponent from '../components/PrefixComponent.vue'
</script>

# Export PDF

All in one API endpoint, no need to create a new API endpoint for each module. To be able to style the PDF file, by using the laravel blade template file. The PDF file is generated using [wkhtmltopdf](https://wkhtmltopdf.org/).

::: info
<PrefixComponent/>
:::

## Generate PDF Endpoint

```http
GET /export/pdf
```

### Query Parameters

| Name | Type | Description | Nullable |
| :--- | :--- | :--- | :--- |
| requests | string | JSON string, contains the request data | false |

### Response


::: details `200` OK

File PDF

:::

::: details `403` Forbidden
```json
{
    "message": "Anda tidak memiliki akses untuk mengunduh laporan ini"
}
```
:::

### Sample PDF File:

Since wkhtmltopdf is not installed on my hosting server, I can't generate the PDF file. But I have the sample PDF file that I generated from the production server [E-SPBU UNDIP](https://espbu.undip.id/).

| Name | Link | Description |
| :--- | :--- | :--- |
| Fund Report | [2023-10-25_Laporan Dana.pdf](https://github.com/nibroos/nibros-portfolio/files/13172749/2023-10-25_Laporan.Dana.pdf) | Fund report on 26 October 2023 (24KB) |
| Sales Report | [2023-10-18to2023-10-25_Laporan Settlement.pdf](https://github.com/nibroos/nibros-portfolio/files/13172787/2023-10-18to2023-10-25_Laporan.Settlement.pdf) | Sales report on 18 October 2023 to 25 October 2023 (28KB) |
| Profit Loss Report | [2023-01-01to2023-01-31-Laporan Laba Rugi.pdf](https://github.com/nibroos/nibros-portfolio/files/13172803/2023-01-01to2023-01-31-Laporan.Laba.Rugi.pdf) | Profit loss report on 1 January 2023 to 31 January 2023 (97KB) |
| Tank Delivery Report | [2023-09-01to2023-09-30_Laporan Bongkaran.pdf](https://github.com/nibroos/nibros-portfolio/files/13172812/2023-09-01to2023-09-30_Laporan.Bongkaran.pdf) | Tank delivery report on 1 September 2023 to 30 September 2023 (45KB) |
| Pump Test Report | [2023-01-01to2023-09-30_Laporan Pump Test.pdf](https://github.com/nibroos/nibros-portfolio/files/13172821/2023-01-01to2023-09-30_Laporan.Pump.Test.pdf) | Pump test report on 1 January 2023 to 30 September 2023, it generate 3260 rows of data (415KB) |
| Oil Movement Report | [2023-10-17_S3_Oil Movement Report.pdf](https://github.com/nibroos/nibros-portfolio/files/13172857/2023-10-17_S3_Oil.Movement.Report.pdf) | Oil movement report on 17 October 2023 3rd Shift (25KB) |

### Used on pages

- `/reports` (Fund Report)
- `/sales` (Sales Report)
- `/profitloss` (Profit Loss Report)
- `/tankdeliveries` (Tank Delivery Report)
- `/pumptests` (Pump Test Report)
- `/opnames` (Oil Movement Report)

## Generate PDF Backend Implementation

- Assume that [Laravel Snappy](https://github.com/barryvdh/laravel-snappy) is already installed

- Create a route in `routes/api.php`

::: details api.php
```php
Route::group(['middleware' => 'auth:sanctum'], function () {
  // ..
  Route::get('export/pdf', [PrintController::class, 'exportPDF']);
})
```
:::

- In the `exportPDF` function, I use the `try-catch` block to catch the exception, so the API will return the error response instead of throwing an exception.

::: details PrintController.php
```php
  public function exportPDF(Request $request)
  {
    try {
      // ..
    } catch (\Exception $exception) {
      return response()->json(['message' => $exception->getMessage()], 500);
    }
  }
```
:::

- This method used by multiple modules, so the execution time may take long time. To prevent the request timeout, set the maximum execution time to 60 seconds, since I already tested it to generate 15.000+ rows of data of pump test report from 2021 to 2023, it only took 10-26 seconds in the staging server.

::: details PrintController.php
```php
set_time_limit(60);
ini_set('max_execution_time', 60);
ini_set('default_socket_timeout', 60);
```
:::

- Decode the request data from the query parameter

::: details PrintController.php
```php
$decodedRequest = json_decode($request->requests);
foreach ($decodedRequest as $key => $value) {
  $request[$key] = $value;
  $searchOptions[$key] = $value;
}
```
:::

- Use conditional statement to determine which module is requested

::: details PrintController.php
```php
if ($title === 'Laporan Pump Test') {
  $pumpTestServices = new PumpTestServices;
  $pumpTestsBuilder = $pumpTestServices->indexPumpTest(2, $request);
  $pumpTestsObject = $pumpTestServices->getIndexPumpTest($pumpTestsBuilder);
  $mainData = addNumberEachRowOnGet($pumpTestsObject);
  $mainDataResource = PumpTestIndexResource::collection($pumpTestsObject)->resolve();
  $mainData = collect($mainDataResource);

  $isPumpTestBetweenDateUnvalidated = $pumpTestServices->isPumpTestBetweenDateUnvalidated($request, (int) $request->search_shift);

  if (!$isPumpTestBetweenDateUnvalidated) {
    $validator = $pumpTestServices->getUserValidator($request);
    $validatorName = $validator['checked_by'];
    $validatorSign = $validator['checked_sign'];
  }

  $isPumpTestBetweenDateUnverified = $pumpTestServices->isPumpTestBetweenDateUnverified($request, (int) $request->search_shift);

  if (!$isPumpTestBetweenDateUnverified) {
    $verifier = $pumpTestServices->getUserVerifier($request);
    $verifierName = $verifier['verified_by'];
    $verifierSign = $verifier['verified_sign'];
  }

  $pumpTestsByFuel = $pumpTestServices->indexPumpTest(1, $request);
  $pumpTestsObjectByFuel = $pumpTestServices->getIndexPumpTest($pumpTestsByFuel);

  $volume = $pumpTestServices->getTotal($pumpTestsObject, 'volume');
  $fuelValue = $pumpTestServices->getTotal($pumpTestsObject, 'fuel_value');

  $optionalData = [
    'total' => [
      'volume' => $volume,
      'fuel_value' => $fuelValue,
    ],
    'group_by_fuel' => [
      'data' => PumpTestByFuelIndexResource::collection($pumpTestsObjectByFuel)
    ],
  ];
} elseif ($title === 'Laporan Bongkaran') {
  // getting the data to get generated into PDF
} elseif ($title === 'Laporan Dana') {
  // getting the data to get generated into PDF
} elseif ($title === 'Laporan Settlement') {
  // getting the data to get generated into PDF
} elseif ($title === 'Oil Movement Report' || $title === 'Stock Opname') {
  // getting the data to get generated into PDF
} elseif ($title === 'Laporan Laba Rugi') {
  // getting the data to get generated into PDF
}
```
:::

- After getting the data, pass it to the blade template file also setup the layout of the PDF file

::: details PrintController.php
::: code-group
```php [PrintController.php]

$data = [
  'bussinessName' => $bussinessName,
  'bussinessAddress' => $bussinessAddress,
  'printTitle' => $title,
  'searchOptions' => $searchOptions,
  'shiftID' => $shift,
  'dateRange' => [
    $dateRangeStart,
    $dateRangeEnd
  ],
  'mainData' => $mainData,
  'total' => $total,
  'optionalData' => $optionalData,
  'timeNow' => now()->format('d/m/Y HH:mm'),
  'portraitTitles' => ['Laporan Dana', 'Laporan Settlement', 'Stock Opname'],
  'now' => now()->format('d/m/Y H:i'),
  'validator' => [
    'validatorName' => $validatorName,
    'validatorSign' => $validatorSign,
  ],
  'verifier' => [
    'verifierName' => $verifierName,
    'verifierSign' => $verifierSign,
  ],
  'kopSurat' => $kopSurat,
];


$filename = "$dateRange-$shiftName-$title.pdf";
view()->share('data', $data);

$paperOrientation = 'landscape';
if (in_array($title, $data['portraitTitles'])) {
  $paperOrientation = 'portrait';
}
$pdf = App::make('snappy.pdf.wrapper');
$pdf->loadView('print.print-layout', compact('data'));
$pdf->setOptions([
  'page-size' => 'a4',
  'orientation' => $paperOrientation,
  'footer-html' => view('print.print-layout-footer', compact('data')),
  'margin-top' => '10mm',
  'margin-bottom' => '10mm',
]);

return $pdf->stream($filename);
```

``` blade [print-layout.blade.php]
@extends('layouts.app')
@section('content')
  <div style="font-family: ui-serif, Georgia, Cambria, 'Times New Roman', 'Times, serif' !important">
    <div class="flex flex-col w-full font-serif">
      <div>
        <div class="flex flex-col w-full h-max" id="printable-area">
          @if (!!$data['kopSurat'])
            @include('print.print-kop-surat', ['kopSurat' => $data['kopSurat']])
          @else
            <div class="font-sans tracking-tight font-bold uppercase text-sm">{{ $data['bussinessName'] }}</div>
            <div class="font-sans tracking-tight font-bold uppercase text-sm">{{ $data['bussinessAddress'] }}</div>
          @endif
          <div class="font-semibold font-sans uppercase text-center mt-1 text-xl"
            style="letter-spacing: 0.04em !important;">
            {{ $data['printTitle'] }}
          </div>
          <div class="font-bold tracking-tight text-base">Period :
            @if (!!$data['shiftID'])
              <span>Shift {{ $data['shiftID'] }} - </span>
            @endif
            <span>[ {{ $data['dateRange'][0] }}</span>
            @if ($data['dateRange'][0] !== $data['dateRange'][1])
              <span>- {{ $data['dateRange'][1] }}</span>
            @endif ]
          </div>
          @if ($data['printTitle'] === 'Laporan Dana')
            @include('print.print-reports', [
                'mainData' => $data['mainData'],
                'dateRangeStart' => $data['dateRange'][0],
                'dateRangeEnd' => $data['dateRange'][1],
                'shiftID' => $data['shiftID'],
                'total' => $data['optionalData']['total'],
                'timeNow' => $data['timeNow'],
                'optionalData' => $data['optionalData'],
                'searchOptions' => $data['searchOptions'],
                'verifier' => $data['verifier'],
                'validator' => $data['validator'],
            ])
          @elseif ($data['printTitle'] === 'Laporan Pump Test')
            @include('print.print-pumptests', [
                'mainData' => $data['mainData'],
                'dateRangeStart' => $data['dateRange'][0],
                'dateRangeEnd' => $data['dateRange'][1],
                'shiftID' => $data['shiftID'],
                'total' => $data['optionalData']['total'],
                'timeNow' => $data['timeNow'],
                'optionalData' => $data['optionalData'],
                'verifier' => $data['verifier'],
                'validator' => $data['validator'],
            ])
          @elseif ($data['printTitle'] === 'Laporan Bongkaran')
            @include('print.print-tankdeliveries', [
                'mainData' => $data['mainData'],
                'dateRangeStart' => $data['dateRange'][0],
                'dateRangeEnd' => $data['dateRange'][1],
                'shiftID' => $data['shiftID'],
                'total' => $data['optionalData']['group_by_fuel']['total'],
                'timeNow' => $data['timeNow'],
                'optionalData' => $data['optionalData'],
                'verifier' => $data['verifier'],
                'validator' => $data['validator'],
            ])
          @elseif ($data['printTitle'] === 'Laporan Settlement')
            @include('print.print-sales', [
                'mainData' => $data['mainData'],
                'dateRangeStart' => $data['dateRange'][0],
                'dateRangeEnd' => $data['dateRange'][1],
                'shiftID' => $data['shiftID'],
                'total' => $data['optionalData']['total'],
                'timeNow' => $data['timeNow'],
                'optionalData' => $data['optionalData']['opts'],
                'searchOptions' => $data['searchOptions'],
                'verifier' => $data['verifier'],
                'validator' => $data['validator'],
            ])
          @elseif ($data['printTitle'] === 'Oil Movement Report')
            @include('print.print-opnames', [
                'mainData' => $data['mainData'],
                'dateRangeStart' => $data['dateRange'][0],
                'dateRangeEnd' => $data['dateRange'][1],
                'shiftID' => $data['shiftID'],
                'total' => $data['optionalData']['total'],
                'timeNow' => $data['timeNow'],
                'optionalData' => $data['optionalData'],
                'searchOptions' => $data['searchOptions'],
                'verifier' => $data['verifier'],
                'validator' => $data['validator'],
            ])
          @elseif ($data['printTitle'] === 'Stock Opname')
            @include('print.print-stock-opnames', [
                'mainData' => $data['mainData'],
                'dateRangeStart' => $data['dateRange'][0],
                'dateRangeEnd' => $data['dateRange'][1],
                'shiftID' => $data['shiftID'],
                'total' => $data['optionalData']['total'],
                'timeNow' => $data['timeNow'],
                'optionalData' => $data['optionalData'],
                'searchOptions' => $data['searchOptions'],
            ])
          @elseif ($data['printTitle'] === 'Laporan Laba Rugi')
            @include('print.print-profitlosses', [
                'mainData' => $data['mainData'],
                'total' => $data['total'],
            ])
          @endif
          <script type="text/php">
          use Carbon\Carbon;
          $nowTime = Carbon::parse(now()->toDateTimeString())->format('d/m/Y H:i');
          <?php
          if (in_array($data['printTitle'], $data['portraitTitles'])) {
          ?>
            $pdf->page_text(15, 815, 'Printed : ' . $nowTime, '', 6, array(0, 0, 0));
            $pdf->page_text(275, 815, "Generated by E-SPBU", '', 6, array(0, 0, 0));
            $pdf->page_text(550, 815, "Page: {PAGE_NUM} of {PAGE_COUNT}", '', 6, array(0, 0, 0));
          <?php
          } else {
          ?>
            if (isset($pdf)) {
              $pdf->page_text(15, 570, 'Printed : ' . $nowTime, '', 6, array(0, 0, 0));
              $pdf->page_text(395, 570, "Generated by E-SPBU", '', 6, array(0, 0, 0));
              $pdf->page_text(790, 570, "Page: {PAGE_NUM} of {PAGE_COUNT}", '', 6, array(0, 0, 0));
            }
          <?php
          }
          ?>
        </script>
        </div>
      </div>
    </div>
  </div>
@endsection

```

``` blade [print-pumptests.blade.php]
<div>
  <table id="tableprint" class="font-sans table-auto w-full border-collapse" style="border: none; padding: 0;">
    <thead>
      <tr
        style="
        border-top: 1px solid #111827;
        border-bottom: 1px solid #111827;
        border-left: none;
        border-right: none;">
        <th class="text-base whitespace-nowrap text-center">
          #
        </th>
        <th class="text-base whitespace-nowrap text-left">
          Pump
        </th>
        <th class="text-base whitespace-nowrap text-left">
          Hose
        </th>
        <th class="text-base whitespace-nowrap text-left">
          Produk
        </th>
        <th class="text-base whitespace-nowrap text-left">
          Uji
        </th>
        <th class="text-base whitespace-nowrap text-right">
          Harga (Rp.)
        </th>
        <th class="text-base whitespace-nowrap text-right">
          Volume (Rp.)
        </th>
        <th class="text-base whitespace-nowrap text-right">
          Nilai (Rp.)
        </th>
        <th class="text-base whitespace-nowrap text-right">
          Selesai
        </th>
      </tr>
    </thead>
    <tbody>
      @foreach ($mainData as $report)
        <tr class="!border-0" style="border: none;">
          <td class="whitespace-nowrap text-base text-gray-900 !border-0 text-center">
            {{ $report['row_number'] }}
          </td>
          <td class="whitespace-nowrap text-base text-gray-900 !border-0">
            {{ $report['machine'] }}
          </td>
          <td class="whitespace-nowrap text-base text-gray-900 !border-0">
            {{ $report['hose'] }}
          </td>
          <td class="whitespace-nowrap text-base text-gray-900 !border-0">
            {{ $report['fuel'] }}
          </td>
          <td class="whitespace-nowrap text-base text-gray-900 !border-0">
            {{ $report['type'] }}
          </td>
          <td class="whitespace-nowrap text-base text-gray-900 !border-0 text-right">
            {{ number_format($report['fuel_price'], 0, '.', ',') }}
          </td>
          <td class="whitespace-nowrap text-base text-gray-900 !border-0 text-right">
            {{ $report['volume'] }}
          </td>
          <td class="whitespace-nowrap text-base text-gray-900 !border-0 text-right">
            {{ number_format($report['fuel_value'], 0, '.', ',') }}
          </td>
          <td class="whitespace-nowrap text-base text-gray-900 !border-0 text-right">
            {{ $report['cleared_at'] }}
          </td>
        </tr>
    </tbody>
    @endforeach
    <tr class="text-base tableprint-tfoot"
      style="
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-left: none;
    border-right: none;
    ">
      <td class="py-1 font-bold text-right">
      </td>
      <td class="py-1 font-bold text-right">
      </td>
      <td class="py-1 font-bold text-right">
      </td>
      <td class="py-1 font-bold text-right">
      </td>
      <td class="py-1 font-bold text-right">
      </td>
      <td class="py-1 font-bold text-right">
        TOTAL
      </td>
      <td class="py-1 font-bold text-right">
        {{ number_format($total['volume'], 2, '.', ',') }}
      </td>
      <td class="py-1 font-bold text-right">
        {{ number_format($total['fuel_value'], 0, '.', ',') }}
      </td>
      <td class="py-1 font-bold text-right">
      </td>
    </tr>
  </table>

  <table id="half-tableprint" class="mt-4" style="border: none; padding: 0;">
    <thead>
      <tr
        style="
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        border-left: none;
        border-right: none;">
        <th class="text-base whitespace-nowrap text-left">
          Jenis BBM
        </th>
        <th class="text-base whitespace-nowrap text-right">
          Volume (L)
        </th>
        <th class="text-base whitespace-nowrap text-right">
          Nilai (Rp.)
        </th>
      </tr>
    </thead>
    <tbody>
      @foreach ($optionalData['group_by_fuel']['data'] as $fuel)
        <tr style="border: none; padding: 0;">
          <td class="whitespace-nowrap text-base text-gray-900">{{ $fuel->fuel }}
          </td>
          <td class="whitespace-nowrap text-base text-gray-900 text-right">
            {{ number_format((float) $fuel->volume, 2, '.', ',') }}
          </td>
          <td class="whitespace-nowrap text-base text-gray-900 text-right">
            {{ number_format((float) $fuel->fuel_value, 0, '.', ',') }}
          </td>
        </tr>
      @endforeach
    </tbody>
    <tfoot>
      <tr
        style="
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        border-left: none;
        border-right: none;">
        <th class="text-base whitespace-nowrap text-right">
          TOTAL
        </th>
        <th class="text-base whitespace-nowrap text-right">
          {{ number_format($total['volume'], 2, '.', ',') }}
        </th>
        <th class="text-base whitespace-nowrap text-right">
          {{ number_format($total['fuel_value'], 0, '.', ',') }}
        </th>
      </tr>
    </tfoot>
  </table>

  @include('print.print-signature', ['verifier' => $verifier])
</div>

```

:::

## Generate PDF Frontend Implementation

- Create a composable function to generate the PDF file, named `exportPDF` in `print.js`

::: details print.js
```js
export default function usePrints() {
  const prints = ref({})
  const isLoadingPrint = ref(false);
  const dateYMDFormat = "YYYY-MM-DD"

  const exportPDF = async (
    requests,
    periode_start_at,
    periode_end_at,
    title,
    shift = null
  ) => {
    isLoadingPrint.value = true
    fetch('/api/export/pdf?requests=' + JSON.stringify(requests))
      .then(response => response.blob())
      .then(blob => {
        let startAt = moment(periode_start_at).format(dateYMDFormat)
        let endAt = moment(periode_end_at).format(dateYMDFormat)

        let date = `${startAt}to${endAt}`
        if (startAt === endAt) {
          date = startAt
        }

        let filename = `${date}` + `_` + `${title}.pdf`
        if (shift) {
          filename = `${date}_` + `S` + `${shift}_${title}.pdf`
        }
        // Create a temporary URL for the blob
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${filename}`);
        document.body.appendChild(link);

        // Trigger the click event to download the file
        link.click();

        // Clean up the temporary link element
        link.parentNode.removeChild(link);
        isLoadingPrint.value = false
      })
      .catch(error => {
        isLoadingPrint.value = false;
      })
      .finally(() => {
        isLoadingPrint.value = false
      });
  }

  return {
    prints, exportPDF, isLoadingPrint
  }
}
```
:::

- Import the `exportPDF` function to the page component

::: details .vue
```vue
<script setup>
import usePrints from "../../composables/prints";

// other code..
const { prints, exportPDF, isLoadingPrint } = usePrints();

</script>

```
:::

- Create a button and the on click function to generate the PDF file

::: details .vue
```vue
<template>
  <!-- .. -->
    <div v-if="!isLoadingPumpTests && pumpTests.data.length > 0
      " class="flex flex-row gap-2">
      <button v-if="isLoadingPrint"
        class="opacity-75 cursor-not-allowed mt-4 mb-2 flex w-max flex-row justify-center rounded-lg border border-rose-500 bg-rose-100 p-2 text-rose-400 hover:bg-rose-200 transition ease-in-out items-center">
        <div
          class="inline-block animate-spin w-4 h-4 mr-2 border-t-2 border-t-white border-r-2 border-r-white border-b-2 border-b-white border-l-rose-500 border-l-2 rounded-full">
        </div>
        <span class="ml-1 text-sm font-extrabold">Export PDF</span>
      </button>
      <button v-else v-on:click="onExportPDF()"
        class="mt-4 mb-2 flex w-max flex-row justify-center rounded-lg border border-rose-500 bg-rose-100 p-2 text-rose-500 hover:bg-rose-200 transition ease-in-out items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path fill="currentColor" fill-rule="evenodd"
            d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173c.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38a.574.574 0 0 1-.238.241a.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181c.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084c0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592a1.14 1.14 0 0 1-.196.422a.8.8 0 0 1-.334.252a1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" />
        </svg>
        <span class="ml-1 text-sm font-extrabold">Export PDF</span>
      </button>

    </div>
  <!-- .. -->
</template>

<script setup>
// ..

function onExportPDF() {
  let print_title = "Laporan Pump Test";
  let request = {
    print_title: print_title,
    shift_id: search_shift.value,
    date_range_start: search_cleared_at.value[0],
    date_range_end: search_cleared_at.value[1],
    param: JSON.stringify({
      page: pageNumber.value,
      search_machine: search_machine.value,
      search_shift: search_shift.value,
      search_cleared_start_at: search_cleared_at.value[0],
      search_cleared_end_at: search_cleared_at.value[1],
      is_full_page: is_full_page.value,
      search_per_page: search_per_page.value,
      order_column: order_column.value,
      order_direction: order_direction.value,
    }),
  };

  exportPDF(request, search_cleared_at.value[0], search_cleared_at.value[1], print_title, search_shift.value);
}
</script>

```
:::

## Preview

<iframe width="560" height="315" src="https://www.youtube.com/embed/S7c_CJVNOuQ?si=o59Ln9WXmjyDh7Tf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>