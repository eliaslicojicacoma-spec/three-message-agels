export type RawImportVerse = {
  verse: number;
  text: string;
};

export type RawImportChapter = {
  chapter: number;
  verses: RawImportVerse[];
};

export type RawImportBook = {
  slug: string;
  name: string;
  testament: "Old" | "New";
  chapters: RawImportChapter[];
};
