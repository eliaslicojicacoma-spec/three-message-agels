"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Abrir menu"
        onClick={() => setOpen(true)}
        className="hidden md:block hidden md:block fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-black/80 text-white shadow-2xl backdrop-blur-md md:hidden"
      >
        <span className="hidden md:block hidden md:block flex flex-col gap-1.5">
          <span className="hidden md:block hidden md:block block h-0.5 w-6 bg-current" />
          <span className="hidden md:block hidden md:block block h-0.5 w-6 bg-current" />
          <span className="hidden md:block hidden md:block block h-0.5 w-6 bg-current" />
        </span>
      </button>

      {open && (
        <div className="hidden md:block hidden md:block fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="hidden md:block hidden md:block absolute inset-0 bg-black/55 backdrop-blur-sm"
          />

          <aside className="hidden md:block hidden md:block absolute right-0 top-0 h-full w-[84%] max-w-sm border-l border-black/10 bg-white p-6 shadow-2xl">
            <div className="hidden md:block hidden md:block flex items-center justify-between">
              <div>
                <p className="hidden md:block hidden md:block text-xs uppercase tracking-[0.22em] text-neutral-500">
                  Three Angels Message
                </p>
                <h2 className="hidden md:block hidden md:block mt-1 text-xl font-semibold text-neutral-950">Menu</h2>
              </div>

              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="hidden md:block hidden md:block inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-2xl text-neutral-900"
              >
                ×
              </button>
            </div>

            <nav className="hidden md:block hidden md:block mt-8 flex flex-col gap-2">
              <Link href="/" onClick={() => setOpen(false)} className="hidden md:block hidden md:block rounded-2xl px-4 py-3 text-base font-medium text-neutral-950 hover:bg-neutral-100">
                Início
              </Link>
              <Link href="/bible" onClick={() => setOpen(false)} className="hidden md:block hidden md:block rounded-2xl px-4 py-3 text-base font-medium text-neutral-950 hover:bg-neutral-100">
                Bíblia
              </Link>
              <Link href="/studies" onClick={() => setOpen(false)} className="hidden md:block hidden md:block rounded-2xl px-4 py-3 text-base font-medium text-neutral-950 hover:bg-neutral-100">
                Estudos
              </Link>
              <Link href="/books" onClick={() => setOpen(false)} className="hidden md:block hidden md:block rounded-2xl px-4 py-3 text-base font-medium text-neutral-950 hover:bg-neutral-100">
                Livros
              </Link>
              <Link href="/downloads" onClick={() => setOpen(false)} className="hidden md:block hidden md:block rounded-2xl px-4 py-3 text-base font-medium text-neutral-950 hover:bg-neutral-100">
                Downloads
              </Link>
              <Link href="/verse-of-day" onClick={() => setOpen(false)} className="hidden md:block hidden md:block rounded-2xl px-4 py-3 text-base font-medium text-neutral-950 hover:bg-neutral-100">
                Versículo do Dia
              </Link>
              <Link href="/bible/search" onClick={() => setOpen(false)} className="hidden md:block hidden md:block rounded-2xl px-4 py-3 text-base font-medium text-neutral-950 hover:bg-neutral-100">
                Pesquisa Bíblica
              </Link>
            </nav>

            <p className="hidden md:block hidden md:block mt-8 text-sm leading-7 text-neutral-500">
              Plataforma missionária digital com Bíblia, estudos e recursos cristãos.
            </p>
          </aside>
        </div>
      )}
    </>
  );
}
