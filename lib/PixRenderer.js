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

/** Render an array of pix paths to a canvas.
* @param {CanvasContext} context The canvas context.
* @param {number} x The x location to draw
* @param {number} y The y location to draw
* @param {number} width The width of the pixElement
* @param {number} height The height of the pixElement
* @param {array} pixPathArray The array of pix paths to draw
* @param {array} palette The palette to use.
* @param {integer} pixPathScaleX x-scale
* @param {integer} pixPathScaleY y-scale
* @param {boolean} isHorizontallyFlipped Whether the element is flipped horizontally.
* @param {boolean} isVerticallyFlipped Whether the element is flipped vertically.
* @param {number} rotation The element's rotation in radians.
*/
C64Style.PixRenderer.prototype.renderPixPathArray = function(context, x, y, width, height, pixPathArray, palette, pixPathScaleX, pixPathScaleY, flipHorizontally, flipVertically, rotation) {
  var screenX = x * this.getScreenScaleX();
  var screenY = y * this.getScreenScaleY();
  var fillFn = context.fillRect.bind(context);

  if (flipHorizontally || flipVertically || rotation) {
    this._renderAllPixPathsTranslated(context, screenX, screenY,  width, height, pixPathArray, palette, pixPathScaleX, pixPathScaleY, flipHorizontally, flipVertically, rotation);
  } else {
    this._renderAllPixPaths(context, screenX, screenY, pixPathArray, palette, pixPathScaleX, pixPathScaleY, fillFn);
  }
};

C64Style.PixRenderer.prototype._renderAllPixPathsTranslated = function(context, screenX, screenY, width, height, pixPathArray, palette, pixPathScaleX, pixPathScaleY, flipHorizontally, flipVertically, rotation) {
  var scaledWidth = width * this.getTotalScaleX(pixPathScaleX);
  var scaledHeight = height * this.getTotalScaleY(pixPathScaleY);

  // where to reposition the canvas context
  var translationX = screenX + scaledWidth/2;
  var translationY = screenY + scaledHeight/2;

  // target coordinates to draw the element to on the rotated canvas
  var rotatedTx = 0 - scaledWidth/2;
  var rotatedTy = 0 - scaledHeight/2;

  var fillFn = context.fillRectWithTranslation.bind(context);

  SL.renderWithTranslation(context, translationX, translationY, flipHorizontally, flipVertically, rotation, function() {
    this._renderAllPixPaths(context, rotatedTx, rotatedTy, pixPathArray, palette, pixPathScaleX, pixPathScaleY, fillFn);
  }.bind(this));
};

C64Style.PixRenderer.prototype._renderAllPixPaths = function(context, screenX, screenY, pixPathArray, palette, pixPathScaleX, pixPathScaleY, fillFn) {
  for (var i = 0; i < pixPathArray.length; i++) {
    this._renderPixPath(context, screenX, screenY, pixPathArray[i], palette, pixPathScaleX, pixPathScaleY, fillFn);
  }
};

C64Style.PixRenderer.prototype._renderPixPath = function(context, screenX, screenY, pixPath, palette, pixPathScaleX, pixPathScaleY, fillFn) {
  // set context fill color
  this.setFillColor(context, pixPath, palette);

  // calculate tx, ty, tw, th
  var tx = (pixPath.x * this.getTotalScaleX(pixPathScaleX)) + screenX;
  var ty = (pixPath.y * this.getTotalScaleY(pixPathScaleY)) + screenY;
  var tw = (pixPath.width || 1) * this.getTotalScaleX(pixPathScaleX);
  var th = (pixPath.height || 1) * this.getTotalScaleY(pixPathScaleY);

  // draw it
  fillFn(tx, ty, tw, th);
};

C64Style.PixRenderer.prototype.setFillColor = function(context, pixPath, palette) {
    if  (typeof pixPath.color === "number") {
      if (palette.length === 0 || pixPath.color >= palette.length) throw new Error("Color not specified in palette. (" + pixPath.color + ")");
      context.setFillStyle(palette[pixPath.color]);
    } else if (pixPath.color instanceof C64Style.ColorPointer) {
      context.setFillStyle(pixPath.color.getColor());
    } else {
      context.setFillStyle(pixPath.color);
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
