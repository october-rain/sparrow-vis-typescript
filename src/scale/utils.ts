export function band({
  domain,
  range,
  padding,
}: {
  domain: string[];
  range: number[];
  padding: number;
}) {
  const [r0, r1] = range;
  const n = domain.length;
  const step = (r1 - r0) / (n + padding);
  const bandWidth = step * (1 - padding);
  const interval = step - bandWidth;
  const x = (_: any, i: number) => r0 + interval + step * i;
  return {
    step,
    bandWidth,
    bandRange: new Array(n).fill(0).map(x),
  };
}

export function equal(a: string, b: string) {
  return JSON.stringify(a) === JSON.stringify(b);
}

export function normalize(value: number, start: number, stop: number) {
  return (value - start) / (stop - start);
}

export function ceil(n: number, base: number) {
  return base * Math.ceil(n / base);
}

export function floor(n: number, base: number) {
  return base * Math.floor(n / base);
}

export function round(n: number) {
  return Math.round(n * 1e12) / 1e12;
}

export function log(n: number, base: number) {
  return Math.log(n) / Math.log(base);
}

// @see https://github.com/d3/d3-array/blob/main/src/ticks.js#L46
export function tickStep(min: number, max: number, count: number) {
  const e10 = Math.sqrt(50);
  const e5 = Math.sqrt(10);
  const e2 = Math.sqrt(2);
  const step0 = Math.abs(max - min) / Math.max(0, count);
  let step1 = 10 ** Math.floor(Math.log(step0) / Math.LN10);
  const error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return step1;
}

// 获得均匀的范围
export function nice(
  domain: [number, number],
  interval: { floor: (x: number) => number; ceil: (x: number) => number },
) {
  const [min, max] = domain;
  return [interval.floor(min), interval.ceil(max)];
}

// 获得均匀的刻度
export function ticks(min: number, max: number, count: number) {
  const step = tickStep(min, max, count);
  const start = Math.ceil(min / step);
  const stop = Math.floor(max / step);
  const n = Math.ceil(stop - start + 1);
  const values = new Array(n);
  for (let i = 0; i < n; i += 1) {
    values[i] = round((start + i) * step);
  }
  return values;
}
