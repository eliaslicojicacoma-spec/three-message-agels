import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";

export const metadata: Metadata = {
  title: seoConfig.defaultTitle,
  description: seoConfig.defaultDescription,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO">
      <body className="min-h-screen bg-neutral-50 text-neutral-950 antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
