"use client";

import { useI18n } from "@/lib/i18n/LanguageProvider";

export default function NoticeBar() {
  const { t } = useI18n();
  return (
    <div className="w-full bg-brand text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center font-ui text-xs font-semibold sm:text-sm">
        <span aria-hidden="true">📢</span>
        <span>{t("notice.text")}</span>
      </div>
    </div>
  );
}
