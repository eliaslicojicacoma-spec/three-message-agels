import Link from "next/link";
import { mainMenu } from "@/data/menus";
import { siteConfig } from "@/config/site";
import MobileNav from "@/components/navigation/mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="container-premium flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-sm font-bold text-white shadow-sm">
            △
          </span>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight text-neutral-950">
              {siteConfig.shortName}
            </p>
            <p className="truncate text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              {siteConfig.brand.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {mainMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/bible/search"
            className="hidden rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 md:inline-flex"
          >
            Pesquisar
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
