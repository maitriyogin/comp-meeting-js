import { dontChangeMe } from "./4-const";
import expectExport from "expect";
describe("4 Const", () => {
  it("should throw an error", () => {
    // expect(dontChangeMe()).toThrow();
  });

  it("should can change an object", () => {
    const apple = { pips: 4 };
    apple.pips = 8;
    expect(apple.pips).toEqual(8);
  });
});
