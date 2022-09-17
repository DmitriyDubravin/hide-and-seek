import { addUnitToObstacles } from "../src/utils";

describe("addUnitToObstacles", () => {
  const f = addUnitToObstacles;
  test("properly adds unit to obstacles", () => {
    const unit = { id: 1, x: 0 };
    const obstacles = {};
    f(unit, obstacles);
    const expected = { 1: unit };
    expect(obstacles).toEqual(expected);
  });
});
