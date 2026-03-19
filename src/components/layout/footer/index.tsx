import Link from "next/link";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/config/social";
import { donationsConfig } from "@/config/donations";
import { footerMenu } from "@/data/menus";

export default function Footer() {
  return (
    <footer className="footer-premium mt-16 border-t border-white/10">
      <div className="container-premium grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-bold text-black">
              △
            </span>

            <div>
              <p className="text-sm font-semibold text-white">{siteConfig.shortName}</p>
              <p className="text-xs tracking-[0.2em] text-[var(--tam-accent)] uppercase">
                {siteConfig.brand.tagline}
              </p>
            </div>
          </div>

          <p className="text-sm leading-8">{siteConfig.brand.mission}</p>
        </div>

        {footerMenu.map((group) => (
          <div key={group.label}>
            <h3 className="mb-4 text-sm font-semibold">{group.label}</h3>
            <div className="flex flex-col gap-3 text-sm">
              {group.items.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h3 className="mb-4 text-sm font-semibold">Contato & Apoio</h3>

          <div className="space-y-3 text-sm">
            <p>{siteConfig.contact.email}</p>
            <p>{siteConfig.contact.whatsapp}</p>
            <p>
              {donationsConfig.pix.label}: {donationsConfig.pix.value}
            </p>
            <p>
              {donationsConfig.paypal.label}: {donationsConfig.paypal.value}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 px-3 py-2 transition hover:border-[var(--tam-accent)] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/45">
        © {new Date().getFullYear()} {siteConfig.shortName}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
