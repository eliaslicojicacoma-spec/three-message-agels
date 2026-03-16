import type { BibleBookData } from "./types";

export const genesisData: BibleBookData = {
  slug: "genesis",
  name: "Genesis",
  testament: "Old",
  chapters: [
    {
      chapter: 1,
      verses: [
        { verse: 1, text: "No princípio criou Deus os céus e a terra." },
        { verse: 2, text: "E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas." },
        { verse: 3, text: "E disse Deus: Haja luz; e houve luz." },
        { verse: 4, text: "E viu Deus que era boa a luz; e fez Deus separação entre a luz e as trevas." },
        { verse: 5, text: "E Deus chamou à luz Dia; e às trevas chamou Noite. E foi a tarde e a manhã, o dia primeiro." }
      ]
    },
    {
      chapter: 2,
      verses: [
        { verse: 1, text: "Assim os céus, a terra e todo o seu exército foram acabados." },
        { verse: 2, text: "E, havendo Deus acabado no dia sétimo a sua obra que tinha feito, descansou no sétimo dia de toda a sua obra, que tinha feito." },
        { verse: 3, text: "E abençoou Deus o dia sétimo, e o santificou; porque nele descansou de toda a sua obra que Deus criara e fizera." }
      ]
    }
  ]
};
