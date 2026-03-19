import { getBibleBooks } from "@/content/bible";
import BibleSearchClient from "@/components/bible/search-client";
import SectionHeading from "@/components/ui/section-heading";

export default function BibleSearchPage() {
  const bibleBooks = getBibleBooks();

  const testament = "all" as "all" | "old" | "new";

  const filteredBooks =
    testament === "all"
      ? bibleBooks
      : bibleBooks.filter((book) => book.testament === testament);

  return (
    <main className="container-premium py-10 md:py-14">
      <SectionHeading
        eyebrow="Bíblia"
        title="Pesquisa bíblica"
        description="Procura palavras, expressões e livros da Bíblia numa experiência simples e rápida."
      />

      <div className="mt-8">
        <BibleSearchClient />
      </div>

      <div className="mt-10 rounded-3xl border bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-60">
          Livros disponíveis
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {filteredBooks.map((book) => (
            <span
              key={book.slug}
              className="rounded-full border px-3 py-1 text-xs opacity-80"
            >
              {book.name}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
