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

// testing has_extras(searchKey) method

describe("Test 2: testing has_extras(searchKey) method", function () {
  const pcRegister = new ComputerStorage(computers);

  it("Test 2.1: searchKey: 1, expected: true", function () {
    expect(pcRegister.has_extras(1)).to.deep.true;
  });

  it("Test 2.2: searchKey: 5, expected: false", function () {
    expect(pcRegister.has_extras(5)).to.deep.false;
  });

  it("Test 2.3: searchKey:, expected: false", function () {
    expect(pcRegister.has_extras()).to.deep.false;
  });
});
