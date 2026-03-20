import "./globals.css";
import { seoConfig } from "@/config/seo";

export const metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: seoConfig.author }],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
