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
              "linear-gradient(180deg, rgba(6,6,6,0.22), rgba(6,6,6,0.9)), url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2200')",
          }}
        >
          <div className="mx-auto flex min-h-[100vh] w-full max-w-7xl items-end px-4 pb-10 pt-24">
            <div className="max-w-4xl rounded-2xl bg-black/30 p-6 backdrop-blur-md md:p-10">

              <p className="text-[11px] uppercase tracking-[0.35em] text-[#d7b67d]">
                Portal cristão
              </p>

              <h1 className="mt-6 text-4xl font-semibold text-white md:text-7xl">
                As Três Mensagens Angélicas
              </h1>

              <p className="mt-5 text-white/80 max-w-2xl">
                A voz profética para o tempo do fim
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/studies" className="bg-[#c9aa72] px-6 py-3 text-black font-semibold rounded-full">
                  Estudos Bíblicos
                </Link>
                <Link href="/blog" className="border border-white px-6 py-3 text-white rounded-full">
                  Explorar Artigos
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="px-4 py-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-semibold mb-6">Explorar</h2>

            <div className="grid gap-6 md:grid-cols-3">
              <Link href="/studies">
                <div className="bg-white p-6 rounded-xl shadow">
                  Estudos Bíblicos
                </div>
              </Link>

              <Link href="/blog">
                <div className="bg-white p-6 rounded-xl shadow">
                  Artigos
                </div>
              </Link>

              <Link href="/books">
                <div className="bg-white p-6 rounded-xl shadow">
                  Biblioteca
                </div>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
