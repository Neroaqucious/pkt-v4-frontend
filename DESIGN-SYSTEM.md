# PKT Myanmar — Design System & Animation Spec (v3)

> Brand: **အနီ (Red) + ရွှေ (Gold)** main color · အဖြူ ရှင်းရှင်းနောက်ခံ · Japan motifs (Sakura / Mt.Fuji / ရေလှိုင်း)

---

## 1. Color Palette

### Primary — Red (အနီ)
| Token | Hex | သုံးတဲ့နေရာ |
|-------|-----|-------------|
| `red` | `#C41E24` | Main buttons, active nav, CTA, links, highlights |
| `red-dark` | `#9B1219` | hover/active state |
| `red-light` | `#E8556B` | subtle accents, badges |
| `red-tint` | `#FDF2F2` | selected bg, tag bg, hover fill |

### Accent — Gold (ရွှေ)
| Token | Hex | သုံးတဲ့နေရာ |
|-------|-----|-------------|
| `gold` | `#D4A843` | icons, divider, "verified" badge, step connector |
| `gold-light` | `#DDB84E` | hover |
| `gold-tint` | `#FEF9EB` | highlight bg |

### Neutral — White ရှင်းရှင်း
| Token | Hex | သုံးတဲ့နေရာ |
|-------|-----|-------------|
| `white` | `#FFFFFF` | **main background** |
| `surface` | `#FAFAFA` | card/section alt bg |
| `border` | `#E5E7EB` | divider, border |
| `ink` | `#1A1A1A` | body text |
| `muted` | `#6B7280` | secondary text |

### Block Background — pktjapan.jp pattern (section အလှည့်ကျ)
| Section | Background |
|---------|-----------|
| Hero / Service / Contact | `#FAF8F5` (cream) |
| About / News | `#FFFFFF` (white) |
| Gallery | `#111827` (dark, white text) |

> block တွေ လိုင်းမခွဲဘဲ **cream ↔ white အလှည့်ကျ** background နဲ့ ခွဲခြားမယ်။ Gallery တစ်ခုပဲ dark။

### Japan Motif Color (ဖျော့ဖျော့ decorative ပဲ)
| Element | Color | Opacity |
|---------|-------|---------|
| Sakura ပန်း | `#F6D7DE` (pink) | 5–10% |
| Mt.Fuji | `#C41E24`/ink | 5–8% |
| ရေလှိုင်း (seigaiha) | `#D4A843` | 8–12% |

> **Rule:** Motif တွေက **အရမ်းဖျော့** — white background ရဲ့ ရှင်းတာကို မဖျက်စေနဲ့။ "Japan mood" ကို သိသာသိသာမဟုတ်ဘဲ နူးနူးညံ့ညံ့ ပေးရမယ်။

---

## 2. Typography

| Role | Font | မှတ်ချက် |
|------|------|---------|
| Myanmar | **Noto Sans Myanmar** (ဒါမှမဟုတ် Padauk) | body + heading |
| Japanese | **Noto Sans JP** | ja locale |
| English/Latin | **Inter** | en locale + နံပါတ် |

- Heading: bold, tight letter-spacing; size scale: H1 40–48px (mobile 30px), H2 32px, H3 24px
- Body: 16px, line-height 1.7 (မြန်မာစာက line-height နည်းနည်းမြင့်ရတယ်)

---

## 3. Japan Motifs (ဘယ်နေရာမှာ ဘယ်လိုထည့်မလဲ)

| Motif | နေရာ | ပုံစံ |
|-------|-------|-------|
| 🌸 Sakura | **Global** — ကျနေတဲ့ပန်း (falling petals), Hero မှာ အများဆုံး | 6–10 petals, CSS/JS, opacity 5–10% |
| 🗻 Mt.Fuji | Hero image အောက်ခြေ / footer ခွဲကြောင်း | silhouette SVG, opacity 5–8% |
| 🌊 ရေလှိုင်း (seigaiha) | Section divider (Hero→Journey, CTA→Contact) | repeating radial pattern, opacity 8–12% |

