var C64Style = C64Style || {};

C64Style.GfxElement = function(engineContext, parentLayer, canvasContext, scaleX, scaleY, props) {
  props = props || props;
  this._id = GfxElement.id++;
  this._engineContext = engineContext;
  this._parentLayer = parentLayer;
  this._canvasContext = canvasContext;
  this._scaleX = scaleX;
  this._scaleY = scaleY;
  this._dirty = true;
  this._hasCollision = false;
  this._hadCollisionPreviousFrame = false;
  this._hidden = false;
  this._zIndex = -1;
  this._zIndexComparable = new C64Style.GfxElementZIndexComparable(this);
};
GfxElement.id = 0;

C64Style.GfxElement.prototype.getId = function() {return this._id;};
C64Style.GfxElement.prototype.isDirty = function() {
  return this._dirty || this._hasCollision;
};
C64Style.GfxElement.prototype.setDirty = function(dirty) {this._dirty = dirty;};
C64Style.GfxElement.prototype.isHidden = function() {return this._hidden;};
C64Style.GfxElement.prototype.setHidden = function(hidden) {this._hidden = hidden;};
C64Style.GfxElement.prototype.setHasCollision = function(hasCollision) {this._hasCollision = hasCollision;};
C64Style.GfxElement.prototype.hasCollision = function() {return this._hasCollision;};
C64Style.GfxElement.prototype.getZIndex = function() {return this._zIndex;};
C64Style.GfxElement.prototype.setZIndex = function(zIndex) {this._zIndex = zIndex;};


C64Style.GfxElement.prototype.update = function(time,diff) {

};

C64Style.GfxElement.prototype.clear = function() {

};

C64Style.GfxElement.prototype.render = function() {

};

C64Style.GfxElement.prototype.collidesWith = function(element) {

};

C64Style.GfxElement.prototype.getZIndexComparable = function() {
  return this._zIndexComparable;
};

C64Style.GfxElement.prototype.finalize = function() {
  this.setParentLayer(null);
};

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
