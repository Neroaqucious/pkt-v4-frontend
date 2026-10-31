export default function PageHero({
  title,
  sub,
}: {
  title: string;
  sub?: string;
}) {
  return (
    <section className="w-full bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
          PKT EDUCATION CENTER
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {sub && (
          <p className="mx-auto mt-4 max-w-2xl text-muted">{sub}</p>
        )}
      </div>
    </section>
  );
}
