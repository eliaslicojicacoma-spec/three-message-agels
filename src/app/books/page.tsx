import Link from "next/link";
import { getBooks } from "@/content/books";

export default function BooksPage() {
  const books = getBooks();
  const featured = books.filter((book) => book.featured);
  const rest = books.filter((book) => !book.featured);

  return (
    <main className="bg-[#f6f1e8]">
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b08d57]">
            Biblioteca
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-[#151515] md:text-6xl">
            Literatura cristã para estudo e formação espiritual
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#6d675f] md:text-lg">
            Um acervo digital em crescimento com obras selecionadas para leitura,
            reflexão e aprofundamento bíblico.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((book, index) => (
            <article
              key={book.slug}
              className="overflow-hidden rounded-[1.8rem] bg-[#191919] text-white shadow-[0_10px_30px_rgba(17,17,17,0.08)]"
            >
              <img
                src={index % 2 === 0 ? "/images/books/cover-1200x1600.jpg" : "/images/books/card-900x1200.jpg"}
                alt={book.title}
                className="h-[280px] w-full object-cover"
              />

              <div className="p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d7b67d]">
                  {book.author}
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  {book.title}
                </h2>

                <p className="mt-4 text-sm leading-8 text-white/68">
                  {book.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                  {book.series ? <span>{book.series}</span> : null}
                  {book.year ? <span>{book.year}</span> : null}
                  <span>{book.category}</span>
                </div>

                <Link
                  href={`/books/${book.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-white"
                >
                  Ver obra →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {rest.map((book, index) => (
            <article
              key={book.slug}
              className="overflow-hidden rounded-[1.6rem] border border-black/5 bg-white shadow-[0_8px_24px_rgba(17,17,17,0.04)]"
            >
              <img
                src={index % 2 === 0 ? "/images/books/thumb-600x800.jpg" : "/images/books/card-900x1200.jpg"}
                alt={book.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b08d57]">
                  {book.author}
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-[1.2] tracking-[-0.03em] text-[#151515]">
                  {book.title}
                </h3>

                <p className="mt-4 text-sm leading-8 text-[#6d675f]">
                  {book.description}
                </p>

                <Link
                  href={`/books/${book.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-[#151515]"
                >
                  Ver obra →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
