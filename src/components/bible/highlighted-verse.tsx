type HighlightedVerseProps = {
  text: string;
};

export default function HighlightedVerse({ text }: HighlightedVerseProps) {
  return (
    <span className="bg-yellow-200 px-1 rounded">
      {text}
    </span>
  );
}
