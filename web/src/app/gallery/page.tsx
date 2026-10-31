import type { Metadata } from "next";
import GalleryPage from "@/components/GalleryPage";

export const metadata: Metadata = {
  title: "ဓာတ်ပုံများ / Gallery",
  description: "Photos from PKT classrooms and the journey to Japan.",
};

export default function Page() {
  return <GalleryPage />;
}
