# PKT Myanmar — Next.js App (`web/`)

> ဒါက Next.js application ဖြစ်ပါတယ်။ Project အပြည့်အစုံ (design system, spec, security) အတွက်
> repository root ရဲ့ **[`../README.md`](../README.md)** ကို ဖတ်ပါ။

## Quick start

```bash
cd web
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command | လုပ်ဆောင်ချက် |
|---------|--------------|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Type check |

## Structure

```
src/
├── app/          # routes (App Router)
├── components/   # UI components
└── lib/
    ├── i18n/     # dictionaries + language provider
    ├── news.ts   # demo news data
    ├── courses.ts# demo courses data
    └── images.ts # demo image URLs
```

## Notes

- Fonts: Sora · Inter · Instrument Serif + Noto Sans Myanmar / JP (Google Fonts, `app/layout.tsx`).
- Design tokens & animations: `src/app/globals.css` (`@theme`).
- `globals.css` ပြင်ပြီး CSS မတင်ရင် dev server **restart** လုပ်ပါ။
- Data (news/courses/images) က demo — Laravel API ရလာရင် အစားထိုးပါ။
- i18n URL routes (`/my` `/ja` `/en`) — TODO.
