import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticle, getArticles } from "@/content/blog/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return notFound();

  return (
    <main className="bg-[var(--tam-bg)] text-[var(--tam-text)]">
      {/* HERO */}
      <section className="relative">
        <img
          src={article.cover}
          alt={article.title}
          className="h-[52vh] w-full object-cover md:h-[62vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-4xl px-4 pb-10 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
            {article.category}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-2 text-sm text-white/80">{article.date}</p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[1.5rem] border border-black/5 bg-white/85 p-6 shadow-[0_14px_40px_rgba(17,17,17,0.06)]">
          <div className="whitespace-pre-line text-base leading-8 text-[#4f4941]">
            {article.content}
          </div>

          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium text-[#151515]"
            >
              ← Voltar ao blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
