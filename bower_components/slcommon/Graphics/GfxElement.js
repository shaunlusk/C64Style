var SL = SL || {};

/**
* <p>Graphics element base class.</p>
* <p>* Current Implementations:
* <ul>
*   <li>{@link SL.ImageElement}</li>
*   <li>{@link SL.Sprite}
*     <ul>
*       <li>{@link SL.ImageSprite}</li>
*     </ul>
*   </li>
* </ul>
* <p>GfxElements support two types of movement: moveTo() instructions and movementRates.
* The former, moveTo() will send an element toward a specified set of coordinates, scheduled to arrive after a
* specified duration.  The latter, movementRates, will start an element moving at a given rate and continue until stopped.
* See moveTo() and setMoveRates() for more details.</p>
* <p>GfxElements emit a number of events:
* <ul>
*   <li>ELEMENT_MOVED : Any time the element moves.</li>
*   <li>ELEMENT_STARTED_MOVING : When the element starts moving.</li>
*   <li>ELEMENT_STOPPED_MOVING : When the element stops moving.</li>
*   <li>ELEMENT_COLLISION : When the element collides with another.</li>
*   <li>MOUSE_ENTER_ELEMENT : When the mouse enters the element's bounding box.</li>
*   <li>MOUSE_EXIT_ELEMENT : When the mouse leaves the element's bouding box.</li>
*   <li>MOUSE_MOVE_OVER_ELEMENT : When the mouse moves and is over the element.</li>
*   <li>MOUSE_DOWN_ON_ELEMENT : When there is a mouse down event on the element.</li>
*   <li>MOUSE_UP_ON_ELEMENT : When there is a mouse up event on the element.</li>
*   <li>ELEMENT_HIT_LEFT_EDGE : When the element hits the left edge of its layer.</li>
*   <li>ELEMENT_HIT_RIGHT_EDGE : When the element hits the right edge of its layer.</li>
*   <li>ELEMENT_HIT_TOP_EDGE : When the element hits the top edge of its layer.</li>
*   <li>ELEMENT_HIT_BOTTOM_EDGE : When the element hits the bottom edge of its layer.</li>
* </ul>
* In most cases, the event data will include an 'element' property that refers to the element.  The only exception is ELEMENT_COLLISION;
* this will have element1 and element2 properties, where element1 is the element on which collidesWith() was called, and element2 was the element passed to the method.</p>
* <p>In addition to the element property, the mouse events will also include x,y, and row, column properties in the data, corresponding to the coordinates of the event. </p>
*
* <p>Event listeners can be attached to individual elements, or at the screen level.  Refer to documentation on the "on" and "notify" methods.</p>
* @constructor
* @param {SL.Screen} screenContext The target screen.
* @param {SL.GfxLayer} parentLayer The parent layer that will draw this element.
* @param {Object} props Properties for this GfxElement.  Supports:
*   <ul>
*     <li>scaleX - integer - Horizontal scale of this element.  Independent of screen scale.</li>
*     <li>scaleY - integer - Vertical scale of this element.  Independent of screen scale.</li>
*     <li>hidden - boolean - Whether to hide this element.</li>
*     <li>x - number - The X coordinate for this element.</li>
*     <li>y - number - The Y coordinate for this element.</li>
*     <li>zIndex - number - The z-index; elements with higher zIndex values will be drawn later than those with lower values (drawn on top of those with lower values).</li>
*   </ul>
*/
SL.GfxElement = function(screenContext, parentLayer, props) {
  props = props || {};
  this._id = SL.GfxElement.id++;
  this._screenContext = screenContext;
  this._parentLayer = parentLayer;
  this._canvasContext = parentLayer ? parentLayer.getCanvasContext() : null;
  this._scaleX = props.scaleX || 1;
  this._scaleY = props.scaleY || 1;
  this._currentMove = null;
  this._moveQueue = new SL.Queue();
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
  this._mouseIsOver = false;
  this._zIndex = props.zIndex || -1;
  this._zIndexComparable = new SL.GfxElementZIndexComparable(this);

  this._rotation = null;
  this._baseRotation = props.baseRotation || null;
  this._wasRotated = false;

  this._diagonalSize = 0; // only needed for determining collision box when rotated
  this._rotatedX = 0;
  this._rotatedY = 0;
  this._rotatedLastX = 0;
  this._rotatedLastY = 0;
  this._lastDiagonalSize = 0;

  this.EventNotifierMixinInitializer({
    eventListeners:[
      SL.EventType.ELEMENT_MOVED,
      SL.EventType.ELEMENT_STARTED_MOVING,
      SL.EventType.ELEMENT_STOPPED_MOVING,
      SL.EventType.ELEMENT_COLLISION,
      SL.EventType.MOUSE_ENTER_ELEMENT,
      SL.EventType.MOUSE_EXIT_ELEMENT,
      SL.EventType.MOUSE_MOVE_OVER_ELEMENT,
      SL.EventType.MOUSE_DOWN_ON_ELEMENT,
      SL.EventType.MOUSE_UP_ON_ELEMENT,
      SL.EventType.ELEMENT_HIT_LEFT_EDGE,
      SL.EventType.ELEMENT_HIT_RIGHT_EDGE,
      SL.EventType.ELEMENT_HIT_TOP_EDGE,
      SL.EventType.ELEMENT_HIT_BOTTOM_EDGE
    ]
  });
};

