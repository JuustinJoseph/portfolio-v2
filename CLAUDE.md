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

## Design direction

Decisions already made. Follow them unless the owner says otherwise.

**Layout**
- Split layout on desktop. The left column (`PortraitPanel`, about 45% wide) is sticky and holds the portrait at its natural aspect ratio (never cropped, rounded corners) with the tagline card directly beneath; on desktop the photo shrinks so photo + card fit the viewport height. The photo file is portrait (3024×4032 after EXIF rotation). The right column scrolls. On mobile the photo is capped at 40svh tall (50svh on tablet), centered, so the name and role show on the first screen; the photo and card sit on the dark page, and the hero below uses `bg-accent-gradient-fade` (gradient fading in from canvas) so they flow together; the wrapper is `lg:contents` on desktop.
- The right column starts with the hero (`Hero`): name in very large type, the role (`site.role`, "Software Developer") under it, and the location ("Toronto · ON") bottom-right.
- The tagline card sits beneath the photo: a `surface` card with an orange left border, no heading, with the tagline (`tagline` in `lib/content.ts`) in medium-weight `paper` text with orange social icons to its right. An About section (`About`, copy in `about` in `lib/content.ts`) sits right below the hero, before Projects.
- Below the hero, the content sections follow the style of the sawad.framer.website template: About, Projects, Experience, Stack, Education, Contact. Each one opens with a two-tone uppercase heading (`SectionHeading`: bright top line, faded `text-faint` bottom line).
- Dark page background (`canvas`), with light text in `paper` and `muted`.

**Colour**
- Accent is orange `#ff5a1f`. The dark radial gradient (`bg-accent-gradient`) is used **only** for the hero. Every other orange surface (logo badge, buttons, thumbnails) uses solid `bg-accent`.
- Colours tried and rejected: forest green and oxblood. Keep orange.
- The portrait is shown in natural colour, with no tint, blend mode or filter.

**Motion**
- Keep animation light and subtle. On load, the portrait slides in from the left (`animate-slide-right`) and the hero text slides up (`animate-slide-up`), at the same time. Both respect `prefers-reduced-motion`.
- Rejected: pixelate-on-hover on the photo. Don't add flashy effects.

**Content**
- All copy and data live in `lib/site.ts` and `lib/content.ts`, not in components. Items marked `TODO` there are still placeholders (projects, experience, tagline).
- There is no "Browse the projects" link in the hero, and no profile card (removed in favour of the sticky photo).
- Footer has no copyright year: `new Date()` breaks static prerendering under `cacheComponents`.

**Code conventions**
- Make things reusable. Colours, fonts and animations are tokens in `app/globals.css`. Shared UI lives in `components/ui/` (`Button` with its variants, `Section`, `LinkRow`, `SocialLinks`, `Field`, `Icons`, `Container`). Prefer extending these over writing one-off styles.
- One component per file, each with a short comment saying what it is for.
- Every page and component must be responsive. Build mobile-first with Tailwind breakpoints (`sm:`, `md:`, `lg:`), and check layouts at phone, tablet and desktop widths.
- Use Prettier with Tailwind class sorting (`npx prettier --write`).

## Git

- Never add a `Co-Authored-By` trailer or any AI attribution line to commit messages or PR descriptions.
- Commit messages are prefixed with the ticket from the branch name, e.g. `PP-7: ...`.
