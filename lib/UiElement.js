/**
* note that "last" properties are only updated during clear.
*/
C64Style.UiElement = function(x, y, scaleX, scaleY, props) {
  props = props || {};
  this._id = C64Style.UiElement.id++;
  this._dirty = true;
  this._x = x;
  this._y = y;
  this._width = 1;
  this._height = 1;
  this._scaleX = scaleX;
  this._scaleY = scaleY;
  this._lastX = x;
  this._lastY = y;
  this._dw = this._width * this._scaleX;
  this._dh = this._height * this._scaleY;
  this._lastDw = this._dw;
  this._lastDh = this._dh;
  this._parentLayer = null;
  this._hidden = false;
  this._hiddenRecently = false;
  this._data = {};
  this._xMoveRate = 0;
  this._xMoveFractionalAccumulator = 0;
  this._yMoveRate = 0;
  this._yMoveFractionalAccumulator = 0;
  this._zIndex = -1;
  this._removed = false;

  this._rotation = null;
  this._baseRotation = props.baseRotation || null;

  this._diagonalSize = 0; // only needed for determining collision box when rotated
  this._rotatedX = 0;
  this._rotatedY = 0;
  this._rotatedLastX = 0;
  this._rotatedLastY = 0;
  this._wasRotated = false; // was it in a rotated stat during the last frame
  this._lastDiagonalSize = 0;

  this._moveQueue = new DSJS.Queue();
  this._currentMove = null;

  this._zIndexComparable = new C64Style.UiElementZIndexComparable(this);
};

C64Style.UiElement.prototype.getX = function() {return this._x;};
C64Style.UiElement.prototype.getY = function() {return this._Y;};

C64Style.UiElement.prototype.setX = function(x) {
  this._x = x;
  this._dirty = true;
};
C64Style.UiElement.prototype.setY = function(Y) {
  this._y = y;
  this._dirty = true;
};

C64Style.UiElement.prototype.setDirty = function(boolean) {this._dirty = boolean;};
C64Style.UiElement.prototype.isDirty = function() {return this._dirty;};

C64Style.UiElement.prototype.setRemoved = function(boolean) {this._removed = boolean;};
C64Style.UiElement.prototype.isRemoved = function() {return this._removed;};

C64Style.UiElement.prototype.setZIndex = function(zIndex) {this._zIndex = zIndex;};
C64Style.UiElement.prototype.getZIndex = function() {return this._zIndex;};

C64Style.UiElement.prototype.setScaleX = function(scaleX) {
  this._scaleX = scaleX;
  this._dw = this._width * this._scaleX;
  this._recalculateDiagonalSize();
  this._recalculateRotatedCollisionBox();
  this._dirty = true;
};

C64Style.UiElement.prototype.setScaleY = function(scaleY) {
  this._scaleY = scaleY;
  this._dh = this._height * this._scaleY;
  this._recalculateDiagonalSize();
  this._recalculateRotatedCollisionBox();
  this._dirty = true;
};

C64Style.UiElement.prototype.setScale = function(scaleX, scaleY) {
  this._scaleX = scaleX;
  this._scaleY = scaleY;
  this._dw = this._width * this._scaleX;
  this._dh = this._height * this._scaleY;
  this._recalculateDiagonalSize();
  this._recalculateRotatedCollisionBox();
  this._dirty = true;
};

C64Style.UiElement.prototype.getUnAdjustedRotation = function() { return this._rotation; };
C64Style.UiElement.prototype.getBaseRotation = function() { return this._baseRotation; };
C64Style.UiElement.prototype.getRotation = function() {
  if (this._rotation || this._baseRotation)
  return (this._rotation || 0) + (this._baseRotation || 0);
  return null;
};

C64Style.UiElement.prototype.setRotation = function(rotation) {
  this._rotation = rotation;
  if (this._rotation === null) {
    if (this._wasRotated) this._dirty = true;
    return;
  }
  this._recalculateDiagonalSize();
  this._recalculateRotatedCollisionBox();
  this._dirty = true;
};
C64Style.UiElement.prototype.setBaseRotation = function(rotation) {
  this._baseRotation = rotation;
  if (this._baseRotation === null) {
    if (this._wasRotated) this._dirty = true;
    return;
  }
  this._recalculateDiagonalSize();
  this._recalculateRotatedCollisionBox();
  this._dirty = true;
};

C64Style.UiElement.prototype._recalculateDiagonalSize = function() {
  if (this.getRotation() === null) return;
  // calculate diagonal
  // Note that for any amount of rotation, an expanded bounding box is used
  this._diagonalSize = Math.ceil(Math.sqrt( Math.pow(this._dw, 2) + Math.pow(this._dh, 2)));
};

