import { equal } from "./utils";

interface Ordinal<T, P> {
  domain: T[];
  range: P[];
}

export function createOrdinal<T extends string, P extends string | number>({
  domain,
  range,
}: Ordinal<T, P>) {
  return (x: string) => {
    const index = domain.findIndex((d) => equal(d, x));
    return range[index % range.length];
  };
}
