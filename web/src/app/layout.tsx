import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NoticeBar from "@/components/NoticeBar";
import BackToTop from "@/components/BackToTop";
import MobileCta from "@/components/MobileCta";

export const metadata: Metadata = {
  metadataBase: new URL("https://pktjapan.jp"),
  title: {
    default: "PKT Myanmar — မြန်မာနဲ့ဂျပန်ကို ပညာရေးနဲ့ချိတ်ဆက်",
    template: "%s | PKT Myanmar",
  },
  description:
    "PKT Education Center — ဂျပန်စာ သင်တန်း၊ ဂျပန်သို့ ပို့ဆောင်ရေး နှင့် ဘဝထောက်ပံ့ရေး။ ミャンマーと日本の未来を教育でつなぐ。",
  openGraph: {
    type: "website",
    siteName: "PKT Myanmar",
    title: "PKT Myanmar",
    description:
      "Japanese language education, sending, and life support — connecting Myanmar and Japan.",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "PKT Myanmar (PKT Education Center)",
  alternateName: "株式会社ピーケーティー",
  url: "https://pktjapan.jp/",
  description:
    "Japanese language education, sending support, and life support in Japan for Myanmar youth.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6-23-11 Honcho, Shiki",
    addressRegion: "Saitama",
    postalCode: "353-0004",
    addressCountry: "JP",
  },
  sameAs: [
    "https://www.facebook.com/pkt.institute1/",
    "https://www.tiktok.com/@pkt.education.center",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="my">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Noto+Sans+Myanmar:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased pb-16 lg:pb-0">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <LanguageProvider>
          <NoticeBar />
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <BackToTop />
          <MobileCta />
        </LanguageProvider>
      </body>
    </html>
  );
}
