"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import Section from "./Section";

export default function NewsDetailPage() {
  const { t } = useI18n();
  const params = useParams<{ slug: string }>();

  return (
    <Section tone="cream">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/news"
          className="text-sm font-bold text-brand hover:underline"
        >
          ← {t("common.back")}
        </Link>

        <div className="mt-6 text-xs font-semibold text-muted">
          2026.03.06 · လှုပ်ရှားမှု
        </div>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
          {params.slug}
        </h1>

        <div className="mt-6 flex aspect-video items-end rounded-2xl bg-gradient-to-br from-brand-tint to-cream p-4 text-xs font-semibold text-muted">
          cover image
        </div>

        <p className="mt-6 leading-relaxed text-muted">
          သတင်းအကြောင်းအရာ အပြည့်အစုံကို WordPress CMS မှ ရယူမည်။ (demo placeholder)
        </p>
      </div>
    </Section>
  );
}
