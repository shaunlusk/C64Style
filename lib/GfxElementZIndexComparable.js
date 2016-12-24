var C64Style = C64Style || {};

/** Comparable for a GfxElement.  Used by GfxLayer to determine rendering order.
* @constructor
* @implements {IComparable}
* @param {C64Style.GfxElement} parentElement The element to create this comparable for.
*/
C64Style.GfxElementZIndexComparable = function(parentElement) {
  this._parentElement = parentElement;
};

/** Returns the element for this elementComparable.
* @returns {C64Style.GfxElement}
*/
C64Style.GfxElementZIndexComparable.prototype.getElement = function() {return this._parentElement;};

/**
* @implements {IComparable.compareTo}
* @param {C64Style.GfxElementZIndexComparable} other The object to compare to this one.
* @returns {integer} -1: less than the other object; 0 equivalent to the other object; 1 greater than the other object.
*/
C64Style.GfxElementZIndexComparable.prototype.compareTo = function(other) {
  if (this._parentElement.getZIndex() < other._parentElement.getZIndex()) return -1;
  if (this._parentElement.getZIndex() === other._parentElement.getZIndex()) return 0;
  return 1;
};

/**
* @implements {IComparable.equals}
* @param {C64Style.GfxElementZIndexComparable} other The object to compare to this one.
* @returns {boolean} true if elements are equivalent, false otherwise.
*/
C64Style.GfxElementZIndexComparable.prototype.equals = function(other) {
  return this._parentElement.getZIndex() === other._parentElement.getZIndex();
};

/**Returns this comparables key (uses Id from parent element).
* Implementation for getKey for UniquePriorityQueue
* @returns {integer}
*/
C64Style.GfxElementZIndexComparable.prototype.getKey = function() {
  return this._parentElement.getId();
};
