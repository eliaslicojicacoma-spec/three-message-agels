import Link from "next/link";
import { getBooks } from "@/content/books";

type Book = {
  id: string;
  slug: string;
  title: string;
  author: string;
  description: string;
  category: string;
  year?: string;
  series?: string;
  downloadUrl: string;
  featured?: boolean;
};

export default function BooksPage() {
  const books: Book[] = getBooks();

  const featured = books.filter((book: Book) => book.featured);
  const rest = books.filter((book: Book) => !book.featured);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Livros</h1>

      <div className="grid gap-4">
        {books.map((book) => (
          <Link
            key={book.slug}
            href={`/books/${book.slug}`}
            className="p-4 border rounded-lg"
          >
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-500">{book.author}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
