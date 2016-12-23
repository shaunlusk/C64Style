var C64Style = C64Style || {};

C64Style.isFunction = function(callback) {return typeof callback === "function";};

C64Style.log = function(msg) {
  console.log(msg);
};

C64Style.linSearch = function(array, value, equalityFunction) {
  for (var i = 0; i < array.length; i++) {
    if (equalityFunction(array[i], value)) return i;
  }
  return -1;
};

function noop() {}
