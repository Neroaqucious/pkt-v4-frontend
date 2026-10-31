"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import PageHero from "./PageHero";
import Section from "./Section";
import Reveal from "./Reveal";

const PHOTOS = Array.from({ length: 12 }, (_, i) => i + 1);

export default function GalleryPage() {
  const { t } = useI18n();
  const [year, setYear] = useState("2026");

  return (
    <>
      <PageHero title={t("gallery.hero")} sub={t("gallery.sub")} />
      <Section tone="dark">
        <div className="flex gap-2">
          {["2026", "2025"].map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
                year === y
                  ? "bg-brand text-white"
                  : "bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {PHOTOS.map((n) => (
            <Reveal key={n} delay={(n % 4) * 60}>
              <div className="flex aspect-square items-end rounded-xl bg-gradient-to-br from-brand-tint to-gold-tint p-3 text-xs font-semibold text-muted transition-opacity hover:opacity-75">
                photo {n}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
