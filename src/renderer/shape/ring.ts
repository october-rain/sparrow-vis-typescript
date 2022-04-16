import { circleCreator } from "./circle";
import { Context, RingOptions } from "./interface";

export function ringCreator(context: Context, attributes: RingOptions) {
  // r1 是内圆的半径，r2 是外圆的半径
  const {
    cx, cy, r1, r2, ...styles
  } = attributes;
  const { stroke, strokeWidth, fill } = styles;
  const defaultStrokeWidth = 1;
  const innerStroke = circleCreator(context, {
    fill: "transparent",
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r1,
  });
  const ring = circleCreator(context, {
    ...styles,
    strokeWidth: r2 - r1 - (strokeWidth || defaultStrokeWidth),
    stroke: fill,
    fill: "transparent",
    cx,
    cy,
    r: (r1 + r2) / 2,
  });
  const outerStroke = circleCreator(context, {
    fill: "transparent",
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r2,
  });
  return [innerStroke, ring, outerStroke];
}
