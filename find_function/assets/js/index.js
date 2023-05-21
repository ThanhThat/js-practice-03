Array.prototype._find = function (callback, thisArg) {
  if (typeof callback === "function") {
    for (let i = 0; i < this.length; i++) {
      if (this.hasOwnProperty(i)) {
        if (callback(this[i], i, this)) {
          return this[i];
        }
      }
    }
    return undefined;
  } else {
    throw new TypeError(`${callback} is not a function`);
  }
};

// test a function _find
const arr = [1, 2, 3, 4, 5];
const result = arr._find((item) => item > 3);
console.log(result);
