import Link from "next/link";
import { getArticles } from "@/content/blog/articles";
import { getBooks } from "@/content/books";
import { getDailyVerse } from "@/services/related-content/verse-of-day";

export default function HomePage() {
  const articles = getArticles();
  const main = articles[0];
  const secondary = articles.slice(1, 4);
  const books = getBooks().slice(0, 3);
  const verse = getDailyVerse();

  return (
    <main>

      {/* HERO FORTE */}
      <section
        className="relative min-h-[85vh] flex items-end"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('/images/content/bible.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-premium pb-16">
          <h1 className="max-w-4xl text-5xl md:text-7xl font-semibold leading-[0.95] text-white tracking-[-0.04em]">
            Um portal cristão para compreender o mundo e viver a fé
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-8">
            Bíblia, estudos, reflexões e livros organizados para formar pensamento,
            fortalecer a fé e iluminar a vida diária.
          </p>

          <Link
            href="/blog"
            className="mt-8 inline-block bg-white text-black px-6 py-3 text-sm font-semibold tracking-[0.12em]"
          >
            EXPLORAR →
          </Link>
        </div>
      </section>

      {/* DESTAQUE PRINCIPAL */}
      <section className="container-premium py-16">
        <div className="grid lg:grid-cols-2 gap-10">

          <div>
            <img
              src={main.image}
              className="w-full h-[420px] object-cover"
            />

            <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
              {main.title}
            </h2>

            <p className="mt-4 text-lg text-[var(--tam-muted)] leading-8">
              {main.excerpt}
            </p>

            <Link
              href={`/blog/${main.slug}`}
              className="mt-6 inline-block text-sm font-semibold uppercase"
            >
              Ler artigo →
            </Link>
          </div>

          <div className="grid gap-6">
            {secondary.map((a) => (
              <article key={a.slug} className="flex gap-4">
                <img
                  src={a.image}
                  className="w-32 h-28 object-cover"
                />

                <div>
                  <h3 className="text-lg font-semibold">
                    {a.title}
                  </h3>

                  <p className="text-sm text-[var(--tam-muted)] mt-2">
                    {a.excerpt}
                  </p>

                  <Link
                    href={`/blog/${a.slug}`}
                    className="text-xs uppercase mt-2 inline-block"
                  >
                    Ler →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO ESCURO (VERSÍCULO) */}
      <section className="bg-black text-white py-20">
        <div className="container-premium text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-white/60">
            Versículo do Dia
          </p>

          <p className="mt-6 text-3xl md:text-5xl italic leading-[1.4]">
            "{verse.text}"
          </p>

          <p className="mt-6 text-sm text-white/60">
            {verse.reference}
          </p>
        </div>
      </section>

      {/* LIVROS */}
      <section className="container-premium py-16">
        <h2 className="text-3xl font-semibold tracking-[-0.03em]">
          Biblioteca
        </h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {books.map((b) => (
            <article key={b.slug}>
              <img
                src={b.image}
                className="w-full h-56 object-cover"
              />

              <h3 className="mt-4 text-xl font-semibold">
                {b.title}
              </h3>

              <p className="text-sm text-[var(--tam-muted)] mt-2">
                {b.description}
              </p>

              <Link
                href={`/books/${b.slug}`}
                className="text-sm uppercase mt-3 inline-block"
              >
                Ver livro →
              </Link>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
