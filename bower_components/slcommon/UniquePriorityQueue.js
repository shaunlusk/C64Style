var SL = SL || {};

/** Extension of SL.PriorityQueue.
* Enforces uniqueness of enqueued elements;
* attempts made to enqueue an element that is
* already in the queue will be ignored.
*
* Elements must implement getKey() method
* @constructor
*/
SL.UniquePriorityQueue = function() {
  SL.PriorityQueue.call(this);
  this._entryKeys = {};
};

SL.UniquePriorityQueue.prototype = new SL.PriorityQueue();
SL.UniquePriorityQueue.prototype.constructor = SL.UniquePriorityQueue;

/** Adds a new item to the queue.
* @param element {Object} The item to be added to the queue.  Must implement getKey() method.
* @override
*/
SL.UniquePriorityQueue.prototype.insert = function(element) {
  if (this._entryKeys[element.getKey()]) return;
  this._entryKeys[element.getKey()] = true;
  SL.PriorityQueue.prototype.insert.call(this, element);
};

/** Clear the queue. */
SL.UniquePriorityQueue.prototype.clear = function() {
  this._entryKeys = {};
  SL.PriorityQueue.prototype.clear.call(this);
};

/** Removes and returns the item at the front of the queue
* @return {Object} The item at the front of the queue.
*/
SL.UniquePriorityQueue.prototype.extractMax = function() {
  var element = SL.PriorityQueue.prototype.extractMax.call(this);
  if (element && SL.isFunction(element.getKey) && this._entryKeys[element.getKey()]) delete this._entryKeys[element.getKey()];
  return element;
};

/** Returns whether the item exists in the queue.
* @param element {IComparable} The element to search for.
* @return {boolean} True if the element is in the queue; false otherwise.
*/
SL.UniquePriorityQueue.prototype.contains = function(element) {
  return this._entryKeys[element.getKey()] === true;
};

/** Remove the specified element from the queue.
* @param {Object} element
*/
SL.UniquePriorityQueue.prototype.remove = function(element) {
  SL.PriorityQueue.prototype.remove.call(this, element);
  if (this._entryKeys[element.getKey()]) delete this._entryKeys[element.getKey()];
};

/** Removes and returns the item at the front of the queue
* @method
* @return {Object} The item at the front of the queue.
*/
SL.UniquePriorityQueue.prototype.pop = SL.UniquePriorityQueue.prototype.extractMax;

/** Removes and returns the item at the front of the queue
* @method
* @return {Object} The item at the front of the queue.
*/
SL.UniquePriorityQueue.prototype.poll = SL.UniquePriorityQueue.prototype.extractMax;

/** Adds a new item to the queue.
* @method
* @param element {IComparable} The item to be added to the queue.  Must implement Comparable.
*/
SL.UniquePriorityQueue.prototype.push = SL.UniquePriorityQueue.prototype.insert;
