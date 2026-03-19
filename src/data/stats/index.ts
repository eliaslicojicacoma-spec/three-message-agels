export type StatItem = {
  label: string;
  value: string;
  description?: string;
  category?: "platform" | "bible" | "mission" | "experience";
};

export const stats: StatItem[] = [
  {
    label: "Arquitetura",
    value: "Estruturada",
    description: "Projeto organizado com base escalável e modular.",
    category: "platform",
  },
  {
    label: "Pesquisa Bíblica",
    value: "Ativa",
    description: "A pesquisa já funciona e continua a evoluir.",
    category: "bible",
  },
  {
    label: "Favoritos",
    value: "Reais",
    description: "Os versículos favoritos já podem ser guardados localmente.",
    category: "experience",
  },
  {
    label: "Missão",
    value: "Digital",
    description: "Conteúdo organizado para fé, estudo e partilha.",
    category: "mission",
  },
  {
    label: "Mobile UX",
    value: "Otimizada",
    description: "Navegação adaptada para telemóvel com foco em clareza.",
    category: "experience",
  },
  {
    label: "Base Bíblica",
    value: "Em expansão",
    description: "A estrutura foi preparada para crescer com conteúdo real.",
    category: "bible",
  },
];

export function getStats() {
  return stats;
}

export function getStatsByCategory(category: StatItem["category"]) {
  return stats.filter((item) => item.category === category);
}
