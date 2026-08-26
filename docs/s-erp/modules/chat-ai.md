# Chat & AI Assistant

> **Area:** Collaboration · **Tables:** `conversations`, `conversation_participants`, `messages`, `message_attachments`, `message_reactions`, `message_mentions`, `message_hides` · **Role:** Full-stack

Real-time chat for S-ERP — direct messages, groups, threads, reactions, mentions, file attachments and presence — plus a **built-in AI assistant** that answers questions from live ERP data and reads images the user sends. I built both the messaging platform and the assistant, and the most interesting part is how the assistant is allowed to query the database **safely**.

## Purpose

Give users a first-class messaging surface inside the ERP, and an assistant that turns natural-language questions ("top 5 customers by sales this month?") into answers grounded in real data — without letting a language model anywhere near a writable database connection or a sensitive table.

- **Transport** — REST for anything that writes; a WebSocket for everything the server pushes back.
- **Persistence** — PostgreSQL, alongside the rest of the ERP schema.
- **Attachments** — MinIO object storage, served to clients as presigned URLs.
- **AI** — a local OpenAI-compatible model server (Ollama) by default, or Claude.

## Architecture

```
 s-erp-ui ──REST  /api/v1/chats──►  ChatController ──► ChatService ──► ChatRepository ──► PostgreSQL
          ◄──WS   /chats/ws───────┘        │                 │
                                           │                 └──► chat.Hub  (in-memory sockets) ──push──► UI
                                           └──► ai.Assistant ──► Ollama / Claude   (text + SQL, vision)
                                                            └──► ai schema         (read-only views)
```

| Package | Role |
|---|---|
| `chat_controller.go` | HTTP handlers, WebSocket upgrade, read/write pumps |
| `chat_service.go` | Authorization, validation, broadcasting, AI orchestration |
| `chat_repository.go` | SQL |
| `chat/hub.go` | In-memory registry of live sockets per user |
| `internal/ai/` | Providers, SQL planning, guard, vision |

The hub is **in-process** — a single service instance is assumed. With several replicas, a user connected to instance A would not receive events broadcast by instance B; horizontal scaling needs a shared pub/sub (Redis is already in the stack) between the hub and the sockets. I called this out deliberately rather than hiding it.

## Data model

Every table is soft-deleted via `deleted_at`.

| Table | Purpose |
|---|---|
| `conversations` | A thread. `type` is `direct`, `group` or `thread`. |
| `conversation_participants` | Membership, `role`, and `last_read_message_id`. |
| `messages` | `content`, `type` (`text`/`system`), `reply_to_id`, `edited_at`, `deleted_for_all`. |
| `message_attachments` | One row per uploaded file; `kind` is `image`/`video`/`voice`/`document`. |
| `message_reactions` | Unique on `(message_id, user_id, emoji)`. |
| `message_mentions` | Users @-mentioned in a message. |
| `message_hides` | Per-user "delete for me". |

Two constraints carry real weight:

- **`conversations.direct_key`** holds `"minUserId:maxUserId"` under a unique partial index, so a 1-to-1 conversation can never be duplicated — even under a race between two clients opening the same chat at once.
- **`idx_messages_conversation_id_id`** on `(conversation_id, id DESC)` makes keyset pagination cheap: history is paged by `before_id`, never `OFFSET`.

Threads reuse `conversations` with `parent_id` and `root_message_id` set, so every feature that works on a conversation works on a thread for free.

## Real-time transport

### REST

All routes sit under `/api/v1/chats` behind JWT auth. Every endpoint is `POST`, including reads — consistent with the rest of this codebase, where filters travel in the request body. The surface covers conversations (`start-conversation`, `start-ai`, `index-conversation`, `show`/`update`), messages (`index-message`, `send-message`, `edit`/`delete`, `react`/`unreact`, `read-conversation`), group management (`create-group`, add/remove/role/leave members), threads, uploads, and profile cards. Message content is trimmed and capped at **4000 characters**, and may be empty **only** when it carries attachments.

### WebSocket

`GET /api/v1/chats/ws?token=<jwt>` — mounted **before** the JWT middleware, because browsers can't set an `Authorization` header on a WebSocket handshake. A dedicated upgrade guard authenticates the `token` query parameter instead, falling back to the header for non-browser clients.

The socket is **receive-first**: the server pushes, and message creation stays on REST where it is validated, traced and transactional. The only frame a client may send is a typing signal. Server-pushed events:

