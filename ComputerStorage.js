"use strict";

module.exports = class {
  #dataStorage;
  // if data parameter is missing, it will throw error otherwise return nothing
  constructor(data) {
    if (!data) throw new Error("data storage missing");
    this.#dataStorage = data;
  }

  has_extras(searchKey) {
    if (searchKey) {
      const found = this.#dataStorage.filter((pc) => {
        if (pc.computerNumber === searchKey && pc?.extras !== undefined) {
          return pc;
        }
      });
      if (found.length > 0) return true;
    }
    return false;
  }

  get_total_price_of_computers_by_type(searchValue) {
    if (!searchValue) throw new Error("missing parameter");
    const total = this.#dataStorage.reduce((total, pc) => {
      if (pc.type === searchValue) return total + pc.price;
      else return total;
    }, 0);
    if (total !== 0) return total;
    else throw new Error("nothing found with given type");
  }

  get_Price(computerNumber) {
    const found = this.#dataStorage.filter(
      (pc) => pc.computerNumber === computerNumber
    );
    if (found.length === 0) throw new Error("nothing found with given number");
    return found[0].price;
  }

  get_All_computers_By_type(searchValue) {
    if (!searchValue) throw new Error("missing parameter");
    return this.#dataStorage.filter((pc) => pc.type === searchValue);
  }

  get_All_computers_By_color(searchValue) {
    return this.#dataStorage.reduce((acc, pc) => {
      if (pc.colors.includes(searchValue)) return [...acc, pc.computerNumber];
      else return acc;
    }, []);
  }

  get_a_computer_matching_computerNumber(searchKey) {
    if (!searchKey) throw new Error("missing parameter");
    const filteredPc = this.#dataStorage.filter(
      (pc) => pc.computerNumber === searchKey
    );
    if (filteredPc.length === 0) return null;
    return filteredPc[0];
  }
};
