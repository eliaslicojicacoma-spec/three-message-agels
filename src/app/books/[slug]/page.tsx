import { notFound } from "next/navigation";
import Link from "next/link";
import { getBook, getBooks } from "@/content/books";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBooks().map((b) => ({ slug: b.slug }));
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return notFound();

  return (
    <main className="bg-[var(--tam-bg)] text-[var(--tam-text)]">
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[360px_1fr]">

          {/* capa */}
          <div>
            <img
              src={book.cover}
              alt={book.title}
              className="w-full rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            />
          </div>

          {/* info */}
          <div>
            <h1 className="text-4xl font-semibold">{book.title}</h1>
            <p className="mt-2 text-[#6d675f]">{book.author}</p>

            <p className="mt-6 text-lg leading-8 text-[#5f584f]">
              {book.description}
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href={book.downloadUrl}
                target="_blank"
                className="rounded-full bg-black px-6 py-3 text-white"
              >
                Ler livro
              </a>

              <Link
                href="/books"
                className="rounded-full border px-6 py-3"
              >
                Voltar
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
