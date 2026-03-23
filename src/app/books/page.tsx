import Link from "next/link";
import { getBooks } from "@/content/books";

export default function BooksPage() {
  const books = getBooks();

  return (
    <main className="bg-[var(--tam-bg)] text-[var(--tam-text)]">
      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b08d57]">
            Biblioteca
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-[#151515] md:text-6xl">
            Livros para leitura e formação espiritual
          </h1>
          <p className="mt-5 text-base leading-8 text-[#6d675f] md:text-lg">
            Coleção de obras selecionadas para aprofundar a fé, compreensão bíblica e vida cristã.
          </p>
        </div>
      </section>

      {/* GRID PREMIUM */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <Link key={book.slug} href={`/books/${book.slug}`}>
              <article className="group">
                <div className="relative overflow-hidden rounded-[1.6rem] shadow-[0_20px_50px_rgba(17,17,17,0.15)]">
                  
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />

                  {/* título sobre capa */}
                  <div className="absolute bottom-0 p-4">
                    <h2 className="text-lg font-semibold text-white leading-tight">
                      {book.title}
                    </h2>
                    <p className="text-xs text-white/80">{book.author}</p>
                  </div>

                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
