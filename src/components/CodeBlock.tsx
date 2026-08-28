"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  code: string;
  language?: string;
  filename?: string;
};

export default function CodeBlock({ code, language = "tsx", filename }: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#1e1e1e]">
      {filename ? (
        <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-2 font-mono text-xs text-muted">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-2">{filename}</span>
        </div>
      ) : null}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "1.25rem",
          background: "transparent",
          fontSize: "0.85rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
