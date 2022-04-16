import { Shape } from "./shape/interface";

export function createSVGElement(type: string) {
  return document.createElementNS("http://www.w3.org/2000/svg", type);
}

export function mount(parent: SVGElement, child: SVGElement) {
  parent.appendChild(child);
}

// 这里需要把类似 strokeWidth 的属性转换成 stroke-width 的形式
// 思路就是将大写字母替成 - + 对应的小写字母的形式
// 下面涉及到正则匹配，不太了解的同学可以去下面的链接学习：
// https://juejin.cn/post/6844903487155732494
export function applyAttributes(element: SVGElement, attributes: Shape) {
  for (const [key, value] of Object.entries(attributes)) {
    const kebabCaseKey = key.replace(
      /[A-Z]/g,
      (d) => `-${d.toLocaleLowerCase()}`,
    );
    element.setAttribute(kebabCaseKey, value);
  }
}

export function applyTransform(element: SVGElement, transform: string) {
  const oldTransform = element.getAttribute("transform") || "";
  // 将新的变换指定到后面的变换后，这里需要字符串拼接
  const prefix = oldTransform ? `${oldTransform} ` : "";
  element.setAttribute("transform", `${prefix}${transform}`);
}
