/**
* note that "last" properties are only updated during clear.
*/
function UiElement(x, y, width, height, scaleX, scaleY, props) {
  props = props || {};
  this.id = UiElement.id++;
  this.dirty = true;
  this.x = x;
  this.y = y;
  // probably don't change height or width once set - instead change scale
  this.width = width;
  this.height = height;
  this.scaleX = scaleX;
  this.scaleY = scaleY;
  this.lastX = x;
  this.lastY = y;
  this.dw = this.width * this.scaleX;
  this.dh = this.height * this.scaleY;
  this._lastDw = this.dw;
  this._lastDh = this.dh;
  this._parentLayer = null;
  this.hidden = false;
  this._hiddenRecently = false;
  this.data = {};
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

  this._zIndexComparable = new UiElementZIndexComparable(this);
}

UiElement.prototype.setDirty = function(boolean) {this.dirty = boolean;};
UiElement.prototype.isDirty = function() {return this.dirty;};

UiElement.prototype.setRemoved = function(boolean) {this._removed = boolean;};
UiElement.prototype.isRemoved = function() {return this._removed;};

UiElement.prototype.setZIndex = function(zIndex) {this._zIndex = zIndex;};
UiElement.prototype.getZIndex = function() {return this._zIndex;};

UiElement.prototype.setScaleX = function(scaleX) {
  this.scaleX = scaleX;
  this.dw = this.width * this.scaleX;
  this._recalculateDiagonalSize();
  this._recalculateRotatedCollisionBox();
  this.dirty = true;
};

UiElement.prototype.setScaleY = function(scaleY) {
  this.scaleY = scaleY;
  this.dh = this.height * this.scaleY;
  this._recalculateDiagonalSize();
  this._recalculateRotatedCollisionBox();
  this.dirty = true;
};

UiElement.prototype.setScale = function(scaleX, scaleY) {
  this.scaleX = scaleX;
  this.scaleY = scaleY;
  this.dw = this.width * this.scaleX;
  this.dh = this.height * this.scaleY;
  this._recalculateDiagonalSize();
  this._recalculateRotatedCollisionBox();
  this.dirty = true;
};

UiElement.prototype.getUnAdjustedRotation = function() { return this._rotation; };
UiElement.prototype.getBaseRotation = function() { return this._baseRotation; };
UiElement.prototype.getRotation = function() {
  if (this._rotation || this._baseRotation)
  return (this._rotation || 0) + (this._baseRotation || 0);
  return null;
};

UiElement.prototype.setRotation = function(rotation) {
  this._rotation = rotation;
  if (this._rotation === null) {
    if (this._wasRotated) this.dirty = true;
    return;
  }
  this._recalculateDiagonalSize();
  this._recalculateRotatedCollisionBox();
  this.dirty = true;
};
UiElement.prototype.setBaseRotation = function(rotation) {
  this._baseRotation = rotation;
  if (this._baseRotation === null) {
    if (this._wasRotated) this.dirty = true;
    return;
  }
  this._recalculateDiagonalSize();
  this._recalculateRotatedCollisionBox();
  this.dirty = true;
};

UiElement.prototype._recalculateDiagonalSize = function() {
  if (this.getRotation() === null) return;
  // calculate diagonal
  // Note that for any amount of rotation, an expanded bounding box is used
  this._diagonalSize = Math.ceil(Math.sqrt( Math.pow(this.dw, 2) + Math.pow(this.dh, 2)));
};

UiElement.prototype._recalculateRotatedCollisionBox = function() {
  if (this.getRotation() === null) return;
  this._rotatedX = Math.floor(this.x - (this._diagonalSize - this.dw) / 2);
  this._rotatedY = Math.floor(this.y - (this._diagonalSize - this.dh) / 2);
};

UiElement.prototype.getZIndexComparable = function() {return this._zIndexComparable;};

UiElement.prototype.setMoveRates = function(xMoveRate, yMoveRate) {
  this._xMoveRate = xMoveRate;
  this._yMoveRate = yMoveRate;
};

UiElement.prototype.getData = function() {return this.data;};

UiElement.prototype.clear = function(context) {
  if (!this.dirty) return;
  if (this._rotation) {
    // clear area that matches the collision bounding box that was checked
    context.clearRect(this._rotatedLastX - 1, this._rotatedLastY - 1, this._diagonalSize + 2, this._diagonalSize + 2);
  } else {
    context.clearRect(this.lastX - 1,this.lastY - 1, this.dw + 2, this.dh + 2);
  }
  if (this.hidden) {
    this.setDirty(false);
    this._hiddenRecently = false;
  }
  this.lastX = this.x;
  this.lastY = this.y;
  this._lastDw = this.dw;
  this._lastDh = this.dh;
  if (this.getRotation()) {
    this._rotatedLastX = this._rotatedX;
    this._rotatedLastY = this._rotatedY;
    this._lastDiagonalSize = this._diagonalSize;
  }
};

