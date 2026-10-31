import type { Metadata } from "next";
import NewsPage from "@/components/NewsPage";

export const metadata: Metadata = {
  title: "သတင်း / News",
  description: "Latest news and activities from PKT Myanmar.",
};

export default function Page() {
  return <NewsPage />;
}
