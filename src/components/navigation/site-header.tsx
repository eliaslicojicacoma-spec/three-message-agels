"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "@/components/navigation/mobile-menu";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Bíblia", href: "/bible" },
  { label: "Estudos", href: "/studies" },
  { label: "Livros", href: "/books" },
  { label: "Downloads", href: "/downloads" },
  { label: "Versículo do Dia", href: "/verse-of-day" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/88 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="min-w-0">
            <div className="leading-none">
              <p className="truncate text-lg font-bold text-neutral-950 md:text-xl">
                Three Angels Message
              </p>
              <p className="mt-1 hidden text-xs uppercase tracking-widest text-neutral-500 sm:block">
                Plataforma missionária
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-700 transition hover:text-neutral-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-neutral-950 transition hover:bg-neutral-100 md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} items={navItems} />
    </>
  );
}
