import * as api from "./8-promises";
import expectExport from "expect";

describe("8 Promises", () => {
  describe("then", () => {
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
  describe("async await", () => {
    it("can catch miso rejects", async () => {
      expect(api.fetchProduct("miso")).rejects.toEqual(
        "No product found with name miso!"
      );
    });
    it("can catch miso try catch", async () => {
      try {
        await api.fetchProduct("miso");
      } catch (e) {
        expect(e).toEqual("No product found with name miso!");
      }
    });
    it("can find Ham", async () => {
      const product = await api.fetchProduct("ham");
      expect(product).toEqual([{ id: 5, name: "ham", price: 1 }]);
    });

    it("can catch product id 1000 try catch", async () => {
      try {
        await api.fetchProductDetails(1000);
      } catch (e) {
        expect(e).toEqual("product 1000 not found!");
      }
    });
    it("can find Ham", async () => {
      const product = await api.fetchProduct("ham");
      expect(product).toEqual([{ id: 5, name: "ham", price: 1 }]);
    });
  });
});
