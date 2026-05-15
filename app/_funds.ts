// Display-name lookup for known fund slugs. Unknown slugs fall back to
// a title-cased version of the slug.

export const FUND_NAMES: Record<string, string> = {
  "peak-xv": "Peak XV",
  peakxv: "Peak XV",
  sequoia: "Sequoia",
  accel: "Accel",
  lightspeed: "Lightspeed",
  elevation: "Elevation",
  matrix: "Matrix",
  z47: "Z47",
  nexus: "Nexus",
  kalaari: "Kalaari",
  "3one4": "3one4",
  stellaris: "Stellaris",
  a91: "A91",
  premji: "Premji Invest",
  westbridge: "WestBridge",
  bessemer: "Bessemer",
  "general-catalyst": "General Catalyst",
  tiger: "Tiger",
  softbank: "SoftBank",
  fireside: "Fireside",
  prime: "Prime Venture Partners",
  "info-edge": "Info Edge Ventures",
  acumen: "Acumen",
  chiratae: "Chiratae",
  lightrock: "Lightrock",
  tvs: "TVS Capital",
  trident: "Trident Growth",
  avataar: "Avataar",
  "iron-pillar": "Iron Pillar",
  "eight-roads": "Eight Roads",
  waterbridge: "WaterBridge",
  ivycap: "IvyCap",
  chryscapital: "ChrysCapital",
  steadview: "Steadview",
  artha: "Artha",
};

export function fundDisplayName(slug: string): string {
  const key = slug.toLowerCase();
  if (FUND_NAMES[key]) return FUND_NAMES[key];
  return key
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
