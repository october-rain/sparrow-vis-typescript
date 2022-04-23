import { compose, identity } from "../utils";

interface CoordinateOptions {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  transforms: Function[];
}

export function createCoordinate(options: CoordinateOptions) {
  const { x, y, width, height, transforms: createTransforms } = options;
  const coordinates = createTransforms
    .map((createTransform) => createTransform({ x, y, width, height }))
    .flat();

  const types = coordinates.map((d) => d.type);
  const transforms: Function[] = coordinates.map((d) => d.transform);
  const [fn, ...rest] = transforms;
  const output = transforms.length ? compose(fn, rest) : identity;

  output.isPolar = () => types.indexOf("polar") !== -1;

  output.isTranspose = () => {
    const count = types.filter((d) => d === "transpose").length;
    return count % 2 !== 0;
  };

  output.getCenter = () => {
    const cx = x + width / 2;
    const cy = y + height / 2;
    return [cx, cy];
  };

  return output;
}
