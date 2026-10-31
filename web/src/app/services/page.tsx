import type { Metadata } from "next";
import ServicesPage from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "ဝန်ဆောင်မှုများ / Services",
  description:
    "Education, sending and support — connecting Myanmar and Japan.",
};

export default function Page() {
  return <ServicesPage />;
}
