import Widget from "./Widget";

describe("9 Classes", () => {
  it("can construct a Widget", () => {
    const w1 = new Widget({ id: 1, name: "Gauge" });
    expect(w1.id).toEqual(1);
    expect(w1.name).toEqual("Gauge");
  });
  it("can serialize a Widget to json", () => {
    const w1 = new Widget({ id: 1, name: "Gauge" });
    expect(w1.toJSONString()).toEqual('{"id":1,"name":"Gauge"}');
  });
  it("can construct a ValueWidget", () => {
    const w1 = new Widget({ id: 1, name: "Gauge" });
    expect(w1.id).toEqual(1);
    expect(w1.name).toEqual("Gauge");
  });
  it("can serialize a Widget to json", () => {
    const w1 = new Widget({ id: 1, name: "Gauge" });
    expect(w1.toJSONString()).toEqual('{"id":1,"name":"Gauge"}');
  });
});
