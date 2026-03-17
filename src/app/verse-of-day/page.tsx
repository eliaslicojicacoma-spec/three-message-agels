import type { Metadata } from "next";
import VerseOfDayPageFeature from "@/features/devotionals/verse-of-day-page";

export const metadata: Metadata = {
  title: "Versículo do Dia",
  description:
    "Lê o versículo do dia e partilha uma mensagem bíblica curta para reflexão e devoção.",
};

export default function VerseOfDayPage() {
  return <VerseOfDayPageFeature />;
}
