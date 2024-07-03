const Demo = artifacts.require("demo");

contract("demo", () => {
  it("should have initial num value of 10", async () => {
    const instance = await Demo.deployed();
    const num = await instance.num();
    assert.equal(num.toNumber(), 10, "Initial num value is not 10");
  });
});
