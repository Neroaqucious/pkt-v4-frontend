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
    <footer className="w-full bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-lg font-extrabold">
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
