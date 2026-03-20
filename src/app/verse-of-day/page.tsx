import type { Metadata } from "next";
import Link from "next/link";
import { getDailyVerse } from "@/services/related-content/verse-of-day";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Versículo do Dia",
  description:
    "Recebe uma mensagem bíblica diária para reflexão, encorajamento e crescimento espiritual.",
};

export default function VerseOfDayPage() {
  const verse = getDailyVerse();

  return (
    <main className="container-premium py-8 md:py-12">
      <section className="overflow-hidden rounded-[2rem] border border-[var(--tam-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(239,231,218,0.96))] p-6 shadow-[0_20px_60px_rgba(17,17,17,0.06)] md:p-10">
        <SectionHeading
          eyebrow="Devocional"
          title="Versículo do Dia"
          description="Uma porção da Palavra de Deus para começar, renovar ou fortalecer o teu dia."
        />
      </section>

      <section className="mt-8">
        <article className="card-premium p-6 md:p-10">
          <p className="eyebrow-premium">{verse.reference}</p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[var(--tam-ink)] md:text-4xl">
            Palavra para hoje
          </h2>

          <p className="mt-6 text-lg leading-9 text-[var(--tam-ink)] md:text-[1.4rem]">
            “{verse.text}”
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/bible" className="button-premium-dark">
              Abrir Bíblia
            </Link>

            <Link href="/bible/search" className="button-premium-light">
              Pesquisar na Bíblia
            </Link>
          </div>
        </article>
      </section>

      <section className="mt-8 card-premium p-6 md:p-8">
        <p className="eyebrow-premium">Reflexão</p>

        <h2 className="mt-4 text-2xl font-semibold text-[var(--tam-ink)]">
          Uma mensagem simples, mas poderosa
        </h2>

        <p className="mt-4 text-sm leading-8 text-[var(--tam-muted)] md:text-base">
          O versículo do dia foi pensado para oferecer um ponto de partida
          espiritual. Podes usá-lo para meditação pessoal, partilha com família,
          motivação diária ou como ponto inicial de oração e estudo.
        </p>
      </section>
    </main>
  );
}
