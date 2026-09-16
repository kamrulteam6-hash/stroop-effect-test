import { notFound } from "next/navigation";
import { ProductRecommendations } from "@/components/affiliate/ProductRecommendations";

export const metadata = { title: "Product layout preview", robots: { index: false, follow: false } };

export default function ProductPreviewPage() {
  if (process.env.NODE_ENV !== "development") notFound();
  return <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
    <div className="mb-8 text-center">
      <p className="mb-2 text-xs font-semibold text-primary">DESIGN PREVIEW · SAMPLE CONTENT</p>
      <h1 className="text-3xl font-black text-foreground">⚡ Reaction Time Test</h1>
      <p className="mt-3 text-sm text-muted">Updated product layout with larger images and compact buy buttons.</p>
    </div>
    <ProductRecommendations preview section={{
      enabled: true,
      heading: "Want to practice your reaction time?",
      description: "Sample products, images, prices and ratings for preview only.",
      buttonLabel: "Buy now on Amazon",
      products: ["Reaction ball", "Speed card game", "Memory puzzle"].map((name, index) => ({
        id: `preview-${index}`, name, image: "/blog-images/1787498255803-stroop-1.png",
        url: "https://www.amazon.com/", price: "$24.99", rating: "4.6", badge: "Sample product",
        features: ["Short practice sessions", "Portable design", "Solo or family play"],
      })),
    }} />
    <div className="rounded-3xl border border-border bg-surface px-6 py-10 text-center shadow-sm">
      <h2 className="text-2xl font-bold text-foreground">Test Complete</h2>
      <p className="mt-5 text-6xl font-black text-primary">250</p>
      <p className="mt-1 text-xs uppercase text-muted">ms average · example result</p>
      <p className="mt-6 text-sm text-muted">Your result card appears here, below the recommendations.</p>
    </div>
  </main>;
}
