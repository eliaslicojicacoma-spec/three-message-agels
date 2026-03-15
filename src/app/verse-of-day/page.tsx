import type { Metadata } from "next";
import { verseOfDayContent } from "@/content/verse-of-day";

export const metadata: Metadata = {
  title: "Versículo do Dia",
  description:
    "Receba alimento espiritual com um versículo bíblico para meditação diária.",
};

function getRandomVerse() {
  const index = Math.floor(Math.random() * verseOfDayContent.length);
  return verseOfDayContent[index];
}

export default function VerseOfDayPage() {
  const verse = getRandomVerse();

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <section className="rounded-3xl border border-[var(--stroke)] bg-white/70 p-8 shadow-sm">
        <p className="text-sm text-[var(--muted)]">Alimento espiritual</p>
        <h1 className="mt-2 text-4xl font-bold">Versículo do Dia</h1>

        <blockquote className="mt-8 border-l-4 border-[var(--brand)] pl-5 text-lg leading-8">
          “{verse.text}”
        </blockquote>

        <p className="mt-6 text-sm font-medium text-[var(--muted)]">
          {verse.reference}
        </p>
      </section>
    </main>
  );
}
