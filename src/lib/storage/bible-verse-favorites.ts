export type BibleVerseFavoriteItem = {
  slug: string;
  bookName: string;
  chapter: number;
  verse: number;
  text: string;
  savedAt: string;
};

const VERSE_FAVORITES_KEY = "tam_bible_verse_favorites";

function isBrowser() {
  return typeof window !== "undefined";
}

export function getBibleVerseFavorites(): BibleVerseFavoriteItem[] {
  if (!isBrowser()) return [];

  try {
    const raw = localStorage.getItem(VERSE_FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isBibleVerseFavorite(slug: string, chapter: number, verse: number) {
  return getBibleVerseFavorites().some(
    (item) => item.slug === slug && item.chapter === chapter && item.verse === verse
  );
}

export function toggleBibleVerseFavorite(item: BibleVerseFavoriteItem) {
  if (!isBrowser()) return false;

  const current = getBibleVerseFavorites();
  const exists = current.some(
    (entry) =>
      entry.slug === item.slug &&
      entry.chapter === item.chapter &&
      entry.verse === item.verse
  );

  const next = exists
    ? current.filter(
        (entry) =>
          !(
            entry.slug === item.slug &&
            entry.chapter === item.chapter &&
            entry.verse === item.verse
          )
      )
    : [item, ...current];

  localStorage.setItem(VERSE_FAVORITES_KEY, JSON.stringify(next));
  return !exists;
}
