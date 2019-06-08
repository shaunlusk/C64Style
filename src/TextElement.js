import GfxElement from 'slgfx/src/GfxElement';
import {CELLHEIGHT,CELLWIDTH} from './Constants';
import {Color} from './Color';

/** Element that draws a text string or a text symbol to a canvas.<br />
* <b>Extends</b>: {@link GfxElement}
* @constructor
* @param {C64Screen} screenContext The target screen.
* @param {GfxLayer} parentLayer The parent layer that will draw this element.
* @param {Object} props Properties for this TextElement.  Supports:
* From {@link GfxElement}
*   <ul>
*     <li>scaleX - integer - Horizontal scale of this element.  Independent of screen scale.</li>
*     <li>scaleY - integer - Vertical scale of this element.  Independent of screen scale.</li>
*     <li>hidden - boolean - Whether to hide this element.</li>
*     <li>x - number - The X coordinate for this element.</li>
*     <li>y - number - The Y coordinate for this element.</li>
*     <li>zIndex - number - The z-index; elements with higher zIndex values will be drawn later than those with lower values (drawn on top of those with lower values).</li>
*   </ul>
* For TextElement:
* <ul>
*   <li>text - string - The text for this element. A text string or a symbol name is required for TextElement.</li>
*   <li>symbolName - string - The symbolName for this element.  A text string or a symbol name is required for TextElement.  Refer to symbol names in {@link CharacterMap}.</li>
*   <li>color - Color - The color for the text. Default: Color.LIGHTBLUE</li>
*   <li>backgroundColor - Color - The backgroundColor for the text. Default: no background color</li>
*   <li>characterRenderer - CharacterRenderer - The renderer to use to draw text.
*     This can be shared with a renderer for drawing text elements.  If a renderer is not provided,
*     This TextLayer will create a {@link CharacterRenderer}.</li>
* </ul>
*/
function TextElement(props) {
  props = props || {};
  GfxElement.call(this, props);
  this._width = 0;
  this._height = CELLHEIGHT;
  this._color = props.color || Color.LIGHTBLUE;
  this._backgroundColor = props.backgroundColor;
  this._text = props.text;
  this._symbolName = props.symbolName;
  this._characterRenderer = props.characterRenderer;

  this._setWidth();
};

TextElement.prototype = new GfxElement();
TextElement.prototype.constructor = TextElement;

/** Returns the CharacterRenderer for this element.
* @returns {CharacterRenderer}
*/
TextElement.prototype.getCharacterRenderer = function() {return this._characterRenderer;};

/**
* Return this element's width.
* @return {number}
*/
TextElement.prototype.getWidth = function() {return this._width;};

/**
* Return this element's width during the previous render cycle.
* @return {number}
*/
TextElement.prototype.getLastWidth = function() {return this._lastWidth || this._width;};

/**
* Return this element's height.
* @return {number}
*/
TextElement.prototype.getHeight = function() {return this._height;};

/**
* Return this element's text.
* @return {string}
*/
TextElement.prototype.getText = function() {return this._text;};

/**
* Set this element's text.
* @param {string} text
*/
TextElement.prototype.setText = function(text) {
  this._text = text;
  this._symbolName = null;
  this._setWidth();
  this.setDirty(true);
};

/**
* Return this element's symbolName.
* @return {string}
*/
TextElement.prototype.getSymbolName = function() {return this._symbolName;};

/**
* Set this element's symbolName.
* @param {string} symbolName
*/
TextElement.prototype.setSymbolName = function(symbolName) {
  this._symbolName = symbolName;
  this._text = null;
  this._setWidth();
  this.setDirty(true);
};

/**
* Return this element's color.
* @return {Color}
*/
TextElement.prototype.getColor = function() {return this._color;};

/**
* Set this element's color.
* @param {Color}
*/
TextElement.prototype.setColor = function(color) {
  this._color = color;
  this.setDirty(true);
};

/**
* Return this element's backgroundColor.
* @return {Color}
*/
TextElement.prototype.getBackgroundColor = function() {return this._backgroundColor;};

TextElement.prototype.setBackgroundColor = function(color) {
  this._backgroundColor = color;
  this.setDirty(true);
};

/**
* Set this element's backgroundColor.
* @param {Color}
*/
TextElement.prototype._setWidth = function() {
  this._lastWidth = this._width;
  this._width = CELLWIDTH * (this._text ? this._text.length : 1);
};

/** Clear this element.
* In case the width of the text changed, clear based on last width
* @param {number} time The current time, in milliseconds.
* @param {number} diff The difference between the previous time and the current time, in milliseconds.
* @override
*/
TextElement.prototype.clear = function(time, diff) {
  this.getCanvasContextWrapper().clearRect(
    this.getLastX() * this.getScreenScaleX() - 1,
    this.getLastY() * this.getScreenScaleY() - 1,
    this.getLastWidth() * this.getTotalScaleX() + 2,
    this.getHeight() * this.getTotalScaleY() + 2 );
  this._lastWidth = null;
};

/** Render this element.
* @param {number} time The current time, in milliseconds.
* @param {number} diff The difference between the previous time and the current time, in milliseconds.
* @override
*/
TextElement.prototype.render = function(time,diff) {
  if (!this.isHidden() && this.isDirty()) {
    if (this._text) {
      this._characterRenderer.renderString(
        this.getCanvasContextWrapper(),
        this._text,
        this.getX() * this.getScreenScaleX(),
        this.getY() * this.getScreenScaleY(),
        this._color,
        this._backgroundColor
      );
    } else {
      this._characterRenderer.renderSymbol(
        this.getCanvasContextWrapper(),
        this._symbolName,
        this.getX() * this.getScreenScaleX(),
        this.getY() * this.getScreenScaleY(),
        this._color,
        this._backgroundColor
      );
    }
  }
};

TextElement.prototype.getLength = function() {
  return this._text ? this._text.length : 1;
};

export default TextElement;
