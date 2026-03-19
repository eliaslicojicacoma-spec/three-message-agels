export type BibleVerse = {
  book: string;
  chapter: number;
  verse: number;
  text: string;
};

export type FavoriteVerse = BibleVerse & {
  id?: string;
};

export type BibleBook = {
  slug?: string;
  name: string;
};

export type BibleChapter = {
  verses: BibleVerse[];
};
