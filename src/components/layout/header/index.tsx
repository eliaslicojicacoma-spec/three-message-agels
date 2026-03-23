import Link from "next/link";
import MobileNav from "@/components/navigation/mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f7f3ec]/90 backdrop-blur-lg border-b border-black/5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        <Link href="/" className="text-lg font-semibold">
          As Três Mensagens
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/blog">Blog</Link>
          <Link href="/studies">Estudos</Link>
          <Link href="/books">Livros</Link>
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
}
