"use client";

import { useI18n } from "@/lib/i18n/LanguageProvider";

export default function TrustStrip() {
  const { t } = useI18n();
  return (
    <section className="w-full border-y border-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-6 sm:px-6 lg:px-8">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className="flex items-center gap-2 font-ui text-xs font-semibold text-muted"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-tint text-gold">
              ✓
            </span>
            {t(`trust.${n}`)}
          </div>
        ))}
      </div>
    </section>
  );
}
