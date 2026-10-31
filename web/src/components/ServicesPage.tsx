"use client";

import { useI18n } from "@/lib/i18n/LanguageProvider";
import PageHero from "./PageHero";
import Section from "./Section";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const COURSE_ICONS = ["🇯🇵", "💻", "🛎"];

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero title={t("services.hero")} sub={t("services.sub")} />

      {/* Overview */}
      <Section tone="white">
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n, i) => (
            <Reveal key={n} delay={i * 90}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-brand">
                <span className="text-3xl font-extrabold text-gold">
                  {String(n).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold text-ink">
                  {t(`svc.${n}.t`)}
                </h3>
                <p className="mt-2 text-sm text-muted">{t(`svc.${n}.d`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" tone="cream">
        <SectionHeading title={t("svc.1.t")} sub={t("svc.1.d")} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n, i) => (
            <Reveal key={n} delay={i * 90}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
                <span className="text-3xl">{COURSE_ICONS[i]}</span>
                <h3 className="mt-4 text-xl font-bold text-ink">
                  {t(`courses.${n}.t`)}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {t(`courses.${n}.d`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Sending */}
      <Section id="sending" tone="white">
        <SectionHeading title={t("svc.2.t")} sub={t("svc.2.d")} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n, i) => (
            <Reveal key={n} delay={i * 90}>
              <div className="h-full rounded-2xl border border-line bg-white p-6">
                <span className="text-sm font-bold text-gold">STEP {n}</span>
                <h3 className="mt-3 text-lg font-bold text-ink">
                  {t(`send.${n}.t`)}
                </h3>
                <p className="mt-2 text-sm text-muted">{t(`send.${n}.d`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Support */}
      <Section id="support" tone="cream">
        <SectionHeading title={t("svc.3.t")} sub={t("svc.3.d")} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n, i) => (
            <Reveal key={n} delay={i * 90}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-ink">
                  {t(`sup.${n}.t`)}
                </h3>
                <p className="mt-2 text-sm text-muted">{t(`sup.${n}.d`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
