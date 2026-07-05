# Background Jobs

Anything that doesn't need to happen inside the request — emails, stock reconciliation, scheduled work — runs off the request path. S-ERP has three complementary mechanisms.

## 1. Asynq — Redis-backed task queue

A separate **worker** process (`service/worker/server.go`) consumes a Redis-backed [Asynq](https://github.com/hibiken/asynq) queue.

- **Producers** enqueue typed tasks (payload in `tasks/payload.go`); **handlers** in `tasks/handlers.go` process them (e.g. `HandleWelcomeEmailTask`, `HandleReminderEmailTask`).
- Because the queue is durable in Redis, enqueued work survives a worker restart and is retried by Asynq.
- Used for **deferred, fire-and-forget** work triggered by the API (welcome/reminder emails and similar).

## 2. Cron scheduler — `SERVICE_TYPE=scheduler`

When the binary boots in scheduler mode it starts a **`robfig/cron`** scheduler:

- Schedules are **loaded from the `schedulers` table**, not hard-coded — so jobs are data-driven.
- `SchedulerController.ReloadSchedules()` lets the schedule set be **reloaded at runtime** without redeploying.
- On the host, OS-level jobs also run via **systemd `.service` + `.timer`** units (e.g. a daily stock task in `scripts/`), giving belt-and-braces scheduling independent of the app process.

## 3. RabbitMQ consumers — `SERVICE_TYPE=consumer`

The consumer mode runs a **`ConsumerRouter`** (`internal/consumer/route.go`) that wires up three durable consumers, with a small health endpoint on `:4010`:

| Consumer | Trigger | Job |
|---|---|---|
| `send-email-solution` | Ticket solution posted | Email the customer the resolution. |
| `sync-stock` | Inventory movement | Reconcile stock balances asynchronously. |
| `bulk-send-email-approved-invoice-maintenance` | Maintenance invoice approved | Email the approved invoice to the customer. |

### Reliability: retries + dead-letter queues

Every consumer shares the same failure policy:

```
maxRetries = 3
retryDelay = 5 * time.Second
```

On repeated failure, `handleMessageFailure` logs `[MOVE] … moving to <DLQ>` and **rejects the message without requeue**, so it lands in a **dead-letter queue** instead of hot-looping forever. This keeps a flaky mail server or a bad payload from stalling the whole consumer.

## Why three mechanisms?

They solve different problems:

- **Asynq** — app-triggered, durable, retried background tasks tied to Redis.
- **Cron / systemd** — *time*-triggered recurring work (daily stock jobs).
- **RabbitMQ** — *event*-triggered work that decouples producers from consumers across service modes, with DLQ safety.

## The pattern in practice: approve → email

The maintenance-invoice approval is the clearest example of "do the important thing synchronously, do the side-effect asynchronously":

1. **Synchronous**: approve the invoice in a DB transaction (record approver, flip status, bump `rev_no`).
2. **Publish**: emit a RabbitMQ message.
3. **Asynchronous**: the consumer sends the email — with retries and a DLQ.

A slow or failing SMTP server can never block or roll back the approval. Same shape as the [Maintenance Invoice](/s-erp/modules/invoice-maintenance) flow.
