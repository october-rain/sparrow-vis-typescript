import { createLinear } from "../scale";

interface Cartesian {
  x: number;
  y: number;
  width: number;
  height: number;
}

function transform(x: number, y: number, width: number, height: number) {
  const tx = createLinear({ domain: [0, 1], range: [x, x + width] });
  const ty = createLinear({ domain: [0, 1], range: [y, y + height] });
  return {
    type: "cartesian",
    transform: ([px, py]: number[]) => [tx(px), ty(py)],
  };
}

export function cartesian() {
  return ({ x, y, width, height }: Cartesian) => transform(x, y, width, height);
}
