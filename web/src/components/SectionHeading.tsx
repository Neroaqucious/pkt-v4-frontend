import { Squiggle } from "./Decor";

export default function SectionHeading({
  title,
  sub,
  eyebrow,
  dark = false,
}: {
  title: string;
  sub?: string;
  eyebrow?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p
          className={`font-ui text-xs font-bold uppercase tracking-[0.25em] ${
            dark ? "text-gold" : "text-brand"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <Squiggle className="mx-auto mt-3 h-2.5 w-24 text-gold" />
      {sub && (
        <p className={`mt-3 font-body ${dark ? "text-white/70" : "text-muted"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
