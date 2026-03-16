import Link from "next/link";
import {
  homeFoundations,
  homeHero,
  homeHighlights,
  homeImpactAreas,
  homeMissionCall,
} from "@/content/home";
import { verseOfDayContent } from "@/content/verse-of-day";
import Reveal from "@/components/ui/reveal";
import HeroDepth from "@/components/ui/hero-depth";
import TiltCard from "@/components/ui/tilt-card";

function getRandomVerse() {
  const index = Math.floor(Math.random() * verseOfDayContent.length);
  return verseOfDayContent[index];
}

export default function HomePage() {
  const verse = getRandomVerse();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-[var(--border-soft)]">
        <HeroDepth>
          <div
            className="hero-3d-bg min-h-[78vh] bg-cover bg-center"
            style={{
              backgroundImage:
                'linear-gradient(rgba(22,22,22,0.28), rgba(22,22,22,0.52)), url("https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1800&q=80")',
            }}
          >
            <div className="hero-grid-overlay" />
            <div className="hero-orb hero-orb-a hero-3d-float" />
            <div className="hero-orb hero-orb-b hero-3d-float" />

            <div className="page-shell flex min-h-[78vh] items-end py-14 md:py-20">
              <div className="hero-3d-content max-w-5xl mobile-balance">
                <Reveal>
                  <p className="eyebrow-clean text-white/80">{homeHero.badge}</p>
                </Reveal>

                <Reveal delay={80}>
                  <h1 className="hero-title kinetic-title mt-4">
                    <span className="line">{homeHero.title}</span>
                  </h1>
                </Reveal>

                <Reveal delay={160}>
                  <p className="mt-6 max-w-3xl text-xl leading-10 text-white/84 md:text-2xl">
                    {homeHero.description}
                  </p>
                </Reveal>

                <Reveal delay={220}>
                  <div className="hero-mobile-stack mt-10 flex flex-wrap gap-4">
                    <Link href={homeHero.primaryCta.href} className="button-dark button-pulse">
                      {homeHero.primaryCta.label}
                    </Link>

                    <Link
                      href={homeHero.secondaryCta.href}
                      className="button-outline button-pulse !border-white/24 !text-white hover:!bg-white/8"
                    >
                      {homeHero.secondaryCta.label}
                    </Link>
                  </div>
                </Reveal>

                <Reveal delay={300}>
                  <div className="mt-10 grid max-w-3xl gap-4 md:grid-cols-3">
                    <div className="hero-glass-card hero-3d-card float-card-soft p-5 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/62">
                        Base
                      </p>
                      <h3 className="mt-3 text-lg font-semibold">Bíblia</h3>
                      <p className="mt-2 text-sm leading-6 text-white/76">
                        Leitura organizada e acessível.
                      </p>
                    </div>

                    <div className="hero-glass-card hero-3d-card float-card-soft p-5 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/62">
                        Missão
                      </p>
                      <h3 className="mt-3 text-lg font-semibold">Mensagem</h3>
                      <p className="mt-2 text-sm leading-6 text-white/76">
                        Verdade presente para este tempo.
                      </p>
                    </div>

                    <div className="hero-glass-card hero-3d-card float-card-soft p-5 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/62">
                        Recursos
                      </p>
                      <h3 className="mt-3 text-lg font-semibold">Estudos</h3>
                      <p className="mt-2 text-sm leading-6 text-white/76">
                        Conteúdo sólido para crescer.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </HeroDepth>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <Reveal>
            <div className="section-intro max-w-3xl">
              <p className="eyebrow-clean">Narrativa da Plataforma</p>
              <h2 className="section-title mt-4">Uma jornada construída em camadas</h2>
            </div>
          </Reveal>

          <div className="story-block mt-12 grid gap-8 lg:grid-cols-2">
            <div className="story-sticky">
              <Reveal>
                <div className="story-panel p-7 md:p-9">
                  <p className="eyebrow-clean">Direção</p>
                  <h3 className="editorial-serif mt-4 text-4xl leading-tight">
                    Da leitura à proclamação
                  </h3>
                  <p className="mt-5 text-base leading-8 text-[var(--text-soft)]">
                    O site foi pensado para conduzir a pessoa por uma experiência clara:
                    primeiro a Palavra, depois a compreensão, depois a missão.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="story-track story-mobile-pad space-y-6 pl-10">
              <Reveal>
                <article className="story-panel float-card-soft p-7 md:p-9">
                  <div className="flex items-start gap-4">
                    <span className="story-dot" />
                    <div className="story-copy">
                      <p className="story-number">01</p>
                      <h3 className="editorial-serif mt-3 text-4xl leading-tight">
                        Ler
                      </h3>
                      <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">
                        A Bíblia permanece no centro de tudo. A navegação por livros,
                        capítulos e pesquisa organiza o acesso à Palavra de forma clara,
                        direta e reverente.
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>

              <Reveal delay={80}>
                <article className="story-panel float-card-soft p-7 md:p-9">
                  <div className="flex items-start gap-4">
                    <span className="story-dot" />
                    <div className="story-copy">
                      <p className="story-number">02</p>
                      <h3 className="editorial-serif mt-3 text-4xl leading-tight">
                        Compreender
                      </h3>
                      <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">
                        Estudos bíblicos, mensagem profética e recursos editoriais ajudam
                        a transformar leitura em convicção, com profundidade e estrutura.
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>

              <Reveal delay={160}>
                <article className="story-dark float-card-soft p-7 md:p-9">
                  <div className="flex items-start gap-4">
                    <span className="story-dot" />
                    <div className="story-copy">
                      <p className="story-number">03</p>
                      <h3 className="editorial-serif mt-3 text-4xl leading-tight text-white">
                        Proclamar
                      </h3>
                      <p className="mt-4 text-base leading-8 text-white/78">
                        A etapa final é missão. Livros, downloads e ferramentas servem para
                        apoiar a proclamação do evangelho eterno e preparar um povo para este tempo.
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0 section-fade-top">
        <div className="page-shell">
          <Reveal>
            <div className="section-intro max-w-3xl">
              <p className="eyebrow-clean">Áreas principais</p>
              <h2 className="section-title mt-4">Explora os pilares do site</h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeHighlights.slice(0, 3).map((item, index) => (
              <Reveal key={item.href} delay={index * 90}>
                <TiltCard>
                  <Link href={item.href} className="card-clean depth-card micro-card overflow-hidden block">
                    <div className="card-image-hover depth-image">
                      <div className="h-[220px] bg-[var(--surface-soft)]" />
                    </div>

                    <div className="p-6">
                      <div className="depth-layer-soft">
                        <span className="depth-badge">Destaque</span>
                      </div>

                      <h3 className="editorial-serif depth-layer mt-4 text-3xl leading-tight">
                        {item.title}
                      </h3>
                      <p className="depth-layer-soft mt-4 text-sm leading-7 text-[var(--text-soft)]">
                        {item.description}
                      </p>
                      <p className="card-arrow depth-layer-soft mt-5 text-sm font-semibold text-[var(--primary)]">
                        <span>Ver mais</span>
                        <span>→</span>
                      </p>
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-feature section-space">
        <div className="page-shell">
          <Reveal>
            <div className="quote-glow mx-auto max-w-5xl py-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
                Versículo do Dia
              </p>

              <blockquote className="editorial-serif mt-8 text-4xl leading-tight text-white md:text-6xl">
                “{verse.text}”
              </blockquote>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-white/56">
                {verse.reference}
              </p>

              <div className="mt-8">
                <Link href="/verse-of-day" className="button-dark">
                  Ver página devocional
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <Reveal>
            <div className="section-intro max-w-3xl">
              <p className="eyebrow-clean">Missão</p>
              <h2 className="section-title mt-4">Fundamentos da Plataforma</h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeFoundations.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <article className="card-clean micro-card p-7">
                  <h3 className="editorial-serif text-3xl leading-tight">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeImpactAreas.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <article className="card-clean micro-card p-7">
                  <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="page-shell">
          <Reveal>
            <div className="rounded-[28px] bg-[var(--primary)] px-7 py-12 text-white md:px-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                {homeMissionCall.eyebrow}
              </p>

              <h2 className="editorial-serif mt-4 text-5xl leading-tight md:text-6xl">
                {homeMissionCall.title}
              </h2>

              <p className="mt-6 max-w-4xl text-base leading-8 text-white/78 md:text-lg">
                {homeMissionCall.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={homeMissionCall.primaryCta.href} className="button-dark button-pulse">
                  {homeMissionCall.primaryCta.label}
                </Link>

                <Link
                  href={homeMissionCall.secondaryCta.href}
                  className="button-outline button-pulse !border-white/24 !text-white hover:!bg-white/8"
                >
                  {homeMissionCall.secondaryCta.label}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
