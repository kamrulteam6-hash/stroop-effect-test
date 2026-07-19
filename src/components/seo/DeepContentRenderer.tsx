import { Fragment, ReactNode } from "react";
import Link from "next/link";
import { TestSeoContent } from "@/data/seoContent/types";
import { SeoHeading, SeoSubheading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Parses simple `[label](/path)` markdown-style links out of plain content text. */
function withInlineLinks(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>);
    const [, label, href] = match;
    const isInternal = href.startsWith("/");
    parts.push(
      isInternal ? (
        <Link key={key++} href={href} className="font-semibold text-primary hover:underline">
          {label}
        </Link>
      ) : (
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:underline"
        >
          {label}
        </a>
      )
    );
    lastIndex = LINK_PATTERN.lastIndex;
  }
  if (lastIndex < text.length) parts.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  return parts;
}

export function DeepContentRenderer({ content }: { content: TestSeoContent }) {
  return (
    <section className="mt-20 flex flex-col gap-8 border-t border-border pt-12">
      {content.blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <SeoHeading key={i} id={block.id}>
                {block.text}
              </SeoHeading>
            );
          case "subheading":
            return <SeoSubheading key={i}>{block.text}</SeoSubheading>;
          case "paragraph":
            return (
              <p key={i} className="leading-relaxed text-muted">
                {withInlineLinks(block.text)}
              </p>
            );
          case "list":
            return block.ordered ? (
              <ol key={i} className="flex flex-col gap-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                      {j + 1}
                    </span>
                    <span>{withInlineLinks(item)}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="flex flex-col gap-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-0.5 text-primary">✓</span>
                    <span>{withInlineLinks(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={i}>
                <DataTable headers={block.headers} rows={block.rows} />
              </div>
            );
          case "callout":
            return (
              <Callout key={i} icon={block.icon} title={block.title} tone={block.tone}>
                {withInlineLinks(block.text)}
              </Callout>
            );
          case "faq":
            return (
              <div key={i}>
                <SeoFaqBlock items={block.items} />
              </div>
            );
          default:
            return null;
        }
      })}
    </section>
  );
}
