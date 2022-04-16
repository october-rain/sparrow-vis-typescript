import { transform } from "./transform";
import { Context } from "../context";

export function scale(context: Context, sx: number, sy: number) {
  transform("scale", context, sx, sy);
}
