var C64Style = C64Style || {};

/** Draws Pix Arrays to a canvas.
* @constructor
* @param {integer} screenScaleX scale x of the screen
* @param {integer} screenScaleY scale y of the screen
*/
C64Style.PixRenderer = function(screenScaleX, screenScaleY) {
  this._screenScaleX = screenScaleX;
  this._screenScaleY = screenScaleY;
};

/** Render a pix path to a canvas.
* @param {CanvasContext} context The canvas context.
* @param {number} x The x location to draw
* @param {number} y The y location to draw
* @param {array} palette the palette to use.
* @param {integer} pixPathScaleX x-scale
* @param {integer} pixPathScaleY y-scale
*/
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

/**
* Return the horizontal scale of the renderer.
* @return {integer}
*/
C64Style.PixRenderer.prototype.getScreenScaleX = function() {return this._screenScaleX;};

/**
* Return the vertical scale of the renderer.
* @return {integer}
*/
C64Style.PixRenderer.prototype.getScreenScaleY = function() {return this._screenScaleY;};

/**
* Return the total horizontal scale (screen scale * image scale).
* @param {integer} imageScaleX The x amount to scale the portion of the image drawn to the canvas.
* @return {integer}
*/
C64Style.PixRenderer.prototype.getTotalScaleX = function(pixPathScaleX) {return this._screenScaleX * pixPathScaleX;};

/**
* Return the total vertical scale (screen scale * image scale).
* @param {integer} imageScaleY The y amount to scale the portion of the image drawn to the canvas.
* @return {integer}
*/
C64Style.PixRenderer.prototype.getTotalScaleY = function(pixPathScaleY) {return this._screenScaleY * pixPathScaleY;};
