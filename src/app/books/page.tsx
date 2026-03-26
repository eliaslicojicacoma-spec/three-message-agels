import type { Metadata } from "next";
import Link from "next/link";
import { books } from "@/content/books/books";
import OptimizedImage from "@/components/ui/optimized-image";

export const metadata: Metadata = {
  title: "Livros",
  description:
    "Explore livros espirituais fundamentais para o crescimento na fé.",
};

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F8] text-[#333333]">
      <section className="section-wrap py-20 text-center">
        <span className="eyebrow">Biblioteca</span>

        <h1 className="title-display mt-4 text-5xl md:text-7xl">
          Biblioteca Digital
        </h1>

        <p className="copy-muted mx-auto mt-6 max-w-2xl">
          Explore livros espirituais fundamentais para o crescimento na fé.
        </p>
      </section>

      <section className="section-wrap py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {books.map((book) => (
            <div key={book.slug} className="premium-card">
              
              <div className="premium-cover">
                <OptimizedImage
                  src={book.cover}
                  alt={book.title}
                />
              </div>

              <div className="p-6">
                <span className="eyebrow text-xs">
                  {book.category}
                </span>

                <h3 className="mt-2 text-xl font-semibold">
                  {book.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {book.author}
                </p>

                <p className="copy-muted mt-3 line-3">
                  {book.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`/books/${book.slug}`}
                    className="text-sm text-[var(--gold)]"
                  >
                    Ver detalhes →
                  </Link>

                  <a
                    href={book.downloadUrl}
                    target="_blank"
                    className="text-sm text-gray-500"
                  >
                    Baixar PDF
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
