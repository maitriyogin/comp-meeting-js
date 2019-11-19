import { greet } from "./3-defaultVals";
import expectExport from "expect";

describe("3 Default Values", () => {
  it("should be undefined", () => {
    const res = greet();
    expect(res).toEqual("undefined-undefined");
  });
});
