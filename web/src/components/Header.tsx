"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/LanguageProvider";
import LanguageSwitch from "./LanguageSwitch";

const NAV = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "news", href: "/news" },
  { key: "gallery", href: "/gallery" },
  { key: "contact", href: "/contact" },
] as const;

export default function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const links = NAV.map((item) => (
    <Link
      key={item.key}
      href={item.href}
      onClick={() => setOpen(false)}
      className="text-sm font-semibold text-ink transition-colors hover:text-brand"
    >
      {t(`nav.${item.key}`)}
    </Link>
  ));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            P
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            PKT <span className="text-brand">MYANMAR</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">{links}</nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch />
          <Link
            href="/login"
            className="text-sm font-semibold text-muted transition-colors hover:text-brand"
          >
            {t("nav.login")}
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            {t("nav.apply")}
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links}
            <LanguageSwitch />
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand px-5 py-2.5 text-center text-sm font-bold text-white"
            >
              {t("nav.apply")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
