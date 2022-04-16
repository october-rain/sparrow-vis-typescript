export function createDiv() {
  const div = document.createElement("div");
  document.body.appendChild(div);
  return div;
}

export function mount(parent: HTMLDivElement, child: SVGElement) {
  if (parent) {
    parent.appendChild(child);
  }
}

export function getAttributes(node: SVGElement, attributes: string[]) {
  return attributes.reduce((total: any, cur) => (total[cur] = node.getAttribute(cur), total), {});
}
