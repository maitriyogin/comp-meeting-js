import products, { totalSum } from "./7-arrays";
import expectExport from "expect";

describe("7 Arrays", () => {
  it("should can reduce", () => {
    const res = totalSum(products);
    expect(res).toEqual(48);
  });
});
