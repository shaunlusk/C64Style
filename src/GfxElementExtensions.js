import GfxElement from 'slgfx/src/GfxElement';
import {CELLWIDTH, CELLHEIGHT} from './Constants';

/**
* Move the element to a given column.
* @param {number} col
*/
GfxElement.prototype.setCol = function(col) {
  var x = GfxElement.columnToX(col);
  if (x !== this._x) this.setDirty(true);
  this._x = x;
};
GfxElement.prototype.setColumn = GfxElement.prototype.setCol;

/**
* Set the y coordinate of this element.
* @param {number} y
*/
GfxElement.prototype.setRow = function(row) {
  var y = GfxElement.rowToY(row);
  if (y !== this._y) this.setDirty(true);
  this._y = y;
};

GfxElement.columnToX = function(col) {
  var x = col * CELLWIDTH;
  return x;
};
GfxElement.xToColumn = function(x) {
  var col = x / CELLWIDTH;
  return col;
};

GfxElement.rowToY = function(row) {
  var y = row * CELLHEIGHT;
  return y;
};
GfxElement.yToRow = function(y) {
  var row = y / CELLHEIGHT;
  return row;
};

/**
* Move the element to the specified cell coordinates over the course of specified duration.
* Calls to this method are queued and executed one after the other.
* Note that movement effect created by this method will supercede any movement rates for the given duration.
* @param {number} x The target x coordinate
* @param {number} y The target y coordinate
* @param {number} duration Optional. How long it should take the element to move from its current position to the target position, in milliseconds. Defaults to 16ms.
* @param {function} callback Optional.  The function to call when the move is complete.
*/
GfxElement.prototype.moveToCell = function(column,row,duration, callback) {
  this.moveTo(GfxElement.columnToX(column), GfxElement.rowToY(row),duration,callback);
};


GfxElement.prototype._setupSecondaryEventData = function(event) {
  var eventData = {
      x : event.data.x,
      y : event.data.y,
      row : event.data.row,
      col : event.data.col,
      viewOriginAdjustedX : event.data.viewOriginAdjustedX,
      viewOriginAdjustedY : event.data.viewOriginAdjustedY,
      rawX : event.data.rawX,
      rawY : event.data.rawY,
      element : this
  };
  return eventData;
};

export default GfxElement;
