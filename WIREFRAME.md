# PKT Myanmar — Full Website Wireframe & Spec (v3 · 3-Language)

> ဒီဇိုင်း: "ခရီး (Journey)" concept · **အနီ Red + ရွှေ Gold** · အဖြူ ရှင်းရှင်း · Japan motifs (Sakura/Fuji/လှိုင်း) · Mobile-first
> အရောင်/Animation အသေးစိတ် → `DESIGN-SYSTEM.md` · Security → `SECURITY.md`
> ဘာသာစကား: **မြန်မာ / ဂျပန် / English (၃ မျိုး)** — page တိုင်း ဘာသာတစ်မျိုးတည်းဖြင့် သီးသန့်ပြမယ် (ရောမထား)

---

## 1. Language System (၃ မျိုး)

| Code | ဘာသာ | မှတ်ချက် |
|------|------|---------|
| `my` | မြန်မာ | Default (အဓိက audience) |
| `ja` | 日本語 | ဂျပန် partner/ကျောင်းအတွက် |
| `en` | English | နိုင်ငံတကာ/ဂျပန်ကုမ္ပဏီ (English သုံးသူ) |

**Switch Button:** အပေါ်ဆုံး Top Utility Bar မှာ **`[မြန်မာ | 日本語 | EN]`** segmented control (ဒါမှမဟုတ် dropdown globe icon)။

**Behavior (အရေးကြီး):**
1. ဘာသာတစ်မျိုးရွေးရင် **page မှာရှိတဲ့ စာသားအားလုံး** အဲဒီဘာသာတစ်မျိုးတည်းနဲ့ ပြောင်းသွားမယ် (မြန်မာ+ဂျပန် ရောမပြ)
2. ရွေးထားတာကို **localStorage/cookie** မှာ သိမ်း → နောက်တစ်ခါ ဝင်ရင် အလိုအလျောက်
3. URL က **`/my`, `/ja`, `/en`** path prefix သုံးမယ် (SEO အတွက်) — ဥပမာ `/ja/services`
4. i18n library: **next-intl** (Next.js App Router နဲ့ အကောင်းဆုံး)
5. Fallback font: Noto Sans Myanmar (`my`) · Noto Sans JP (`ja`) · Inter (`en`)

> ⚠️ အရင်က Hero မှာ "မြန်မာ headline + ဂျပန် subtitle" တွဲပြခဲ့တာကို **ဖျက်**လိုက်မယ် — အခုက ဘာသာတစ်မျိုးတည်းပဲ ပြမယ်။

---

## 2. Sitemap (locale prefix နဲ့)

```
/[locale]/
├── /                     Home
├── /about                ကျွန်ုပ်တို့အကြောင်း
├── /services             ဝန်ဆောင်မှု (Education / Sending / Support)
├── /news                 သတင်း
├── /news/[slug]          သတင်း detail
├── /gallery              ဓာတ်ပုံများ
├── /contact              ဆက်သွယ်ရန်
├── /login                အကောင့်ဝင်ရန်
├── /register             အကောင့်ဖွင့်ရန်
└── /dashboard            (protected — login ဝင်မှ)
    ├── /dashboard/overview      ပင်မ
    ├── /dashboard/application   လျှောက်လွှာ status
    ├── /dashboard/documents     စာရွက်စာတမ်း
    ├── /dashboard/messages      Live chat
    └── /dashboard/profile       ပရိုဖိုင်
```

---

## 3. Global Layout (page တိုင်းမှာ ရှိ)

1. **Top Utility Bar (36px):** `[🌐 မြန်မာ ▾ | 日本語 | EN]` + ဖုန်း + SNS + `[Login]`
2. **Header (sticky, 64px):** Logo + Nav (ပင်မ·သင်တန်း·ပို့ဆောင်·သတင်း·ဆက်သွယ်) + `[လျှောက်ထားရန်]` CTA
3. **Floating Live Chat Widget** (bottom-right, amber bubble + unread badge)
4. **Footer:** PKT tagline + ဂျပန်/မြန်မာကုမ္ပဏီ + ကျောင်း ၁၁ + SNS + language toggle (footer မှာလည်း ပါ)

---

## 4. Page-by-Page Spec

### 4.1 Home (`/`) — [HOME-WIREFRAME.md မှာ အသေးစိတ် ရှိ]
S0 Top bar → S1 Header → S2 Hero(split) → S3 Journey(4 steps) → S4 Why PKT → S5 Courses → S6 Stats+Media → S7 Testimonials → S8 News(list) → S9 CTA banner → S10 Contact → S11 Footer → Floating chat

