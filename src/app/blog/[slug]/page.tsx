import Link from "next/link";
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
    <main className="min-h-screen bg-[#f6f1e8]">
      <div className="w-full py-12 md:py-16">
        <div className="mx-auto max-w-[100rem] px-8 md:px-16">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-base text-[#6d675f] hover:text-[#b88a4a]"
          >
            ← Voltar aos Artigos
          </Link>

          <article className="mx-auto max-w-4xl">
            <div className="mb-8">
              {article.category && (
                <span className="mb-6 inline-block bg-[#b88a4a] px-4 py-2 text-sm text-black">
                  {article.category}
                </span>
              )}

              <h1 className="mb-6 text-4xl text-[#171411] md:text-5xl">
                {article.title}
              </h1>

              {article.excerpt && (
                <p className="mb-6 text-xl text-[#6d675f]">
                  {article.excerpt}
                </p>
              )}
            </div>

            {article.cover && (
              <div className="mb-12 aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src={article.cover}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="rounded-lg bg-white p-8 md:p-12 shadow-sm">
              <div className="whitespace-pre-wrap text-[#171411] leading-relaxed">
                {article.content}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/blog" className="text-[#b88a4a]">
                ← Ver mais artigos
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
