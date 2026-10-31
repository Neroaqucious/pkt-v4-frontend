import { Squiggle } from "./Decor";
import Breadcrumbs from "./Breadcrumbs";

export default function PageHero({
  title,
  sub,
  breadcrumb,
}: {
  title: string;
  sub?: string;
  breadcrumb?: { labelKey: string; href?: string }[];
}) {
  return (
    <section className="relative w-full overflow-hidden bg-cream">
      {/* seigaiha watermark (same as top page) — fills the whole header */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="page-seigaiha"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(0.5)"
          >
            <g fill="none" stroke="#d9d5ce" strokeWidth="1.2" opacity="0.6">
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
        </defs>
        <rect width="100%" height="100%" fill="url(#page-seigaiha)" />
      </svg>

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {breadcrumb && <Breadcrumbs items={breadcrumb} />}
        <div className="text-center">
          <p className="font-ui text-xs font-bold uppercase tracking-[0.3em] text-brand">
            PKT EDUCATION CENTER
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
            {title}
          </h1>
          <Squiggle className="mx-auto mt-4 h-3 w-28 text-gold" />
          {sub && (
            <p className="mx-auto mt-4 max-w-2xl font-body text-muted">{sub}</p>
          )}
        </div>
      </div>
    </section>
  );
}
