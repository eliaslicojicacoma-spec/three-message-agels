import Link from "next/link";
import { getStudies } from "@/content/studies";

export default function StudiesPage() {
  const studies = getStudies();

  return (
    <main className="bg-[var(--tam-bg)] text-[var(--tam-text)]">
      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-[0_14px_40px_rgba(17,17,17,0.05)] backdrop-blur-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b08d57]">
            Estudos Bíblicos
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-[#151515] md:text-6xl">
            Conteúdo organizado para fortalecer a fé
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#6d675f] md:text-lg">
            Estudos preparados para doutrina, profecia, vida cristã e crescimento espiritual.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {studies.map((study, index) => (
            <article
              key={study.slug}
              className="overflow-hidden rounded-[1.8rem] border border-black/5 bg-white/78 shadow-[0_14px_40px_rgba(17,17,17,0.06)] backdrop-blur-sm"
            >
              <div className="relative image-zoom">
                <img
                  src={
                    index % 3 === 0
                      ? "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop"
                      : index % 3 === 1
                      ? "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1200&auto=format&fit=crop"
                      : "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
                  }
                  alt={study.title}
                  className="h-56 w-full object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-xs font-semibold text-[#151515] shadow-sm backdrop-blur-sm">
                  #{index + 1}
                </div>
              </div>

              <div className="p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b08d57]">
                  {study.category}
                </p>

                <h2 className="mt-4 text-2xl font-semibold leading-[1.2] tracking-[-0.03em] text-[#151515]">
                  {study.title}
                </h2>

                <p className="mt-4 text-sm leading-8 text-[#6d675f]">
                  {study.description}
                </p>

                <Link
                  href={`/studies/${study.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-[#151515]"
                >
                  Ler estudo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
