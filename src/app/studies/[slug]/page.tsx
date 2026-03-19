import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getStudyBySlug, getStudies } from "@/content/studies";
import SectionHeading from "@/components/ui/section-heading";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getStudies().map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getStudyBySlug(slug);

  if (!study) {
    return {
      title: "Estudo não encontrado",
    };
  }

  return {
    title: study.title,
    description: study.description,
  };
}

export default async function StudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="container-premium py-10 md:py-14">
      <SectionHeading
        eyebrow="Estudo Bíblico"
        title={study.title}
        description={study.description}
      />

      <section className="mt-8 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <article className="card-premium p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
            Conteúdo
          </p>

          <div className="mt-4 space-y-4 text-sm leading-8 opacity-80 md:text-base">
            <p>
              Este estudo faz parte da base de conteúdos do projeto e será
              expandido com estrutura completa, referências bíblicas,
              desenvolvimento temático e ligação com outros recursos.
            </p>

            <p>
              A proposta é oferecer conteúdos claros, organizados e úteis para
              leitura pessoal, ensino, evangelismo e aprofundamento espiritual.
            </p>

            <p>
              Esta página já está preparada para crescer dentro da arquitetura do
              site sem perder consistência visual nem organização.
            </p>
          </div>
        </article>

        <aside className="card-premium p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
            Categoria
          </p>

          <p className="mt-3 text-xl font-semibold">
            {study.category}
          </p>

          <div className="mt-6 rounded-2xl border bg-neutral-50 p-4 text-sm leading-7 opacity-80">
            Este módulo será ligado a:
            <ul className="mt-3 list-disc pl-5">
              <li>referências bíblicas</li>
              <li>estudos relacionados</li>
              <li>downloads</li>
              <li>conteúdo missionário</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
