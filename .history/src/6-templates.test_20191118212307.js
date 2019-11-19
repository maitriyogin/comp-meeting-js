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
      `${name} says ${msg} on ${formatDate(date)}`;
    expectExport(sayHi("stephen", "its adventure time!", "2019-11-19")).toEqual(
      "stephen says its adventure time! on Tue Nov 19 2019"
    );
  });

  it("should work with tags", () => {
    const awake = (strings, ...values) => {};
    const res = awake`Am I awake at ${15}`;
  });
});
