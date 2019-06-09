import {CELLHEIGHT,CELLWIDTH} from './Constants';
import {Color} from './Color';
import Screen from 'slgfx/src/Screen';

/** The Screen is the overriding container for all C64Style components.
* The Screen orchestrates updating and rendering its layers, propagates
* mouse events down to the layers, and notifies event listeners when events occur.
* @constructor
* @param {HTMLElement} targetDiv The target HTMLElement into which the screen and its layers will be built.
* @param {LayerFactory} layerFactory A factory that produces {@link Layer Layers}.  Default: new {@link Layer}();
* @param {Object} config Configuration properties
* @param {int} config.scaleX the horizontal scale of the screen.  Default: 1
* @param {int} config.scaleY the vertical scale of the screen.  Default: 1
* @param {int} config.cols The number of columns for the screen.  Width will be sized accordingly: cols * {@link CELLWIDTH}.  Default: 40
* @param {int} config.rows The number of rows for the screen.  Width will be sized accordingly: cols * {@link CELLHEIGHT}.  Default: 25
* @param {string} config.backgroundColor The color to set the screen background to. Default: Color.BLUE
* @param {string} config.borderColor The color to set the screen border to. Default: Color.LIGHTBLUE
* @param {int} config.borderSize The borderSize of the screen, in pixels. Default: 20
*/
function C64Screen(props) {
  Screen.call(this, props);

  this._cols = props.cols || 40;
  this._rows = props.rows || 25;
  this._width = this._cols * this._scaleX * CELLWIDTH;
  this._height = this._rows * this._scaleY * CELLHEIGHT;

  this._mouseRow = -1;
  this._mouseCol = -1;

  this._backgroundColor = props.backgroundColor || Color.BLUE;
  this._borderColor = props.borderColor || Color.LIGHTBLUE;
  this._borderSize = props.borderSize || 20;
};

C64Screen.prototype = new Screen();
C64Screen.prototype.constructor = C64Screen;

/** Return the number of rows.
* @returns {integer}
*/
C64Screen.prototype.getRows = function() {return this._rows;};

/** Return the number of columns.
* @returns {integer}
*/
C64Screen.prototype.getCols = function() {return this._cols;};

/** Return the current row coordinate of the mouse.
* @returns {integer}
*/
C64Screen.prototype.getMouseRow = function() {return this._mouseRow;};

/** Return the current column coordinate of the mouse.
* @returns {integer}
*/
C64Screen.prototype.getMouseCol = function() {return this._mouseCol;};

/** @private
* @override
*/
C64Screen.prototype._getCoordinateDataForMouseEvent = function(scaledX, scaledY) {
  var data = Screen.prototype._getCoordinateDataForMouseEvent.call(this, scaledX, scaledY);
  data.col = this._xToColumnFromMouseEvent(data.x);
  data.row = this._yToRowFromMouseEvent(data.y);
  return data;
};

/** Return the column coordinate from a given X. Factors in screen scale and view origin.
* @param {int} x The x coordinate from the event.
*/
C64Screen.prototype.xToColumn = function(x) {
  return Math.floor((x - this.getViewOriginX()) / (CELLWIDTH * this._scaleX));
};

/** Return the column coordinate from a given X. Factors in screen scale and view origin.
* @param {int} x The x coordinate from the event.
*/
C64Screen.prototype.yToRow = function(y) {
  return Math.floor((y - this.getViewOriginY()) / (CELLHEIGHT * this._scaleY));
};

/** @private
* Assumes scale and view origin have already been factored out.
*/
C64Screen.prototype._xToColumnFromMouseEvent = function(x) {
  return Math.floor(x / CELLWIDTH);
};

/** @private
* Assumes scale and view origin have already been factored out.
*/
C64Screen.prototype._yToRowFromMouseEvent = function(y) {
  return Math.floor(y / CELLHEIGHT);
};

export default C64Screen;
