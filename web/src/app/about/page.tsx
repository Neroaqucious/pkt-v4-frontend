import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "ကျွန်ုပ်တို့အကြောင်း / About Us",
  description:
    "PKT Myanmar — founder message, philosophy, history and 11 school locations.",
};

export default function Page() {
  return <AboutPage />;
}
