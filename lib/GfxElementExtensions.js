/**
* Move the element to a given column.
* @param {number} col
*/
SL.GfxElement.prototype.setCol = function(col) {
  var x = this.columnToX(col);
  if (x !== this._x) this.setDirty(true);
  this._x = x;
};
SL.GfxElement.prototype.setColumn = SL.GfxElement.prototype.setCol;

/**
* Set the y coordinate of this element.
* @param {number} y
*/
SL.GfxElement.prototype.setRow = function(row) {
  var y = row * this.getScreenScaleY() * C64Style.CELLHEIGHT;
  if (y !== this._y) this.setDirty(true);
  this._y = y;
};

SL.GfxElement.prototype.columnToX = function(col) {
  var x = col * this.getScreenScaleX() * C64Style.CELLWIDTH;
  return x;
};
SL.GfxElement.prototype.xToColumn = function(x) {
  var col = x / (this.getScreenScaleX() * C64Style.CELLWIDTH);
  return col;
};

SL.GfxElement.prototype.rowToY = function(row) {
  var y = row * this.getScreenScaleY() * C64Style.CELLHEIGHT;
  return y;
};
SL.GfxElement.prototype.yToRow = function(y) {
  var row = y / (this.getScreenScaleY() * C64Style.CELLHEIGHT);
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
SL.GfxElement.prototype.moveToCell = function(column,row,duration, callback) {
  this.moveTo(this.columnToX(column), this.rowToY(row),duration,callback);
};
