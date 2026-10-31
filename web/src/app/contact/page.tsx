import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "ဆက်သွယ်ရန် / Contact",
  description:
    "Contact PKT Myanmar for study and work opportunities in Japan.",
};

export default function Page() {
  return <ContactPage />;
}
