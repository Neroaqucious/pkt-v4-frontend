# PKT Myanmar — Home Page Detailed Wireframe (ဒီဇိုင်းအသစ်)

> ရည်ရွယ်ချက်: မူရင်း WordPress site နဲ့ **မတူအောင်** ဒီဇိုင်းအသစ်။
> **မြန်မာအမြင် + ဂျပန်အမြင်** နှစ်ခုလုံး လိုက်ဖက်တဲ့ design language နဲ့။

---

## 1. Design Language — Myanmar × Japan Fusion

| ကဏ္ဍ | မြန်မာအမြင် | ဂျပန်အမြင် | Fusion ရလဒ် |
|------|-------------|------------|--------------|
| **Color** | အနီ (သတ္တိ/စိတ်အား), ရွှေ (ဂုဏ်သိက္ခာ) | အဖြူ (သန့်ရှင်းမှု/ရိုးရှင်းမှု), Sakura/Fuji/လှိုင်း (Japan mood) | **Red + Gold main · White ရှင်းရှင်း** |
| **Typography** | လုံးချောဖောင့်, ရဲရဲတောက် headline | Sans-serif သန့်သန့်, hierarchy ကျန် | **Noto Sans Myanmar + Noto Sans JP** |
| **Spacing** | ရုပ်ပုံကြွယ်ဝ, နွေးထွေး | နေရာလွတ် (white space) များ, grid ကျန် | **ပုံကြွယ်ပေမယ့် breathing room များ** |
| **Tone** | အားပေးမှု, စိတ်အားတက် | တိကျမှု, ယုံကြည်စိတ်ချမှု | **"အိပ်မက် + ယုံကြည်မှု" နှစ်ခုပေါင်း** |

**Core metaphor:** "ခရီး (Journey)" — မြန်မာကနေ ဂျပန်အထိ ကျောင်းသားရဲ့ ခရီးလမ်း။ ဒီ metaphor က hero နဲ့ section flow မှာ ပေါ်လွင်စေမယ်။

**Design principles:**
1. Mobile-first (မြန်မာမှာ mobile အဓိက) — ဒါပေမဲ့ desktop မှာ ဂျပန် client အတွက် ပြန့်ပြူးကျန်
2. ဘာသာစကား toggle က အမြဲမြင်ရမယ် (MM ⇄ JP)
3. Photos က တကယ့်လူတွေ၊ ကျောင်းသားတွေရဲ့ မျက်နှာနဲ့ စိတ်ခံစားမှု
4. Motion က နူးညံ့၊ ဂျပန်စတိုင် ချောမွေ့ (Framer Motion, easing နှေးနှေး)

---

## 2. Full Home Page — Section by Section (top → bottom)

ဒီအစီအစဉ်က မူရင်း site နဲ့ **လုံးဝမတူ**ဘူး။ Journey (ခရီး) flow နဲ့ စီထားတယ်။

### S0 · Top Utility Bar (thin, 36px)
```
[မြန်မာ ▾ | 日本語]  ·  📞 09-xxx  ·        [FB] [TikTok]        [အကောင့်ဝင်ရန် / ログイン]
```
- **MM/JP toggle** က ဒီမှာ အမြဲရှိ။ Toggle လုပ်ရင် content တစ်ခုလုံး ဘာသာပြောင်း (i18n)
- **Login** link → `/login`
- sticky မဟုတ်၊ scroll လုပ်ရင် ဖျောက်လိုက်နိုင် (header ကပဲ sticky)

### S1 · Header (sticky, 64px)
```
[PKT MYANMAR  logo]    ပင်မ | သင်တန်းများ | ပို့ဆောင်ရေး | သတင်း | ဆက်သွယ်      [လျှောက်ထားရန်]
                       (ホーム)(コース)(送り出し)(ニュース)(お問い合わせ)            (申し込む)
```
- Scroll လုပ်ရင် white bg + subtle shadow (ဂျပန်စတိုင် သန့်)
- Nav item hover → amber underline animate
- CTA button = amber, rounded, prominent
- Mobile: hamburger → full-screen drawer menu

