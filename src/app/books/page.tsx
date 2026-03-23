import Link from "next/link";
import { getBooks } from "@/content/books";

export default function BooksPage() {
  const books = getBooks();
  const featured = books.filter((book) => book.featured);
  const rest = books.filter((book) => !book.featured);

  return (
    <main className="bg-[var(--tam-bg)] text-[var(--tam-text)]">
      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-[0_14px_40px_rgba(17,17,17,0.05)] backdrop-blur-sm">
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
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#191919] text-white shadow-[0_18px_50px_rgba(17,17,17,0.12)]"
            >
              <div className="image-zoom">
                <img
                  src={
                    index % 2 === 0
                      ? "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
                      : "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop"
                  }
                  alt={book.title}
                  className="h-[300px] w-full object-cover"
                />
              </div>

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
                  className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:translate-y-[-2px] hover:opacity-95"
                >
                  Ver obra
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
              className="overflow-hidden rounded-[1.8rem] border border-black/5 bg-white/78 shadow-[0_14px_40px_rgba(17,17,17,0.06)] backdrop-blur-sm"
            >
              <div className="image-zoom">
                <img
                  src={
                    index % 2 === 0
                      ? "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=900&auto=format&fit=crop"
                      : "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=900&auto=format&fit=crop"
                  }
                  alt={book.title}
                  className="h-56 w-full object-cover"
                />
              </div>

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
