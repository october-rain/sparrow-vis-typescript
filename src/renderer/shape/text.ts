import { shape } from "./shape";
import { TextOptions } from "./interface";
import { Context } from "../context";

// text 元素是将展示内容放在标签内部，而不是作为标签的属性
// <text text='content' /> ❌
// <text>content</text> ✅
export function textCreator(context: Context, attributes: TextOptions) {
  const { text, ...rest } = attributes;
  const textElement = shape("text", context, rest);
  textElement.textContent = text; // 通过 textContent 设置标签内的内容
  return textElement;
}
