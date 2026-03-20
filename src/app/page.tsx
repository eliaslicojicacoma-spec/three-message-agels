import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";
import { getDailyVerse } from "@/services/related-content/verse-of-day";
import { getStudies } from "@/content/studies";
import { getBooks } from "@/content/books";
import { getQuotes } from "@/content/quotes";
import { getFeaturedTestimonies } from "@/data/testimonies-highlight";

export default function HomePage() {
  const verse = getDailyVerse();
  const studies = getStudies().slice(0, 3);
  const books = getBooks().slice(0, 3);
  const quotes = getQuotes().slice(0, 2);
  const testimonies = getFeaturedTestimonies().slice(0, 2);

  return (
    <main className="container-premium py-8 md:py-12">
      <section className="overflow-hidden rounded-[2rem] border border-[var(--tam-line)] shadow-[0_20px_60px_rgba(17,17,17,0.10)] reveal-soft">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div
            className="relative px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(15,17,21,0.62), rgba(15,17,21,0.38)), url('/images/banners/hero-sunrise.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e2c18f]">
                Three Angels Message
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
                Uma plataforma missionária digital para proclamar a verdade bíblica
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
                Bíblia, pesquisa, estudos, livros e recursos cristãos organizados
                numa experiência moderna, reverente e centrada na Palavra de Deus.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/bible" className="button-premium-dark">
                  Abrir Bíblia
                </Link>

                <Link
                  href="/bible/search"
                  className="rounded-2xl border border-white/20 bg-white/12 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/18"
                >
                  Pesquisar
                </Link>

                <Link
                  href="/bible/verse-favorites"
                  className="rounded-2xl border border-white/20 bg-white/12 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/18"
                >
                  Favoritos
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--tam-line)] bg-[rgba(255,255,255,0.48)] p-6 md:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="surface-soft h-full p-6 md:p-8">
              <p className="eyebrow-premium">{verse.reference}</p>

              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[var(--tam-ink)] md:text-3xl">
                Versículo do dia
              </h2>

              <p className="mt-5 text-lg leading-9 text-[var(--tam-ink)] md:text-[1.35rem]">
                {verse.text}
              </p>

              <div className="mt-8">
                <Link href="/verse-of-day" className="button-premium-light">
                  Ver devocional
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 reveal-soft">
        <SectionHeading
          eyebrow="Estudos"
          title="Estudos em destaque"
          description="Conteúdos organizados para aprofundar a fé, a doutrina e a compreensão profética."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {studies.map((study) => (
            <article key={study.slug} className="card-premium overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
              </div>

              <div className="p-6">
                <p className="eyebrow-premium">{study.category}</p>

                <h2 className="mt-4 text-xl font-semibold text-[var(--tam-ink)]">
                  {study.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-[var(--tam-muted)]">
                  {study.description}
                </p>

                <div className="mt-5">
                  <Link
                    href={`/studies/${study.slug}`}
                    className="button-premium-light inline-flex"
                  >
                    Ler estudo
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 reveal-soft">
        <SectionHeading
          eyebrow="Livros"
          title="Leituras recomendadas"
          description="Obras cristãs úteis para crescimento espiritual, estudo e meditação."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {books.map((book) => (
            <article key={book.slug} className="card-premium p-6">
              <p className="eyebrow-premium">{book.author}</p>

              <h2 className="mt-4 text-xl font-semibold text-[var(--tam-ink)]">
                {book.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-[var(--tam-muted)]">
                {book.description}
              </p>

              <div className="mt-5">
                <Link
                  href={`/books/${book.slug}`}
                  className="button-premium-light inline-flex"
                >
                  Ver livro
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 reveal-soft">
        <SectionHeading
          eyebrow="Testemunhos"
          title="Impacto da experiência"
          description="Como uma experiência bíblica organizada pode ajudar no estudo, leitura e vida devocional."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {testimonies.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="card-premium p-6 md:p-8"
            >
              <p className="text-lg leading-8 text-[var(--tam-ink)]">
                “{item.excerpt}”
              </p>

              <p className="mt-5 text-sm font-semibold text-[var(--tam-ink)]">
                {item.name}
              </p>

              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--tam-accent-strong)]">
                {item.role}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 reveal-soft">
        <SectionHeading
          eyebrow="Citações"
          title="Palavras para reflexão"
          description="Trechos bíblicos e frases curtas para meditação e inspiração."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {quotes.map((quote, index) => (
            <article
              key={`${quote.author}-${index}`}
              className="card-premium p-6 md:p-8"
            >
              <p className="text-xl leading-9 text-[var(--tam-ink)] md:text-2xl md:leading-[1.7]">
                “{quote.text}”
              </p>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--tam-accent-strong)]">
                {quote.author}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 reveal-soft">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--tam-line)] bg-[linear-gradient(135deg,rgba(17,17,17,0.96),rgba(40,35,28,0.96))] px-6 py-10 text-white shadow-[0_20px_60px_rgba(17,17,17,0.18)] md:px-10 md:py-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--tam-accent)]">
            Missão & Ação
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
            Continua a leitura, aprofunda a fé e apoia esta missão digital
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-white/75 md:text-base">
            Este projeto foi construído para organizar Bíblia, estudos, livros
            e recursos cristãos com clareza, reverência e acesso moderno.
            Cada visita, partilha e apoio ajuda esta missão a crescer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/support"
              className="rounded-2xl border border-white/10 bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Apoiar a missão
            </Link>

            <Link
              href="/studies"
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Explorar estudos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
