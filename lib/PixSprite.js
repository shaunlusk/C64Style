var C64Style = C64Style || {};

C64Style.PixSprite = function(screenContext, parentLayer, props) {
  props = props || {};
  C64Style.Sprite.call(this, screenContext, parentLayer, props);
  this._palette = props.defaultPalette || [];

  this._width = 0;
  this._height = 0;

  this._pixRenderer = props.pixRenderer || new C64Style.PixRenderer(screenContext.getScaleX(), screenContext.getScaleY());

  this._setDimensions();
};

C64Style.PixSprite.prototype = new C64Style.Sprite();
C64Style.PixSprite.prototype.constructor = C64Style.PixSprite;

C64Style.PixSprite.prototype.getWidth = function() {return this._width;};
C64Style.PixSprite.prototype.getHeight = function() {return this._height;};

C64Style.PixImage.prototype.getPaletteColor = function(idx) {return this._palette[idx];};
C64Style.PixSprite.prototype.setPaletteColor = function(idx, color) {
  this._palette[idx] = color;
  this.setDirty(true);
};

C64Style.PixSprite.prototype._setDimensions = function() {
  var width = 0, height = 0;
  for (var fidx = 0; fidx < this._frames.length; fidx++) {
    var pixPathArray = this._frames[fidx].getPixArray();
    for (var i = 0; i < pixPathArray.length; i++) {
      var pixPath = pixPathArray[i];
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
  }
};

/** @override
*/
C64Style.PixSprite.prototype.renderFrame = function(time, diff, frame) {
  var pixPathArray = frame.getPixArray();
  for (var i = 0; i < pixPathArray.length; i++) {
    this._renderPixPath(pixPathArray[i]);
  }
};

C64Style.PixSprite.prototype._renderPixPath = function(pixPath) {
  this._pixRenderer.renderPixPath(this.getCanvasContext(), this.getX(), this.getY(), pixPath, this._palette, this.getElementScaleX(), this.getElementScaleY());
};

C64Style.PixSpriteFrame = function(pixArray, duration) {
  C64Style.AnimationFrame.call(this);
  this._pixArray = pixArray;
  this._duration = duration;
};
C64Style.PixSpriteFrame.prototype = new C64Style.AnimationFrame();
C64Style.PixSpriteFrame.prototype.callback = C64Style.PixSpriteFrame;

/** @override */
C64Style.PixSpriteFrame.prototype.getDuration = function() {return this._duration;};
C64Style.PixSpriteFrame.prototype.getPixArray = function() {return this._pixArray;};
