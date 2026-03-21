import Link from "next/link";
import { getArticles } from "@/content/blog/articles";
import SectionHeading from "@/components/ui/section-heading";

export default function BlogPage() {
  const articles = getArticles();

  return (
    <main className="container-premium py-8 md:py-12">
      <section className="card-premium p-6 md:p-10">
        <SectionHeading
          eyebrow="Blog"
          title="Reflexões, estudos e temas atuais"
          description="Conteúdos cristãos para reflexão, crescimento espiritual e compreensão do tempo presente."
        />

        <div className="mt-6 inline-flex rounded-2xl border bg-white/70 px-4 py-3 text-sm text-[var(--tam-muted)]">
          Total disponível:
          <span className="ml-2 font-semibold text-[var(--tam-ink)]">
            {articles.length} artigos
          </span>
        </div>
      </section>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {articles.map((article, index) => (
          <article key={article.slug} className="card-premium overflow-hidden">
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--tam-ink)] shadow-sm">
                #{index + 1}
              </div>
            </div>

            <div className="p-6">
              <p className="eyebrow-premium">{article.category}</p>

              <h2 className="mt-3 text-2xl font-semibold text-[var(--tam-ink)]">
                {article.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-[var(--tam-muted)]">
                {article.excerpt}
              </p>

              <div className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--tam-accent-strong)]">
                {article.date}
              </div>

              <Link
                href={`/blog/${article.slug}`}
                className="mt-5 inline-flex button-premium-light"
              >
                Ler artigo
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
