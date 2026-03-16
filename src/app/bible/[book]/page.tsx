import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAvailableBibleChapters,
  getBibleBookMeta,
  getPreviousAndNextBibleBooks,
} from "@/lib/bible";

type PageProps = {
  params: Promise<{
    book: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { book } = await params;
  const currentBook = getBibleBookMeta(book);

  if (!currentBook) {
    return {
      title: "Livro não encontrado",
      description: "O livro bíblico solicitado não foi encontrado.",
    };
  }

  return {
    title: currentBook.name,
    description: `Escolhe um capítulo de ${currentBook.name} para começar a leitura bíblica.`,
  };
}

export default async function BibleBookPage({ params }: PageProps) {
  const { book } = await params;
  const currentBook = getBibleBookMeta(book);

  if (!currentBook) {
    notFound();
  }

  const availableChapters = getAvailableBibleChapters(book);
  const { previousBook, nextBook } = getPreviousAndNextBibleBooks(book);

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow-clean">Livro bíblico</p>
          <h1 className="section-title mt-5">{currentBook.name}</h1>
          <p className="mt-5 text-base leading-8 text-[var(--text-soft)]">
            Escolhe um capítulo para começar a leitura.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {previousBook && (
            <Link href={`/bible/${previousBook.slug}`} className="button-ghost">
              ← {previousBook.name}
            </Link>
          )}

          {nextBook && (
            <Link href={`/bible/${nextBook.slug}`} className="button-ghost">
              {nextBook.name} →
            </Link>
          )}
        </div>
      </section>

      <section className="mt-10">
        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {availableChapters.map((chapterNumber) => (
            <Link
              key={chapterNumber}
              href={`/bible/${book}/${chapterNumber}`}
              className="card-clean p-4 text-center font-semibold"
            >
              {chapterNumber}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <Link href="/bible/books" className="button-ghost">
          Voltar aos livros
        </Link>
      </section>
    </main>
  );
}
