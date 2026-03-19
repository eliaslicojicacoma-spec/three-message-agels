"use client";

import { useFavorites } from "@/hooks/use-favorites";

type Props = {
  verse: {
    book: string;
    chapter: number;
    verse: number;
    text: string;
  };
};

export default function FavoriteButton({ verse }: Props) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const active = isFavorite(verse);

  function toggle() {
    if (active) {
      removeFavorite(verse);
    } else {
      addFavorite(verse);
    }
  }

  return (
    <button
      onClick={toggle}
      className={`mt-4 rounded-xl border px-3 py-2 text-xs font-medium transition ${
        active
          ? "bg-black text-white"
          : "bg-white hover:bg-neutral-100"
      }`}
    >
      {active ? "Guardado ✓" : "Guardar"}
    </button>
  );
}
