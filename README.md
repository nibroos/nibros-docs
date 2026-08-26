# nibros-docs

Personal docs/portfolio site built with [VitePress](https://vitepress.dev), styled with Tailwind CSS. Content lives under [docs/](docs/) (portfolio pages, experience write-ups, concept notes, components, etc.).

Live at **[docs.nibros.space](https://docs.nibros.space)**, exposed from a private VPS through a **Cloudflare Tunnel** (no public inbound port on the VPS — the tunnel forwards `docs.nibros.space` traffic to the static files served locally on that box).

## Requirements

- [Bun](https://bun.sh)

## Local development

```bash
bun install
bun run docs:dev       # start local dev server
bun run docs:build     # build static site to docs/.vitepress/dist
bun run docs:preview   # preview the production build locally
```

> Note (see [before-push.md](before-push.md)): the VitePress config directory is kept locally as `vitepress` (renamed) to avoid dev-time conflicts, and switched back to `.vitepress` before pushing/building — `.vitepress` is the name VitePress actually expects.

## How to update the live site

Content changes are just commits to this repo — the site itself is rebuilt and redeployed by CI/CD, not edited by hand on the server.

1. Edit/add Markdown under `docs/` (or components/config as needed).
2. Commit and push to `main`.
3. Deployment happens automatically, via either pipeline configured for this repo:
   - **GitHub Actions** ([.github/workflows/prod.yml](.github/workflows/prod.yml)) — triggers on push to the `prod` branch: installs deps with Bun, runs `bun run docs:build`, archives `docs/.vitepress/dist`, and ships it to the VPS over SSH/SCP.
   - **Jenkins** ([Jenkinsfile](Jenkinsfile)) — clones the repo, installs deps, runs the same build, and `rsync`s `docs/.vitepress/dist/` to the VPS deploy directory.
4. On the VPS, the Cloudflare Tunnel simply serves whatever static files are currently in the deploy directory — so once the new build lands there, `docs.nibros.space` reflects it immediately, no tunnel/DNS changes needed for normal content updates.

Manual deploy (if you ever need to skip CI): build locally with `bun run docs:build`, then sync `docs/.vitepress/dist/` to the VPS deploy directory yourself (same target the pipelines use).

## Project structure

- `docs/` — VitePress content (pages, per-experience sections like `siloam/`, `s-erp/`, `d-erp/`, `concepts/`, shared `components/`, `styles/`, `public/`)
- `docs/.vitepress/config.mjs` — site config/nav/sidebar
- `preprocess.js` — pre-build step (env/config generation) run before `docs:build`
- `Jenkinsfile`, `.github/workflows/prod.yml` — deployment pipelines
