import Link from "next/link";
import MobileNav from "@/components/navigation/mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f3ec]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold text-[#151515]">
          As Três Mensagens
        </Link>

        <nav className="hidden md:flex gap-6 text-sm text-[#151515]">
          <Link href="/blog">Blog</Link>
          <Link href="/studies">Estudos</Link>
          <Link href="/books">Livros</Link>
        </nav>

        <div className="block md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
