import SectionHeading from "@/components/ui/section-heading";
import BibleSearchClient from "@/components/bible/search-client";

export default function BiblePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 md:py-14">
      <SectionHeading
        eyebrow="Bíblia"
        title="Pesquisa bíblica"
        description="Procura palavras, expressões e livros da Bíblia com uma experiência simples, rápida e agradável no telemóvel e no computador."
      />

      <div className="mt-8">
        <BibleSearchClient />
      </div>
    </main>
  );
}
