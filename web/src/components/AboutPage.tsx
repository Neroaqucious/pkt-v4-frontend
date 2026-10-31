"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import PageHero from "./PageHero";
import Section from "./Section";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IMG } from "@/lib/images";

const SCHOOLS = [
  "Thingangyun",
  "Tamwe",
  "Hledan",
  "Insein",
  "South Dagon",
  "Mandalay",
  "Bago",
  "Taunggyi",
  "Mawlamyine",
  "Meiktila",
  "Taungoo",
];

const TIMELINE = [
  { year: "2010", k: 1 },
  { year: "2013", k: 2 },
  { year: "2018", k: 3 },
  { year: "2022", k: 4 },
  { year: "2025", k: 5 },
  { year: "Now", k: 6 },
];

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero title={t("about.hero")} sub={t("about.sub")} />

      {/* Founder */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={IMG.founder}
                alt="Founder"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              {t("about.founder")}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              {t("about.founderStory")}
            </p>
            <p className="mt-6 font-bold text-ink">{t("about.founderRole")}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-brand-tint px-4 py-1.5 text-sm font-semibold text-brand">
                Facebook 190k+
              </span>
              <span className="rounded-full bg-brand-tint px-4 py-1.5 text-sm font-semibold text-brand">
                TikTok 67k+
              </span>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Philosophy */}
      <Section tone="cream">
        <SectionHeading title={t("about.philosophy")} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {["value", "intention", "vision"].map((k, i) => (
            <Reveal key={k} delay={i * 90}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
                <span className="text-2xl font-extrabold text-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-bold text-ink">
                  {t(`about.${k}.t`)}
                </h3>
                <p className="mt-2 text-sm text-muted">{t(`about.${k}.d`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Story timeline */}
      <Section tone="white">
        <SectionHeading title={t("about.story")} />
        <div className="mx-auto mt-12 max-w-3xl">
          {TIMELINE.map((it, i) => (
            <Reveal key={it.k} delay={i * 60}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-brand" />
                  <span className="w-px flex-1 bg-line" />
                </div>
                <div className="pb-8">
                  <div className="text-sm font-bold text-gold">{it.year}</div>
                  <h3 className="mt-1 font-bold text-ink">
                    {t(`about.t${it.k}`)}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {t(`about.d${it.k}`)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Organization */}
      <Section tone="cream">
        <SectionHeading title={t("about.org")} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-ink">
                株式会社ピーケーティー (PKT Co., Ltd.)
              </h3>
              <p className="mt-2 text-sm text-muted">
                〒353-0004 埼玉県志木市本町六丁目23-11
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-ink">May Myanmar Lin Co., Ltd.</h3>
              <p className="mt-2 text-sm text-muted">
                Tamwe Township, Yangon
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-bold text-brand hover:underline"
              >
                {t("about.cert")} (PDF) →
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Schools */}
      <Section tone="white">
        <SectionHeading title={t("about.schools")} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SCHOOLS.map((s, i) => (
            <Reveal key={s} delay={(i % 3) * 70}>
              <div className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 transition-colors hover:border-gold">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-tint text-lg">
                  🏫
                </span>
                <div>
                  <div className="font-bold text-ink">{s}</div>
                  <div className="text-xs text-muted">Myanmar</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
