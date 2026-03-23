import { notFound } from "next/navigation";
import { getArticle, getArticles } from "@/content/blog/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getArticles().map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return notFound();

  return (
    <main className="bg-[var(--tam-bg)] text-[var(--tam-text)]">
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 overflow-hidden rounded-2xl">
          <img
            src={article.cover}
            alt={article.title}
            className="h-[280px] w-full object-cover md:h-[420px]"
          />
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b08d57]">
          {article.category}
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#151515] md:text-5xl">
          {article.title}
        </h1>

        <p className="mt-3 text-sm text-[#6d675f]">
          {article.date}
        </p>

        <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-white/80 p-6 shadow-[0_14px_40px_rgba(17,17,17,0.06)]">
          <div className="whitespace-pre-line text-base leading-8 text-[#4f4941]">
            {article.content}
          </div>
        </div>
      </section>
    </main>
  );
}
