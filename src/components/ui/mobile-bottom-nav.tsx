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
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-black/10 bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-2xl grid-cols-5">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-h-[68px] flex-col items-center justify-center gap-1 px-1 text-center transition ${
                active ? "text-neutral-950" : "text-neutral-500"
              }`}
            >
              <span className="text-lg leading-none">{item.icon}</span>
              <span className="text-[11px] font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
