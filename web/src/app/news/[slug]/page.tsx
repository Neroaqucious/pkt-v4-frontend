import type { Metadata } from "next";
import { news } from "@/lib/news";
import NewsDetailPage from "@/components/NewsDetailPage";

// Blocking route — the global Header reads URL data (usePathname), which cannot
// be prerendered for dynamic params. Allowing a blocking render fixes it.
export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  return { title: item ? `${item.title.en} | News` : "News" };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <NewsDetailPage slug={slug} />;
}
