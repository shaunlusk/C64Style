var C64Style = C64Style || {};

C64Style.GfxElement = function(engineContext, parentLayer, props) {
  props = props || {};
  this._id = C64Style.GfxElement.id++;
  this._engineContext = engineContext;
  this._parentLayer = parentLayer;
  this._canvasContext = parentLayer ? parentLayer.getCanvasContext() : null;
  this._scaleX = props.scaleX || 1;
  this._scaleY = props.scaleY || 1;
  this._dirty = true;
  this._hasCollision = false;
  this._hadCollisionPreviousFrame = false;
  this._hidden = false;
  this._zIndex = -1 || props.zIndex;
  this._zIndexComparable = new C64Style.GfxElementZIndexComparable(this);
};
C64Style.GfxElement.id = 0;

C64Style.GfxElement.prototype.getId = function() {return this._id;};
C64Style.GfxElement.prototype.isDirty = function() {
  return this._dirty || this._hasCollision || this._hadCollisionPreviousFrame;
};
C64Style.GfxElement.prototype.setDirty = function(dirty) {this._dirty = dirty;};
C64Style.GfxElement.prototype.isHidden = function() {return this._hidden;};
C64Style.GfxElement.prototype.setHidden = function(hidden) {this._hidden = hidden;};
C64Style.GfxElement.prototype.setHasCollision = function(hasCollision) {this._hasCollision = hasCollision;};
C64Style.GfxElement.prototype.hasCollision = function() {return this._hasCollision;};
C64Style.GfxElement.prototype.getZIndex = function() {return this._zIndex;};
C64Style.GfxElement.prototype.setZIndex = function(zIndex) {this._zIndex = zIndex;};
C64Style.GfxElement.prototype.getParentLayer = function() {return this._parentLayer;};
C64Style.GfxElement.prototype.getEngineContext = function() {return this._engineContext;};

C64Style.GfxElement.prototype.getScaleX = function() {return this.getScaleX() * this.getEngineContext().getScaleX();};
C64Style.GfxElement.prototype.getScaleY = function() {return this.getScaleY() * this.getEngineContext().getScaleY();};

C64Style.GfxElement.prototype.getElementScaleX = function() {return this._scaleX;};
C64Style.GfxElement.prototype.getElementScaleY = function() {return this._scaleY;};
C64Style.GfxElement.prototype.setElementScaleX = function(scaleX) {this._scaleX = scaleX;};
C64Style.GfxElement.prototype.setElementScaleY = function(scaleY) {this._scaleY = scaleY;};


C64Style.GfxElement.prototype.getWidth = function() {throw new Error("getWidth needs to be implemented on this element.");};
C64Style.GfxElement.prototype.getHeight = function() {throw new Error("getHeight needs to be implemented on this element.");};

C64Style.GfxElement.prototype.update = function(time,diff) {
  if (this.isDirty()) return this;
};

C64Style.GfxElement.prototype.clear = function() {

};

C64Style.GfxElement.prototype.render = function() {
  this.setDirty(false);
  this._hadCollisionPreviousFrame = this.hasCollision();
  this.setHasCollision(false);
};

C64Style.GfxElement.prototype.collidesWith = function(element) {

};

C64Style.GfxElement.prototype.getZIndexComparable = function() {
  return this._zIndexComparable;
};

C64Style.GfxElement.prototype.finalize = function() {
  this.setParentLayer(null);
  this._engineContext = null;
  this._canvasContext = null;
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
