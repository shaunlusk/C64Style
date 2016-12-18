var C64Style = C64Style || {};

C64Style.TextElement = function(screenContext, parentLayer, props) {
  props = props || {};
  C64Style.GfxElement.call(this, screenContext, parentLayer, props);
  this._width = 0;
  this._height = C64Style.CELLHEIGHT;
  this._color = props.color || C64Style.Color.LIGHTBLUE;
  this._backgroundColor = props.backgroundColor  || C64Style.Color.BLUE;
  this._text = props.text;
  this._symbolName = props.symbolName;
  this._characterRenderer = props.characterRenderer || new C64Style.CharacterRenderer(this._scaleX * this.getScreenContext().getScaleX(), this._scaleY * this.getScreenContext().getScaleY());

  this._setWidth();
};

C64Style.TextElement.prototype = new C64Style.GfxElement();
C64Style.TextElement.prototype.constructor = C64Style.TextElement;

C64Style.TextElement.prototype.getCharacterRenderer = function() {return this._characterRenderer;};
C64Style.TextElement.prototype.getWidth = function() {return this._width;};
C64Style.TextElement.prototype.getLastWidth = function() {return this._lastWidth || this._width;};
C64Style.TextElement.prototype.getHeight = function() {return this._height;};
C64Style.TextElement.prototype.getText = function() {return this._text;};
C64Style.TextElement.prototype.setText = function(text) {
  this._text = text;
  this._setWidth();
  this.setDirty(true);
};
C64Style.TextElement.prototype.getsymbolName = function() {return this._symbolName;};
C64Style.TextElement.prototype.setsymbolName = function(symbolName) {
  this._symbolName = symbolName;
  this._setWidth();
  this.setDirty(true);
};

C64Style.TextElement.prototype.getColor = function() {return this._color;};
C64Style.TextElement.prototype.setColor = function(color) {
  this._color = color;
  this.setDirty(true);
};

C64Style.TextElement.prototype.getBackgroundColor = function() {return this._backgroundColor;};
C64Style.TextElement.prototype.setBackgroundColor = function(color) {
  this._backgroundColor = color;
  this.setDirty(true);
};

C64Style.TextElement.prototype._setWidth = function() {
  this._lastWidth = this._width;
  this._width = C64Style.CELLWIDTH * (this._text ? this._text.length : 1);
};

/** @override
* In case the width of the text changed, clear based on last width
*/
C64Style.TextElement.prototype.clear = function(time, diff) {
  this.getCanvasContext().clearRect(
    this.getLastX() * this.getScreenScaleX() - 1,
    this.getLastY() * this.getScreenScaleY() - 1,
    this.getLastWidth() * this.getTotalScaleX() + 2,
    this.getHeight() * this.getTotalScaleY() + 2 );
  this._lastWidth = null;
};

C64Style.TextElement.prototype.render = function(time,diff) {
  if (this.isHidden() || !this.isDirty()) return;

  if (this._text) {
    this._characterRenderer.renderString(
      this.getCanvasContext(),
      this._text,
      this.getX() * this.getScreenScaleX(),
      this.getY() * this.getScreenScaleY(),
      this._color,
      this._backgroundColor
    );
  } else {
    this._characterRenderer.renderSymbol(
      this.getCanvasContext(),
      this._symbolName,
      this.getX() * this.getScreenScaleX(),
      this.getY() * this.getScreenScaleY(),
      this._color,
      this._backgroundColor
    );
  }

  C64Style.GfxElement.prototype.render.call(this, time, diff);
};
