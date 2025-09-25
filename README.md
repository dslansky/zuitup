Zuit Up — Single-page marketing site built with Next.js (App Router), TypeScript, Tailwind, Framer Motion, and next-seo.

## Quick Start

1) Install dependencies:

```bash
npm install
```

2) Run the development server:

```bash
npm run dev
```

Visit http://localhost:3000

Edit the homepage at `src/app/page.tsx`. The page auto-updates on save.

This project uses `next/font` to automatically load Inter and Playfair Display.

## Tech

- Next.js App Router + TypeScript
- Tailwind with custom design tokens
  - Colors: `z-navy #0D1B2A`, `z-ink #111111`, `z-cream #F7F5F2`, `z-gold #C1A559`, `z-silver #9FA6B2`
  - Fonts: Inter (UI), Playfair Display (headlines)
- Framer Motion for entrance animations
- next-seo for SEO (see `src/app/layout.tsx`)

## Structure

- `src/app/layout.tsx` — Global layout, fonts, DefaultSeo
- `src/app/globals.css` — Tailwind and tokenized CSS variables
- `src/app/page.tsx` — Single-page sections and content
- `src/components/*` — `Nav`, `Footer`, `Section`

## Deploy to Vercel

1) Push to a Git repo (GitHub/GitLab/Bitbucket)
2) Create a new project on Vercel and import the repository
3) Framework preset: Next.js. Use default settings (Build command `next build`, Output `.next`)
4) Deploy

After deploy, set your production URL in `metadataBase` and `DefaultSeo` inside `src/app/layout.tsx`.
