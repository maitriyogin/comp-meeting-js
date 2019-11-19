import Widget, { IWidget } from "./Widget";
import ValueWidget, { EStatus } from "./ValueWidget";
import GaugeWidget from "./GaugeWidget";
import Dashboard from "./Dashboard";
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
      const widgets: IWidget[] = [
        new ValueWidget({
          id: 1,
          name: "v1",
          value: 4,
          status: EStatus.SUCCESS
        }),
        new GaugeWidget({
          id: 2,
          name: "g1",
          value: 50,
          range: {
            start: 0,
            end: 60
          }
        })
      ];
      const dashboard = new Dashboard({ name: "d1", widgets });
      expect(dashboard.widgets[0].name).toEqual("v1");
      expect(dashboard.widgets[1].name).toEqual("g1");
      expect(dashboard.toJSONString()).toEqual(
        '{"widgets":[{"id":1,"name":"v1","value":4,"status":"FAILURE"},{"id":2,"name":"g1","value":50,"range":{"start":0,"end":60}}],"name":"d1"}'
      );
    });
  });
});
