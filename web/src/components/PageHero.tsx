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
    <>
      {breadcrumb && <Breadcrumbs items={breadcrumb} />}
      <section className="relative w-full overflow-hidden bg-cream">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      <div className="dot-grid-gold pointer-events-none absolute right-10 top-10 hidden h-32 w-32 opacity-60 lg:block" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
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
    </section>
    </>
  );
}
