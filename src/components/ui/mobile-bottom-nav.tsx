"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Início", href: "/", icon: "⌂" },
  { label: "Bíblia", href: "/bible", icon: "✦" },
  { label: "Buscar", href: "/bible/search", icon: "⌕" },
  { label: "Livros", href: "/books", icon: "☰" },
  { label: "Dia", href: "/verse-of-day", icon: "☼" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="mx-3 mb-3 rounded-[28px] border border-[var(--tam-line)] bg-[rgba(246,241,232,0.82)] px-2 py-2 shadow-[0_12px_34px_rgba(17,17,17,0.12)] backdrop-blur-xl">
        <div className="grid grid-cols-5 gap-1">
          {items.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex min-h-[60px] flex-col items-center justify-center rounded-2xl px-1 text-center transition-all ${
                  active
                    ? "bg-[var(--tam-ink)] text-white shadow-[0_8px_20px_rgba(17,17,17,0.22)]"
                    : "text-[var(--tam-muted)] hover:bg-white/60"
                }`}
              >
                <span className="text-lg leading-none">{item.icon}</span>
                <span className="mt-1 text-[10px] font-semibold">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
