import "./globals.css";
import "../styles/fonts.css";
import CookieBanner from "@/components/layout/cookie-banner";
import Link from "next/link";

export const metadata = {
  title: "Three Angels Message",
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

        {/* HEADER */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            <Link href="/" className="text-xl font-semibold tracking-tight">
              Three Angels
            </Link>

            <nav className="hidden md:flex gap-8 text-sm font-medium">
              <Link href="/blog">Blog</Link>
              <Link href="/studies">Estudos</Link>
              <Link href="/books">Livros</Link>
            </nav>

          </div>
        </header>

        {/* CONTENT */}
        <div className="min-h-screen">
          {children}
        <CookieBanner />
        </div>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-black/5">
          <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
            <p>© {new Date().getFullYear()} Three Angels Message</p>
            <div className="flex gap-6">
              <Link href="/privacy">Privacidade</Link>
              <Link href="/terms">Termos</Link>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
