import { normalize, tickStep, nice, floor, ceil, ticks } from "./utils";

interface Linear<T, P> {
  domain: [T, T];
  range: [P, P];
  interpolate?: Function;
}

export function interpolateNumber(t: number, start: number, stop: number) {
  return start + t * (stop - start);
  // return start * (1 - t) + stop * t;
}

export function createLinear<T extends number, P>({
  domain: [d0, d1],
  range: [r0, r1],
  interpolate = interpolateNumber,
}: Linear<T, P>) {
  const scale = (x: number) => {
    const t = normalize(x, d0, d1);
    return interpolate(t, r0, r1);
  };

  scale.ticks = (tickCount: number) => ticks(d0, d1, tickCount);
  scale.nice = (tickCount: number) => {
    const step = tickStep(d0, d1, tickCount);
    // todo 泛型有点让我迷茫 [d0, d1]
    [d0 as number, d1 as number] = nice([d0, d1], {
      floor: (x: number) => floor(x, step),
      ceil: (x: number) => ceil(x, step),
    });
  };

  return scale;
}
