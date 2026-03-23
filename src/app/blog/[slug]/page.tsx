import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticle, getArticles } from "@/content/blog/articles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
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
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white/75 shadow-[0_14px_40px_rgba(17,17,17,0.06)] backdrop-blur-sm">
          <img
            src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1600&auto=format&fit=crop"
            alt={article.title}
            className="h-[320px] w-full object-cover md:h-[460px]"
          />

          <div className="mx-auto max-w-4xl px-5 py-8 md:px-10 md:py-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b08d57]">
              {article.category}
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#151515] md:text-6xl">
              {article.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#9e9588]">
              <span>{article.date}</span>
              <span>Leitura devocional</span>
            </div>

            <p className="mt-8 text-lg leading-9 text-[#5f584f] md:text-xl">
              {article.excerpt}
            </p>

            <div className="mt-10 h-px w-full bg-black/8" />

            <article className="prose prose-neutral mt-10 max-w-none">
              <div className="space-y-6 text-[1.02rem] leading-9 text-[#4f4941]">
                <p>{article.content}</p>
                <p>
                  Este conteúdo faz parte de um esforço contínuo para reunir reflexão
                  cristã, profundidade bíblica e aplicação prática para a vida diária.
                </p>
                <p>
                  Ao leres, pensa não apenas na informação, mas na transformação.
                  O objetivo de um portal cristão não é só informar a mente, mas
                  também fortalecer a fé e orientar a caminhada espiritual.
                </p>
              </div>
            </article>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/blog"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#151515] px-6 text-sm font-semibold text-white transition hover:opacity-95"
              >
                Voltar ao blog
              </Link>

              <Link
                href="/studies"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-[#151515] transition hover:bg-[#f9f6f0]"
              >
                Ver estudos bíblicos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
