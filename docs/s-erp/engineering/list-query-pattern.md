# List / Query Pattern

Every one of the 41 modules exposes a paginated, filterable, sortable list. They all share one pattern — on the backend and the front end. This page documents that pattern as a **design concept**, and is honest about where it needs to evolve.

## Backend: filter bag → concurrent count + select

### 1. Request → filter bag

A `ConvertRequestToFilters` middleware flattens the JSON request body into a `map[string]string` ("the filter bag"). Every list handler receives the same shape:

```jsonc
{
  "name": "acme",           // ILIKE search
  "order_column": "id",     // sort column
  "order_direction": "asc", // sort direction
  "per_page": "20",
  "page": "1",
  "ids": "1,2,3"            // IN (...) filter
}
```

### 2. Repository builds the query

The repository composes the SQL in stages:

```
base SELECT
  + WHERE clauses      (ILIKE search → parameterised $n placeholders)
  + ORDER BY           (order_column + order_direction)
  + LIMIT / OFFSET     (per_page / page)
```

### 3. Count and select run concurrently

The list runs the **total count** and the **page of rows** in two goroutines and waits on a `WaitGroup`, so a paginated response costs roughly one query's worth of latency rather than two serial ones:

```go
var wg sync.WaitGroup
wg.Add(2)
go func() { defer wg.Done(); /* SELECT rows  */ }()
go func() { defer wg.Done(); /* SELECT count */ }()
wg.Wait()
```

## Frontend: persisted filter state

The Nuxt SPA mirrors the same contract and — importantly — **remembers it**:

- Table filters, sort, page, and per-page live in a **Pinia** store per module.
- **`@pinia-plugin-persistedstate`** persists that state, so a refresh or a round-trip to a detail page and back **keeps the user's filters and position**.
- Composables `useEncodeQuery` / `useDecodeQuery` (over `qs`) serialise the filter state to/from the request and the URL.
- `useApi` / `useMyFetch` wrap Axios with the auth token and the standard list contract.

This "state filter-saving" is the same UX principle used across my other projects — the user never loses their place.

## Why this pattern

- **Uniformity** — every module's list behaves identically, so the UI table component is truly reusable and onboarding a new module is mechanical.
- **Performance** — concurrent count+select, parameterised search, DB-side pagination.
- **DX** — one mental model for 41 modules.

## The honest caveat

This same pattern is **copy-pasted** across 36+ repositories rather than extracted, which has two consequences worth stating plainly:

1. **Security** — `order_column` / `order_direction` and `IN (...)` lists are interpolated as strings. Column names and sort direction *can't* be bound parameters, so they must be **whitelisted**. A safe helper (`GetStringOrDefaultFromArray`) exists but is only used in a few repositories; the rest are injectable. This is the top item in [Improvements](/s-erp/engineering/improvements).
2. **Maintainability** — a fix has to be applied 36+ times, and the two big list repositories (`inventory_repository.go` ~4,700 lines, `sales_order_repository.go` ~4,000) are hard to review.

**The fix is the same as the win:** extract this into *one* generic list-query builder that takes an allowed-columns set + filter spec + pagination, implement the safe/whitelisted version once, and delete 36 copies. That single refactor both closes the SQL-injection class and removes thousands of lines. It's documented as the highest-leverage change in [Improvements](/s-erp/engineering/improvements).
