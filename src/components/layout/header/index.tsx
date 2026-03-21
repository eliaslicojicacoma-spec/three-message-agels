import Link from "next/link";
import { mainMenu } from "@/data/menus";
import { siteConfig } from "@/config/site";
import MobileNav from "@/components/navigation/mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--tam-line)] bg-[rgba(246,241,232,0.92)] backdrop-blur-md shadow-[0_4px_20px_rgba(17,17,17,0.05)]">
      <div className="container-premium flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--tam-ink)] text-sm font-bold text-white shadow-sm">
            △
          </span>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight text-[var(--tam-ink)]">
              {siteConfig.shortName}
            </p>
            <p className="truncate text-[11px] uppercase tracking-[0.22em] text-[var(--tam-accent-strong)]">
              {siteConfig.brand.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {mainMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--tam-muted)] transition hover:bg-white/60 hover:text-[var(--tam-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/bible/search"
            className="hidden rounded-xl border border-[var(--tam-line)] bg-white/70 px-4 py-2 text-sm font-medium text-[var(--tam-ink)] transition hover:bg-white md:inline-flex"
          >
            Pesquisar
          </Link>

          <div className="block md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
