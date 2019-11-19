describe("9 Classes", () => {
  it("can construct a class", () => {
    const w1 = new Widget({ id: 1, name: "Gauge" });
    expect(w1.id).toEqual(1);
  });
});
