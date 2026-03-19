import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getBibleBookData,
  getBibleChapterData,
} from "@/lib/bible";
import ChapterClientTools from "@/components/bible/chapter-client-tools";
import VerseFavoriteButton from "@/components/bible/verse-favorite-button";
import HighlightedVerse from "@/components/bible/highlighted-verse";

type PageProps = {
  params: Promise<{
    book: string;
    chapter: string;
  }>;
};

export default async function BibleChapterPage({ params }: PageProps) {
  const { book, chapter } = await params;
  const chapterNumber = Number(chapter);

  if (!book || !chapter || Number.isNaN(chapterNumber)) {
    notFound();
  }

  const currentBook = getBibleBookData(book);
  const chapterData = getBibleChapterData(book, chapterNumber);

  if (!currentBook || !chapterData) {
    notFound();
  }

  const verses = Array.isArray((chapterData as any).verses)
    ? (chapterData as any).verses
    : [];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6">
        <Link href="/bible/books" className="text-sm opacity-70 hover:opacity-100">
          ← Voltar aos livros
        </Link>
      </div>

      <header className="mb-8">
        <p className="text-sm uppercase tracking-[0.18em] opacity-60">
          Bíblia Sagrada
        </p>
        <h1 className="mt-3 text-3xl font-bold">
          {currentBook.name} {chapterNumber}
        </h1>
        <p className="mt-3 text-sm opacity-70">
          Leitura do capítulo com ferramentas básicas.
        </p>

        <div className="mt-5">
          <ChapterClientTools book={currentBook.name} chapter={chapterNumber} />
        </div>
      </header>

      <section className="space-y-5">
        {verses.length === 0 ? (
          <p className="text-sm opacity-70">Nenhum versículo disponível neste capítulo.</p>
        ) : (
          verses.map((verse: any, index: number) => (
            <article
              key={verse.verse ?? index}
              className="rounded-2xl border p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold opacity-70">
                  {currentBook.name} {chapterNumber}:{verse.verse}
                </p>

                <VerseFavoriteButton
                  book={currentBook.name}
                  chapter={chapterNumber}
                  verse={verse.verse}
                  text={verse.text}
                />
              </div>

              <div className="mt-3 text-base leading-8">
                {index === 0 ? (
                  <HighlightedVerse text={verse.text} query="" />
                ) : (
                  verse.text
                )}
              </div>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
