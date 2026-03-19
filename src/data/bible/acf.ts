export type BibleVerse = {
  book: string;
  chapter: number;
  verse: number;
  text: string;
};

export const bibleData: BibleVerse[] = [
  {
    book: "João",
    chapter: 3,
    verse: 16,
    text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigénito..."
  },
  {
    book: "Salmos",
    chapter: 23,
    verse: 1,
    text: "O Senhor é o meu pastor, nada me faltará."
  },
  {
    book: "Romanos",
    chapter: 8,
    verse: 28,
    text: "Todas as coisas contribuem juntamente para o bem daqueles que amam a Deus."
  }
];
