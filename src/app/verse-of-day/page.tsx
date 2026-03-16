import Link from "next/link";
import type { Metadata } from "next";
import { getDailyVerse } from "@/lib/verse-of-day";
import ShareVerseButton from "@/components/verse-of-day/share-verse-button";

export const metadata: Metadata = {
  title: "Versículo do Dia",
  description:
    "Lê o versículo do dia e partilha uma mensagem bíblica curta para reflexão e devoção.",
};

export default function VerseOfDayPage() {
  const verse = getDailyVerse();

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <section className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow-clean">Devocional diário</p>
          <h1 className="section-title mt-5">Versículo do Dia</h1>
          <p className="mt-5 text-base leading-8 text-[var(--text-soft)]">
            Uma porção da Palavra de Deus para meditação, encorajamento e fortalecimento espiritual.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <div className="rounded-[28px] bg-[var(--primary)] px-7 py-12 text-white md:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            Palavra para hoje
          </p>

          <blockquote className="editorial-serif mt-6 text-4xl leading-tight md:text-6xl">
            “{verse.text}”
          </blockquote>

          <p className="mt-8 text-base font-semibold text-white/75">{verse.reference}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ShareVerseButton text={verse.text} reference={verse.reference} />

            <Link href="/bible/search" className="button-dark">
              Abrir pesquisa bíblica
            </Link>

            <Link href="/bible/library" className="button-outline !border-white/24 !text-white hover:!bg-white/8">
              Minha biblioteca
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card-clean p-6">
            <h3 className="text-xl font-semibold">Leitura diária</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
              Usa este versículo como ponto de partida para o teu culto pessoal.
            </p>
          </div>

          <div className="card-clean p-6">
            <h3 className="text-xl font-semibold">Partilha rápida</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
              Copia o texto e envia para família, amigos, grupo da igreja ou redes sociais.
            </p>
          </div>

          <div className="card-clean p-6">
            <h3 className="text-xl font-semibold">Base missionária</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
              Pequenos versículos podem abrir grandes conversas espirituais.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
