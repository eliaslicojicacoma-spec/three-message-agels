import { notFound } from "next/navigation";
import Link from "next/link";
import { getBook, getBooks } from "@/content/books";

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

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getBooks().map((book: Book) => ({
    slug: book.slug,
  }));
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = getBook(slug);

  if (!book) return notFound();

  return (
    <main className="bg-[var(--tam-bg)] text-[var(--tam-text)]">
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-xl">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="mt-2 text-gray-600">{book.author}</p>

          <p className="mt-6">{book.description}</p>

          <a
            href={book.downloadUrl}
            className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full"
          >
            Baixar PDF
          </a>

          <div className="mt-4">
            <Link href="/books">Voltar</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
