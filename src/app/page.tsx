import Link from "next/link";
import { verseOfDayContent } from "@/content/verse-of-day";
import {
  homeFoundations,
  homeHero,
  homeHighlights,
  homeImpactAreas,
  homeMission,
  homeMissionCall,
  homeStoryBlocks,
} from "@/content/home";

function getRandomVerse() {
  const index = Math.floor(Math.random() * verseOfDayContent.length);
  return verseOfDayContent[index];
}

export default function Home() {
  const verse = getRandomVerse();

  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="glass-strong soft-grid overflow-hidden rounded-[2.75rem] px-6 py-8 md:px-10 md:py-12 motion-panel">
          <div className="grid items-center gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-4xl">
              <span className="eyebrow">{homeHero.badge}</span>

              <h1 className="section-title mt-6 text-4xl font-bold leading-[0.98] md:text-6xl xl:text-7xl motion-panel delay-1">
                {homeHero.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg motion-panel delay-2">
                {homeHero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4 motion-panel delay-3">
                <Link href={homeHero.primaryCta.href} className="premium-button-primary">
                  {homeHero.primaryCta.label}
                </Link>

                <Link href={homeHero.secondaryCta.href} className="premium-button-secondary">
                  {homeHero.secondaryCta.label}
                </Link>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="premium-card delay-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    Base
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">Bíblia viva</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Leitura por livros, capítulos e pesquisa com estrutura pronta para crescer.
                  </p>
                </div>

                <div className="premium-card delay-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    Profecia
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">Mensagem final</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Apocalipse 14 no centro da plataforma, com foco na verdade presente.
                  </p>
                </div>

                <div className="premium-card delay-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    Missão
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">Recursos úteis</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Estudos, livros e materiais missionários organizados com clareza.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative motion-panel delay-2">
              <div className="float-soft absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[var(--gold-soft)] blur-3xl" />
              <div className="float-soft absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[rgba(36,52,95,0.10)] blur-3xl" />

              <div className="relative space-y-5">
                <div className="glass rounded-[2.25rem] p-6 md:p-7 motion-panel delay-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    Precisão espiritual
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight">
                    Conteúdo claro, forte e organizado
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    Cada secção foi pensada para unir profundidade bíblica, elegância visual
                    e uma navegação que convida à descoberta.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="glass rounded-[2rem] p-5 motion-panel delay-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                      Essência
                    </p>
                    <p className="mt-3 text-3xl font-bold">01</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      Uma entrada forte, limpa e memorável logo no primeiro olhar.
                    </p>
                  </div>

                  <div className="glass rounded-[2rem] p-5 motion-panel delay-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                      Direção
                    </p>
                    <p className="mt-3 text-3xl font-bold">02</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      Ritmo visual premium preparado para crescimento e presença digital forte.
                    </p>
                  </div>
                </div>

                <div className="glass rounded-[2rem] p-5 motion-panel delay-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    Destaque espiritual
                  </p>
                  <blockquote className="mt-4 border-l-4 border-[var(--brand)] pl-4 text-base leading-8">
                    “{verse.text}”
                  </blockquote>
                  <p className="mt-3 text-sm font-medium text-[var(--muted)]">
                    {verse.reference}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="section-shell">
          <p className="text-sm text-[var(--muted)]">{homeMission.eyebrow}</p>
          <h2 className="section-title gold-line mt-2 text-3xl font-bold">{homeMission.title}</h2>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--muted)]">
            {homeMission.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:py-14">
        <div className="max-w-2xl motion-panel">
          <p className="text-sm text-[var(--muted)]">Narrativa da plataforma</p>
          <h2 className="section-title gold-line mt-2 text-3xl font-bold">
            Uma história contada em camadas
          </h2>
        </div>

        <div className="mt-10 space-y-8">
          {homeStoryBlocks.map((block, index) => (
            <div
              key={block.id}
              className={`grid items-center gap-6 ${index % 2 === 0 ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"}`}
            >
              <div className={`premium-card rounded-[2.2rem] p-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  {block.eyebrow}
                </p>
                <h3 className="mt-3 text-3xl font-semibold leading-tight">{block.title}</h3>
                <p className="mt-4 leading-8 text-[var(--muted)]">{block.description}</p>
                <div className="mt-6">
                  <Link href={block.ctaHref} className="premium-button-secondary">
                    {block.ctaLabel}
                  </Link>
                </div>
              </div>

              <div className={`glass rounded-[2.2rem] p-8 min-h-[280px] flex items-end ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    Bloco visual
                  </p>
                  <div className="mt-4 h-2 w-24 rounded-full bg-[linear-gradient(90deg,var(--gold),transparent)]" />
                  <p className="mt-6 max-w-md text-lg font-medium leading-8">
                    {index === 0 && "A Palavra como ponto de partida para toda a jornada espiritual."}
                    {index === 1 && "Compreensão bíblica transformando acesso em convicção."}
                    {index === 2 && "Recursos e missão unidos para ampliar o alcance da verdade."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-2xl motion-panel">
          <p className="text-sm text-[var(--muted)]">Áreas principais</p>
          <h2 className="section-title gold-line mt-2 text-3xl font-bold">Explora os pilares do site</h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homeHighlights.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`premium-card delay-${(index % 4) + 1}`}
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
        <div className="max-w-2xl motion-panel">
          <p className="text-sm text-[var(--muted)]">Impacto</p>
          <h2 className="section-title gold-line mt-2 text-3xl font-bold">Como esta plataforma pode servir</h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {homeImpactAreas.map((item, index) => (
            <article key={item.title} className={`premium-card delay-${(index % 3) + 1}`}>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="section-shell">
          <p className="text-sm text-[var(--muted)]">{homeMissionCall.eyebrow}</p>
          <h2 className="section-title gold-line mt-2 text-3xl font-bold">{homeMissionCall.title}</h2>
          <p className="mt-5 max-w-4xl leading-8 text-[var(--muted)]">
            {homeMissionCall.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link href={homeMissionCall.primaryCta.href} className="premium-button-primary">
              {homeMissionCall.primaryCta.label}
            </Link>

            <Link href={homeMissionCall.secondaryCta.href} className="premium-button-secondary">
              {homeMissionCall.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {homeFoundations.map((item, index) => (
            <article key={item.title} className={`premium-card delay-${(index % 3) + 1}`}>
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
