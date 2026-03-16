"use client";

import { useEffect, useState } from "react";
import {
  isBibleVerseFavorite,
  toggleBibleVerseFavorite,
} from "@/lib/storage/bible-verse-favorites";

type Props = {
  slug: string;
  bookName: string;
  chapter: number;
  verse: number;
  text: string;
};

export default function VerseFavoriteButton({
  slug,
  bookName,
  chapter,
  verse,
  text,
}: Props) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isBibleVerseFavorite(slug, chapter, verse));
  }, [slug, chapter, verse]);

  function onToggle() {
    const state = toggleBibleVerseFavorite({
      slug,
      bookName,
      chapter,
      verse,
      text,
      savedAt: new Date().toISOString(),
    });

    setFavorite(state);
  }

  return (
    <button type="button" onClick={onToggle} className="button-ghost">
      {favorite ? "Remover versículo" : "Guardar versículo"}
    </button>
  );
}
