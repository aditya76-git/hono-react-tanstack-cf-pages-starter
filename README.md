# Hono + React + TanStack Router — SSR on Cloudflare Pages

A production-ready starter template that wires together Hono, React 19, and TanStack Router to give you server-side rendering on Cloudflare Pages — without a framework in your way.

// fast, type-safe and edge-native


[![Hono](https://img.shields.io/badge/Hono-ff6b00?style=for-the-badge&logo=hono&logoColor=white)](https://hono.dev)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TanStack Router](https://img.shields.io/badge/TanStack%20Router-10B981?style=for-the-badge&logo=https://i.ibb.co/YF7KbP4R/image.png)
](https://tanstack.com/router/latest)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open%20App-black?style=for-the-badge&logo=cloudflare)](https://hono-react-tanstack-cf-pages-starter.pages.dev)


---


## What Is This?

This is a full-stack web application starter built for the edge. The server runs on Cloudflare Pages Functions via Hono. The frontend is React 19 with TanStack Router handling both server-side rendering and client-side hydration. Vite ties it all together for development and builds.

You get the performance of SSR (real HTML on first load, great for SEO) with the interactivity of a React SPA after hydration — and it includes Cloudflare Pages deploy support.

---

## Features

* **Server-Side Rendering (SSR)** — Pages are rendered on the server for faster first load and better SEO.

* **File-based routing** — Routes live in `src/client/routes/` and are auto-discovered. Just add a file to create a new route.

* **Hono API layer** — Comes with a clean `/api` prefix for backend routes. You can add more endpoints inside `src/api/index.ts`.

* **Tailwind CSS v4** — Utility-first styling already set up and ready to use.

* **TanStack Router Devtools** — Available in development for debugging your routes. Not included in production builds.

* **Hot module replacement (HMR)** — Instant updates while developing, for both client and server code.

* **Cloudflare Pages deploy support** — Ready to build and deploy directly to Cloudflare’s edge.

---

## Architecture

```
src/
├── api/
│   └── index.ts           # Hono API router
├── client/
│   ├── main.tsx           # Client entry — hydrateRoot
│   ├── router.tsx         # TanStack Router factory (shared by client + server)
│   ├── index.css          # Tailwind import
│   ├── routeTree.gen.ts   # Auto-generated route tree (do not edit)
│   └── routes/
│       ├── __root.tsx     # Root layout — HTML shell, header, footer, devtools
│       ├── index.tsx      # Home page
│       ├── about.tsx      # About page
│       ├── posts.tsx      # Posts listing — SSR loader from JSONPlaceholder API
│       └── post.$id.tsx   # Post detail — dynamic param, SSR loader
└── server/
    ├── app.ts             # Hono app — mounts /api and SSR catch-all
    └── ssr.ts             # SSR handler — routes to API, assets, or TanStack SSR
```

### How the request cycle works

1. A request comes in to Cloudflare Pages.
2. The Hono app (`src/server/app.ts`) receives it.
3. If the path starts with `/api`, it's handled by the Hono API router.
4. If the path looks like a static asset (has a file extension), it's forwarded to the Cloudflare Pages asset store.
5. Everything else falls through to the SSR handler (`src/server/ssr.ts`), which creates a server-side TanStack Router instance and streams the rendered HTML back to the client.
6. The browser loads the client bundle, and React hydrates the existing HTML in place.

### Build pipeline

The build is split into two Vite passes:

- **Client build** (`vite build`) — Bundles `src/client/main.tsx` into `dist/assets/client.js`, extracts styles into `dist/assets/main.css`, and splits each route into its own chunk under `dist/assets/chunks/`.
- **Server build** (`vite build --mode server`) — Bundles `src/server/app.ts` into `dist/_worker.js`, which Cloudflare Pages picks up as the Functions entrypoint.

A key detail in the server build: TanStack Router's `isServer` module is aliased to its explicit server variant. Without this, the router falls back to `createBrowserHistory()` during the server build, which crashes in the Workers runtime because there's no `window` object.

---

## Routes

| Path | Description |
|---|---|
| `/` | Home — counter demo, client-side API fetch |
| `/about` | About — stack overview cards |
| `/posts` | Posts listing — server-rendered via loader |
| `/post/$id` | Post detail — dynamic route, server-rendered |

---

## API Endpoints

| Method | Path | Response |
|---|---|---|
| GET | `/api/health` | `{ error: false, message: "OK" }` |
| GET | `/api/timestamp` | `{"error":false,"message":"Timestamp generated successfully","data":{"timestamp":1777782183478,"iso":"2026-05-03T04:23:03.478Z"}}` |

---

## Getting Started

**Install dependencies**

```bash
npm install
```

**Run locally**

```bash
npm run dev
```

This starts the Vite dev server with the Hono dev server middleware and Cloudflare adapter. Hot module replacement works for both client and server code.

**Preview the production build locally**

```bash
npm run preview
```

This runs `wrangler pages dev` against the built `./dist` directory, simulating the Cloudflare Pages environment locally.

**Deploy**

```bash
npm run deploy
```

Builds both client and server, then runs `wrangler pages deploy` to push to Cloudflare Pages.

**Generate Cloudflare binding types**

```bash
npm run cf-typegen
```

Generates the `CloudflareBindings` interface based on your `wrangler.jsonc` config. Run this after adding KV namespaces, R2 buckets, D1 databases, or other bindings. Pass the type to Hono when you need access to bindings:

```ts
// src/server/app.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Cloudflare Pages |
| Server framework | Hono v4 |
| Frontend | React 19 |
| Router | TanStack Router v1 |
| Styling | Tailwind CSS v4 |
| Build tool | Vite 6 |
| Deployment | Wrangler 4 |
| Language | TypeScript |

---


## Wrapping Up

This starter is heavily inspired by ideas and patterns from the following projects. Exploring these working repositories helped me learn a lot and played a key role in shaping this setup:

- [bskimball](https://github.com/bskimball) / [tanstack-hono](https://github.com/bskimball/tanstack-hono)
- [oscarvz](https://github.com/oscarvz) / [hono-ssr-tanstack-router](https://github.com/oscarvz/hono-ssr-tanstack-router)
- [oscarvz](https://github.com/oscarvz) / [hono-preact-starter](https://github.com/oscarvz/hono-preact-starter)
- [nurbxfit](https://github.com/nurbxfit) / [cf-hono-react-ssr](https://github.com/nurbxfit/cf-hono-react-ssr)
- [yusukev](https://github.com/yusukev) / [hinoco](https://github.com/yusukev/hinoco)
- [smatsuodev](https://github.com/smatsuodev) / [scrap](https://github.com/smatsuodev/scrap)

Getting everything to actually work with Cloudflare Pages deployment was the real challenge at the end. This part was largely shaped by insights from:

- [saltbo](https://github.com/saltbo) / [cfrv-starter](https://github.com/saltbo/cfrv-starter)

---

***Happy shipping*** 🚀

[aditya76-git](https://github.com/aditya76-git) / [hono-react-tanstack-cf-pages-starter](https://github.com/aditya76-git/hono-react-tanstack-cf-pages-starter)
