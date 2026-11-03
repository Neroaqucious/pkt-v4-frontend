"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import Section from "./Section";
import { news, newsCategoryLabel } from "@/lib/news";

export default function NewsDetailPage({ slug }: { slug: string }) {
  const { t, lang } = useI18n();
  const item = news.find((n) => n.slug === slug);

  if (!item) {
    return (
      <Section tone="cream">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted">404</p>
          <Link href="/news" className="mt-4 inline-block font-bold text-brand hover:underline">
            ← {t("common.back")}
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <Section tone="cream">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/news"
          className="font-ui text-sm font-bold text-brand hover:underline"
        >
          ← {t("common.back")}
        </Link>

        <div className="mt-6 font-ui text-xs font-semibold text-muted">
          {item.date} · {newsCategoryLabel[item.category][lang]}
        </div>
        <h1 className="mt-2 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {item.title[lang]}
        </h1>

        <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <p className="mt-6 leading-relaxed text-muted">
          {item.title[lang]}
        </p>
      </div>
    </Section>
  );
}