SL.EventNotifierMixin.call(SL.GfxElement.prototype);
SL.GfxElement.prototype._baseNotify = SL.GfxElement.prototype.notify;

SL.GfxElement.prototype.notify = function(event) {
  this._baseNotify(event);
  this.getScreenContext().notify(event);
};

/** @private */
SL.GfxElement.id = 0;

/** Return the unique id of this element.
* @return {integer} This element's unique id.
*/
SL.GfxElement.prototype.getId = function() {return this._id;};

/** Return whether this element is dirty.
* @return {boolean}
*/
SL.GfxElement.prototype.isDirty = function() {
  return this._dirty || this._hasCollision || this._hadCollisionPreviousFrame;
};

/**
* Set whether element is dirty.  If dirty, the element will be cleared and redrawn during the next render phase.
* @param {boolean} dirty
*/
SL.GfxElement.prototype.setDirty = function(dirty) {this._dirty = dirty;};

/** Return whether this element is hidden.
* @return {boolean}
*/
SL.GfxElement.prototype.isHidden = function() {return this._hidden;};

/**
* Set whether element is hidden.
* @param {boolean} hidden
*/
SL.GfxElement.prototype.setHidden = function(hidden) {this._hidden = hidden;};

/** Return whether this element had a collision during the most recent update phase.
* @return {boolean}
*/
SL.GfxElement.prototype.hasCollision = function() {return this._hasCollision;};

/**
* Set whether the element has a collision. If a collision has occurred the element will be cleared and redrawn during the next render phase.
* @param {boolean} hidden
*/
SL.GfxElement.prototype.setHasCollision = function(hasCollision) {this._hasCollision = hasCollision;};

/**
* Return this element's zIndex.
* @return {number}
*/
SL.GfxElement.prototype.getZIndex = function() {return this._zIndex;};

/**
* Set this element's zIndex. Elements with higher zIndex values will be drawn later than those with lower values (drawn on top of those with lower values).
* @param {number} zIndex
*/
SL.GfxElement.prototype.setZIndex = function(zIndex) {
  this._zIndex = zIndex;
  this.setDirty(true);
};

/** Return this element's zindeComparable.
* Used by parent layer to determine rendering order.
* @return {SL.GfxElementZIndexComparable}
*/
SL.GfxElement.prototype.getZIndexComparable = function() {
  return this._zIndexComparable;
};

/**
* Return this element's parent layer.
* @return {SL.GfxLayer}
*/
SL.GfxElement.prototype.getParentLayer = function() {return this._parentLayer;};

/**
* Return the canvas context for this element's parent layer.
* @return {CanvasContext}
*/
SL.GfxElement.prototype.getCanvasContext = function() {return this._canvasContext;};

/**
* Return the parent Screen for this element.
* @return {SL.Screen}
*/
SL.GfxElement.prototype.getScreenContext = function() {return this._screenContext;};

/**
* Return the horizontal scale of this element's parent screen.
* @return {integer}
*/
SL.GfxElement.prototype.getScreenScaleX = function() {return this.getScreenContext().getScaleX();};

