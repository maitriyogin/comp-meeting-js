const expectExport = require("expect");

describe("6 Templates", () => {
  it("should will concatanate", () => {
    const sayHi = (name, msg) => `${name} says ${msg}`;
    expectExport(sayHi("stephen", "its adventure time!")).toEqual(
      "stephen says its adventure time!"
    );
  });
});
