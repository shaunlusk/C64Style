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
  this._hidden = props.hidden || false;
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
  if (x !== this._x) this.setDirty(true);
  this._x = x;
};
C64Style.GfxElement.prototype.setY = function(y) {
  if (y !== this._y) this.setDirty(true);
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
C64Style.GfxElement.prototype.getMoveRateX = function() {return this._xMoveRate;};
C64Style.GfxElement.prototype.getMoveRateY = function() {return this._yMoveRate;};

C64Style.GfxElement.prototype.moveTo = function(x,y,duration) {
  // TODO account for scale
  duration = duration || 16;
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
  this.hide();
};

C64Style.GfxElement.prototype.show = function() {
  this._hidden = false;
  this.setDirty(true);
};

C64Style.GfxElement.prototype.hide = function() {
  this._hidden = true;
  this.setDirty(true);
};

C64Style.GfxElement.prototype.update = function(time,diff) {
  this._updateLocationFromMoveRates(time,diff);
  // Will take precedence over move rate
  this._updateMoveOrder(time,diff);

  if (this.getX() !== this.getLastX() || this.getY() !== this.getLastY()) this.setDirty(true);

  if (this.isDirty()) {
    return this;
  }
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

C64Style.GfxElement.prototype.clear = function(time, diff) {
  this.getCanvasContext().clearRect(
    this.getLastX() * this.getScaleX() - 1,
    this.getLastY() * this.getScaleY() - 1,
    this.getWidth() * this.getScaleX() + 2,
    this.getHeight() * this.getScaleY() + 2 );
};

/**
* Override me, but call this method when other rendering work is done.
*/
C64Style.GfxElement.prototype.render = function(time, diff) {
  this.setLastX( this.getX() );
  this.setLastY( this.getY() );
  this.setDirty(false);
  this._hadCollisionPreviousFrame = this.hasCollision();
  this.setHasCollision(false);
};

C64Style.GfxElement.prototype.collidesWith = function(element) {
  var thisX = this.getCollisionBoxX();
  var thatX = element.getCollisionBoxX();
  var thisWidth = this.getCollisionBoxWidth();
  var thatWidth = element.getCollisionBoxWidth();
  var thisY = this.getCollisionBoxY();
  var thatY = element.getCollisionBoxY();
  var thisHeight = this.getCollisionBoxHeight();
  var thatHeight = element.getCollisionBoxHeight();
  var result = thisX < thatX + thatWidth &&
    thisX + thisWidth > thatX &&
    thisY < thatY + thatHeight &&
    thisY + thisHeight > thatY;
  if (result) {
    this.getEngineContext().notify(
      new C64Style.Event(C64Style.EventType.ELEMENT_COLLISION, {
        element1 : this,
        element2 : element
      })
    );
  }
  return result;
};

C64Style.GfxElement.prototype.collidesWithCoordinates = function(x, y) {
  var result = x >= this.getCollisionBoxX() &&
    x <= this.getCollisionBoxX() + this.getCollisionBoxWidth() &&
    y >= this.getCollisionBoxY() &&
      y <= this.getCollisionBoxY() + this.getCollisionBoxHeight();
  return result;
};

C64Style.GfxElement.prototype.collidesWithX = function(x) {
  var result = x >= this.getCollisionBoxX() &&
    x <= this.getCollisionBoxX() + this.getCollisionBoxWidth();
  return result;
};
C64Style.GfxElement.prototype.collidesWithY = function(y) {
  var result = y >= this.getCollisionBoxY() &&
      y <= this.getCollisionBoxY() + this.getCollisionBoxHeight();
  return result;
};

C64Style.GfxElement.prototype.getCollisionBoxX = function() {return this.getX() * this.getScaleX() - 1;};
C64Style.GfxElement.prototype.getCollisionBoxY = function() {return this.getY() * this.getScaleY() - 1;};
C64Style.GfxElement.prototype.getCollisionBoxWidth = function() {return this.getWidth() * this.getScaleX() + 2;};
C64Style.GfxElement.prototype.getCollisionBoxHeight = function() {return this.getHeight() * this.getScaleY() + 2;};

C64Style.GfxElement.prototype.getZIndexComparable = function() {
  return this._zIndexComparable;
};

C64Style.GfxElement.prototype.finalize = function() {
  this.setParentLayer(null);
  this._engineContext = null;
  this._canvasContext = null;
};
