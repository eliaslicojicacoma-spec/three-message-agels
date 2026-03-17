import VerseFavoritesLibrary from "@/components/bible/verse-favorites-library";

export default function VerseFavoritesPageFeature() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow-clean">Biblioteca bíblica</p>
          <h1 className="section-title mt-5">Versículos favoritos</h1>
          <p className="mt-5 text-base leading-8 text-[var(--text-soft)]">
            Aqui ficam os versículos que guardaste para meditação, partilha e estudo.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <VerseFavoritesLibrary />
      </section>
    </main>
  );
}
