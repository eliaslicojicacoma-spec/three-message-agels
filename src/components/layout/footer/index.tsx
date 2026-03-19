import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-white">
      <div className="container-premium py-12 grid gap-10 md:grid-cols-4">

        {/* Marca */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-white font-bold">
              △
            </span>
            <div>
              <p className="text-sm font-semibold">{siteConfig.shortName}</p>
              <p className="text-xs text-neutral-500">
                {siteConfig.brand.tagline}
              </p>
            </div>
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed">
            Proclamando a verdade bíblica através de tecnologia, estudos e conteúdos organizados para crescimento espiritual.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Navegação</h3>
          <div className="flex flex-col gap-2 text-sm text-neutral-600">
            <Link href="/">Início</Link>
            <Link href="/bible">Bíblia</Link>
            <Link href="/bible/search">Pesquisar</Link>
            <Link href="/studies">Estudos</Link>
            <Link href="/books">Livros</Link>
          </div>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Contato</h3>
          <div className="flex flex-col gap-2 text-sm text-neutral-600">
            <p>{siteConfig.contact.email}</p>
            <p>{siteConfig.contact.whatsapp}</p>
          </div>
        </div>

        {/* Apoio */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Apoiar</h3>
          <div className="flex flex-col gap-2 text-sm text-neutral-600">
            <p>PayPal: {siteConfig.monetization.paypal}</p>
            <p>Pix: {siteConfig.monetization.pix}</p>
          </div>
        </div>

      </div>

      <div className="border-t border-black/5 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {siteConfig.shortName}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
