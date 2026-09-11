import { getFile, putFile } from "@/lib/githubContent";

export const AD_TYPES = ["banner", "native", "social-bar", "popunder", "interstitial"] as const;
export type AdType = (typeof AD_TYPES)[number];

export interface AdSlotRecord {
  id: string;
  label: string;
  type: AdType;
  /** Raw ad markup from the network (script tags, container divs, etc.) — injected as-is. */
  adCode: string;
  /** Zone identifier, e.g. "test-results", "homepage-popular", "footer", "anchor". Matches an <AdSlot placement="..."/> in the code — multiple slots can share one placement and all render there, stacked, so density is controlled entirely from the admin panel. */
  placement: string;
  enabled: boolean;
  /** Reserved container height in px, to prevent layout shift while the ad script loads. */
  height: number;
  /** Reserved container width in px, matching the ad network's unit size. Omitted/0 means full width of whatever it's placed in. */
  width?: number;
}

export interface AdsConfig {
  adsGloballyEnabled: boolean;
  slots: AdSlotRecord[];
}

const CONFIG_PATH = "src/data/ads-config.json";

const DEFAULT_CONFIG: AdsConfig = { adsGloballyEnabled: false, slots: [] };

function parseConfig(raw: string): AdsConfig {
  try {
    const parsed = JSON.parse(raw);
    return {
      adsGloballyEnabled: !!parsed.adsGloballyEnabled,
      slots: Array.isArray(parsed.slots) ? parsed.slots : [],
    };
  } catch {
    return DEFAULT_CONFIG;
  }
}

/** Reads the current ads config straight from GitHub (source of truth), not the local build snapshot — so admin changes take effect without a redeploy. */
export async function getAdsConfig(): Promise<AdsConfig> {
  const file = await getFile(CONFIG_PATH);
  if (!file) return DEFAULT_CONFIG;
  return parseConfig(file.content);
}

export async function saveAdsConfig(config: AdsConfig, commitMessage: string): Promise<void> {
  const existing = await getFile(CONFIG_PATH);
  const content = JSON.stringify(config, null, 2) + "\n";
  await putFile(CONFIG_PATH, content, commitMessage, existing?.sha);
}
