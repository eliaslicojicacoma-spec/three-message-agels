"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botão hambúrguer */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="z-50 text-2xl"
      >
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm">
          
          {/* Menu lateral */}
          <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl p-6 flex flex-col">
            
            <button
              onClick={() => setOpen(false)}
              className="self-end mb-6 px-3 py-1 border rounded-full"
            >
              Fechar
            </button>

            <nav className="flex flex-col gap-6 text-lg font-medium text-[#151515]">
              <a href="/" onClick={() => setOpen(false)}>Início</a>
              <a href="/blog" onClick={() => setOpen(false)}>Blog</a>
              <a href="/studies" onClick={() => setOpen(false)}>Estudos</a>
              <a href="/books" onClick={() => setOpen(false)}>Livros</a>
            </nav>

          </div>
        </div>
      )}
    </>
  );
}
