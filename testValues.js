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

module.exports = { testValues_for_get_All_computers_By_type };
