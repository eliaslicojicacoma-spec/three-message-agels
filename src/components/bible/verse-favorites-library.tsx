"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getBibleVerseFavorites,
  type BibleVerseFavoriteItem,
} from "@/services/favorites/verse-favorites";

export default function VerseFavoritesLibrary() {
  const [favorites, setFavorites] = useState<BibleVerseFavoriteItem[]>([]);

  useEffect(() => {
    setFavorites(getBibleVerseFavorites());
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="card-clean p-6">
        <p className="text-[var(--text-soft)]">
          Ainda não guardaste versículos favoritos.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {favorites.map((item) => (
        <div key={`${item.slug}-${item.chapter}-${item.verse}`} className="card-clean p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold">
                {item.bookName} {item.chapter}:{item.verse}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-soft)]">
                Guardado em {new Date(item.savedAt).toLocaleString()}
              </p>
            </div>

            <Link
              href={`/bible/${item.slug}/${item.chapter}#verse-${item.verse}`}
              className="button-main"
            >
              Abrir versículo
            </Link>
          </div>

          <p className="mt-4 leading-8 text-[var(--text-soft)]">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
