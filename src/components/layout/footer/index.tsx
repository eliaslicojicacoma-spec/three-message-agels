import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#121212] text-[#f5f3ee]">
      <div className="page-shell py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <h3 className="editorial-serif text-4xl">Three Angels Message</h3>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
              Uma plataforma missionária digital dedicada à proclamação do evangelho eterno,
              ao estudo da Bíblia e à partilha de recursos cristãos e adventistas.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Navegação
            </p>
            <div className="mt-5 grid gap-3 text-sm">
              <Link href="/bible" className="text-white/78 transition hover:text-white">Bíblia</Link>
              <Link href="/three-angels-message" className="text-white/78 transition hover:text-white">Mensagem</Link>
              <Link href="/studies" className="text-white/78 transition hover:text-white">Estudos</Link>
              <Link href="/books" className="text-white/78 transition hover:text-white">Livros</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Recursos
            </p>
            <div className="mt-5 grid gap-3 text-sm">
              <Link href="/downloads" className="text-white/78 transition hover:text-white">Downloads</Link>
              <Link href="/verse-of-day" className="text-white/78 transition hover:text-white">Versículo do Dia</Link>
              <Link href="/bible/search" className="text-white/78 transition hover:text-white">Pesquisa Bíblica</Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-sm text-white/45">
          © 2026 Three Angels Message. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
