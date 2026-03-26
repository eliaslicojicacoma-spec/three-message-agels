import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle } from "@/content/blog/articles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "Artigo não encontrado",
      description: "O artigo solicitado não foi encontrado.",
    };
  }

  const title = article.title;
  const description = article.excerpt;
  const image = article.cover || "/preview.webp";
  const url = `/blog/${article.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: image,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-heading">{article.title}</h1>

      {article.date && (
        <p className="mb-6 text-sm text-gray-500">{article.date}</p>
      )}

      <div
        className="prose max-w-none font-paragraph"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}
