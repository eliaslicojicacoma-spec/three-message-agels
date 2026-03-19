"use client";

type VerseFavoriteButtonProps = {
  book?: string;
  chapter?: number;
  verse?: number;
  text?: string;
};

export default function VerseFavoriteButton(_: VerseFavoriteButtonProps) {
  return (
    <button
      type="button"
      className="rounded-lg border px-3 py-2 text-sm opacity-70"
      aria-label="Guardar versículo nos favoritos"
      title="Guardar versículo nos favoritos"
    >
      Favoritar
    </button>
  );
}
