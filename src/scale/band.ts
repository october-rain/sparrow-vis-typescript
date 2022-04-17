import { createOrdinal } from "./ordinal";
import { band } from "./utils";

interface Band {
  domain: string[];
  range: number[];
  padding: number;
}

export function createBand(options: Band) {
  const { bandRange, bandWidth, step } = band(options);

  const scale = createOrdinal({ domain: options.domain, range: bandRange });

  (scale as any).bandWidth = () => bandWidth;
  (scale as any).step = () => step;

  return scale;
}