### S2 · Hero (Split 2-column, 100vh-ish)  ← မူရင်းနဲ့ အဓိကကွာ
```
┌─────────────────────────────┬──────────────────────────────┐
│ eyebrow: "PKT EDUCATION     │  Image stack (ပင်မပုံ +       │
│   CENTER" (amber, small)    │  floating card)               │
│                             │   ┌──────────────┐            │
│ H1 (bold):                  │   │              │            │
│ "ဂျပန်ကို သွားမယ့် မင်းရဲ့   │   │  main photo  │            │
│  ခရီး ဒီကနေ စမယ်"           │   │              │            │
│                             │   └──────────────┘            │
│ JP sub (lighter):           │   ┌────────────────────┐      │
│ "ミャンマーと日本の未来を、    │   │ ✓ အင်တာဗျူးရက် ရနိုင်  │      │
│  教育でつなぐ。"              │   │   (floating chip)    │      │
│                             │   └────────────────────┘      │
│ body (1-2 line)             │                               │
│                             │                               │
│ [လျှောက်ထားရန်] [သင်တန်းများ▾]│                               │
│                             │                               │
│ trust row: 11 ကျောင်း ·     │                               │
│  10+ နှစ် · 1,555 ဦး        │                               │
└─────────────────────────────┴──────────────────────────────┘
```
**မူရင်း site နဲ့ ကွာခြင်း:** full-bg image မဟုတ်ဘဲ split layout; left = text focus, right = collage; floating "အင်တာဗျူးရက် ရနိုင်" chip က live availability ကိုပြ။
- **Interaction:** load မှာ headline line-by-line fade-up; image stack subtle parallax
- **Data:** trust numbers က Supabase/WordPress မှ (live count-up)

### S3 · Journey Path (4 steps)  ← အသစ်
```
  ① သင်ယူ        ② စာမေးပွဲ        ③ ပို့ဆောင်       ④ ဂျပန်ဘဝ
 (学ぶ)        (試験)           (送り出し)        (日本生活)
  ကျောင်း ၁၁ ကျောင်း  JLPT/NAT       COE → Visa       အိမ်/အလုပ်
   ဂျပန်စာ N5→N2     လက်မှတ်ရ       လေယာဉ်လက်မှတ်    24/7 ပံ့ပိုး
   ●────────●────────●────────●   ← connector line (animated)
```
- Horizontal 4-step with icons + connecting line. Mobile → vertical stack
- Click step → scroll/expand detail (accordion)
- **ဒါက မူရင်း site မှာမရှိတဲ့ ပေါင်းထည့်တဲ့ section**

### S4 · Why PKT (3 differentiators)
```
 [ကိုယ်ပိုင်ကျောင်း 11 ခု]  [ပွင့်လင်းသော ကုန်ကျစရိတ်]  [ဂျပန်တွင် 24/7 ပံ့ပိုး]
   直営11校                透明な費用              日本での24時間サポート
```
- Icon + title + 1-line. Gold accent on icon

### S5 · Courses (3 cards)
```
┌─ ဂျပန်စာ ─────┐  ┌─ IT အင်ဂျင်နီယာ ─┐  ┌─ သီးသန့်ကျွမ်းကျင် ─┐
│ icon           │  │ icon             │  │ icon                │
│ N5 → N2        │  │ Java/Python/Web  │  │ 介護/宿泊/外食/食品     │
│ 5 လ N4 ပြီး     │  │ 技人国 visa      │  │ 特定技能 visa         │
│ [အသေးစိတ် →]    │  │ [အသေးစိတ် →]     │  │ [အသေးစိတ် →]         │
└────────────────┘  └──────────────────┘  └─────────────────────┘
```
- Card hover → lift + border amber. Click → `/services`

### S6 · Live Stats + Media
```
 [11]      [1,555]      [10+]      [60+]
 ကျောင်း     ပို့ဆောင်ပြီး   နှစ်       ဝန်ထမ်း
   ↓ count-up animation (Framer Motion)
   ─ auto-scroll photo strip (subtle, secondary) ─
```

### S7 · Success Stories (Testimonials)  ← အသစ်
```
  ┌─────────────────────────────────────────────┐
  │  [ကျောင်းသား photo]  "ကျွန်တော် N4 ပြီးပြီး      │
  │                      ဂျပန်ကို ရောက်ခဲ့တယ်…"     │
  │                      — ကိုမင်းခန့်, တက္ကသိုလ်ဝင် │
  └─────────────────────────────────────────────┘
        ‹  ○ ○ ○  ›   (carousel)
```
- မူရင်း site မှာမရှိတဲ့ **ကျောင်းသား voice** — ယုံကြည်မှုတည်ဆောက်ဖို့ အရေးကြီး

### S8 · News (compact list, NOT 4-card grid)
```
  သတင်း / ニュース                    [အားလုံး →]
  ─────────────────────────────────────────────
  2026.03.06 · လှုပ်ရှားမှု   သာဝန်းကြီးကျောင်း ဂျပန်စာသင်တန်း → 
  2026.03.05 · အသိပေးချက်   PKT သာဝန်းကြီးကျောင်း ဖွင့်လှစ် → 
  2026.03.04 · ပွဲ         ဒေသခံများ လာရောက်ခဲ့ → 
```
- **List layout** (မူရင်း 4-card grid နဲ့ ကွာစေဖို့) — သေးငယ်ပြီး scan လုပ်ရလွယ်

