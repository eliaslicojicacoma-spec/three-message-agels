import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { libraryContent } from "@/content/library";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = libraryContent.find((item) => item.slug === slug);

  if (!book) {
    return {
      title: "Livro não encontrado",
      description: "O livro solicitado não foi encontrado na biblioteca."
    };
  }

  return {
    title: book.title,
    description: book.description,
  };
}

export default async function BookDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const book = libraryContent.find((item) => item.slug === slug);

  if (!book) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <section className="rounded-3xl border border-[var(--stroke)] bg-white/70 p-8 shadow-sm">
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-[var(--stroke)] px-3 py-1">
            {book.category}
          </span>
          <span className="rounded-full border border-[var(--stroke)] px-3 py-1">
            {book.language}
          </span>
          <span className="rounded-full border border-[var(--stroke)] px-3 py-1">
            {book.format}
          </span>
        </div>

        <h1 className="mt-5 text-4xl font-bold">{book.title}</h1>
        <p className="mt-3 text-sm font-medium">{book.author}</p>

        <div className="mt-8 space-y-6 leading-7 text-[var(--muted)]">
          <p>{book.description}</p>

          <p>
            Esta página agora é gerada dinamicamente com base no conteúdo central da
            biblioteca. Isso permite ampliar a coleção sem criar um ficheiro manual
            para cada novo título.
          </p>

          <p>
            O próximo passo natural será enriquecer cada livro com mais campos, como
            capa, ano, editora, resumo expandido, idioma adicional e link de download.
          </p>
        </div>
      </section>
    </main>
  );
}
