import Link from "next/link";
import { mainMenu } from "@/data/menus";
import { siteConfig } from "@/config/site";
import MobileNav from "@/components/navigation/mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(248,244,236,0.92)] backdrop-blur-xl">
      <div className="container-premium flex h-20 items-center justify-between gap-6">
        <Link href="/" className="min-w-0">
          <div className="flex flex-col">
            <span className="text-[1.9rem] font-semibold leading-none tracking-[-0.05em] text-[var(--tam-ink)] md:text-[2.2rem]">
              {siteConfig.shortName}
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--tam-accent-strong)]">
              {siteConfig.brand.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
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
          <Link
            href="/support"
            className="hidden rounded-full border border-[var(--tam-line)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--tam-ink)] shadow-sm transition hover:translate-y-[-1px] lg:inline-flex"
          >
            Apoiar
          </Link>

          <div className="block xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
