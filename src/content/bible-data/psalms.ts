import type { BibleBookData } from "./types";

export const psalmsData: BibleBookData = {
  slug: "psalms",
  name: "Psalms",
  testament: "Old",
  chapters: [
    {
      chapter: 1,
      verses: [
        { verse: 1, text: "Bem-aventurado o homem que não anda segundo o conselho dos ímpios, nem se detém no caminho dos pecadores, nem se assenta na roda dos escarnecedores." },
        { verse: 2, text: "Antes tem o seu prazer na lei do Senhor, e na sua lei medita de dia e de noite." },
        { verse: 3, text: "Pois será como a árvore plantada junto a ribeiros de águas, a qual dá o seu fruto na estação própria, e cujas folhas não caem, e tudo quanto fizer prosperará." }
      ]
    },
    {
      chapter: 23,
      verses: [
        { verse: 1, text: "O Senhor é o meu pastor, nada me faltará." },
        { verse: 2, text: "Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas." },
        { verse: 3, text: "Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome." }
      ]
    }
  ]
};
