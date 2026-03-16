import type { BibleBookData } from "@/content/bible-data";
import type { RawImportBook } from "@/content/bible-import/types";

export function normalizeImportedBook(raw: RawImportBook): BibleBookData {
  return {
    slug: raw.slug.trim().toLowerCase(),
    name: raw.name.trim(),
    testament: raw.testament,
    chapters: raw.chapters
      .map((chapter) => ({
        chapter: Number(chapter.chapter),
        verses: chapter.verses
          .map((verse) => ({
            verse: Number(verse.verse),
            text: String(verse.text).trim(),
          }))
          .filter((verse) => verse.verse > 0 && verse.text.length > 0),
      }))
      .filter((chapter) => chapter.chapter > 0 && chapter.verses.length > 0),
  };
}

export function normalizeImportedBooks(rawBooks: RawImportBook[]): BibleBookData[] {
  return rawBooks.map(normalizeImportedBook);
}

export function getImportStats(rawBooks: RawImportBook[]) {
  const normalized = normalizeImportedBooks(rawBooks);

  const books = normalized.length;
  const chapters = normalized.reduce((sum, book) => sum + book.chapters.length, 0);
  const verses = normalized.reduce(
    (sum, book) =>
      sum + book.chapters.reduce((chapterSum, chapter) => chapterSum + chapter.verses.length, 0),
    0
  );

  return { books, chapters, verses };
}
