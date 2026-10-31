export default function SectionHeading({
  title,
  sub,
  dark = false,
}: {
  title: string;
  sub?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-3 ${dark ? "text-white/70" : "text-muted"}`}>{sub}</p>
      )}
    </div>
  );
}
