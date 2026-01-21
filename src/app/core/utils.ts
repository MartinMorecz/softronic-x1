export function formatUptime(seconds?: number): string {
  if (!seconds && seconds !== 0) return '—';
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

export function clampPct(v?: number): number | undefined {
  if (v === undefined || v === null) return undefined;
  return Math.max(0, Math.min(100, v));
}

export function ageFromDate(isoDate?: string): string {
  if (!isoDate) return '—';
  const dt = new Date(isoDate);
  const now = new Date();
  const years = (now.getTime() - dt.getTime()) / (365.25 * 24 * 3600 * 1000);
  if (years < 1) return `${Math.round(years * 12)} mo`;
  return `${years.toFixed(1)} yr`;
}
