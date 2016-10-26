var C64Style = C64Style || {};

C64Style.ImageRenderer = function(screenScaleX, screenScaleY) {
  this._screenScaleX = screenScaleX;
  this._screenScaleY = screenScaleY;
};

C64Style.ImageRenderer.prototype.renderImage = function(context, image, sx, sy, sWidth, sHeight, x, y, width, height, imageScaleX, imageScaleY) {
  context.drawImage(
    image,
    sx,
    sy,
    sWidth,
    sHeight,
    x * this.getScreenScaleX(),
    y * this.getScreenScaleY(),
    width * this.getTotalScaleX(imageScaleX),
    height * this.getTotalScaleY(imageScaleY));
};

C64Style.ImageRenderer.prototype.getScreenScaleX = function() {return this._screenScaleX;};
C64Style.ImageRenderer.prototype.getScreenScaleY = function() {return this._screenScaleY;};

C64Style.ImageRenderer.prototype.getTotalScaleX = function(imageScaleX) {return this._screenScaleX * imageScaleX;};
C64Style.ImageRenderer.prototype.getTotalScaleY = function(imageScaleY) {return this._screenScaleY * imageScaleY;};
