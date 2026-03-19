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
      <div className="mx-3 mb-3 rounded-[26px] border bg-white/95 px-2 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur">
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
                    ? "bg-black text-white shadow-sm"
                    : "text-neutral-500 hover:bg-neutral-100"
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
