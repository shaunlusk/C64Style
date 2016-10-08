var C64Style = C64Style || {};

C64Style.GfxElement = function(engineContext, parentLayer, props) {
  props = props || {};
  this._id = C64Style.GfxElement.id++;
  this._engineContext = engineContext;
  this._parentLayer = parentLayer;
  this._canvasContext = parentLayer ? parentLayer.getCanvasContext() : null;
  this._scaleX = props.scaleX || 1;
  this._scaleY = props.scaleY || 1;
  this._currentMove = null;
  this._moveQueue = new C64Style.Queue();
  this._xMoveRate = 0;
  this._xMoveFractionalAccumulator = 0;
  this._yMoveRate = 0;
  this._yMoveFractionalAccumulator = 0;
  this._dirty = true;
  this._hasCollision = false;
  this._hadCollisionPreviousFrame = false;
  this._hidden = false;
  this._x = props.x || 0;
  this._y = props.y || 0;
  this._lastX = 0;
  this._lastY = 0;
  this._zIndex = props.zIndex || -1;
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
C64Style.GfxElement.prototype.getCanvasContext = function() {return this._canvasContext;};
C64Style.GfxElement.prototype.getEngineContext = function() {return this._engineContext;};

C64Style.GfxElement.prototype.getScaleX = function() {return this.getElementScaleX() * this.getEngineContext().getScaleX();};
C64Style.GfxElement.prototype.getScaleY = function() {return this.getElementScaleY() * this.getEngineContext().getScaleY();};

C64Style.GfxElement.prototype.getElementScaleX = function() {return this._scaleX;};
C64Style.GfxElement.prototype.getElementScaleY = function() {return this._scaleY;};
C64Style.GfxElement.prototype.setElementScaleX = function(scaleX) {this._scaleX = scaleX;};
C64Style.GfxElement.prototype.setElementScaleY = function(scaleY) {this._scaleY = scaleY;};

C64Style.GfxElement.prototype.getX = function() {return this._x;};
C64Style.GfxElement.prototype.getY = function() {return this._y;};
C64Style.GfxElement.prototype.setX = function(x) {
  this.setDirty(true);
  this._x = x;
};
C64Style.GfxElement.prototype.setY = function(y) {
  this.setDirty(true);
  this._y = y;
};

C64Style.GfxElement.prototype.getLastX = function() {return this._lastX;};
C64Style.GfxElement.prototype.getLastY = function() {return this._lastY;};
C64Style.GfxElement.prototype.setLastX = function(x) {this._lastX = x;};
C64Style.GfxElement.prototype.setLastY = function(y) {this._lastY = y;};

C64Style.GfxElement.prototype.getWidth = function() {throw new Error("getWidth needs to be implemented on this element.");};
C64Style.GfxElement.prototype.getHeight = function() {throw new Error("getHeight needs to be implemented on this element.");};

C64Style.GfxElement.prototype.setMoveRates = function(xMoveRate, yMoveRate) {
  this._xMoveRate = xMoveRate;
  this._yMoveRate = yMoveRate;
};

C64Style.GfxElement.prototype.moveTo = function(x,y,duration) {
  var moveOrder = new C64Style.MoveOrder(this, x, y, duration, this.moveOrderCallback.bind(this));
  this._moveQueue.push(moveOrder);
  if (this._currentMove === null) {
    this._runMove();
  }
};

C64Style.GfxElement.prototype._runMove = function() {
  if (this._moveQueue.size > 0) {
    this._currentMove = this._moveQueue.pop();
    this._currentMove.start();
    return true;
  }
  this._currentMove = null;
  return false;
};

C64Style.GfxElement.prototype.moveOrderCallback = function() {
  this._currentMove = null;
  this._runMove();
};

C64Style.GfxElement.prototype.clearMoveQueue = function() {
  this._moveQueue.clear();
};

C64Style.GfxElement.prototype.turnOff = function() {
  this._moveQueue.clear();
  this._currentMove = null;
  this._xMoveRate = 0;
  this._xMoveFractionalAccumulator = 0;
  this._yMoveRate = 0;
  this._yMoveFractionalAccumulator = 0;
  this.hidden = true;
  // ensure it gets cleared
  this.setDirty(true);
};

C64Style.GfxElement.prototype.update = function(time,diff) {
  this._updateLocationFromMoveRates(time,diff);
  // Will take precedence over move rate
  this._updateMoveOrder(time,diff);

  if (this.isDirty()) return this;
  return null;
};

C64Style.GfxElement.prototype._updateLocationFromMoveRates = function(time, diff) {
  var amount,sign,intAmount;

  if (this._xMoveRate !== 0) {
    amount = this._xMoveFractionalAccumulator + diff * this._xMoveRate / 1000;
    sign = Math.sign(amount);
    intAmount = Math.trunc(amount);
    this._xMoveFractionalAccumulator = sign * (Math.abs(amount) - Math.abs(intAmount));
    this._x += intAmount;
    if (this._x !== this._lastX) this.setDirty(true);
  } else {
    this._xMoveFractionalAccumulator = 0;
  }
  if (this._yMoveRate !== 0) {
    amount = this._yMoveFractionalAccumulator + diff * this._yMoveRate / 1000;
    sign = Math.sign(amount);
    intAmount = Math.trunc(amount);
    this._yMoveFractionalAccumulator = sign * (Math.abs(amount) - Math.abs(intAmount));
    this._y += intAmount;
    if (this._y !== this._lastY) this.setDirty(true);
  } else {
    this._yMoveFractionalAccumulator = 0;
  }
};

C64Style.GfxElement.prototype._updateMoveOrder = function(time,diff) {
  if (this._currentMove !== null) {
    this._currentMove.update(time,diff);
    this.setDirty(true);
  }
};

C64Style.GfxElement.prototype.clear = function() {
  this.getCanvasContext().clearRect(this.getLastX() - 1, this.getLastY() - 1, this.getWidth() + 2, this.getHeight() + 2);
};

C64Style.GfxElement.prototype.render = function() {
  this.setLastX( this.getX() );
  this.setLastY( this.getY() );
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
