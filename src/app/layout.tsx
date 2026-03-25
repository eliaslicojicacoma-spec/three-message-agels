import "./globals.css";
import "../styles/fonts.css";
import CookieBanner from "@/components/layout/cookie-banner";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

export const metadata = {
  title: "Três Mensagens Angélicas",
  description: "Portal cristão com estudos bíblicos, livros e reflexão espiritual",
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
