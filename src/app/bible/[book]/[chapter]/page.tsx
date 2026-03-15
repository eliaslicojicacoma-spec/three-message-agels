import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bibleBooks } from "@/content/bible";

type Verse = {
  verse: number;
  text: string;
};

type ChapterData = {
  chapter: number;
  verses: Verse[];
};

type BookData = {
  book: string;
  chapters: ChapterData[];
};

type PageProps = {
  params: Promise<{
    book: string;
    chapter: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { book, chapter } = await params;

  const currentBook = bibleBooks.find((item) => item.slug === book);

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

  const currentBook = bibleBooks.find((item) => item.slug === book);

  if (!currentBook) {
    notFound();
  }

  const chapterNumber = Number(chapter);
  const jsonPath = path.join(process.cwd(), "public/bible", `${book}.json`);
  const hasJson = fs.existsSync(jsonPath);

  if (!hasJson) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-3xl border border-[var(--stroke)] bg-white/70 p-8 shadow-sm">
          <p className="text-sm text-[var(--muted)]">Bíblia offline</p>
          <h1 className="mt-2 text-4xl font-bold">{currentBook.name}</h1>
          <h2 className="mt-4 text-2xl font-semibold">Capítulo {chapterNumber}</h2>
          <p className="mt-6 text-[var(--muted)]">
            O conteúdo deste capítulo ainda está em preparação.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/bible/${book}`} className="rounded-2xl border border-[var(--stroke)] px-4 py-3 text-sm font-medium">
              Ver capítulos
            </Link>
            <Link href="/bible/books" className="rounded-2xl border border-[var(--stroke)] px-4 py-3 text-sm font-medium">
              Todos os livros
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const bookFile = fs.readFileSync(jsonPath, "utf8");
  const data: BookData = JSON.parse(bookFile);
  const currentChapter = data.chapters.find((item) => item.chapter === chapterNumber);

  if (!currentChapter) {
    return notFound();
  }

  const availableChapters = data.chapters.map((item) => item.chapter).sort((a, b) => a - b);
  const currentIndex = availableChapters.indexOf(chapterNumber);
  const prevChapter = currentIndex > 0 ? availableChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < availableChapters.length - 1 ? availableChapters[currentIndex + 1] : null;

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <div className="rounded-3xl border border-[var(--stroke)] bg-white/70 p-8 shadow-sm">
        <p className="text-sm text-[var(--muted)]">Leitura bíblica</p>
        <h1 className="mt-2 text-4xl font-bold">{currentBook.name}</h1>
        <h2 className="mt-4 text-2xl font-semibold">Capítulo {chapterNumber}</h2>

        <div className="mt-8 space-y-4">
          {currentChapter.verses.map((verse) => (
            <p key={verse.verse} className="leading-7">
              <strong>{verse.verse}</strong> {verse.text}
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={`/bible/${book}`} className="rounded-2xl border border-[var(--stroke)] px-4 py-3 text-sm font-medium">
            Ver capítulos
          </Link>

          <Link href="/bible/books" className="rounded-2xl border border-[var(--stroke)] px-4 py-3 text-sm font-medium">
            Todos os livros
          </Link>

          {prevChapter && (
            <Link href={`/bible/${book}/${prevChapter}`} className="rounded-2xl border border-[var(--stroke)] px-4 py-3 text-sm font-medium">
              Capítulo anterior
            </Link>
          )}

          {nextChapter && (
            <Link href={`/bible/${book}/${nextChapter}`} className="rounded-2xl bg-[var(--brand)] px-4 py-3 text-sm font-medium text-white">
              Próximo capítulo
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
