export const formatRelativeTime = (value: number, decimals: number = 2): string =>
  (value > 0 ? '+' : '') + value.toFixed(decimals);
