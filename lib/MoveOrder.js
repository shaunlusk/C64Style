var C64Style = C64Style || {};

/** Directs movement of {@link C64Style.GfxElements} when moveTo() is called.
* These are created and handled internally in GfxElements.
* @constructor
* @param {C64Style.GfxElements} element The element this MoveOrder will be bound to.
* @param {number} tx The target x location for the element.
* @param {number} ty The target y location for the element.
* @param {number} duration The length of time (milliseconds) for the movement to the target location.
* @param {function} elementCallback The callback of the parent element; called when movement is done.
* @param {function} callback Optional callback to be called when movement is done.
*/
C64Style.MoveOrder = function(element, tx, ty, duration, elementCallback, callback) {
  this._element = element;
  this._tx = tx;
  this._ty = ty;
  this._startX = 0;
  this._startY = 0;
  this._duration = duration;
  this._elementCallback = elementCallback;
  this._callback = callback;
  this._end = false;
  this._started = false;
  this._startTime = -1;
};

/** Initialize movement conditions.
*/
C64Style.MoveOrder.prototype.start = function() {
  this._startX = this._element.getX();
  this._startY = this._element.getY();
  this._started = true;
};

/** Update the position of the parent element, based on time difference from last render cycle, and the time remaining to hit the target location.
* @param {number} time The current time (milliseconds)
* @param {number} diff The difference between the last time and the current time  (milliseconds)
*/
C64Style.MoveOrder.prototype.update = function(time,diff) {
  if (!this._started) return;
  if (this._end) return;
  if (this._startTime === -1) this._startTime = time;
  var timePercent = this._timePercent(time);
  if (timePercent >= 1) {
    this.end();
  } else {
    this._element.setX(this._startX + (this._tx - this._startX) * timePercent);
    this._element.setY(this._startY + (this._ty - this._startY) * timePercent);
  }
};

/** Finish movement and notify the parent element.
*/
C64Style.MoveOrder.prototype.end = function () {
  this._end = true;
  this._element.setX(this._tx);
  this._element.setY(this._ty);
  if (C64Style.isFunction(this._elementCallback)) this._elementCallback();
  if (C64Style.isFunction(this._callback)) this._callback(this._element);
};

/** @private */
C64Style.MoveOrder.prototype._timePercent = function (time) {
  return (time - this._startTime) / this._duration;
};
