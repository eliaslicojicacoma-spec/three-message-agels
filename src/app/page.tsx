import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[var(--tam-bg)] text-[var(--tam-text)]">
      <section className="relative overflow-hidden">
        <div
          className="relative min-h-[92vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(17,17,17,0.18) 0%, rgba(17,17,17,0.48) 45%, rgba(17,17,17,0.82) 100%), url('/images/hero.jpg')",
          }}
        >
          <div className="mx-auto flex min-h-[92vh] w-full max-w-7xl items-end px-4 pb-10 pt-20 sm:px-6 md:pb-14 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#d7b67d]">
                Voz global da fé
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-7xl">
                Clarim da Verdade
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
                Um portal dedicado à proclamação do Evangelho eterno, ao estudo
                das Escrituras e à preparação de um povo para o breve retorno de Cristo.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/studies"
                  className="inline-flex min-h-[52px] items-center justify-center bg-[var(--tam-primary)] px-8 text-sm font-semibold text-black transition hover:opacity-95"
                >
                  Estudos Bíblicos
                </Link>

                <Link
                  href="/blog"
                  className="inline-flex min-h-[52px] items-center justify-center border border-white/40 bg-transparent px-8 text-sm font-semibold text-white transition hover:bg-white/8"
                >
                  Explorar Artigos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="overflow-hidden rounded-[1.6rem] bg-white p-8 shadow-[0_10px_30px_rgba(17,17,17,0.04)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b08d57]">
              Estudos
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-[-0.04em] text-[#151515]">
              Conteúdo bíblico para profundidade espiritual
            </h2>
            <p className="mt-4 text-sm leading-8 text-[#6d675f]">
              Estudos preparados para doutrina, profecia, crescimento cristão e firmeza na fé.
            </p>
            <Link href="/studies" className="mt-6 inline-flex text-sm font-semibold text-[#151515]">
              Ver estudos →
            </Link>
          </article>

          <article className="overflow-hidden rounded-[1.6rem] bg-[#191919] p-8 text-white shadow-[0_10px_30px_rgba(17,17,17,0.08)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7b67d]">
              Artigos
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-[-0.04em]">
              Reflexões para o tempo presente
            </h2>
            <p className="mt-4 text-sm leading-8 text-white/70">
              Um espaço editorial para fé, cultura, esperança e leitura espiritual do mundo atual.
            </p>
            <Link href="/blog" className="mt-6 inline-flex text-sm font-semibold text-white">
              Ler artigos →
            </Link>
          </article>

          <article className="overflow-hidden rounded-[1.6rem] bg-white p-8 shadow-[0_10px_30px_rgba(17,17,17,0.04)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b08d57]">
              Biblioteca
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-[-0.04em] text-[#151515]">
              Livros para leitura, estudo e formação
            </h2>
            <p className="mt-4 text-sm leading-8 text-[#6d675f]">
              Obras selecionadas para crescimento espiritual, compreensão bíblica e vida missionária.
            </p>
            <Link href="/books" className="mt-6 inline-flex text-sm font-semibold text-[#151515]">
              Abrir biblioteca →
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-[#191919] py-16 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[1.8rem]">
              <img
                src="/images/hero.jpg"
                alt="Bíblia aberta"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>

            <div className="flex items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d7b67d]">
                  Identidade
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-[-0.05em] md:text-5xl">
                  Uma plataforma feita para fé, missão e clareza bíblica
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                  O Clarim da Verdade nasce para unir reverência, profundidade e uma linguagem
                  visual forte, capaz de falar com esta geração sem diluir a verdade.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-5">
                    <h3 className="text-xl font-semibold">Fundamento sólido</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      Conteúdo ancorado nas Escrituras e em convicções cristãs firmes.
                    </p>
                  </div>

                  <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-5">
                    <h3 className="text-xl font-semibold">Resistência espiritual</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      Um portal pensado para fortalecer fé, discernimento e esperança.
                    </p>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="mt-8 inline-flex bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-95"
                >
                  Conheça nossa história
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b08d57]">
            Próximo passo
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#151515] md:text-5xl">
            Prepara-te para aprofundar fé, estudo e missão
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#6d675f]">
            O portal vai continuar a evoluir visualmente, mas agora já tens uma base real
            onde sabemos exatamente onde mexer para cada novo salto de design.
          </p>
        </div>
      </section>
    </main>
  );
}
