"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const items = [
  { label: "Início", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Estudos", href: "/studies" },
  { label: "Livros", href: "/books" },
  { label: "Versículo", href: "/verse-of-day" },
  { label: "Sobre", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

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
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-[#151515] shadow-sm transition hover:bg-white"
      >
        <span className="flex flex-col gap-1.5">
          <span className="block h-0.5 w-5 rounded-full bg-[#151515]" />
          <span className="block h-0.5 w-5 rounded-full bg-[#151515]" />
          <span className="block h-0.5 w-5 rounded-full bg-[#151515]" />
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[90] xl:hidden">
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/35 backdrop-blur-sm"
          />

          <aside className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-[#f7f3ec] shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/5 px-5 py-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#b08d57]">
                  Menu
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#151515]">
                  Navegação
                </h2>
              </div>

              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-xl text-[#151515]"
              >
                ×
              </button>
            </div>

            <nav className="px-5 py-5">
              <div className="space-y-2">
                {items.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href || pathname.startsWith(item.href + "/");

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-medium transition ${
                        active
                          ? "bg-[#151515] text-white"
                          : "bg-white text-[#151515] border border-black/5"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className={active ? "text-white/70" : "text-[#7a7368]"}>↗</span>
                    </Link>
                  );
                })}
              </div>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
