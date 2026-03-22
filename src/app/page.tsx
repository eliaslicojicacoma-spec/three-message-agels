import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#f6f1e8] text-[#151515]">

      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#d7b67d]">
            Voz global da fé
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
            Clarim da Verdade
          </h1>

          <p className="mt-6 text-base leading-8 text-white/80 md:text-lg">
            Um portal dedicado à proclamação do Evangelho eterno e à preparação
            de um povo para o breve retorno de Cristo.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/studies"
              className="bg-[#c9aa72] px-6 py-3 text-sm font-semibold text-black"
            >
              Estudos Bíblicos
            </Link>

            <Link
              href="/blog"
              className="border border-white/40 px-6 py-3 text-sm font-semibold text-white"
            >
              Explorar Artigos
            </Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">

          <div className="bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Estudos Bíblicos</h3>
            <p className="mt-4 text-sm text-[#6d675f]">
              Conteúdos profundos sobre Daniel, Apocalipse e doutrina.
            </p>
          </div>

          <div className="bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Artigos</h3>
            <p className="mt-4 text-sm text-[#6d675f]">
              Reflexões espirituais para o tempo presente.
            </p>
          </div>

          <div className="bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Biblioteca</h3>
            <p className="mt-4 text-sm text-[#6d675f]">
              Livros selecionados para crescimento espiritual.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
