const expectExport = require("expect");

describe("6 Templates", () => {
  it("should concatanate", () => {
    const sayHi = (name, msg) => `${name} says ${msg}`;
    expectExport(sayHi("stephen", "its adventure time!")).toEqual(
      "stephen says its adventure time!"
    );
  });
  it("should call a function", () => {
    const formatDate = date => new Date(date).toDateString();
    const sayHi = (name, msg, date) =>
      `${name} says ${msg} on ${formatDate("2019-11-19")}`;
    expectExport(sayHi("stephen", "its adventure time!")).toEqual(
      "stephen says its adventure time!"
    );
  });
});
