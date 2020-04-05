import {CELLHEIGHT,CELLWIDTH} from './Constants';
import {Color} from './Color';
import Screen from 'slgfx/src/Screen';

/** The Screen is the overriding container for all C64Style components.
* The Screen orchestrates updating and rendering its layers, propagates
* mouse events down to the layers, and notifies event listeners when events occur.
* @class
* @param {Object} props Properties
* @param {HTMLElement} props.targetDiv The target HTMLElement into which the screen and its layers will be built.
* @param {LayerFactory} [props.layerFactory=LayerFactory] The layer factory to use to create layers.  Defaults to LayerFactory.
* @param {int} [props.scaleX=1] The horizontal scale of the screen.
* @param {int} [props.scaleY=1] The vertical scale of the screen.
* @param {HTMLElement} [props.fpsElem] Optional. An HTMLElement to write Frames-per-second information to.
* @param {boolean} [props.imageSmoothingEnabled=false] Whether to use image smoothing on child canvases.
* @param {boolean} [props.useMouseMoveEvents=true] Whether to listen for mouseevents on this screen.
* @param {number} [props.borderSize=20] The size of the border.
* @param {function} [props.requestAnimationFrame=window.requestAnimationFrame] A function that regulates render rate.  Uses window.requestAnimationFrame by default.
* @param {int} [props.cols=40] The number of columns for the screen.  Width will be sized accordingly: cols * {@link CELLWIDTH}.  Default: 40
* @param {int} [props.rows=25] The number of rows for the screen.  Width will be sized accordingly: cols * {@link CELLHEIGHT}.  Default: 25
* @param {string} [props.backgroundColor=Color.BLUE] The color to set the screen background to. Default: Color.BLUE
* @param {string} [props.borderColor=Color.LIGHTBLUE] The color to set the screen border to. Default: Color.LIGHTBLUE
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
  this._setBorderSize(props.borderSize || 20);
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

/** Assumes scale and view origin have already been factored out.
* @private
*/
C64Screen.prototype._xToColumnFromMouseEvent = function(x) {
  return Math.floor(x / CELLWIDTH);
};

/** Assumes scale and view origin have already been factored out.
* @private
*/
C64Screen.prototype._yToRowFromMouseEvent = function(y) {
  return Math.floor(y / CELLHEIGHT);
};

export default C64Screen;
