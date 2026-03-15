import Link from "next/link";
import { verseOfDayContent } from "@/content/verse-of-day";
import {
  homeFoundations,
  homeHero,
  homeHighlights,
  homeImpactAreas,
  homeMission,
  homeMissionCall,
} from "@/content/home";

function getRandomVerse() {
  const index = Math.floor(Math.random() * verseOfDayContent.length);
  return verseOfDayContent[index];
}

export default function Home() {
  const verse = getRandomVerse();

  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="glass hero-glow rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-[var(--stroke)] bg-white/60 px-4 py-2 text-sm font-medium">
              {homeHero.badge}
            </span>

            <h1 className="section-title mt-6 text-4xl font-bold leading-tight md:text-6xl">
              {homeHero.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              {homeHero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={homeHero.primaryCta.href}
                className="rounded-2xl bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(26,42,120,0.24)] transition hover:bg-[var(--brand-soft)]"
              >
                {homeHero.primaryCta.label}
              </Link>

              <Link
                href={homeHero.secondaryCta.href}
                className="rounded-2xl border border-[var(--stroke)] bg-white/70 px-6 py-3 text-sm font-semibold transition hover:bg-white"
              >
                {homeHero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="soft-ring rounded-2xl bg-white/70 p-5">
              <p className="text-sm text-[var(--muted)]">Base</p>
              <h3 className="mt-2 text-lg font-semibold">Bíblia</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Leitura por livros, capítulos e pesquisa bíblica.
              </p>
            </div>

            <div className="soft-ring rounded-2xl bg-white/70 p-5">
              <p className="text-sm text-[var(--muted)]">Missão</p>
              <h3 className="mt-2 text-lg font-semibold">Mensagem Profética</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Apocalipse 14 e a proclamação do evangelho eterno.
              </p>
            </div>

            <div className="soft-ring rounded-2xl bg-white/70 p-5">
              <p className="text-sm text-[var(--muted)]">Recursos</p>
              <h3 className="mt-2 text-lg font-semibold">Biblioteca e Estudos</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Conteúdo organizado para crescimento espiritual e evangelismo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="glass rounded-[2rem] px-6 py-8 md:px-8">
          <p className="text-sm text-[var(--muted)]">{homeMission.eyebrow}</p>
          <h2 className="section-title mt-2 text-3xl font-bold">{homeMission.title}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[var(--muted)]">
            {homeMission.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="glass rounded-[2rem] px-6 py-8 md:px-8">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-sm text-[var(--muted)]">Alimento espiritual</p>
              <h2 className="section-title mt-2 text-3xl font-bold">Versículo do Dia</h2>
              <blockquote className="mt-6 border-l-4 border-[var(--brand)] pl-5 text-lg leading-8">
                “{verse.text}”
              </blockquote>
              <p className="mt-4 text-sm font-medium text-[var(--muted)]">
                {verse.reference}
              </p>
            </div>

            <Link
              href="/verse-of-day"
              className="rounded-2xl border border-[var(--stroke)] bg-white/70 px-5 py-3 text-sm font-semibold transition hover:bg-white"
            >
              Ver página completa
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-2xl">
          <p className="text-sm text-[var(--muted)]">Áreas principais</p>
          <h2 className="section-title mt-2 text-3xl font-bold">Explora os pilares do site</h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homeHighlights.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="glass rounded-[1.75rem] p-6 transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {item.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-[var(--brand)]">Abrir seção</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="max-w-2xl">
          <p className="text-sm text-[var(--muted)]">Impacto</p>
          <h2 className="section-title mt-2 text-3xl font-bold">Como esta plataforma pode servir</h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {homeImpactAreas.map((item) => (
            <article
              key={item.title}
              className="glass rounded-[1.75rem] p-6"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="glass rounded-[2rem] px-6 py-8 md:px-8">
          <p className="text-sm text-[var(--muted)]">{homeMissionCall.eyebrow}</p>
          <h2 className="section-title mt-2 text-3xl font-bold">{homeMissionCall.title}</h2>
          <p className="mt-4 max-w-4xl leading-8 text-[var(--muted)]">
            {homeMissionCall.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={homeMissionCall.primaryCta.href}
              className="rounded-2xl bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(26,42,120,0.24)] transition hover:bg-[var(--brand-soft)]"
            >
              {homeMissionCall.primaryCta.label}
            </Link>

            <Link
              href={homeMissionCall.secondaryCta.href}
              className="rounded-2xl border border-[var(--stroke)] bg-white/70 px-5 py-3 text-sm font-semibold transition hover:bg-white"
            >
              {homeMissionCall.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {homeFoundations.map((item) => (
            <article
              key={item.title}
              className="glass rounded-[1.75rem] p-6"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
