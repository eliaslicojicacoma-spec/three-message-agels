import type { BaseEntity } from "@/types/common";

export type BibleTestament = "old" | "new";

export type BibleVerse = {
  book: string;
  chapter: number;
  verse: number;
  text: string;
};

export type BibleChapter = {
  chapter: number;
  verses: BibleVerse[];
};

export type BibleBook = BaseEntity & {
  slug: string;
  name: string;
  testament: BibleTestament;
  chapters: number;
};

export type BibleBookDetail = BibleBook & {
  content?: BibleChapter[];
};

export type BibleSearchResult = BibleVerse & {
  match?: string;
};

export type BibleFavorite = BibleVerse;

export type BibleReadingHistoryItem = {
  book: string;
  chapter: number;
  lastReadAt: string;
};

export type BibleOverviewStats = {
  loadedBooks: number;
  loadedChapters: number;
  loadedVerses: number;
};

export type BibleOverview = {
  books: BibleBook[];
  stats: BibleOverviewStats;
  totalBooks: number;
};
