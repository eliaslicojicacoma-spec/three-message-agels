import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";
import { getDailyVerse } from "@/services/related-content/verse-of-day";

export default function HomePage() {
  const verse = getDailyVerse();

  return (
    <main className="container-premium py-10 md:py-14">
      <section className="rounded-[32px] border bg-white px-5 py-10 shadow-sm md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Three Angels Message"
              title="Uma plataforma missionária digital para proclamar a verdade bíblica"
              description="Bíblia, pesquisa, estudos, livros e recursos cristãos organizados numa experiência moderna, leve e centrada na Palavra de Deus."
            />

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/bible"
                className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Abrir Bíblia
              </Link>

              <Link
                href="/bible/search"
                className="rounded-2xl border bg-white px-5 py-3 text-sm font-medium transition hover:bg-neutral-50"
              >
                Pesquisar
              </Link>
            </div>
          </div>

          <div className="surface-soft p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
              Versículo do Dia
            </p>

            <p className="mt-4 text-lg font-medium leading-8 md:text-xl">
              {verse.text}
            </p>

            <p className="mt-4 text-sm font-semibold opacity-70">
              {verse.reference}
            </p>

            <div className="mt-6">
              <Link
                href="/verse-of-day"
                className="rounded-2xl border bg-white px-4 py-3 text-sm font-medium transition hover:bg-neutral-50"
              >
                Ver devocional
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="card-premium p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
            Bíblia
          </p>
          <h2 className="mt-3 text-xl font-semibold">Leitura e navegação</h2>
          <p className="mt-3 text-sm leading-7 opacity-75">
            Acede aos livros, capítulos e pesquisa bíblica com foco em clareza e estudo.
          </p>
        </article>

        <article className="card-premium p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
            Pesquisa
          </p>
          <h2 className="mt-3 text-xl font-semibold">Busca rápida</h2>
          <p className="mt-3 text-sm leading-7 opacity-75">
            Procura palavras e expressões para encontrar versículos com mais rapidez.
          </p>
        </article>

        <article className="card-premium p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
            Missão
          </p>
          <h2 className="mt-3 text-xl font-semibold">Conteúdo útil</h2>
          <p className="mt-3 text-sm leading-7 opacity-75">
            Recursos pensados para fé, partilha, evangelismo e crescimento espiritual.
          </p>
        </article>
      </section>
    </main>
  );
}
