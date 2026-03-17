import type { Metadata } from "next";
import BiblePageFeature from "@/features/bible/bible-page";

export const metadata: Metadata = {
  title: "Bíblia Sagrada",
  description:
    "Explora a Bíblia por livros, capítulos e versículos, com pesquisa, leitura e recursos pessoais.",
};

export default function BiblePage() {
  return <BiblePageFeature />;
}
