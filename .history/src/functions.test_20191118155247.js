import { sum } from "./funtions";

describe("Sum", () => {
  it("should sum 2 and 1", () => {
    const res = sum(2, 3);
    expect(res).toEqual(3);
  });
});
