import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Bíblia Sagrada",
  description:
    "Explora a Bíblia por livros, capítulos e versículos, com pesquisa, leitura e recursos pessoais.",
};

export default function BiblePage() {
  return (
    <main className="container-premium py-8 md:py-12">
      <section className="overflow-hidden rounded-[2rem] border border-[var(--tam-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(239,231,218,0.96))] p-6 shadow-[0_20px_60px_rgba(17,17,17,0.06)] md:p-10">
        <SectionHeading
          eyebrow="Bíblia"
          title="Leitura, pesquisa e estudo da Palavra de Deus"
          description="Acede à Bíblia, pesquisa versículos, guarda favoritos e mantém uma experiência de leitura organizada."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/bible/search" className="button-premium-dark">
            Pesquisar Bíblia
          </Link>
          <Link href="/bible/verse-favorites" className="button-premium-light">
            Meus Favoritos
          </Link>
          <Link href="/bible/books" className="button-premium-light">
            Ver livros
          </Link>
        </div>
      </section>
    </main>
  );
}
