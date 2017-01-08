var C64Style = C64Style || {};

/** Simple Queue class
* @constructor
*/
C64Style.Queue = function() {
  this.head = null;
  this.tail = null;
  this._size = 0;
};

/** Adds a new item to the queue.
* @param {Object} elem The item to be added to the queue.
*/
C64Style.Queue.prototype.push = function(elem) {
  var qelem = new C64Style.QueueElement(elem,null);
  if (this._size === 0) {
    this.head = qelem;
  } else {
    this.tail.next = qelem;
  }
  this.tail = qelem;
  this._size++;
};

/** Removes and returns the item at the front of the queue
* @return {Object} The item at the front of the queue. Null if queue is empty.
*/
C64Style.Queue.prototype.pop = function() {
  var temp = this.head;
  if (this.head !== null) {
    this.head = this.head.next;
    this._size--;
  }

  return temp === null ? null : temp.elem;
};

/** Clear the queue. */
C64Style.Queue.prototype.clear = function() {
  this.head = null;
  this.tail = null;
  this._size = 0;
};

/** Retrieve an iterator for this queue.
* @returns {C64Style.QueueIterator}
*/
C64Style.Queue.prototype.newIterator = function() {
  return new C64Style.QueueIterator(this.head);
};

/** Returns whether this queue contains the target object.
* @returns {boolean}
*/
C64Style.Queue.prototype.contains = function(target) {
  var it = this.newIterator();
  var element = null;
  while ((element = it.getCurrent()) !== null ) {
    if (element === target || (C64Style.isFunction(element.equals) && element.equals(target))) return true;
    it.next();
  }
  return false;
};

/** Check if the specified object exists in the queue; if so return the element, else return null.
* @returns {Object}
*/
C64Style.Queue.prototype.getByEquality = function(target) {
  var it = this.newIterator();
  var element = null;
  while ((element = it.getCurrent()) !== null ) {
    if (element === target || (C64Style.isFunction(element.equals) && element.equals(target))) return element;
    it.next();
  }
  return null;
};

/** Returns the size of the queue
* @return {int} The size of the queue.
*/
C64Style.Queue.prototype.size = function() {
  return this._size;
};

/** The node class for the Queue.
* @constructor
* @param {Object} elem The object for this node.
* @param {Object} next The next element in the queue.
*/
C64Style.QueueElement = function(elem,next) {
  this.elem = elem;
  this.next = next;
};

/** An iterator for a Queue.
* @constructor
* @param {C64Style.QueueElement} head The head element of the Queue.
*/
C64Style.QueueIterator = function(head) {
  this._ptr = head;
};

/** Return the object for the current position in the queue.
*/
C64Style.QueueIterator.prototype.getCurrent = function() {
  return this._ptr === null ? null : this._ptr.elem;
};

/** Move the iterator to the next position in the queue. */
C64Style.QueueIterator.prototype.next = function() {
  this._ptr = this._ptr === null ? null : this._ptr.next;
};
