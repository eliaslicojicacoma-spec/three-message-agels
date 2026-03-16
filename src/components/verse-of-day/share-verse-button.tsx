"use client";

import { useState } from "react";

type Props = {
  text: string;
  reference: string;
};

export default function ShareVerseButton({ text, reference }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const content = `"${text}" — ${reference}`;

    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  }

  return (
    <button type="button" onClick={handleCopy} className="button-ghost">
      {copied ? "Versículo copiado" : "Copiar versículo"}
    </button>
  );
}
