"use client";

import { useEffect, useState } from "react";

export type FavoriteVerse = {
  book: string;
  chapter: number;
  verse: number;
  text: string;
};

const STORAGE_KEY = "tam_favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteVerse[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  function save(newFavs: FavoriteVerse[]) {
    setFavorites(newFavs);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavs));
  }

  function addFavorite(verse: FavoriteVerse) {
    const exists = favorites.some(
      (v) =>
        v.book === verse.book &&
        v.chapter === verse.chapter &&
        v.verse === verse.verse
    );

    if (exists) return;

    save([verse, ...favorites]);
  }

  function removeFavorite(verse: FavoriteVerse) {
    const filtered = favorites.filter(
      (v) =>
        !(
          v.book === verse.book &&
          v.chapter === verse.chapter &&
          v.verse === verse.verse
        )
    );

    save(filtered);
  }

  function isFavorite(verse: FavoriteVerse) {
    return favorites.some(
      (v) =>
        v.book === verse.book &&
        v.chapter === verse.chapter &&
        v.verse === verse.verse
    );
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
}
