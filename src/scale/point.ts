import { createBand } from "./band";

interface Point {
  domain: string[];
  range: number[];
}

export function createPoint(options: Point) {
  return createBand({ ...options, padding: 1 });
}
