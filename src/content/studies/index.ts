export type StudyItem = {
  slug: string;
  title: string;
  description: string;
  category: string;
};

export const studies: StudyItem[] = [
  {
    slug: "plano-da-salvacao",
    title: "O Plano da Salvação",
    description: "Uma visão clara e bíblica sobre redenção, graça e esperança em Cristo.",
    category: "Doutrina",
  },
  {
    slug: "as-tres-mensagens-angelicas",
    title: "As Três Mensagens Angélicas",
    description: "Entende o significado profético e missionário de Apocalipse 14.",
    category: "Profecia",
  },
  {
    slug: "o-sabado-na-biblia",
    title: "O Sábado na Bíblia",
    description: "Estudo sobre criação, mandamento, adoração e fidelidade.",
    category: "Mandamentos",
  },
];

export function getStudies() {
  return studies;
}

export function getStudyBySlug(slug: string) {
  return studies.find((study) => study.slug === slug) || null;
}
