var C64Style = C64Style || {};

C64Style.isFunction = function(callback) {return typeof callback === "function";};

C64Style.catObjectInfo = function(obj, acc) {
    var accumulator = acc;
    var i;
    if (!accumulator || accumulator === null || ! ("value" in accumulator) || accumulator.value === null) {
        accumulator = {value:""};
    }

    var objType = Object.prototype.toString.call(obj);

    if (objType === "[object Array]") {
        accumulator.value += "[";
        for (i = 0; i < obj.length; i++) {
            if (i>0) accumulator.value += ",";
            C64Style.catObjectInfo(obj[i], accumulator);
        }
        accumulator.value += "]";
    } else if (objType === "[object Object]") {
        if (obj === null) {
            accumulator.value += "null";
        } else {
            accumulator.value += "{";
            var keys = Object.keys(obj);
            for (i = 0; i < keys.length; i++) {
                if (i>0) accumulator.value += ", ";
                accumulator.value += '"' + keys[i] + '"'+ ':';
                var value = obj[keys[i]];
                C64Style.catObjectInfo(value,accumulator);
            }
            accumulator.value += "} ";
        }
    } else if (objType === "[object String]") {
        accumulator.value += '"' + obj + '"';
    } else {
        accumulator.value += obj;
    }
    return accumulator.value;
};

C64Style.log = function(msg) {
  console.log(msg);
};

C64Style.linSearchByPropertyKey = function(array, key, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) return i;
  }
  return -1;
};

C64Style.linSearch = function(array, value, equalityFunction) {
  for (var i = 0; i < array.length; i++) {
    if (equalityFunction(array[i], value)) return i;
  }
  return -1;
};

function noop() {}
