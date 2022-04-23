export function translate(tx = 0, ty = 0) {
  return {
    type: "translate",
    transform: ([px, py]: number[]) => [px + tx, py + ty],
  };
}

export function reflect() {
  return {
    type: "reflect",
    transform: ([px, py]: number[]) => [px * -1, py * -1],
  };
}

export function reflectX() {
  return {
    type: "reflectX",
    transform: ([px, py]: number[]) => [px * -1, py],
  };
}

export function reflectY() {
  return {
    type: "reflectY",
    transform: ([px, py]: number[]) => [px, py * -1],
  };
}

export function scale(sx = 1, sy = 1) {
  return {
    type: "scale",
    transform: ([px, py]: number[]) => [px * sx, py * sy],
  };
}
