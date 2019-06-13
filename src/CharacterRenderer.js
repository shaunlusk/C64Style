import {CELLWIDTH, CELLHEIGHT} from './Constants';
import ColorPointer from './ColorPointer';
import {CharacterMap} from './CharacterMap';
import {PixPathTypes} from './PixPathTypes';
import Utils from 'slgfx/src/Utils';

/**
* Draws Characters on a layer.
* @constructor
* @param {integer} scaleX Horizontal scale.  Should be taken from screen's scale.
* @param {integer} scaleY Vertical scale.  Should be taken from screen's scale.
*/
function CharacterRenderer() {
  this._cx = 0;
  this._cy = 0;
  this._color = null;
  this._backgroundColor = null;
};

/**
* Clears a length of the screen in preparation for writing characters.
*
* @param {CanvasContext} context The canvas context to work on.
* @param {integer} x The x location to start clearing.
* @param {integer} y The y location to start clearing.
* @param {integer} length The length of characters to clear.
*/
CharacterRenderer.prototype.clearRect = function(context, x, y, length, pixelWidth, pixelHeight)  {
  pixelWidth = pixelWidth || 1;
  pixelHeight = pixelHeight || 1;
  this.setCursorLocation(x, y);
  context.clearRect(
    this._cx,
    this._cy,
    length * pixelWidth * CELLWIDTH,
    pixelHeight * CELLHEIGHT);
};

/**
* Draws a symbol on the canvas.
* @param {CanvasContext} context The canvas context to work on.
* @param {string} char The name of the character to draw.  Refer to {@link CharacterMap}
* @param {integer} x The x location to draw the symbol to.
* @param {integer} y The y location to draw the symbol to.
* @param {Color} color The color to draw the symbol.
* @param {Color} backgroundColor Optional. The background color for the symbol.
*/
CharacterRenderer.prototype.renderSymbol = function(context, char, x, y, color, backgroundColor, pixelWidth, pixelHeight) {
  pixelWidth = pixelWidth || 1;
  pixelHeight = pixelHeight || 1;
  this.setCursorLocation(x, y, pixelWidth, pixelHeight);
  this.setColor(color);
  this.setBackgroundColor(backgroundColor);

  this._renderCharacter(context, char, pixelWidth, pixelHeight);
};

/**
* Draws a string on the canvas.
* @param {CanvasContext} context The canvas context to work on.
* @param {string} text The text to draw to the canvas.
* @param {integer} x The x location to draw the symbol to.
* @param {integer} y The y location to draw the symbol to.
* @param {Color} color The color to draw the string.
* @param {Color} backgroundColor Optional. The background color for the string.
*/
CharacterRenderer.prototype.renderString = function(context, text, x, y, color, backgroundColor, pixelWidth, pixelHeight) {
  pixelWidth = pixelWidth || 1;
  pixelHeight = pixelHeight || 1;
  this.setCursorLocation(x, y, pixelWidth, pixelHeight);
  this.setColor(color);
  this.setBackgroundColor(backgroundColor);

  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    this._renderCharacter(context, char, pixelWidth, pixelHeight);
    this.advanceCursor(pixelWidth);
  }
};

/**
* @private
*/
CharacterRenderer.prototype._renderCharacter = function(context, char, pixelWidth, pixelHeight) {
  if (this._backgroundColor) {
    context.setFillStyle(this._backgroundColor);
    context.fillRect(this._cx, this._cy, CELLWIDTH * pixelWidth, CELLHEIGHT * pixelHeight);
  }

  if (char === " ") return;
  var pixPathArray = CharacterMap[char];

  if (!pixPathArray) {
    console.log("No pix path found for character:" + char);
    return;
  }
  for (var i = 0; i < pixPathArray.length; i++) {
    this._renderPixPath(context, pixPathArray[i], pixelWidth, pixelHeight);
  }
};

/**
* @private
*/
CharacterRenderer.prototype._renderPixPath = function(context, pixPath, pixelWidth, pixelHeight) {
  context.setFillStyle(pixPath.color && pixPath.color instanceof ColorPointer ? pixPath.color.getColor() : pixPath.color || this._color);
  var tx = (pixPath.x * pixelWidth) + this._cx;
  var ty = (pixPath.y * pixelHeight) + this._cy;
  switch (pixPath.type) {
    case PixPathTypes.PIXEL :
      context.fillRect(tx, ty, pixelWidth, pixelHeight);
      break;
    case PixPathTypes.RECTANGLE :
      context.fillRect(
        tx,
        ty,
        pixPath.width * pixelWidth,
        pixPath.height * pixelWidth
      );
      break;
    default:
      throw new Error("Unknown Pix Path Type");
  }
};

/**
* @private
*/
CharacterRenderer.prototype.setCursorLocation = function(x, y) {
  this._cx = x;
  this._cy = y;
};

/**
* @private
*/
CharacterRenderer.prototype.advanceCursor = function(pixelWidth) {
  this._cx = this._cx + CELLWIDTH * pixelWidth;
};

/**
* @private
*/
CharacterRenderer.prototype.setColor = function(color) {
  this._color = color;
};

/**
* @private
*/
CharacterRenderer.prototype.setBackgroundColor = function(backgroundColor) {
  this._backgroundColor = backgroundColor;
};

export default CharacterRenderer;
