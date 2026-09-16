"use client";

import { useEffect, useState } from "react";
import { tests } from "@/data/tests";
import { AffiliateProduct, AffiliateSection, emptyAffiliateSection, validateAffiliateSection } from "@/lib/affiliate";
import { ProductRecommendations } from "@/components/affiliate/ProductRecommendations";

const inputStyle = "w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/15";
const buttonStyle = "rounded-lg border border-border px-3 py-2 text-xs font-semibold hover:border-primary disabled:opacity-40";

function Field({ label, value, onChange, placeholder, multiline = false }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; multiline?: boolean }) {
  return <label className="flex flex-col gap-1.5 text-xs font-semibold text-muted">{label}{multiline ? <textarea rows={3} className={inputStyle} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} /> : <input className={inputStyle} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />}</label>;
}

export function AffiliateAdmin() {
  const [slug, setSlug] = useState("reaction-time-test");
  const [search, setSearch] = useState("");
  const [section, setSection] = useState<AffiliateSection>(emptyAffiliateSection);
  const [revision, setRevision] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [reload, setReload] = useState(0);
  const [storage, setStorage] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/admin/affiliates/${slug}`, { signal: controller.signal, cache: "no-store" }).then(async res => {
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not load this test.");
      if (!controller.signal.aborted) {
        setSection(data.section); setRevision(data.revision); setStorage(data.storage); setLoaded(true); setLoading(false);
      }
    }).catch(err => { if (!controller.signal.aborted) { setError(err.message); setLoading(false); } });
    return () => controller.abort();
  }, [slug, reload]);

  useEffect(() => {
    const warn = (event: BeforeUnloadEvent) => { if (dirty) { event.preventDefault(); event.returnValue = ""; } };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  function update(patch: Partial<AffiliateSection>) { setSection(current => ({ ...current, ...patch })); setDirty(true); setNotice(""); }
  function updateProduct(id: string, patch: Partial<AffiliateProduct>) { update({ products: section.products.map(p => p.id === id ? { ...p, ...patch } : p) }); }
  function loadTest(next: string) {
    if (dirty && !window.confirm("Discard unsaved product changes?")) return;
    setSlug(next); setLoading(true); setLoaded(false); setDirty(false); setError(""); setNotice(""); setReload(n => n + 1);
  }
  async function save() {
    setError(""); setNotice("");
    try {
      const validated = validateAffiliateSection(section);
      setSaving(true);
      const res = await fetch(`/api/admin/affiliates/${slug}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ section: validated, revision }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed.");
      setSection(data.section); setRevision(data.revision); setDirty(false);
      setNotice(validated.enabled ? "Saved. Recommendations will appear after this test is completed." : "Saved. This section is hidden from visitors.");
    } catch (err) { setError(err instanceof Error ? err.message : "Save failed."); }
    finally { setSaving(false); }
  }
  async function uploadImage(id: string, file?: File) {
    if (!file) return;
    setUploading(true); setError("");
    try {
      if (file.size > 1.5 * 1024 * 1024) throw new Error("Keep images under 1.5MB.");
      const form = new FormData(); form.append("image", file);
      const res = await fetch("/api/admin/affiliates/upload", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed.");
      updateProduct(id, { image: data.url });
      if (data.storage === "github") setNotice("Image uploaded. It will be available after your hosting deployment completes.");
    } catch (err) { setError(err instanceof Error ? err.message : "Upload failed."); }
    finally { setUploading(false); }
  }
  const selected = tests.find(test => test.slug === slug)!;
  const filtered = tests.filter(test => `${test.title} ${test.category}`.toLowerCase().includes(search.toLowerCase()));

  return <div className="grid gap-6 lg:grid-cols-[230px_1fr]">
    <aside className="rounded-2xl border border-border bg-surface p-4">
      <h2 className="mb-1 text-sm font-bold">Choose a test</h2>
      <p className="mb-4 text-xs text-muted-2">Each test has its own product selection.</p>
      <label className="sr-only" htmlFor="test-search">Search tests</label>
      <input id="test-search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search tests…" className={inputStyle} />
      <div className="mt-3 max-h-96 space-y-1 overflow-y-auto lg:max-h-[650px]">
        {filtered.map(test => <button key={test.slug} disabled={saving || uploading} onClick={() => loadTest(test.slug)} className={`w-full rounded-lg px-3 py-2.5 text-left text-xs transition-colors ${slug === test.slug ? "bg-primary/10 font-bold text-primary" : "text-muted hover:bg-surface-2"}`} aria-current={slug === test.slug ? "true" : undefined}>{test.icon} {test.title}</button>)}
        {!filtered.length && <p className="p-2 text-xs text-muted-2">No tests match your search.</p>}
      </div>
    </aside>
    <div className="min-w-0">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div><p className="text-xs font-bold uppercase tracking-widest text-primary">Product recommendations</p><h2 className="mt-1 text-xl font-bold">{selected.title}</h2></div>
        <span className="rounded-full bg-surface-2 px-3 py-1 text-xs text-muted">{dirty ? "Unsaved changes" : section.enabled ? "Enabled" : "Hidden"}</span>
      </div>
      {loading && <p role="status" className="py-10 text-sm text-muted">Loading recommendations…</p>}
      {error && <div role="alert" className="mb-4 rounded-xl bg-danger/10 p-4 text-sm text-danger">{error} <button className="underline" disabled={saving || uploading} onClick={() => loadTest(slug)}>Reload test</button></div>}
      {notice && <p role="status" className="mb-4 rounded-xl bg-success/10 p-4 text-sm text-success">{notice}</p>}
      {!loading && loaded && <>
        <fieldset disabled={saving || uploading} className="space-y-5 disabled:opacity-60">
          <div className="space-y-4 rounded-2xl border border-border bg-surface-2/50 p-5">
            <label className="flex items-center gap-3 text-sm font-semibold"><input type="checkbox" checked={section.enabled} onChange={e => update({ enabled: e.target.checked })} className="h-5 w-5 accent-primary" />Show products after this test</label>
            <Field label="Section heading" value={section.heading} onChange={heading => update({ heading })} placeholder="Want to practice your reaction time?" />
            <Field label="Introduction" multiline value={section.description} onChange={description => update({ description })} placeholder="Try these games at home." />
            <Field label="Buy button text" value={section.buttonLabel} onChange={buttonLabel => update({ buttonLabel })} />
          </div>
          <div className="flex items-center justify-between"><h3 className="font-bold">Products <span className="text-muted-2">{section.products.length}/3</span></h3><button className={buttonStyle} disabled={section.products.length >= 3} onClick={() => update({ products: [...section.products, { id: crypto.randomUUID(), name: "", url: "", image: "", price: "", rating: "", badge: "", features: [] }] })}>+ Add product</button></div>
          {!section.products.length && <div className="rounded-2xl border border-dashed border-primary/30 p-8 text-center"><p className="font-semibold">Your next practice session starts here</p><p className="mt-2 text-sm text-muted">Add up to three products. Nothing appears to visitors until you enable and save this section.</p></div>}
          {section.products.map((product, index) => <div key={product.id} className="space-y-4 rounded-2xl border border-border bg-surface p-5">
            <div className="flex flex-wrap items-center justify-between gap-2"><h4 className="font-bold">Product {index + 1}</h4><div className="flex gap-2">
              <button className={buttonStyle} disabled={index === 0} aria-label={`Move product ${index + 1} up`} onClick={() => { const products = [...section.products]; [products[index - 1], products[index]] = [products[index], products[index - 1]]; update({ products }); }}>↑</button>
              <button className={buttonStyle} disabled={index === section.products.length - 1} aria-label={`Move product ${index + 1} down`} onClick={() => { const products = [...section.products]; [products[index + 1], products[index]] = [products[index], products[index + 1]]; update({ products }); }}>↓</button>
              <button className={`${buttonStyle} text-danger`} onClick={() => update({ products: section.products.filter(p => p.id !== product.id) })}>Remove</button>
            </div></div>
            <Field label="Product name" value={product.name} onChange={name => updateProduct(product.id, { name })} />
            <Field label="Amazon affiliate link" value={product.url} onChange={url => updateProduct(product.id, { url })} placeholder="https://www.amazon.com/dp/…?tag=your-tag-20" />
            <Field label="Product image URL" value={product.image} onChange={image => updateProduct(product.id, { image })} placeholder="https://…" />
            <label className="block text-xs font-semibold text-muted">Or upload an image (JPG, PNG, WebP, GIF; under 1.5MB)<input type="file" accept="image/jpeg,image/png,image/webp,image/gif" className="mt-2 block w-full text-xs file:mr-3 file:rounded-lg file:border-0 file:bg-surface-2 file:px-3 file:py-2 file:text-primary" onChange={e => { void uploadImage(product.id, e.target.files?.[0]); e.target.value = ""; }} /></label>
            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Price (optional)" value={product.price} onChange={price => updateProduct(product.id, { price })} placeholder="$24.99" />
              <Field label="Amazon rating (optional, 0–5)" value={product.rating} onChange={rating => updateProduct(product.id, { rating })} placeholder="4.6" />
              <Field label="Badge (optional)" value={product.badge} onChange={badge => updateProduct(product.id, { badge })} placeholder="Family favorite" />
            </div>
            <Field label="Key features (one per line, up to 5)" multiline value={product.features.join("\n")} onChange={value => updateProduct(product.id, { features: value.split("\n") })} placeholder={"Quick play sessions\nFor solo or family play\nPortable design"} />
          </div>)}
        </fieldset>
        <div className="sticky bottom-3 z-10 mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-surface p-4 shadow-lg">
          <p className="text-xs text-muted-2">{storage === "local" ? "Saves to this local project." : "Saves to the connected GitHub repository."}</p>
          <button disabled={saving || uploading || !dirty} onClick={save} className="rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground disabled:opacity-50">{saving ? "Saving…" : "Save recommendations"}</button>
        </div>
        <div className="mt-8"><h3 className="font-bold">Visitor preview</h3><p className="mt-1 text-xs text-muted-2">Updates as you type. Preview buttons do not open Amazon.</p><ProductRecommendations section={section} preview /></div>
      </>}
    </div>
  </div>;
}
