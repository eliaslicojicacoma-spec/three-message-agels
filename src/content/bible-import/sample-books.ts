import type { RawImportBook } from "./types";

export const sampleImportedBooks: RawImportBook[] = [
  {
    slug: "genesis",
    name: "Genesis",
    testament: "Old",
    chapters: [
      {
        chapter: 1,
        verses: [
          { verse: 1, text: "No princípio criou Deus os céus e a terra." },
          { verse: 2, text: "E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas." },
          { verse: 3, text: "E disse Deus: Haja luz; e houve luz." }
        ]
      }
    ]
  },
  {
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
      }
    ]
  }
];