/**
* Return the vertical scale of this element's parent screen.
* @return {integer}
*/
SL.GfxElement.prototype.getScreenScaleY = function() {return this.getScreenContext().getScaleY();};

/**
* Return the total horizontal scale for this element (screen scale * element scale).
* @return {integer}
*/
SL.GfxElement.prototype.getTotalScaleX = function() {return this.getElementScaleX() * this.getScreenContext().getScaleX();};

/**
* Return the total vertical scale for this element (screen scale * element scale).
* @return {integer}
*/
SL.GfxElement.prototype.getTotalScaleY = function() {return this.getElementScaleY() * this.getScreenContext().getScaleY();};

/**
* Return the horizontal scale of this element.
* @return {integer}
*/
SL.GfxElement.prototype.getElementScaleX = function() {return this._scaleX;};

/**
* Return the vertical scale of this element.
* @return {integer}
*/
SL.GfxElement.prototype.getElementScaleY = function() {return this._scaleY;};

/**
* Set the horizontal scale of this element.
* @param {integer} scaleX
*/
SL.GfxElement.prototype.setElementScaleX = function(scaleX) {
  this._scaleX = scaleX;
};

/**
* Set the vertical scale of this element.
* @param {integer} scaleY
*/
SL.GfxElement.prototype.setElementScaleY = function(scaleY) {this._scaleY = scaleY;};

/**
* Get the x coordinate of this element.
* @return {number}
*/
SL.GfxElement.prototype.getX = function() {return this._x;};

/**
* Get the screen x coordinate of this element.
* @return {number}
*/
SL.GfxElement.prototype.getScaledX = function() {
  return this.getX() * this.getScreenScaleX();
};

/**
* Get the y coordinate of this element.
* @return {number}
*/
SL.GfxElement.prototype.getY = function() {return this._y;};

/**
* Get the screen x coordinate of this element.
* @return {number}
*/
SL.GfxElement.prototype.getScaledY = function() {
  return this.getY() * this.getScreenScaleY();
};

/**
* Set the x coordinate of this element.
* @param {number} x
*/
SL.GfxElement.prototype.setX = function(x) {
  if (x !== this._x) this.setDirty(true);
  this._x = x;
};

/**
* Set the y coordinate of this element.
* @param {number} y
*/
SL.GfxElement.prototype.setY = function(y) {
  if (y !== this._y) this.setDirty(true);
  this._y = y;
};

/**
* Get the x coordinate of this element for the previous frame.
* @return {number}
*/
SL.GfxElement.prototype.getLastX = function() {return this._lastX;};

/**
* Get the y coordinate of this element for the previous frame.
* @return {number}
*/
SL.GfxElement.prototype.getLastY = function() {return this._lastY;};

/** Override if dimensions can change */
SL.GfxElement.prototype.getLastWidth = function() {return this.getWidth();};

/** Override if dimensions can change */
SL.GfxElement.prototype.getLastHeight = function() {return this.getHeight();};

/** @private */
SL.GfxElement.prototype.setLastX = function(x) {this._lastX = x;};
/** @private */
SL.GfxElement.prototype.setLastY = function(y) {this._lastY = y;};

/**
* Return whether the mouse is over this element.
* @return {boolean}
*/
SL.GfxElement.prototype.isMouseOver = function() {return this._mouseIsOver;};

/**
* Return this element's width. <b>Sub-classes must implement this method!</b>
* @abstract
* @return {number}
*/
SL.GfxElement.prototype.getWidth = function() {throw new Error("getWidth needs to be implemented on this element.");};

/**
* Return this element's width, incorporating screen and element-local scaling.
* @return {number}
*/
SL.GfxElement.prototype.getScaledWidth = function() {return this.getWidth() * this.getTotalScaleX();};

/**
* Return this elements height. <b>Sub-classes must implement this method!</b>
* @abstract
* @return {number}
*/
SL.GfxElement.prototype.getHeight = function() {throw new Error("getHeight needs to be implemented on this element.");};

/**
* Return this element's height, incorporating screen and element-local scaling.
* @return {number}
*/
SL.GfxElement.prototype.getScaledHeight = function() {return this.getHeight() * this.getTotalScaleY();};

