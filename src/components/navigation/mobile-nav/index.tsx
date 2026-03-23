"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        ☰
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 z-50">
          <div className="absolute right-0 top-0 h-full w-64 bg-white p-6">
            <button onClick={() => setOpen(false)}>Fechar</button>

            <div className="mt-6 flex flex-col gap-4">
              <a href="/">Início</a>
              <a href="/blog">Blog</a>
              <a href="/studies">Estudos</a>
              <a href="/books">Livros</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
