import Link from "next/link";
import { getArticles } from "@/content/blog/articles";

export default function BlogPage() {
  const articles = getArticles();
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <main className="bg-[var(--tam-bg)] text-[var(--tam-text)]">
      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-[0_14px_40px_rgba(17,17,17,0.05)] backdrop-blur-sm">
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
        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#191919] text-white shadow-[0_18px_50px_rgba(17,17,17,0.12)]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="image-zoom">
              <img
                src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1600&auto=format&fit=crop"
                alt={featured.title}
                className="h-[360px] w-full object-cover lg:h-full"
              />
            </div>

            <div className="flex items-center p-6 md:p-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d7b67d]">
                  {featured.category}
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.04em] md:text-5xl">
                  {featured.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-white/72">
                  {featured.excerpt}
                </p>

                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  {featured.date}
                </div>

                <Link
                  href={`/blog/${featured.slug}`}
                  className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:translate-y-[-2px] hover:opacity-95"
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
              className="overflow-hidden rounded-[1.8rem] border border-black/5 bg-white/78 shadow-[0_14px_40px_rgba(17,17,17,0.06)] backdrop-blur-sm"
            >
              <div className="image-zoom">
                <img
                  src={
                    index % 2 === 0
                      ? "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1200&auto=format&fit=crop"
                      : "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1200&auto=format&fit=crop"
                  }
                  alt={article.title}
                  className="h-56 w-full object-cover"
                />
              </div>

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
