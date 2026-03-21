import Link from "next/link";
import { mainMenu } from "@/data/menus";
import { siteConfig } from "@/config/site";
import MobileNav from "@/components/navigation/mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--tam-line)] bg-[rgba(250,247,241,0.92)] backdrop-blur-xl">
      <div className="container-premium flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 flex-col">
          <span className="text-[2rem] font-semibold leading-none tracking-[-0.04em] text-[var(--tam-ink)]">
            {siteConfig.shortName}
          </span>
          <span className="mt-1 text-[11px] uppercase tracking-[0.28em] text-[var(--tam-accent-strong)]">
            {siteConfig.brand.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-[var(--tam-muted)] transition hover:text-[var(--tam-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden h-11 items-center rounded-full border border-[var(--tam-line)] bg-white/80 px-4 text-sm font-medium text-[var(--tam-muted)] shadow-sm lg:inline-flex"
          >
            🌐 EN
          </button>

          <button
            type="button"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-[var(--tam-line)] bg-white/80 text-lg text-[var(--tam-muted)] shadow-sm lg:inline-flex"
          >
            ☾
          </button>

          <div className="block lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
