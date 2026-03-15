import Link from "next/link";
import type { Metadata } from "next";
import { downloadItems } from "@/content/download-items";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Encontre materiais missionários, estudos bíblicos e recursos em PDF organizados por categoria.",
};

const categories = Array.from(
  new Map(
    downloadItems.map((item) => [
      item.category,
      {
        category: item.category,
        title: item.title,
        description: item.description,
      },
    ])
  ).values()
);

export default function DownloadsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="max-w-3xl">
        <p className="text-sm text-[var(--muted)]">Centro de recursos</p>
        <h1 className="mt-2 text-4xl font-bold md:text-5xl">Downloads</h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted)] md:text-lg">
          Área organizada por categorias para reunir materiais missionários, estudos
          bíblicos e recursos em PDF.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {categories.map((item) => (
          <Link
            key={item.category}
            href={`/downloads/${item.category}`}
            className="rounded-3xl border border-[var(--stroke)] bg-white/70 p-6 shadow-sm transition hover:-translate-y-1"
          >
            <p className="text-sm text-[var(--muted)]">{item.category}</p>
            <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {item.description}
            </p>
            <p className="mt-4 text-sm font-medium">Abrir categoria</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
