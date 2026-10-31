"use client";

import { useI18n } from "@/lib/i18n/LanguageProvider";
import StatCounter from "./StatCounter";
import { Fuji } from "./Motifs";

function Stat({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}) {
  return (
    <div
      className="animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-2xl font-extrabold text-ink sm:text-3xl">
        <StatCounter value={value} suffix={suffix} />
      </div>
      <div className="mt-1 text-xs text-muted sm:text-sm">{label}</div>
    </div>
  );
}

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative w-full overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
        {/* Left — text */}
        <div>
          <p className="animate-fade-up text-sm font-bold uppercase tracking-[0.2em] text-brand">
            {t("hero.eyebrow")}
          </p>
          <h1
            className="animate-fade-up mt-4 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            {t("hero.title")}
          </h1>
          <p
            className="animate-fade-up mt-4 text-lg font-semibold text-ink"
            style={{ animationDelay: "160ms" }}
          >
            {t("hero.sub")}
          </p>
          <p
            className="animate-fade-up mt-3 max-w-md text-muted"
            style={{ animationDelay: "240ms" }}
          >
            {t("hero.body")}
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
            >
              {t("hero.cta1")}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#courses"
              className="inline-flex items-center rounded-full border border-line bg-white px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              {t("hero.cta2")}
            </a>
          </div>

          <div
            className="animate-fade-up mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6"
            style={{ animationDelay: "400ms" }}
          >
            <Stat value={11} label={t("stat.schools")} delay={440} />
            <Stat value={1555} label={t("stat.sent")} delay={500} />
            <Stat value={10} suffix="+" label={t("stat.years")} delay={560} />
          </div>
        </div>

        {/* Right — image collage */}
        <div className="relative">
          <Fuji className="pointer-events-none absolute -bottom-2 right-0 w-64 text-ink opacity-[0.06]" />
          <div className="relative grid grid-cols-2 gap-3">
            <div className="flex h-40 items-end rounded-2xl bg-gradient-to-br from-brand-tint to-cream p-3 text-xs font-semibold text-muted sm:h-48">
              photo
            </div>
            <div className="mt-6 flex h-40 items-end rounded-2xl bg-gradient-to-br from-gold-tint to-cream p-3 text-xs font-semibold text-muted sm:h-48">
              photo
            </div>
            <div className="flex h-40 items-end rounded-2xl bg-gradient-to-br from-cream to-brand-tint p-3 text-xs font-semibold text-muted sm:h-48">
              photo
            </div>
            <div className="-mt-6 flex h-40 items-end rounded-2xl bg-gradient-to-br from-cream to-gold-tint p-3 text-xs font-semibold text-muted sm:h-48">
              photo
            </div>
          </div>
          <div className="absolute -left-2 bottom-8 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg sm:-left-6">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
              ✓
            </span>
            <span className="text-sm font-bold text-ink">{t("hero.chip")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
