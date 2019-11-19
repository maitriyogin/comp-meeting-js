import { Widget } from "./9-classes";

describe("9 Classes", () => {
  it("can construct a class", () => {
    const w1 = new Widget({ id: 1, name: "Gauge" });
    expect(w1.id).toEqual(1);
    expect(w1.name).toEqual("Gauge");
  });
  it("can serialize to json", () => {
    const w1 = new Widget({ id: 1, name: "Gauge" });
    expect(w1.toJSON()).toEqual(1);
  });
});
