import { goUp, goRight, goDown, goLeft } from "../src/utils";

describe("go", () => {
  const size = 10;
  const step = 1;
  const customStep = 3;
  const _x = 0;
  const _y = 0;
  const initial = {
    size: size,
    step: step,
    x1: _x - size / 2,
    x: _x,
    x2: _x + size / 2,
    y1: _y - size / 2,
    y: _y,
    y2: _y + size / 2
  };
  const { x, x1, x2, y, y1, y2 } = initial;

  test("goUp", () => {
    const unit = { ...initial };
    goUp(unit);
    const expected = { ...initial, y1: y1 - step, y: y - step, y2: y2 - step };
    expect(unit).toEqual(expected);
  });
  test("goRight", () => {
    const unit = { ...initial };
    goRight(unit);
    const expected = { ...initial, x1: x1 + step, x: x + step, x2: x2 + step };
    expect(unit).toEqual(expected);
  });
  test("goDown", () => {
    const unit = { ...initial };
    goDown(unit);
    const expected = { ...initial, y1: y1 + step, y: y + step, y2: y2 + step };
    expect(unit).toEqual(expected);
  });
  test("goLeft", () => {
    const unit = { ...initial };
    goLeft(unit);
    const expected = { ...initial, x1: x1 - step, x: x - step, x2: x2 - step };
    expect(unit).toEqual(expected);
  });

  test("goUp with custom step", () => {
    const unit = { ...initial };
    goUp(unit, customStep);
    const expected = {
      ...initial,
      y1: y1 - customStep,
      y: y - customStep,
      y2: y2 - customStep
    };
    expect(unit).toEqual(expected);
  });
  test("goRight with custom step", () => {
    const unit = { ...initial };
    goRight(unit, customStep);
    const expected = {
      ...initial,
      x1: x1 + customStep,
      x: x + customStep,
      x2: x2 + customStep
    };
    expect(unit).toEqual(expected);
  });
  test("goDown with custom step", () => {
    const unit = { ...initial };
    goDown(unit, customStep);
    const expected = {
      ...initial,
      y1: y1 + customStep,
      y: y + customStep,
      y2: y2 + customStep
    };
    expect(unit).toEqual(expected);
  });
  test("goLeft with custom step", () => {
    const unit = { ...initial };
    goLeft(unit, customStep);
    const expected = {
      ...initial,
      x1: x1 - customStep,
      x: x - customStep,
      x2: x2 - customStep
    };
    expect(unit).toEqual(expected);
  });
});
