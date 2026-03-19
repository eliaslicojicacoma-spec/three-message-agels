"use client";

type ShareChapterButtonProps = {
  book?: string;
  chapter?: number;
};

export default function ShareChapterButton({
  book,
  chapter,
}: ShareChapterButtonProps) {
  async function handleShare() {
    const text = book && chapter
      ? `${book} ${chapter}`
      : "Capítulo bíblico";

    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({
          title: "Partilhar capítulo",
          text,
        });
        return;
      }

      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      }
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="rounded-lg border px-3 py-2 text-sm opacity-70"
      aria-label="Partilhar capítulo"
      title="Partilhar capítulo"
    >
      Partilhar
    </button>
  );
}
