var C64Style = C64Style || {};

/**
* Abstract class for graphical layers on a C64Style.Screen.<br />
* Existing implementations: {@link C64Style.TextLayer}, {@link C64Style.GfxLayer}
* @constructor
* @param {C64Style.Screen} screenContext The parent screen
* @param {CanvasContext} canvas The canvas context that this layer will draw to.
* @param {Object} props The properties for this layer:
* <ul>
*   <li>width - number - The width of the layer.  Should match Screen.</li>
*   <li>height - number - The height of the layer.  Should match Screen.</li>
* </ul>
* @see C64Style.TextLayer
* @see C64Style.GfxLayer
*/
C64Style.Layer = function(screenContext, canvas, props) {
  props = props || {};
  this._width = props.width || 320;
  this._height = props.height || 200;
  this._screenContext = screenContext;
  this._canvas = canvas;
  this._canvasContext = canvas ? canvas.getContext("2d") : null;
};

/** Returns the width of the Layer
* @returns {number}
*/
C64Style.Layer.prototype.getWidth = function() {return this._width;};

/** Returns the height of the Layer
* @returns {number}
*/
C64Style.Layer.prototype.getHeight = function() {return this._height;};

/** Returns the parent C64Style.Screen
* @returns {C64Style.Screen}
*/
C64Style.Layer.prototype.getScreenContext = function() {return this._screenContext;};

/** Returns the Canvas for this layer.
* <b>Note</b>: this does not return the drawable CanvasContext, rather it returns the reference to the DOM element.
* @returns {HTMLElement}
*/
C64Style.Layer.prototype.getCanvas = function() {return this._canvas;};

/** Returns the CanvasContext for this layer.
* @returns {CanvasContext}
*/
C64Style.Layer.prototype.getCanvasContext = function() {return this._canvasContext;};

/** Update this Layer. <b>Sub-classes MUST implement this method</b>
* @abstract
* @param {number} time The current time (milliseconds)
* @param {number} diff The difference between the last time and the current time  (milliseconds)
*/
C64Style.Layer.prototype.update = function(time,diff) {};

/** Render this Layer. <b>Sub-classes MUST implement this method</b>
* @abstract
* @param {number} time The current time (milliseconds)
* @param {number} diff The difference between the last time and the current time  (milliseconds)
*/
C64Style.Layer.prototype.render = function(time,diff) {};

/** Propagate a mouse event to this Layer. <b>Sub-classes MUST implement this method</b>
* @abstract
* @param {C64Style.Event} event The mouse event
*/
C64Style.Layer.prototype.handleMouseEvent = function(event) {};

/** Clears all contents of this Layer.
*/
C64Style.Layer.prototype.clearLayer = function() {
  this._canvasContext.clearRect(0, 0, this.getWidth(), this.getHeight());
};
