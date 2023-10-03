"use strict";

module.exports = class {
  #dataStorage;
  // if data parameter is missing, it will throw error otherwise return nothing
  constructor(data) {
    if (!data) throw new Error("data storage missing");
    this.#dataStorage = data;
  }
};
