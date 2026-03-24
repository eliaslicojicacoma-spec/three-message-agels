import Link from "next/link";
import { getStudies } from "@/content/studies";

export default function StudiesPage() {
  const studies = getStudies();
  const featured = studies[0];
  const rest = studies.slice(1);

  return (
    <main className="page-shell">
      <section className="section-wrap py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <span className="eyebrow">Estudos Bíblicos</span>
            <h1 className="title-display mt-6 text-5xl md:text-7xl">
              Base bíblica
              <br /> com clareza
            </h1>
            <p className="copy-muted mt-6 max-w-2xl text-lg">
              Estudos organizados para aprofundar doutrina, profecia, fé prática
              e crescimento espiritual com uma apresentação mais forte e limpa.
            </p>
          </div>

          <div className="glass-card p-3">
            <img
              src="/images/blog/cover-6.jpg"
              alt="Studies hero"
              className="h-[360px] w-full rounded-[28px] object-cover"
            />
          </div>
        </div>
      </section>

      {featured && (
        <section className="section-wrap pb-10">
          <Link href={`/studies/${featured.slug}`} className="block">
            <article className="overflow-hidden rounded-[32px] border border-black/5 bg-[#171412] text-white shadow-[0_24px_60px_rgba(17,17,17,0.12)]">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-[320px] w-full object-cover md:h-[420px]"
              />
              <div className="p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7b67d]">
                  {featured.category}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-3xl text-[15px] leading-8 text-white/72 md:text-base">
                  {featured.description}
                </p>
              </div>
            </article>
          </Link>
        </section>
      )}

      <section className="section-wrap py-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((study) => (
            <Link key={study.slug} href={`/studies/${study.slug}`} className="group">
              <article className="premium-card">
                <img
                  src={study.image}
                  alt={study.title}
                  className="premium-cover"
                />
                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b08a4a]">
                    {study.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#151515]">
                    {study.title}
                  </h3>
                  <p className="mt-4 line-3 text-[15px] leading-8 text-[#6d675f]">
                    {study.description}
                  </p>
                  <div className="mt-6 inline-flex items-center text-sm font-medium text-[#151515] transition group-hover:text-[#9f7438]">
                    Ler estudo
                    <span className="ml-2 transition group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
