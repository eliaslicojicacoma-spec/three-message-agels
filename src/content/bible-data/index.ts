import type { BibleBookData } from "./types";
import { genesisData } from "./genesis";
import { exodusData } from "./exodus";
import { joshuaData } from "./joshua";
import { firstSamuelData } from "./1-samuel";
import { secondChroniclesData } from "./2-chronicles";
import { jonahData } from "./jonah";
import { malachiData } from "./malachi";

import { obadiahData } from "./obadiah";
import { nahumData } from "./nahum";
import { habakkukData } from "./habakkuk";
import { zephaniahData } from "./zephaniah";
import { titusData } from "./titus";
import { secondPeterData } from "./2-peter";
import { philemonData } from "./philemon";
import { secondJohnData } from "./2-john";
import { thirdJohnData } from "./3-john";
import { judeData } from "./jude";
import { psalmsData } from "./psalms";
import { proverbsData } from "./proverbs";
import { isaiahData } from "./isaiah";
import { lamentationsData } from "./lamentations";
import { jeremiahData } from "./jeremiah";
import { ezekielData } from "./ezekiel";
import { danielData } from "./daniel";
import { matthewData } from "./matthew";
import { johnData } from "./john";
import { actsData } from "./acts";
import { romansData } from "./romans";
import { firstCorinthiansData } from "./1-corinthians";
import { ephesiansData } from "./ephesians";
import { philippiansData } from "./philippians";
import { hebrewsData } from "./hebrews";
import { jamesData } from "./james";
import { firstPeterData } from "./1-peter";
import { revelationData } from "./revelation";

export type { BibleVerse, BibleChapter, BibleBookData } from "./types";

export const bibleDataList: BibleBookData[] = [
  genesisData,
  exodusData,
  joshuaData,
  firstSamuelData,
  secondChroniclesData,
  jonahData,
  obadiahData,
  psalmsData,
  nahumData,
  habakkukData,
  zephaniahData,
  malachiData,
  proverbsData,
  isaiahData,
  lamentationsData,
  jeremiahData,
  ezekielData,
  danielData,
  matthewData,
  johnData,
  actsData,
  romansData,
  firstCorinthiansData,
  ephesiansData,
  philippiansData,
  titusData,
  hebrewsData,
  secondPeterData,
  philemonData,
  secondJohnData,
  thirdJohnData,
  judeData,
  jamesData,
  firstPeterData,
  revelationData,
];

export const bibleDataMap: Record<string, BibleBookData> = Object.fromEntries(
  bibleDataList.map((book) => [book.slug, book])
);
