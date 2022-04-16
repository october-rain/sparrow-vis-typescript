import { applyTransform } from "../utils";
import { Context } from "../context";

type Type = "scale" | "translate" | "rotate";

export function transform(type: Type, context: Context, ...params: number[]) {
  // type 是希望的变换种类：scale，translate，rotate 等
  const { group } = context;
  applyTransform(group, `${type}(${params.join(", ")})`);
}
