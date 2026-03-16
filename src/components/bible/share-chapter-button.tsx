"use client";

import { useState } from "react";

type Props = {
  title: string;
  urlPath: string;
};

export default function ShareChapterButton({ title, urlPath }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const fullUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${urlPath}`
        : urlPath;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          url: fullUrl,
        });
        return;
      } catch {
        // fallback to copy
      }
    }

    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  }

  return (
    <button type="button" onClick={handleShare} className="button-ghost">
      {copied ? "Link copiado" : "Partilhar capítulo"}
    </button>
  );
}
