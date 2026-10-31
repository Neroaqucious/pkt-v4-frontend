"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/LanguageProvider";

export default function Breadcrumbs({
  items,
}: {
  items: { labelKey: string; href?: string }[];
}) {
  const { t } = useI18n();
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 font-ui text-xs text-muted">
        <li>
          <Link href="/" className="transition-colors hover:text-brand">
            {t("nav.home")}
          </Link>
        </li>
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {it.href ? (
              <Link href={it.href} className="transition-colors hover:text-brand">
                {t(it.labelKey)}
              </Link>
            ) : (
              <span className="text-ink" aria-current="page">
                {t(it.labelKey)}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
