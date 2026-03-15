export type AngelMessageItem = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export const threeAngelsIntro = {
  eyebrow: "Mensagem profética",
  title: "A Mensagem dos Três Anjos",
  description:
    "A mensagem dos três anjos, encontrada em Apocalipse 14:6-12, é o centro da proclamação profética para os últimos dias. Ela chama o mundo à adoração do verdadeiro Deus, anuncia a queda de Babilónia e adverte contra a adoração da besta e da sua imagem."
};

export const threeAngelsBaseText = {
  title: "Base Bíblica",
  verse:
    "E vi outro anjo voar pelo meio do céu, e tinha o evangelho eterno, para o proclamar aos que habitam sobre a terra, e a toda a nação, e tribo, e língua, e povo.",
  reference: "Apocalipse 14:6"
};

export const angelMessages: AngelMessageItem[] = [
  {
    id: "first-angel",
    label: "Primeiro Anjo",
    title: "Evangelho eterno",
    description:
      "O primeiro anjo proclama o evangelho eterno e chama toda a humanidade a temer a Deus, dar-Lhe glória e adorá-Lo como Criador. É um chamado ao arrependimento, à reverência e à verdadeira adoração."
  },
  {
    id: "second-angel",
    label: "Segundo Anjo",
    title: "Queda de Babilónia",
    description:
      "O segundo anjo anuncia que Babilónia caiu. Esta mensagem revela a queda dos sistemas religiosos corrompidos que se afastaram da verdade bíblica e convida o povo de Deus a permanecer fiel à Sua Palavra."
  },
  {
    id: "third-angel",
    label: "Terceiro Anjo",
    title: "Advertência final",
    description:
      "O terceiro anjo traz uma séria advertência contra a adoração da besta e da sua imagem. Ele destaca a importância da fidelidade a Deus, da obediência aos Seus mandamentos e da fé em Jesus."
  }
];

export const threeAngelsMission = {
  title: "Missão para este tempo",
  description:
    "Esta mensagem não é apenas doutrina. É um chamado urgente para preparar um povo para a volta de Jesus Cristo. O objetivo desta plataforma é ajudar a proclamar essa verdade por meio da Bíblia, estudos, livros, recursos digitais e evangelismo online."
};
