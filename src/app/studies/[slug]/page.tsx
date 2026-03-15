import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { studiesContent } from "@/content/studies";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = studiesContent.find((item) => item.slug === slug);

  if (!study) {
    return {
      title: "Estudo não encontrado",
      description: "O estudo solicitado não foi encontrado."
    };
  }

  return {
    title: study.title,
    description: study.description,
  };
}

export default async function StudyDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const study = studiesContent.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <section className="rounded-3xl border border-[var(--stroke)] bg-white/70 p-8 shadow-sm">
        <p className="text-sm text-[var(--muted)]">Estudo bíblico</p>
        <h1 className="mt-2 text-4xl font-bold">{study.title}</h1>

        <div className="mt-8 space-y-6 leading-7 text-[var(--muted)]">
          <p>{study.description}</p>

          <p>
            Esta página agora é gerada dinamicamente a partir do conteúdo central
            dos estudos bíblicos. Isso facilita muito a expansão da plataforma.
          </p>

          <p>
            O próximo passo natural será enriquecer cada estudo com tópicos,
            referências bíblicas, perguntas e materiais de apoio para ensino e evangelismo.
          </p>
        </div>
      </section>
    </main>
  );
}
