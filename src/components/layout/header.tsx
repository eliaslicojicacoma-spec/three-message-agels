"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/blog", label: "Artigos" },
  { href: "/books", label: "Livros" },
  { href: "/studies", label: "Estudos Bíblicos" },
  { href: "/verse-of-day", label: "Versículo do Dia" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname?.startsWith(path + "/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-[100rem] px-8 md:px-16">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center">
            <h1 className="text-3xl text-[#171411] md:text-4xl">
              As Três Mensagens Angélicas
            </h1>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base transition-colors ${
                  isActive(link.href)
                    ? "font-medium text-[#b88a4a]"
                    : "text-[#171411] hover:text-[#b88a4a]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#171411] transition-colors hover:text-[#b88a4a] lg:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            {isMenuOpen ? (
              <span className="text-3xl leading-none">×</span>
            ) : (
              <span className="text-3xl leading-none">☰</span>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="border-t border-[#f3eee7] pb-6 pt-6 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 text-base transition-colors ${
                    isActive(link.href)
                      ? "font-medium text-[#b88a4a]"
                      : "text-[#171411] hover:text-[#b88a4a]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
