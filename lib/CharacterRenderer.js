var c64Style = c64Style || {};

c64Style.CharacterRenderer = function(scaleX, scaleY) {
  this._scaleX = scaleX;
  this._scaleY = scaleY;
};

c64Style.CharacterRenderer.prototype.render = function(character, context, x, y, color) {
  if (character === " ") return;
  var pixPathArray = null;
  if (typeof character === "string") {
     pixPathArray = c64Style.CharacterMaps[character];
  } else {
    pixPathArray = character;
  }

  if (!pixPathArray) {
    c64Style.log("No pix path found for character:" + character);
    return;
  }
  for (var i = 0; i < pixPathArray.length; i++) {
    this._renderPixPath(pixPathArray[i], context, x, y, color);
  }
};

c64Style.CharacterRenderer.prototype._renderPixPath = function(pixPath, context, x, y, color) {
  context.fillStyle = color;
  var tx = (pixPath.x * this._scaleX) + x;
  var ty = (pixPath.y * this._scaleY) + y;
  switch (pixPath.type) {
    case c64Style.PixPathTypes.PIXEL :
      context.fillRect(tx, ty, this._scaleX, this._scaleY);
      break;
    case c64Style.PixPathTypes.RECTANGLE :
      context.fillRect(tx, ty, pixPath.width * this._scaleX, pixPath.height * this._scaleY);
      break;
    default:
      throw new Error("Unknown Pix Path Type");
  }
};
