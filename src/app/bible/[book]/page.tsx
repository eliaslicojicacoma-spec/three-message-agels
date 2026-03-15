import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bibleBooks } from "@/content/bible";

type PageProps = {
  params: Promise<{
    book: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { book } = await params;
  const currentBook = bibleBooks.find((item) => item.slug === book);

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

  const currentBook = bibleBooks.find((item) => item.slug === book);

  if (!currentBook) {
    notFound();
  }

  const jsonPath = path.join(process.cwd(), "public/bible", `${book}.json`);
  const hasJson = fs.existsSync(jsonPath);

  let availableChapters: number[] = [];

  if (hasJson) {
    const file = fs.readFileSync(jsonPath, "utf8");
    const data = JSON.parse(file);
    availableChapters = data.chapters.map((chapter: { chapter: number }) => chapter.chapter);
  } else {
    availableChapters = Array.from({ length: currentBook.chapters }, (_, i) => i + 1);
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="max-w-3xl">
        <p className="text-sm text-[var(--muted)]">Livro bíblico</p>
        <h1 className="mt-2 text-4xl font-bold">{currentBook.name}</h1>
        <p className="mt-4 text-[var(--muted)]">
          Escolhe um capítulo para começar a leitura.
        </p>
      </section>

      <section className="mt-10">
        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {availableChapters.map((chapterNumber) => (
            <Link
              key={chapterNumber}
              href={`/bible/${book}/${chapterNumber}`}
              className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-4 text-center shadow-sm transition hover:-translate-y-0.5"
            >
              <span className="text-lg font-semibold">{chapterNumber}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <Link
          href="/bible/books"
          className="rounded-2xl border border-[var(--stroke)] px-4 py-3 text-sm font-medium"
        >
          Voltar aos livros
        </Link>
      </section>
    </main>
  );
}
