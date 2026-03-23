import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <main className="bg-[var(--tam-bg)] text-[var(--tam-text)]">
      <section className="relative overflow-hidden">
        <div
          className="relative min-h-[92vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.88) 100%), url('/images/hero.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,170,114,0.18),transparent_45%)]" />

          <div className="mx-auto flex min-h-[92vh] w-full max-w-7xl items-end px-4 pb-12 pt-20 sm:px-6 md:pb-16 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d7b67d]">
                Portal cristão
              </p>

              <h1 className="hero-title mt-6 text-white">
                Three Angels Message
              </h1>

              <p className="hero-sub mt-6 max-w-2xl text-white">
                Um portal dedicado ao estudo bíblico, à proclamação do evangelho eterno
                e à preparação espiritual para o tempo do fim.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/studies" className="button-premium">
                  Estudos Bíblicos
                </Link>

                <Link href="/blog" className="button-ghost">
                  Explorar Artigos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="section mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b08d57]">
              Explorar
            </p>
            <h2 className="mt-4 text-[#151515]">
              Conteúdo organizado com mais presença visual
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="panel-dark image-zoom overflow-hidden p-0 text-white">
              <img
                src="/images/hero.jpg"
                alt="Estudos bíblicos"
                className="h-[340px] w-full object-cover"
              />

              <div className="p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7b67d]">
                  Estudos
                </p>

                <h3 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.04em]">
                  Conteúdo bíblico para profundidade espiritual
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-8 text-white/70">
                  Estudos preparados para doutrina, profecia, crescimento cristão e firmeza na fé.
                </p>

                <Link href="/studies" className="mt-6 inline-flex text-sm font-semibold text-white">
                  Ver estudos →
                </Link>
              </div>
            </article>

            <div className="grid gap-6">
              <article className="panel-light image-zoom overflow-hidden p-0">
                <img
                  src="/images/hero.jpg"
                  alt="Artigos"
                  className="h-[180px] w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b08d57]">
                    Artigos
                  </p>

                  <h3 className="mt-4 text-[#151515]">
                    Reflexões para o tempo presente
                  </h3>

                  <p className="mt-3 text-sm leading-8 text-[#6d675f]">
                    Um espaço editorial para fé, cultura, esperança e leitura espiritual do mundo atual.
                  </p>

                  <Link href="/blog" className="mt-5 inline-flex text-sm font-semibold text-[#151515]">
                    Ler artigos →
                  </Link>
                </div>
              </article>

              <article className="panel-light image-zoom overflow-hidden p-0">
                <img
                  src="/images/hero.jpg"
                  alt="Biblioteca"
                  className="h-[180px] w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b08d57]">
                    Biblioteca
                  </p>

                  <h3 className="mt-4 text-[#151515]">
                    Livros para leitura, estudo e formação
                  </h3>

                  <p className="mt-3 text-sm leading-8 text-[#6d675f]">
                    Obras selecionadas para crescimento espiritual, compreensão bíblica e vida missionária.
                  </p>

                  <Link href="/books" className="mt-5 inline-flex text-sm font-semibold text-[#151515]">
                    Abrir biblioteca →
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section bg-[#191919] text-white">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="image-zoom overflow-hidden rounded-[1.8rem]">
                <img
                  src="/images/hero.jpg"
                  alt="Bíblia aberta"
                  className="h-full min-h-[340px] w-full object-cover"
                />
              </div>

              <div className="flex items-center">
                <div className="text-wrap">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d7b67d]">
                    Identidade
                  </p>

                  <h2 className="mt-4 text-white">
                    Uma plataforma feita para fé, missão e clareza bíblica
                  </h2>

                  <p className="mt-5 text-base leading-8 text-white/72">
                    O projeto nasce para unir reverência, profundidade e uma linguagem
                    visual forte, capaz de falar com esta geração sem diluir a verdade.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-5 hover-soft">
                      <h3 className="text-xl font-semibold">Fundamento sólido</h3>
                      <p className="mt-3 text-sm leading-7 text-white/68">
                        Conteúdo ancorado nas Escrituras e em convicções cristãs firmes.
                      </p>
                    </div>

                    <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-5 hover-soft">
                      <h3 className="text-xl font-semibold">Resistência espiritual</h3>
                      <p className="mt-3 text-sm leading-7 text-white/68">
                        Um portal pensado para fortalecer fé, discernimento e esperança.
                      </p>
                    </div>
                  </div>

                  <Link href="/about" className="button-premium mt-8">
                    Conhecer mais
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-sm mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-wrap">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b08d57]">
              Próximo passo
            </p>

            <h2 className="mt-4 text-[#151515]">
              Prepara-te para aprofundar fé, estudo e missão
            </h2>

            <p className="mt-5 text-base leading-8 text-[#6d675f]">
              O portal vai continuar a evoluir visualmente, mas agora já tens uma base real
              onde sabemos exatamente onde mexer para cada novo salto de design.
            </p>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
