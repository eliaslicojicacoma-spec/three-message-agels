"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainMenu } from "@/data/menus";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <div className="glass-strong mx-auto max-w-6xl rounded-[1.9rem] px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-[linear-gradient(135deg,var(--gold-soft),rgba(255,255,255,0.7))] ring-1 ring-[rgba(200,169,107,0.18)]" />
            <Link href="/" className="text-lg font-bold tracking-tight md:text-xl">
              {siteConfig.name}
            </Link>
          </div>

          <nav className="hidden gap-5 md:flex">
            {mainMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-white/50 hover:text-[var(--brand)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--stroke)] bg-white/60 md:hidden"
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-[var(--fg)] transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-[var(--fg)] transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-[var(--fg)] transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] md:hidden transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-[rgba(20,18,16,0.32)] backdrop-blur-[2px] transition duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute right-4 top-4 bottom-4 w-[84%] max-w-sm rounded-[2rem] border border-white/40 bg-[rgba(255,250,244,0.86)] p-5 shadow-[0_24px_80px_rgba(38,29,20,0.18)] backdrop-blur-xl transition duration-300 ${
            open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Navegação
              </p>
              <h3 className="mt-2 text-xl font-semibold">{siteConfig.name}</h3>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--stroke)] bg-white/70"
              aria-label="Fechar menu"
            >
              <span className="text-lg font-semibold">×</span>
            </button>
          </div>

          <div className="mt-6 h-px bg-[var(--stroke)]" />

          <nav className="mt-6 flex flex-col gap-3">
            {mainMenu.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[1.25rem] border border-[var(--stroke)] bg-white/60 px-4 py-4 text-sm font-medium text-[var(--fg)] transition hover:bg-white"
                style={{
                  animation: open ? `fadeUp 0.45s ease ${index * 0.06}s both` : undefined,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 rounded-[1.5rem] border border-[rgba(200,169,107,0.18)] bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(248,241,230,0.9))] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Missão
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Bíblia, estudos, livros e recursos organizados para proclamar a verdade com beleza e clareza.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
