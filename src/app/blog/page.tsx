import Link from "next/link";
import { getArticles } from "@/content/blog/articles";

const articles = getArticles();

function formatDate(date?: string) {
  if (!date) return "Recente";
  try {
    return new Date(date).toLocaleDateString("pt-BR");
  } catch {
    return "Recente";
  }
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F8] text-[#333333]">
      <section className="section-wrap py-20 text-center">
        <span className="eyebrow">Artigos</span>

        <h1 className="title-display mt-4 text-5xl md:text-7xl">
          Fé e Sociedade
        </h1>

        <p className="copy-muted mx-auto mt-6 max-w-2xl">
          Reflexões, estudos e análises bíblicas para fortalecer a fé,
          compreender os tempos e viver com esperança.
        </p>
      </section>

      <section className="section-wrap py-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="group flex h-full flex-col">
              <Link
                href={`/blog/${article.slug}`}
                className="mb-6 block overflow-hidden rounded-[24px]"
              >
                <div className="premium-card border border-black/5 bg-white">
                  <img
                    src={article.cover}
                    alt={article.title}
                    className="premium-cover"
                  />
                </div>
              </Link>

              <div className="flex flex-grow flex-col">
                <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="eyebrow text-xs">
                    {article.category}
                  </span>

                  <span className="text-xs text-gray-400">
                    {formatDate(article.date)}
                  </span>
                </div>

                <h2
                  className="mt-1 text-3xl leading-tight text-[#222222] transition-colors group-hover:text-[var(--gold)]"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="copy-muted mt-4 line-3 flex-grow">
                  {article.excerpt}
                </p>

                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-6 inline-flex items-center text-sm text-[var(--gold)] hover:opacity-80"
                >
                  Ler artigo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
