"use strict";

module.exports = class {
  #dataBase;
  constructor(data) {
    if (!data) throw new Error("data base is missing");
    this.#dataBase = data;
  }
};
