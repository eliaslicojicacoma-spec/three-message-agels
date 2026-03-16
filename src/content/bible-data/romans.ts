import type { BibleBookData } from "./types";

export const romansData: BibleBookData = {
  slug: "romans",
  name: "Romans",
  testament: "New",
  chapters: [
    {
      chapter: 1,
      verses: [
        { verse: 1, text: "Paulo, servo de Jesus Cristo, chamado para apóstolo, separado para o evangelho de Deus," },
        { verse: 2, text: "O qual antes prometeu pelos seus profetas nas santas escrituras," },
        { verse: 3, text: "Acerca de seu Filho, que nasceu da descendência de Davi segundo a carne," }
      ]
    },
    {
      chapter: 8,
      verses: [
        { verse: 1, text: "Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus, que não andam segundo a carne, mas segundo o Espírito." },
        { verse: 2, text: "Porque a lei do Espírito de vida, em Cristo Jesus, me livrou da lei do pecado e da morte." },
        { verse: 3, text: "Porquanto o que era impossível à lei, visto como estava enferma pela carne, Deus, enviando o seu Filho em semelhança da carne do pecado, pelo pecado condenou o pecado na carne;" }
      ]
    }
  ]
};
