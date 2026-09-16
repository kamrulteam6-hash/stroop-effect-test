export interface AffiliateProduct {
  id: string;
  name: string;
  image: string;
  url: string;
  price: string;
  rating: string;
  features: string[];
  badge: string;
}

export interface AffiliateSection {
  enabled: boolean;
  heading: string;
  description: string;
  buttonLabel: string;
  products: AffiliateProduct[];
}

export function emptyAffiliateSection(): AffiliateSection {
  return { enabled: false, heading: "Keep practicing at home", description: "Explore games and tools for your next practice session.", buttonLabel: "Buy now on Amazon", products: [] };
}

export function safeImageUrl(value: string): boolean {
  if (/^\/blog-images\/[a-zA-Z0-9._-]+$/.test(value)) return true;
  try { const u = new URL(value); return u.protocol === "https:" && !u.username && !u.password; } catch { return false; }
}

export function amazonUrl(value: string): boolean {
  try {
    const u = new URL(value);
    return u.protocol === "https:" && !u.username && !u.password && /^(?:(?:www\.|smile\.)?amazon\.(?:com|co\.uk|ca|de|fr|it|es|co\.jp|in|com\.au|com\.br|com\.mx|nl|se|pl|sg|ae|sa|com\.tr|eg|co\.za|ie)|amzn\.to|a\.co)$/.test(u.hostname);
  } catch { return false; }
}

export function validateAffiliateSection(value: unknown): AffiliateSection {
  if (!value || typeof value !== "object") throw new Error("Invalid section.");
  const data = value as Record<string, unknown>;
  const string = (v: unknown, label: string, max: number) => {
    if (typeof v !== "string" || v.length > max) throw new Error(`${label} must be text under ${max + 1} characters.`);
    return v.trim();
  };
  if (typeof data.enabled !== "boolean" || !Array.isArray(data.products) || data.products.length > 3) throw new Error("Use up to three products per test.");
  const products = data.products.map((raw: unknown) => {
    if (!raw || typeof raw !== "object") throw new Error("Invalid product.");
    const p = raw as Record<string, unknown>;
    const product: AffiliateProduct = {
      id: string(p.id, "Product ID", 80), name: string(p.name, "Product name", 150),
      image: string(p.image, "Image URL", 2000), url: string(p.url, "Amazon link", 2000),
      price: string(p.price, "Price", 40), rating: string(p.rating, "Rating", 4), badge: string(p.badge, "Badge", 40), features: [],
    };
    if (!product.id || !product.name || !amazonUrl(product.url) || !safeImageUrl(product.image)) throw new Error("Each product needs a name, an HTTPS Amazon link, and a valid image URL.");
    if (product.rating && (!/^\d(?:\.\d)?$/.test(product.rating) || Number(product.rating) < 0 || Number(product.rating) > 5)) throw new Error("Amazon ratings must be between 0 and 5.");
    if (!Array.isArray(p.features) || p.features.length > 5) throw new Error("Use up to five key features per product.");
    product.features = p.features.map((f) => string(f, "Feature", 160)).filter(Boolean);
    return product;
  });
  if (new Set(products.map(p => p.id)).size !== products.length) throw new Error("Product IDs must be unique.");
  const section = { enabled: data.enabled, heading: string(data.heading, "Heading", 180), description: string(data.description, "Description", 600), buttonLabel: string(data.buttonLabel, "Button label", 50), products };
  if (section.enabled && (!section.heading || !section.buttonLabel || !products.length)) throw new Error("Add a heading, button label, and at least one product before enabling.");
  return section;
}