- အားလုံး **pointer-events:none**, **behind content**, mobile မှာ နည်းနည်းလျှော့
- `prefers-reduced-motion` ရှိရင် petals/motion ပိတ်

---

## 4. Animation Spec (အသေးစိတ်)

### Global Principles
- **Transform + Opacity ပဲ** သုံး (reflow/repaint ရှောင် → 60fps)
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (ဂျပန်စတိုင် ချောမွေ့, tail နည်းနည်းနူးညံ့)
- `prefers-reduced-motion` → အကုန် disable
- Library: **Framer Motion** (React) + CSS keyframes (petals, wave)

### Animation Table

| # | Animation | Trigger | Duration | Easing | Implementation |
|---|-----------|---------|----------|--------|----------------|
| 1 | Page transition (route) | route change | 0.3s | easeOut | Framer `AnimatePresence` — fade + `y: 12px` |
| 2 | Hero headline fade-up | page load | 0.5s/stagger 0.1s | [0.22,1,0.36,1] | `motion.h1` stagger children |
| 3 | Hero image slide-in | page load | 0.6s | easeOut | `x: 40 → 0` + fade |
| 4 | Sakura petals falling | load (loop) | 10–15s linear | linear | CSS `@keyframes fall` — 6–10 petals, rotate + drift |
| 5 | Scroll reveal (section) | `whileInView` | 0.5s | [0.22,1,0.36,1] | `y: 24→0, opacity 0→1`, `viewport once, margin:-80px` |
| 6 | Stats count-up | in view | 1.5s | easeOut | Framer `animate` number 0→target |
| 7 | Journey connector line draw | in view | 1s | easeInOut | SVG `pathLength` 0→1 |
| 8 | Step icon pulse | hover | 0.25s | easeOut | `scale: 1.08` + gold ring |
| 9 | Course card lift | hover | 0.25s | [0.22,1,0.36,1] | `translateY(-6px)` + shadow + red border |
| 10 | Testimonials carousel | auto/manual | 0.4s | easeOut | Swiper fade |
| 11 | Language switch crossfade | lang change | 0.3s | easeOut | `AnimatePresence` keyed by locale |
| 12 | Chat widget open | click | 0.25s | spring | `scale 0.9→1, y 16→0` |
| 13 | Unread badge bounce | new msg | 0.4s | spring | `scale 1→1.2→1` |
| 14 | Typing indicator dots | typing | 1.2s loop | easeInOut | 3 dots opacity stagger |
| 15 | Button press | active/tap | 0.1s | — | `scale(0.97)` |
| 16 | Button arrow slide | hover | 0.2s | easeOut | icon `x: 0→4px` |
| 17 | Form focus ring | focus | 0.15s | — | CSS box-shadow |
| 18 | Form success check | submit ok | 0.4s | spring | check `pathLength` draw |
| 19 | Form error shake | invalid | 0.3s | — | `x: [0,-6,6,-3,3,0]` |
| 20 | Fuji parallax | scroll | continuous | linear | `translateY(scrollY * 0.15)` |
| 21 | Wave drift | load (loop) | 20s linear | linear | CSS `background-position` shift |

### Micro-interaction Notes
- **Sticky header:** scroll 30px ကျော်ရင် `bg: white + shadow` 0.2s crossfade
- **Language switch:** content က `opacity 1→0→1` (0.3s) — flash မဖြစ်စေနဲ့
- **Counter:** comma format နဲ့ တစ်ပြိုင်တည်း animate (1,555)
- **Lazy loading:** hero အောက် image တွေက `loading="lazy"` + fade-in on load

---

## 5. Responsive Animation Rules

- **Mobile:** petals 4 ခုပဲ, parallax ပိတ်, duration တိုနည်းနည်း (battery/perf)
- **Desktop:** petals 8–10 ခု, parallax on, full stagger
- `matchMedia('(prefers-reduced-motion: reduce)')` → motion/parallax/petals off, fade ပဲ
