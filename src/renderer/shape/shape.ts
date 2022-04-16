import { applyAttributes, createSVGElement, mount } from "../utils";
import { Type, Context, Shape } from "./interface";

export function shape(type: Type, context: Context, attributes: Shape) {
  const { group } = context; // 挂载元素
  const el = createSVGElement(type); // 创建对应的元素
  applyAttributes(el, attributes); // 设置属性

  mount(group, el); // 挂载
  return el; // 返回该元素
}
