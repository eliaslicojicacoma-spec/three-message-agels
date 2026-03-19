"use client";

import ShareChapterButton from "@/components/bible/share-chapter-button";

type ChapterClientToolsProps = {
  book?: string;
  chapter?: number;
};

export default function ChapterClientTools({
  book,
  chapter,
}: ChapterClientToolsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <ShareChapterButton book={book} chapter={chapter} />
    </div>
  );
}
