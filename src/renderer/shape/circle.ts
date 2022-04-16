import { shape } from "./shape";
import { CircleOptions } from "./interface";
import { Context } from "../context";

export function circleCreator(context: Context, attributes: CircleOptions) {
  return shape("circle", context, attributes);
}
