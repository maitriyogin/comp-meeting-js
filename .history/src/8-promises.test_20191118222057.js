import * as api from "./8-promises";
import expectExport from "expect";

describe("8 Promises", () => {
  it("can catch miso", async () => {
    return api
      .fetchProduct("miso")
      .catch(e => expect(e).toequal("no product found with name miso!"));
  });
  it("can find Ham", async () => {
    return api
      .fetchProduct("miso")
      .catch(e => expect(e).toequal("no product found with name miso!"));
  });
});
