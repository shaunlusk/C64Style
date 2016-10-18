var C64Style = C64Style || {};

C64Style.TextLayer = function(engineContext, canvas, config) {
  config = config || {};
  C64Style.Layer.call(this, engineContext, canvas, config);
  this._cx = 0;
  this._cy = 0;
  this._color = C64Style.Color.LIGHTBLUE;
  this._backgroundColor = C64Style.Color.BLUE;
  this._characterRenderer = new C64Style.CharacterRenderer(this._scaleX, this._scaleY);
  this._pendingTextStrings = new RArray();
};

C64Style.TextLayer.prototype = new C64Style.Layer();
C64Style.TextLayer.prototype.constructor = C64Style.TextLayer;

/**
* @override
*/
C64Style.TextLayer.prototype.render = function() {
  // write pending strings
  for (var i = 0; i < this._pendingTextStrings.length; i++) {
    this._drawText(this._pendingTextStrings.get(i));
  }

  this._pendingTextStrings.clear();
};

C64Style.TextLayer.prototype._drawText = function(pendingTextString) {
  this.setCursorLocation(pendingTextString.cellX, pendingTextString.cellY);
  this.setColor(pendingTextString.color);
  this.setBackgroundColor(pendingTextString.backgroundColor);
  if (pendingTextString.pixMap) {
    this._renderCharacter(pendingTextString.pixMap);
  } else if (pendingTextString.string) {
    for (var i = 0; i < pendingTextString.string.length; i++) {
      var char = pendingTextString.string.charAt(i);
      this._renderCharacter(char);
      this.setCursorLocation(this._cx + (C64Style.CELLWIDTH * this.getScaleX()), this._cy);
    }
  }
};

C64Style.TextLayer.prototype.setCursorLocation = function(x, y) {
  this._cx = x;
  this._cy = y;
};
C64Style.TextLayer.prototype.setColor = function(color) {
  this._color = color;
};
C64Style.TextLayer.prototype.setBackgroundColor = function(backgroundColor) {
  this._backgroundColor = backgroundColor;
};

C64Style.TextLayer.prototype._renderCharacter = function(char) {
  // this._canvasContext.clearRect(this._cx, this._cy, C64Style.CELLWIDTH, C64Style.CELLHEIGHT);
  this._characterRenderer.render(char, this.getCanvasContext(), this._cx, this._cy, this._color, this._backgroundColor);
};

C64Style.TextLayer.prototype.writeText = function(string, cellX, cellY, color, backgroundColor) {
  this._pendingTextStrings.push({
    string:string,
    cellX:cellX * C64Style.CELLWIDTH * this.getScaleX(),
    cellY:cellY * C64Style.CELLHEIGHT * this.getScaleY(),
    color:color,
    backgroundColor:backgroundColor
  });
};

C64Style.TextLayer.prototype.drawSymbol = function(pixMap, cellX, cellY, color, backgroundColor) {
  this._pendingTextStrings.push({
    pixMap:pixMap,
    cellX:cellX * C64Style.CELLWIDTH * this.getScaleX(),
    cellY:cellY * C64Style.CELLHEIGHT * this.getScaleY(),
    color:color,
    backgroundColor:backgroundColor
  });
};
