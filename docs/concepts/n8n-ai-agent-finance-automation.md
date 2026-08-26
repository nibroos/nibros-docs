# n8n AI Agent with Google Sheets and PostgreSQL

`7 minutes read` · Aug 23, 2026

Tech: `n8n`, `PostgreSQL`, `Telegram Bot API`, `Google Sheets API`, `Docker`, `SQL`, `OpenAI-compatible LLM`

## Summary

A Telegram bot that records finance and inventory into PostgreSQL by talking,
and mirrors it into Google Sheets.

```
Telegram ─> AI Agent ─> 11 tools ─> SQL functions ─> PostgreSQL
                                                        │
                                          sync_jobs ─> n8n ─> Google Sheets
```

Three rules hold the whole thing up:

1. **Postgres is the source of truth.** Sheets is a mirror that may lag.
2. **The agent never writes SQL.** It calls one of eleven fixed tools.
3. **A failed sync never rolls back a saved transaction.** The books do not
   depend on Google being reachable.

You type *"beli 20 kaos polos dari ABC 1.5jt pakai BCA"* and a purchase exists:
an expense, a stock-in, an audit row and a queued sync — all committed together
or not at all.

---

## The tool layer

The agent has no SQL access. Each tool is one node that calls one SQL function
with a single JSON payload. Validation, the account ledger, the inventory
ledger, the audit row and the sync job all happen **inside that one call**,
which Postgres runs as a single transaction.

| Tool | Function | |
| --- | --- | --- |
| `create_expense` | `fn_create_expense` | money out that is not stock |
| `create_income` | `fn_create_income` | money in that is not a stock sale |
| `create_purchase` | `fn_create_purchase` | expense **and** stock-in, atomically |
| `create_sale` | `fn_create_sale` | income **and** stock-out; refuses to oversell |
| `transfer_money` | `fn_transfer` | between your own accounts; not an expense |
| `void_transaction` | `fn_void_transaction` | reverses; never deletes |
| `get_balances` | `fn_get_balances` | per account and total |
| `get_report` | `fn_get_report` | period totals by category / platform |
| `get_inventory` | `fn_get_inventory` | stock and value from the ledger |
| `find_transactions` | `fn_find_transactions` | filtered search |
| `list_master_data` | `fn_list_master_data` | what exists, so it stops duplicating |

This is the security boundary as much as the API. A model that can compose SQL
can compose *any* SQL; a model that can call `fn_create_expense` can only create
an expense, and only one the function agrees is valid.

---

## Design decisions

**One JSON payload per tool, not one parameter per field.** The Postgres node
splits `queryReplacement` on commas and drops empty values, so an omitted
optional field would silently shift every positional parameter — a wrong amount
against a wrong account, with no error. A single JSON value takes the node's
`isJSON` path and survives intact.

**Idempotency key = Telegram message id + `md5(payload)`.** The message id alone
would make a second expense in one message look like a retry. The hash alone
would block a genuinely repeated identical purchase. Both together are correct.

**Unknown accounts are refused; unknown categories are created.** Categories,
platforms, suppliers and products are open-ended — inventing one is right.
An account is not: silently creating "BCU" because someone fat-fingered "BCA"
puts money somewhere that does not exist.

**Names are normalised before lookup**, so `Gopay`, `GO-PAY` and `Go Pay` all
find the one `GoPay`.

**Stock is derived from `inventory_movements`, never a mutated counter.**
Balances are derived from `account_ledger`. A derived number can be recomputed
and proven; a mutated counter can only be trusted.

**Void, never delete.** A reversal leaves both rows. Financial records that can
vanish are not records.

---

## The chat workflow

```
Telegram Trigger ──> Is Text Message? ──true──> Typing… ──> AI Agent ──> Reply
  (chatIds filter)          │                                  └─error──> Reply: Error
                            └─false──────────────────────────────────> Reply: Text Only
                                                    ▲          ▲
                                              Chat Model   Chat Memory
```

- **Telegram Trigger** filters on allowed chat ids, so an unauthorised chat
  never even produces an execution — cheaper and safer than checking later.
- **Chat Memory** is a 20-turn window keyed per chat, which is what makes
  *"Which supplier?"* → *"ABC"* work. In-memory: a restart forgets it.
- **Errors route to their own reply** rather than failing silently. A bot that
  goes quiet on error is indistinguishable from a bot that is thinking.

---

## Google Sheets mirror

Every 5 minutes: read `sync_jobs` → `appendOrUpdate` keyed on
`transaction_id` → mark synced.

`appendOrUpdate` rather than append is deliberate — a retry rewrites the row
instead of creating a duplicate. Five failures park the row with its error
rather than retrying forever, so one malformed record cannot stall the queue
behind it.

Auth is a Google **service account**: no browser consent, works headless. The
step people miss is sharing the spreadsheet with the service account's
`client_email` — without it every write is a 403, and the error does not say so
in those words.

---

## n8n specifics that cost time

Kept because none of these are discoverable from the node UI.

**`responsesApiEnabled` must be forced off.** It defaults *on* at typeVersion
1.3, but a self-hosted gateway's `/v1/responses` answers `response.completed`
with no content, and Ollama has no such endpoint at all. Chat Completions is
what both actually implement.

**`model` is a resourceLocator**, not a plain string — `{__rl, mode: "id",
value}`. A string fails with *Could not get parameter "model.value"*.

**No `parse_mode` on the reply.** Model output containing a stray `*` or `_`
makes Telegram reject the entire message. It also falls back to a placeholder
when the model returns nothing, because Telegram 400s on empty text.

**Reference `$('Telegram Trigger').item.json`, not `$json`.** The Typing node
replaces `$json` with the Telegram API response, so anything downstream reading
`$json` gets the wrong object.

---

## Why this shape

The obvious build is to give the model database access and a good prompt. It
demos well and fails badly: the failure mode of a confused model is a wrong row
in a financial ledger, and you find out at month end.

Pushing every invariant into SQL functions means the model's job shrinks to what
models are good at — turning *"beli 20 kaos polos dari ABC 1.5jt pakai BCA"*
into a structured intent — while correctness lives somewhere that can be tested,
transacted and proven. `make db` recomputes the ledgers and checks the books add
up, which is a question you can only ask if the numbers were derived rather than
stored.