> ပြောင်းလဲချက်: Hero S2 မှာ headline + subtitle က **ဘာသာတစ်မျိုးတည်း** (i18n key `hero.title` + `hero.sub` နှစ်ခုလုံး အတူပြောင်း)။ MM+JP တွဲပြတာ မရှိတော့။

### 4.2 About (`/about`)
1. Page hero (title + breadcrumb)
2. Founder message — photo + ပုံပြင် + SNS followers (190k/67k)
3. Philosophy — Value / Intention / Vision (3 cards)
4. Our Story — vertical timeline (2010→…→Now)
5. Organization — ဂျပန်ကုမ္ပဏီ + မြန်မာကုမ္ပဏီ + PDF လက်မှတ် links
6. School locations — 11 school cards (photo, name, address, phone, Google Maps link)

### 4.3 Services (`/services`)
1. Tab switcher: **ပညာရေး (Education) / ပို့ဆောင် (Sending) / ထောက်ပံ့ (Support)**
2. Education: 3 course cards (ဂျပန်စာ N5→N2 / IT အင်ဂျင်နီယာ / သီးသန့်ကျွမ်းကျင်) + POINT list
3. Sending: 3-step process (စာရွက်/ရွေးချယ်/ခရီး)
4. Support: 24/7 + career + company consulting
5. CTA → [ဆက်သွယ်ရန်]

### 4.4 News (`/news`) + Detail
- List: year filter + month group + **list layout** (not grid) + pagination
- Detail: title, date, category, body, image gallery, share, back link

### 4.5 Gallery (`/gallery`)
- Year filter + month accordion + masonry grid + lightbox modal

### 4.6 Contact (`/contact`)
- Form (အမည်*, ကုမ္ပဏီ, ဖုန်း, Email*, အမျိုးအစား, စာသား*, consent) + Google Map + ရုံးအချက်အလက်

### 4.7 Login (`/login`)
- Email + Password + [Social: Google/Facebook] + [Forgot?] + [Register →]
- Language switch လည်း ဒီမှာ ပါ (form label တွေလည်း ဘာသာပြောင်း)

### 4.8 Register (`/register`)
- အမည်, Email, ဖုန်း, စကားဝှက်, လျှောက်ထားမယ့်သင်တန်း (dropdown), consent

### 4.9 Student Dashboard (protected)
**Sidebar nav:** ပင်မ · လျှောက်လွှာ · စာရွက်စာတမ်း · စာတိုပေးပို့ · ပရိုဖိုင် (unread badge)

| Page | Content |
|------|---------|
| Overview | status card + next-step checklist + နောက်ဆုံးသတင်း + unread count |
| Application | Timeline (လျှောက်လွှာ→စစ်ဆေး→အင်တာဗျူး→COE→Visa→ခရီးစဉ်) + **real-time status** |
| Documents | upload list + verify status (Supabase Storage) |
| Messages | chat list + live chat window + typing indicator (Supabase Realtime) |
| Profile | edit info + password change + language preference |

---

## 5. Data Model (Supabase Postgres)

```
profiles      (user_id, full_name, phone, nrc, dob, address, lang_pref)
applications  (id, student_id, course_type, status, branch_id, submitted_at)
timeline      (id, application_id, step, status, note, updated_at)
documents     (id, application_id, doc_type, file_url, verified)
branches      (id, name_mm, name_ja, name_en, city, address, phone, lat, lng)  ← 11 ကျောင်း (3-lang)
news          (id, slug, category, cover, published_at) + news_i18n(title/body per lang)
inquiries     (id, name, company, phone, email, type, message, lang, created_at)
conversations (id, student_id, staff_id)
messages      (id, conversation_id, sender_id, body, file_url, read_at)
```

> **i18n data note:** Content က WordPress မှာ ဆိုရင် language ၃ မျိုးစလုံးအတွက် field ခွဲ (WPML/Polylang) ဒါမှမဟုတ် Supabase `*_i18n` table သုံး။

---

## 6. API Endpoints

```
POST /api/auth/*            Supabase Auth (login/register/otp/social)
GET  /api/application       ကိုယ့် application + timeline
POST /api/documents         upload (Supabase Storage)
GET  /api/news?lang=my      content (WP REST proxy, lang filter)
POST /api/inquiry           contact form (lang ပါတင်မယ်)
GET  /api/chat/[...]        chat history + Supabase Realtime channel
```

---

## 7. Roadmap

| Phase | Scope |
|-------|-------|
| 1 | Public site (Home/About/Services/News/Gallery/Contact) + 3-language i18n |
| 2 | Auth (login/register/forgot) + Dashboard skeleton |
| 3 | Application tracking + Documents upload |
| 4 | Live chat (guest widget + student↔staff) |
| 5 | SEO, i18n URL polish, deploy |
