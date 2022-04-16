import { shape } from "./shape";
import { Context, LineOptions } from "./interface";

export function lineCreator(context: Context, attributes: LineOptions) {
  return shape("line", context, attributes);
}
