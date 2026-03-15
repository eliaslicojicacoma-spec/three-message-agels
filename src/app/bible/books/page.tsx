import Link from "next/link";
import { bibleBooks } from "@/content/bible";

export default function BibleBooksPage() {
  const oldTestament = bibleBooks.filter((book) => book.testament === "Old");
  const newTestament = bibleBooks.filter((book) => book.testament === "New");

  const renderBooks = (items: typeof bibleBooks) => (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((book) => (
        <Link
          key={book.slug}
          href={`/bible/${book.slug}/1`}
          className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-5 shadow-sm transition hover:-translate-y-0.5"
        >
          <h3 className="text-lg font-semibold">{book.name}</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            {book.chapters} capítulo{book.chapters > 1 ? "s" : ""}
          </p>
        </Link>
      ))}
    </div>
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-2xl">
        <p className="text-sm text-[var(--muted)]">Navegação bíblica</p>
        <h1 className="mt-2 text-4xl font-bold">Livros da Bíblia</h1>
        <p className="mt-4 text-[var(--muted)]">
          Escolhe um livro para começar a leitura.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold">Antigo Testamento</h2>
        {renderBooks(oldTestament)}
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Novo Testamento</h2>
        {renderBooks(newTestament)}
      </section>
    </main>
  );
}
