"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { mobileMenu } from "@/data/menus";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white text-black shadow-sm transition hover:bg-neutral-50 md:hidden"
      >
        <span className="flex flex-col gap-1.5">
          <span className="block h-0.5 w-5 rounded-full bg-current" />
          <span className="block h-0.5 w-5 rounded-full bg-current" />
          <span className="block h-0.5 w-5 rounded-full bg-current" />
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[80] md:hidden">
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <aside className="absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto border-l border-black/10 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/10 px-5 py-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
                  Menu
                </p>
                <h2 className="mt-1 text-xl font-semibold text-neutral-950">
                  Navegação
                </h2>
              </div>

              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-xl"
              >
                ×
              </button>
            </div>

            <nav className="px-4 py-4">
              <div className="space-y-2">
                {mobileMenu.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href || pathname.startsWith(item.href + "/");

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-sm font-medium transition ${
                        active
                          ? "border-black bg-black text-white"
                          : "border-black/10 bg-white text-neutral-900 hover:bg-neutral-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className={active ? "text-white/70" : "text-neutral-400"}>
                        ↗
                      </span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div className="border-t border-black/10 px-5 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
                Missão
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Proclamar a verdade bíblica com leitura, pesquisa, estudos,
                livros e recursos cristãos organizados.
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
