"use client";

import Link from "next/link";
import { useEffect } from "react";

type NavItem = {
  label: string;
  href: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
};

export default function MobileMenu({ open, onClose, items }: Props) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <button
        type="button"
        aria-label="Fechar menu"
        onClick={onClose}
        className="absolute inset-0 bg-black/45 backdrop-blur-sm"
      />

      <aside className="absolute right-0 top-0 h-full w-full max-w-xs border-l border-black/10 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              Three Angels Message
            </p>
            <h2 className="mt-1 text-lg font-semibold text-neutral-950">Menu</h2>
          </div>

          <button
            type="button"
            aria-label="Fechar menu"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-xl text-neutral-900 transition hover:bg-neutral-100"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col px-4 py-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-2xl px-4 py-4 text-base font-medium text-neutral-900 transition hover:bg-neutral-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-black/10 px-5 py-5">
          <p className="text-sm leading-7 text-neutral-500">
            Plataforma missionária digital para Bíblia, estudos, livros e recursos de fé.
          </p>
        </div>
      </aside>
    </div>
  );
}
