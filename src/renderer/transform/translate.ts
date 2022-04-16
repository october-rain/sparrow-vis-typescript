import { transform } from "./transform";
import { Context } from "../context";

export function translate(context: Context, tx: number, ty: number) {
  transform("translate", context, tx, ty);
}
