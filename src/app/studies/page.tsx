import Link from "next/link";
import { getStudies } from "@/content/studies";

export default function StudiesPage() {
  const studies = getStudies();

  return (
    <main className="bg-[#f6f1e8]">
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b08d57]">
            Estudos Bíblicos
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-[#151515] md:text-6xl">
            Conteúdo organizado para fortalecer a fé
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#6d675f] md:text-lg">
            Estudos preparados para doutrina, profecia, vida cristã e crescimento espiritual.
          </p>

          <div className="mt-6 inline-flex bg-white px-4 py-3 text-sm text-[#6d675f] shadow-sm">
            Total disponível:
            <span className="ml-2 font-semibold text-[#151515]">
              {studies.length} estudos
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {studies.map((study, index) => (
            <article
              key={study.slug}
              className="overflow-hidden rounded-[1.6rem] border border-black/5 bg-white shadow-[0_8px_24px_rgba(17,17,17,0.04)]"
            >
              <div className="relative">
                <img
                  src={index % 3 === 0 ? "/images/blog/featured-1600x900.jpg" : index % 3 === 1 ? "/images/blog/card-1200x800.jpg" : "/images/blog/thumb-800x600.jpg"}
                  alt={study.title}
                  className="h-56 w-full object-cover"
                />
                <div className="absolute left-4 top-4 bg-white px-3 py-1 text-xs font-semibold text-[#151515] shadow-sm">
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
