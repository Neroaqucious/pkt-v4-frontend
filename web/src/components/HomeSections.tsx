"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import Section from "./Section";
import Reveal from "./Reveal";
import StatCounter from "./StatCounter";
import { IMG } from "@/lib/images";

function SectionHeading({
  title,
  sub,
  dark = false,
}: {
  title: string;
  sub?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-3 ${dark ? "text-white/70" : "text-muted"}`}>{sub}</p>
      )}
    </Reveal>
  );
}

/* ---------------- Journey ---------------- */
const JOURNEY_STEPS = [
  { icon: "🎓", k: 1 },
  { icon: "📝", k: 2 },
  { icon: "✈️", k: 3 },
  { icon: "🏠", k: 4 },
];

export function Journey() {
  const { t } = useI18n();
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineOn, setLineOn] = useState(false);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setLineOn(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section id="journey" tone="white">
      <SectionHeading title={t("journey.title")} sub={t("journey.sub")} />

      <div className="relative mt-16">
        {/* connecting line (desktop) — draws on scroll */}
        <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden lg:block">
          <div
            ref={lineRef}
            className={`h-0.5 origin-left bg-gradient-to-r from-gold via-brand to-brand transition-transform duration-1000 ease-out ${
              lineOn ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {JOURNEY_STEPS.map((s, i) => (
            <Reveal key={s.k} delay={i * 120}>
              <div className="group relative flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-white text-2xl shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand group-hover:shadow-lg group-hover:shadow-brand/10">
                    {s.icon}
                  </div>
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white shadow">
                    {s.k}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">
                  {t(`journey.${s.k}.t`)}
                </h3>
                <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-muted">
                  {t(`journey.${s.k}.d`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Why PKT ---------------- */
export function WhyPkt() {
  const { t } = useI18n();
  const items = [
    { icon: "🎓", k: 1 },
    { icon: "💰", k: 2 },
    { icon: "🤝", k: 3 },
  ];
  return (
    <Section id="why" tone="cream">
      <SectionHeading title={t("why.title")} sub={t("why.sub")} />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.k} delay={i * 90}>
            <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tint text-2xl">
                {it.icon}
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">
                {t(`why.${it.k}.t`)}
              </h3>
              <p className="mt-2 text-sm text-muted">{t(`why.${it.k}.d`)}</p>
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
      <SectionHeading title={t("courses.title")} sub={t("courses.sub")} />
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
      <SectionHeading title={t("stories.title")} />
      <Reveal className="mx-auto mt-12 max-w-3xl">
        <figure className="rounded-3xl border border-line bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="text-4xl text-gold">“</div>
          <blockquote className="mt-2 text-xl font-medium leading-relaxed text-ink sm:text-2xl">
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
const NEWS = [
  { date: "2026.03.06", title: "သာဝန်းကြီးကျောင်း ဂျပန်စာသင်တန်းအကြောင်း မိတ်ဆက်" },
  { date: "2026.03.05", title: "PKT သာဝန်းကြီးကျောင်း တရားဝင်ဖွင့်လှစ်" },
  { date: "2026.03.04", title: "ဒေသခံများ လာရောက်အားပေးခဲ့ကြသည်" },
];

export function NewsList() {
  const { t } = useI18n();
  return (
    <Section id="news" tone="cream">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {t("news.title")}
        </h2>
        <a
          href="/news"
          className="hidden shrink-0 text-sm font-bold text-brand hover:underline sm:block"
        >
          {t("news.more")} →
        </a>
      </div>
      <div className="mt-8 divide-y divide-line border-y border-line">
        {NEWS.map((n, i) => (
          <Reveal key={i} delay={i * 60}>
            <a
              href="/news"
              className="group flex items-center justify-between gap-4 py-4 transition-colors hover:bg-white"
            >
              <div>
                <div className="text-xs font-semibold text-muted">{n.date}</div>
                <div className="mt-1 font-semibold text-ink group-hover:text-brand">
                  {n.title}
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
        className="mt-6 inline-block text-sm font-bold text-brand hover:underline sm:hidden"
      >
        {t("news.more")} →
      </a>
    </Section>
  );
}

/* ---------------- CTA Banner ---------------- */
export function CtaBanner() {
  const { t } = useI18n();
  return (
    <section className="w-full bg-brand">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t("cta.title")}
          </h2>
          <p className="mt-3 text-white/80">{t("cta.sub")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-brand transition-colors hover:bg-gold-tint"
            >
              {t("cta.primary")}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
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
      <SectionHeading title={t("contact.title")} sub={t("contact.sub")} />
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
            className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark sm:col-span-2"
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
