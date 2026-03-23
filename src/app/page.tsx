import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <main className="bg-[var(--tam-bg)] text-[var(--tam-text)]">
      <section className="relative overflow-hidden">
        <div
          className="relative min-h-[100vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(6,6,6,0.22) 0%, rgba(6,6,6,0.55) 45%, rgba(6,6,6,0.9) 100%), url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2200&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,170,114,0.22),transparent_40%)]" />

          <div className="mx-auto flex min-h-[100vh] w-full max-w-7xl items-end px-4 pb-8 pt-20 sm:px-6 md:pb-16 lg:px-8">
            <div className="w-full max-w-4xl rounded-[1.8rem] border border-white/10 bg-black/25 p-5 backdrop-blur-md sm:p-6 md:p-10">

              <p className="text-[10px] uppercase tracking-[0.35em] text-[#d7b67d]">
                Portal cristão
              </p>

              <h1 className="mt-5 text-3xl font-semibold leading-[1] text-white sm:text-5xl md:text-7xl">
                Three Angels Message
              </h1>

              <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base md:text-lg md:leading-8">
                Bíblia, estudos e conteúdos organizados numa experiência forte,
                reverente e pensada para esta geração.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/studies"
                  className="w-full rounded-full bg-[#c9aa72] px-6 py-3 text-center text-sm font-semibold text-black sm:w-auto"
                >
                  Estudos Bíblicos
                </Link>

                <Link
                  href="/blog"
                  className="w-full rounded-full border border-white/30 px-6 py-3 text-center text-sm text-white sm:w-auto"
                >
                  Explorar Artigos
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <div className="mb-8 max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#b08d57]">
                Explorar
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#151515] sm:text-4xl">
                Conteúdo com presença visual forte
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.15fr_0.85fr]">

              <div className="overflow-hidden rounded-2xl bg-[#191919] text-white">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop"
                  className="h-56 w-full object-cover sm:h-80"
                />
                <div className="p-5 sm:p-8">
                  <h3 className="text-lg font-semibold sm:text-2xl">
                    Estudos Bíblicos
                  </h3>
                  <p className="mt-3 text-sm text-white/70">
                    Conteúdo profundo para crescimento espiritual.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:gap-6">
                <div className="overflow-hidden rounded-2xl bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1200"
                    className="h-40 w-full object-cover sm:h-48"
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base font-semibold sm:text-xl">
                      Artigos
                    </h3>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200"
                    className="h-40 w-full object-cover sm:h-48"
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base font-semibold sm:text-xl">
                      Biblioteca
                    </h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </Reveal>

    </main>
  );
}
