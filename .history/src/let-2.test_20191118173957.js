import { var1 } from "./let-2";
import expectExport from "expect";

describe("2 Let", () => {
  it("var should say bye", () => {
    const res = var1();
    expect(res).toEqual("bye");
  });
});
