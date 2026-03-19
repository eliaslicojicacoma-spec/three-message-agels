import SectionHeading from "@/components/ui/section-heading";
import VerseFavoritesLibrary from "@/components/bible/verse-favorites-library";

export default function VerseFavoritesPage() {
  return (
    <main className="container-premium py-10 md:py-14">
      <SectionHeading
        eyebrow="Biblioteca Pessoal"
        title="Meus versículos favoritos"
        description="Aqui ficam guardados os versículos que marcaste para leitura, revisão e inspiração."
      />

      <div className="mt-8">
        <VerseFavoritesLibrary />
      </div>
    </main>
  );
}
