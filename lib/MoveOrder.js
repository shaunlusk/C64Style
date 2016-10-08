var C64Style = C64Style || {};

/**
* Must be bound to a uielement
*/
C64Style.MoveOrder = function(element, tx, ty, duration, elementCallback) {
  this._element = element;
  this._tx = tx;
  this._ty = ty;
  this._startX = 0;
  this._startY = 0;
  this._duration = duration;
  // this._callback = callback;
  // this._startCallback = null;
  this._elementCallback = elementCallback;
  this._end = false;
  this._started = false;
  this._startTime = -1;
};

C64Style.MoveOrder.prototype.start = function() {
  this._startX = this._element.getX();
  this._startY = this._element.getY();
  this._started = true;
  // if (C64Style.isFunction(this._startCallback)) {
  //   this._startCallback();
  // }
};

// C64Style.MoveOrder.prototype.setElementCallback = function(callback) {
//     this._elementCallback = callback;
// };

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

C64Style.MoveOrder.prototype.end = function () {
  this._end = true;
  this._element.setX(this._tx);
  this._element.setY(this._ty);
  // if (C64Style.isFunction(this._callback)) this._callback();
  if (C64Style.isFunction(this._elementCallback)) this._elementCallback();
};

C64Style.MoveOrder.prototype._timePercent = function (time) {
  return (time - this._startTime) / this._duration;
};
