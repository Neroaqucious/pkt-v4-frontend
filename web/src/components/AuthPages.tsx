"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/LanguageProvider";

const input =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand";

export function LoginPage() {
  const { t } = useI18n();
  return (
    <div className="flex flex-1 items-center justify-center bg-cream px-4 py-16">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-extrabold text-ink">{t("login.title")}</h1>
        <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-ink">
              {t("form.email")} *
            </span>
            <input type="email" className={input} />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-ink">
              {t("form.password")} *
            </span>
            <input type="password" className={input} />
          </label>
          <button className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark">
            {t("nav.login")}
          </button>
        </form>

        <div className="mt-6 flex items-center gap-3 text-xs text-muted">
          <span className="h-px flex-1 bg-line" />
          {t("login.social")}
          <span className="h-px flex-1 bg-line" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button className="rounded-lg border border-line py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand">
            Google
          </button>
          <button className="rounded-lg border border-line py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand">
            Facebook
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-muted">
          <a href="#" className="text-brand hover:underline">
            {t("login.forgot")}
          </a>
          <br />
          {t("login.noaccount")}{" "}
          <Link
            href="/register"
            className="font-semibold text-brand hover:underline"
          >
            {t("login.register")}
          </Link>
        </p>
      </div>
    </div>
  );
}

export function RegisterPage() {
  const { t } = useI18n();
  return (
    <div className="flex flex-1 items-center justify-center bg-cream px-4 py-16">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-extrabold text-ink">
          {t("register.title")}
        </h1>
        <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-ink">
              {t("form.name")} *
            </span>
            <input className={input} />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-ink">
              {t("form.email")} *
            </span>
            <input type="email" className={input} />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-ink">
              {t("form.phone")}
            </span>
            <input type="tel" className={input} />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-ink">
              {t("form.password")} *
            </span>
            <input type="password" className={input} />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-ink">
              {t("register.course")}
            </span>
            <select className={input}>
              <option>—</option>
              <option>{t("courses.1.t")}</option>
              <option>{t("courses.2.t")}</option>
              <option>{t("courses.3.t")}</option>
            </select>
          </label>
          <button className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark">
            {t("register.cta")}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-muted">
          <Link
            href="/login"
            className="font-semibold text-brand hover:underline"
          >
            {t("register.haveaccount")}
          </Link>
        </p>
      </div>
    </div>
  );
}
