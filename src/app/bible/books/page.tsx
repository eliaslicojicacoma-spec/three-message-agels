import { getBibleBooks } from "@/content/bible";

export default function BibleBooksPage() {
  const bibleBooks = getBibleBooks();

  const oldTestament = bibleBooks.filter(
    (book) => book.testament === "old"
  );

  const newTestament = bibleBooks.filter(
    (book) => book.testament === "new"
  );

  return (
    <main className="container-premium py-10">
      <h1 className="text-2xl font-bold mb-6">Livros da Bíblia</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Antigo Testamento</h2>
        <ul className="space-y-2">
          {oldTestament.map((book) => (
            <li key={book.slug}>{book.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Novo Testamento</h2>
        <ul className="space-y-2">
          {newTestament.map((book) => (
            <li key={book.slug}>{book.name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
