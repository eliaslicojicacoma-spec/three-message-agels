import Link from "next/link";
import { getArticles } from "@/content/blog/articles";

export default function BlogPage() {
  const articles = getArticles();

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Artigos</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link key={article.slug} href={`/blog/${article.slug}`}>
            <article className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
              
              <img
                src={article.cover}
                alt={article.title}
                className="h-[220px] w-full object-cover"
              />

              <div className="p-4">
                <p className="text-sm text-gray-500">{article.category}</p>
                <h2 className="text-lg font-semibold">{article.title}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {article.excerpt}
                </p>
              </div>

            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
