import { books } from "@/content/books/books";
import Link from "next/link";

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F8] text-[#333333]">

      {/* HEADER */}
      <section className="section-wrap py-20 text-center">
        <span className="eyebrow">Biblioteca</span>

        <h1 className="title-display text-5xl md:text-7xl mt-4">
          Biblioteca Digital
        </h1>

        <p className="copy-muted max-w-2xl mx-auto mt-6">
          Explore livros espirituais fundamentais para o crescimento na fé,
          compreensão profética e aprofundamento bíblico.
        </p>
      </section>

      {/* GRID */}
      <section className="section-wrap py-16">
        <div className="grid md:grid-cols-3 gap-8">

          {books.map((book) => (
            <div key={book.slug} className="premium-card">

              <img
                src={book.cover}
                alt={book.title}
                className="premium-cover"
              />

              <div className="p-6">
                <span className="eyebrow text-xs">
                  {book.category}
                </span>

                <h3 className="text-xl font-semibold mt-2">
                  {book.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {book.author}
                </p>

                <p className="copy-muted mt-3 line-3">
                  {book.description}
                </p>

                <div className="flex gap-3 mt-5 flex-wrap">

                  <Link
                    href={`/books/${book.slug}`}
                    className="text-sm text-[var(--gold)]"
                  >
                    Ver detalhes →
                  </Link>

                  <a
                    href={book.downloadUrl}
                    target="_blank"
                    className="text-sm text-gray-500 hover:text-black"
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
