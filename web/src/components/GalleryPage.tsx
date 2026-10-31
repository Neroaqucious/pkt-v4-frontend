"use client";

import { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import PageHero from "./PageHero";
import Section from "./Section";
import Reveal from "./Reveal";
import { IMG } from "@/lib/images";

const PHOTOS = [
  IMG.fuji,
  IMG.torii,
  IMG.inari,
  IMG.students,
  IMG.education,
  IMG.studyLaptop,
  IMG.coding,
  IMG.team,
  IMG.consultation,
  IMG.hotel,
  IMG.care,
  IMG.travel,
];

export default function GalleryPage() {
  const { t } = useI18n();
  const [year, setYear] = useState("2026");

  return (
    <>
      <PageHero
        title={t("gallery.hero")}
        sub={t("gallery.sub")}
        breadcrumb={[{ labelKey: "nav.gallery" }]}
      />
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
          {PHOTOS.map((src, n) => (
            <Reveal key={n} delay={(n % 4) * 60}>
              <div className="relative aspect-square overflow-hidden rounded-xl transition-opacity hover:opacity-75">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
