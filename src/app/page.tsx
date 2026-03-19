import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";
import { getDailyVerse } from "@/services/related-content/verse-of-day";
import { getStudies } from "@/content/studies";
import { getBooks } from "@/content/books";
import { getQuotes } from "@/content/quotes";

export default function HomePage() {
  const verse = getDailyVerse();
  const studies = getStudies().slice(0, 3);
  const books = getBooks().slice(0, 3);
  const quotes = getQuotes().slice(0, 2);

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

              <Link
                href="/bible/verse-favorites"
                className="rounded-2xl border bg-white px-5 py-3 text-sm font-medium transition hover:bg-neutral-50"
              >
                Favoritos
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

      <section className="mt-12">
        <SectionHeading
          eyebrow="Estudos"
          title="Estudos em destaque"
          description="Conteúdos organizados para aprofundar a fé, a doutrina e a compreensão profética."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {studies.map((study) => (
            <article key={study.slug} className="card-premium p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
                {study.category}
              </p>

              <h2 className="mt-3 text-xl font-semibold">
                {study.title}
              </h2>

              <p className="mt-3 text-sm leading-7 opacity-75">
                {study.description}
              </p>

              <div className="mt-5">
                <Link
                  href={`/studies/${study.slug}`}
                  className="rounded-2xl border bg-white px-4 py-3 text-sm font-medium transition hover:bg-neutral-50"
                >
                  Ler estudo
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading
          eyebrow="Livros"
          title="Leituras recomendadas"
          description="Obras cristãs úteis para crescimento espiritual, estudo e meditação."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {books.map((book) => (
            <article key={book.slug} className="card-premium p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
                {book.author}
              </p>

              <h2 className="mt-3 text-xl font-semibold">
                {book.title}
              </h2>

              <p className="mt-3 text-sm leading-7 opacity-75">
                {book.description}
              </p>

              <div className="mt-5">
                <Link
                  href={`/books/${book.slug}`}
                  className="rounded-2xl border bg-white px-4 py-3 text-sm font-medium transition hover:bg-neutral-50"
                >
                  Ver livro
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading
          eyebrow="Citações"
          title="Palavras para reflexão"
          description="Trechos bíblicos e frases curtas para meditação e inspiração."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {quotes.map((quote, index) => (
            <article key={`${quote.author}-${index}`} className="card-premium p-6">
              <p className="text-lg leading-8">“{quote.text}”</p>
              <p className="mt-4 text-sm font-semibold opacity-70">
                {quote.author}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
