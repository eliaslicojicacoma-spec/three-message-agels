import BibleLibraryClient from "@/components/bible/library-client";

export default function BibleLibraryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow-clean">Biblioteca bíblica</p>
          <h1 className="section-title mt-5">Minha biblioteca</h1>
          <p className="mt-5 text-base leading-8 text-[var(--text-soft)]">
            Aqui ficam os teus favoritos e o teu histórico de leitura da Bíblia.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <BibleLibraryClient />
      </section>
    </main>
  );
}
