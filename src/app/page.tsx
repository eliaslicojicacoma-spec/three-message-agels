import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <main className="bg-[var(--tam-bg)] text-[var(--tam-text)]">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="relative min-h-[92vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(10,10,10,0.25), rgba(10,10,10,0.75)), url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2000&auto=format&fit=crop')",
          }}
        >
          <div className="mx-auto flex min-h-[92vh] w-full max-w-7xl items-end px-4 pb-12 pt-20">
            <div className="max-w-4xl">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#d7b67d]">
                Portal cristão
              </p>

              <h1 className="mt-6 text-6xl font-bold text-white">
                Three Angels Message
              </h1>

              <p className="mt-6 text-white/80 max-w-2xl">
                Um portal dedicado ao estudo bíblico, proclamação do evangelho e preparação espiritual.
              </p>

              <div className="mt-10 flex gap-4">
                <Link href="/studies" className="bg-white px-6 py-3 font-semibold text-black">
                  Estudos
                </Link>
                <Link href="/blog" className="border border-white px-6 py-3 text-white">
                  Artigos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="mx-auto max-w-7xl px-4 py-16 grid gap-6 md:grid-cols-3">

        <Link href="/studies" className="block overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop"
            className="h-60 w-full object-cover"
          />
          <div className="p-4 bg-white">
            <h3 className="font-bold text-xl">Estudos Bíblicos</h3>
            <p className="text-sm text-gray-600 mt-2">
              Conteúdo profundo para crescimento espiritual.
            </p>
          </div>
        </Link>

        <Link href="/blog" className="block overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1200&auto=format&fit=crop"
            className="h-60 w-full object-cover"
          />
          <div className="p-4 bg-white">
            <h3 className="font-bold text-xl">Artigos</h3>
            <p className="text-sm text-gray-600 mt-2">
              Reflexões espirituais para o tempo presente.
            </p>
          </div>
        </Link>

        <Link href="/books" className="block overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
            className="h-60 w-full object-cover"
          />
          <div className="p-4 bg-white">
            <h3 className="font-bold text-xl">Biblioteca</h3>
            <p className="text-sm text-gray-600 mt-2">
              Livros selecionados para estudo cristão.
            </p>
          </div>
        </Link>

      </section>

    </main>
  );
}
