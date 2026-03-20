import type { Metadata } from "next";
import SectionHeading from "@/components/ui/section-heading";
import VerseFavoritesLibrary from "@/components/bible/verse-favorites-library";

export const metadata: Metadata = {
  title: "Meus Versículos Favoritos",
  description:
    "Acede aos versículos bíblicos que guardaste para leitura, meditação e revisão.",
};

export default function VerseFavoritesPage() {
  return (
    <main className="container-premium py-8 md:py-12">
      <section className="overflow-hidden rounded-[2rem] border border-[var(--tam-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(239,231,218,0.96))] p-6 shadow-[0_20px_60px_rgba(17,17,17,0.06)] md:p-10">
        <SectionHeading
          eyebrow="Biblioteca Pessoal"
          title="Meus versículos favoritos"
          description="Aqui ficam guardados os textos bíblicos que marcaste para meditação, inspiração e revisão."
        />
      </section>

      <section className="mt-8">
        <VerseFavoritesLibrary />
      </section>
    </main>
  );
}
