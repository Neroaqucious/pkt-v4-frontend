"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import PageHero from "./PageHero";
import Section from "./Section";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { courses, type Course, type CourseStatus } from "@/lib/courses";

const STATUS_STYLE: Record<CourseStatus, string> = {
  open: "bg-green-100 text-green-700",
  full: "bg-gray-200 text-gray-600",
  soon: "bg-gold-tint text-gold",
};

const CATEGORIES = [
  { key: "all", labelKey: "courses.open.all" },
  { key: "ja", labelKey: "courses.1.t" },
  { key: "it", labelKey: "courses.2.t" },
  { key: "tokutei", labelKey: "courses.3.t" },
];

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <dt className="shrink-0 text-muted">{label}</dt>
      <dd className="text-right font-medium text-ink">{value}</dd>
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  const { t } = useI18n();
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[3/2]">
        <Image
          src={course.image}
          alt={course.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gold">
            {course.level}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${STATUS_STYLE[course.status]}`}
          >
            {t(`courses.open.status.${course.status}`)}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-ink">{course.name}</h3>

        <dl className="mt-4 space-y-2 text-sm">
          <Row label={t("courses.open.start")} value={course.startDate} />
          <Row label={t("courses.open.duration")} value={course.duration} />
          <Row label={t("courses.open.schedule")} value={course.schedule} />
          <Row label={t("courses.open.fee")} value={course.fee} />
        </dl>

        <div className="mt-auto pt-5">
          <Link
            href="/contact"
            className={`inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
              course.status === "full"
                ? "cursor-not-allowed bg-gray-100 text-gray-400"
                : "bg-brand text-white hover:bg-brand-dark"
            }`}
          >
            {course.status === "full" ? t("courses.open.status.full") : t("nav.apply")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const { t } = useI18n();
  const [cat, setCat] = useState("all");

  const list = courses.filter((c) => cat === "all" || c.category === cat);

  return (
    <>
      <PageHero title={t("courses.title")} sub={t("courses.sub")} />

      <Section tone="cream">
        <SectionHeading
          title={t("courses.open.title")}
          sub={t("courses.open.sub")}
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setCat(c.key)}
              className={`rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
                cat === c.key
                  ? "bg-brand text-white"
                  : "bg-white text-muted hover:text-ink"
              }`}
            >
              {t(c.labelKey)}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((course, i) => (
            <Reveal key={course.id} delay={(i % 3) * 70}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>

        {list.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted">—</p>
        )}
      </Section>
    </>
  );
}
