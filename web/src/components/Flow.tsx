"use client";

import { useI18n } from "@/lib/i18n/LanguageProvider";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Flow() {
  const { t } = useI18n();
  const steps = [1, 2, 3, 4, 5, 6];

  return (
    <Section id="flow" tone="cream">
      <SectionHeading eyebrow="FLOW" title={t("flow.title")} sub={t("flow.sub")} />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((n, i) => (
          <Reveal key={n} delay={i * 80}>
            <div className="flex h-full gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-line">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-extrabold text-white">
                {String(n).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-heading font-bold text-ink">
                  {t(`flow.${n}.t`)}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {t(`flow.${n}.d`)}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
