import Link from "next/link";
import { siteConfig } from "@/config/site";
import MobileNav from "@/components/navigation/mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(247,243,236,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0">
          <div className="flex flex-col">
            <span className="text-[1.9rem] font-semibold leading-none tracking-[-0.05em] text-[#151515] md:text-[2.1rem]">
              {siteConfig.shortName}
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#b08d57]">
              {siteConfig.brand.tagline}
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-8">
            <Link href="/blog" className="text-[15px] font-medium text-[#58524a] transition hover:text-[#151515]">
              Blog
            </Link>
            <Link href="/studies" className="text-[15px] font-medium text-[#58524a] transition hover:text-[#151515]">
              Estudos
            </Link>
            <Link href="/books" className="text-[15px] font-medium text-[#58524a] transition hover:text-[#151515]">
              Livros
            </Link>
            <Link href="/about" className="text-[15px] font-medium text-[#58524a] transition hover:text-[#151515]">
              Sobre
            </Link>
            <Link href="/contact" className="text-[15px] font-medium text-[#58524a] transition hover:text-[#151515]">
              Contacto
            </Link>
          </div>

          <div className="block xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
