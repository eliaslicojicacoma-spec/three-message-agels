import Link from "next/link";
import { getArticles } from "@/content/blog/articles";

export default function BlogPage() {
  const articles = getArticles();
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <main className="page-shell">
      <section className="section-wrap py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <span className="eyebrow">Blog</span>
            <h1 className="title-display mt-6 text-5xl md:text-7xl">
              Fé, análise
              <br /> e reflexão
            </h1>
            <p className="copy-muted mt-6 max-w-2xl text-lg">
              Um espaço editorial para pensamento cristão, esperança bíblica e
              leitura do tempo presente com mais clareza visual e melhor organização.
            </p>
          </div>

          <div className="glass-card p-3">
            <img
              src="/images/blog/cover-5.jpg"
              alt="Blog hero"
              className="h-[360px] w-full rounded-[28px] object-cover"
            />
          </div>
        </div>
      </section>

      {featured && (
        <section className="section-wrap pb-10">
          <Link href={`/blog/${featured.slug}`} className="block">
            <article className="overflow-hidden rounded-[32px] border border-black/5 bg-[#171412] text-white shadow-[0_24px_60px_rgba(17,17,17,0.12)]">
              <img
                src={featured.cover}
                alt={featured.title}
                className="h-[320px] w-full object-cover md:h-[420px]"
              />
              <div className="p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7b67d]">
                  {featured.category}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-3xl text-[15px] leading-8 text-white/72 md:text-base">
                  {featured.excerpt}
                </p>
              </div>
            </article>
          </Link>
        </section>
      )}

      <section className="section-wrap py-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
              <article className="premium-card">
                <img
                  src={article.cover}
                  alt={article.title}
                  className="premium-cover"
                />
                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b08a4a]">
                    {article.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#151515]">
                    {article.title}
                  </h3>
                  <p className="mt-4 line-3 text-[15px] leading-8 text-[#6d675f]">
                    {article.excerpt}
                  </p>
                  <div className="mt-6 inline-flex items-center text-sm font-medium text-[#151515] transition group-hover:text-[#9f7438]">
                    Ler artigo
                    <span className="ml-2 transition group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
