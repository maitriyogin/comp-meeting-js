import Widget from "./Widget";
import ValueWidget, { EStatus } from "./ValueWidget";

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
    const w1 = new ValueWidget({
      id: 1,
      name: "Value",
      value: 5,
      status: EStatus.LOADING
    });
    expect(w1.id).toEqual(1);
    expect(w1.name).toEqual("Value");
    expect(w1.value).toEqual(5);
    expect(w1.status).toEqual(EStatus.LOADING);
  });
  it("can serialize a ValueWidget to json", () => {
    const w1 = new ValueWidget({
      id: 1,
      name: "Value",
      value: 5,
      status: EStatus.LOADING
    });
    expect(w1.toJSONString()).toEqual(
      '{"id":1,"name":"Value","value":5,"status":"LOADING"}'
    );
  });

  describe("Dashboard", () => {
    it("can create a dashboard", () => {
      const widgets = [
        new ValueWidget({
          id: 1,
          name: "v1",
          value: 4,
          status: EStatus.SUCCESS
        })
      ];
    });
  });
});
