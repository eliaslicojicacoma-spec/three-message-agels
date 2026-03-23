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
              "linear-gradient(180deg, rgba(8,8,8,0.18) 0%, rgba(8,8,8,0.52) 45%, rgba(8,8,8,0.84) 100%), url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2000&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,170,114,0.20),transparent_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04),transparent_30%,transparent_70%,rgba(255,255,255,0.03))]" />

          <div className="mx-auto flex min-h-[92vh] w-full max-w-7xl items-end px-4 pb-10 pt-20 sm:px-6 md:pb-14 lg:px-8">
            <div className="max-w-4xl rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-md md:p-10">
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
                <Link
                  href="/studies"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#c9aa72] px-8 text-sm font-semibold text-black shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition hover:translate-y-[-2px] hover:opacity-95"
                >
                  Estudos Bíblicos
                </Link>

                <Link
                  href="/blog"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/30 bg-white/8 px-8 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/14"
                >
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
