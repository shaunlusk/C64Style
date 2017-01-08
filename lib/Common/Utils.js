var C64Style = C64Style || {};

/** Check whether the argument is a function.
* @memberof C64Style
* @param {Object} callback The object to check.
* @returns {boolean} true if it is a function, false otherwise.
*/
C64Style.isFunction = function(callback) {return typeof callback === "function";};

/** Write a message to the log.
* @param {string} msg The message to write.
*/
C64Style.log = function(msg) {
  console.log(msg);
};

/** Search an array for a given value, using an equality function; returns the index
* of the first occurence in the array, or -1 if not found.
* This can be used to search for objects with a given property value.
* @param {Array} array The array to search
* @param {Object} value The target value to search for
* @param {Function} equalityFunction The function to use to compare array elements to the target value.
*   Should retruen true when elements are equal, false otherwise.
* @returns {integer} The index of the located value, or -1 if not found
*/
C64Style.linSearch = function(array, value, equalityFunction) {
  for (var i = 0; i < array.length; i++) {
    if (equalityFunction(array[i], value)) return i;
  }
  return -1;
};

function noop() {}
