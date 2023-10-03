const expect = require("chai").expect;
const ComputerStorage = require("../ComputerStorage");
const computers = require("../computers.json");

describe("Test 1: testing ComputerStorage constructor", function () {
  it("Test 1.1: constructor return nothing with default value", function () {
    const pcRegister = new ComputerStorage(computers);
    expect(pcRegister).to.deep.empty;
  });

  it("Test 1.2: constructor throws error when no data is passed", function () {
    expect(function () {
      const pcRegister = new ComputerStorage();
    }).to.throw("data storage missing");
  });
});
