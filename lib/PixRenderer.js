var C64Style = C64Style || {};

C64Style.PixRenderer = function(screenScaleX, screenScaleY) {
  this._screenScaleX = screenScaleX;
  this._screenScaleY = screenScaleY;
};

C64Style.PixRenderer.prototype.renderPixPath = function(context, x, y, pixPath, palette, pixPathScaleX, pixPathScaleY) {
  if  (typeof pixPath.color === "number") {
    if (palette.length === 0 || pixPath.color >= palette.length) throw new Error("Color not specified in palette. (" + pixPath.color + ")");
    context.fillStyle = palette[pixPath.color];
  } else if (pixPath.color instanceof C64Style.ColorPointer) {
    context.fillStyle = pixPath.color.getColor();
  } else {
    context.fillStyle = pixPath.color;
  }
  var tx = (pixPath.x * this.getTotalScaleX(pixPathScaleX)) + x * this.getScreenScaleX();
  var ty = (pixPath.y * this.getTotalScaleY(pixPathScaleY)) + y * this.getScreenScaleY();
  switch (pixPath.type) {
    case C64Style.PixPathTypes.PIXEL :
      context.fillRect(tx, ty, this.getTotalScaleX(pixPathScaleX), this.getTotalScaleY(pixPathScaleY));
      break;
    case C64Style.PixPathTypes.RECTANGLE :
      context.fillRect(tx, ty, pixPath.width * this.getTotalScaleX(pixPathScaleX), pixPath.height * this.getTotalScaleY(pixPathScaleY));
      break;
    default:
      throw new Error("Unknown Pix Path Type");
  }
};

C64Style.PixRenderer.prototype.getScreenScaleX = function() {return this._screenScaleX;};
C64Style.PixRenderer.prototype.getScreenScaleY = function() {return this._screenScaleY;};

C64Style.PixRenderer.prototype.getTotalScaleX = function(pixPathScaleX) {return this._screenScaleX * pixPathScaleX;};
C64Style.PixRenderer.prototype.getTotalScaleY = function(pixPathScaleY) {return this._screenScaleY * pixPathScaleY;};
