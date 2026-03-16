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
      <section className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Centro de ensino</p>
          <h1 className="section-title mt-5 text-4xl font-bold md:text-5xl">Estudos Bíblicos</h1>
          <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
            Aqui estão os primeiros estudos organizados para fortalecer a fé, ensinar
            a verdade bíblica e apoiar o evangelismo.
          </p>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {studiesContent.map((item) => (
          <Link key={item.slug} href={`/studies/${item.slug}`} className="premium-card">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {item.description}
            </p>
            <p className="mt-4 text-sm font-semibold text-[var(--brand)]">Abrir estudo</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
