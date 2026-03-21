import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";
import { getDailyVerse } from "@/services/related-content/verse-of-day";
import { getStudies } from "@/content/studies";
import { getBooks } from "@/content/books";
import { getArticles } from "@/content/blog/articles";

export default function HomePage() {
  const verse = getDailyVerse();
  const studies = getStudies().slice(0, 3);
  const books = getBooks().slice(0, 3);
  const articles = getArticles();
  const mainArticle = articles[0];
  const sideArticles = articles.slice(1, 3);

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
                Um portal cristão para verdade bíblica, reflexão e esperança
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
                Bíblia, blog, estudos, livros e recursos cristãos organizados
                numa experiência moderna, reverente e viva.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/blog" className="button-premium-dark">
                  Explorar blog
                </Link>

                <Link
                  href="/studies"
                  className="rounded-2xl border border-white/20 bg-white/12 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/18"
                >
                  Ver estudos
                </Link>

                <Link
                  href="/bible"
                  className="rounded-2xl border border-white/20 bg-white/12 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/18"
                >
                  Abrir Bíblia
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
          eyebrow="Blog"
          title="Destaques do Portal"
          description="Conteúdos selecionados para reflexão, compreensão do tempo presente e crescimento espiritual."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="lg:col-span-2 card-premium overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img
                src={mainArticle.image}
                alt={mainArticle.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="p-6 md:p-8">
              <p className="eyebrow-premium">{mainArticle.category}</p>

              <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-[var(--tam-ink)]">
                {mainArticle.title}
              </h2>

              <p className="mt-4 text-[var(--tam-muted)] leading-7">
                {mainArticle.excerpt}
              </p>

              <div className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--tam-accent-strong)]">
                {mainArticle.date}
              </div>

              <Link
                href={`/blog/${mainArticle.slug}`}
                className="mt-6 inline-flex button-premium-light"
              >
                Ler artigo
              </Link>
            </div>
          </article>

          <div className="flex flex-col gap-4">
            {sideArticles.map((article) => (
              <article key={article.slug} className="card-premium overflow-hidden">
                <div className="relative h-32">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <p className="text-xs uppercase text-[var(--tam-accent-strong)]">
                    {article.category}
                  </p>

                  <h3 className="mt-2 text-sm font-semibold text-[var(--tam-ink)]">
                    {article.title}
                  </h3>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-3 inline-block text-xs text-[var(--tam-accent-strong)]"
                  >
                    Ler →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Link href="/blog" className="button-premium-light inline-flex">
            Ver todos os artigos
          </Link>
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
            <article key={book.slug} className="card-premium overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
              </div>

              <div className="p-6">
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
              </div>
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
            Continua a leitura, aprofunda a fé e acompanha este portal cristão
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-white/75 md:text-base">
            Este portal foi construído para unir reflexão, Bíblia, estudos,
            livros e conteúdo cristão relevante numa experiência rica e útil.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="rounded-2xl border border-white/10 bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Explorar blog
            </Link>

            <Link
              href="/support"
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Apoiar a missão
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
