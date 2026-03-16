import Link from "next/link";
import type { Metadata } from "next";
import { getDailyVerse } from "@/lib/verse-of-day";

export const metadata: Metadata = {
  title: "Three Angels Message",
  description:
    "Plataforma missionária digital para proclamar a verdade bíblica com Bíblia, estudos, livros e recursos cristãos.",
};

const sections = [
  {
    title: "Bíblia",
    href: "/bible",
    description: "Leitura organizada por livros, capítulos e pesquisa bíblica.",
  },
  {
    title: "Estudos",
    href: "/studies",
    description: "Conteúdo bíblico e temas para crescimento espiritual.",
  },
  {
    title: "Livros",
    href: "/books",
    description: "Biblioteca cristã com materiais para leitura e formação.",
  },
  {
    title: "Downloads",
    href: "/downloads",
    description: "Recursos prontos para baixar e usar offline.",
  },
];

export default function HomePage() {
  const verse = getDailyVerse();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
      <section className="overflow-hidden rounded-[32px] border border-black/10 bg-white">
        <div className="grid gap-8 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-2">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Evangelho Eterno
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-neutral-950 md:text-6xl">
              Uma plataforma missionária digital para proclamar a verdade bíblica
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600 md:text-lg">
              O projeto Three Angels Message foi criado para facilitar o acesso à
              Bíblia, estudos bíblicos, livros cristãos, recursos adventistas e
              materiais missionários, ajudando mais pessoas a conhecer Jesus Cristo
              e a mensagem profética para este tempo.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/bible" className="button-main">
                Abrir a Bíblia
              </Link>

              <Link href="/studies" className="button-ghost">
                Explorar estudos
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-neutral-50 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
              Versículo do Dia
            </p>

            <blockquote className="editorial-serif mt-5 text-3xl leading-tight text-neutral-950 md:text-5xl">
              “{verse.text}”
            </blockquote>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              {verse.reference}
            </p>

            <div className="mt-8">
              <Link href="/verse-of-day" className="button-ghost">
                Ver página devocional
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {sections.map((item) => (
          <Link key={item.href} href={item.href} className="card-clean p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Base
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-neutral-950">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              {item.description}
            </p>
            <p className="mt-5 text-sm font-semibold text-[var(--primary)]">
              Abrir seção
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
