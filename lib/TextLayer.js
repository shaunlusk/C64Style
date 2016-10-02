var C64Style = C64Style || {};

C64Style.TextLayer = function(canvas, config) {
  config = config || {};
  // this._width = config.width || 320;
  // this._height = config.height || 200;
  this._scaleX = config.scaleX || 1;
  this._scaleY = config.scaleY || 1;
  this._cx = 0;
  this._cy = 0;
  this._canvas = canvas;
  this._canvasContext = canvas.getContext("2d");
  this._characterRenderer = new C64Style.CharacterRenderer(this._scaleX, this._scaleY);
  this._pendingTextStrings = new RArray();
};

C64Style.TextLayer.prototype.update = function(time,diff) {};

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
  if (pendingTextString.pixMap) {
    this._renderCharacter(pendingTextString.pixMap);
  } else if (pendingTextString.string) {
    for (var i = 0; i < pendingTextString.string.length; i++) {
      var char = pendingTextString.string.charAt(i);
      this._renderCharacter(char);
      this.setCursorLocation(this._cx + (C64Style.CELLWIDTH * this._scaleX), this._cy);
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

C64Style.TextLayer.prototype._renderCharacter = function(char) {
  this._canvasContext.clearRect(this._cx, this._cy, C64Style.CELLWIDTH, C64Style.CELLHEIGHT);
  this._characterRenderer.render(char, this._canvasContext, this._cx, this._cy, this._color);
};

C64Style.TextLayer.prototype.writeText = function(string, cellX, cellY, color) {
  this._pendingTextStrings.push({
    string:string,
    cellX:cellX * C64Style.CELLWIDTH * this._scaleX,
    cellY:cellY * C64Style.CELLHEIGHT * this._scaleY,
    color:color
  });
};

C64Style.TextLayer.prototype.drawSymbol = function(pixMap, cellX, cellY, color) {
  this._pendingTextStrings.push({
    pixMap:pixMap,
    cellX:cellX * C64Style.CELLWIDTH * this._scaleX,
    cellY:cellY * C64Style.CELLHEIGHT * this._scaleY,
    color:color
  });
};