SL.GfxElement.prototype.getUnAdjustedRotation = function() { return this._rotation; };
SL.GfxElement.prototype.getBaseRotation = function() { return this._baseRotation; };
SL.GfxElement.prototype.getRotation = function() {
  if (this._rotation || this._baseRotation)
  return (this._rotation || 0) + (this._baseRotation || 0);
  return null;
};
SL.GfxElement.prototype.getDiagonalSize = function() { return this._diagonalSize; };

SL.GfxElement.prototype.setRotation = function(rotation) {
  this._rotation = rotation;
  if (this._rotation === null) {
    if (this.wasRotated()) this.setDirty(true);
    return;
  }
  this._recalculateDiagonalSize();
  this._recalculateRotatedCollisionBox();
  this.setDirty(true);
};
SL.GfxElement.prototype.setBaseRotation = function(rotation) {
  this._baseRotation = rotation;
  if (this._baseRotation === null) {
    if (this.wasRotated()) this.setDirty(true);
    return;
  }
  this._recalculateDiagonalSize();
  this._recalculateRotatedCollisionBox();
  this.setDirty(true);
};

SL.GfxElement.prototype.wasRotated = function() {return this._wasRotated;};
SL.GfxElement.prototype.setWasRotated = function(wasRotated) {
  this._wasRotated = wasRotated;
};
SL.GfxElement.prototype.hasRotation = function() {return !(SL.isNullOrUndefined(this._rotation) || this._rotation === 0);};

SL.GfxElement.prototype.getRotatedX = function() {return this._rotatedX;};
SL.GfxElement.prototype.getRotatedY = function() {return this._rotatedY;};
SL.GfxElement.prototype.getRotatedLastX = function() {return this._rotatedLastX;};
SL.GfxElement.prototype.getRotatedLastY = function() {return this._rotatedLastY;};
SL.GfxElement.prototype.getLastDiagonalSize = function() {return this._lastDiagonalSize;};
SL.GfxElement.prototype.getRotatedScaledX = function() {return this.getRotatedX() * this.getScreenScaleX();};
SL.GfxElement.prototype.getRotatedScaledY = function() {return this.getRotatedY() * this.getScreenScaleY();};
SL.GfxElement.prototype.getScaledDiagonalSize = function() {
  return this.getDiagonalSize() * (this.getTotalScaleX() + this.getTotalScaleY()) / 2;
};

/** @private */
SL.GfxElement.prototype.setRotatedLastX = function(x) {this._rotatedLastX = x;};
/** @private */
SL.GfxElement.prototype.setRotatedLastY = function(y) {this._rotatedLastY = y;};
/** @private */
SL.GfxElement.prototype.setLastDiagonalSize = function(size) {this._lastDiagonalSize = size;};

SL.GfxElement.prototype._recalculateDiagonalSize = function() {
  if (this.getRotation() === null) return;
  // calculate diagonal
  // Note that for any amount of rotation, an expanded bounding box is used
  this._diagonalSize = Math.ceil(Math.sqrt( Math.pow(this.getWidth(), 2) + Math.pow(this.getHeight(), 2)));
};

SL.GfxElement.prototype._recalculateRotatedCollisionBox = function() {
  if (this.getRotation() === null) return;
  this._rotatedX = Math.floor(this.getX() - (this.getDiagonalSize() - this.getWidth()) / 2);
  this._rotatedY = Math.floor(this.getY() - (this.getDiagonalSize() - this.getHeight()) / 2);
};

/**
* Set the horizontal and vertical movement rates for this element.
* Rates will be treated as approximately pixels per second.
* Negative values will move the element left for xMoveRate or up for yMoveRate.
* Zero values will halt movement on a given axis.
* Positive values will move the element right for xMoveRate or down for yMoveRate.
* Note that moveTo instructions will supercede movement rates in determining the element's position.
* @param {number} xMoveRate Horizontal movement rate
* @param {number} yMoveRate Vertical movement rate
*/
SL.GfxElement.prototype.setMoveRates = function(xMoveRate, yMoveRate) {
  if (xMoveRate === 0 && yMoveRate === 0 && this._currentMove === null && (this._xMoveRate !== 0 || this._yMoveRate !== 0)) {
    this.notify(
      new SL.Event(SL.EventType.ELEMENT_STOPPED_MOVING, {element:this})
    );
  } else if ((xMoveRate !== 0 || yMoveRate !== 0) && this._currentMove === null && this._xMoveRate === 0 && this._yMoveRate === 0) {
    this.notify(
      new SL.Event(SL.EventType.ELEMENT_STARTED_MOVING, {element:this})
    );
  }

  this._xMoveRate = xMoveRate;
  this._yMoveRate = yMoveRate;
};

