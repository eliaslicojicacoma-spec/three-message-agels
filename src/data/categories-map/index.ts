export type CategoryMapItem = {
  key: string;
  label: string;
  description?: string;
  section:
    | "bible"
    | "studies"
    | "books"
    | "downloads"
    | "blog"
    | "devotionals"
    | "mission";
};

export const categoriesMap: CategoryMapItem[] = [
  {
    key: "doutrina",
    label: "Doutrina",
    description: "Temas fundamentais da fé cristã e adventista.",
    section: "studies",
  },
  {
    key: "profecia",
    label: "Profecia",
    description: "Estudos e conteúdos ligados à mensagem profética.",
    section: "studies",
  },
  {
    key: "biblia",
    label: "Bíblia",
    description: "Leitura, navegação, capítulos e pesquisa bíblica.",
    section: "bible",
  },
  {
    key: "devocional",
    label: "Devocional",
    description: "Conteúdos curtos para reflexão e crescimento espiritual.",
    section: "devotionals",
  },
  {
    key: "livros",
    label: "Livros",
    description: "Biblioteca de leituras cristãs e recomendadas.",
    section: "books",
  },
  {
    key: "downloads",
    label: "Downloads",
    description: "Materiais organizados para acesso rápido e offline.",
    section: "downloads",
  },
  {
    key: "missao",
    label: "Missão",
    description: "Conteúdos ligados à proclamação e apoio missionário.",
    section: "mission",
  },
  {
    key: "artigos",
    label: "Artigos",
    description: "Conteúdos de blog, reflexão, análise e orientação.",
    section: "blog",
  },
];

export function getCategoriesMap() {
  return categoriesMap;
}

export function getCategoriesBySection(section: CategoryMapItem["section"]) {
  return categoriesMap.filter((item) => item.section === section);
}

export function getCategoryByKey(key: string) {
  return categoriesMap.find((item) => item.key === key) || null;
}
