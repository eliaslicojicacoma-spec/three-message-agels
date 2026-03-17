import { verseOfDayContent } from "@/content/verse-of-day";

export function getDailyVerse() {
  const today = new Date();
  const seed = Number(
    `${today.getUTCFullYear()}${String(today.getUTCMonth() + 1).padStart(2, "0")}${String(
      today.getUTCDate()
    ).padStart(2, "0")}`
  );

  const index = seed % verseOfDayContent.length;
  return verseOfDayContent[index];
}
