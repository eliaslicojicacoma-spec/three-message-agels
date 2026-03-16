import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MobileBottomNav from "@/components/ui/mobile-bottom-nav"

const siteUrl = "https://three-angels-message.vercel.app";
const siteTitle = "Three Angels Message";
const siteDescription =
  "Plataforma missionária digital para Bíblia, estudos bíblicos, livros cristãos, downloads e mensagem dos três anjos.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  applicationName: siteTitle,
  keywords: [
    "Bíblia",
    "estudos bíblicos",
    "mensagem dos três anjos",
    "evangelho eterno",
    "livros cristãos",
    "recursos adventistas",
    "Apocalipse 14",
    "plataforma missionária",
  ],
  authors: [{ name: "Elias Licoji Cacoma" }],
  creator: "Elias Licoji Cacoma",
  publisher: "Three Angels Message",
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: siteTitle,
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Three Angels Message",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/preview.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}
        <MobileBottomNav /></div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
