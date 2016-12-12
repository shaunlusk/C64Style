var C64Style = C64Style || {};

C64Style.PixElement = function(screenContext, parentLayer, props) {
  props = props || {};
  C64Style.GfxElement.call(this, screenContext, parentLayer, props);
  this._width = 0;
  this._height = 0;
  this._pixPathArray = props.pixPathArray || [];
  this._palette = props.defaultPalette || [];
  this._pixRenderer = props.pixRenderer || new C64Style.PixRenderer(screenContext.getScaleX(), screenContext.getScaleY());

  this._setDimensions();
};

C64Style.PixElement.prototype = new C64Style.GfxElement();
C64Style.PixElement.prototype.constructor = C64Style.PixElement;

C64Style.PixElement.prototype.getWidth = function() {return this._width;};
C64Style.PixElement.prototype.getHeight = function() {return this._height;};

C64Style.PixElement.prototype.getPaletteColor = function(idx) {return this._palette[idx];};
C64Style.PixElement.prototype.setPaletteColor = function(idx, color) {
  this._palette[idx] = color;
  this.setDirty(true);
};
C64Style.PixElement.prototype.getPalette = function() {return this._palette;};
C64Style.PixElement.prototype.setPalette = function(palette) {
  this._palette = palette;
  this.setDirty(true);
};

C64Style.PixElement.prototype._setDimensions = function() {
  var width = 0, height = 0;
  for (var i = 0; i < this._pixPathArray.length; i++) {
    var pixPath = this._pixPathArray[i];
    var tx = pixPath.x;
    var ty = pixPath.y;
    switch(pixPath.type) {
      case C64Style.PixPathTypes.PIXEL:
      width = tx + 1;
      height = ty + 1;
      break;
      case C64Style.PixPathTypes.RECTANGLE:
      width = tx + pixPath.width;
      height = ty + pixPath.height;
      break;
    }
    if (width > this._width) this._width = width;
    if (height > this._height) this._height = height;
  }
};

C64Style.PixElement.prototype.render = function(time,diff) {
  if (this.isHidden() || !this.isDirty()) return;
  for (var i = 0; i < this._pixPathArray.length; i++) {
    this._renderPixPath(this._pixPathArray[i]);
  }

  C64Style.GfxElement.prototype.render.call(this, time, diff);
};

C64Style.PixElement.prototype._renderPixPath = function(pixPath) {
  this._pixRenderer.renderPixPath(this.getCanvasContext(), this.getX(), this.getY(), pixPath, this._palette, this.getElementScaleX(), this.getElementScaleY());
};
