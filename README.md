# PalmAI Landing — getpalmai.app

Marketing site for the PalmAI iOS + Android palm-reading app. Built with **Next.js 15 (App Router) + React 19 + Tailwind v4 + Framer Motion**. SEO-first, server-rendered, ~70KB initial JS.

Lives at: **https://getpalmai.app**

The Flutter app code is in `../palmai_app`. This landing is a separate project, deployed independently to Vercel.

---

## Quick start

```bash
cd palmai_landing
cp .env.example .env.local        # fill in store URLs etc
npm install
npm run dev                        # http://localhost:3000
```

## Deploy to Vercel

### Option 1 — CLI (fastest)
```bash
npm install -g vercel
cd palmai_landing
vercel               # first time: links project, asks questions
vercel --prod        # production deploy
```

### Option 2 — GitHub + Vercel UI
1. Push the repo to GitHub.
2. Vercel dashboard → **New Project** → import the repo → set **Root Directory** = `palmai_landing`.
3. Add env vars (copy from `.env.example`).
4. Deploy.

### Connect getpalmai.app
1. Vercel → Project → Settings → Domains → **Add** → `getpalmai.app`.
2. Vercel will give you DNS records (A record `76.76.21.21` for apex, CNAME for `www`).
3. Go to your registrar (where you bought `getpalmai.app`) → DNS settings → add the records.
4. Wait 5-30 min for DNS propagation. Vercel auto-provisions HTTPS via Let's Encrypt.

## Structure

```
palmai_landing/
├── app/
│   ├── layout.tsx              # SEO metadata, fonts, JSON-LD
│   ├── page.tsx                # Landing
│   ├── globals.css             # Tailwind v4 theme + utilities
│   ├── opengraph-image.tsx     # Auto-generated 1200x630 OG image
│   ├── icon.svg                # Favicon (also visible at /icon.svg)
│   ├── manifest.ts             # PWA manifest
│   ├── robots.ts               # robots.txt
│   ├── sitemap.ts              # sitemap.xml
│   ├── privacy/page.tsx        # /privacy
│   ├── terms/page.tsx          # /terms
│   └── support/page.tsx        # /support
├── components/
│   ├── Nav.tsx                 # Sticky nav
│   ├── Hero.tsx                # Above-fold + phone mockup
│   ├── Marquee.tsx             # Tradition names scrolling band
│   ├── Traditions.tsx          # 6 tradition cards
│   ├── HowItWorks.tsx          # 3-step explainer
│   ├── Modes.tsx               # Single / Buddy / Family
│   ├── Pricing.tsx             # 3 credit packs
│   ├── FAQ.tsx                 # Accordion + JSON-LD FAQ rich result
│   ├── CTA.tsx                 # Final call-to-action
│   └── Footer.tsx              # Links + socials
├── lib/
│   ├── site.ts                 # All constants in one place
│   └── cn.ts                   # className merge helper
├── public/                     # Static assets — see ASSETS_NEEDED below
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── vercel.json
```

## SEO checklist (already in code)

- ✅ `<title>` + meta description per page (Metadata API)
- ✅ Canonical URLs
- ✅ Open Graph + Twitter Card with auto-generated 1200×630 image
- ✅ JSON-LD `MobileApplication` + `FAQPage` schema
- ✅ `robots.txt` + `sitemap.xml` auto-generated
- ✅ Semantic HTML (`<main>`, `<section>`, `<article>`, `<h1>` once)
- ✅ Mobile-first responsive
- ✅ `theme-color` + manifest for PWA
- ✅ Image format hints (AVIF/WebP)
- ✅ Lazy animations (Framer Motion `whileInView`)
- ✅ Strict-Transport, X-Frame-Options, Permissions-Policy headers

After deploy, submit to:
- Google Search Console: https://search.google.com/search-console (add property + sitemap)
- Bing Webmaster: https://www.bing.com/webmasters

## Updating store URLs

Once you have the Apple App Store ID:

1. Edit `.env.production` (in Vercel dashboard):
   ```
   NEXT_PUBLIC_APPSTORE_URL=https://apps.apple.com/app/id6XXXXXXXXX
   NEXT_PUBLIC_PLAYSTORE_URL=https://play.google.com/store/apps/details?id=club.saatva.palmai
   ```
2. Redeploy (auto-triggers on env var change).

## Assets required

See `public/ASSETS_NEEDED.md` for the full list.
