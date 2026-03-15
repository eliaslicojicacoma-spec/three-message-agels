import Link from "next/link";
import type { Metadata } from "next";
import { studiesContent } from "@/content/studies";

export const metadata: Metadata = {
  title: "Estudos Bíblicos",
  description:
    "Acesse estudos bíblicos organizados para ensino, evangelismo e fortalecimento espiritual.",
};

export default function StudiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="max-w-3xl">
        <p className="text-sm text-[var(--muted)]">Centro de ensino</p>
        <h1 className="mt-2 text-4xl font-bold md:text-5xl">Estudos Bíblicos</h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted)] md:text-lg">
          Aqui estão os primeiros estudos organizados para fortalecer a fé, ensinar
          a verdade bíblica e apoiar o evangelismo.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {studiesContent.map((item) => (
          <Link
            key={item.slug}
            href={`/studies/${item.slug}`}
            className="rounded-3xl border border-[var(--stroke)] bg-white/70 p-6 shadow-sm transition hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {item.description}
            </p>
            <p className="mt-4 text-sm font-medium">Abrir estudo</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
