import { Context } from "../context";

// 更新当前节点上一层的节点
export function restore(context: Context) {
  const { group } = context;
  const { parentNode } = group;
  context.group = parentNode as SVGElement;
}
