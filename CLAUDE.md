# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Personal portfolio site (v2): Next.js 16.4 App Router, React 19.3, TypeScript, Tailwind CSS v4. Single page: sticky portrait on the left, scrolling content on the right.

## Commands

- `npm run dev`: dev server at http://localhost:3000
- `npm run build`: production build (also type-checks)
- `npm run start`: serve the production build
- `npm run lint`: ESLint 9 flat config (`eslint.config.mjs`, extends `eslint-config-next`)

There is no test framework set up yet.

## Next.js version caveat

AGENTS.md (imported above) is the key rule: this Next.js version has breaking changes compared to older releases. Before you write Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`. `next dev` rewrites the AGENTS.md block, so leave it as is.

## Configuration notes (`next.config.ts`)

- `cacheComponents: true` and `partialPrefetching: true` are on. Check the bundled docs for how caching and dynamic rendering work under these flags before adding data fetching or dynamic APIs.
- `experimental.agentFeedback: true` is on.
- Tailwind v4 runs through Turbopack via a `*.css` loader rule (`@tailwindcss/turbopack`). It does not use a PostCSS config or `tailwind.config` file. Global styles and the Tailwind import are in `app/globals.css`.

## Structure

- `app/layout.tsx`: root layout. Loads Geist with `next/font`.
- `app/page.tsx`: home page; composes the sections.
- `app/icon.svg`: favicon.
- `lib/site.ts`, `lib/content.ts`: all site copy and data.
- `components/ui/`: reusable building blocks; `components/sections/`: page sections; `components/layout/`: header, menu, footer.
- `public/`: static assets (portrait).
- Path alias: `@/*` maps to the project root (see `tsconfig.json`).
