import ColorPointer from './ColorPointer';
import Utils from 'slgfx/src/Utils';

/** Draws Pix Arrays to a canvas.
* @constructor
*/
function PixRenderer() {};

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
PixRenderer.prototype.renderPixPathArray = function(context, x, y, width, height, pixPathArray, palette, pixelWidth, pixelHeight, flipHorizontally, flipVertically, rotation) {
  var fillFn = context.fillRect.bind(context);

  if (flipHorizontally || flipVertically || rotation) {
    this._renderAllPixPathsTranslated(context, x, y,  width, height, pixPathArray, palette, pixelWidth, pixelHeight, flipHorizontally, flipVertically, rotation);
  } else {
    this._renderAllPixPaths(context, x, y, pixPathArray, palette, pixelWidth, pixelHeight, fillFn);
  }
};

PixRenderer.prototype._renderAllPixPathsTranslated = function(context, x, y, width, height, pixPathArray, palette, pixelWidth, pixelHeight, flipHorizontally, flipVertically, rotation) {
  var scaledWidth = width * pixelWidth;
  var scaledHeight = height * pixelHeight;

  // where to reposition the canvas context
  var translationX = x + scaledWidth/2;
  var translationY = x + scaledHeight/2;

  // target coordinates to draw the element to on the rotated canvas
  var rotatedTx = 0 - scaledWidth/2;
  var rotatedTy = 0 - scaledHeight/2;

  var fillFn = context.fillRectWithTranslation.bind(context);

  Utils.renderWithTranslation(context, translationX, translationY, flipHorizontally, flipVertically, rotation, function() {
    this._renderAllPixPaths(context, rotatedTx, rotatedTy, pixPathArray, palette, pixPathScaleX, pixPathScaleY, fillFn);
  }.bind(this));
};

PixRenderer.prototype._renderAllPixPaths = function(context, x, y, pixPathArray, palette, pixelWidth, pixelHeight, fillFn) {
  for (var i = 0; i < pixPathArray.length; i++) {
    this._renderPixPath(context, x, y, pixPathArray[i], palette, pixelWidth, pixelHeight, fillFn);
  }
};

PixRenderer.prototype._renderPixPath = function(context, x, y, pixPath, palette, pixelWidth, pixelHeight, fillFn) {
  // set context fill color
  this.setFillColor(context, pixPath, palette);

  // calculate tx, ty, tw, th
  var tx = (pixPath.x * pixelWidth) + x;
  var ty = (pixPath.y * pixelHeight) + y;
  var tw = (pixPath.width || 1) * pixelWidth;
  var th = (pixPath.height || 1) * pixelHeight;

  // draw it
  fillFn(tx, ty, tw, th);
};

PixRenderer.prototype.setFillColor = function(context, pixPath, palette) {
    if  (typeof pixPath.color === "number") {
      if (palette.length === 0 || pixPath.color >= palette.length) throw new Error("Color not specified in palette. (" + pixPath.color + ")");
      context.setFillStyle(palette[pixPath.color]);
    } else if (pixPath.color instanceof ColorPointer) {
      context.setFillStyle(pixPath.color.getColor());
    } else {
      context.setFillStyle(pixPath.color);
    }
};

export default PixRenderer;
