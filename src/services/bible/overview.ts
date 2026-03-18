import {
  getBibleDataBooksCount,
  getBibleChaptersCount,
  getBibleVersesCount,
} from "@/lib/bible";

export function getBibleOverview() {
  const stats = {
    loadedBooks: getBibleDataBooksCount(),
    loadedChapters: getBibleChaptersCount(),
    loadedVerses: getBibleVersesCount(),
  };

  return {
    books: [],
    stats,
    totalBooks: stats.loadedBooks,
  };
}
