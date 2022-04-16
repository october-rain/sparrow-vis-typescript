export type Type = "line" | "circle" | "text" | "rect" | "path" | "ring";

export interface Context {
  node?: SVGElement;
  group: SVGElement;
}

export type Shape = Line | Circle | Text | Rect | Path | Ring;
export type Line = LineOptions;
export type Circle = CircleOptions;
export type Text = Omit<TextOptions, "text">;
export type Rect = RectOptions;
export type Path = Omit<PathOptions, "d"> & { d: string };
export type Ring = RingOptions;

export interface LineOptions {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  stroke: string;
}

export interface CircleOptions {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
}

export interface TextOptions {
  x: number;
  y: number;
  text: string;
}

export interface RectOptions {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface PathOptions {
  d: (string | number)[][];
  fill: string;
  stroke: string;
}

export interface RingOptions {
  cx: number;
  cy: number;
  r1: number;
  r2: number;
  strokeWidth: number;
  stroke?: string;
  fill: string;
}
