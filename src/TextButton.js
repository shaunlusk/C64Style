import {CELLHEIGHT,CELLWIDTH} from './Constants';
import {Color} from './Color';
import TextLink from './TextLink';

/** Provides a clickable button link.<br />
* <b>Extends</b>: {@link TextLink}
* @constructor
* @param {C64Screen} screenContext The target screen.
* @param {GfxLayer} parentLayer The parent layer that will draw this element.
* @param {Object} props Properties for this TextLink.  Supports:
* From {@link GfxElement}
*   <ul>
*     <li>scaleX - integer - Horizontal scale of this element.  Independent of screen scale.</li>
*     <li>scaleY - integer - Vertical scale of this element.  Independent of screen scale.</li>
*     <li>hidden - boolean - Whether to hide this element.</li>
*     <li>x - number - The X coordinate for this element.</li>
*     <li>y - number - The Y coordinate for this element.</li>
*     <li>zIndex - number - The z-index; elements with higher zIndex values will be drawn later than those with lower values (drawn on top of those with lower values).</li>
*   </ul>
* From {@link TextElement}:
* <ul>
*   <li>text - string - The text for this element. A text string or a symbol name is required for TextElement.</li>
*   <li>symbolName - string - The symbolName for this element.  A text string or a symbol name is required for TextElement.  Refer to symbol names in {@link CharacterMap}.</li>
*   <li>color - Color - The color for the text. Default: Color.LIGHTBLUE</li>
*   <li>backgroundColor - Color - The backgroundColor for the text. Default: no background color</li>
*   <li>characterRenderer - CharacterRenderer - The renderer to use to draw text.
*     This can be shared with a renderer for drawing text elements.  If a renderer is not provided,
*     This TextLayer will create a {@link CharacterRenderer}.</li>
* </ul>
* From TextLink:
* <ul>
*   <li>mouseOverColor - Color - IGNORED FOR TEXTBUTTON</li>
*   <li>mouseOverBackgroundColor - Color - IGNORED FOR TEXTBUTTON</li>
*   <li>onClick - function - An optional function to call when the link is clicked.</li>
*   <li>href - string - The location to navigate to when the link is clicked.</li>
*   <li>newWindow - boolean - Whether to open the new location in a new window or not.</li>
* </ul>
* For TextButton:
* <ul>
*   <li>highlightButtonColor - Color - The color to draw the button border and to highlight the button with when the mouse is over.</li>
*   <li>highlightTextColor - Color - The color to draw the button text.</li>
* </ul>
*/
function TextButton(props) {
  props = props || {};
  TextLink.call(this, props);

  this._buttonColor = props.buttonColor || this.getColor();
  this._textColor = props.textColor || this.getColor();

  this._highlightButtonColor = props.highlightButtonColor || this.getColor();
  this._highlightTextColor = props.highlightTextColor || this.getBackgroundColor();

  this._height = CELLHEIGHT * 3;
};

TextButton.prototype = new TextLink(null, null, {characterRenderer:{}});
TextButton.prototype.constructor = TextButton;

/** @private  */
TextButton.prototype._setWidth = function() {
  this._lastWidth = this._width;
  this._width = CELLWIDTH * ((this._text ? this._text.length : 1) + 2);
};

/** Render this element.
* @param {number} time The current time, in milliseconds.
* @param {number} diff The difference between the previous time and the current time, in milliseconds.
* @override
*/
TextButton.prototype.render = function(time,diff) {
  if (!this.isHidden() && this.isDirty()) {
    this.drawTextButton();
  }
};

/** @private */
TextButton.prototype.drawTextButton = function() {
  var x = this.getX() * this.getScreenScaleX();
  var y = this.getY() * this.getScreenScaleY();
  var scaledCellWidth = CELLWIDTH * this.getTotalScaleX();
  var scaledCellHeight = CELLHEIGHT * this.getTotalScaleY();
  var edgeX = x + scaledCellWidth;
  var rightEdge = x + (this.getLength() * scaledCellWidth) + scaledCellWidth;
  var characterRenderer = this.getCharacterRenderer();
  var canvas = this.getCanvasContextWrapper();

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

    if (this.getText()) {
      characterRenderer.renderString(canvas, this.getText(), this.getTextX(), this.getTextY(), this._highlightTextColor, this._highlightButtonColor);
    } else {
     characterRenderer.renderSymbol(canvas, this.getSymbolName(), this.getTextX(), this.getTextY(), this._highlightTextColor, this._highlightButtonColor);
    }
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

    if (this.getText()) {
      characterRenderer.renderString(canvas, this.getText(), this.getTextX(), this.getTextY(), this._textColor, this.getBackgroundColor());
    } else {
      characterRenderer.renderSymbol(canvas, this.getSymbolName(), this.getTextX(), this.getTextY(), this._textColor, this.getBackgroundColor());
    }
  }

};

/** @private  */
TextButton.prototype.getTextX = function() {
  return this.getX() * this.getScreenScaleX() + CELLWIDTH * this.getTotalScaleX();
};

/** @private  */
TextButton.prototype.getTextY = function() {
  return this.getY() * this.getScreenScaleY() + CELLHEIGHT * this.getTotalScaleY();
};

export default TextButton;
