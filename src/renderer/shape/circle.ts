import { shape } from "./shape";
import { CircleOptions, Context } from "./interface";

export function circleCreator(context: Context, attributes: CircleOptions) {
  return shape("circle", context, attributes);
}
