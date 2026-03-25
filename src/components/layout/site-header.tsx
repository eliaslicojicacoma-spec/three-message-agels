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

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-[100rem] items-center justify-between px-6 py-5 md:px-10 xl:px-12">
        <Link
          href="/"
          className="tracking-tight text-[#222222]"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "clamp(1.9rem, 2.6vw, 2.8rem)",
          }}
        >
          Três Mensagens Angélicas
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] transition-colors ${
                  active ? "text-[#B8A07A]" : "text-[#333333] hover:text-[#B8A07A]"
                }`}
                style={{ fontFamily: '"Sora", sans-serif' }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/support"
            className="hidden min-h-[48px] items-center justify-center rounded-full bg-[#B8A07A] px-6 text-sm font-medium text-[#222222] transition hover:bg-[#a78962] xl:inline-flex"
            style={{ fontFamily: '"Sora", sans-serif' }}
          >
            Apoiar a Missão
          </Link>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#222222] transition hover:border-[#B8A07A]/40 hover:text-[#B8A07A] xl:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition-all ${
                  isMenuOpen ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 bg-current transition-all ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-5 bg-current transition-all ${
                  isMenuOpen ? "top-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-black/5 bg-white px-6 pb-6 pt-4 xl:hidden">
          <div className="mx-auto flex max-w-[100rem] flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base transition-colors ${
                    active
                      ? "bg-[#B8A07A]/10 text-[#B8A07A]"
                      : "text-[#333333] hover:bg-black/[0.03] hover:text-[#B8A07A]"
                  }`}
                  style={{ fontFamily: '"Sora", sans-serif' }}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/support"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#B8A07A] px-6 text-sm font-medium text-[#222222] transition hover:bg-[#a78962]"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              Apoiar a Missão
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
