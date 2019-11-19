import products, { totalSum, filterUnderPrice, mapReport } from "./7-arrays";
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

  it("should can map", () => {
    const res = mapReport(filterUnderPrice(5)(products));
    expect(res[0]).toEqual("3,bacon,$4");
  });
});
