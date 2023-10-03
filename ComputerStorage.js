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
};
