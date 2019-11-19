import { var1 } from "./let-2";
import expectExport from "expect";

describe("2 Let", () => {
  it("var should say bye", () => {
    const var1 = var1();
    expect(var1).toEqual("bye");
  });
});
