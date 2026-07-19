export function SeoFaqBlock({ items }: { items: { question: string; answer: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-surface">
        {items.map((item) => (
          <div key={item.question} className="p-5">
            <h3 className="text-sm font-semibold text-foreground sm:text-base">{item.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
