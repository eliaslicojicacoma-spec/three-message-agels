"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Abrir menu"
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-2xl text-[#151515] shadow-sm"
      >
        ☰
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60">
          <div className="absolute right-0 top-0 h-full w-64 bg-white p-6 shadow-2xl">
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="rounded-full border border-black/10 px-3 py-1 text-sm"
            >
              Fechar
            </button>

            <div className="mt-6 flex flex-col gap-4 text-[#151515]">
              <a href="/" onClick={() => setOpen(false)}>Início</a>
              <a href="/blog" onClick={() => setOpen(false)}>Blog</a>
              <a href="/studies" onClick={() => setOpen(false)}>Estudos</a>
              <a href="/books" onClick={() => setOpen(false)}>Livros</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
