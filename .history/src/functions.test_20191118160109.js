import { sum, sumArrow1, sumArrow2 } from "./functions";

describe("Sum", () => {
  it("should sum 2 and 1", () => {
    const res = sum(2, 1);
    expect(res).toEqual(3);
  });
});
