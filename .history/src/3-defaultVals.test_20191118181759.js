import {
  greet,
  greet2,
  greet3,
  greet4AndCall,
  greetAndCall
} from "./3-defaultVals";
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
    const res = greet3({ firstName: "Alfred" });
    expect(res).toEqual("Alfred-white");
  });
  it("should be set with object params and called", () => {
    const res = greet4AndCall({ firstName: "Thyra" });
    expect(res).toEqual("Thyra-Westbom");
  });
  it("should be set with object params and called with arrows", () => {
    const res = greetAndCall({ firstName: "Casper" });
    expect(res).toEqual("Casper-Westbom");
  });
});
