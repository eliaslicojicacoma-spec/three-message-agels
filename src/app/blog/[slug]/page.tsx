import { notFound } from 'next/navigation'
import { getArticle } from '@/content/blog/articles'

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const article = getArticle(slug)

  if (!article) return notFound()

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-heading mb-4">
        {article.title}
      </h1>

      {(article as any).publishDate && (
        <p className="text-sm text-gray-500 mb-6">
          {(article as any).publishDate}
        </p>
      )}

      <div
        className="prose max-w-none font-paragraph"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  )
}
