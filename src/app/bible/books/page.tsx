import Link from "next/link";
import { bibleBooks } from "@/content/bible";
import { getBibleLoadedBookSlugs } from "@/lib/bible";

export default function BibleBooksPage() {
  const loadedSlugs = new Set(getBibleLoadedBookSlugs());

  const oldTestament = bibleBooks.filter((book) => book.testament === "Old");
  const newTestament = bibleBooks.filter((book) => book.testament === "New");

  const renderBooks = (items: typeof bibleBooks) => (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((book) => {
        const isLoaded = loadedSlugs.has(book.slug);

        return (
          <Link
            key={book.slug}
            href={`/bible/${book.slug}`}
            className="card-clean p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">{book.name}</h3>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  isLoaded
                    ? "bg-[var(--surface-soft)] text-[var(--primary)]"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {isLoaded ? "Carregado" : "Preparação"}
              </span>
            </div>

            <p className="mt-3 text-sm text-[var(--text-soft)]">
              {book.chapters} capítulo{book.chapters > 1 ? "s" : ""}
            </p>
          </Link>
        );
      })}
    </div>
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow-clean">Navegação bíblica</p>
          <h1 className="section-title mt-5">Livros da Bíblia</h1>
          <p className="mt-5 text-base leading-8 text-[var(--text-soft)]">
            Escolhe um livro para começar a leitura. Os livros marcados como
            <strong> Carregado</strong> já têm capítulos ligados à nova base.
          </p>
        </div>
      </section>

      <section className="mt-12">
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