| Type | Sent when |
|---|---|
| `message` / `message_edited` / `message_deleted` | A message was created / edited / deleted for everyone |
| `reaction_updated` | Reaction totals changed |
| `typing` | Someone is typing — including the assistant while it works |
| `read` | A participant advanced their read pointer |
| `presence` / `presence_snapshot` | A contact came online/offline; the snapshot is sent once on connect |
| `conversation_updated` / `thread_created` | Membership/roles/title changed; a thread was branched |

Connection handling: ping/pong at 54s/60s, a 10s write deadline, an 8 KiB max inbound frame, and a 64-frame send buffer per client. Fan-out is **best-effort** — a client whose buffer is full has that frame dropped rather than stalling delivery for everyone else. Clients treat the socket as a live hint and reconcile against REST, not as a guaranteed log.

## Behaviour

**Roles.** Owner / admin / member, with a capability matrix: everyone sends/reacts/replies/threads; admins add members, remove members (not other admins), rename/re-describe; only the owner changes roles and deletes anyone's message. The owner can never be removed, may only leave once an admin exists (the earliest-joined admin is auto-promoted), and setting a member to `owner` transfers ownership.

**Deletion.** `scope: "me"` writes to `message_hides` (the row stays for everyone else); `scope: "everyone"` sets `deleted_for_all` and **purges the attachment objects from MinIO** (best-effort), allowed for the sender or a group owner/admin.

**Unread & presence.** Unread counts derive from `last_read_message_id` per participant. Presence is whatever the hub holds — process-local, resetting when the service restarts, which is correct since the sockets die with it.

## Attachments

`POST /chats/upload` (multipart) stores the file under `chat/YYYY/MM/<uuid><ext>`, capped at **50 MiB**, and returns an `object_key` plus a presigned URL for immediate preview; `send-message` then references that key. `kind` is derived from the content type (`image/*` → image, `video/*` → video, `audio/*` → voice, else document); documents get a `Content-Disposition: attachment` URL, media is inline. If MinIO is unreachable at startup the service still boots and uploads return 503 — object storage should not gate messaging.

## The AI assistant

The assistant is an ordinary user row flagged `is_ai`, so it reuses conversations, participants, messages and the socket with no special cases. Sending it a message generates a reply **in the background** — the send returns immediately and the answer arrives over the socket, with a `typing` event re-emitted every 3 seconds while the model works.

### How a reply is produced

```
 New message
    │
    ├─ image attached to the question? ──yes──► vision model ─────────────────► reply
    │
    └─ no ──► Pass 1: plan SQL
                 │
                 ├─ NO_QUERY ─────────────► chat prompt ───────────────────────► reply
                 │
                 └─ SELECT ──► guard + read-only execution
                                   │
                                   ├─ error ──► repair hint, retry (≤ 3) ──┐
                                   │                                       │  (back to Pass 1)
                                   └─ rows ──► Pass 2: answer from rows ───┴─► reply
```

I used **two passes rather than native tool-calling**: it works on any OpenAI-compatible endpoint regardless of whether the served model supports tool schemas, and it keeps the generated SQL somewhere it can be vetted and logged *before* it reaches the database. The last 20 messages form the context; the planner also receives the recent turns, so a follow-up like *"no, I want the number, not navigation"* resolves against what came before.

### Database access and its security model

This is the part I'm proudest of. The assistant writes its own `SELECT` statements, so the boundary is enforced by **PostgreSQL itself**, never by trying to parse the model's SQL for bad intent. A migration creates:

- **schema `ai`** — a set of curated **read-only views** over the business tables. Each pre-filters `deleted_at IS NULL` and joins human-readable names in (`customer_name`, `product_name`, `io_type`, `direction`), so the model never needs to know that `mix_values` group 36 means "inbound".
- **role `ai_readonly`** — `NOLOGIN`, granted `SELECT` on those views and nothing else. Views run with their owner's privileges, so the role reads them while holding **no privilege on `public`**.

Every generated query runs in one read-only transaction that first does `SET LOCAL ROLE ai_readonly`, with `statement_timeout = 10s` and `search_path = ai`. `NOLOGIN` means there is no second credential to leak or rotate, and `SET LOCAL` cannot outlive its transaction. On top of the database boundary, a SQL guard accepts only a single `SELECT`/`WITH`, rejects comments and chained statements, and nests every query inside `SELECT * FROM (…) AS ai_result LIMIT 200` — a wrap that is not just a row cap but makes statement chaining a **syntax error**.

Denials I verified end-to-end:

| Attempt | Result |
|---|---|
| `SELECT username, password FROM users` | permission denied for table users |
| `SELECT content FROM messages` | permission denied for table messages |
| `refresh_tokens`, `hr_employees`, `pg_authid` | permission denied |
| `CREATE TABLE …` | cannot execute in a read-only transaction |
| `pg_read_file('/etc/passwd')`, `COPY … TO` | permission denied |

