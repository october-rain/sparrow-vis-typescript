import { equal } from "./utils";

interface Ordinal<T, P> {
  domain: T[];
  range: P[];
}
export interface Scale {
  (x: string): string | number;
  bandWidth?: () => number;
  step?: () => number;
}

export function createOrdinal<T extends string, P extends string | number>({
  domain,
  range,
}: Ordinal<T, P>) {
  const scale: Scale = (x: string) => {
    const index = domain.findIndex((d) => equal(d, x));
    return range[index % range.length];
  };

  return scale;
}
