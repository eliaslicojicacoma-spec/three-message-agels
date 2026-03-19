"use client";

import { useFavorites, type FavoriteVerse } from "@/hooks/use-favorites";

function FavoriteItem({ verse, onRemove }: { verse: FavoriteVerse; onRemove: (verse: FavoriteVerse) => void }) {
  return (
    <article className="card-premium p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-60">
        {verse.book} {verse.chapter}:{verse.verse}
      </p>

      <p className="mt-3 text-reading">
        {verse.text}
      </p>

      <button
        type="button"
        onClick={() => onRemove(verse)}
        className="mt-4 rounded-xl border px-3 py-2 text-xs font-medium transition hover:bg-neutral-100"
      >
        Remover
      </button>
    </article>
  );
}

export default function VerseFavoritesLibrary() {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed bg-white p-8 text-center shadow-sm">
        <p className="text-base font-semibold md:text-lg">
          Ainda não tens versículos guardados
        </p>
        <p className="mt-2 text-sm leading-7 opacity-70">
          Usa o botão “Guardar” na pesquisa bíblica para criar a tua biblioteca pessoal.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {favorites.map((verse, index) => (
        <FavoriteItem
          key={`${verse.book}-${verse.chapter}-${verse.verse}-${index}`}
          verse={verse}
          onRemove={removeFavorite}
        />
      ))}
    </div>
  );
}
