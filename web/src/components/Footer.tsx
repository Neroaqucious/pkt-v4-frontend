"use client";

import { useI18n } from "@/lib/i18n/LanguageProvider";
import LanguageSwitch from "./LanguageSwitch";

const SCHOOLS = [
  "Thingangyun",
  "Tamwe",
  "Hledan",
  "Insein",
  "South Dagon",
  "Mandalay",
  "Bago",
  "Taunggyi",
  "Mawlamyine",
  "Meiktila",
  "Taungoo",
];

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative w-full overflow-hidden bg-ink text-white">
      {/* Japanese pattern watermark (seigaiha left / asanoha right) */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="footer-seigaiha"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <g fill="none" stroke="#d4a843" strokeWidth="1.2">
              <path d="M0 40 A40 40 0 0 1 80 40" />
              <path d="M10 40 A30 30 0 0 1 70 40" />
              <path d="M20 40 A20 20 0 0 1 60 40" />
              <path d="M30 40 A10 10 0 0 1 50 40" />
              <path d="M-40 80 A40 40 0 0 1 40 80" />
              <path d="M-30 80 A30 30 0 0 1 30 80" />
              <path d="M-20 80 A20 20 0 0 1 20 80" />
              <path d="M-10 80 A10 10 0 0 1 10 80" />
              <path d="M40 80 A40 40 0 0 1 120 80" />
              <path d="M50 80 A30 30 0 0 1 110 80" />
              <path d="M60 80 A20 20 0 0 1 100 80" />
              <path d="M70 80 A10 10 0 0 1 90 80" />
            </g>
          </pattern>
          <pattern
            id="footer-asanoha"
            width="52"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <g fill="none" stroke="#d4a843" strokeWidth="1">
              <path d="M26 0 L52 15 L52 45 L26 60 L0 45 L0 15 Z" />
              <path d="M26 30 L26 0 M26 30 L52 15 M26 30 L52 45 M26 30 L26 60 M26 30 L0 45 M26 30 L0 15" />
            </g>
          </pattern>
        </defs>
        <rect x="0" y="0" width="50%" height="100%" fill="url(#footer-seigaiha)" opacity="0.03" />
        <rect x="50%" y="0" width="50%" height="100%" fill="url(#footer-asanoha)" opacity="0.03" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 py-14 font-ui sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="font-display text-lg font-extrabold">
              PKT <span className="text-gold">MYANMAR</span>
            </div>
            <p className="mt-3 text-sm text-white/60">{t("footer.tagline")}</p>
          </div>

          <div>
            <div className="text-sm font-bold text-gold">{t("footer.jp")}</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              株式会社ピーケーティー
              <br />
              〒353-0004 埼玉県志木市本町六丁目23-11
            </p>
          </div>

          <div>
            <div className="text-sm font-bold text-gold">{t("footer.mm")}</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              May Myanmar Lin Co., Ltd.
              <br />
              Tamwe Township, Yangon
            </p>
          </div>

          <div>
            <div className="text-sm font-bold text-gold">
              {t("footer.schools")}
            </div>
            <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-white/70">
              {SCHOOLS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">{t("footer.rights")}</p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs text-white/70 hover:text-gold"
            >
              {t("footer.privacy")}
            </a>
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
}
