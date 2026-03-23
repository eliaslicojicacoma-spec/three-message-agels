import Link from "next/link";
import { getArticles } from "@/content/blog/articles";

export default function BlogPage() {
  const articles = getArticles();
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <main className="bg-[#f6f1e8]">
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b08d57]">
            Blog
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-[#151515] md:text-6xl">
            Reflexões, fé e leitura do tempo presente
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#6d675f] md:text-lg">
            Um espaço editorial para pensamento cristão, esperança bíblica e análise
            espiritual da vida contemporânea.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-[2rem] bg-white shadow-[0_10px_35px_rgba(17,17,17,0.05)]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <img
              src="/images/blog/featured-1600x900.jpg"
              alt={featured.title}
              className="h-[340px] w-full object-cover lg:h-full"
            />

            <div className="flex items-center p-6 md:p-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b08d57]">
                  {featured.category}
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-[#151515] md:text-5xl">
                  {featured.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-[#6d675f]">
                  {featured.excerpt}
                </p>

                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#9e9588]">
                  {featured.date}
                </div>

                <Link
                  href={`/blog/${featured.slug}`}
                  className="mt-7 inline-flex rounded-none bg-[#151515] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Ler artigo
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((article, index) => (
            <article
              key={article.slug}
              className="overflow-hidden rounded-[1.6rem] border border-black/5 bg-white shadow-[0_8px_24px_rgba(17,17,17,0.04)]"
            >
              <img
                src={index % 2 === 0 ? "/images/blog/article-1-1200x800.jpg" : "/images/blog/article-2-1200x800.jpg"}
                alt={article.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b08d57]">
                  <span>{article.category}</span>
                  <span className="text-[#9e9588]">{article.date}</span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold leading-[1.2] tracking-[-0.03em] text-[#151515]">
                  {article.title}
                </h3>

                <p className="mt-4 text-sm leading-8 text-[#6d675f]">
                  {article.excerpt}
                </p>

                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-[#151515]"
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
