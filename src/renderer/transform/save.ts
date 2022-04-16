import { createSVGElement, mount } from "../utils";
import { Context } from "../context";

// 更新当前挂载节点，使得当前变换只会影响当前挂载节点下面的元素即可
export function save(context: Context) {
  const { group } = context;
  const newGroup = createSVGElement("g");
  mount(group, newGroup);
  context.group = newGroup;
}
