export const formatTime = (value: number): string =>
  ((value > 0 ? '+' : '') + value).toString();
