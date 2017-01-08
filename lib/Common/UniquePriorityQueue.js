/** Extension of PriorityQueue.
* Enforces uniqueness of enqueued elements;
* attempts made to enqueue an element that is
* already in the queue will be ignored.
*
* Elements must implement getKey() method
* @constructor
*/
function UniquePriorityQueue() {
  PriorityQueue.call(this);
  this._entryKeys = {};
}

UniquePriorityQueue.prototype = new PriorityQueue();
UniquePriorityQueue.prototype.constructor = UniquePriorityQueue;

/** Adds a new item to the queue.
* @param element {Object} The item to be added to the queue.  Must implement getKey() method.
* @override
*/
UniquePriorityQueue.prototype.insert = function(element) {
  if (this._entryKeys[element.getKey()]) return;
  this._entryKeys[element.getKey()] = true;
  PriorityQueue.prototype.insert.call(this, element);
};

/** Clear the queue. */
UniquePriorityQueue.prototype.clear = function() {
  this._entryKeys = {};
  PriorityQueue.prototype.clear.call(this);
};

/** Removes and returns the item at the front of the queue
* @return {Object} The item at the front of the queue.
*/
UniquePriorityQueue.prototype.extractMax = function() {
  var element = PriorityQueue.prototype.extractMax.call(this);
  if (element && C64Style.isFunction(element.getKey) && this._entryKeys[element.getKey()]) delete this._entryKeys[element.getKey()];
  return element;
};

/** Returns whether the item exists in the queue.
* @param element {IComparable} The element to search for.
* @return {boolean} True if the element is in the queue; false otherwise.
*/
UniquePriorityQueue.prototype.contains = function(element) {
  return this._entryKeys[element.getKey()] === true;
};

/** Remove the specified element from the queue.
* @param {Object} element
*/
UniquePriorityQueue.prototype.remove = function(element) {
  PriorityQueue.prototype.remove.call(this, element);
  if (this._entryKeys[element.getKey()]) delete this._entryKeys[element.getKey()];
};

/** Removes and returns the item at the front of the queue
* @method
* @return {Object} The item at the front of the queue.
*/
UniquePriorityQueue.prototype.pop = UniquePriorityQueue.prototype.extractMax;

/** Removes and returns the item at the front of the queue
* @method
* @return {Object} The item at the front of the queue.
*/
UniquePriorityQueue.prototype.poll = UniquePriorityQueue.prototype.extractMax;

/** Adds a new item to the queue.
* @method
* @param element {IComparable} The item to be added to the queue.  Must implement Comparable.
*/
UniquePriorityQueue.prototype.push = UniquePriorityQueue.prototype.insert;
