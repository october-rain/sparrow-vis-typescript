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
export function applyAttributes(element, attributes) {
  for (const [key, value] of Object.entries(attributes)) {
    const kebabCaseKey = key.replace(
      /[A-Z]/g,
      (d) => `-${d.toLocaleLowerCase()}`,
    );
    element.setAttribute(kebabCaseKey, value);
  }
}
