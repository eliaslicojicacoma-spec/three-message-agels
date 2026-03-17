import * as bibleLib from "@/lib/bible";

export function getBibleOverview() {
  const books =
    (bibleLib as any).getBibleBooks?.() ??
    (bibleLib as any).getBibleBookMeta?.() ??
    (bibleLib as any).getAllBooks?.() ??
    [];

  const stats =
    (bibleLib as any).getBibleStats?.() ??
    {
      loadedBooks: books.length,
      loadedChapters: 0,
      loadedVerses: 0,
    };

  return {
    books,
    stats,
    totalBooks: books.length,
  };
}
