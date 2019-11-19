import * as api from "./8-promises";
import expectExport from "expect";

describe("8 Promises", () => {
  it("can fetch ham with then ", async () => {
    return api.fetchProduct("ham").then(product => expect(product).toEqual(0));
  });
});
