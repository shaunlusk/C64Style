var c64Style = c64Style || {};

c64Style.isFunction = function(callback) {return typeof callback === "function";};

c64Style.catObjectInfo = function(obj, acc) {
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
            c64Style.catObjectInfo(obj[i], accumulator);
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
                c64Style.catObjectInfo(value,accumulator);
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

c64Style.mergeProperties = function(object, properties) {
  var keys = Object.keys(properties);
  keys.forEach(function(key) {
    object[key] = properties[key];
  });
};

c64Style.mix = function(object1,object2) {
  var object3 = {};
  var keys = Object.keys(object1);
  var i;
  for (i = 0; i < keys.length; i++) {
    object3[keys[i]] = object1[keys[i]];
  }
  keys = Object.keys(object2);
  for (i = 0; i < keys.length; i++) {
    object3[keys[i]] = object2[keys[i]];
  }

  return object3;
};

c64Style.log = function(msg) {
  console.log(msg);
};

function OneDeepQueue() {
  this.a = [null,null];
  this.i = 0;
  this.push = function(e) {
    if (0 === this.i) {
      this.a[0] = e;
      this.i = 1;
    }
    else {
      this.a[1] = e;
    }
  };
  this.pop = function() {
    var retVal = this.a[0];
    this.a[0] = this.a[1];
    this.a[1] = null;
    this.i = retVal === null ? 0 : 1;

    return retVal;
  };
}

function addElementsToArray(target, source) {
  for (var i = 0; i < source.length; i++) {
    target.push(source[i]);
  }
}

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

function linSearchByPropertyKey(array, key, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) return i;
  }
  return -1;
}

function linSearch(array, value, equalityFunction) {
  for (var i = 0; i < array.length; i++) {
    if (equalityFunction(array[i], value)) return i;
  }
  return -1;
}

function copyArray(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push( array[i] );
  }
  return newArray;
}

function showError(msg, callback, callbackArgs) {
  c64Style.log(msg);
  if(c64Style.isFunction(callback)) callback(callbackArgs);
}

function collisionCheck(rect1,rect2) {
  var result = rect1.x < rect2.x + (rect2.width * rect2.scaleX) &&
     rect1.x + (rect1.width * rect1.scaleX) > rect2.x &&
     rect1.y < rect2.y + (rect2.height * rect2.scaleY) &&
     rect1.y + (rect1.height * rect1.scaleY) > rect2.y;
  return result;
}

function noop() {}

function Stack() {
  this._a = [];
  this._pointer = -1;
}
Stack.prototype.push = function(object) {
  if (this._pointer + 1 === this._a.length) {
    this._a.push(object);
  } else {
    this._a[this._pointer+1] = object;
  }
  this._pointer++;
};
Stack.prototype.pop = function() {
  if (this._pointer === -1) throw new Error("Stack underflow.");
  var retVal = this._a[this._pointer];
  this._a[this._pointer] = null;
  this._pointer--;
  return retVal;
};
Stack.prototype.hasNext = function() {
  return this._pointer > -1;
};
Stack.prototype.size = function() {
  return this._pointer + 1;
};

function IObjectFactory() {}
IObjectFactory.prototype.applyPropertiesToObject = function(object) {throw new Error("Not Implemented");};
IObjectFactory.prototype.getNewObject = function() {throw new Error("Not Implemented");};

function ObjectPool(objectFactory) {
  this._objectFactory = objectFactory;
  this._id = 0;
  this._free = new Stack();
  this._inUse = {};
  this._inUseCount = 0;
}
ObjectPool.prototype.getObject = function() {
  var object = null;
  if (this.freeObjectCount() > 0) {
    object = this._free.pop();
    if (arguments.length > 0){
      this._objectFactory.applyPropertiesToObject.apply(this._objectFactory, arguments);
    }
  } else {
    object = this._objectFactory.getNewObject.apply(this._objectFactory,arguments);
    object.poolId = this._id++;
  }
  this._inUse[object.poolId] = object;
  this._inUseCount++;
  return object;
};

ObjectPool.prototype.returnObject = function(object) {
  if (object.poolId === undefined || !this._inUse[object.poolId]) throw new Error("Object not in use: " + object);
  this._free.push(object);
  delete this._inUse[object.poolId];
  this._inUseCount--;
};
ObjectPool.prototype.totalObjectCount = function() {
  return this.freeObjectCount() + this.inUseObjectCount();
};
ObjectPool.prototype.freeObjectCount = function() {
  return this._free.size();
};
ObjectPool.prototype.inUseObjectCount = function() {
  return this._inUseCount;
};

function shallowObjectCopy(obj) {
  var keys = Object.keys(obj);
  var newObject = {};
  var key = null;
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    newObject[key] = obj[key];
  }
  return newObject;
}

function roll(num, die, plus) {
  var a = 0;
  for (var i = 0; i < num; i++) {
    a += Math.floor(Math.random() * die) + 1;
  }
  return a + plus;
}

/**
* random integer between min and max, inclusive
*/
function random(min, max) {
  var a = Math.floor(Math.random() * (max - min + 1) + min);
  return a;
}
