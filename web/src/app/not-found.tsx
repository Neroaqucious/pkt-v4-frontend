import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-7xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 font-heading text-2xl font-bold text-ink">
        Page not found
      </h1>
      <p className="mt-2 text-muted">
        သင်ရှာနေသော စာမျက်နှာကို ရှာမတွေ့ပါ။
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand px-6 py-3 font-ui text-sm font-bold text-white transition-colors hover:bg-brand-dark"
      >
        Back to Home
      </Link>
    </div>
  );
}
