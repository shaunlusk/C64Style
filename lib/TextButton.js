var C64Style = C64Style || {};

C64Style.TextButton = function(screenContext, parentLayer, props) {
  props = props || {};
  C64Style.TextLink.call(this, screenContext, parentLayer, props);

  this._buttonColor = props.buttonColor || this._color;
  this._textColor = props.textColor || this._color;

  this._highlightButtonColor = props.highlightButtonColor;
  this._highlightTextColor = props.highlightTextColor;

  this._height = C64Style.CELLHEIGHT * 3;
};

C64Style.TextButton.prototype = new C64Style.TextLink(null, null, {characterRenderer:{}});
C64Style.TextButton.prototype.constructor = C64Style.TextButton;

C64Style.TextButton.prototype._setWidth = function() {
  this._lastWidth = this._width;
  this._width = C64Style.CELLWIDTH * ((this._text ? this._text.length : 1) + 2);
};

C64Style.TextButton.prototype.render = function(time,diff) {
  if (this.isHidden() || !this.isDirty()) return;
  this.drawTextButton();
  C64Style.GfxElement.prototype.render.call(this, time, diff);
};

C64Style.TextButton.prototype.drawTextButton = function() {
  var x = this.getX() * this.getScreenScaleX();
  var y = this.getY() * this.getScreenScaleY();
  var scaledCellWidth = C64Style.CELLWIDTH * this.getTotalScaleX();
  var scaledCellHeight = C64Style.CELLHEIGHT * this.getTotalScaleY();
  var edgeX = x + scaledCellWidth;
  var rightEdge = x + (this._text.length * scaledCellWidth) + scaledCellWidth;
  var characterRenderer = this.getCharacterRenderer();
  var screen = this.getScreenContext();
  var canvas = this.getCanvasContext();

  if (this._mouseIsOver) {
    for ( ; edgeX < rightEdge; edgeX += scaledCellWidth) {
      characterRenderer.renderSymbol(canvas, "BAR_120", edgeX, y,  this.getBackgroundColor(), this._highlightButtonColor);
      characterRenderer.renderSymbol(canvas, "BAR_121", edgeX, y + 2 * scaledCellHeight, this.getBackgroundColor(), this._highlightButtonColor);
    }
    characterRenderer.renderSymbol(canvas, "PIPE_117", x, y + scaledCellHeight, this.getBackgroundColor(), this._highlightButtonColor);
    characterRenderer.renderSymbol(canvas, "PIPE_118", rightEdge, y + scaledCellHeight, this.getBackgroundColor(), this._highlightButtonColor);

    characterRenderer.renderSymbol(canvas, "ROUNDED_CORNER_FILLED_TOP_LEFT", x, y, this._highlightButtonColor, this.getBackgroundColor());
    characterRenderer.renderSymbol(canvas, "ROUNDED_CORNER_FILLED_TOP_RIGHT", rightEdge, y, this._highlightButtonColor, this.getBackgroundColor());
    characterRenderer.renderSymbol(canvas, "ROUNDED_CORNER_FILLED_BOTTOM_LEFT", x, y + 2 * scaledCellHeight, this._highlightButtonColor, this.getBackgroundColor());
    characterRenderer.renderSymbol(canvas, "ROUNDED_CORNER_FILLED_BOTTOM_RIGHT", rightEdge, y + 2 * scaledCellHeight, this._highlightButtonColor, this.getBackgroundColor());

    characterRenderer.renderString(canvas, this.getText(), this.getTextX(), this.getTextY(), this._highlightTextColor, this._highlightButtonColor);
  } else {
    for ( ; edgeX < rightEdge; edgeX += scaledCellWidth) {
      characterRenderer.renderSymbol(canvas, "BAR", edgeX, y, this._buttonColor, this.getBackgroundColor());
      characterRenderer.renderSymbol(canvas, "BAR", edgeX, y + 2 * scaledCellHeight, this._buttonColor, this.getBackgroundColor());
    }
    characterRenderer.renderSymbol(canvas, "|", x, y + scaledCellHeight, this._buttonColor, this.getBackgroundColor());
    characterRenderer.renderSymbol(canvas, "|", rightEdge, y + scaledCellHeight, this._buttonColor, this.getBackgroundColor());

    characterRenderer.renderSymbol(canvas, "ROUNDED_CORNER_TOP_LEFT", x, y, this._buttonColor, this.getBackgroundColor());
    characterRenderer.renderSymbol(canvas, "ROUNDED_CORNER_TOP_RIGHT", rightEdge, y, this._buttonColor, this.getBackgroundColor());
    characterRenderer.renderSymbol(canvas, "ROUNDED_CORNER_BOTTOM_LEFT", x, y + 2 * scaledCellHeight, this._buttonColor, this.getBackgroundColor());
    characterRenderer.renderSymbol(canvas, "ROUNDED_CORNER_BOTTOM_RIGHT", rightEdge, y + 2 * scaledCellHeight, this._buttonColor, this.getBackgroundColor());

    characterRenderer.renderString(canvas, this.getText(), this.getTextX(), this.getTextY(), this._textColor, this.getBackgroundColor());
  }

};

C64Style.TextButton.prototype.getTextX = function() {
  return this.getX() * this.getScreenScaleX() + C64Style.CELLWIDTH * this.getTotalScaleX();
};

C64Style.TextButton.prototype.getTextY = function() {
  return this.getY() * this.getScreenScaleY() + C64Style.CELLHEIGHT * this.getTotalScaleY();
};
