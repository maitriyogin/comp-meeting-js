import { dontChangeMe } from "./4-const";
describe("4 Const", () => {
  it("should throw an error", () => {
    expect(dontChangeMe()).toThrow();
  });
});
