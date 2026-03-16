import type { BibleBookData } from "./types";

export const proverbsData: BibleBookData = {
  slug: "proverbs",
  name: "Proverbs",
  testament: "Old",
  chapters: [
    {
      chapter: 1,
      verses: [
        { verse: 1, text: "Provérbios de Salomão, filho de Davi, rei de Israel;" },
        { verse: 2, text: "Para se conhecer a sabedoria e a instrução; para se entenderem as palavras da prudência;" },
        { verse: 3, text: "Para se receber a instrução do entendimento, a justiça, o juízo e a equidade;" }
      ]
    },
    {
      chapter: 3,
      verses: [
        { verse: 5, text: "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento." },
        { verse: 6, text: "Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas." },
        { verse: 7, text: "Não sejas sábio a teus próprios olhos; teme ao Senhor e aparta-te do mal." }
      ]
    }
  ]
};
