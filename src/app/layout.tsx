import type { Metadata } from "next";
import "./globals.css";
import "../styles/fonts.css";
import CookieBanner from "@/components/layout/cookie-banner";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

const siteUrl = "https://three-angels-message.vercel.app";
const siteName = "Três Mensagens Angélicas";
const siteDescription =
  "Portal cristão com estudos bíblicos, livros, reflexão espiritual e recursos para fortalecer a fé e preparar um povo para o breve retorno de Cristo.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Três Mensagens Angélicas",
    "evangelho eterno",
    "estudos bíblicos",
    "livros cristãos",
    "profecia bíblica",
    "Bíblia",
    "Ellen G. White",
    "mensagem adventista",
    "versículo do dia",
    "fé cristã",
  ],
  authors: [{ name: "Elias Licoji Cacoma" }],
  creator: "Elias Licoji Cacoma",
  publisher: "Três Mensagens Angélicas",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_AO",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/preview.webp",
        width: 1200,
        height: 630,
        alt: "Três Mensagens Angélicas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/preview.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-[#f6f3ee] text-[#151515]">
        <SiteHeader />

        <div className="min-h-screen">
          {children}
          <CookieBanner />
        </div>

        <SiteFooter />
      </body>
    </html>
  );
}
