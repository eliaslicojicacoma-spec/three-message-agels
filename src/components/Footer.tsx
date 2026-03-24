import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-[#f8f3eb]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-[#151515]">
              Clarim da Verdade
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#6d675f]">
              Um portal dedicado à proclamação do evangelho eterno.
            </p>
            <p className="mt-3 text-sm text-[#6d675f]">Huíla — Angola</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b08d57]">
              Navegação
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#3f3a34]">
              <Link href="/blog">Blog</Link>
              <Link href="/studies">Estudos</Link>
              <Link href="/books">Livros</Link>
              <Link href="/about">Sobre</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b08d57]">
              Contato
            </h4>
            <div className="mt-4 space-y-3 text-sm text-[#3f3a34]">
              <a href="mailto:eliaslicojicacoma@gmail.com">
                eliaslicojicacoma@gmail.com
              </a>
              <br />
              <a href="https://wa.me/244933522616">
                +244 933 522 616
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b08d57]">
              Social
            </h4>
            <div className="mt-4 flex gap-3 text-sm text-[#3f3a34]">
              <a href="https://www.facebook.com/share/1DeT9sjHyp/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://www.instagram.com/eliascacoma" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://youtube.com/@eliaslicojicacoma" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-black/5 pt-6 text-sm text-[#6d675f]">
          © {year} Clarim da Verdade. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
