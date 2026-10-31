"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import PageHero from "./PageHero";
import Section from "./Section";
import Reveal from "./Reveal";
import { IMG } from "@/lib/images";

const NEWS = [
  { slug: "taunggyi-japanese-program", date: "2026.03.06", cat: "လှုပ်ရှားမှု", title: "သာဝန်းကြီးကျောင်း ဂျပန်စာသင်တန်းအကြောင်း မိတ်ဆက်", image: IMG.education },
  { slug: "taunggyi-open", date: "2026.03.05", cat: "အသိပေးချက်", title: "PKT သာဝန်းကြီးကျောင်း တရားဝင်ဖွင့်လှစ်", image: IMG.team },
  { slug: "local-visit", date: "2026.03.04", cat: "ပွဲ", title: "ဒေသခံများ လာရောက်အားပေးခဲ့ကြသည်", image: IMG.students },
  { slug: "opening-ceremony", date: "2026.03.03", cat: "ပွဲ", title: "သာဝန်းကြီးကျောင်း ဖွင့်ပွဲအခမ်းအနား ကျင်းပ", image: IMG.torii },
  { slug: "welcome-students", date: "2025.12.20", cat: "လှုပ်ရှားမှု", title: "ကျောင်းသားအသစ်များကို ကြိုဆိုခဲ့သည်", image: IMG.studyLaptop },
  { slug: "mandalay-branch", date: "2025.10.15", cat: "အသိပေးချက်", title: "မန္တလေးကျောင်း သင်တန်းအသစ် စတင်", image: IMG.consultation },
];

export default function NewsPage() {
  const { t } = useI18n();
  const [year, setYear] = useState("2026");

  const list = NEWS.filter((n) => n.date.startsWith(year));

  return (
    <>
      <PageHero title={t("news.hero")} sub={t("news.sub")} />
      <Section tone="white">
        <div className="flex gap-2">
          {["2026", "2025"].map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
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
                  <div className="text-xs font-semibold text-muted">
                    {n.date} · {n.cat}
                  </div>
                  <div className="mt-1 font-semibold text-ink transition-colors group-hover:text-brand">
                    {n.title}
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
