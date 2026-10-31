# PKT Myanmar — Web Security Spec (Frontend → Backend)

> မေးခွန်း: "Documents upload ပါတော့ front-end ကနေ backend ကို web security လုံခြုံမှုရှိရဲ့လား?"

**တိုတိုအဖြေ:** Frontend သက်သက်နဲ့တော့ **မလုံခြုံပါဘူး**။ Security ကို **backend မှာ အတင်းအကျပ် (enforce)** လုပ်မှသာ လုံခြုံမယ်။ အောက်က အချက်တွေကို မှန်မှန်ကန်ကန် လုပ်ရင် **လုံလုံခြုံခြုံ ရပါတယ်**။

---

## 1. Core Principle — Trust Nothing From The Client

- Client-side validation က UX အတွက်ပဲ။ တကယ့် validation က **server မှာ** လုပ်ရမယ်။
- Client ကို **service role / admin key ဘယ်တော့မှ မပေး**။ `anon` key + **Row Level Security (RLS)** ပဲ သုံး။
- လျှို့ဝှက် key တွေကို **server-side env vars** မှာပဲ ထား (client က `NEXT_PUBLIC_` ကလွဲလို့ မမြင်)။

---

## 2. Authentication (Login) Security — Supabase Auth

| ကာကွယ်မှု | ဘယ်လိုလုပ်မလဲ |
|------------|----------------|
| JWT + refresh token | Supabase Auth က auto handle (short-lived access token + rotating refresh) |
| Password policy | အနည်းဆုံး 8 လုံး, ရှုပ်ထွေးမှု (Auth settings မှာ) |
| Email verify | Register ပြီး email confirm လုပ်မှသာ login (Supabase) |
| OAuth (Google/Facebook) | Supabase OAuth provider — ကျွန်တော်တို့ password မကိုင်ဘူး |
| Login rate limit | Supabase ရဲ့ brute-force protection (default) + API rate limit ထပ်ထည့် |
| Session on server | Next.js middleware / server components မှာ `supabase.auth.getUser()` နဲ့ session စစ် |

**RLS (အရေးကြီးဆုံး):** Table တိုင်းမှာ policy —
```sql
-- ဥပမာ: documents table မှာ ကိုယ့် doc ပဲ ကြည့်/ပြင်နိုင်
create policy "own docs only" on documents
  for all using (auth.uid() = user_id);
```

---

## 3. Documents Upload Security (အဓိက မေးတဲ့အပိုင်း)

ဒီ ၈ ချက်ကို လုပ်ရမယ်:

1. **Client-side စစ် (UX):** extension + size ကို မတင်ခင် ပြ (ဒါက လုံခြုံရေးအတွက် မဟုတ်)
2. **Server-side file type allowlist:** `PDF, JPG, JPEG, PNG` ပဲ ခွင့်ပြု — **extension မဟုတ်ဘဲ MIME type + file signature (magic bytes)** စစ်
3. **Size limit:** ဖိုင်တစ်ခု 5MB (config လုပ်နိုင်)
4. **Signed upload (အရေးကြီး):** Supabase Storage ရဲ့ **signed URL** သုံး — client က ခေတ္တ (60s) သက်တမ်းတိုတဲ့ upload token ပဲရ။ full access key မပေး
5. **Private bucket:** documents ကို **private bucket** ထား — public URL နဲ့ ကြည့်မရ။ Auth ဝင်ထားသူ + RLS ရှိမှ download
6. **Virus/malware scan:** upload ပြီး ClamAV (Supabase Storage နဲ့ ချိတ်) ဒါမှမဟုတ် external scanner နဲ့ scan — PDF/ပုံတွေမှာ malware ပါနိုင်
7. **File rename + path isolate:** filename ကို UUID ပြောင်း, path က `private/{user_id}/{uuid}` — original filename မထား (path traversal ကာကွယ်)
8. **No executable:** content-type ကို force; upload ထားတာကို ဘယ်တော့မှ execute မလုပ်

**Download:** public မဟုတ် — `createSignedUrl()` နဲ့ ခေတ္တ link ထုတ်ပြီး RLS စစ်ပြီးမှ ပေး။

---

## 4. API Security (Next.js API routes / server actions)

| ကာကွယ်မှု | ဘယ်လိုလုပ်မလဲ |
|------------|----------------|
| HTTPS | TLS အကုန်၊ HSTS header |
| CORS | ကျွန်တော်တို့ domain တွေပဲ allow (Supabase project settings) |
| Rate limiting | login/upload/inquiry — Upstash Redis / Next middleware |
| Input validation | **Zod schema** server-side (form တွေ, params, query) |
| XSS | ထွက်တဲ့အကြောင်းအရာကို escape (React က default escape) + CSP header |
| SQL injection | Supabase/Postgres parameterized query (default) |
| CSRF | Server actions / same-site cookies + Supabase auth header |
| Secrets | `SUPABASE_SERVICE_ROLE` က **server ပဲ**၊ client မပေး |

---

## 5. WordPress Backend Security (headless CMS အတွက်)

- WordPress admin ကို **strong password + 2FA**၊ login URL ဖျောက်
- REST API က **read-only endpoints ပဲ expose** (POST/DELETE ပိတ်)
- **Application Passwords** သုံးပြီး Next.js က ခွင့်ပြုထားတဲ့ scope နဲ့ပဲ ဆက်သွယ်
- `xmlrpc.php` ပိတ်၊ file editor ပိတ်၊ security plugin (Wordfence/Sucuri)
- WordPress က content ပဲ စီမံ (news/gallery text) — sensitive data မထား

---

## 6. Data Protection (PII)

- Sensitive data: **နိုင်ငံကူးလက်မှတ်, NRC, လိပ်စာ** → encryption at rest (Supabase default) + access ကို RLS နဲ့ ကန့်
- **Data minimization:** လိုတာပဲ သိမ်း
- **Logging + audit:** upload/login အပြောင်းအလဲတွေ log
- **Backups:** Supabase PITR (point-in-time recovery) on

---

## 7. OWASP Top 10 Coverage (အကျဉ်း)

| Threat | ကာကွယ်မှု |
|--------|-----------|
| Broken Access Control | RLS + server auth check |
| Cryptographic Failures | HTTPS + encryption at rest |
| Injection | Parameterized queries + Zod validation |
| XSS | React escaping + CSP |
| Security Misconfig | env management + least privilege |
| Vulnerable Components | `npm audit` / Snyk + WP auto-update |
| Auth Failures | Supabase Auth + 2FA + rate limit |
| SSRF | signed URLs, no open redirect |
| File upload (ဒီ case) | allowlist + scan + private bucket + rename |

---

## 8. အနှစ်ချုပ်

| အပိုင်း | နည်းလမ်း |
|--------|-----------|
| Login | Supabase Auth + RLS + email verify + 2FA |
| Documents | private bucket + signed upload + allowlist + virus scan + UUID rename |
| API | Zod + rate limit + CORS + HTTPS |
| Client | anon key ပဲ, secrets server-side |
| WP | read-only REST + Application Passwords + 2FA |

> **အရေးကြီး:** ဒီအတိုင်း setup လုပ်ရင် documents upload က လုံခြုံပါတယ်။ Security ဆိုတာ "frontend မှာ လုံခြုံအောင်" မဟုတ်ဘဲ **backend မှာ enforce** လုပ်တာပါ — အဲဒါကို Supabase + Next.js က ကောင်းကောင်း ထောက်ပံ့ပေးပါတယ်။
