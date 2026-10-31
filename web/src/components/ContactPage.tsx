"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import PageHero from "./PageHero";
import Section from "./Section";
import Reveal from "./Reveal";

const input =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand";

export default function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        title={t("contact.title")}
        sub={t("contact.sub")}
        breadcrumb={[{ labelKey: "nav.contact" }]}
      />
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <form
              className="grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-ink">
                  {t("form.name")} *
                </span>
                <input required className={input} />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-ink">
                  {t("form.company")}
                </span>
                <input className={input} />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-ink">
                  {t("form.phone")}
                </span>
                <input type="tel" className={input} />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-ink">
                  {t("form.email")} *
                </span>
                <input type="email" required className={input} />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1 block text-sm font-semibold text-ink">
                  {t("form.type")}
                </span>
                <select className={input}>
                  <option>—</option>
                  <option>{t("nav.apply")}</option>
                  <option>{t("nav.contact")}</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1 block text-sm font-semibold text-ink">
                  {t("form.msg")} *
                </span>
                <textarea required rows={5} className={input} />
              </label>
              <label className="flex items-start gap-2 text-sm text-muted sm:col-span-2">
                <input type="checkbox" className="mt-0.5 accent-brand" />
                {t("form.consent")}
              </label>
              <button
                type="submit"
                className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark sm:col-span-2"
              >
                {t("form.submit")}
              </button>
              {sent && (
                <p className="text-center text-sm font-semibold text-brand sm:col-span-2">
                  ✓ {t("form.submit")} — (demo)
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-cream text-sm text-muted">
              Google Map
            </div>
            <div className="mt-4 rounded-2xl border border-line p-5 text-sm leading-relaxed text-muted">
              <div className="font-bold text-ink">株式会社ピーケーティー</div>
              〒353-0004 埼玉県志木市本町六丁目23-11
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
