import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";
import { getArticles } from "@/content/blog/articles";

export default function HomePage() {
  const articles = getArticles();
  const main = articles[0];
  const side = articles.slice(1, 3);

  return (
    <main className="container-premium py-8 md:py-12">

      {/* BLOG DESTAQUE */}
      <section className="reveal-soft">
        <SectionHeading
          eyebrow="Blog"
          title="Destaques do Portal"
          description="Conteúdos selecionados para reflexão e crescimento espiritual."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">

          {/* ARTIGO PRINCIPAL */}
          <article className="lg:col-span-2 card-premium overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img
                src={main.image}
                alt={main.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="p-6 md:p-8">
              <p className="eyebrow-premium text-[var(--tam-accent-strong)]">
                {main.category}
              </p>

              <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-[var(--tam-ink)]">
                {main.title}
              </h2>

              <p className="mt-4 text-[var(--tam-muted)] leading-7">
                {main.excerpt}
              </p>

              <Link
                href={`/blog/${main.slug}`}
                className="mt-6 inline-flex button-premium-light"
              >
                Ler artigo
              </Link>
            </div>
          </article>

          {/* ARTIGOS LATERAIS */}
          <div className="flex flex-col gap-4">
            {side.map((article) => (
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

                  <h3 className="mt-2 text-sm font-semibold">
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
          <Link href="/blog" className="button-premium-light">
            Ver todos os artigos
          </Link>
        </div>
      </section>

    </main>
  );
}
