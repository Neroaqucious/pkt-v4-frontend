import type { Metadata } from "next";
import { LoginPage } from "@/components/AuthPages";

export const metadata: Metadata = {
  title: "အကောင့်ဝင်ရန် / Login",
};

export default function Page() {
  return <LoginPage />;
}
