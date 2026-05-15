"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* swallow */
    }
  };

  return (
    <button onClick={onCopy} className="cs-prompt-copy" type="button">
      {copied ? "copied ✓" : "copy prompt"}
    </button>
  );
}
