"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getBibleFavorites,
  getBibleHistory,
  isBibleFavorite,
  saveBibleHistory,
  toggleBibleFavorite,
} from "@/services/favorites/chapter-favorites";

type Props = {
  slug: string;
  bookName: string;
  chapter: number;
};

export default function ChapterClientTools({ slug, bookName, chapter }: Props) {
  const [favorite, setFavorite] = useState(false);
  const [historyCount, setHistoryCount] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    saveBibleHistory({
      slug,
      bookName,
      chapter,
      lastReadAt: new Date().toISOString(),
    });

    setFavorite(isBibleFavorite(slug, chapter));
    setHistoryCount(getBibleHistory().length);
    setFavoritesCount(getBibleFavorites().length);
  }, [slug, bookName, chapter]);

  const onToggleFavorite = () => {
    const state = toggleBibleFavorite({
      slug,
      bookName,
      chapter,
      savedAt: new Date().toISOString(),
    });

    setFavorite(state);
    setFavoritesCount(getBibleFavorites().length);
  };

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <button type="button" onClick={onToggleFavorite} className="button-ghost">
        {favorite ? "Remover dos favoritos" : "Guardar nos favoritos"}
      </button>

      <Link href="/bible/library" className="button-ghost">
        Minha biblioteca bíblica
      </Link>

      <div className="rounded-2xl border border-[var(--border-soft)] px-4 py-3 text-sm text-[var(--text-soft)]">
        Histórico: {historyCount}
      </div>

      <div className="rounded-2xl border border-[var(--border-soft)] px-4 py-3 text-sm text-[var(--text-soft)]">
        Favoritos: {favoritesCount}
      </div>
    </div>
  );
}
