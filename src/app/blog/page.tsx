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
      </section>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <article key={article.slug} className="card-premium overflow-hidden">
            <div className="relative h-48">
              <img
                src={article.image}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <p className="eyebrow-premium">{article.category}</p>

              <h2 className="mt-3 text-xl font-semibold">
                {article.title}
              </h2>

              <p className="mt-3 text-sm text-[var(--tam-muted)]">
                {article.excerpt}
              </p>

              <Link
                href={`/blog/${article.slug}`}
                className="mt-4 inline-block button-premium-light"
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
