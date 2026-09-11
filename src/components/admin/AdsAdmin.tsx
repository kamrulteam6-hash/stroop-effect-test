"use client";

import { useEffect, useState } from "react";
import { AD_TYPES, AdType } from "@/lib/adsConfig";

interface AdSlotRecord {
  id: string;
  label: string;
  type: AdType;
  adCode: string;
  placement: string;
  enabled: boolean;
  height: number;
}

/** Every <AdSlot placement="..."/> currently placed in the code. Add as many ad slots as you want to
 *  any one of these — each zone renders every enabled slot assigned to it, stacked. */
const KNOWN_PLACEMENTS = [
  "test-results",
  "test-article-top",
  "test-article-inline",
  "test-article-end",
  "test-sidebar-left",
  "test-sidebar-right",
  "homepage-popular",
  "homepage-mid",
  "homepage-pre-faq",
  "blog-article-top",
  "blog-article-end",
  "tests-grid",
  "footer",
  "anchor",
] as const;

const BLANK_SLOT: AdSlotRecord = {
  id: "",
  label: "",
  type: "banner",
  adCode: "",
  placement: "",
  enabled: true,
  height: 250,
};

function slugifyId(label: string): string {
  return label
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

export function AdsAdmin() {
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [globallyEnabled, setGloballyEnabled] = useState(false);
  const [slots, setSlots] = useState<AdSlotRecord[]>([]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<AdSlotRecord>(BLANK_SLOT);
  const [idTouched, setIdTouched] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [justSaved, setJustSaved] = useState(false);

  const load = async () => {
    setLoading(true);
    setLoadError(null);
    const res = await fetch("/api/admin/ads");
    if (res.ok) {
      const data = await res.json();
      setGloballyEnabled(!!data.adsGloballyEnabled);
      setSlots(Array.isArray(data.slots) ? data.slots : []);
    } else {
      setLoadError("Could not load the ads config.");
    }
    setLoading(false);
  };

  useEffect(() => {
    // Panel-mount fetch, not a props/state sync.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, []);

  const persist = async (nextGlobal: boolean, nextSlots: AdSlotRecord[]) => {
    setSaving(true);
    setSaveError(null);
    setJustSaved(false);
    const res = await fetch("/api/admin/ads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adsGloballyEnabled: nextGlobal, slots: nextSlots }),
    });
    setSaving(false);
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      setGloballyEnabled(nextGlobal);
      setSlots(nextSlots);
      setJustSaved(true);
      return true;
    }
    setSaveError(data.error || "Save failed");
    return false;
  };

  const toggleGlobal = () => {
    persist(!globallyEnabled, slots);
  };

  const startNewSlot = () => {
    setEditingId(null);
    setDraft(BLANK_SLOT);
    setIdTouched(false);
    setSaveError(null);
    setShowForm(true);
  };

  const editSlot = (slot: AdSlotRecord) => {
    setEditingId(slot.id);
    setDraft(slot);
    setIdTouched(true);
    setSaveError(null);
    setShowForm(true);
  };

  const cancelForm = () => {
    setShowForm(false);
    setSaveError(null);
  };

  const onLabelChange = (label: string) => {
    setDraft((d) => ({ ...d, label, id: idTouched || editingId ? d.id : slugifyId(label) }));
  };

  const saveSlot = async () => {
    if (!draft.label.trim() || !draft.id.trim() || !draft.placement.trim()) {
      setSaveError("Label, id, and placement are required.");
      return;
    }
    const nextSlots = editingId
      ? slots.map((s) => (s.id === editingId ? draft : s))
      : [...slots, draft];

    if (!editingId && slots.some((s) => s.id === draft.id)) {
      setSaveError(`A slot with id "${draft.id}" already exists.`);
      return;
    }

    const ok = await persist(globallyEnabled, nextSlots);
    if (ok) setShowForm(false);
  };

  const toggleSlotEnabled = (id: string) => {
    const nextSlots = slots.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s));
    persist(globallyEnabled, nextSlots);
  };

  const deleteSlot = (id: string) => {
    if (!window.confirm(`Delete ad slot "${id}"? This removes it everywhere it's placed.`)) return;
    const nextSlots = slots.filter((s) => s.id !== id);
    persist(globallyEnabled, nextSlots);
  };

  const activeCount = globallyEnabled ? slots.filter((s) => s.enabled).length : 0;

  // Most ad networks bake a unique container id into each snippet, tied to that one ad unit/key.
  // Pasting the identical snippet into multiple slots makes them collide (getElementById only
  // ever finds the first one), so only one of the duplicates actually renders — silently.
  const duplicateGroups = (() => {
    const byCode = new Map<string, string[]>();
    for (const s of slots) {
      if (!s.enabled || !s.adCode.trim()) continue;
      const key = s.adCode.trim();
      byCode.set(key, [...(byCode.get(key) ?? []), s.label]);
    }
    return [...byCode.values()].filter((labels) => labels.length > 1);
  })();

  if (loading) {
    return <p className="text-sm text-muted-2">Loading ads config…</p>;
  }

  if (loadError) {
    return <p className="text-sm text-danger">{loadError}</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold text-foreground">Ads enabled site-wide</p>
          <p className="mt-0.5 text-xs text-muted-2">
            Master switch. Turning this off removes every ad from the live site immediately — no redeploy needed.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-muted-2">
            {activeCount} slot{activeCount === 1 ? "" : "s"} currently active
          </span>
          <button
            onClick={toggleGlobal}
            disabled={saving}
            role="switch"
            aria-checked={globallyEnabled}
            className={`relative h-7 w-12 shrink-0 rounded-full transition-colors disabled:opacity-50 ${
              globallyEnabled ? "bg-primary" : "bg-surface-2 border border-border"
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                globallyEnabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      {duplicateGroups.length > 0 && (
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2.5 text-xs text-amber-600">
          <p className="font-semibold">
            {duplicateGroups.length} group{duplicateGroups.length === 1 ? "" : "s"} of slots share the exact same ad
            code:
          </p>
          <ul className="mt-1 ml-4 list-disc">
            {duplicateGroups.map((labels, i) => (
              <li key={i}>{labels.join(", ")}</li>
            ))}
          </ul>
          <p className="mt-1">
            Most networks tie a unique container id to each ad unit — identical code in more than one slot means
            only one of them will actually render. Generate a separate ad unit per slot in your network&apos;s
            dashboard instead of reusing one snippet.
          </p>
        </div>
      )}

      {saveError && (
        <p className="rounded-lg border border-danger/30 bg-danger/10 px-3 py-2 text-xs text-danger">{saveError}</p>
      )}
      {justSaved && !saveError && <p className="text-xs text-success">Saved. Live on the site within ~30 seconds.</p>}

      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-foreground">Ad Slots</h2>
        <button
          onClick={startNewSlot}
          className="rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground"
        >
          + New Ad Slot
        </button>
      </div>

      {slots.length === 0 && !showForm && (
        <p className="text-sm text-muted-2">No ad slots yet. Click &quot;New Ad Slot&quot; to add one.</p>
      )}

      {slots.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-2 text-xs font-semibold uppercase tracking-wide text-muted-2">
                <th className="px-3 py-2">Label</th>
                <th className="px-3 py-2">Placement</th>
                <th className="px-3 py-2">Type</th>
                <th className="px-3 py-2">Enabled</th>
                <th className="px-3 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {slots.map((s) => (
                <tr key={s.id} className="border-b border-border last:border-0">
                  <td className="px-3 py-2.5 font-medium text-foreground">{s.label}</td>
                  <td className="px-3 py-2.5 text-muted-2">{s.placement}</td>
                  <td className="px-3 py-2.5 text-muted-2">{s.type}</td>
                  <td className="px-3 py-2.5">
                    <button
                      onClick={() => toggleSlotEnabled(s.id)}
                      disabled={saving}
                      className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
                        s.enabled ? "bg-success/15 text-success" : "bg-surface-2 text-muted-2"
                      }`}
                    >
                      {s.enabled ? "ON" : "OFF"}
                    </button>
                  </td>
                  <td className="px-3 py-2.5 text-right">
                    <button
                      onClick={() => editSlot(s)}
                      className="mr-3 text-xs font-semibold text-primary hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteSlot(s.id)}
                      className="text-xs font-semibold text-danger hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showForm && (
        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5">
          <h3 className="text-sm font-bold text-foreground">{editingId ? "Edit Ad Slot" : "New Ad Slot"}</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-xs font-semibold text-muted-2">
              Label (shown here in admin only)
              <input
                value={draft.label}
                onChange={(e) => onLabelChange(e.target.value)}
                placeholder="Below test results"
                className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-muted-2">
              Slot ID
              <input
                value={draft.id}
                disabled={!!editingId}
                onChange={(e) => {
                  setIdTouched(true);
                  setDraft((d) => ({ ...d, id: slugifyId(e.target.value) }));
                }}
                placeholder="results-banner"
                className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none focus:border-primary disabled:opacity-60"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-muted-2">
              Placement (where this shows)
              <input
                value={draft.placement}
                onChange={(e) => setDraft((d) => ({ ...d, placement: e.target.value }))}
                placeholder="test-results"
                list="known-placements"
                className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
              />
              <datalist id="known-placements">
                {KNOWN_PLACEMENTS.map((p) => (
                  <option key={p} value={p} />
                ))}
              </datalist>
              <span className="font-normal text-muted-2">
                Pick one of the existing zones to add another ad there (multiple slots can share a
                placement — they all show, stacked), or type a new placement id, but it only renders
                once that exact id is added as an &lt;AdSlot/&gt; in the code.
              </span>
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-muted-2">
              Type
              <select
                value={draft.type}
                onChange={(e) => setDraft((d) => ({ ...d, type: e.target.value as AdType }))}
                className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
              >
                {AD_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-muted-2">
              Reserved height (px)
              <input
                type="number"
                min={1}
                value={draft.height}
                onChange={(e) => setDraft((d) => ({ ...d, height: Number(e.target.value) || 250 }))}
                className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
              />
              <span className="font-normal text-muted-2">Prevents layout shift while the ad script loads.</span>
            </label>
            <label className="flex items-center gap-2 self-end pb-2 text-xs font-semibold text-muted-2">
              <input
                type="checkbox"
                checked={draft.enabled}
                onChange={(e) => setDraft((d) => ({ ...d, enabled: e.target.checked }))}
                className="h-4 w-4"
              />
              Enabled
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-muted-2 sm:col-span-2">
              Ad code (paste the full snippet from your ad network)
              <textarea
                value={draft.adCode}
                onChange={(e) => setDraft((d) => ({ ...d, adCode: e.target.value }))}
                rows={6}
                placeholder={'<script type="text/javascript">\n  atOptions = { ... };\n</script>\n<script src="..."></script>'}
                className="resize-y rounded-lg border border-border bg-surface-2 px-3 py-2 font-mono text-xs text-foreground outline-none focus:border-primary"
              />
            </label>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={saveSlot}
              disabled={saving}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-50"
            >
              {saving ? "Saving…" : editingId ? "Save Changes" : "Add Slot"}
            </button>
            <button
              onClick={cancelForm}
              className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
