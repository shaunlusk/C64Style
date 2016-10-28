C64Style.GfxElementZIndexComparable = function(parentElement) {
  this._parentElement = parentElement;
};

C64Style.GfxElementZIndexComparable.prototype.getElement = function() {return this._parentElement;};

/**
* @function
* @name IComparable#compareTo
* @param other {Object} The object to compare to this one.
* @returns {int} -1: less than the other object; 0 equivalent to the other object; 1 greater than the other object.
*/
C64Style.GfxElementZIndexComparable.prototype.compareTo = function(other) {
  if (this._parentElement.getZIndex() < other._parentElement.getZIndex()) return -1;
  if (this._parentElement.getZIndex() === other._parentElement.getZIndex()) return 0;
  return 1;
};

C64Style.GfxElementZIndexComparable.prototype.equals = function(other) {
  return this._parentElement.getZIndex() === other._parentElement.getZIndex();
};

/**
* Implementation for getKey for UniquePriorityQueue
*/
C64Style.GfxElementZIndexComparable.prototype.getKey = function() {
  return this._parentElement.getId();
};
