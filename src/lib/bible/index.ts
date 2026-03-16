import { bibleBooks } from "@/content/bible";
import { bibleDataList, bibleDataMap } from "@/content/bible-data";
import type { BibleBookData, BibleChapter, BibleVerse } from "@/content/bible-data";

export function getBibleBookMeta(slug: string) {
  return bibleBooks.find((book) => book.slug === slug) ?? null;
}

export function getBibleBookData(slug: string): BibleBookData | null {
  return bibleDataMap[slug] ?? null;
}

export function getBibleChapterData(slug: string, chapter: number): BibleChapter | null {
  const book = getBibleBookData(slug);
  if (!book) return null;

  return book.chapters.find((item) => item.chapter === chapter) ?? null;
}

export function getAvailableBibleChapters(slug: string): number[] {
  const bookData = getBibleBookData(slug);

  if (bookData) {
    return bookData.chapters.map((item) => item.chapter);
  }

  const meta = getBibleBookMeta(slug);
  if (!meta) return [];

  return Array.from({ length: meta.chapters }, (_, i) => i + 1);
}

export function getBibleDataBooksCount(): number {
  return bibleDataList.length;
}

export function getBibleLoadedBookSlugs(): string[] {
  return bibleDataList.map((book) => book.slug);
}

export function getBibleLoadedBooksMeta() {
  const loaded = new Set(getBibleLoadedBookSlugs());
  return bibleBooks.filter((book) => loaded.has(book.slug));
}

export function getBiblePendingBooksMeta() {
  const loaded = new Set(getBibleLoadedBookSlugs());
  return bibleBooks.filter((book) => !loaded.has(book.slug));
}

export function getBibleFeaturedLoadedBooks() {
  const featuredSlugs = [
    "genesis",
    "joshua",
    "psalms",
    "isaiah",
    "daniel",
    "obadiah",
    "matthew",
    "john",
    "acts",
    "romans",
    "titus",
    "jude",
    "revelation",
  ];
  return bibleBooks.filter((book) => featuredSlugs.includes(book.slug));
}

export function getAllBibleVerses(): Array<
  BibleVerse & { book: string; slug: string; chapter: number; testament: "Old" | "New" }
> {
  return bibleDataList.flatMap((book) =>
    book.chapters.flatMap((chapter) =>
      chapter.verses.map((verse) => ({
        ...verse,
        book: book.name,
        slug: book.slug,
        chapter: chapter.chapter,
        testament: book.testament,
      }))
    )
  );
}

export function getBibleVersesCount(): number {
  return getAllBibleVerses().length;
}

export function getBibleChaptersCount(): number {
  return bibleDataList.reduce((total, book) => total + book.chapters.length, 0);
}

export function searchBibleVerses(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return getAllBibleVerses().filter(
    (verse) =>
      verse.text.toLowerCase().includes(normalized) ||
      verse.book.toLowerCase().includes(normalized)
  );
}

export function getPreviousAndNextBibleBooks(slug: string) {
  const index = bibleBooks.findIndex((book) => book.slug === slug);

  if (index === -1) {
    return { previousBook: null, nextBook: null };
  }

  return {
    previousBook: index > 0 ? bibleBooks[index - 1] : null,
    nextBook: index < bibleBooks.length - 1 ? bibleBooks[index + 1] : null,
  };
}

export function getChapterProgress(slug: string, chapter: number) {
  const available = getAvailableBibleChapters(slug).sort((a, b) => a - b);
  if (available.length === 0) {
    return {
      current: 0,
      total: 0,
      percent: 0,
    };
  }

  const currentIndex = available.indexOf(chapter);

  return {
    current: currentIndex >= 0 ? currentIndex + 1 : 0,
    total: available.length,
    percent:
      currentIndex >= 0 ? Math.round(((currentIndex + 1) / available.length) * 100) : 0,
  };
}
