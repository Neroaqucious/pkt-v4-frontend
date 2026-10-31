import type { Metadata } from "next";
import { RegisterPage } from "@/components/AuthPages";

export const metadata: Metadata = {
  title: "အကောင့်ဖွင့်ရန် / Register",
};

export default function Page() {
  return <RegisterPage />;
}
