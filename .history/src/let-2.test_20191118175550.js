import { var1, let1, scopeCreep2 } from "./let-2";
import expectExport from "expect";

describe("2 Let", () => {
  it("var should say bye", () => {
    const res = var1();
    expect(res).toEqual("bye");
  });
  it("var should say hiya", () => {
    const res = let1();
    expect(res).toEqual("hiya");
  });

  it("should scope creep", () => {
    scopeCreep2().forEach((f, idx) => {
      console.log(f());
      // expect(f()).toEqual(idx));
    });
  });
});
