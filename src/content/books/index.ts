import { books } from "./books";

export function getBooks() {
  return books;
}

export function getBook(slug: string) {
  return books.find((book) => book.slug === slug);
}
