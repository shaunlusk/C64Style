var c64Style = c64Style || {};

c64Style.TextLayer = function(context, props) {
  props = props || {};
  this._width = props.width || 320;
  this._height = props.height || 200;
  this._cellWidth = props.cellWidth || 8;
  this._cellHeight = props.cellHeight || 8;
  this._scaleX = props.scaleX || 1;
  this._scaleY = props.scaleY || 1;
  this._cx = 0;
  this._cy = 0;
  this._context = context;
  this._characterRenderer = new c64Style.CharacterRenderer(this._scaleX, this._scaleY);
  this._pendingTextStrings = new RArray();
};

c64Style.TextLayer.prototype.update = function(time,diff) {

};

c64Style.TextLayer.prototype.render = function() {
  // write pending strings
  for (var i = 0; i < this._pendingTextStrings.length; i++) {
    this._drawText(this._pendingTextStrings.get(i));
  }

  this._pendingTextStrings.clear();
};

c64Style.TextLayer.prototype._drawText = function(pendingTextString) {
  this.setCursorLocation(pendingTextString.cellX, pendingTextString.cellY);
  this.setColor(pendingTextString.color);
  if (pendingTextString.pixMap) {
    this._renderCharacter(pendingTextString.pixMap);
  } else if (pendingTextString.string) {
    for (var i = 0; i < pendingTextString.string.length; i++) {
      var char = pendingTextString.string.charAt(i);
      this._renderCharacter(char);
      this.setCursorLocation(this._cx + (this._cellWidth * this._scaleX), this._cy);
    }
  }
};

c64Style.TextLayer.prototype.setCursorLocation = function(x, y) {
  this._cx = x;
  this._cy = y;
};
c64Style.TextLayer.prototype.setColor = function(color) {
  this._color = color;
};

c64Style.TextLayer.prototype._renderCharacter = function(char) {
  this._context.clearRect(this._cx, this._cy, this._cellWidth, this._cellHeight);
  this._characterRenderer.render(char, this._context, this._cx, this._cy, this._color);
};

c64Style.TextLayer.prototype.writeText = function(string, cellX, cellY, color) {
  this._pendingTextStrings.push({
    string:string,
    cellX:cellX * this._cellWidth * this._scaleX,
    cellY:cellY * this._cellHeight * this._scaleY,
    color:color
  });
};

c64Style.TextLayer.prototype.drawSymbol = function(pixMap, cellX, cellY, color) {
  this._pendingTextStrings.push({
    pixMap:pixMap,
    cellX:cellX * this._cellWidth * this._scaleX,
    cellY:cellY * this._cellHeight * this._scaleY,
    color:color
  });
};
