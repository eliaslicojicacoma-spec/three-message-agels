export {
  getBibleFavorites,
  getBibleHistory,
  isBibleFavorite,
  saveBibleHistory,
  toggleBibleFavorite,
} from "@/services/favorites/chapter-favorites";

export type {
  BibleFavoriteItem,
  BibleHistoryItem,
} from "@/services/favorites/chapter-favorites";

export {
  getBibleVerseFavorites,
  isBibleVerseFavorite,
  toggleBibleVerseFavorite,
} from "@/services/favorites/verse-favorites";

export type {
  BibleVerseFavoriteItem,
} from "@/services/favorites/verse-favorites";
