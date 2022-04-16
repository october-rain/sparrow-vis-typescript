import { shape } from "./shape";
import { PathOptions } from "./interface";
import { Context } from "../context";

// path 介绍：https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths
// path 的属性 d （路径）是一个字符串，拼接起来比较麻烦，这里我们通过数组去生成
// [
//  ['M', 10, 10],
//  ['L', 100, 100],
//  ['L', 100, 10],
//  ['Z'],
// ];
// 上面的二维数组会被转换成如下的字符串
// 'M 10 10 L 100 100 L 100 10 Z'
export function pathCreator(context: Context, attributes: PathOptions) {
  const { d } = attributes;
  return shape("path", context, { ...attributes, d: d.flat().join(" ") });
}
