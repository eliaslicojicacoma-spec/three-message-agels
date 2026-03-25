import Link from "next/link";

const socialLinks = [
  { href: "https://www.facebook.com/share/18GkkkzSwm/", label: "Facebook", short: "f" },
  { href: "https://www.instagram.com/eliascacoma", label: "Instagram", short: "i" },
  { href: "https://youtube.com/@eliaslicojicacoma", label: "YouTube", short: "y" },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#222222] text-[#F8F8F8]">
      <div className="mx-auto max-w-[100rem] px-6 py-16 md:px-10 md:py-24 xl:px-12">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3
              className="mb-6 text-2xl text-[#B8A07A]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Três Mensagens Angélicas
            </h3>
            <p
              className="mb-6 text-base leading-relaxed text-[#F8F8F8]"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              Um portal dedicado à proclamação do evangelho eterno e à preparação de um povo para o breve retorno de Cristo.
            </p>
            <p
              className="text-sm text-[#F8F8F8]"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              Huíla – Angola
            </p>
          </div>

          <div>
            <h4
              className="mb-6 text-xl text-[#B8A07A]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-[#F8F8F8] transition-colors hover:text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>Artigos de Fé</Link></li>
              <li><Link href="/books" className="text-[#F8F8F8] transition-colors hover:text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>Biblioteca Digital</Link></li>
              <li><Link href="/studies" className="text-[#F8F8F8] transition-colors hover:text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>Estudos Bíblicos</Link></li>
              <li><Link href="/verse-of-day" className="text-[#F8F8F8] transition-colors hover:text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>Versículo do Dia</Link></li>
            </ul>
          </div>

          <div>
            <h4
              className="mb-6 text-xl text-[#B8A07A]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Recursos
            </h4>
            <ul className="space-y-3">
              <li><a href="https://egwwritings.org" target="_blank" rel="noopener noreferrer" className="text-[#F8F8F8] transition-colors hover:text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>EGW Writings</a></li>
              <li><a href="https://biblia.com.br" target="_blank" rel="noopener noreferrer" className="text-[#F8F8F8] transition-colors hover:text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>Estudos Bíblicos</a></li>
              <li><a href="https://hinarioadventista.com.br" target="_blank" rel="noopener noreferrer" className="text-[#F8F8F8] transition-colors hover:text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>Hinário Adventista</a></li>
              <li><Link href="/about" className="text-[#F8F8F8] transition-colors hover:text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>Sobre a Missão</Link></li>
            </ul>
          </div>

          <div>
            <h4
              className="mb-6 text-xl text-[#B8A07A]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/244933522616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F8F8F8] transition-colors hover:text-[#B8A07A]"
                  style={{ fontFamily: '"Sora", sans-serif' }}
                >
                  +244 933 522 616
                </a>
              </li>
              <li>
                <a
                  href="mailto:eliaslicojicacoma@gmail.com"
                  className="break-all text-[#F8F8F8] transition-colors hover:text-[#B8A07A]"
                  style={{ fontFamily: '"Sora", sans-serif' }}
                >
                  eliaslicojicacoma@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4A4A4A] text-[#F8F8F8] transition-colors hover:bg-[#B8A07A]"
                  style={{ fontFamily: '"Sora", sans-serif' }}
                >
                  {item.short}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#4A4A4A] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p
              className="text-center text-sm text-[#F8F8F8] md:text-left"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              © {currentYear} Três Mensagens Angélicas. Todos os direitos reservados.
            </p>

            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-[#F8F8F8] transition-colors hover:text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>
                Privacidade
              </Link>
              <Link href="/terms" className="text-sm text-[#F8F8F8] transition-colors hover:text-[#B8A07A]" style={{ fontFamily: '"Sora", sans-serif' }}>
                Termos de Uso
              </Link>
            </div>
          </div>

          <p
            className="mt-6 text-center text-sm italic text-[#F8F8F8]"
            style={{ fontFamily: '"Sora", sans-serif' }}
          >
            "E este evangelho do reino será pregado em todo o mundo, em testemunho a todas as nações, e então virá o fim." - Mateus 24:14
          </p>
        </div>
      </div>
    </footer>
  );
}
