import { sum, sumArrow1, sumArrow2, deliveryBody } from "./functions-1";

describe("Functions", () => {
  describe("Sum", () => {
    it("function should sum 2 and 1", () => {
      const res = sum(2, 1);
      expect(res).toEqual(3);
    });
    it("arrow 1 should sum 2 and 1", () => {
      const res = sumArrow1(2, 1);
      expect(res).toEqual(3);
    });
    it("arrow 2 should sum 2 and 1", () => {
      const res = sumArrow2(2, 1);
      expect(res).toEqual(3);
    });
  });

  describe("Delivery function", () => {
    it("should deliver my message", () => {});
  });
});
