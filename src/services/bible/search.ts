type Verse = {
  book: string;
  chapter: number;
  verse: number;
  text: string;
};

// Pesquisa simples (placeholder)
export function searchBible(query: string): Verse[] {
  if (!query || query.trim() === "") return [];

  // 🔥 Por agora: simulação (não quebra o build)
  return [
    {
      book: "João",
      chapter: 3,
      verse: 16,
      text: "Porque Deus amou o mundo de tal maneira..."
    }
  ];
}
