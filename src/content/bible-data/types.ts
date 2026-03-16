export type BibleVerse = {
  verse: number;
  text: string;
};

export type BibleChapter = {
  chapter: number;
  verses: BibleVerse[];
};

export type BibleBookData = {
  slug: string;
  name: string;
  testament: "Old" | "New";
  chapters: BibleChapter[];
};