C64Style.UiElement.prototype._recalculateRotatedCollisionBox = function() {
  if (this.getRotation() === null) return;
  this._rotatedX = Math.floor(this._x - (this._diagonalSize - this._dw) / 2);
  this._rotatedY = Math.floor(this._y - (this._diagonalSize - this._dh) / 2);
};

C64Style.UiElement.prototype.getZIndexComparable = function() {return this._zIndexComparable;};

// C64Style.UiElement.prototype.setMoveRates = function(xMoveRate, yMoveRate) {
//   this._xMoveRate = xMoveRate;
//   this._yMoveRate = yMoveRate;
// };

C64Style.UiElement.prototype.getData = function() {return this._data;};

C64Style.UiElement.prototype.clear = function(context) {
  if (!this._dirty) return;
  if (this._rotation) {
    // clear area that matches the collision bounding box that was checked
    context.clearRect(this._rotatedLastX - 1, this._rotatedLastY - 1, this._diagonalSize + 2, this._diagonalSize + 2);
  } else {
    context.clearRect(this._lastX - 1,this._lastY - 1, this._dw + 2, this._dh + 2);
  }
  if (this._hidden) {
    this.setDirty(false);
    this._hiddenRecently = false;
  }
  this._lastX = this._x;
  this._lastY = this._y;
  this._lastDw = this._dw;
  this._lastDh = this._dh;
  if (this.getRotation()) {
    this._rotatedLastX = this._rotatedX;
    this._rotatedLastY = this._rotatedY;
    this._lastDiagonalSize = this._diagonalSize;
  }
};

C64Style.UiElement.prototype.update = function(time,diff) {
  var amount,sign,intAmount;

  // if (this._xMoveRate !== 0) {
  //   amount = this._xMoveFractionalAccumulator + diff * this._xMoveRate / 1000;
  //   sign = Math.sign(amount);
  //   intAmount = Math.trunc(amount);
  //   this._xMoveFractionalAccumulator = sign * (Math.abs(amount) - Math.abs(intAmount));
  //   this._x += intAmount;
  //   if (this._x !== this._lastX) this.setDirty(true);
  // } else {
  //   this._xMoveFractionalAccumulator = 0;
  // }
  // if (this._yMoveRate !== 0) {
  //   amount = this._yMoveFractionalAccumulator + diff * this._yMoveRate / 1000;
  //   sign = Math.sign(amount);
  //   intAmount = Math.trunc(amount);
  //   this._yMoveFractionalAccumulator = sign * (Math.abs(amount) - Math.abs(intAmount));
  //   this._y += intAmount;
  //   if (this._y !== this._lastY) this.setDirty(true);
  // } else {
  //   this._yMoveFractionalAccumulator = 0;
  // }
  //
  // // Will take precedence over move rate
  this._updateMoveOrder(time,diff);

  if (this._dirty) {
    this._recalculateRotatedCollisionBox();
    return this;
  }
  return null;
};

C64Style.UiElement.prototype._updateMoveOrder = function(time,diff) {
  if (this._currentMove !== null) {
    this._currentMove.update(time,diff);
    this.setDirty(true);
  }
};

C64Style.UiElement.prototype.render = function(context) {
  if (!this._dirty || this._hidden) return;
  if (this._rotation) this._wasRotated = true;
  else this._wasRotated = false;
  this.setDirty(false);
};

C64Style.UiElement.prototype.setParentLayer = function(parentLayer) {this._parentLayer = parentLayer;};
C64Style.UiElement.prototype.getParentLayer = function() {return this._parentLayer;};

C64Style.UiElement.prototype.show = function() {
  this._hidden = false;
  this._hiddenRecently = false;
  this.setDirty(true);
};

C64Style.UiElement.prototype.hide = function() {
  this._hidden = true;
  this._hiddenRecently = true;
  this.setDirty(true);
};

C64Style.UiElement.prototype.pushMove = function(move) {
  // move.setElement(this);
  // move.setElementCallback(this.moveOrderCallback.bind(this), null);
  this._moveQueue.push(move);
  if (this._currentMove === null) {
    this._runMove();
  }
};

C64Style.UiElement.prototype.moveTo = function(x,y,duration, callback) {
  this.pushMove(new MoveOrder(this, x, y, duration, this.moveOrderCallback.bind(this), callback));
};

C64Style.UiElement.prototype._runMove = function() {
  if (this._moveQueue.size > 0) {
    this._currentMove = this._moveQueue.pop();
    this._currentMove.start();
    return true;
  }
  this._currentMove = null;
  return false;
};

C64Style.UiElement.prototype.moveOrderCallback = function() {
  this._currentMove = null;
  this._runMove();
};

C64Style.UiElement.prototype.clearMoveQueue = function() {
  this._moveQueue.clear();
};


