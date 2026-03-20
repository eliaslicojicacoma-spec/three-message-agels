import Link from "next/link";
import type { Metadata } from "next";
import { getBooks } from "@/content/books";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Livros",
  description: "Explora leituras cristãs e livros recomendados.",
};

export default function BooksPage() {
  const books = getBooks();

  return (
    <main className="container-premium py-8 md:py-12">
      <section className="overflow-hidden rounded-[2rem] border border-[var(--tam-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(239,231,218,0.96))] p-6 shadow-[0_20px_60px_rgba(17,17,17,0.06)] md:p-10">
        <SectionHeading
          eyebrow="Livros"
          title="Leituras recomendadas para crescimento espiritual"
          description="Uma biblioteca em expansão com obras cristãs, reflexões e materiais úteis para estudo e formação."
        />
      </section>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {books.map((book) => (
          <article key={book.slug} className="card-premium overflow-hidden">
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
            </div>

            <div className="p-6">
              <p className="eyebrow-premium">{book.author}</p>

              <h2 className="mt-4 text-xl font-semibold text-[var(--tam-ink)]">
                {book.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-[var(--tam-muted)]">
                {book.description}
              </p>

              <div className="mt-5">
                <Link
                  href={`/books/${book.slug}`}
                  className="button-premium-light inline-flex"
                >
                  Ver livro
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
