import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { books } from "@/content/books/books";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((item) => item.slug === slug);

  if (!book) {
    return {
      title: "Livro não encontrado",
      description: "O livro solicitado não foi encontrado.",
    };
  }

  const title = book.title;
  const description = book.description;
  const image = book.cover || "/preview.webp";
  const url = `/books/${book.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: image,
          alt: book.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const book = books.find((item) => item.slug === slug);

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8F8F8] text-[#333333]">
      <section className="section-wrap py-16 md:py-24">
        <div className="mb-8">
          <Link
            href="/books"
            className="text-sm text-[var(--gold)] hover:opacity-80"
          >
            ← Voltar para Biblioteca
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-start">
          <div className="premium-card overflow-hidden">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full object-cover"
            />
          </div>

          <div>
            <span className="eyebrow">{book.category}</span>

            <h1 className="title-display mt-4 text-4xl md:text-6xl">
              {book.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-[#333333]">
                {book.author}
              </span>
              <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-[#333333]">
                {book.year}
              </span>
              <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-[#333333]">
                {book.series}
              </span>
            </div>

            <p className="copy-muted mt-8 max-w-3xl text-base md:text-lg">
              {book.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={book.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand"
              >
                Baixar PDF
              </a>

              <Link href="/books" className="btn-soft">
                Ver outros livros
              </Link>
            </div>

            <div className="soft-card mt-12 p-6 md:p-8">
              <h2
                className="text-2xl md:text-3xl"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                Sobre esta obra
              </h2>

              <p className="copy-muted mt-4">
                Este título faz parte da biblioteca digital do projeto Três Mensagens Angélicas,
                reunindo materiais relevantes para estudo bíblico, crescimento espiritual e
                aprofundamento na verdade profética.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
