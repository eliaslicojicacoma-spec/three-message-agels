import Link from "next/link";
import { getBooks } from "@/content/books";

export default function BooksPage() {
  const books = getBooks();
  const featured = books[0];
  const rest = books.slice(1);

  return (
    <main className="page-shell">
      <section className="section-wrap py-16 md:py-24">
        <div className="glass-card p-8 md:p-10">
          <span className="eyebrow">Biblioteca</span>
          <h1 className="title-display mt-5 text-5xl md:text-7xl">
            Leitura espiritual
            <br /> com presença
          </h1>
          <p className="copy-muted mt-6 max-w-2xl text-lg">
            Uma biblioteca organizada para leitura, formação cristã e acesso a obras
            fundamentais com visual mais limpo, forte e profissional.
          </p>
        </div>
      </section>

      {featured && (
        <section className="section-wrap pb-10">
          <Link href={`/books/${featured.slug}`} className="block">
            <article className="overflow-hidden rounded-[32px] border border-black/5 bg-[#171412] text-white shadow-[0_24px_60px_rgba(17,17,17,0.12)]">
              <div className="grid gap-0 md:grid-cols-[360px_1fr]">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  className="h-[420px] w-full object-cover"
                />
                <div className="flex items-center p-6 md:p-10">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7b67d]">
                      {featured.category || "Biblioteca"}
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-sm text-white/65">
                      {featured.author}
                    </p>
                    <p className="mt-5 max-w-3xl text-[15px] leading-8 text-white/72 md:text-base">
                      {featured.description}
                    </p>
                    <div className="mt-8 inline-flex items-center text-sm font-medium text-white">
                      Ver detalhes
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </section>
      )}

      <section className="section-wrap py-10 md:py-14">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {rest.map((book) => (
            <Link key={book.slug} href={`/books/${book.slug}`} className="group">
              <article className="overflow-hidden rounded-[28px] border border-black/5 bg-white/82 shadow-[0_18px_40px_rgba(17,17,17,0.06)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_rgba(17,17,17,0.10)]">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b08d57]">
                    {book.category || "Livro"}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#151515]">
                    {book.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6d675f]">
                    {book.author}
                  </p>
                  <p className="mt-4 line-clamp-3 text-[15px] leading-8 text-[#6d675f]">
                    {book.description}
                  </p>
                  <div className="mt-6 inline-flex items-center text-sm font-medium text-[#151515] transition group-hover:text-[#9f7438]">
                    Abrir livro
                    <span className="ml-2 transition group-hover:translate-x-1">→</span>
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
