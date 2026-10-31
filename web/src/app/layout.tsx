import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PKT Myanmar — မြန်မာနဲ့ဂျပန်ကို ပညာရေးနဲ့ချိတ်ဆက်",
  description:
    "PKT Education Center — ဂျပန်စာ သင်တန်း၊ ဂျပန်သို့ ပို့ဆောင်ရေး နှင့် ဘဝထောက်ပံ့ရေး။ ミャンマーと日本の未来を教育でつなぐ。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="my">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
