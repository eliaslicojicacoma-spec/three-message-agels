import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";
import { getDailyVerse } from "@/services/related-content/verse-of-day";
import { getArticles } from "@/content/blog/articles";
import { getBooks } from "@/content/books";

export default function HomePage() {
  const verse = getDailyVerse();
  const articles = getArticles().slice(0, 2);
  const books = getBooks().slice(0, 3);

  return (
    <main className="pb-24 lg:pb-0">
      <section className="relative overflow-hidden border-b border-[var(--tam-line)]">
        <div
          className="relative min-h-[78vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(14,16,20,0.18) 0%, rgba(14,16,20,0.30) 35%, rgba(14,16,20,0.46) 100%), url('/images/content/bible.svg')",
          }}
        >
          <div className="container-premium flex min-h-[78vh] items-end py-10 md:py-14">
            <div className="max-w-4xl rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.08)] p-6 backdrop-blur-[2px] md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#d6b17a]">
                Editorial Cristão Premium
              </p>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                Iluminando a fé em um mundo moderno
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-[1.45rem]">
                Reflexões profundas sobre teologia, cultura, esperança e experiência
                cristã numa linguagem viva, bela e relevante.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/blog"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold tracking-[0.16em] text-[var(--tam-ink)] transition hover:opacity-90"
                >
                  EXPLORAR →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-premium py-12 md:py-16">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="card-premium rounded-[2rem] p-8">
            <div className="text-4xl text-[var(--tam-accent-strong)]">◔</div>
            <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] text-[var(--tam-ink)]">
              Sociedade
            </h2>
            <p className="mt-4 max-w-xs text-lg leading-8 text-[var(--tam-muted)]">
              Fé na praça pública, pensamento cristão e leitura do tempo presente.
            </p>
            <Link
              href="/blog"
              className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[var(--tam-ink)]"
            >
              Ver mais →
            </Link>
          </article>

          <article className="card-premium rounded-[2rem] p-8">
            <div className="text-4xl text-[var(--tam-accent-strong)]">⌘</div>
            <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] text-[var(--tam-ink)]">
              Biblioteca
            </h2>
            <p className="mt-4 max-w-xs text-lg leading-8 text-[var(--tam-muted)]">
              Literatura cristã selecionada, organizada para estudo, leitura e missão.
            </p>
            <Link
              href="/books"
              className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[var(--tam-ink)]"
            >
              Ver mais →
            </Link>
          </article>

          <article className="card-premium rounded-[2rem] p-8">
            <div className="text-4xl text-[var(--tam-accent-strong)]">◌</div>
            <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] text-[var(--tam-ink)]">
              Global
            </h2>
            <p className="mt-4 max-w-xs text-lg leading-8 text-[var(--tam-muted)]">
              Uma visão cristã do mundo, da cultura e das grandes questões humanas.
            </p>
            <Link
              href="/studies"
              className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[var(--tam-ink)]"
            >
              Ver mais →
            </Link>
          </article>
        </div>
      </section>

      <section className="container-premium pb-12 md:pb-16">
        <div className="overflow-hidden rounded-[2.3rem] bg-[linear-gradient(180deg,#161613,#101010)] px-6 py-10 text-white md:px-10 md:py-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#d6b17a]">
            Versículo do Dia
          </p>

          <p className="mx-auto mt-8 max-w-5xl text-center text-3xl italic leading-[1.35] tracking-[-0.04em] text-white/94 md:text-6xl">
            "{verse.text}"
          </p>

          <p className="mt-8 text-center text-sm uppercase tracking-[0.18em] text-white/65">
            {verse.reference}
          </p>
        </div>
      </section>

      <section className="container-premium pb-12 md:pb-16">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Editorial"
            title="Artigos em Destaque"
            description="Leituras com profundidade espiritual e relevância para o tempo presente."
          />

          <Link
            href="/blog"
            className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-[var(--tam-ink)] md:inline-flex"
          >
            Ver todos
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <article key={article.slug} className="overflow-hidden">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-[300px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--tam-accent-strong)]">
                  <span className="rounded-full bg-[#ede7da] px-3 py-1 text-[var(--tam-ink)]">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                </div>

                <h2 className="mt-5 text-3xl font-medium leading-[1.25] tracking-[-0.04em] text-[var(--tam-ink)]">
                  {article.title}
                </h2>

                <p className="mt-4 max-w-xl text-lg leading-8 text-[var(--tam-muted)]">
                  {article.excerpt}
                </p>

                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[var(--tam-ink)]"
                >
                  Ler artigo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-premium pb-16">
        <SectionHeading
          eyebrow="Biblioteca"
          title="Livros em Destaque"
          description="Uma seleção inicial da biblioteca para leitura espiritual e formação cristã."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {books.map((book) => (
            <article key={book.slug} className="card-premium overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="p-6">
                <p className="eyebrow-premium">{book.author}</p>
                <h3 className="mt-4 text-xl font-semibold text-[var(--tam-ink)]">
                  {book.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--tam-muted)]">
                  {book.description}
                </p>
                <Link
                  href={`/books/${book.slug}`}
                  className="mt-5 inline-flex button-premium-light"
                >
                  Ver livro
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
