import {
  sum,
  sumArrow1,
  sumArrow2,
  deliveryBody,
  deliveryBody2,
  deliveryBody3,
  deliveryBody4
} from "./functions-1";

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
    it("should deliver my message", () => {
      const res = deliveryBody.receive();
      expect(res).toEqual("Hiya Stephen");
    });
    it("should deliver my message 2", () => {
      const res = deliveryBody2.receive();
      expect(res).toEqual("Hiya Stephen");
    });
    it("should deliver my message 3", () => {
      const res = deliveryBody3.receive();
      expect(res).toEqual("Hiya Stephen");
    });
    it("should deliver my message 4", () => {
      const res = deliveryBody4.receive();
      expect(res).toEqual("Hiya Stephen");
    });
  });
});
