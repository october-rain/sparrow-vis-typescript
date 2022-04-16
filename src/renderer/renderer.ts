import { createContext } from "./context";
import {
  lineCreator,
  circleCreator,
  textCreator,
  rectCreator,
  pathCreator,
  ringCreator,
} from "./shape";
// import {
//   restore, save, scale, translate, rotate,
// } from "./transform";
import { CircleOptions, LineOptions, TextOptions, PathOptions, RectOptions, RingOptions } from "./shape/interface";

export function createRenderer(width: number, height: number) {
  const context = createContext(width, height); // 创建上下文信息
  return {
    line: (options: LineOptions) => lineCreator(context, options),
    circle: (options: CircleOptions) => circleCreator(context, options),
    text: (options: TextOptions) => textCreator(context, options),
    rect: (options: RectOptions) => rectCreator(context, options),
    path: (options: PathOptions) => pathCreator(context, options),
    ring: (options: RingOptions) => ringCreator(context, options), // 绘制圆环
    // restore: () => restore(context),
    // save: () => save(context),
    // scale: (...args) => scale(context, ...args),
    // rotate: (...args) => rotate(context, ...args),
    // translate: (...args) => translate(context, ...args),
    node: () => context.node, // 下面会讲解
    group: () => context.group, // 下面会讲解
  };
}
