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
              "linear-gradient(180deg, rgba(10,10,10,0.18) 0%, rgba(10,10,10,0.40) 45%, rgba(10,10,10,0.72) 100%), url('/images/hero.svg')",
          }}
        >
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
                src="/images/study.svg"
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
                  src="/images/hero.svg"
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
                  src="/images/books.svg"
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
    </main>
  );
}
