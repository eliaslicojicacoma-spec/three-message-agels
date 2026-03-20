import Link from "next/link";
import type { Metadata } from "next";
import { getStudies } from "@/content/studies";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Estudos Bíblicos",
  description: "Explora estudos bíblicos organizados por temas.",
};

export default function StudiesPage() {
  const studies = getStudies();

  return (
    <main className="container-premium py-8 md:py-12">
      <section className="overflow-hidden rounded-[2rem] border border-[var(--tam-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(239,231,218,0.96))] p-6 shadow-[0_20px_60px_rgba(17,17,17,0.06)] md:p-10">
        <SectionHeading
          eyebrow="Estudos"
          title="Conteúdos organizados para aprofundar a fé"
          description="Estudos bíblicos pensados para doutrina, profecia, crescimento espiritual e missão."
        />
      </section>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {studies.map((study) => (
          <article key={study.slug} className="card-premium p-6">
            <p className="eyebrow-premium">{study.category}</p>

            <h2 className="mt-4 text-xl font-semibold text-[var(--tam-ink)]">
              {study.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-[var(--tam-muted)]">
              {study.description}
            </p>

            <div className="mt-5">
              <Link
                href={`/studies/${study.slug}`}
                className="button-premium-light inline-flex"
              >
                Ler estudo
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
