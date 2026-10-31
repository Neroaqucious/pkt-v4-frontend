import type { ReactNode } from "react";

type Tone = "white" | "cream" | "dark";

const toneClass: Record<Tone, string> = {
  white: "bg-white text-ink",
  cream: "bg-cream text-ink",
  dark: "bg-ink text-white",
};

export default function Section({
  id,
  tone = "white",
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`w-full ${toneClass[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {children}
      </div>
    </section>
  );
}
