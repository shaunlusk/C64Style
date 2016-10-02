var C64Style = C64Style || {};

C64Style.CharacterRenderer = function(scaleX, scaleY) {
  this._scaleX = scaleX;
  this._scaleY = scaleY;
};

C64Style.CharacterRenderer.prototype.render = function(character, context, x, y, color) {
  if (character === " ") return;
  var pixPathArray = null;
  if (typeof character === "string") {
     pixPathArray = C64Style.CharacterMap[character];
  } else {
    pixPathArray = character;
  }

  if (!pixPathArray) {
    C64Style.log("No pix path found for character:" + character);
    return;
  }
  for (var i = 0; i < pixPathArray.length; i++) {
    this._renderPixPath(pixPathArray[i], context, x, y, color);
  }
};

C64Style.CharacterRenderer.prototype._renderPixPath = function(pixPath, context, x, y, color) {
  context.fillStyle = color;
  var tx = (pixPath.x * this._scaleX) + x;
  var ty = (pixPath.y * this._scaleY) + y;
  switch (pixPath.type) {
    case C64Style.PixPathTypes.PIXEL :
      context.fillRect(tx, ty, this._scaleX, this._scaleY);
      break;
    case C64Style.PixPathTypes.RECTANGLE :
      context.fillRect(tx, ty, pixPath.width * this._scaleX, pixPath.height * this._scaleY);
      break;
    default:
      throw new Error("Unknown Pix Path Type");
  }
};
