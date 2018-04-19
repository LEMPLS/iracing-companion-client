export const formatRelativeTime = (value: number, decimals?: number): string =>
  (value > 0 ? '+' : '') + value.toFixed(decimals || 2);
