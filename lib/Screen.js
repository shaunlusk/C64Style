/** @namespace */
var C64Style = C64Style || {};

/** The Screen is the overriding container for all C64Style components.
* The Screen orchestrates updating and rendering its layers, propagates
* mouse events down to the layers, and notifies event listeners when events occur.
* @constructor
* @param {HTMLElement} targetDiv The target HTMLElement into which the screen and its layers will be built.
* @param {SL.LayerFactory} layerFactory A factory that produces {@link SL.Layer Layers}.  Default: new {@link SL.Layer}();
* @param {Object} config Configuration properties
* @param {int} config.scaleX the horizontal scale of the screen.  Default: 1
* @param {int} config.scaleY the vertical scale of the screen.  Default: 1
* @param {int} config.cols The number of columns for the screen.  Width will be sized accordingly: cols * {@link C64Style.CELLWIDTH}.  Default: 40
* @param {int} config.rows The number of rows for the screen.  Width will be sized accordingly: cols * {@link C64Style.CELLHEIGHT}.  Default: 25
* @param {string} config.backgroundColor The color to set the screen background to. Default: C64Style.Color.BLUE
* @param {string} config.borderColor The color to set the screen border to. Default: C64Style.Color.LIGHTBLUE
* @param {int} config.borderSize The borderSize of the screen, in pixels. Default: 20
*/
C64Style.C64Screen = function(targetDiv, layerFactory, config) {
  SL.Screen.call(this, targetDiv, layerFactory, config);

  this._cols = this._config.cols || 40;
  this._rows = this._config.rows || 25;
  this._width = this._cols * this._scaleX * C64Style.CELLWIDTH;
  this._height = this._rows * this._scaleY * C64Style.CELLHEIGHT;

  this._mouseRow = -1;
  this._mouseCol = -1;

  this._backgroundColor = this._config.backgroundColor || C64Style.Color.BLUE;
  this._borderColor = this._config.borderColor || C64Style.Color.LIGHTBLUE;
  this._borderSize = this._config.borderSize || 20;
};

C64Style.C64Screen.prototype = new SL.Screen();
C64Style.C64Screen.prototype.constructor = C64Style.C64Screen;

/** Return the number of rows.
* @returns {integer}
*/
C64Style.C64Screen.prototype.getRows = function() {return this._rows;};

/** Return the number of columns.
* @returns {integer}
*/
C64Style.C64Screen.prototype.getCols = function() {return this._cols;};

/** Return the current row coordinate of the mouse.
* @returns {integer}
*/
C64Style.C64Screen.prototype.getMouseRow = function() {return this._mouseRow;};

/** Return the current column coordinate of the mouse.
* @returns {integer}
*/
C64Style.C64Screen.prototype.getMouseCol = function() {return this._mouseCol;};

/** @private */
C64Style.C64Screen.prototype._handleMouseMoveEvent = function(time) {
  var unscaledX = this.getUnScaledX(this._mouseX);
  var unscaledY = this.getUnScaledY(this._mouseY);

  var x = this.getViewOriginAdjustedX(unscaledX);
  var y = this.getViewOriginAdjustedY(unscaledY);

  this._mouseCol = this._xToColumnFromMouseEvent(x);
  this._mouseRow = this._yToRowFromMouseEvent(y);

  var event = new SL.Event(
    SL.EventType.MOUSE_MOVE,
    {
      x : x,
      y : y,
      row : this._mouseRow,
      col : this._mouseCol,
      rawX : this._mouseX,
      rawY : this._mouseY,
      unscaledX : unscaledX,
      unscaledY : unscaledY,
    },
    time
  );
  this.notify(event);
  this.propagateMouseEventThroughLayers(event);
  this._mouseMoved = false;
};

/** Handle a mouse move event.  This does not directly propagate the event to
* layers and elements; rather it will flag that a mouse movement has occured, and records its current location.
* The event will be propagated during the next render cycle.
* @param {Event} e The mouse event
*/
C64Style.C64Screen.prototype.handleMouseMoveEvent = function(e) {
  if (this._paused) return false;
  this._mouseMoved = true;
  var x = this.getXFromMouseEvent(e);
  var y = this.getYFromMouseEvent(e);

  if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
    this._mouseX = -1;
    this._mouseY = -1;
    return false;
  }
  this._mouseX = x;
  this._mouseY = y;
};

/** Handles mouse up and mouse down events; notifies any local handlers and propagates the event to all layers.
* @param {Event} e The mouse event
*/
C64Style.C64Screen.prototype.handleMouseEvent = function(e) {
  if (this._paused) return false;
  var scaledX = this.getXFromMouseEvent(e);
  var scaledY = this.getYFromMouseEvent(e);

  if (scaledX < 0 || scaledX >= this._width || scaledY < 0 || scaledY >= this._height) {
    return false;
  }

  var unscaledX = this.getUnScaledX(scaledX);
  var unscaledY = this.getUnScaledY(scaledY);

  var x = this.getViewOriginAdjustedX(unscaledX);
  var y = this.getViewOriginAdjustedY(unscaledY);

  var col = this._xToColumnFromMouseEvent(x);
  var row = this._yToRowFromMouseEvent(y);

  var type = e.type === "mouseup" ? SL.EventType.MOUSE_UP : SL.EventType.MOUSE_DOWN;
  var event = new SL.Event(
    type,
    {
      x : x,
      y : y,
      unscaledX : unscaledX,
      unscaledY : unscaledY,
      row : row,
      col : col,
      baseEvent : e,
      rawX : scaledX,
      rawY : scaledY
    });
  this.notify(event);

  // propagate through layers
  this.propagateMouseEventThroughLayers(event);

  if (e.button === 1) return false;
};

/** Return the column coordinate from a given X. Factors in screen scale and view origin.
* @param {int} x The x coordinate from the event.
*/
C64Style.C64Screen.prototype.xToColumn = function(x) {
  return Math.floor((x - this.getViewOriginX()) / (C64Style.CELLWIDTH * this._scaleX));
};

/** Return the column coordinate from a given X. Factors in screen scale and view origin.
* @param {int} x The x coordinate from the event.
*/
C64Style.C64Screen.prototype.yToRow = function(y) {
  return Math.floor((y - this.getViewOriginY()) / (C64Style.CELLHEIGHT * this._scaleY));
};

/** @private
* Assumes scale and view origin have already been factored out.
*/
C64Style.C64Screen.prototype._xToColumnFromMouseEvent = function(x) {
  return Math.floor(x / C64Style.CELLWIDTH);
};

/** @private
* Assumes scale and view origin have already been factored out.
*/
C64Style.C64Screen.prototype._yToRowFromMouseEvent = function(y) {
  return Math.floor(y / C64Style.CELLHEIGHT);
};
