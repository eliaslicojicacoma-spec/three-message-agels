"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botão */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="z-50 text-2xl"
      >
        ☰
      </button>

      {/* Menu */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-white">
          
          {/* Header do menu */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-semibold">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="px-3 py-1 border rounded-full"
            >
              Fechar
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-6 p-6 text-lg font-medium text-[#151515]">
            <a href="/" onClick={() => setOpen(false)}>Início</a>
            <a href="/blog" onClick={() => setOpen(false)}>Blog</a>
            <a href="/studies" onClick={() => setOpen(false)}>Estudos</a>
            <a href="/books" onClick={() => setOpen(false)}>Livros</a>
          </nav>

        </div>
      )}
    </>
  );
}
