export type BibleBookItem = {
  slug: string;
  name: string;
  testament: "old" | "new";
  chapters: number;
};

export const bibleBooks: BibleBookItem[] = [
  { slug: "genesis", name: "Génesis", testament: "old", chapters: 50 },
  { slug: "salmos", name: "Salmos", testament: "old", chapters: 150 },
  { slug: "isaias", name: "Isaías", testament: "old", chapters: 66 },
  { slug: "mateus", name: "Mateus", testament: "new", chapters: 28 },
  { slug: "joao", name: "João", testament: "new", chapters: 21 },
  { slug: "romanos", name: "Romanos", testament: "new", chapters: 16 },
];

export function getBibleBooks() {
  return bibleBooks;
}

export function getBibleBookBySlug(slug: string) {
  return bibleBooks.find((book) => book.slug === slug) || null;
}
