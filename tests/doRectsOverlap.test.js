import { checkRectsOverlap } from "../src/utils";

describe("checkRectsOverlap", () => {
  const f = checkRectsOverlap;
  const wall = { x1: 10, y1: 10, x2: 20, y2: 20 };

  describe("overlap", () => {
    test("B's top left corner is inside A", () => {
      const unit = { x1: 19, y1: 19, x2: 21, y2: 21 };
      expect(f(wall, unit)).toBe(true);
    });
    test("B's top right corner is inside A", () => {
      const unit = { x1: 9, y1: 19, x2: 11, y2: 21 };
      expect(f(wall, unit)).toBe(true);
    });
    test("B's bottom right corner is inside A", () => {
      const unit = { x1: 9, y1: 9, x2: 11, y2: 11 };
      expect(f(wall, unit)).toBe(true);
    });
    test("B's bottom left corner is inside A", () => {
      const unit = { x1: 19, y1: 9, x2: 21, y2: 11 };
      expect(f(wall, unit)).toBe(true);
    });
    test("B's top side is inside A", () => {
      const unit = { x1: 11, y1: 19, x2: 13, y2: 21 };
      expect(f(wall, unit)).toBe(true);
    });
    test("B's right side is inside A", () => {
      const unit = { x1: 9, y1: 11, x2: 11, y2: 13 };
      expect(f(wall, unit)).toBe(true);
    });
    test("B's bottom side is inside A", () => {
      const unit = { x1: 11, y1: 9, x2: 13, y2: 11 };
      expect(f(wall, unit)).toBe(true);
    });
    test("B's left side is inside A", () => {
      const unit = { x1: 19, y1: 11, x2: 21, y2: 13 };
      expect(f(wall, unit)).toBe(true);
    });
    test("B inside A", () => {
      const unit = { x1: 11, y1: 11, x2: 13, y2: 13 };
      expect(f(wall, unit)).toBe(true);
    });
    test("B contains A", () => {
      const unit = { x1: 9, y1: 9, x2: 21, y2: 21 };
      expect(f(wall, unit)).toBe(true);
    });
    test("B coincides with A", () => {
      const unit = { x1: 10, y1: 10, x2: 20, y2: 20 };
      expect(f(wall, unit)).toBe(true);
    });
  });

  describe("don't overlap", () => {
    test("A to the top of B", () => {
      const unit = { x1: 11, y1: 7, x2: 13, y2: 9 };
      expect(f(wall, unit)).toBe(false);
    });
    test("A to the top right of B", () => {
      const unit = { x1: 21, y1: 7, x2: 23, y2: 9 };
      expect(f(wall, unit)).toBe(false);
    });

    test("A to the right of B", () => {
      const unit = { x1: 21, y1: 11, x2: 23, y2: 13 };
      expect(f(wall, unit)).toBe(false);
    });

    test("A to the bottom right of B", () => {
      const unit = { x1: 21, y1: 21, x2: 23, y2: 23 };
      expect(f(wall, unit)).toBe(false);
    });

    test("A to the bottom of B", () => {
      const unit = { x1: 11, y1: 21, x2: 13, y2: 23 };
      expect(f(wall, unit)).toBe(false);
    });

    test("A to the bottom left of B", () => {
      const unit = { x1: 7, y1: 21, x2: 9, y2: 23 };
      expect(f(wall, unit)).toBe(false);
    });

    test("A to the left of B", () => {
      const unit = { x1: 7, y1: 11, x2: 9, y2: 13 };
      expect(f(wall, unit)).toBe(false);
    });

    test("A to the top left of B", () => {
      const unit = { x1: 7, y1: 7, x2: 9, y2: 9 };
      expect(f(wall, unit)).toBe(false);
    });
  });
});
