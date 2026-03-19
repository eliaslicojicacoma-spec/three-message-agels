import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";

export const metadata: Metadata = {
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.defaultDescription,
  metadataBase: new URL(siteConfig.url),

  openGraph: {
    type: "website",
    locale: seoConfig.openGraph.locale,
    url: seoConfig.openGraph.url,
    siteName: seoConfig.openGraph.siteName,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-AO">
      <body className="min-h-screen bg-neutral-50 text-neutral-950 antialiased flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
