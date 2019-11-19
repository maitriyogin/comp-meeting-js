import products, { totalSum, filterUnderPrice } from "./7-arrays";
import expectExport from "expect";

describe("7 Arrays", () => {
  it("should can reduce", () => {
    const res = totalSum(products);
    expect(res).toEqual(42);
  });

  it("should can filter", () => {
    const res = totalSum(filterUnderPrice(5)(products));
    expect(res).toEqual(5);
  });
});
