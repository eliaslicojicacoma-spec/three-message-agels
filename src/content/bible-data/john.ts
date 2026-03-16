import type { BibleBookData } from "./types";

export const johnData: BibleBookData = {
  slug: "john",
  name: "John",
  testament: "New",
  chapters: [
    {
      chapter: 1,
      verses: [
        { verse: 1, text: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus." },
        { verse: 2, text: "Ele estava no princípio com Deus." },
        { verse: 3, text: "Todas as coisas foram feitas por ele, e sem ele nada do que foi feito se fez." }
      ]
    },
    {
      chapter: 3,
      verses: [
        { verse: 1, text: "E havia entre os fariseus um homem, chamado Nicodemos, príncipe dos judeus." },
        { verse: 2, text: "Este foi ter de noite com Jesus, e disse-lhe: Rabi, bem sabemos que és Mestre, vindo de Deus; porque ninguém pode fazer estes sinais que tu fazes, se Deus não for com ele." },
        { verse: 3, text: "Jesus respondeu, e disse-lhe: Na verdade, na verdade te digo que aquele que não nascer de novo, não pode ver o reino de Deus." }
      ]
    }
  ]
};
