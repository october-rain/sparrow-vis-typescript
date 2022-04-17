import { createRenderer } from "../../src/renderer";
import { createDiv, mount } from "../utils";

describe("transform", () => {
  test("Renderer should apply specified transforms and can save or restore transforms context.", () => {
    const renderer = createRenderer(600, 400);

    renderer.save();
    renderer.translate(200, 100);
    renderer.rotate(60);
    renderer.scale(2, 3);
    const r1 = renderer.rect({
      x: 0,
      y: 0,
      width: 50,
      height: 50,
      className: "r1",
    });
    renderer.save();

    const r2 = renderer.rect({
      x: 0,
      y: 0,
      width: 50,
      height: 50,
      className: "r2",
    });
    renderer.restore();

    const r3 = renderer.rect({
      x: 100,
      y: 0,
      width: 50,
      height: 50,
      className: "r3",
    });
    renderer.restore();

    const r4 = renderer.rect({
      x: 0,
      y: 100,
      width: 50,
      height: 50,
      className: "r4",
    });

    mount(createDiv(), renderer.node());

    expect((r1.parentNode as SVGAElement).getAttribute("transform")).toBe(
      "translate(200, 100) rotate(60) scale(2, 3)",
    );
    expect((r2.parentNode as SVGAElement).getAttribute("transform")).toBeNull();
    expect((r3.parentNode as SVGAElement).getAttribute("transform")).toBe(
      "translate(200, 100) rotate(60) scale(2, 3)",
    );
    expect((r4.parentNode as SVGAElement).getAttribute("transform")).toBeNull();
  });
});
