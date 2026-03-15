export type BookItem = {
  title: string;
  slug: string;
  description: string;
};

export const booksContent: BookItem[] = [
  {
    title: "Steps to Christ",
    slug: "steps-to-christ",
    description:
      "Clássico devocional sobre arrependimento, fé, oração e vida com Jesus Cristo.",
  },
  {
    title: "The Great Controversy",
    slug: "the-great-controversy",
    description:
      "Panorama profético do conflito entre o bem e o mal ao longo da história.",
  },
  {
    title: "The Desire of Ages",
    slug: "desire-of-ages",
    description:
      "Uma apresentação profunda da vida, ministério e amor de Jesus Cristo.",
  },
];
