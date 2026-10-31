"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import StatCounter from "./StatCounter";
import { Fuji } from "./Motifs";
import { IMG } from "@/lib/images";

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
    <div className="animate-fade-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="text-2xl font-extrabold text-ink sm:text-3xl">
        <StatCounter value={value} suffix={suffix} />
      </div>
      <div className="mt-1 text-xs text-muted sm:text-sm">{label}</div>
    </div>
  );
}

const HERO_IMAGES = [
  IMG.fuji,
  IMG.students,
  IMG.torii,
  IMG.studyLaptop,
  IMG.inari,
];

export default function Hero() {
  const { t } = useI18n();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIdx((i) => (i + 1) % HERO_IMAGES.length),
      4000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-cream">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
      <div className="dot-grid pointer-events-none absolute left-8 top-24 hidden h-40 w-40 opacity-40 lg:block" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
        {/* Left — text */}
        <div>
          <p className="animate-fade-up font-ui text-sm font-bold uppercase tracking-[0.2em] text-brand">
            {t("hero.eyebrow")}
          </p>
          <h1
            className="animate-fade-up mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl"
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
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-ui text-sm font-bold text-white transition-colors hover:bg-brand-dark"
            >
              {t("hero.cta1")}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#courses"
              className="inline-flex items-center rounded-full border border-line bg-white px-6 py-3 font-ui text-sm font-bold text-ink transition-colors hover:border-brand hover:text-brand"
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

        {/* Right — auto carousel */}
        <div className="relative">
          <Fuji className="pointer-events-none absolute -bottom-2 right-0 w-64 text-ink opacity-[0.06]" />

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg lg:aspect-square">
            {HERO_IMAGES.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={`object-cover transition-opacity duration-1000 ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
                priority={i === 0}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* dots */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === idx
                      ? "w-6 bg-white"
                      : "w-2 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg sm:-left-6">
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
