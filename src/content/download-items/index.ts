export type DownloadItem = {
  title: string;
  fileName: string;
  category: string;
  description: string;
};

export const downloadItems: DownloadItem[] = [
  {
    title: "Guia de Estudos Bíblicos",
    fileName: "guia-estudos-biblicos.pdf",
    category: "bible-studies",
    description:
      "Material introdutório para ensino bíblico, revisão e evangelismo.",
  },
  {
    title: "Folheto Missionário",
    fileName: "folheto-missionario.pdf",
    category: "missionary",
    description:
      "Recurso simples para partilha da mensagem cristã e apoio ao evangelismo.",
  },
  {
    title: "Livro Missionário",
    fileName: "livro-missionario.pdf",
    category: "books",
    description:
      "Modelo de material para biblioteca digital e distribuição missionária.",
  }
];
