# Assets Required

Drop these into `palmai_landing/public/` before deploying.

## Critical (Apple + Google + browsers reject without these)

| File | Size | Format | Notes |
|------|------|--------|-------|
| `favicon.ico` | 32×32 | ICO | Generate from your 1024 logo at https://realfavicongenerator.net |
| `apple-touch-icon.png` | 180×180 | PNG | Same source, opaque background |
| `icon-192.png` | 192×192 | PNG | PWA manifest |
| `icon-512.png` | 512×512 | PNG | PWA manifest |
| `icon-maskable.png` | 512×512 | PNG | PWA — full-bleed with safe zone padding (~12% inset) |
| `og.png` | 1200×630 | PNG | **Optional** — `app/opengraph-image.tsx` auto-generates one. Override only if you want a hand-designed version. |

## Recommended (boost conversion + listing quality)

| File | Size | Format | Notes |
|------|------|--------|-------|
| `app-screenshot-home.png` | 1290×2796 | PNG | iPhone 16 Pro Max screenshot of home screen. Used in any future "Screenshots" section. |
| `app-screenshot-reading.png` | 1290×2796 | PNG | Hindu reading result screen. |
| `app-screenshot-buddy.png` | 1290×2796 | PNG | Buddy compatibility result. |
| `app-screenshot-paywall.png` | 1290×2796 | PNG | Paywall screen showing 3 packs. |
| `hero-palm.png` or `hero-palm.webp` | 1024×1024 | PNG/WebP | Optional decorative palm illustration for hero. Currently the hero uses an inline SVG mockup. |

## Optional polish

| File | Notes |
|------|-------|
| `palm-pattern.svg` | Repeating sacred-geometry background for FAQ or CTA section |
| `tradition-symbols/*.svg` | One vector per tradition (om, cheiro, taiji, lotus, tarot, sefirot tree) — would replace the unicode glyphs in `Traditions.tsx` |
| `press-kit.zip` | Logo (light + dark + monochrome) + screenshots — for journalists/creators |

## How to generate the icon set fast

You already have one 1024×1024 logo PNG (the gold-on-charcoal app icon).

1. Drop it on https://realfavicongenerator.net.
2. Tweak — set background color `#0b0b0d`, leave foreground transparent.
3. Download. You get a ZIP containing every PNG/ICO size.
4. Move these into `public/`:
   - `favicon.ico`
   - `apple-touch-icon.png`
   - `android-chrome-192x192.png` → rename `icon-192.png`
   - `android-chrome-512x512.png` → rename `icon-512.png`
5. For maskable, use https://maskable.app/editor — drop your 1024 PNG, drag the safe-zone preview, export at 512.

## OG image override (skip if happy with auto-generated)

If you want a custom OG instead of the auto-generated one in `app/opengraph-image.tsx`:

1. Design 1200×630 PNG in Figma/Photoshop. Match palette (#0b0b0d bg, #e9c176 gold).
2. Save as `public/og.png`.
3. The Metadata API in `app/layout.tsx` already references `/og.png` — once it exists, Next serves it.
4. Test: deploy to Vercel preview, paste preview URL into https://www.opengraph.xyz to verify Twitter / FB / LinkedIn render.

## Done checklist

- [ ] `favicon.ico` in `public/`
- [ ] `apple-touch-icon.png` in `public/`
- [ ] `icon-192.png` in `public/`
- [ ] `icon-512.png` in `public/`
- [ ] `icon-maskable.png` in `public/`
- [ ] At least 4 app screenshots (optional but recommended for v2 of the page)
- [ ] DNS pointed to Vercel
- [ ] Search Console + Bing Webmaster verified