> **Honest limitation — no per-user scoping.** Anyone who can chat with the assistant can read any row in those views, regardless of their role or branch. This sits *below* the app's own RBAC; before exposing it to branch-scoped users, the queries need scoping to the asking user (the assistant already receives their id).

### Prompting

Four layers do the work: a **system prompt** (persona, the real menu names, what it must not claim), a **schema card** (tables, columns, and the semantics no schema can express), an **answer prompt** (how to state figures once rows are in hand), and a **style reminder** re-stated on the newest user turn. Two mechanisms exist because prompting alone wasn't enough:

- **History laundering** — a small model imitates its own previous replies far more strongly than it follows the system prompt, so I strip fenced code from stored assistant turns; one early SQL-heavy answer then stops reproducing itself.
- **The style reminder's position** — restating the rules at the *end* of the context beats a system prompt sitting behind a long history. It's applied only on the conversational path; attaching it to an answer written from real query results would tell the model to disown the figures it was just handed.

The schema card carries the traps that are invisible in `information_schema`: `order_at` is the business date and `created_at` is not; `grand_total` already includes tax; `purchase_orders.customer_id` is the supplier; status values are upper case; a ranking needs `GROUP BY … ORDER BY … LIMIT 1`, never `MAX(date)`. Where possible I encoded context in the **schema** rather than the prompt — the views expose `product_id`/`product_name` aliases because the model kept using those names however firmly the prompt forbade it, and one alias column ended a failure the prompt could not.

### Images

Sending an image is optional and never sticky: routing looks only at the **unanswered run of user turns**, so pasting a screenshot then typing the question counts as one image question, but the next question returns to the data path with the stale image stripped. An image turn skips SQL planning entirely — the planner is a separate text-only model that can't see the picture. Guards keep vision affordable: longest side 1024px (cost is pixels, not bytes), the 3 newest images per reply, 6 MiB max source, 6 turns of history on image turns. Downscaling uses CatmullRom resampling and PNGs stay PNG — a cheaper filter smears small digits into ones the model reads wrong.

### When things fail

Generated SQL that's rejected or errors is retried up to 3× with an error-specific correction; a `NO_QUERY` plan answers conversationally and *says* it hasn't checked rather than inventing figures; an unreachable model posts an apology while the real cause goes to the log; a context overflow on an image retries with history shed; a missing `ai` schema degrades to plain chat. **Every data answer logs its query**, so a suspicious figure can always be traced back to the SQL that produced it.

## Configuration

The provider is env-driven — `local` (an OpenAI-compatible endpoint such as Ollama) or `claude` — with separate text/SQL and vision models, a deliberately low temperature (higher produces SQL that doesn't parse), and an optional system-prompt override that changes the persona without a rebuild. The current local setup runs a 7B instruct model for text/SQL and a 7B vision model for images. The service must share a network with the model server; in dev it joins the model server's network so the endpoint resolves from inside the container.

## Engineering highlights

- **A language model with database access that is provably safe** — enforced by Postgres (`NOLOGIN` role + read-only views + `SET LOCAL ROLE` + `statement_timeout`), not by trusting the model, with a SQL guard as a second layer and a verified table of denials.
- **Two-pass SQL planning** that works on any OpenAI-compatible model and keeps generated SQL auditable before execution.
- **A receive-first WebSocket** with best-effort fan-out and REST as the source of truth — the socket is a hint, not a log.
- **Race-proof 1-to-1 conversations** via a unique partial index on a normalized `direct_key`, and **O(1) history paging** via a keyset index.
- **Small-model tricks that materially improved accuracy** — history laundering and end-of-context style reminders — each added only after prompting alone fell short.

## Frontend

A Nuxt 3 chat surface: conversation list with unread counts, keyset-paged history, composer with attachments/mentions/reply, reactions, threads, presence indicators, and a dedicated AI conversation that shows the assistant "typing" while it works. It treats the WebSocket as a live hint and reconciles against REST.

## Known limitations

- **The hub is single-instance** — multiple replicas need shared pub/sub.
- **No per-user scoping on AI data access** (see the note above).
- **Images and data don't combine** — "is this product in stock?" over a photo reads the photo but won't cross-reference the database; that needs a two-hop flow (identify from image, then query).
- **A follow-up about an image without re-attaching it** no longer sees the picture; it often still answers from its own earlier description.
- **Small-model accuracy** — the guardrails make wrong answers rare, not impossible, which is exactly why every answer logs its query.
