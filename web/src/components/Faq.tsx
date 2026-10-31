"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(1);
  const items = [1, 2, 3, 4, 5];

  return (
    <Section id="faq" tone="white">
      <SectionHeading eyebrow="FAQ" title={t("faq.title")} sub={t("faq.sub")} />
      <div className="mx-auto mt-10 max-w-3xl divide-y divide-line border-y border-line">
        {items.map((n) => {
          const isOpen = open === n;
          return (
            <div key={n}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : n)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
              >
                <span className="font-heading font-semibold text-ink">
                  {t(`faq.${n}.q`)}
                </span>
                <span
                  className={`shrink-0 text-lg text-brand transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  ＋
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-4 text-sm leading-relaxed text-muted">
                    {t(`faq.${n}.a`)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
