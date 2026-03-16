import type { BibleBookData } from "./types";

export const jamesData: BibleBookData = {
  slug: "james",
  name: "James",
  testament: "New",
  chapters: [
    {
      chapter: 1,
      verses: [
        { verse: 1, text: "Tiago, servo de Deus, e do Senhor Jesus Cristo, às doze tribos que andam dispersas, saúde." },
        { verse: 2, text: "Meus irmãos, tende grande gozo quando cairdes em várias tentações;" },
        { verse: 3, text: "Sabendo que a prova da vossa fé opera a paciência." },
        { verse: 4, text: "Tenha, porém, a paciência a sua obra perfeita, para que sejais perfeitos e completos, sem faltar em coisa alguma." },
        { verse: 5, text: "E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente, e não o lança em rosto, e ser-lhe-á dada." }
      ]
    },
    {
      chapter: 2,
      verses: [
        { verse: 17, text: "Assim também a fé, se não tiver as obras, é morta em si mesma." },
        { verse: 18, text: "Mas dirá alguém: Tu tens a fé, e eu tenho as obras; mostra-me a tua fé sem as tuas obras, e eu te mostrarei a minha fé pelas minhas obras." },
        { verse: 19, text: "Tu crês que há um só Deus; fazes bem. Também os demónios o creem, e estremecem." }
      ]
    }
  ]
};
