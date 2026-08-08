import type { MDXComponents } from "mdx/types";
import Link from "next/link";

function isInternal(href?: string) {
  return !!href && href.startsWith("/");
}

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">{children}</h1>
  ),
  h2: ({ children, id }) => (
    <h2 id={id} className="mt-10 scroll-mt-24 text-xl font-bold text-foreground sm:text-2xl">
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3 id={id} className="mt-6 scroll-mt-24 text-base font-semibold text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }) => <p className="leading-relaxed text-muted">{children}</p>,
  a: ({ children, href }) =>
    isInternal(href) ? (
      <Link href={href!} className="font-semibold text-primary hover:underline">
        {children}
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
        {children}
      </a>
    ),
  ul: ({ children }) => <ul className="flex flex-col gap-2">{children}</ul>,
  ol: ({ children }) => <ol className="flex flex-col gap-2">{children}</ol>,
  li: ({ children }) => (
    <li className="flex items-start gap-2 text-sm leading-relaxed text-muted">
      <span className="mt-0.5 text-primary">✓</span>
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  em: ({ children }) => <em className="text-foreground">{children}</em>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-primary/40 pl-4 text-sm italic text-muted-2">{children}</blockquote>
  ),
  hr: () => <hr className="border-border" />,
  code: ({ children }) => (
    <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[13px] text-foreground">{children}</code>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
