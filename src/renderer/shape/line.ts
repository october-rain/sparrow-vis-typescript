import { shape } from "./shape";
import { LineOptions } from "./interface";
import { Context } from "../context";

export function lineCreator(context: Context, attributes: LineOptions) {
  return shape("line", context, attributes);
}
