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

function RArray() {
  this._idx = 0;
  this.length = 0;
  this._a = [];
}
RArray.prototype.push = function(e) {
  if (this._idx < this._a.length) {
    this._a[this._idx] = e;
  } else {
    this._a.push(e);
  }
  this._idx++;
  this.length++;
};

RArray.prototype.size = function() {
  return this.length;
};

RArray.prototype.get = function(idx) {
  return this._a[idx];
};

RArray.prototype.clear = function() {
  for (var i = 0; i < this.length; i++) {
      this._a[i] = null;
  }
  this._idx = 0;
  this.length = 0;
};

RArray.prototype.forEach = function(callback, thisArg) {
  for (var i = 0; i < this.length; i++) {
    var currentValue = this._a[i];
    callback.call(thisArg, currentValue, i, this._a);
  }
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
