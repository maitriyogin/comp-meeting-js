import products, {
  totalSum,
  filterUnderPrice,
  mapReport,
  sortOnPrice
} from "./7-arrays";

import * as R from "ramda";

describe("7 Arrays", () => {
  it("can reduce", () => {
    const res = totalSum(products);
    expect(res).toEqual(42);
  });

  it("can filter", () => {
    const res = totalSum(filterUnderPrice(5)(products));
    expect(res).toEqual(5);
  });

  it("can map", () => {
    const res = mapReport(filterUnderPrice(5)(products));
    expect(res[0]).toEqual("3,bacon,$4");
  });
  it("can sort on price", () => {
    const res = sortOnPrice(filterUnderPrice(5)(products));
    expect(res[0].id).toEqual(5);
  });

  it("can compose", () => {
    R.pipe(filterUnderPrice(10), sortOnPrice, totalSum)(products);
  });
});
