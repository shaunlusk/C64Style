var SL = SL || {};

/** SL.IComparable
* @interface
*/
SL.IComparable = function() {};

/**
* @function
* @name SL.IComparable#compareTo
* @param other {Object} The object to compare to this one.
* @returns {int} -1: less than the other object; 0 equivalent to the other object; 1 greater than the other object.
*/
SL.IComparable.prototype.compareTo = function(other) { throw new Error('not implemented'); };
/**
* @function
* @name SL.IComparable#equals
* @param other {Object} The object to compare to this one.
* @returns {boolean} true if the objects are equivalent, false otherwise.
*/
SL.IComparable.prototype.equals = function(other) { throw new Error('not implemented'); };


/** @class Heap-based priority queue */
SL.PriorityQueue = function() {

  this._heapSize = 0;
  this._a = [];
  /** True: largest values will be at the front of the queue.
  * False: smallest values will be at the front of the queue.
  * False by default.
  */
  this.invertPriority = false;
};

/** Set whether this queue has inverted priority or not.
* False: smallest values will be at the front of the queue.
* True: largest values will be at the front of the queue.
* False by default.
* Setting the value will cause the queue to be reordered.
* @param bool {boolean}
*/
SL.PriorityQueue.prototype.setInvertPriority = function(bool) {
  this.invertPriority = bool;
  this.sort();
};

/** Sorts the queue.  */
SL.PriorityQueue.prototype.sort = function() {

  this._buildMaxHeap();

  for (var i = this._heapSize - 1; i >= 1; i--) {
    this._swap(0,i);
    this._maxHeapify(0, (this._heapSize - (this._heapSize-i)) );
  }
};

/** @private */
SL.PriorityQueue.prototype._maxHeapify = function( i, size, dir ) {
  var largest = 0;
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  if (dir === undefined) dir = this.invertPriority ? -1 : 1;

  if ( left < size && this._a[left].compareTo(this._a[i]) === dir ) {
    largest = left;
  } else {
    largest = i;
  }

  if ( right < size && this._a[right].compareTo(this._a[largest]) === dir ) {
    largest = right;
  }

  if ( largest != i ) {
    this._swap(i,largest);
    this._maxHeapify( largest, size, dir );
  }
};

/** @private */
SL.PriorityQueue.prototype._swap = function(i1,i2) {
  var temp = this._a[i1];
  this._a[i1] = this._a[i2];
  this._a[i2] = temp;
};

/** @private */
SL.PriorityQueue.prototype._buildMaxHeap = function() {
  for (var i = Math.floor((this._heapSize - 1) / 2); i >= 0; i--) {
    this._maxHeapify( i, this._heapSize );
  }
};

/** Removes and returns the item at the front of the queue
* @return {Object} The item at the front of the queue.
*/
SL.PriorityQueue.prototype.extractMax = function() {
  if ( this._heapSize < 1 ) {
    return null;
  }

  var max = this._a[0];
  this._a[0] = this._a[this._heapSize-1];
  this._heapSize--;
  this._maxHeapify( 0, this._heapSize,  this.invertPriority ? 1 : -1);
  return max;
};

/** Adds a new item to the queue.
* @param element {SL.IComparable} The item to be added to the queue.  Must implement Comparable.
*/
SL.PriorityQueue.prototype.insert = function( element ) {
  var i = this._heapSize;

  if (this._heapSize === this._a.length)
    this._a.push(element);
  else
    this._a[i] = element;
  this._heapSize++;

  this.increaseKey(i);
};

/** Used to update the queue when a element's priority has been increased.
* Assumes the element has already been inserted.
* Assumes you have updated the value on your own.
* @param i {int} The index of the element to be updated.
*/
SL.PriorityQueue.prototype.increaseKey = function(i) {
  while (i > 0 && this._a[this._parent(i)].compareTo(this._a[i]) === (this.invertPriority ? -1 : 1)) {
    this._swap(i,this._parent(i));
    i = this._parent(i);
  }
};

