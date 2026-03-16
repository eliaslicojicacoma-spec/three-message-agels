import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAvailableBibleChapters,
  getBibleBookMeta,
  getBibleChapterData,
  getChapterProgress,
  getPreviousAndNextBibleBooks,
} from "@/lib/bible";
import ChapterClientTools from "@/components/bible/chapter-client-tools";
import ShareChapterButton from "@/components/bible/share-chapter-button";
import HighlightedVerse from "@/components/bible/highlighted-verse";

type PageProps = {
  params: Promise<{
    book: string;
    chapter: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { book, chapter } = await params;
  const currentBook = getBibleBookMeta(book);

  if (!currentBook) {
    return {
      title: "Capítulo não encontrado",
      description: "O capítulo bíblico solicitado não foi encontrado.",
    };
  }

  return {
    title: `${currentBook.name} ${chapter}`,
    description: `Leia ${currentBook.name} capítulo ${chapter} na Bíblia digital do projeto Three Angels Message.`,
  };
}

export default async function BibleChapterPage({ params }: PageProps) {
  const { book, chapter } = await params;
  const currentBook = getBibleBookMeta(book);

  if (!currentBook) {
    notFound();
  }

  const chapterNumber = Number(chapter);
  const currentChapter = getBibleChapterData(book, chapterNumber);

  if (!currentChapter) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-16">
        <div className="section-shell">
          <p className="eyebrow-clean">Bíblia offline</p>
          <h1 className="section-title mt-5">{currentBook.name}</h1>
          <h2 className="mt-4 text-2xl font-semibold">Capítulo {chapterNumber}</h2>
          <p className="mt-6 text-[var(--text-soft)]">
            O conteúdo deste capítulo ainda está em preparação.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/bible/${book}`} className="button-ghost">
              Ver capítulos
            </Link>
            <Link href="/bible/books" className="button-ghost">
              Todos os livros
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const availableChapters = getAvailableBibleChapters(book).sort((a, b) => a - b);
  const currentIndex = availableChapters.indexOf(chapterNumber);
  const prevChapter = currentIndex > 0 ? availableChapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < availableChapters.length - 1 ? availableChapters[currentIndex + 1] : null;

  const { previousBook, nextBook } = getPreviousAndNextBibleBooks(book);
  const progress = getChapterProgress(book, chapterNumber);

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <div className="section-shell">
        <p className="eyebrow-clean">Leitura bíblica</p>
        <h1 className="section-title mt-5">{currentBook.name}</h1>
        <h2 className="mt-4 text-2xl font-semibold">Capítulo {chapterNumber}</h2>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between gap-3 text-sm text-[var(--text-soft)]">
            <span>
              Progresso do livro: {progress.current}/{progress.total}
            </span>
            <span>{progress.percent}%</span>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--surface-soft)]">
            <div
              className="h-full rounded-full bg-[var(--primary)]"
              style={{ width: `${progress.percent}%` }}
            />
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {currentChapter.verses.map((verse, index) => (
            <div key={verse.verse} id={`verse-${verse.verse}`}>
              <HighlightedVerse
                verse={verse.verse}
                text={verse.text}
                highlight={index === 0}
              />
            </div>
          ))}
        </div>

        <ChapterClientTools
          slug={book}
          bookName={currentBook.name}
          chapter={chapterNumber}
        />

        <div className="mt-4 flex flex-wrap gap-3">
          <ShareChapterButton
            title={`${currentBook.name} ${chapterNumber}`}
            urlPath={`/bible/${book}/${chapterNumber}`}
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={`/bible/${book}`} className="button-ghost">
            Ver capítulos
          </Link>

          <Link href="/bible/books" className="button-ghost">
            Todos os livros
          </Link>

          {prevChapter && (
            <Link href={`/bible/${book}/${prevChapter}`} className="button-ghost">
              Capítulo anterior
            </Link>
          )}

          {nextChapter && (
            <Link href={`/bible/${book}/${nextChapter}`} className="button-main">
              Próximo capítulo
            </Link>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {previousBook && (
            <Link href={`/bible/${previousBook.slug}`} className="button-ghost">
              ← Livro anterior: {previousBook.name}
            </Link>
          )}

          {nextBook && (
            <Link href={`/bible/${nextBook.slug}`} className="button-ghost">
              Próximo livro: {nextBook.name} →
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
