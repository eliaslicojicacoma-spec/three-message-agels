"use client";

import Link from "next/link";

export default function MobileSearchFab() {
  return (
    <Link
      href="/bible/search"
      aria-label="Abrir pesquisa bíblica"
      className="fixed bottom-24 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-blue-600 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:hidden"
    >
      <span className="text-2xl leading-none">⌕</span>
    </Link>
  );
}
