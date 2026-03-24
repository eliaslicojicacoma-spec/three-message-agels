import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#111111] text-[#f5f1ea]">
      <div className="mx-auto max-w-[100rem] px-8 py-16 md:px-16 md:py-24">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-6 text-2xl text-[#b88a4a]">
              As Três Mensagens Angélicas
            </h3>
            <p className="mb-6 text-base leading-relaxed text-[#f5f1ea]">
              Um portal dedicado à proclamação do Evangelho Eterno e à preparação de um povo para o breve retorno de Cristo.
            </p>
            <p className="text-sm text-[#f5f1ea]">Huíla – Angola</p>
          </div>

          <div>
            <h4 className="mb-6 text-xl text-[#b88a4a]">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-base text-[#f5f1ea] transition-colors hover:text-[#b88a4a]">
                  Artigos de Fé
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-base text-[#f5f1ea] transition-colors hover:text-[#b88a4a]">
                  Biblioteca Digital
                </Link>
              </li>
              <li>
                <Link href="/studies" className="text-base text-[#f5f1ea] transition-colors hover:text-[#b88a4a]">
                  Estudos Bíblicos
                </Link>
              </li>
              <li>
                <Link href="/verse-of-day" className="text-base text-[#f5f1ea] transition-colors hover:text-[#b88a4a]">
                  Versículo do Dia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xl text-[#b88a4a]">Recursos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://egwwritings.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[#f5f1ea] transition-colors hover:text-[#b88a4a]"
                >
                  EGW Writings
                </a>
              </li>
              <li>
                <a
                  href="https://biblia.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[#f5f1ea] transition-colors hover:text-[#b88a4a]"
                >
                  Estudos Bíblicos
                </a>
              </li>
              <li>
                <a
                  href="https://hinarioadventista.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[#f5f1ea] transition-colors hover:text-[#b88a4a]"
                >
                  Hinário Adventista
                </a>
              </li>
              <li>
                <Link href="/about" className="text-base text-[#f5f1ea] transition-colors hover:text-[#b88a4a]">
                  Sobre o Fundador
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xl text-[#b88a4a]">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#b88a4a]">✆</span>
                <a
                  href="https://wa.me/244933522616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[#f5f1ea] transition-colors hover:text-[#b88a4a]"
                >
                  +244 933 522 616
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#b88a4a]">✉</span>
                <a
                  href="mailto:eliaslicojicacoma@gmail.com"
                  className="break-all text-base text-[#f5f1ea] transition-colors hover:text-[#b88a4a]"
                >
                  eliaslicojicacoma@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/share/18GkkkzSwm/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2b241f] transition-colors hover:bg-[#b88a4a]"
                aria-label="Facebook"
              >
                F
              </a>
              <a
                href="https://www.instagram.com/eliascacoma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2b241f] transition-colors hover:bg-[#b88a4a]"
                aria-label="Instagram"
              >
                I
              </a>
              <a
                href="https://youtube.com/@eliaslicojicacoma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2b241f] transition-colors hover:bg-[#b88a4a]"
                aria-label="YouTube"
              >
                Y
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2b241f] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-[#f5f1ea] md:text-left">
              © {currentYear} As Três Mensagens Angélicas. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-[#f5f1ea] transition-colors hover:text-[#b88a4a]">
                Privacidade
              </Link>
              <Link href="/terms" className="text-sm text-[#f5f1ea] transition-colors hover:text-[#b88a4a]">
                Termos de Uso
              </Link>
            </div>
          </div>
          <p className="mt-6 text-center text-sm italic text-[#f5f1ea]">
            "E este evangelho do reino será pregado em todo o mundo, em testemunho a todas as nações, e então virá o fim." - Mateus 24:14
          </p>
        </div>
      </div>
    </footer>
  );
}
