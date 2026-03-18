# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server with proxy (localhost:4200 → backend localhost:8080)
npm run build      # Production build
npm run watch      # Build with watch mode
npm test           # Run unit tests
```

The dev server proxies `/api` requests to `http://localhost:8080` via `proxy.conf.json`.

## Architecture

**Softronic X1** is an Angular 21 device management and monitoring dashboard. It uses standalone components (no NgModules), Angular Signals for state, and Tailwind CSS v4 for styling.

### Routing

Two top-level route groups:
- **Public** (`/`, `/login`) — no auth required
- **Protected** (wrapped in `AppShellComponent` with `authGuard`) — `/devices`, `/devices/:id`, `/alerts`, `/settings`, `/tasks`

### State Management

`ApiService` (`src/app/core/api.service.ts`) is the central data layer. It uses Angular `signal()` and `computed()` — no NgRx or external store. Currently seeded with demo data; real data comes via `HttpClient` against `/api`.

### Key Directories

- `src/app/core/` — `ApiService`, `AuthService`, shared models/enums/utils
- `src/app/dashboard/` — protected feature pages (devices, alerts, settings, tasks)
- `src/app/public/` — landing page, login, subscription pages
- `src/app/layout/app-shell/` — main layout wrapper for authenticated routes
- `src/app/shared/` — reusable components (footer, metric display, status-pill)
- `libs/ui/` — custom headless UI component library (Spartan-ng/Helm pattern)

### UI Library

`libs/ui/` contains custom Angular components (avatar, button, card, dialog, sheet, sidebar, etc.) imported via the path alias `@spartan-ng/helm/*` (configured in `tsconfig.json`). These are built on Angular CDK with Tailwind styling, using `class-variance-authority`, `clsx`, and `tailwind-merge`.

### Auth

`AuthService` stores a token in `localStorage` under key `softronic_token`. `authGuard` protects dashboard routes and redirects to `/login` when unauthenticated.

### Styling

- Tailwind CSS v4 via PostCSS (`.postcssrc.json`)
- spartan-ng components -> https://spartan.ng/
- Icons via `@ng-icons/lucide`
- Global styles in `src/styles.css`

### Environment

Config in `src/enviroment/` (note: directory name has a typo — "enviroment" not "environment"). API base URL is `/api` in both dev and prod.

### Rules
- when replacing code comment out the code the ic being changed and not delete it
- compare old code functionality to new code and make sure it works same
- after finishing a task, compare to the requirement