import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.brand.description,
  keywords: [
    "três mensagens angélicas",
    "estudos bíblicos",
    "evangelho eterno",
    "apocalipse 14",
    "ellen white",
    "portal cristão",
    "livros cristãos",
    "profecia bíblica",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.brand.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/images/og/og-default-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.brand.description,
    images: ["/images/og/og-default-1200x630.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="min-h-screen bg-[var(--tam-bg)] text-[var(--tam-text)] antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
