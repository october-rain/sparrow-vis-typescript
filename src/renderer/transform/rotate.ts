import { transform } from "./transform";
import { Context } from "../context";

export function rotate(context: Context, theta: number) {
  transform("rotate", context, theta);
}
