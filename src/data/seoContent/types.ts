export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; id?: string; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; icon: string; title: string; tone?: "primary" | "accent" | "gold"; text: string }
  | { type: "faq"; items: { question: string; answer: string }[] };

export interface TestSeoContent {
  blocks: ContentBlock[];
}