C64Style.UiElement.prototype.turnOff = function() {
  this._moveQueue.clear();
  this._currentMove = null;
  this._xMoveRate = 0;
  this._xMoveFractionalAccumulator = 0;
  this._yMoveRate = 0;
  this._yMoveFractionalAccumulator = 0;
  this._hidden = true;
  this._hiddenRecently = true;
  // ensure it gets cleared
  this.setDirty(true);
};

C64Style.UiElement.prototype.handleMouseEvent = function(e,x,y) {
  if (this._checkIfCoordsOnThisElement(x,y)) {
    return this;
  }
  return null;
};

C64Style.UiElement.prototype._checkIfCoordsOnThisElement = function(x,y) {
  if (this._hidden) return false;
  if (this._x <= x &&
    x <= this._x + (this._dw) &&
    this._y <= y &&
    y <= this._y + (this._dh)
  ) {
    return true;
  }
  return false;
};

C64Style.UiElement.prototype.getScaledWidth = function() {return this._dw;};
C64Style.UiElement.prototype.getScaledHeight = function() {return this._dh;};

C64Style.UiElement.prototype.getCollisionBoxX = function() {
  if (this.getRotation()) return this._rotatedX;
  return this._x;
};
C64Style.UiElement.prototype.getCollisionBoxY = function() {
  if (this.getRotation()) return this._rotatedY;
  return this._y;
};
C64Style.UiElement.prototype.getCollisionBoxLastX = function() {
  if (this._wasRotated) return this._rotatedLastX;
  return this._lastX;
};
C64Style.UiElement.prototype.getCollisionBoxLastY = function() {
  if (this._wasRotated) return this._rotatedLastY;
  return this._lastY;
};
C64Style.UiElement.prototype.getCollisionBoxWidth = function() {
  if (this.getRotation()) return this._diagonalSize;
  return this._dw;
};
C64Style.UiElement.prototype.getCollisionBoxHeight = function() {
  if (this.getRotation()) return this._diagonalSize;
  return this._dh;
};
C64Style.UiElement.prototype.getCollisionBoxLastWidth = function() {
  if (this._wasRotated) return this._lastDiagonalSize;
  return this._lastDw;
};
C64Style.UiElement.prototype.getCollisionBoxLastHeight = function() {
  if (this._wasRotated) return this._lastDiagonalSize;
  return this._lastDh;
};

C64Style.UiElement.prototype.collidesWith = function(rect2) {
  var thisX = this.getCollisionBoxX();
  var thatX = rect2.getCollisionBoxX();
  var thisWidth = this.getCollisionBoxWidth();
  var thatWidth = rect2.getCollisionBoxWidth();
  var thisY = this.getCollisionBoxY();
  var thatY = rect2.getCollisionBoxY();
  var thisHeight = this.getCollisionBoxHeight();
  var thatHeight = rect2.getCollisionBoxHeight();
  var result = thisX < thatX + thatWidth &&
    thisX + thisWidth > thatX &&
    thisY < thatY + thatHeight &&
    thisY + thisHeight > thatY;
  return result;
};

C64Style.UiElement.prototype.collidesWith_LastPosition = function(rect2) {
  var thisLastX = this.getCollisionBoxLastX();
  var thatLastX = rect2.getCollisionBoxLastX();
  var thisWidth = this.getCollisionBoxLastWidth();
  var thatWidth = rect2.getCollisionBoxLastWidth();
  var thisLastY = this.getCollisionBoxLastY();
  var thatLastY = rect2.getCollisionBoxLastY();
  var thisHeight = this.getCollisionBoxLastHeight();
  var thatHeight = rect2.getCollisionBoxLastHeight();
  var result = thisLastX < thatLastX + thatWidth &&
    thisLastX + thisWidth > thatLastX &&
    thisLastY < thatLastY + thatHeight &&
    thisLastY + thisHeight > thatLastY;
   return result;
};

C64Style.UiElement.id = 0;

C64Style.UiElementZIndexComparable = function(parentElement) {
  this._parentElement = parentElement;
};

C64Style.UiElementZIndexComparable.prototype.getElement = function() {return this._parentElement;};

/**
* @function
* @name IComparable#compareTo
* @param other {Object} The object to compare to this one.
* @returns {int} -1: less than the other object; 0 equivalent to the other object; 1 greater than the other object.
*/
C64Style.UiElementZIndexComparable.prototype.compareTo = function(other) {
  if (this._parentElement.getZIndex() < other._parentElement.getZIndex()) return -1;
  if (this._parentElement.getZIndex() === other._parentElement.getZIndex()) return 0;
  return 1;
};

C64Style.UiElementZIndexComparable.prototype.equals = function(other) {
  return this._parentElement.getZIndex() === other._parentElement.getZIndex();
};
