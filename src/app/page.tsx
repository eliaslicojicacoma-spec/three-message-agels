import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <main className="bg-[var(--tam-bg)] text-[var(--tam-text)]">
      {/* HERO DE ALTO IMPACTO */}
      <section className="relative overflow-hidden">
        <div
          className="relative min-h-[100vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(6,6,6,0.18) 0%, rgba(6,6,6,0.46) 42%, rgba(6,6,6,0.88) 100%), url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2200&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,170,114,0.24),transparent_38%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05),transparent_28%,transparent_72%,rgba(255,255,255,0.04))]" />

          <div className="mx-auto flex min-h-[100vh] w-full max-w-7xl items-end px-4 pb-10 pt-24 sm:px-6 md:pb-16 lg:px-8">
            <div className="max-w-5xl rounded-[2.2rem] border border-white/10 bg-black/18 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-md md:p-10 lg:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-[#d7b67d]">
                Portal cristão premium
              </p>

              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.88] tracking-[-0.07em] text-white md:text-7xl lg:text-[5.8rem]">
                Three Angels Message
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/82 md:text-xl md:leading-9">
                Bíblia, estudos, artigos e biblioteca organizados numa experiência
                visual forte, reverente e feita para formar uma fé sólida no tempo presente.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/studies"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#c9aa72] px-8 text-sm font-semibold uppercase tracking-[0.14em] text-black shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition hover:translate-y-[-2px] hover:opacity-95"
                >
                  Estudos Bíblicos
                </Link>

                <Link
                  href="/blog"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/30 bg-white/8 px-8 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition hover:bg-white/14"
                >
                  Explorar Artigos
                </Link>
              </div>

              <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm transition hover:translate-y-[-3px] hover:bg-white/9">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d7b67d]">
                    Bíblia
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Conteúdo ancorado na Palavra com reverência e clareza.
                  </p>
                </div>

                <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm transition hover:translate-y-[-3px] hover:bg-white/9">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d7b67d]">
                    Portal
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Artigos vivos para fé, cultura, missão e discernimento.
                  </p>
                </div>

                <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm transition hover:translate-y-[-3px] hover:bg-white/9">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d7b67d]">
                    Biblioteca
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Livros e recursos para crescimento espiritual consistente.
                  </p>
                </div>
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
              Conteúdo organizado com presença visual premium
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#191919] text-white shadow-[0_18px_50px_rgba(17,17,17,0.12)]">
              <div className="image-zoom">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop"
                  alt="Estudos bíblicos"
                  className="h-[360px] w-full object-cover"
                />
              </div>

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
              <article className="overflow-hidden rounded-[1.8rem] border border-black/5 bg-white/78 shadow-[0_14px_40px_rgba(17,17,17,0.06)] backdrop-blur-sm">
                <div className="image-zoom">
                  <img
                    src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1200&auto=format&fit=crop"
                    alt="Artigos"
                    className="h-[190px] w-full object-cover"
                  />
                </div>

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

              <article className="overflow-hidden rounded-[1.8rem] border border-black/5 bg-white/78 shadow-[0_14px_40px_rgba(17,17,17,0.06)] backdrop-blur-sm">
                <div className="image-zoom">
                  <img
                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
                    alt="Biblioteca"
                    className="h-[190px] w-full object-cover"
                  />
                </div>

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
              <div className="overflow-hidden rounded-[2rem] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <div className="image-zoom">
                  <img
                    src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1600&auto=format&fit=crop"
                    alt="Bíblia aberta"
                    className="h-full min-h-[340px] w-full object-cover"
                  />
                </div>
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
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm transition hover:translate-y-[-3px] hover:bg-white/9">
                      <h3 className="text-xl font-semibold">Fundamento sólido</h3>
                      <p className="mt-3 text-sm leading-7 text-white/68">
                        Conteúdo ancorado nas Escrituras e em convicções cristãs firmes.
                      </p>
                    </div>

                    <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm transition hover:translate-y-[-3px] hover:bg-white/9">
                      <h3 className="text-xl font-semibold">Resistência espiritual</h3>
                      <p className="mt-3 text-sm leading-7 text-white/68">
                        Um portal pensado para fortalecer fé, discernimento e esperança.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/about"
                    className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition hover:translate-y-[-2px] hover:opacity-95"
                  >
                    Conhecer mais
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
