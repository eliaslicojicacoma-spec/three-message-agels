"use client";

import { useEffect, useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Abrir menu"
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-2xl text-[#151515] shadow-sm"
      >
        ☰
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999] h-screen w-screen bg-white">
          <div className="flex h-full min-h-screen w-full flex-col bg-white">
            <div className="flex items-center justify-between border-b border-black/10 bg-white px-4 py-4">
              <span className="text-2xl font-semibold text-[#151515]">Menu</span>

              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="rounded-full border border-black/10 bg-white px-5 py-2 text-base font-medium text-[#151515]"
              >
                Fechar
              </button>
            </div>

            <nav className="flex-1 bg-white px-6 py-8">
              <div className="flex flex-col gap-8 bg-white text-[2rem] font-medium leading-none text-[#151515]">
                <a href="/" onClick={() => setOpen(false)}>Início</a>
                <a href="/blog" onClick={() => setOpen(false)}>Blog</a>
                <a href="/studies" onClick={() => setOpen(false)}>Estudos</a>
                <a href="/books" onClick={() => setOpen(false)}>Livros</a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
