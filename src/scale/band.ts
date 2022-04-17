import { createOrdinal, Scale } from "./ordinal";
import { band } from "./utils";

interface Band {
  domain: string[];
  range: number[];
  padding: number;
}

export function createBand(options: Band): Scale {
  const { bandRange, bandWidth, step } = band(options);

  const scale = createOrdinal({ domain: options.domain, range: bandRange });

  scale.bandWidth = () => bandWidth;
  scale.step = () => step;

  return scale;
}
