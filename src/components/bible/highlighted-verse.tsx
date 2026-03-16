type Props = {
  verse: number;
  text: string;
  highlight?: boolean;
};

export default function HighlightedVerse({ verse, text, highlight = false }: Props) {
  return (
    <p
      className={`leading-8 rounded-xl px-3 py-2 transition ${
        highlight
          ? "bg-[var(--surface-soft)] border border-[var(--border-soft)]"
          : ""
      }`}
    >
      <strong>{verse}</strong> {text}
    </p>
  );
}
