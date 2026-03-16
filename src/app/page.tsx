import Link from "next/link";
import type { Metadata } from "next";
import { getDailyVerse } from "@/lib/verse-of-day";

export const metadata: Metadata = {
  title: "Three Angels Message",
  description:
    "Plataforma missionária digital para proclamar a verdade bíblica com Bíblia, estudos, livros e recursos cristãos.",
};

const cards = [
  {
    eyebrow: "Base",
    title: "Bíblia",
    href: "/bible",
    description: "Leitura organizada por livros, capítulos, versículos e pesquisa bíblica.",
  },
  {
    eyebrow: "Missão",
    title: "Estudos",
    href: "/studies",
    description: "Conteúdo bíblico sólido para crescimento espiritual e compreensão profética.",
  },
  {
    eyebrow: "Biblioteca",
    title: "Livros",
    href: "/books",
    description: "Recursos cristãos e materiais para leitura, formação e aprofundamento.",
  },
  {
    eyebrow: "Recursos",
    title: "Downloads",
    href: "/downloads",
    description: "Materiais prontos para baixar e usar offline quando precisares.",
  },
];

export default function HomePage() {
  const verse = getDailyVerse();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
      <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 text-white shadow-2xl">
        <div className="bg-gradient-to-br from-amber-100/20 via-slate-900 to-blue-950">
          <div className="grid gap-8 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-2">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                Evangelho Eterno
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                Uma plataforma missionária digital para proclamar a verdade bíblica
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
                O projeto Three Angels Message foi criado para facilitar o acesso à Bíblia,
                estudos bíblicos, livros cristãos, recursos adventistas e materiais
                missionários, ajudando mais pessoas a conhecer Jesus Cristo e a mensagem
                profética para este tempo.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/bible"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90"
                >
                  Abrir a Bíblia
                </Link>

                <Link
                  href="/studies"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explorar estudos
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65">
                Versículo do Dia
              </p>

              <blockquote className="mt-5 text-3xl leading-tight text-white md:text-5xl" style={{ fontFamily: 'Georgia, serif' }}>
                “{verse.text}”
              </blockquote>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
                {verse.reference}
              </p>

              <div className="mt-8">
                <Link
                  href="/verse-of-day"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Ver página devocional
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              {card.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-neutral-950">{card.title}</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">{card.description}</p>
            <p className="mt-5 text-sm font-semibold text-sky-700">Abrir seção</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
