export type QuoteItem = {
  author: string;
  text: string;
};

export const quotes: QuoteItem[] = [
  {
    author: "Jesus Cristo",
    text: "Eu sou o caminho, e a verdade, e a vida.",
  },
  {
    author: "Apocalipse 14",
    text: "Temei a Deus, e dai-lhe glória; porque é vinda a hora do seu juízo.",
  },
  {
    author: "Salmos 119",
    text: "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.",
  },
];

export function getQuotes() {
  return quotes;
}
