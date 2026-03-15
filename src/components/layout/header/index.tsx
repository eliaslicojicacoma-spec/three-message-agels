import Link from "next/link";
import { mainMenu } from "@/data/menus";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <div className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-3xl px-5 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight md:text-xl">
          {siteConfig.name}
        </Link>

        <nav className="hidden gap-5 md:flex">
          {mainMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--brand)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