/**
* Return the current x movement rate.
* @return {number}
*/
SL.GfxElement.prototype.getMoveRateX = function() {return this._xMoveRate;};

/**
* Return the current y movement rate.
* @return {number}
*/
SL.GfxElement.prototype.getMoveRateY = function() {return this._yMoveRate;};

/**
* Move the element to the specified coordinate over the course of specified duration.
* Calls to this method are queued and executed one after the other.
* Note that movement effect created by this method will supercede any movement rates for the given duration.
* @param {number} x The target x coordinate
* @param {number} y The target y coordinate
* @param {number} duration Optional. How long it should take the element to move from its current position to the target position, in milliseconds. Defaults to 16ms.
* @param {function} callback Optional.  The function to call when the move is complete.
*/
SL.GfxElement.prototype.moveTo = function(x,y,duration, callback) {
  duration = duration || 16;
  var moveOrder = new SL.MoveOrder(this, x, y, duration, this.moveOrderCallback.bind(this), callback);
  this._moveQueue.push(moveOrder);
  if (this._currentMove === null) {
    this._runMove();
    // If not already moving, fire start move event
    if (this.getMoveRateX() === 0 && this.getMoveRateY() === 0) {
      this.notify(
        new SL.Event(SL.EventType.ELEMENT_STARTED_MOVING, {element:this})
      );
    }
  }
};

/** @private */
SL.GfxElement.prototype._runMove = function() {
  if (this._moveQueue.size() > 0) {
    this._currentMove = this._moveQueue.pop();
    this._currentMove.start();
    return true;
  }
  // If no additional movement, fire end move event
  if (this.getMoveRateX() === 0 && this.getMoveRateY() === 0) {
    this.notify(
      new SL.Event(SL.EventType.ELEMENT_STOPPED_MOVING, {element:this})
    );
  }
  this._currentMove = null;
  return false;
};

/** @private */
SL.GfxElement.prototype.moveOrderCallback = function() {
  this._currentMove = null;
  this._runMove();
};

/**
* Clear any queued moveTo instructions.
* Does not effect a currently running moveTo, or any movement rates.
*/
SL.GfxElement.prototype.clearMoveQueue = function() {
  this._moveQueue.clear();
};

/**
* Turn the element "off".
* All movement will cease and element will be hidden.
*/
SL.GfxElement.prototype.turnOff = function() {
  this._moveQueue.clear();
  this._currentMove = null;
  this._xMoveRate = 0;
  this._xMoveFractionalAccumulator = 0;
  this._yMoveRate = 0;
  this._yMoveFractionalAccumulator = 0;
  this.hide();
};

/** Show the element. */
SL.GfxElement.prototype.show = function() {
  this._hidden = false;
  this.setDirty(true);
};

/** Hide the element */
SL.GfxElement.prototype.hide = function() {
  this._hidden = true;
  this.setDirty(true);
};

/** Update the element.  Will update location based on current time/diff.
* @param {number} time The current time.  Not specifically used, but provided for extension.
* @param {number} diff The difference between the previous time and the current time. Use to calculate element's position if it is moving.
* @return {SL.GfxElement} Returns this element if it needs to be redrawn, null otherwise.
*/
SL.GfxElement.prototype.update = function(time,diff) {
  this._updateLocationFromMoveRates(time,diff);
  // Will take precedence over move rate
  this._updateMoveOrder(time,diff);

  if (this.getX() !== this.getLastX() || this.getY() !== this.getLastY()) {
    this.setDirty(true);
    this.notify(
      new SL.Event(
        SL.EventType.ELEMENT_MOVED,
        {element:this},
        time
      )
    );
  }

  if (this.isDirty()) {
    this._recalculateRotatedCollisionBox();
    return this;
  }
  return null;
};

