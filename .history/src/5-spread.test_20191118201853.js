import { spread, spreadObj } from "./5-spread";

describe("5 Spread", () => {
  describe("Spread an array", () => {
    it("should spread an array", () => {
      const res = spread([1])([2]);
      expect(res).toEqual([1, 2]);
    });
    it("should deconstruct an array", () => {
      const [a, b, c, ...rest] = spread([1, 2, 3])([4, 5]);
      expect(a).toEqual(1);
      expect(b).toEqual(2);
      expect(c).toEqual(3);
      expect(rest).toEqual([4, 5]);
    });
  });
  describe("Spread an object", () => {
    it("should spread an object", () => {
      const res = spreadObj({ a: 1 })({ b: 2 });
      expect(res).toEqual({ a: 1, b: 2 });
    });
    it("should deconstruct an array", () => {
      const { a, b } = spreadObj({ a: 1 })({ b: 2, c: 2, d: 3, e: 4 });
      expect(a).toEqual(1);
      expect(b).toEqual(2);
      expect(rest).toEqual([4, 5]);
    });
  });
});
