"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import StatCounter from "./StatCounter";
import FlightTrail from "./FlightTrail";
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
      <div className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
        <StatCounter value={value} suffix={suffix} />
      </div>
      <div className="mt-1 text-xs text-muted sm:text-sm">{label}</div>
    </div>
  );
}

// ၅ ပုံတစ်စု — ညာဘက်မှာ ၃ ပုံ + ၂ ပုံ (vertical masonry)
const HERO_SETS = [
  [IMG.fuji, IMG.students, IMG.torii, IMG.studyLaptop, IMG.inari],
  [IMG.coding, IMG.team, IMG.travel, IMG.education, IMG.consultation],
];

// ပုံတစ်ခုချင်း organic/asymmetric rounded shape (ထောင့်မတူ)
const TILE_SHAPES = [
  "rounded-tl-[3.5rem] rounded-tr-[1.25rem] rounded-bl-[1.25rem] rounded-br-[1.25rem]",
  "rounded-tl-[1.25rem] rounded-tr-[1.25rem] rounded-bl-[1.25rem] rounded-br-[3.5rem]",
  "rounded-tl-[1.25rem] rounded-tr-[1.25rem] rounded-bl-[3.5rem] rounded-br-[1.25rem]",
  "rounded-tl-[1.25rem] rounded-tr-[3.5rem] rounded-bl-[1.25rem] rounded-br-[1.25rem]",
  "rounded-tl-[3.5rem] rounded-tr-[1.25rem] rounded-bl-[1.25rem] rounded-br-[3.5rem]",
];

function HeroTile({
  tile,
  setIdx,
  className = "aspect-[4/3]",
}: {
  tile: number;
  setIdx: number;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden shadow-md ${className} ${
        TILE_SHAPES[tile % TILE_SHAPES.length]
      }`}
    >
      {HERO_SETS.map((set, sIdx) => (
        <Image
          key={sIdx}
          src={set[tile]}
          alt=""
          fill
          sizes="(max-width: 1024px) 50vw, 20vw"
          className={`object-cover transition-opacity duration-500 ${
            sIdx === setIdx ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: `${tile * 260}ms` }}
          priority={sIdx === 0 && tile === 0}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const { t } = useI18n();
  const [setIdx, setSetIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setSetIdx((i) => (i + 1) % HERO_SETS.length),
      4200,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-cream">
      {/* Seigaiha (青海波) Japanese wave — watermark background */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="seigaiha"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(0.5)"
          >
            <g fill="none" stroke="#d9d5ce" strokeWidth="1.2" opacity="0.6">
              <path d="M0 40 A40 40 0 0 1 80 40" />
              <path d="M10 40 A30 30 0 0 1 70 40" />
              <path d="M20 40 A20 20 0 0 1 60 40" />
              <path d="M30 40 A10 10 0 0 1 50 40" />
              <path d="M-40 80 A40 40 0 0 1 40 80" />
              <path d="M-30 80 A30 30 0 0 1 30 80" />
              <path d="M-20 80 A20 20 0 0 1 20 80" />
              <path d="M-10 80 A10 10 0 0 1 10 80" />
              <path d="M40 80 A40 40 0 0 1 120 80" />
              <path d="M50 80 A30 30 0 0 1 110 80" />
              <path d="M60 80 A20 20 0 0 1 100 80" />
              <path d="M70 80 A10 10 0 0 1 90 80" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seigaiha)" />
      </svg>

      {/* subtle warmth */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

      <FlightTrail className="pointer-events-none absolute inset-0 h-full w-full" />

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

        {/* Right — vertical masonry (3 + 2) with wave transition */}
        <div className="relative">
          {/* floating icons near the slider (no background) */}
          <div className="absolute -left-4 top-3 z-20 select-none text-3xl drop-shadow-md animate-floaty sm:text-4xl">
            🎓
          </div>
          <div
            className="absolute -right-4 top-1/3 z-20 select-none text-3xl drop-shadow-md animate-floaty-slow sm:text-4xl"
            style={{ animationDelay: "0.7s" }}
          >
            ✈️
          </div>
          <div
            className="absolute -right-2 bottom-24 z-20 select-none text-3xl drop-shadow-md animate-floaty sm:text-4xl"
            style={{ animationDelay: "1.3s" }}
          >
            🛂
          </div>

          <div className="flex gap-2">
            {/* Left column — large + small + accent card (fills space) */}
            <div className="flex min-w-0 flex-[1.3] flex-col gap-2">
              <HeroTile tile={0} setIdx={setIdx} className="aspect-[4/5]" />
              <HeroTile tile={1} setIdx={setIdx} className="aspect-[5/4]" />
              <div className="flex flex-1 flex-col items-center justify-center gap-1 rounded-[2rem] bg-gradient-to-br from-gold-tint to-white p-3 text-center ring-1 ring-line">
                <span className="text-2xl">🌸</span>
                <span className="text-[11px] font-bold leading-tight text-ink">
                  Myanmar × Japan
                </span>
                <span className="text-[9px] uppercase tracking-wider text-muted">
                  Education Bridge
                </span>
              </div>
            </div>

            {/* Right column — small + large + small */}
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <HeroTile tile={2} setIdx={setIdx} className="aspect-square" />
              <HeroTile tile={3} setIdx={setIdx} className="aspect-[3/4]" />
              <HeroTile tile={4} setIdx={setIdx} className="aspect-[4/3]" />
            </div>
          </div>

          {/* set indicator dots */}
          <div className="mt-5 flex justify-center gap-2">
            {HERO_SETS.map((_, i) => (
              <button
                key={i}
                onClick={() => setSetIdx(i)}
                aria-label={`Set ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === setIdx
                    ? "w-6 bg-brand"
                    : "w-2 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>

          <div className="absolute -bottom-5 -left-4 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg sm:-left-6">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
              ✓
            </span>
            <span className="text-sm font-bold text-ink">{t("hero.chip")}</span>
          </div>
        </div>
      </div>

      {/* organic wave divider into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 1440 80"
          className="h-10 w-full sm:h-16"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
