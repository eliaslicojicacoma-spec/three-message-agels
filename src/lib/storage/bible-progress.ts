export type BibleHistoryItem = {
  slug: string;
  bookName: string;
  chapter: number;
  lastReadAt: string;
};

export type BibleFavoriteItem = {
  slug: string;
  bookName: string;
  chapter: number;
  savedAt: string;
};

const HISTORY_KEY = "tam_bible_history";
const FAVORITES_KEY = "tam_bible_favorites";

function isBrowser() {
  return typeof window !== "undefined";
}

export function getBibleHistory(): BibleHistoryItem[] {
  if (!isBrowser()) return [];

  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveBibleHistory(item: BibleHistoryItem) {
  if (!isBrowser()) return;

  const current = getBibleHistory().filter(
    (entry) => !(entry.slug === item.slug && entry.chapter === item.chapter)
  );

  const next = [item, ...current].slice(0, 12);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
}

export function getBibleFavorites(): BibleFavoriteItem[] {
  if (!isBrowser()) return [];

  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isBibleFavorite(slug: string, chapter: number) {
  return getBibleFavorites().some(
    (item) => item.slug === slug && item.chapter === chapter
  );
}

export function toggleBibleFavorite(item: BibleFavoriteItem) {
  if (!isBrowser()) return false;

  const current = getBibleFavorites();
  const exists = current.some(
    (entry) => entry.slug === item.slug && entry.chapter === item.chapter
  );

  const next = exists
    ? current.filter(
        (entry) => !(entry.slug === item.slug && entry.chapter === item.chapter)
      )
    : [item, ...current];

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
  return !exists;
}
