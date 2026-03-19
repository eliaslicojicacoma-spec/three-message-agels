import { bibleData } from "@/data/bible/acf";

export function searchBible(query: string) {
  if (!query) return [];

  const q = query.toLowerCase();

  return bibleData.filter(
    (v) =>
      v.text.toLowerCase().includes(q) ||
      v.book.toLowerCase().includes(q)
  );
}
