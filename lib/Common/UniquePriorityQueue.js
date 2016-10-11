/** @class
* Enforces uniqueness of enqueued elements;
* attempts made to enqueue an element that is
* already in the queue will be ignored.
*
* Elements must implement getKey() method
*/
function UniquePriorityQueue() {
  PriorityQueue.call(this);
  this._entryKeys = {};
}

UniquePriorityQueue.prototype = new PriorityQueue();
UniquePriorityQueue.prototype.constructor = UniquePriorityQueue;

/** @override
*/
UniquePriorityQueue.prototype.insert = function(element) {
  if (this._entryKeys[element.getKey()]) return;
  PriorityQueue.prototype.insert.call(this, element);
};

UniquePriorityQueue.prototype.clear = function() {
  this._entryKeys = {};
  PriorityQueue.prototype.clear.call(this);
};
