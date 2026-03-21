"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { mainMenu } from "@/data/menus";

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
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--tam-ink)] text-white shadow-[0_12px_30px_rgba(17,17,17,0.22)]"
      >
        <span className="flex flex-col gap-1.5">
          <span className="block h-0.5 w-5 rounded-full bg-white" />
          <span className="block h-0.5 w-5 rounded-full bg-white" />
          <span className="block h-0.5 w-5 rounded-full bg-white" />
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[90] xl:hidden">
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <aside className="absolute right-0 top-0 h-full w-[88%] max-w-sm border-l border-[var(--tam-line)] bg-[rgba(248,244,236,0.98)] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[var(--tam-line)] px-5 py-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--tam-accent-strong)]">
                  Portal
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[var(--tam-ink)]">
                  Navegação
                </h2>
              </div>

              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--tam-line)] bg-white text-xl text-[var(--tam-ink)]"
              >
                ×
              </button>
            </div>

            <nav className="px-4 py-4">
              <div className="space-y-2">
                {mainMenu.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/" || pathname === "/pt" || pathname === "/en"
                      : pathname === item.href ||
                        pathname.startsWith(item.href + "/") ||
                        pathname.endsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-medium transition ${
                        active
                          ? "bg-[var(--tam-ink)] text-white shadow-[0_10px_25px_rgba(17,17,17,0.18)]"
                          : "border border-[var(--tam-line)] bg-white text-[var(--tam-ink)]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className={active ? "text-white/70" : "text-[var(--tam-muted)]"}>
                        ↗
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4">
                <Link
                  href="/support"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-[var(--tam-line)] bg-[#111111] px-4 py-4 text-sm font-semibold text-white"
                >
                  <span>Apoiar a missão</span>
                  <span className="text-white/70">→</span>
                </Link>
              </div>
            </nav>

            <div className="border-t border-[var(--tam-line)] px-5 py-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--tam-accent-strong)]">
                Three Angels Message
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--tam-muted)]">
                Bíblia, blog, estudos, livros e recursos cristãos num portal vivo,
                visual e missionário.
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
