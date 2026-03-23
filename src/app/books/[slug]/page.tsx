import { notFound } from "next/navigation";
import Link from "next/link";
import { getBook, getBooks } from "@/content/books";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getBooks().map((book) => ({
    slug: book.slug,
  }));
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = getBook(slug);

  if (!book) return notFound();

  return (
    <main className="bg-[var(--tam-bg)] text-[var(--tam-text)]">
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b08d57]">
              Biblioteca Digital
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[#151515] md:text-5xl">
              {book.title}
            </h1>
            <p className="mt-2 text-sm text-[#6d675f]">
              {book.author} {book.year ? `• ${book.year}` : ""}
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href={book.downloadUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#151515] px-5 text-sm font-semibold text-white"
            >
              Abrir PDF
            </a>

            <Link
              href="/books"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-[#151515]"
            >
              Voltar
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <div className="rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-[0_14px_40px_rgba(17,17,17,0.06)]">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
              alt={book.title}
              className="h-[420px] w-full rounded-[1.25rem] object-cover"
            />

            <div className="mt-5 space-y-2 text-sm text-[#5f584f]">
              <p><strong className="text-[#151515]">Autor:</strong> {book.author}</p>
              <p><strong className="text-[#151515]">Categoria:</strong> {book.category}</p>
              <p><strong className="text-[#151515]">Ano:</strong> {book.year || "Não informado"}</p>
              <p><strong className="text-[#151515]">Série:</strong> {book.series || "Geral"}</p>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-black/5 bg-white p-3 shadow-[0_14px_40px_rgba(17,17,17,0.06)]">
            <div className="overflow-hidden rounded-[1rem] border border-black/5 bg-[#f8f5ef]">
              <iframe
                src={book.downloadUrl}
                title={book.title}
                className="h-[75vh] w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
