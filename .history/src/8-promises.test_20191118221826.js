import * as api from "./8-promises";
import expectExport from "expect";

describe("8 Promises", () => {
  it("can fetch ham with then ", async () => {
    return api
      .fetchProduct("miso")
      .catch(e => expect(product).toEqual("No Product found with name miso"));
  });
});
