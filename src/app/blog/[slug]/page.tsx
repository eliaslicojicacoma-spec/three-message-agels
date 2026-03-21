import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle, getArticles } from "@/content/blog/articles";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="container-premium py-8 md:py-12">
      <article className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--tam-line)] bg-white/80 shadow-[0_20px_60px_rgba(17,17,17,0.06)]">
          <div className="relative h-64 md:h-80">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>

          <div className="p-6 md:p-10">
            <p className="eyebrow-premium">{article.category}</p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[var(--tam-ink)] md:text-5xl">
              {article.title}
            </h1>

            <p className="mt-4 text-sm text-[var(--tam-muted)]">
              {article.date}
            </p>

            <p className="mt-6 text-lg leading-9 text-[var(--tam-ink)]">
              {article.content}
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