UiElement.prototype.update = function(time,diff) {
  var amount,sign,intAmount;

  if (this._xMoveRate !== 0) {
    amount = this._xMoveFractionalAccumulator + diff * this._xMoveRate / 1000;
    sign = Math.sign(amount);
    intAmount = Math.trunc(amount);
    this._xMoveFractionalAccumulator = sign * (Math.abs(amount) - Math.abs(intAmount));
    this.x += intAmount;
    if (this.x !== this.lastX) this.setDirty(true);
  } else {
    this._xMoveFractionalAccumulator = 0;
  }
  if (this._yMoveRate !== 0) {
    amount = this._yMoveFractionalAccumulator + diff * this._yMoveRate / 1000;
    sign = Math.sign(amount);
    intAmount = Math.trunc(amount);
    this._yMoveFractionalAccumulator = sign * (Math.abs(amount) - Math.abs(intAmount));
    this.y += intAmount;
    if (this.y !== this.lastY) this.setDirty(true);
  } else {
    this._yMoveFractionalAccumulator = 0;
  }

  // Will take precedence over move rate
  this._updateMoveOrder(time,diff);

  if (this.dirty) {
    this._recalculateRotatedCollisionBox();
    return this;
  }
  return null;
};

UiElement.prototype._updateMoveOrder = function(time,diff) {
  if (this._currentMove !== null) {
    this._currentMove.update(time,diff);
    this.setDirty(true);
  }
};

UiElement.prototype.render = function(context) {
  if (!this.dirty || this.hidden) return;
  if (this._rotation) this._wasRotated = true;
  else this._wasRotated = false;
  this.setDirty(false);
};

UiElement.prototype.setParentLayer = function(parentLayer) {this._parentLayer = parentLayer;};
UiElement.prototype.getParentLayer = function() {return this._parentLayer;};

UiElement.prototype.show = function() {
  this.hidden = false;
  this._hiddenRecently = false;
  this.setDirty(true);
};

UiElement.prototype.hide = function() {
  this.hidden = true;
  this._hiddenRecently = true;
  this.setDirty(true);
};

UiElement.prototype.pushMove = function(move) {
  move.setElement(this);
  move.setElementCallback(this.moveOrderCallback.bind(this), null);
  this._moveQueue.push(move);
  if (this._currentMove === null) {
    this._runMove();
  }
};

UiElement.prototype.moveTo = function(x,y,duration, callback, callbackArgs) {
  this.pushMove(new MoveOrder(x, y, duration, callback, callbackArgs));
};

UiElement.prototype._runMove = function() {
  if (this._moveQueue.size > 0) {
    this._currentMove = this._moveQueue.pop();
    this._currentMove.start();
    return true;
  }
  this._currentMove = null;
  return false;
};

UiElement.prototype.moveOrderCallback = function() {
  this._currentMove = null;
  this._runMove();
};

UiElement.prototype.clearMoveQueue = function() {
  this._moveQueue.clear();
};


UiElement.prototype.turnOff = function() {
  this._moveQueue.clear();
  this._currentMove = null;
  this._xMoveRate = 0;
  this._xMoveFractionalAccumulator = 0;
  this._yMoveRate = 0;
  this._yMoveFractionalAccumulator = 0;
  this.hidden = true;
  this._hiddenRecently = true;
  // ensure it gets cleared
  this.setDirty(true);
};

UiElement.prototype.handleMouseEvent = function(e,x,y) {
  if (this._checkIfCoordsOnThisElement(x,y)) {
    return this;
  }
  return null;
};

UiElement.prototype._checkIfCoordsOnThisElement = function(x,y) {
  if (this.hidden) return false;
  if (this.x <= x &&
    x <= this.x + (this.dw) &&
    this.y <= y &&
    y <= this.y + (this.dh)
  ) {
    return true;
  }
  return false;
};

UiElement.prototype.getScaledWidth = function() {return this.dw;};
UiElement.prototype.getScaledHeight = function() {return this.dh;};

UiElement.prototype.getCollisionBoxX = function() {
  if (this.getRotation()) return this._rotatedX;
  return this.x;
};
UiElement.prototype.getCollisionBoxY = function() {
  if (this.getRotation()) return this._rotatedY;
  return this.y;
};
UiElement.prototype.getCollisionBoxLastX = function() {
  if (this._wasRotated) return this._rotatedLastX;
  return this.lastX;
};
UiElement.prototype.getCollisionBoxLastY = function() {
  if (this._wasRotated) return this._rotatedLastY;
  return this.lastY;
};
UiElement.prototype.getCollisionBoxWidth = function() {
  if (this.getRotation()) return this._diagonalSize;
  return this.dw;
};
UiElement.prototype.getCollisionBoxHeight = function() {
  if (this.getRotation()) return this._diagonalSize;
  return this.dh;
};
UiElement.prototype.getCollisionBoxLastWidth = function() {
  if (this._wasRotated) return this._lastDiagonalSize;
  return this._lastDw;
};
UiElement.prototype.getCollisionBoxLastHeight = function() {
  if (this._wasRotated) return this._lastDiagonalSize;
  return this._lastDh;
};

UiElement.prototype.collidesWith = function(rect2) {
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

UiElement.prototype.collidesWith_LastPosition = function(rect2) {
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

UiElement.id = 0;

function UiElementZIndexComparable(parentElement) {
  this._parentElement = parentElement;
}

UiElementZIndexComparable.prototype.getElement = function() {return this._parentElement;};

/**
* @function
* @name IComparable#compareTo
* @param other {Object} The object to compare to this one.
* @returns {int} -1: less than the other object; 0 equivalent to the other object; 1 greater than the other object.
*/
UiElementZIndexComparable.prototype.compareTo = function(other) {
  if (this._parentElement.getZIndex() < other._parentElement.getZIndex()) return -1;
  if (this._parentElement.getZIndex() === other._parentElement.getZIndex()) return 0;
  return 1;
};

UiElementZIndexComparable.prototype.equals = function(other) {
  return this._parentElement.getZIndex() === other._parentElement.getZIndex();
};
