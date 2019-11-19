import { greet, greet2 } from "./3-defaultVals";
import expectExport from "expect";

describe("3 Default Values", () => {
  it("should be undefined", () => {
    const res = greet();
    expect(res).toEqual("undefined-undefined");
  });
  it("should be default", () => {
    const res = greet2();
    expect(res).toEqual("stephen-white");
  });
  it("should be set", () => {
    const res = greet2("Beata");
    expect(res).toEqual("Beata-white");
  });
  it("should be set with object params", () => {
    const res = greet2({ firstName: "Alfred" });
    expect(res).toEqual("Beata-white");
  });
});