### S9 · CTA Banner (full-width, amber/navy)  ← အသစ်
```
  "မင်းရဲ့ အိပ်မက်ကို ဒီနေ့ စတင်လိုက်ပါ"
   ～夢を今日から始めよう～
        [အခမဲ့ ဆွေးနွေးရန်] [လျှောက်ထားရန်]
```
- Bold, emotional. Red bg + gold button, ဒါမှမဟုတ် gold bg + white button

### S10 · Contact (お問い合わせ)
```
  အမည်*  [______]      ဖုန်း [______]
  Email* [______]      အမျိုးအစား [လျှောက်လွှာ ▾]
  စာသား* [________________________]
  ☐ ကိုယ်ရေးအချက်အလက် မူဝါဒကို သဘောတူပါသည်
  [ပေးပို့မည်]
```
- MM labels + JP helper text (placeholder မှာ). Validation (React Hook Form + Zod)
- Submit → Supabase `inquiries` table + email notify

### S11 · Footer
```
  [PKT MYANMAR]        ဂျပန်ကုမ္ပဏီ      မြန်မာကုမ္ပဏီ      ကျောင်းများ (11)   SNS
   မြန်မာနဲ့ဂျပန်ကို    株式会社ピーケーティー   May Myanmar Lin    Yangon/Mandalay...  [FB][TikTok]
   ပညာရေးနဲ့ချိတ်ဆက်
  ─────────────────────────────────────────────────────────
  © 2026 PKT · [ကိုယ်ရေးမူဝါဒ] · [မြန်မာ | 日本語] toggle
```

### Floating · Live Chat Widget (persistent, bottom-right)
```
            ┌─────────┐
            │  💬  ?   │  ← amber bubble, unread badge
            └─────────┘
  open → chat panel: "မင်္ဂလာပါ၊ ဘာကူညီပေးရမလဲ?" (Supabase Realtime)
```
- Guest mode (cookie id) + login ဝင်ရင် account နဲ့ချိတ်
- States: closed / open / typing indicator / unread count

---

## 3. Bilingual Strategy (MM + JP)

1. **Top toggle** က MM ⇄ JP — ပြောင်းရင် စာသားအားလုံး ပြောင်း (i18n dictionaries)
2. **Hero** မှာ MM headline + JP subtitle နှစ်ခုလုံး တစ်ပြိုင်နက် ပြ (fusion ပေါ်လွင်စေဖို့)
3. **ဂျပန် partner အတွက်** section (company info, services) မှာ JP ကို သေးငယ်တဲ့ helper text အနေနဲ့ ထည့်
4. Font fallback: Noto Sans Myanmar (MM) + Noto Sans JP (JP) — နှစ်ခုစလုံး Google Fonts

---

## 4. Component States (အသေးစိတ် interaction)

| Component | State / Interaction | Tech |
|-----------|---------------------|------|
| Header | transparent → solid on scroll | scroll listener |
| Language toggle | MM ⇄ JP switch | i18n (next-intl) |
| Hero | fade-up headline, parallax image, count-up trust | Framer Motion |
| Journey steps | hover highlight, click expand | React state |
| Course cards | hover lift + amber border | CSS/Tailwind |
| Stats | count-up on `whileInView` | Framer Motion |
| Testimonials | auto + manual carousel | Swiper |
| Chat widget | closed/open/typing/unread | Supabase Realtime |
| Contact form | validate → loading → success toast | RHF + Zod |

---

## 5. မူရင်း WordPress site နဲ့ ကွာခြားချက် (အကျဉ်း)

| မူရင်း (pktjapan.jp) | အသစ် (PKT Myanmar) |
|----------------------|---------------------|
| Full-bg hero + 1 CTA | Split hero + 2 CTA + floating chip |
| Stats bar သီးခြား | Stats + media ပေါင်းထား |
| Service hover-switch tabs | Journey 4-step + Course cards |
| News 4-card grid | News compact list |
| မရှိ | Testimonials (success stories) |
| မရှိ | Full-width CTA banner |
| မရှိ | Live chat widget + Login |
| ဂျပန်စာ သက်သက် | MM + JP bilingual |

---

## 6. Responsive Behavior

- **Mobile (<640px):** Journey steps vertical; hero image က headline အောက်; nav → drawer; CTA full-width
- **Tablet (640–1024px):** 2-col hero → stacked; courses 1-col
- **Desktop (>1024px):** full layout အထက်ပါအတိုင်း
