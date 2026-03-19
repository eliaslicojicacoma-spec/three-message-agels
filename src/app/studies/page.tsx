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
    <main className="container-premium py-10 md:py-14">
      <SectionHeading
        eyebrow="Estudos"
        title="Estudos bíblicos"
        description="Conteúdos organizados para aprofundar a fé, a doutrina e a compreensão profética."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {studies.map((study) => (
          <article key={study.slug} className="card-premium p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
              {study.category}
            </p>

            <h2 className="mt-3 text-xl font-semibold">
              {study.title}
            </h2>

            <p className="mt-3 text-sm leading-7 opacity-75">
              {study.description}
            </p>

            <div className="mt-5">
              <Link
                href={`/studies/${study.slug}`}
                className="rounded-2xl border bg-white px-4 py-3 text-sm font-medium transition hover:bg-neutral-50"
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
