import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MobileBottomNav from "@/components/ui/mobile-bottom-nav";
import { seoConfig } from "@/config/seo";

export const metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: seoConfig.author }],
  verification: {
    google: "9BM7FO4cZ_5ItJpFRC88QgLd8aVQQ4JuKzLRVpJwBE4",
  },
  metadataBase: new URL(seoConfig.url),
  openGraph: {
    title: seoConfig.title,
    description: seoConfig.description,
    url: seoConfig.url,
    siteName: seoConfig.title,
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f1e8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="min-h-screen bg-[var(--tam-bg)] text-[var(--tam-ink)] antialiased">
        <Header />
        <main className="pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
