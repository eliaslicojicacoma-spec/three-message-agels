import type { BibleBookData } from "./types";

export const ephesiansData: BibleBookData = {
  slug: "ephesians",
  name: "Ephesians",
  testament: "New",
  chapters: [
    {
      chapter: 2,
      verses: [
        { verse: 8, text: "Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus." },
        { verse: 9, text: "Não vem das obras, para que ninguém se glorie;" },
        { verse: 10, text: "Porque somos feitura sua, criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas." }
      ]
    },
    {
      chapter: 6,
      verses: [
        { verse: 10, text: "No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder." },
        { verse: 11, text: "Revesti-vos de toda a armadura de Deus, para que possais estar firmes contra as astutas ciladas do diabo." },
        { verse: 12, text: "Porque não temos que lutar contra a carne e o sangue, mas, sim, contra os principados, contra as potestades, contra os príncipes das trevas deste século, contra as hostes espirituais da maldade, nos lugares celestiais." }
      ]
    }
  ]
};
