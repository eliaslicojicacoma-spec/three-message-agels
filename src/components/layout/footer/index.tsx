import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 pb-10 pt-16">
      <div className="glass mx-auto max-w-6xl rounded-[2.2rem] px-6 py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Three Angels Message
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              Plataforma missionária digital
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              Um projeto dedicado à proclamação do evangelho eterno, ao estudo da Bíblia
              e à partilha de recursos cristãos e adventistas com organização, beleza e propósito.
            </p>
          </div>

          <div className="grid gap-3 text-sm">
            <Link href="/bible" className="text-[var(--muted)] transition hover:text-[var(--brand)]">
              Bíblia
            </Link>
            <Link href="/three-angels-message" className="text-[var(--muted)] transition hover:text-[var(--brand)]">
              Mensagem dos Três Anjos
            </Link>
            <Link href="/studies" className="text-[var(--muted)] transition hover:text-[var(--brand)]">
              Estudos Bíblicos
            </Link>
            <Link href="/books" className="text-[var(--muted)] transition hover:text-[var(--brand)]">
              Livros
            </Link>
            <Link href="/downloads" className="text-[var(--muted)] transition hover:text-[var(--brand)]">
              Downloads
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--stroke)] pt-6 text-sm text-[var(--muted)]">
          © 2026 Three Angels Message. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
