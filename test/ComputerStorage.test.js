const expect = require("chai").expect;
const ComputerStorage = require("../ComputerStorage");
const computers = require("../computers.json");
// importing testValues
const {
  testValues_for_get_All_computers_By_type,
  testValues_for_get_All_computers_By_color,
  testValues_for_get_a_computer_matching_computerNumber,
} = require("../testValues");
// Global
const pcRegister = new ComputerStorage(computers);

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

// testing get_total_price_of_computers_by_type(searchValue) method

describe("Test 3: testing get_total_price_of_computers_by_type(searchValue) method", function () {
  const pcRegister = new ComputerStorage(computers);

  it("Test 3.1: no searchValue given, expected exception: 'missing parameter'", function () {
    expect(function () {
      pcRegister.get_total_price_of_computers_by_type();
    }).to.throw("missing parameter");
  });

  it("Test 3.2: searchValue: game, expected exception: 'nothing found with given type'", function () {
    expect(function () {
      pcRegister.get_total_price_of_computers_by_type("game");
    }).to.throw("nothing found with given type");
  });

  it("Test 3.3: searchValue: server, expected: 10", function () {
    expect(pcRegister.get_total_price_of_computers_by_type("server")).to.equal(
      10
    );
  });

  it("Test 3.3: searchValue: gameover, expected: 236 ", function () {
    expect(
      pcRegister.get_total_price_of_computers_by_type("gameover")
    ).to.equal(236);
  });
});

// testing get_Price(computerNumber)

describe("Test 4: testing get_Price(computerNumber) method", function () {
  const pcRegister = new ComputerStorage(computers);

  it("Test 4.1: no computerNumber is passed, expected exception: 'nothing found with given number'", function () {
    expect(function () {
      pcRegister.get_Price();
    }).to.throw("nothing found with given number");
  });

  it("Test 4.2: computerNumber: 999 which does not exist, expected exception: 'nothing found with given number'", function () {
    expect(function () {
      pcRegister.get_Price(999);
    }).to.throw("nothing found with given number");
  });

  const testValues = [
    { test: "4.3.1", computerNumber: 1, expected: 10 },
    { test: "4.3.2", computerNumber: 2, expected: 200 },
    { test: "4.3.3", computerNumber: 3, expected: 36 },
    { test: "4.3.4", computerNumber: 5, expected: 10 },
  ];
  // Test 4.3.1 to 4.3.4
  testValues.forEach(function (testCase) {
    it(`Test ${testCase.test}: computerNumber: ${testCase.computerNumber}, expected: ${testCase.expected}`, function () {
      expect(pcRegister.get_Price(testCase.computerNumber)).to.equal(
        testCase.expected
      );
    });
  });
});

// testing get_All_computers_By_type(searchValue)

describe("Test 5: testing get_All_computers_By_type(searchValue) method", function () {
  const pcRegister = new ComputerStorage(computers);

  it("Test 5.1: no searchvalue is passed, expected exception: 'missing parameter'", function () {
    expect(function () {
      pcRegister.get_All_computers_By_type();
    }).to.throw("missing parameter");
  });

  // Test 5.2.1 to 5.2.3
  testValues_for_get_All_computers_By_type.forEach(function (testCase) {
    it(`Test ${testCase.test}: searchValue: ${testCase.searchValue}, expected: [${testCase.expected}]`, function () {
      expect(
        pcRegister.get_All_computers_By_type(testCase.searchValue)
      ).to.deep.equal(testCase.expected);
    });
  });
});

// testing get_All_computers_By_color(searchValue) method

describe("Test 6: testing get_All_computers_By_color(searchValue) method", function () {
  const pcRegister = new ComputerStorage(computers);

  it("Test 6.1: no searchValue is passed, expected: []", function () {
    expect(pcRegister.get_All_computers_By_color()).to.deep.empty;
  });

  // test 6.2 to 6.3.2
  testValues_for_get_All_computers_By_color.forEach(function (testCase) {
    it(`Test ${testCase.test}: searchValue: ${testCase.searchValue}, expected: [${testCase.expected}]`, function () {
      expect(
        pcRegister.get_All_computers_By_color(testCase.searchValue)
      ).to.deep.equal(testCase.expected);
    });
  });
});

// testing get_a_computer_matching_computerNumber(searchKey) method

describe("Test 7: testing get_a_computer_matching_computerNumber(searchKey) method", function () {
  it("Test 7.1: no searchKey is passed, expected exception: 'missing parameter'", function () {
    expect(function () {
      pcRegister.get_a_computer_matching_computerNumber();
    }).to.throw("missing parameter");
  });

  // Tesht 7.2.1 to 7.2.4
  testValues_for_get_a_computer_matching_computerNumber.forEach(function (
    testCase
  ) {
    it(`Test ${testCase.test}: searchKey: ${testCase.searchKey}, expected: ${testCase.expected}`, function () {
      expect(
        pcRegister.get_a_computer_matching_computerNumber(testCase.searchKey)
      ).to.deep.equal(testCase.expected);
    });
  });
});
