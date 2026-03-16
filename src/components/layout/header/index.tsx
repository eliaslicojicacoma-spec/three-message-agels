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
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[rgba(243,243,241,0.96)] backdrop-blur">
      <div className="page-shell">
        <div className="header-shell-premium flex items-center justify-between py-4">
          <div>
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-[var(--text-main)]">
              {siteConfig.name}
            </Link>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
              Editorial Cristão
            </p>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {mainMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link-premium text-sm font-medium text-[var(--text-soft)] transition hover:text-[var(--text-main)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white md:hidden"
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 bg-[var(--text-main)] transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-[var(--text-main)] transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-[var(--text-main)] transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 z-[60] md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-[rgba(20,20,20,0.28)] transition ${open ? "opacity-100" : "opacity-0"}`}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white p-6 shadow-2xl transition duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="border-b border-[var(--border-soft)] pb-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
              Navegação
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight">{siteConfig.name}</h3>
          </div>

          <nav className="mt-6 flex flex-col gap-2">
            {mainMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="menu-link-mobile rounded-2xl px-4 py-4 text-base font-medium text-[var(--text-main)] transition hover:bg-[var(--surface-soft)]"
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
