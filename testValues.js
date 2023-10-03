const testValues_for_get_All_computers_By_type = [
  { test: "5.2.1", searchValue: "doesNotExist", expected: [] },
  {
    test: "5.2.2",
    searchValue: "server",
    expected: [
      {
        computerNumber: 1,
        name: "Xunil 4.7",
        type: "server",
        price: 10,
        manufacturer: "Xyz computing",
        colors: ["yellow", "white", "green"],
        extras: {
          consumption: "C",
          comments: "no comments",
          model: "XXL",
        },
      },
    ],
  },
  {
    test: "5.2.3",
    searchValue: "gameover",
    expected: [
      {
        computerNumber: 2,
        name: "Xunil 4.7",
        type: "gameover",
        price: 200,
        manufacturer: "Leila Hökki & co",
        colors: ["red", "green", "blue"],
        extras: {
          consumption: "D",
          comments: "-",
          model: "silver",
        },
      },
      {
        computerNumber: 3,
        name: "King 3000",
        type: "gameover",
        price: 36,
        manufacturer: "Leila Hökki & co",
        colors: ["black", "orange", "blue"],
        extras: {
          consumption: "A+",
          comments: "no comments",
          model: "gold",
        },
      },
    ],
  },
];

const testValues_for_get_All_computers_By_color = [
  {
    test: "6.2",
    searchValue: "doesNotExist",
    expected: [],
  },
  {
    test: "6.3.1",
    searchValue: "black",
    expected: [3, 4, 5],
  },
  {
    test: "6.3.2",
    searchValue: "yellow",
    expected: [1],
  },
];

const testValues_for_get_a_computer_matching_computerNumber = [
  {
    test: "7.2.1",
    searchKey: "doesNotExist",
    expected: null,
  },
  {
    test: "7.2.2",
    searchKey: 1,
    expected: {
      computerNumber: 1,
      name: "Xunil 4.7",
      type: "server",
      price: 10,
      manufacturer: "Xyz computing",
      colors: ["yellow", "white", "green"],
      extras: {
        consumption: "C",
        comments: "no comments",
        model: "XXL",
      },
    },
  },
  {
    test: "7.2.3",
    searchKey: 2,
    expected: {
      computerNumber: 2,
      name: "Xunil 4.7",
      type: "gameover",
      price: 200,
      manufacturer: "Leila Hökki & co",
      colors: ["red", "green", "blue"],
      extras: {
        consumption: "D",
        comments: "-",
        model: "silver",
      },
    },
  },
  {
    test: "7.2.4",
    searchKey: 5,
    expected: {
      computerNumber: 5,
      name: "Cera 2400",
      type: "tabletop",
      price: 10,
      manufacturer: "Ocean",
      colors: ["black", "orange", "green"],
    },
  },
];

const testValues_for_get_All_computers_By_manufacturer = [
  {
    test: "8.2.1",
    searchValue: "doesNotExist",
    expected: [],
  },
  {
    test: "8.2.2",
    searchValue: "Xyz computing",
    expected: [
      {
        computerNumber: 1,
        name: "Xunil 4.7",
        type: "server",
        price: 10,
        manufacturer: "Xyz computing",
        colors: ["yellow", "white", "green"],
        extras: {
          consumption: "C",
          comments: "no comments",
          model: "XXL",
        },
      },
    ],
  },
  {
    test: "8.2.3",
    searchValue: "Leila Hökki & co",
    expected: [
      {
        computerNumber: 2,
        name: "Xunil 4.7",
        type: "gameover",
        price: 200,
        manufacturer: "Leila Hökki & co",
        colors: ["red", "green", "blue"],
        extras: {
          consumption: "D",
          comments: "-",
          model: "silver",
        },
      },
      {
        computerNumber: 3,
        name: "King 3000",
        type: "gameover",
        price: 36,
        manufacturer: "Leila Hökki & co",
        colors: ["black", "orange", "blue"],
        extras: {
          consumption: "A+",
          comments: "no comments",
          model: "gold",
        },
      },
    ],
  },
];

module.exports = {
  testValues_for_get_All_computers_By_type,
  testValues_for_get_All_computers_By_color,
  testValues_for_get_a_computer_matching_computerNumber,
  testValues_for_get_All_computers_By_manufacturer,
};
