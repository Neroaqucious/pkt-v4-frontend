"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/LanguageProvider";

export default function MobileCta() {
  const { t } = useI18n();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-white/95 p-3 font-ui backdrop-blur lg:hidden">
      <Link
        href="/courses"
        className="flex-1 rounded-full border border-brand py-3 text-center text-sm font-bold text-brand"
      >
        {t("nav.courses")}
      </Link>
      <Link
        href="/contact"
        className="flex-1 rounded-full bg-brand py-3 text-center text-sm font-bold text-white"
      >
        {t("nav.apply")}
      </Link>
    </div>
  );
}
