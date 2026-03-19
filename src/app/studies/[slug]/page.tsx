import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getStudyBySlug, getStudies } from "@/content/studies";

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
      <article className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
          {study.category}
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          {study.title}
        </h1>

        <p className="mt-4 text-sm leading-7 opacity-75 md:text-base">
          {study.description}
        </p>
      </article>
    </main>
  );
}
