import * as api from "./8-promises";
import expectExport from "expect";

describe("8 Promises", async () => {
  it("can fetch ham with then ", () => {
    api.fetchProduct("ham").then(product => expect());
  });
});
