import { createLinear } from "./linear";
import { ticks, nice, log } from "./utils";

interface Log {
  domain: [number, number];
  range: [number, number];
  base?: number;
}

export function createLog({ domain, base, range }: Log) {
  const transform = (x: any) => Math.log(x);
  let linear = createLinear({ domain: domain.map(transform) as [number, number], range });
  const scale = (x: any) => linear(transform(x));

  scale.ticks = (tickCount: number) => {
    const [min, max] = domain.map((x) => log(x, base));
    return ticks(min, max, tickCount).map((x) => base ** x);
  };

  scale.nice = () => {
    domain = nice(domain, {
      floor: (x) => base ** Math.floor(log(x, base)),
      ceil: (x) => base ** Math.ceil(log(x, base)),
    }) as [number, number];
    linear = createLinear({ domain: domain.map(transform) as [number, number], range });
  };

  return scale;
}
