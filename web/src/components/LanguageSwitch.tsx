"use client";

import { useI18n, LANGS } from "@/lib/i18n/LanguageProvider";

export default function LanguageSwitch() {
  const { lang, setLang } = useI18n();
  return (
    <div
      className="flex items-center gap-1 rounded-lg bg-cream p-1"
      role="group"
      aria-label="Language"
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          className={`rounded-md px-2 py-1 text-xs font-semibold transition-colors ${
            lang === l.code
              ? "bg-brand text-white"
              : "text-muted hover:text-ink"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
