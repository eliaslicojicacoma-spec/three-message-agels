import { notFound } from "next/navigation";
import { downloadItems } from "@/content/download-items";

type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

export default async function DownloadCategoryPage({ params }: PageProps) {
  const { category } = await params;

  const items = downloadItems.filter((item) => item.category === category);

  if (items.length === 0) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <section className="max-w-3xl">
        <p className="text-sm text-[var(--muted)]">Categoria de downloads</p>
        <h1 className="mt-2 text-4xl font-bold">{category}</h1>
        <p className="mt-4 leading-7 text-[var(--muted)]">
          Esta página reúne os materiais disponíveis nesta categoria.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.fileName}
            className="rounded-3xl border border-[var(--stroke)] bg-white/70 p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {item.description}
            </p>
            <p className="mt-4 text-sm font-medium">Arquivo: {item.fileName}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
