import { greet, greet2 } from "./3-defaultVals";
import expectExport from "expect";

describe("3 Default Values", () => {
  it("should be undefined", () => {
    const res = greet();
    expect(res).toEqual("undefined-undefined");
  });
  it("should be undefined", () => {
    const res = greet2();
    expect(res).toEqual("stephen-white");
  });
});
