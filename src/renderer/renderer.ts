import { createContext } from "./context";
import {
  lineCreator,
  circleCreator,
  textCreator,
  rectCreator,
  pathCreator,
  ringCreator,
} from "./shape";
import { restore, save, scale, translate, rotate } from "./transform";
import {
  CircleOptions,
  LineOptions,
  TextOptions,
  PathOptions,
  RectOptions,
  RingOptions,
} from "./shape/interface";

export function createRenderer(width: number, height: number) {
  const context = createContext(width, height); // 创建上下文信息
  return {
    // shape
    line: (options: LineOptions) => lineCreator(context, options),
    circle: (options: CircleOptions) => circleCreator(context, options),
    text: (options: TextOptions) => textCreator(context, options),
    rect: (options: RectOptions) => rectCreator(context, options),
    path: (options: PathOptions) => pathCreator(context, options),
    ring: (options: RingOptions) => ringCreator(context, options), // 绘制圆环
    // transform
    restore: () => restore(context),
    save: () => save(context),
    scale: (sx: number, sy: number) => scale(context, sx, sy),
    rotate: (theta: number) => rotate(context, theta),
    translate: (tx: number, ty: number) => translate(context, tx, ty),
    // context
    node: () => context.node, // 下面会讲解
    group: () => context.group, // 下面会讲解
  };
}