/** Updates the elements position using movement rates and the time diff.
* @private
* @param {number} time
* @param {number} diff
*/
SL.GfxElement.prototype._updateLocationFromMoveRates = function(time, diff) {
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

/** Updates the elements position based on the current moveTo instruction.
* @private
* @param {number} time
* @param {number} diff
*/
SL.GfxElement.prototype._updateMoveOrder = function(time,diff) {
  if (this._currentMove !== null) {
    this._currentMove.update(time,diff);
    this.setDirty(true);
  }
};

/** Clears this element's bounding box. Time parameters are not used, just made available here for extension.
* @param {number} time
* @param {number} diff
*/
SL.GfxElement.prototype.clear = function(time, diff) {
  if (this.wasRotated()) {
    this.getCanvasContext().clearRect(
      this.getRotatedLastX() * this.getScreenScaleX() - 1,
      this.getRotatedLastY() * this.getScreenScaleY() - 1,
      this.getLastDiagonalSize() * this.getTotalScaleX() + 2,
      this.getLastDiagonalSize() * this.getTotalScaleY() + 2 );
  } else {
    this.getCanvasContext().clearRect(
      this.getLastX() * this.getScreenScaleX() - 1,
      this.getLastY() * this.getScreenScaleY() - 1,
      this.getLastWidth() * this.getTotalScaleX() + 2,
      this.getLastHeight() * this.getTotalScaleY() + 2 );
  }
};


// UiElement.prototype.clear = function(context) {
//   if (!this.dirty) return;
//   if (this._rotation) {
//     // clear area that matches the collision bounding box that was checked
//     context.clearRect(this._rotatedLastX - 1, this._rotatedLastY - 1, this._diagonalSize + 2, this._diagonalSize + 2);
//   } else {
//     context.clearRect(this.lastX - 1,this.lastY - 1, this.dw + 2, this.dh + 2);
//   }
//   if (this.hidden) {
//     this.setDirty(false);
//     this._hiddenRecently = false;
//   }
//   this.lastX = this.x;
//   this.lastY = this.y;
//   this._lastDw = this.dw;
//   this._lastDh = this.dh;
//   if (this.getRotation()) {
//     this._rotatedLastX = this._rotatedX;
//     this._rotatedLastY = this._rotatedY;
//     this._lastDiagonalSize = this._diagonalSize;
//   }
// };

/** Perform any preRendering steps.
*/
SL.GfxElement.prototype.preRender = function(time, diff) {

};

/**
* The render method should be implemented in subclasses.
* Time parameters provided for extension.
*/
SL.GfxElement.prototype.render = function(time, diff) {
  throw new Error("Not Implemented.");
};


/**
* Provides post-render clean up.
* Time parameters provided for extension.
* @param {number} time
* @param {number} diff
*/
SL.GfxElement.prototype.postRender = function(time, diff) {
  this.setLastX( this.getX() );
  this.setLastY( this.getY() );

  if (this.hasRotation()) {
    this.setWasRotated(true);
    this.setRotatedLastX( this.getRotatedX() );
    this.setRotatedLastY( this.getRotatedY() );
    this.setLastDiagonalSize( this.getDiagonalSize() );
  }
  else this.setWasRotated(false);

  this.setDirty(false);
  this._hadCollisionPreviousFrame = this.hasCollision();
  this.setHasCollision(false);
};

/** Check whether this element collidesWith another element.
* Compares the boundaries of this element and the other to check for overlap; if so return true, else return false.
* @param {SL.GfxElement} element
* @return {boolean}
*/
SL.GfxElement.prototype.collidesWith = function(element) {
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
  /* Internally, we may need to redraw if one of the elements was recently hidden.
  * However, don't trigger the event if either element is hidden.
  */
  if (result && !this.isHidden() && !element.isHidden()) {
    this.notify(
      new SL.Event(SL.EventType.ELEMENT_COLLISION, {
        element1 : this,
        element2 : element
      })
    );
    // notify the other element of the collision
    element.notify(
      new SL.Event(SL.EventType.ELEMENT_COLLISION, {
        element1 : element,
        element2 : this
      })
    );
  }
  return result;
};

/** Check whether this element intersects a specific point on the screen.
* @param {number} x
* @param {number} y
* @return {boolean}
*/
SL.GfxElement.prototype.collidesWithCoordinates = function(x, y) {
  var result = x >= this.getCollisionBoxX() &&
    x <= this.getCollisionBoxX() + this.getCollisionBoxWidth() &&
    y >= this.getCollisionBoxY() &&
      y <= this.getCollisionBoxY() + this.getCollisionBoxHeight();
  return result;
};

/** Check whether this element intersects an x coordinate.
* @param {number} x
* @return {boolean}
*/
SL.GfxElement.prototype.collidesWithX = function(x) {
  var result = x >= this.getCollisionBoxX() &&
    x <= this.getCollisionBoxX() + this.getCollisionBoxWidth();
  return result;
};

/** Check whether this element intersects an y coordinate.
* @param {number} x
* @return {boolean}
*/
SL.GfxElement.prototype.collidesWithY = function(y) {
  var result = y >= this.getCollisionBoxY() &&
      y <= this.getCollisionBoxY() + this.getCollisionBoxHeight();
  return result;
};

/** Returns the x value of the collision box.  Incorporates screen scale.
* @return {number}
*/
SL.GfxElement.prototype.getCollisionBoxX = function() {
  if (this.hasRotation()) return this.getRotatedScaledX() - 1;
  return this.getScaledX() - 1;
};

/** Returns the y value of the collision box.  Incorporates screen scale.
* @return {number}
*/
SL.GfxElement.prototype.getCollisionBoxY = function() {
  if (this.hasRotation()) return this.getRotatedScaledY() - 1;
  return this.getScaledY() - 1;
};

/** Returns the width value of the collision box.  Incorporates total scale.
* @return {number}
*/
SL.GfxElement.prototype.getCollisionBoxWidth = function() {
  if (this.hasRotation()) return this.getScaledDiagonalSize() + 2;
  return this.getScaledWidth() + 2;
};

/** Returns the height value of the collision box.  Incorporates total scale.
* @return {number}
*/
SL.GfxElement.prototype.getCollisionBoxHeight = function() {
  if (this.hasRotation()) return this.getScaledDiagonalSize() + 2;
  return this.getScaledHeight() + 2;
};

/** Fires events if the mouse event is on this element.<br />
* Events emitted:
* <ul>
*   <li>{@link SL.EventType.MOUSE_ENTER_ELEMENT}</li>
*   <li>{@link SL.EventType.MOUSE_EXIT_ELEMENT}</li>
*   <li>{@link SL.EventType.MOUSE_MOVE_OVER_ELEMENT}</li>
*   <li>{@link SL.EventType.MOUSE_DOWN_ON_ELEMENT}</li>
*   <li>{@link SL.EventType.MOUSE_UP_ON_ELEMENT}</li>
* </ul>
* For these events, data is as follows:
*   <ul>
*     <li>x : mouse event x value</li>
*     <li>y : mouse event y value</li>
*     <li>row : mouse event row value</li>
*     <li>col : mouse event col value</li>
*     <li>element : this element</li>
*   </ul>
* @param {SL.Event}
*/
SL.GfxElement.prototype.handleMouseEvent = function(event) {
  var eventData = {
      x : event.data.x,
      y : event.data.y,
      row : event.data.row,
      col : event.data.col,
      scaledX : event.data.scaledX,
      scaledY : event.data.scaledY,
      element : this
  };
  if (this.collidesWithCoordinates(event.data.scaledX, event.data.scaledY)) {
    if (!this.isMouseOver()) {
      this.notify(new SL.Event(
        SL.EventType.MOUSE_ENTER_ELEMENT,
        eventData,
        event.data.time
      ));
    }

    this._mouseIsOver = true;
    var type = null;
    switch(event.type) {
      case SL.EventType.MOUSE_MOVE:
        type = SL.EventType.MOUSE_MOVE_OVER_ELEMENT;
        break;
      case SL.EventType.MOUSE_DOWN:
        type = SL.EventType.MOUSE_DOWN_ON_ELEMENT;
        break;
      case SL.EventType.MOUSE_UP:
        type = SL.EventType.MOUSE_UP_ON_ELEMENT;
        break;
    }
    var thisevent = new SL.Event(
      type,
      eventData,
      event.data.time
    );
    this.notify(thisevent);
  } else {
    if (this.isMouseOver()) {
      this.notify(new SL.Event(
        SL.EventType.MOUSE_EXIT_ELEMENT,
        eventData,
        event.data.time
      ));
      this._mouseIsOver = false;
    }
  }
};
