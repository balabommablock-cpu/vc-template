# vc-template

A generic growth-fund application page by Rishabh Balabomma. Same
artifact shape as the Blume one, but with every fund-specific
reference stripped out so the slug in the URL determines the
greeting.

Lives at **boredfolio.com/apply/[fund]** via a rewrite from the
parent boredfolio site. This repo is a standalone Next.js app with
`basePath: '/apply'`, deployed as its own Vercel project.

## Routes

- `/apply` — index page listing example fund slugs
- `/apply/[fund]` — the working note, addressed to `[fund]`

`/apply/sequoia` reads `👋 hi Sequoia`. `/apply/peak-xv` reads
`👋 hi Peak XV`. Unknown slugs are title-cased automatically.

Add known fund display names in `app/_funds.ts`.

## Local dev

```
npm install
npm run dev
open http://localhost:3000/apply/sequoia
```

## Updating copy

- `app/_data.ts` — every visible string for the application page
- `app/_funds.ts` — display-name lookup for known slugs
- `app/[fund]/page.tsx` — page structure
- `app/globals.css` — Cassie-style design system

## Deployment

Deployed as a Vercel project. The parent
[boredfolio site](https://boredfolio.com) rewrites `/apply/:path*` to
this project's URL.
