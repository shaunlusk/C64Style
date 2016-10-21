var C64Style = C64Style || {};

C64Style.CharacterRenderer = function(scaleX, scaleY) {
  this._scaleX = scaleX;
  this._scaleY = scaleY;
  this._cx = -1;
  this._cy = -1;
  this._color = null;
  this._backgroundColor = null;
};

C64Style.CharacterRenderer.prototype.getScaleX = function() {return this._scaleX;};
C64Style.CharacterRenderer.prototype.getScaleY = function() {return this._scaleY;};

C64Style.CharacterRenderer.prototype.clearRect = function(context, length, x, y)  {
  this.setCursorLocation(x, y);
  context.clearRect(this._cx, this._cy, length * C64Style.CELLWIDTH * this.getScaleX(), C64Style.CELLHEIGHT * this.getScaleY());
};

C64Style.CharacterRenderer.prototype.renderSymbol = function(context, char, x, y, color, backgroundColor) {
  this.setCursorLocation(x, y);
  this.setColor(color);
  this.setBackgroundColor(backgroundColor);

  this._renderCharacter(context, char);
};

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

C64Style.CharacterRenderer.prototype._renderCharacter = function(context, char) {
  if (this._backgroundColor) {
    context.fillStyle = backgroundColor;
    context.fillRect(this._cx, this._cy, C64Style.CELLWIDTH * this.getScaleX(), C64Style.CELLHEIGHT * this.getScaleY());
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

C64Style.CharacterRenderer.prototype._renderPixPath = function(context, pixPath) {
  context.fillStyle = this._color;
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

C64Style.CharacterRenderer.prototype.setCursorLocation = function(x, y) {
  this._cx = x * this.getScaleX() * C64Style.CELLWIDTH;
  this._cy = y * this.getScaleY() * C64Style.CELLHEIGHT;
};
C64Style.CharacterRenderer.prototype.advanceCursor = function() {
  this._cx = this._cx + (this.getScaleX() * C64Style.CELLWIDTH);
};
C64Style.CharacterRenderer.prototype.setColor = function(color) {
  this._color = color;
};
C64Style.CharacterRenderer.prototype.setBackgroundColor = function(backgroundColor) {
  this._backgroundColor = backgroundColor;
};
