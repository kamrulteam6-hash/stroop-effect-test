"use client";

import { useState } from "react";
import { AffiliateSection, safeImageUrl, amazonUrl } from "@/lib/affiliate";

function ProductImage({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  return <div className="flex h-28 w-[56%] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
    {!failed && safeImageUrl(src) ? (
      // External product images are supplied by the administrator, not a fixed image host.
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={name} loading="lazy" onError={() => setFailed(true)} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" />
    ) : <span className="text-center text-[9px] leading-tight text-slate-500">No image</span>}
  </div>;
}

export function ProductRecommendations({ section, preview = false }: { section: AffiliateSection; preview?: boolean }) {
  if ((!section.enabled && !preview) || !section.products.length) return null;
  const buttonLabel = !section.buttonLabel || section.buttonLabel === "Buy now on Amazon" ? "Buy now" : section.buttonLabel;
  return <section aria-label="Recommended products" className="mb-4 w-full rounded-2xl border border-primary/15 bg-gradient-to-r from-primary/5 via-surface to-gold/5 p-2.5 text-left">
    <div className="mb-3 text-center">
      <h2 className="bg-gradient-to-r from-primary via-fuchsia-600 to-pink-600 bg-clip-text text-xl font-extrabold leading-tight tracking-tight text-transparent sm:text-2xl">{section.heading}</h2>
      {section.description && <p title={section.description} className="truncate text-[11px] leading-4 text-muted">{section.description}</p>}
    </div>
    <div role="group" aria-label="Products; scroll horizontally to see more on smaller screens" tabIndex={0} className="flex items-start gap-2 overflow-x-auto overscroll-x-contain rounded-xl focus-visible:outline-2 focus-visible:outline-primary">
      {section.products.map(product => <article key={product.id} className="group min-w-[200px] flex-1 basis-0 rounded-xl border border-border/70 bg-surface p-1.5 shadow-sm">
        <div className="flex gap-1.5">
          <ProductImage key={product.image} src={product.image} name={product.name} />
          <div className="flex min-h-28 min-w-0 flex-1 flex-col">
            <h3 title={product.name} className="line-clamp-2 text-xs font-bold leading-4 text-foreground">{product.name || "Product name"}</h3>
            <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-[11px] leading-4">
              {product.price && <span className="font-bold text-foreground">{product.price}</span>}
              {product.rating && <span className="text-muted" aria-label={`${product.rating} out of 5 on Amazon`}><span className="text-amber-500" aria-hidden>★</span> {product.rating}</span>}
            </div>
            <a href={!preview && amazonUrl(product.url) ? product.url : undefined} aria-disabled={preview} aria-label={`${buttonLabel}: ${product.name} on Amazon`} title={section.buttonLabel || "Buy now on Amazon"} target="_blank" rel="sponsored nofollow noopener noreferrer" className="mt-auto inline-flex min-h-6 max-w-full items-center gap-1 self-start rounded-md border border-primary/20 bg-primary/5 px-1.5 py-0.5 text-[10px] font-semibold leading-4 text-primary transition-colors hover:border-primary/50 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><span className="truncate">{buttonLabel}</span><span aria-hidden className="shrink-0">↗</span></a>
        {(product.features.some(Boolean) || product.badge) && <details className="group/features mt-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-1 rounded text-[10px] font-medium leading-4 text-muted hover:text-primary focus-visible:outline-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">Key features <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-3 w-3 transition-transform group-open/features:rotate-180"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></summary>
          <div className="mt-2 border-t border-border/60 pt-2">
            {product.badge && <p className="mb-1 text-[10px] font-bold text-primary">{product.badge}</p>}
            <ul className="space-y-1 text-[11px] leading-4 text-muted">{product.features.filter(Boolean).map((feature, j) => <li key={j} className="flex gap-1.5"><span className="text-primary" aria-hidden>✓</span><span className="min-w-0 break-words">{feature}</span></li>)}</ul>
          </div>
        </details>}
          </div>
        </div>
      </article>)}
    </div>
    <p className="mt-1.5 text-[9px] leading-3 text-muted">As an Amazon Associate I earn from qualifying purchases. Check Amazon for current prices and ratings.</p>
  </section>;
}
