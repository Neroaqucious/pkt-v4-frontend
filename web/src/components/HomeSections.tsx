"use client";

import { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import Section from "./Section";
import Reveal from "./Reveal";
import StatCounter from "./StatCounter";
import { IMG } from "@/lib/images";
import { news, newsCategoryLabel } from "@/lib/news";
import { Squiggle } from "./Decor";

function SectionHeading({
  title,
  sub,
  eyebrow,
  dark = false,
}: {
  title: string;
  sub?: string;
  eyebrow?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p
          className={`font-ui text-xs font-bold uppercase tracking-[0.25em] ${
            dark ? "text-gold" : "text-brand"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <Squiggle className="mx-auto mt-3 h-2.5 w-24 text-gold" />
      {sub && (
        <p className={`mt-3 font-body ${dark ? "text-white/70" : "text-muted"}`}>
          {sub}
        </p>
      )}
    </Reveal>
  );
}

/* ---------------- Journey ---------------- */
const JOURNEY_STEPS = [
  { img: IMG.education, k: 1 },
  { img: IMG.students, k: 2 },
  { img: IMG.travel, k: 3 },
  { img: IMG.studyLaptop, k: 4 },
];

export function Journey() {
  const { t } = useI18n();
  return (
    <Section id="journey" tone="white">
      <SectionHeading eyebrow="OUR JOURNEY" title={t("journey.title")} sub={t("journey.sub")} />
      <div className="mt-12 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {JOURNEY_STEPS.map((s, i) => (
          <Reveal key={s.k} delay={i * 100}>
            <div className="group overflow-hidden rounded-2xl bg-white ring-1 ring-line transition-shadow duration-300 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.img}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow">
                  {String(s.k).padStart(2, "0")}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 p-4">
                <h3 className="text-base font-bold text-ink">
                  {t(`journey.${s.k}.t`)}
                </h3>
                <span className="hidden text-lg leading-none text-brand transition-transform duration-300 group-hover:rotate-45 md:block">
                  ＋
                </span>
              </div>
              <div className="md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-500 md:group-hover:max-h-40 md:group-hover:opacity-100">
                <p className="px-4 pb-4 text-sm leading-relaxed text-muted">
                  {t(`journey.${s.k}.d`)}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Why PKT ---------------- */
const WHY_ITEMS = [
  { img: IMG.torii, k: 1 },
  { img: IMG.consultation, k: 2 },
  { img: IMG.fuji, k: 3 },
];

export function WhyPkt() {
  const { t } = useI18n();
  return (
    <Section id="why" tone="cream">
      <SectionHeading
        eyebrow="WHY PKT"
        title={t("why.title")}
        sub={t("why.sub")}
      />
      <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
        {WHY_ITEMS.map((it, i) => (
          <Reveal key={it.k} delay={i * 100}>
            <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-line transition-shadow duration-300 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={it.img}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <h3 className="absolute inset-x-5 bottom-4 text-xl font-bold text-white">
                  {t(`why.${it.k}.t`)}
                </h3>
              </div>
              <div className="md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-500 md:group-hover:max-h-40 md:group-hover:opacity-100">
                <p className="p-5 text-sm leading-relaxed text-muted">
                  {t(`why.${it.k}.d`)}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Courses ---------------- */
export function Courses() {
  const { t } = useI18n();
  const courses = [
    { icon: "🇯🇵", k: 1 },
    { icon: "💻", k: 2 },
    { icon: "🛎", k: 3 },
  ];
  return (
    <Section id="courses" tone="white">
      <SectionHeading eyebrow="COURSES" title={t("courses.title")} sub={t("courses.sub")} />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {courses.map((c, i) => (
          <Reveal key={c.k} delay={i * 90}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-md">
              <span className="text-3xl">{c.icon}</span>
              <h3 className="mt-4 text-xl font-bold text-ink">
                {t(`courses.${c.k}.t`)}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted">
                {t(`courses.${c.k}.d`)}
              </p>
              <a
                href="#contact"
                className="mt-4 text-sm font-bold text-brand hover:underline"
              >
                {t("nav.apply")} →
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Stats + Media ---------------- */
export function StatsSection() {
  const { t } = useI18n();
  const stats = [
    { value: 11, suffix: "", label: "stat.schools" },
    { value: 1555, suffix: "", label: "stat.sent" },
    { value: 10, suffix: "+", label: "stat.years" },
    { value: 60, suffix: "+", label: "stat.staff" },
  ];
  return (
    <Section id="stats" tone="cream">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-brand sm:text-5xl">
                <StatCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted">{t(s.label)}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12">
        <div className="grid grid-cols-4 gap-3">
          {[IMG.education, IMG.code, IMG.studyLaptop, IMG.travel].map((src, n) => (
            <div
              key={n}
              className="relative h-20 overflow-hidden rounded-lg sm:h-28"
            >
              <Image src={src} alt="" fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------------- Testimonials ---------------- */
export function Testimonials() {
  const { t } = useI18n();
  return (
    <Section id="stories" tone="white">
      <SectionHeading eyebrow="TESTIMONIALS" title={t("stories.title")} />
      <Reveal className="mx-auto mt-12 max-w-3xl">
        <figure className="rounded-3xl border border-line bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="text-4xl text-gold">“</div>
          <blockquote className="mt-2 font-serif text-2xl italic leading-relaxed text-ink sm:text-3xl">
            {t("stories.quote")}
          </blockquote>
          <figcaption className="mt-6 flex items-center justify-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
              M
            </span>
            <span className="text-sm font-semibold text-muted">
              {t("stories.author")}
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  );
}

/* ---------------- News ---------------- */
export function NewsList() {
  const { t, lang } = useI18n();
  const latest = news.slice(0, 4);
  return (
    <section id="news" className="relative w-full overflow-hidden bg-[#fdf6ea]">
      {/* Japanese seigaiha + sakura watermark (orange/gold) */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="news-jp"
            width="160"
            height="160"
            patternUnits="userSpaceOnUse"
          >
            <g
              fill="none"
              stroke="#e2a25c"
              strokeWidth="1.3"
              strokeLinecap="round"
              opacity="0.4"
            >
              <path d="M0 80 A80 80 0 0 1 160 80" />
              <path d="M20 80 A60 60 0 0 1 140 80" />
              <path d="M40 80 A40 40 0 0 1 120 80" />
              <path d="M60 80 A20 20 0 0 1 100 80" />
              <path d="M-80 160 A80 80 0 0 1 80 160" />
              <path d="M-60 160 A60 60 0 0 1 60 160" />
              <path d="M-40 160 A40 40 0 0 1 40 160" />
              <path d="M-20 160 A20 20 0 0 1 20 160" />
              <path d="M80 160 A80 80 0 0 1 240 160" />
              <path d="M100 160 A60 60 0 0 1 220 160" />
              <path d="M120 160 A40 40 0 0 1 200 160" />
              <path d="M140 160 A20 20 0 0 1 180 160" />
            </g>
            {[
              [80, 80],
              [0, 0],
            ].map(([cx, cy], idx) => (
              <g
                key={idx}
                transform={`translate(${cx} ${cy})`}
                fill="#d97a2f"
                opacity="0.4"
              >
                <ellipse cx="0" cy="-8" rx="4.5" ry="9" />
                <ellipse cx="0" cy="-8" rx="4.5" ry="9" transform="rotate(72)" />
                <ellipse cx="0" cy="-8" rx="4.5" ry="9" transform="rotate(144)" />
                <ellipse cx="0" cy="-8" rx="4.5" ry="9" transform="rotate(216)" />
                <ellipse cx="0" cy="-8" rx="4.5" ry="9" transform="rotate(288)" />
                <circle cx="0" cy="0" r="2.5" fill="#fdf6ea" />
              </g>
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#news-jp)" />
      </svg>

      {/* top wave border (blends from previous white section) */}
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="h-8 w-full sm:h-12"
          aria-hidden="true"
        >
          <path
            d="M0,0 L1440,0 L1440,32 C1200,64 960,0 720,32 C480,64 240,0 0,32 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t("news.title")}
          </h2>
          <a
            href="/news"
            className="hidden shrink-0 font-ui text-sm font-bold text-brand hover:underline sm:block"
          >
            {t("news.more")} →
          </a>
        </div>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {latest.map((n, i) => (
            <Reveal key={n.slug} delay={i * 60}>
              <a
                href={`/news/${n.slug}`}
                className="group flex items-center justify-between gap-4 py-4 transition-colors hover:bg-white/60"
              >
                <div>
                  <div className="font-ui text-xs font-semibold text-muted">
                    {n.date} · {newsCategoryLabel[n.category][lang]}
                  </div>
                  <div className="mt-1 font-heading font-semibold text-ink transition-colors group-hover:text-brand">
                    {n.title[lang]}
                  </div>
                </div>
                <span className="text-brand transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <a
          href="/news"
          className="mt-6 inline-block font-ui text-sm font-bold text-brand hover:underline sm:hidden"
        >
          {t("news.more")} →
        </a>
      </div>

      {/* bottom wave border (blends into next red CTA) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="h-8 w-full sm:h-12"
          aria-hidden="true"
        >
          <path
            d="M0,60 L1440,60 L1440,28 C1200,-4 960,60 720,28 C480,-4 240,60 0,28 Z"
            fill="#c41e24"
          />
        </svg>
      </div>
    </section>
  );
}

/* ---------------- CTA Banner ---------------- */
export function CtaBanner() {
  const { t } = useI18n();
  return (
    <section className="relative w-full overflow-hidden bg-brand">
      {/* watermark — "enrollment open" */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[15vw] font-extrabold uppercase leading-none tracking-tighter text-white/[0.07]">
          ENROLLMENT OPEN
        </span>
      </div>
      {/* soft blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            {t("cta.badge")}
          </span>

          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-white/80">
            {t("cta.sub")}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 font-ui text-sm font-bold text-brand transition-colors hover:bg-gold-tint"
            >
              {t("cta.primary")}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 font-ui text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              {t("cta.secondary")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
export function ContactForm() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  const input =
    "w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand";

  return (
    <Section id="contact" tone="white">
      <SectionHeading eyebrow="GET IN TOUCH" title={t("contact.title")} sub={t("contact.sub")} />
      <Reveal className="mx-auto mt-12 max-w-2xl">
        <form
          className="grid gap-4 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-ink">
              {t("form.name")} *
            </span>
            <input required className={input} />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-ink">
              {t("form.company")}
            </span>
            <input className={input} />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-ink">
              {t("form.phone")}
            </span>
            <input type="tel" className={input} />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-ink">
              {t("form.email")} *
            </span>
            <input type="email" required className={input} />
          </label>
          <label className="block sm:col-span-2">
            <span className="mb-1 block text-sm font-semibold text-ink">
              {t("form.type")}
            </span>
            <select className={input}>
              <option>—</option>
              <option>{t("nav.apply")}</option>
              <option>{t("nav.contact")}</option>
            </select>
          </label>
          <label className="block sm:col-span-2">
            <span className="mb-1 block text-sm font-semibold text-ink">
              {t("form.msg")} *
            </span>
            <textarea required rows={5} className={input} />
          </label>
          <label className="flex items-start gap-2 text-sm text-muted sm:col-span-2">
            <input type="checkbox" className="mt-0.5 accent-brand" />
            {t("form.consent")}
          </label>
          <button
            type="submit"
            className="rounded-full bg-brand px-6 py-3 font-ui text-sm font-bold text-white transition-colors hover:bg-brand-dark sm:col-span-2"
          >
            {t("form.submit")}
          </button>
          {sent && (
            <p className="text-center text-sm font-semibold text-brand sm:col-span-2">
              ✓ {t("form.submit")} — (demo)
            </p>
          )}
        </form>
      </Reveal>
    </Section>
  );
}
