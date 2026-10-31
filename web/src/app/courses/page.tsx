import type { Metadata } from "next";
import CoursesPage from "@/components/CoursesPage";

export const metadata: Metadata = {
  title: "သင်တန်းများ / Courses",
  description:
    "Currently open Japanese language, IT and specified skills courses.",
};

export default function Page() {
  return <CoursesPage />;
}
