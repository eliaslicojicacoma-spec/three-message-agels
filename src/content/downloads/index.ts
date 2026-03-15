export type DownloadCategory = {
  title: string;
  category: string;
  description: string;
};

export const downloadsContent: DownloadCategory[] = [
  {
    title: "Estudos Bíblicos em PDF",
    category: "bible-studies",
    description:
      "Espaço preparado para lições, estudos temáticos e cursos bíblicos em PDF.",
  },
  {
    title: "Livros Missionários",
    category: "books",
    description:
      "Área pronta para disponibilizar livros cristãos e adventistas para leitura e partilha.",
  },
  {
    title: "Materiais Evangelísticos",
    category: "missionary",
    description:
      "Folhetos, guias e conteúdos preparados para apoiar a pregação do evangelho.",
  },
];
