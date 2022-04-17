import { createThreshold } from "./threshold";

interface Quantize {
  domain: number[];
  range: string[];
}

export function createQuantize(options: Quantize) {
  const { domain: [d0, d1], range, ...rest } = options;
  const n = range.length - 1;
  const step = (d1 - d0) / (n + 1);
  const quantizeDomain = new Array(n).fill(0).map((_, i) => step * (i + 1));
  return createThreshold({ domain: quantizeDomain, range, ...rest });
}
