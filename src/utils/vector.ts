export function closeTo(x: number, y: number, tol = 1e-5) {
  return Math.abs(x - y) < tol;
}

export function equal([x0, y0]: number[], [x1, y1]: number[]) {
  return closeTo(x0, x1) && closeTo(y0, y1);
}

export function dist([x0, y0]: number[], [x1 = 0, y1 = 0] = []) {
  return Math.sqrt((x0 - x1) ** 2 + (y0 - y1) ** 2);
}

export function sub([x1, y1]: number[], [x0, y0]: number[]) {
  return [x1 - x0, y1 - y0];
}

export function angle([x, y]: number[]) {
  const theta = Math.atan2(y, x);
  return theta;
}

// TODO: refactor
export function angleBetween(v0: number[], v1: number[]) {
  const a0 = angle(v0);
  const a1 = angle(v1);
  if (a0 >= 0 && a1 >= 0) {
    if (Math.abs(a0) < Math.abs(a1)) return Math.abs(a0 - a1);
    return Math.PI * 2 - Math.abs(a0 - a1);
  }
  if (a0 < 0 && a1 < 0) {
    if (Math.abs(a0) > Math.abs(a1)) return Math.abs(a0 - a1);
    return Math.PI * 2 - Math.abs(a0 - a1);
  }
  if (a0 < 0 && a1 > 0) return Math.abs(a0) + a1;
  return Math.PI * 2 - a0 - Math.abs(a1);
}

export function fromDegree(radian: number) {
  return (radian * 180) / Math.PI;
}
