function LinkedList() {
  this._head = null;
}

LinkedList.prototype.getHead = function() {

};
LinkedList.prototype.getIterator = function() {

};

LinkedList.prototype.push = function(element) {

};

LinkedList.prototype.Node = function(element)  {
  this._previous = null;
  this._next = null;
  this._element = element;
};

LinkedList.prototype.Node.prototype.get = function() {
  return this._element;
};

LinkedList.prototype.Node.prototype.next = function() {
  return this._next;
};

LinkedList.prototype.Node.prototype.previous = function() {
  return this._previous;
};

LinkedList.prototype.Node.prototype.setPrevious = function(node) {
  this._previous = node;
};

LinkedList.prototype.Node.prototype.setNext = function(node) {
  this._next = node;
};
