# PKT Myanmar — Website Frontend

> မြန်မာနဲ့ ဂျပန်ကို ပညာရေးနဲ့ ချိတ်ဆက်တဲ့ **PKT Myanmar** အတွက် modern website frontend။
> Japan aesthetic + Myanmar audience အတွက် ဒီဇိုင်းထုတ်ထားပြီး **၃ ဘာသာ** (မြန်မာ / 日本語 / English) ပံ့ပိုးထားပါတယ်။
> Content ကို [pktjapan.jp](https://pktjapan.jp/) official site ကနေ နမူနာယူထားပါတယ်။

---

## 📌 Overview

| Item | Detail |
|------|--------|
| Product | PKT Myanmar — ဂျပန်စာ သင်တန်း + ပို့ဆောင်ရေး + ဘဝထောက်ပံ့ရေး |
| Audience | ဂျပန်မှာ ပညာသင်ချင်/အလုပ်လုပ်ချင်တဲ့ မြန်မာလူငယ်များ |
| Languages | မြန်မာ (`my`) · 日本語 (`ja`) · English (`en`) |
| Status | Phase 1 (public site) — UI/UX ready, backend integration pending |
| Backend (planned) | **Laravel API** (content, auth, forms) |

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 16** (App Router) |
| UI | **React 19** + **TypeScript** |
| Styling | **Tailwind CSS v4** (CSS-first `@theme`) |
| Fonts | Sora · Inter · Instrument Serif + Noto Sans Myanmar / Noto Sans JP |
| Animation | CSS + IntersectionObserver + `requestAnimationFrame` (custom) |
| i18n | Lightweight client-side dictionary provider (no extra lib) |
| Icons/Motifs | Inline SVG (seigaiha, sakura, asanoha, maps, flight path) |

---

## ✅ Current Status (အခုထိ ပြီးသွားတာ)

### Pages
| Route | ဖော်ပြချက် |
|-------|-----------|
| `/` | Home (single-page sections) |
| `/about` | ကျွန်ုပ်တို့အကြောင်း (founder, philosophy, timeline, org, 11 schools) |
| `/services` | ဝန်ဆောင်မှုများ (education / sending / support) + **Sending Flow (6 steps)** |
| `/courses` | ဖွင့်လှစ်နေသော သင်တန်းများ (filter + status badges + images) |
| `/news` + `/news/[slug]` | သတင်း (year filter + detail) |
| `/contact` | ဆက်သွယ်ရန် (form + map) |
| `/login` · `/register` | Auth (UI only — demo) |
| `/privacy-policy` | ကိုယ်ရေးအချက်အလက် မူဝါဒ |
| `not-found` | 404 page |

### Home sections
Hero (5-image wave carousel + seigaiha + flight trail) → Trust strip → Journey ("The Road to Japan", animated road) → Why PKT → Education/Courses (sakura watermark) → Stats → Testimonials → FAQ → News (orange seigaiha+sakura) → CTA (enrollment watermark) → Contact.

### Global
- Sticky header + **active nav state** · Notice bar · Footer (seigaiha+asanoha watermark)
- **Language switcher** (3 languages, persisted in `localStorage`)
- Breadcrumbs (subpages) · Back-to-top · Mobile fixed CTA · Floating chat placeholder
- **Accessibility**: skip-to-content, focus-visible ring, `prefers-reduced-motion`, ARIA
- **SEO**: per-page metadata, OpenGraph, JSON-LD, `sitemap.xml`, `robots.txt`

---

## 📁 Project Structure

```
pkt-v4-frontend/
├── README.md                 ← (this file)
├── WIREFRAME.md              ← full site spec
├── DESIGN-SYSTEM.md          ← colors / fonts / animation spec
├── SECURITY.md               ← security architecture
├── HOME-WIREFRAME.md         ← detailed Home spec
├── wireframe.html            ← all-pages interactive wireframe
├── home-wireframe.html       ← Home detailed wireframe
└── web/                      ← Next.js app
    ├── src/
    │   ├── app/              ← routes (App Router)
    │   │   ├── layout.tsx    ← providers, header/footer, notice, JSON-LD
    │   │   ├── page.tsx      ← Home
    │   │   ├── about/ services/ courses/ news/ contact/ login/ register/ privacy-policy/
    │   │   ├── sitemap.ts · robots.ts · not-found.tsx
    │   │   └── globals.css   ← design tokens + animations
    │   ├── components/       ← UI components
    │   └── lib/
    │       ├── i18n/         ← dictionaries.ts + LanguageProvider.tsx
    │       ├── news.ts       ← news data (demo)
    │       ├── courses.ts    ← courses data (demo)
    │       └── images.ts     ← demo image URLs
    ├── package.json
    └── next.config.ts
```

---

## 🚀 Getting Started

```bash
# 1. app folder ထဲ ဝင်ပါ
cd web

# 2. dependencies install
npm install

# 3. dev server
npm run dev
# → http://localhost:3000
```

### Scripts
| Command | လုပ်ဆောင်ချက် |
|---------|--------------|
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | TypeScript type check |

> ⚠️ `globals.css` ကို ပြင်ပြီးရင် CSS hot-reload မတင်တဲ့အခါ **dev server restart** လုပ်ဖို့ လိုနိုင်ပါတယ်။

---

## 🎨 Design System

> အသေးစိတ် → [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md)

### Colors
| Token | Hex | အသုံး |
|-------|-----|-------|
| `brand` (အနီ) | `#c41e24` | buttons, active nav, CTA, links |
| `gold` (ရွှေ) | `#d4a843` | icons, dividers, accent |
| `cream` | `#faf8f5` | section background |
| `ink` | `#1a1a1a` | text / dark sections |

Tailwind tokens: `bg-brand`, `text-gold`, `bg-cream`, `text-ink`, `text-muted`, `border-line`, `bg-gold-tint`, `bg-brand-tint` — `src/app/globals.css` ရဲ့ `@theme` မှာ သတ်မှတ်ထား။

### Fonts (3 families)
| Class | Font | အသုံး |
|-------|------|-------|
| `font-display` / `font-heading` | **Sora** | headings, big numbers |
| `font-body` / `font-ui` | **Inter** | body, nav, buttons |
| `font-serif` | **Instrument Serif** | quotes / accents |

> မြန်မာ/ဂျပန်စာက Noto Sans Myanmar / Noto Sans JP ကို အလိုအလျောက် fallback လုပ်တယ်။

### Japan motifs (watermark)
- **Seigaiha** (ဂျပန်လှိုင်း) — Home + subpage headers
- **Sakura** — Education section
- **Seigaiha + Sakura (orange)** — News section
- **Seigaiha + Asanoha** — Footer (3% opacity)
- **Flight trail** — Hero (rAF, 2 planes)

---

## 🌐 Internationalization (3 languages)

- Dictionary: `src/lib/i18n/dictionaries.ts` — `my` / `ja` / `en`.
- Provider: `src/lib/i18n/LanguageProvider.tsx` — React context + `localStorage` (`pkt-lang`).
- Usage:
  ```tsx
  const { t, lang } = useI18n();
  <h1>{t("hero.title")}</h1>
  ```
- **စာသားအသစ်ထည့်နည်း:** key တစ်ခုကို ဘာသာ ၃ ခုလုံးမှာ ထည့်ပါ။
  ```ts
  "my": { "my.key": "မြန်မာ" },
  "ja": { "my.key": "日本語" },
  "en": { "my.key": "English" },
  ```
- Language switcher: `src/components/LanguageSwitch.tsx`
- `.tsx` ဖိုင်တွေမှာ `"use client"` လိုတယ် (hooks သုံးလို့)။

> ⏳ **TODO:** URL-based locale (`/my`, `/ja`, `/en`) + `hreflang` — SEO အတွက် နောက်အဆင့်။

---

## 🗂 Content & Data (demo → API)

| File | ဖော်ပြချက် |
|------|-----------|
| `src/lib/news.ts` | သတင်း (slug, date, category, 3-language title, image) |
| `src/lib/courses.ts` | ဖွင့်လှစ်နေသော သင်တန်းများ (level, date, fee, status) |
| `src/lib/images.ts` | Demo image URL များ (Unsplash) |

> လက်ရှိ data တွေက **demo/static** ပါ။ **Laravel API** ရလာရင် ဒီ file တွေကို `fetch` နဲ့ အစားထိုးပါ။
> ပုံတွေကို `next.config.ts` ရဲ့ `images.remotePatterns` မှာ domain ခွင့်ပြုထားရမယ် (လက်ရှိ: `picsum.photos`, `images.unsplash.com`, `pktjapan.jp`)။

---

## ♿ Accessibility & SEO

**A11y**
- Skip-to-content link (`#main`)
- Global `:focus-visible` ring
- `prefers-reduced-motion` — animations ပိတ်
- Semantic headings + `aria-current` / `aria-expanded` / `aria-label`
- Breadcrumbs `nav[aria-label="Breadcrumb"]`

**SEO**
- Per-page `metadata` export (`app/*/page.tsx`)
- Root `metadataBase` + OpenGraph + title template
- JSON-LD `EducationalOrganization` (`app/layout.tsx`)
- `app/sitemap.ts` → `/sitemap.xml`
- `app/robots.ts` → `/robots.txt`

---

## 🔒 Security

> အသေးစိတ် → [`SECURITY.md`](./SECURITY.md)

Highlights:
- Uploaded documents (student portal) → private storage + signed upload + allowlist + virus scan + RLS (backend မှာ enforce)
- API → Zod validation + rate limit + HTTPS + CORS
- Secrets → server-side only
- **Backend က Laravel** ဖြစ်လာရင် auth/upload/storage ကို Laravel မှာ enforce လုပ်ရမယ် (SECURITY.md က general principle အဖြစ် သုံး)။

---

## 🚢 Deployment

Recommended: **Vercel** (Next.js native)

```bash
# build စစ်ဆေး
cd web && npm run build
```

- Domain: `pktjapan.jp` (သို့) ကိုယ်ပိုင် domain
- Env: Laravel API base URL ကို `.env` မှာ ထည့်ပါ (`NEXT_PUBLIC_API_URL`)
- `metadataBase` ကို production domain သို့ ပြောင်းပါ

---

## 🗺 Roadmap (ကျန်သေးတာ)

1. **i18n URL routes** — `app/[locale]/...` + `hreflang` (SEO)
2. **Laravel API integration** — news / courses / FAQ / contact form / auth
3. **Student portal** — application status + document upload + live chat
4. **Real images** — PKT photos (Unsplash placeholder အစားထိုး)
5. **Auth → real** — Laravel/Supabase auth
6. **Tests** — unit + e2e
7. **Performance/SEO polish** — Lighthouse, og images

---

## 🧭 Guidelines & Conventions

- **Component:** `src/components/PascalCase.tsx`. Hooks သုံးရင် `"use client"`.
- **Section:** `Section` (`tone="white|cream|dark"`) + `SectionHeading` ကို ပြန်သုံး။
- **Text:** Hardcode မလုပ်ဘဲ `t("key")` သုံး၊ dictionary မှာ ၃ ဘာသာ ထည့်။
- **Colors:** Tailwind tokens (`bg-brand`) သုံး၊ hex တိုက်ရိုက် မရေးပါနဲ့။
- **Images:** `next/image`, `sizes` မှန်အောင်၊ remote domain ကို `next.config.ts` မှာ ခွင့်ပြု။
- **Motion:** `transform`/`opacity` ပဲ၊ `prefers-reduced-motion` လေးစား။
- **A11y:** interactive element တိုင်း `aria-label`/`aria-expanded`၊ keyboard focus ရ။

---

## 📚 Related Docs

| File | အကြောင်း |
|------|-----------|
| [`WIREFRAME.md`](./WIREFRAME.md) | Full sitemap, page-by-page spec, data model, API |
| [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) | Color tokens, Japan motifs, 21 animations |
| [`SECURITY.md`](./SECURITY.md) | Security architecture (upload/auth/API) |
| [`HOME-WIREFRAME.md`](./HOME-WIREFRAME.md) | Home page detailed spec |
| [`wireframe.html`](./wireframe.html) | All-pages interactive wireframe |
| [`home-wireframe.html`](./home-wireframe.html) | Home detailed wireframe |

---

© 2026 PKT Co., Ltd. — Frontend built with Next.js.
