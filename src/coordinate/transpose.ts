import { reflectX, translate } from "./affine";

function transform() {
  return {
    type: "transpose",
    transform: ([px, py]: number[]) => [py, px],
  };
}

export function transpose() {
  return () => [
    transform(),
    translate(-0.5, -0.5),
    reflectX(),
    translate(0.5, 0.5),
  ];
}
