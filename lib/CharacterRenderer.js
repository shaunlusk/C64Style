var C64Style = C64Style || {};

/**
* Draws Characters on a layer.
* @constructor
* @param {integer} scaleX Horizontal scale.  Should be taken from screen's scale.
* @param {integer} scaleY Vertical scale.  Should be taken from screen's scale.
*/
C64Style.CharacterRenderer = function(scaleX, scaleY) {
  this._scaleX = scaleX;
  this._scaleY = scaleY;
  this._cx = -1;
  this._cy = -1;
  this._color = null;
  this._backgroundColor = null;
  this._scaledCellWidth = C64Style.CELLWIDTH * scaleX;
  this._scaledCellHeight = C64Style.CELLHEIGHT * scaleY;
};

/**
* Return scaleX value.
*/
C64Style.CharacterRenderer.prototype.getScaleX = function() {return this._scaleX;};
/**
* Return scaleY value.
*/
C64Style.CharacterRenderer.prototype.getScaleY = function() {return this._scaleY;};

/**
* Clears a length of the screen in preparation for writing characters.
*
* @param {CanvasContext} context The canvas context to work on.
* @param {integer} x The x location to start clearing.
* @param {integer} y The y location to start clearing.
* @param {integer} length The length of characters to clear.
*/
C64Style.CharacterRenderer.prototype.clearRect = function(context, x, y, length)  {
  this.setCursorLocation(x, y);
  context.clearRect(this._cx, this._cy, length * this._scaledCellWidth, this._scaledCellHeight);
};

/**
* Draws a symbol on the canvas.
* @param {CanvasContext} context The canvas context to work on.
* @param {string} char The name of the character to draw.  Refer to {@link C64Style.CharacterMap}
* @param {integer} x The x location to draw the symbol to.
* @param {integer} y The y location to draw the symbol to.
* @param {Color} color The color to draw the symbol.
* @param {Color} backgroundColor Optional. The background color for the symbol.
*/
C64Style.CharacterRenderer.prototype.renderSymbol = function(context, char, x, y, color, backgroundColor) {
  this.setCursorLocation(x, y);
  this.setColor(color);
  this.setBackgroundColor(backgroundColor);

  this._renderCharacter(context, char);
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
C64Style.CharacterRenderer.prototype.renderString = function(context, text, x, y, color, backgroundColor) {
  this.setCursorLocation(x, y);
  this.setColor(color);
  this.setBackgroundColor(backgroundColor);

  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    this._renderCharacter(context, char);
    this.advanceCursor();
  }
};

/**
* @private
*/
C64Style.CharacterRenderer.prototype._renderCharacter = function(context, char) {
  if (this._backgroundColor) {
    context.fillStyle = this._backgroundColor;
    context.fillRect(this._cx, this._cy, this._scaledCellWidth, this._scaledCellHeight);
  }

  if (char === " ") return;
  var pixPathArray = C64Style.CharacterMap[char];

  if (!pixPathArray) {
    C64Style.log("No pix path found for character:" + char);
    return;
  }
  for (var i = 0; i < pixPathArray.length; i++) {
    this._renderPixPath(context, pixPathArray[i]);
  }
};

/**
* @private
*/
C64Style.CharacterRenderer.prototype._renderPixPath = function(context, pixPath) {
  context.fillStyle = pixPath.color && pixPath.color instanceof C64Style.ColorPointer ? pixPath.color.getColor() : pixPath.color || this._color;
  var tx = (pixPath.x * this.getScaleX()) + this._cx;
  var ty = (pixPath.y * this.getScaleY()) + this._cy;
  switch (pixPath.type) {
    case C64Style.PixPathTypes.PIXEL :
      context.fillRect(tx, ty, this.getScaleX(), this.getScaleY());
      break;
    case C64Style.PixPathTypes.RECTANGLE :
      context.fillRect(tx, ty, pixPath.width * this.getScaleX(), pixPath.height * this.getScaleY());
      break;
    default:
      throw new Error("Unknown Pix Path Type");
  }
};

/**
* @private
*/
C64Style.CharacterRenderer.prototype.setCursorLocation = function(x, y) {
  this._cx = x;
  this._cy = y;
};

/**
* @private
*/
C64Style.CharacterRenderer.prototype.advanceCursor = function() {
  this._cx = this._cx + this._scaledCellWidth;
};

/**
* @private
*/
C64Style.CharacterRenderer.prototype.setColor = function(color) {
  this._color = color;
};

/**
* @private
*/
C64Style.CharacterRenderer.prototype.setBackgroundColor = function(backgroundColor) {
  this._backgroundColor = backgroundColor;
};
