import { createLinear } from "./linear";

interface Time<T, P> {
  domain: [T, T];
  range: [P, P];
}

export function createTime<Date, P>({ domain, range }: Time<Date, P>) {
  const transform = (x: any): number => x.getTime(); // ? Date 类型会报错
  const transformedDomain = domain.map(transform) as [number, number];
  const linear = createLinear({ domain: transformedDomain, range });
  const scale = (x: Date) => linear(transform(x));

  scale.nice = (tickCount: number) => linear.nice(tickCount);
  scale.ticks = (tickCount: number) => linear.ticks(tickCount).map((d) => new Date(d));

  return scale;
}
