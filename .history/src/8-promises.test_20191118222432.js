import * as api from "./8-promises";
import expectExport from "expect";

describe("8 Promises", () => {
  describe("", () => {
    it("can catch miso", async () => {
      return api
        .fetchProduct("miso")
        .catch(e => expect(e).toEqual("No product found with name miso!"));
    });
    it("can find Ham", async () => {
      return api
        .fetchProduct("ham")
        .then(product =>
          expect(product).toEqual([{ id: 5, name: "ham", price: 1 }])
        );
    });
  });
});
