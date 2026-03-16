"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Bíblia", href: "/bible" },
  { label: "Pesquisa Bíblica", href: "/bible/search" },
  { label: "Estudos", href: "/studies" },
  { label: "Livros", href: "/books" },
  { label: "Downloads", href: "/downloads" },
  { label: "Versículo do Dia", href: "/verse-of-day" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Abrir menu"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-neutral-950 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition hover:scale-[1.02] active:scale-95 md:hidden"
      >
        <span className="flex flex-col gap-1.5">
          <span className="block h-0.5 w-6 rounded-full bg-current" />
          <span className="block h-0.5 w-6 rounded-full bg-current" />
          <span className="block h-0.5 w-6 rounded-full bg-current" />
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <aside className="absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto border-l border-black/10 bg-neutral-50 shadow-2xl">
            <div className="border-b border-black/10 bg-white px-6 pb-5 pt-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                    Three Angels Message
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-neutral-950">
                    Navegação
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    Bíblia, estudos e recursos missionários em acesso rápido.
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Fechar menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-2xl text-neutral-900 shadow-sm"
                >
                  ×
                </button>
              </div>
            </div>

            <nav className="px-4 py-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl border border-black/8 bg-white px-4 py-4 text-[15px] font-medium text-neutral-950 shadow-sm transition hover:border-black/12 hover:bg-neutral-100"
                  >
                    <span>{item.label}</span>
                    <span className="text-neutral-400">↗</span>
                  </Link>
                ))}
              </div>
            </nav>

            <div className="mt-2 border-t border-black/10 px-6 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">
                Missão
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-500">
                Uma plataforma missionária digital para proclamar a verdade bíblica
                com acesso simples, leitura organizada e recursos úteis.
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
