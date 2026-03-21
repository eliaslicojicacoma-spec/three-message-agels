import Link from "next/link";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/config/social";
import { footerMenu } from "@/data/menus";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-[#111111] text-white">
      <div className="container-premium py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#d6b17a]">
              Three Angels Message
            </p>

            <h2 className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.04em]">
              Um portal cristão com verdade bíblica, reflexão e esperança.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-8 text-white/68">
              {siteConfig.brand.mission}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/75 transition hover:border-white/20 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {footerMenu.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                {group.label}
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
              Contacto
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/65">
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.whatsapp}</p>
              <p>{siteConfig.monetization.paypal}</p>
              <p>{siteConfig.monetization.pix}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.16em] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.shortName}</p>
          <p>Portal cristão digital</p>
        </div>
      </div>
    </footer>
  );
}
