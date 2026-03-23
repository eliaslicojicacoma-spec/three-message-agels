"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Início", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Estudos", href: "/studies" },
  { label: "Livros", href: "/books" },
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
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-2xl text-[#151515] shadow-sm"
      >
        ☰
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999] h-screen w-screen bg-[#f6f1e8]">
          <div className="flex h-full min-h-screen w-full flex-col bg-[#f6f1e8]">
            <div className="flex items-center justify-between border-b border-black/5 px-5 py-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#b08d57]">
                  Navegação
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#151515]">
                  Menu
                </h2>
              </div>

              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-5 text-sm font-medium text-[#151515]"
              >
                Fechar
              </button>
            </div>

            <nav className="flex-1 px-5 py-6">
              <div className="space-y-3">
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
                      className={`flex items-center justify-between rounded-[1.25rem] px-5 py-4 transition ${
                        active
                          ? "bg-[#151515] text-white"
                          : "bg-white text-[#151515] border border-black/5"
                      }`}
                    >
                      <span className="text-lg font-medium">{item.label}</span>
                      <span className={active ? "text-white/65" : "text-[#8a8378]"}>→</span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div className="border-t border-black/5 px-5 py-5">
              <p className="text-sm leading-7 text-[#6d675f]">
                As Três Mensagens Angélicas
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#b08d57]">
                A voz profética para o tempo do fim
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
