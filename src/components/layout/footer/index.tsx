import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#c9aa72]">
              {siteConfig.shortName}
            </p>

            <p className="mt-6 max-w-md text-sm leading-8 text-white/72">
              Um portal dedicado à proclamação do evangelho eterno, ao estudo das
              Escrituras e à formação de uma fé sólida para o tempo presente.
            </p>

            <p className="mt-6 text-sm text-white/60">
              Huíla – Angola
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c9aa72]">
              Links rápidos
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link href="/blog" className="text-sm text-white/72 transition hover:text-white">
                Artigos de Fé
              </Link>
              <Link href="/books" className="text-sm text-white/72 transition hover:text-white">
                Biblioteca Digital
              </Link>
              <Link href="/studies" className="text-sm text-white/72 transition hover:text-white">
                Estudos Bíblicos
              </Link>
              <Link href="/verse-of-day" className="text-sm text-white/72 transition hover:text-white">
                Versículo do Dia
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c9aa72]">
              Recursos
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link href="/books" className="text-sm text-white/72 transition hover:text-white">
                EGW Writings
              </Link>
              <Link href="/studies" className="text-sm text-white/72 transition hover:text-white">
                Estudos Bíblicos
              </Link>
              <Link href="/downloads" className="text-sm text-white/72 transition hover:text-white">
                Downloads
              </Link>
              <Link href="/about" className="text-sm text-white/72 transition hover:text-white">
                Sobre o Fundador
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c9aa72]">
              Contacto
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/72">
              <p>+244 933 522 616</p>
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.monetization.paypal}</p>
              <p>{siteConfig.monetization.pix}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="text-xs text-white/45">
              © 2026 {siteConfig.shortName}. Todos os direitos reservados.
            </p>

            <div className="flex justify-center gap-5 text-xs text-white/45 md:justify-end">
              <Link href="/privacy" className="transition hover:text-white">
                Privacidade
              </Link>
              <Link href="/terms" className="transition hover:text-white">
                Termos de Uso
              </Link>
            </div>
          </div>

          <p className="mt-5 text-center text-xs italic leading-6 text-white/38 md:text-left">
            “E este evangelho do reino será pregado em todo o mundo, em testemunho
            a todas as nações, e então virá o fim.” – Mateus 24:14
          </p>
        </div>
      </div>
    </footer>
  );
}
