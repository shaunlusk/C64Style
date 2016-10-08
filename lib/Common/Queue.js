var C64Style = C64Style || {};

C64Style.Queue = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
};
C64Style.Queue.prototype.push = function(elem) {
  var qelem = new C64Style.QueueElement(elem,null);
  if (this.size === 0) {
    this.head = qelem;
  } else {
    this.tail.next = qelem;
  }
  this.tail = qelem;
  this.size++;
};
C64Style.Queue.prototype.pop = function() {
  var temp = this.head;
  if (this.head !== null) {
    this.head = this.head.next;
    this.size--;
  }

  return temp === null ? null : temp.elem;
};
C64Style.Queue.prototype.clear = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
};
C64Style.Queue.prototype.newIterator = function() {
  return new C64Style.QueueIterator(this.head);
};
C64Style.Queue.prototype.contains = function(target) {
  var it = this.newIterator();
  var element = null;
  while ((element = it.getCurrent()) !== null ) {
    if (element.equals(target)) return true;
    it.next();
  }
  return false;
};

C64Style.Queue.prototype.getByEquality = function(target) {
  var it = this.newIterator();
  var element = null;
  while ((element = it.getCurrent()) !== null ) {
    if (element.equals(target)) return element;
    it.next();
  }
  return null;
};

C64Style.QueueElement = function(elem,next) {
  this.elem = elem;
  this.next = next;
};

C64Style.QueueIterator = function(head) {
  this._ptr = head;
};
C64Style.QueueIterator.prototype.getCurrent = function() {
  return this._ptr === null ? null : this._ptr.elem;
};
C64Style.QueueIterator.prototype.next = function() {
  this._ptr = this._ptr === null ? null : this._ptr.next;
};