/** Used to update the queue when a element's priority has been decreased.
* Assumes the element has already been inserted.
* Assumes you have updated the value on your own.
* @param i {int} The index of the element to be updated.
*/
SL.PriorityQueue.prototype.decreaseKey = function(i) {
  this._maxHeapify(i, this._heapSize, this.invertPriority ? 1 : -1);
};

/** Retrieve the element at a specified index.
* Throws an error if i is out of bounds.
* @param i {int} The index of the target element
* @return {Object} The element found at the specified index.
*/
SL.PriorityQueue.prototype.getByIndex = function(i) {
  if (i > this._heapSize || i < 0)
    throw new Error("Index out of bounds: " + i + ". (queue size:" + this._heapSize + ")");
  return this._a[i];
};

/** Retrieve the first element that equals one specified.
* Use this if you need to update the value/priority of an element in the queue.
* @param i {SL.IComparable} An element to search for.
* @return {Object} The element if found; null otherwise.
*/
SL.PriorityQueue.prototype.getByEquality = function(element) {
  var idx = this.indexOf(element);
  if (idx === -1) return null;
  return this._a[idx];
};

/** Returns the size of the queue
* @return {int} The size of the queue.
*/
SL.PriorityQueue.prototype.size = function() {
  return this._heapSize;
};

/** Returns whether the item exists in the queue.
* @param element {SL.IComparable} The element to search for.
* @return {boolean} True if the element is in the queue; false otherwise.
*/
SL.PriorityQueue.prototype.contains = function(element) {
  for (var i = 0; i < this._heapSize; i++) {
    if (element.equals(this._a[i])) return true;
  }
  return false;
};

/** Returns the index of the item if it exists in the queue.
* @param element {SL.IComparable} The element to search for.
* @return {int} The index of the element in the queue; -1 if it does not exist.
*/
SL.PriorityQueue.prototype.indexOf = function(element) {
  for (var i = 0; i < this._heapSize; i++) {
    if (element.equals(this._a[i])) return i;
  }
  return -1;
};

/**
* @param element {Object} The element to be removed from the list.
*/
SL.PriorityQueue.prototype.remove = function(element) {
  if ( this._heapSize < 1 ) {
    return;
  }

  var idx = this.indexOf(element);
  if (idx < 0) return;

  this._a[idx] = this._a[this._heapSize-1];
  this._heapSize--;
  this._maxHeapify( idx, this._heapSize,  this.invertPriority ? 1 : -1);
};

/** Clear the queue. */
SL.PriorityQueue.prototype.clear = function() {this._heapSize = 0;};

/** @private */
SL.PriorityQueue.prototype._verifyHeap = function(i) {
  if (i === undefined || i === null) i = 0;
  if (i >= this._heapSize) return true;
  var dir = this.invertPriority ? 1 : -1;
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var isok = true;

  if (left < this._heapSize && this._a[left].compareTo(this._a[i]) === dir) isok = false;
  if (isok && right < this._heapSize && this._a[right].compareTo(this._a[i]) === dir) isok = false;

  if (isok && left < this._heapSize) {
    isok = this._verifyHeap(left);
    if (isok && right < this._heapSize) {
      isok = this._verifyHeap(right);
    }
  }
  return isok;
};

/** @private */
SL.PriorityQueue.prototype._parent = function(i) { return Math.floor((i - 1) / 2); };

/** Removes and returns the item at the front of the queue
* @method
* @return {Object} The item at the front of the queue.
*/
SL.PriorityQueue.prototype.pop = SL.PriorityQueue.prototype.extractMax;

/** Removes and returns the item at the front of the queue
* @method
* @return {Object} The item at the front of the queue.
*/
SL.PriorityQueue.prototype.poll = SL.PriorityQueue.prototype.extractMax;

/** Adds a new item to the queue.
* @method
* @param element {SL.IComparable} The item to be added to the queue.  Must implement Comparable.
*/
SL.PriorityQueue.prototype.push = SL.PriorityQueue.prototype.insert;

/** Retrieve the element at the front of the queue.
* @return {Object} The element at the front of the queue.
*/
SL.PriorityQueue.prototype.peek = function() {return this._heapSize < 1 ? null : this._a[0];};
