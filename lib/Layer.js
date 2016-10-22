var C64Style = C64Style || {};

C64Style.Layer = function(screenContext, canvas, props) {
  props = props || {};
  this._width = props.width || 320;
  this._height = props.height || 200;
  this._scaleX = props.scaleX || 1;
  this._scaleY = props.scaleY || 1;
  this._screenContext = screenContext;
  this._canvas = canvas;
  this._canvasContext = canvas ? canvas.getContext("2d") : null;
};

C64Style.Layer.prototype.getWidth = function() {return this._width;};
C64Style.Layer.prototype.getHeight = function() {return this._height;};
C64Style.Layer.prototype.getScaleX = function() {return this._scaleX;};
C64Style.Layer.prototype.getScaleY = function() {return this._scaleY;};
C64Style.Layer.prototype.getScreenContext = function() {return this._screenContext;};
C64Style.Layer.prototype.getCanvas = function() {return this._canvas;};
C64Style.Layer.prototype.getCanvasContext = function() {return this._canvasContext;};

C64Style.Layer.prototype.update = function(time,diff) {

};

C64Style.Layer.prototype.render = function() {

};
