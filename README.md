# Playwright GAD AQA Framework

Personal test automation framework (Playwright + TypeScript) for the public
[GAD GUI API Demo](https://github.com/jaktestowac/gad-gui-api-demo) app.

This is a learning / portfolio project — not production code from a client.
The goal is to show how I structure UI, API and E2E automation: Page Objects,
fixtures, API clients, test data factories, and CI.

## Stack

- Playwright (UI + API via `APIRequestContext`)
- TypeScript (strict)
- Node.js
- dotenv for environment config
- Prettier
- GitHub Actions (Chromium)

## What is covered

| Layer | Location | Examples |
| --- | --- | --- |
| UI | `tests/ui` | Home page, navigation to Articles, pagination |
| API | `tests/api` | Login + token, create article, 401 without auth, health / DB check, DB restore |
| E2E | `tests/e2e` | Create article via API → assert it is visible in UI |
| Visual | `tests/visual` | Full-page screenshot of Articles (local / Windows baseline; not part of `npm test`) |

## Architecture

```
tests/           UI, API, E2E, visual specs
fixtures/        Shared Playwright fixtures (pages + API clients)
pages/           Page Objects
components/      Reusable UI pieces (pagination)
services/        API wrappers (auth, articles, health, restore)
factories/       Test data builders
data/            Static templates
types/           API response types
config/          Environment (BASE_URL, test user)
```

Tests import `test` from `fixtures/app.fixture.ts` instead of raw Playwright,
so page objects and API clients are injected into each test.

## Prerequisites

- Node.js 22+
- GAD app cloned **next to** this repo (Playwright `webServer` starts it from `../gad-gui-api-demo`)

```bash
git clone https://github.com/jaktestowac/gad-gui-api-demo.git ../gad-gui-api-demo
cd ../gad-gui-api-demo && npm ci
```

## Setup

```bash
git clone https://github.com/SerhiyHyma/playwright-gad-aqa-framework.git
cd playwright-gad-aqa-framework
npm ci
npx playwright install chromium
cp .env.example .env
```

Fill `.env`:

```
BASE_URL=http://localhost:3000
TEST_USER_EMAIL=...
TEST_USER_PASSWORD=...
```

Use a valid user from the GAD demo database. `.env` is gitignored.

## Run tests

```bash
npm test              # UI + API (parallel), then E2E (serial)
npm run test:ui
npm run test:api
npm run test:e2e
npm run test:visual   # screenshot comparison; baseline captured on Windows
npm run report        # Playwright HTML report
```

Playwright starts GAD automatically (`webServer` → `npm run start` in `../gad-gui-api-demo`).
If the app is already running on port 3000, it is reused locally.

## CI

On push / PR to `main`, GitHub Actions:

1. Installs this repo
2. Checks Prettier
3. Clones GAD and installs it
4. Runs `npm test` on Chromium
5. Uploads the Playwright HTML report as an artifact

Visual tests are excluded from CI because the committed snapshot is platform-specific (`chromium-win32`).

## Notes

- E2E and visual specs restore the default DB before the run (`/api/restoreDB`) and run serially.
- Firefox and WebKit projects exist in `playwright.config.ts` but default scripts use Chromium only.
