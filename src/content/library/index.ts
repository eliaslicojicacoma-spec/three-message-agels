export type LibraryItem = {
  title: string;
  slug: string;
  author: string;
  category: string;
  language: string;
  format: string;
  description: string;
};

export const libraryContent: LibraryItem[] = [
  {
    title: "Steps to Christ",
    slug: "steps-to-christ",
    author: "Ellen G. White",
    category: "Devocional",
    language: "English",
    format: "Livro",
    description:
      "Um clássico cristão sobre arrependimento, fé, oração e comunhão diária com Jesus.",
  },
  {
    title: "The Great Controversy",
    slug: "the-great-controversy",
    author: "Ellen G. White",
    category: "Profecia",
    language: "English",
    format: "Livro",
    description:
      "Uma visão profética do conflito entre o bem e o mal ao longo da história.",
  },
  {
    title: "The Desire of Ages",
    slug: "desire-of-ages",
    author: "Ellen G. White",
    category: "Cristologia",
    language: "English",
    format: "Livro",
    description:
      "Uma obra centrada na vida, no amor e no ministério de Jesus Cristo.",
  },
  {
    title: "Patriarchs and Prophets",
    slug: "patriarchs-and-prophets",
    author: "Ellen G. White",
    category: "História Bíblica",
    language: "English",
    format: "Livro",
    description:
      "Panorama espiritual desde a criação até o reinado de Davi, mostrando o agir de Deus na história.",
  },
  {
    title: "Prophets and Kings",
    slug: "prophets-and-kings",
    author: "Ellen G. White",
    category: "Profetas",
    language: "English",
    format: "Livro",
    description:
      "Obra que percorre o período dos reis e profetas, com lições de fidelidade e reforma.",
  },
  {
    title: "Thoughts from the Mount of Blessing",
    slug: "thoughts-from-the-mount-of-blessing",
    author: "Ellen G. White",
    category: "Vida Cristã",
    language: "English",
    format: "Livro",
    description:
      "Reflexões sobre o sermão do monte e o caráter do verdadeiro discípulo de Cristo.",
  }
];
