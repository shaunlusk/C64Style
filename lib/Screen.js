/** @namespace */
var C64Style = C64Style || {};

/** The Screen is the overriding container for all C64Style components.
* The Screen orchestrates updating and rendering its layers, propagates
* mouse events down to the layers, and notifies event listeners when events occur.
* @constructor
* @param {HTMLElement} targetDiv The target HTMLElement into which the screen and its layers will be built.
* @param {Object} config Supported configuration properties:
* <ul>
*   <li>scaleX - integer - the horizontal scale of the screen.  Default: 1</li>
*   <li>scaleY - integer - the horizontal scale of the screen.  Default: 1</li>
*   <li>cols - integer - The number of columns for the screen.  Width will be sized accordingly: cols * {@link C64Style.CELLWIDTH}.  Default: 40</li>
*   <li>rows - integer - The number of rows for the screen.  Height will be sized accordingly: rows * {@link C64Style.CELLHEIGHT}.  Default: 25</li>
*   <li>fpsElem - HTMLElement - Element to write Frames-per-second information to. </li>
*   <li>backgroundColor - Color - The color to set the screen background to. Default: C64Style.Color.BLUE</li>
*   <li>borderColor - Color - The color to set the screen border to. Default: C64Style.Color.LIGHTBLUE</li>
*   <li>borderSize - integer - The borderSize of the screen, in pixels. Default: 20</li>
* </ul>
*/
C64Style.Screen = function(targetDiv, layerFactory, config) {
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

C64Style.Screen.prototype = new SL.Screen();
C64Style.Screen.prototype.constructor = C64Style.Screen;

/** Return the number of rows.
* @returns {integer}
*/
C64Style.Screen.prototype.getRows = function() {return this._rows;};

/** Return the number of columns.
* @returns {integer}
*/
C64Style.Screen.prototype.getCols = function() {return this._cols;};

/** Return the current row coordinate of the mouse.
* @returns {integer}
*/
C64Style.Screen.prototype.getMouseRow = function() {return this._mouseRow;};

/** Return the current column coordinate of the mouse.
* @returns {integer}
*/
C64Style.Screen.prototype.getMouseCol = function() {return this._mouseCol;};

/** @private */
C64Style.Screen.prototype._handleMouseMoveEvent = function(time) {
  var event = new C64Style.Event(
    C64Style.EventType.MOUSE_MOVE,
    {
      x : this.getUnScaledX(this._mouseX),
      y : this.getUnScaledX(this._mouseY),
      row : this._mouseRow,
      col : this._mouseCol,
      scaledX : this._mouseX,
      scaledY : this._mouseY,
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
C64Style.Screen.prototype.handleMouseMoveEvent = function(e) {
  if (this._paused) return false;
  this._mouseMoved = true;
  var x = this.getXFromMouseEvent(e);
  var y = this.getYFromMouseEvent(e);

  if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
    this._mouseX = -1;
    this._mouseY = -1;
    this._mouseRow = -1;
    this._mouseCol = -1;
    return false;
  }
  var row = this.getRowFromMouseEvent(e);
  var col = this.getColFromMouseEvent(e);
  this._mouseX = x;
  this._mouseY = y;
  this._mouseRow = row;
  this._mouseCol = col;
};

/** Handles mouse up and mouse down events; notifies any local handlers and propagates the event to all layers.
* @param {Event} e The mouse event
*/
C64Style.Screen.prototype.handleMouseEvent = function(e) {
  if (this._paused) return false;
  var scaledX = this.getXFromMouseEvent(e);
  var scaledY = this.getYFromMouseEvent(e);

  if (scaledX < 0 || scaledX >= this._width || scaledY < 0 || scaledY >= this._height) {
    return false;
  }
  var row = this.getRowFromMouseEvent(e);
  var col = this.getColFromMouseEvent(e);
  var x = this.getUnScaledX(scaledX);
  var y = this.getUnScaledY(scaledY);

  var type = e.type === "mouseup" ? C64Style.EventType.MOUSE_UP : C64Style.EventType.MOUSE_DOWN;
  var event = new C64Style.Event(
    type,
    {
      x : x,
      y : y,
      row : row,
      col : col,
      baseEvent : e,
      scaledX : scaledX,
      scaledY : scaledY
    });
  this.notify(event);

  // propagate through layers
  this.propagateMouseEventThroughLayers(event);

  if (e.button === 1) return false;
};

/** Return the column coordinate from a mouse event.  Accounts for screen position.
* @param {Event} e Mouse Event
*/
C64Style.Screen.prototype.getColFromMouseEvent = function(e) {
  return Math.floor(this.getXFromMouseEvent(e) / (C64Style.CELLWIDTH * this._scaleX));
};

/** Return the row coordinate from a mouse event.  Accounts for screen position.
* @param {Event} e Mouse Event
*/
C64Style.Screen.prototype.getRowFromMouseEvent = function(e) {
  return Math.floor(this.getYFromMouseEvent(e) / (C64Style.CELLHEIGHT * this._scaleY));
};
