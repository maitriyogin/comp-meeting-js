import { spread } from "./5-spread";

describe("5 Spread", () => {
  it("should spread an array", () => {
    const res = spread([1])([2]);
    expect(res).toEqual([1, 2]);
  });
});
