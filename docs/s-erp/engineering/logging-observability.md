# Logging & Observability

S-ERP was instrumented for operations from the start — not as an afterthought. There are four pillars: **logs**, **metrics**, **traces**, and **panic recovery**.

## Logging

- **Application logs** use Go's standard `log` package across the service (startup, service-type selection, RabbitMQ/scheduler/consumer lifecycle, task processing). Consumer and scheduler modes log their own lifecycle so you can tell which mode a container is running.
- **Structured/searchable logs** ship to **Elasticsearch** (wired into the Docker Compose stack) for aggregation and querying across services.
- **Consumer diagnostics** — the RabbitMQ router logs retry attempts and `[MOVE] … moving to DLQ` when a message exhausts its retries, so poison messages are visible rather than silent.

## Metrics — Prometheus + Grafana

- A dedicated **Prometheus metrics endpoint** runs on `:9090`, registered in `main.go` against a custom registry.
- `PromDurationMiddleware` records **request latency labelled by path**, so per-endpoint p50/p95 is visible in Grafana.
- Infra metrics come from **`node-exporter`** (host) and **`postgres-exporter`** (database).
- Grafana ships with importable dashboards: **PostgreSQL (9628)**, **Node Exporter (1860)**, and an HTTP-request dashboard.

> ⚠️ **Cardinality note:** labelling metrics by `c.Path()` is safe today because routes are static `POST`s. If `/:id`-style routes are ever added, path cardinality would explode — switch to the route *template* as the label then. (Tracked in [Improvements](/s-erp/engineering/improvements).)

## Tracing — Jaeger / OpenTracing

- `initJaeger("s-erp-api")` sets up a Jaeger tracer at boot.
- `JaegerTracingMiddleware` starts a **span per request** and threads it down through controller → service → repository, so a slow list query or a heavy invoice recompute shows up as a nested span in the Jaeger UI.
- Tracing is what makes the concurrent count+select pattern and cross-layer calls debuggable in production.

## Panic recovery

Failures are contained at two layers so one bad request can't take down the process:

1. A custom **`SafetyMiddleware`** wraps the handler chain.
2. Fiber's built-in **`recover`** captures panics and logs the **stack trace** (`Panic recovered: … Stack trace: …`).

There are also deliberate **test-panic routes** (`/api/v1/test-panic`, `/test-panic-message`) used to verify recovery works — which, being public, are themselves flagged in [Improvements](/s-erp/engineering/improvements).

## Load testing

Observability is paired with load generation so the dashboards have something to show:

- **k6** — scripts in `load-test/` (`k6 run script.js`).
- **vegeta** — `vegeta attack -targets=target.txt -rate=1000 -duration=30s`.

Running these against the Prometheus/Grafana stack is how request-latency and DB-saturation behaviour was validated.

## What I'd add next

Real observability plumbing is in place, but the honest gaps (structured/leveled logging instead of `log.Printf`, request IDs propagated to logs, and log-level config) are noted in [Improvements](/s-erp/engineering/improvements).
