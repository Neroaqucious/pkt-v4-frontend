"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import PageHero from "./PageHero";
import Section from "./Section";
import Reveal from "./Reveal";
import { news, newsCategoryLabel } from "@/lib/news";

export default function NewsPage() {
  const { t, lang } = useI18n();
  const [year, setYear] = useState("2026");

  const list = news.filter((n) => n.date.startsWith(year));

  return (
    <>
      <PageHero
        title={t("news.hero")}
        sub={t("news.sub")}
        breadcrumb={[{ labelKey: "nav.news" }]}
      />
      <Section tone="white">
        <div className="flex gap-2">
          {["2026", "2025"].map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`rounded-full px-4 py-1.5 font-ui text-sm font-bold transition-colors ${
                year === y
                  ? "bg-brand text-white"
                  : "bg-cream text-muted hover:text-ink"
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        <div className="mt-8 divide-y divide-line border-y border-line">
          {list.map((n, i) => (
            <Reveal key={n.slug} delay={i * 50}>
              <Link
                href={`/news/${n.slug}`}
                className="group flex items-center gap-4 py-4 transition-colors hover:bg-cream"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={n.image}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
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
              </Link>
            </Reveal>
          ))}
          {list.length === 0 && (
            <p className="py-8 text-center text-sm text-muted">—</p>
          )}
        </div>
      </Section>
    </>
  );
}
