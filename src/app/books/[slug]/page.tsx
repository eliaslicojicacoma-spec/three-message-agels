import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBookBySlug, getBooks } from "@/content/books";
import SectionHeading from "@/components/ui/section-heading";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getBooks().map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    return {
      title: "Livro não encontrado",
    };
  }

  return {
    title: book.title,
    description: book.description,
  };
}

export default async function BookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  return (
    <main className="container-premium py-10 md:py-14">
      <SectionHeading
        eyebrow="Livro"
        title={book.title}
        description={book.description}
      />

      <section className="mt-8 card-premium p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
          Autor
        </p>

        <h2 className="mt-3 text-2xl font-semibold">
          {book.author}
        </h2>

        <p className="mt-4 text-sm leading-8 opacity-75 md:text-base">
          Esta página faz parte da biblioteca do projeto e será expandida com
          detalhes adicionais, links de leitura e recursos relacionados.
        </p>
      </section>
    </main>
  );
}
