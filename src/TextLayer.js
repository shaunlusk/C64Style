import Layer from  'slgfx/src/Layer';
import {Color} from './Color';
import {CharacterMap} from './CharacterMap';

/** Text-only layer.<br />
* Extends {@link Layer}<br />
* Generally, the use of C64Screen.createLayer("TextLayer") is preferred over creating layer by hand.
* @constructor
* @param {C64Screen} screenContext The parent screen for this layer.
* @param {CanvasContext} canvas The CanvasContext that this layer will draw to.
* @param {Object} props The properties to create this layer with. <br />
* From Layer:
* <ul>
*   <li>width - number - The width of the layer.  Should match Screen.</li>
*   <li>height - number - The height of the layer.  Should match Screen.</li>
* </ul>
* For TextLayer:
* <ul>
*   <li>characterRenderer - CharacterRenderer - The renderer to use to draw text.
*     This can be shared with a renderer for drawing text elements.  If a renderer is not provided,
*     This TextLayer will create a {@link CharacterRenderer}.</li>
*   <li>textPrompt - TextPrompt - A text prompt for this layer.  If not provided,
*     a {@link TextPrompt} will be created.</li>
* </ul>
*/
function TextLayer(props) {
  props = props || {};
  Layer.call(this, props);
  this._cx = 0;
  this._cy = 0;
  this._color = Color.LIGHTBLUE;
  this._backgroundColor = Color.BLUE;
  this._characterRenderer = props.characterRenderer;
  this._textPrompt = props.textPrompt;
  this._pendingTextStrings = [];
  this._width = props.width || 320;
  this._height = props.height || 200;
};

TextLayer.prototype = new Layer();
TextLayer.prototype.constructor = TextLayer;

/** Updates this layer
* @param {number} time The current time, in milliseconds.
* @param {number} diff The difference between the previous time and the current time, in milliseconds.
* @override
*/
TextLayer.prototype.update = function(time,diff) {
  this._textPrompt.update(time,diff);
};

/**
* Renders this layer, drawing any new text that has been added since the last render cycle.
* @override
*/
TextLayer.prototype.render = function() {
  var i, pendingString;

  this._textPrompt.render();

  // Clear pending string bounding boxes
  for (i = 0; i < this._pendingTextStrings.length; i++) {
    pendingString = this._pendingTextStrings[i];

    if (pendingString.string) {
      this.clearLength(pendingString.cellX, pendingString.cellY, pendingString.string.length);
    } else {
      this.clearLength(pendingString.cellX, pendingString.cellY);
    }
  }

  // write pending strings
  for (i = 0; i < this._pendingTextStrings.length; i++) {
    pendingString = this._pendingTextStrings[i];
    if (pendingString.string !== undefined && pendingString.string !== null) {
      this._characterRenderer.renderString(
        this._canvasContext,
        pendingString.string,
        pendingString.cellX * this._scaledCellWidth,
        pendingString.cellY * this._scaledCellHeight,
        pendingString.color,
        pendingString.backgroundColor
      );
    } else {
      this._characterRenderer.renderSymbol(
        this._canvasContext,
        pendingString.pixMapId,
        pendingString.cellX * this._scaledCellWidth,
        pendingString.cellY * this._scaledCellHeight,
        pendingString.color,
        pendingString.backgroundColor
      );
    }
  }

  this._pendingTextStrings = [];
};

/** Clears whole text cells, starting at the specified cellX and cellY, through cellX + length.
* @param {integer} cellX The column number to start clearing.
* @param {integer} cellY The row number to start clearing.
* @param {integer} length The number of columns to clear.
*/
TextLayer.prototype.clearLength = function(cellX, cellY, length) {
  this._characterRenderer.clearRect(
    this._canvasContext,
    cellX * this._scaledCellWidth,
    cellY * this._scaledCellHeight,
    length || 1
  );
};

/** Writes a text string to the layer.
* @param {string} string The string to write.
* @param {integer} cellX The column to start writing the text to.
* @param {integer} cellY The row to start writing the text to.
* @param {Color} color The color of the text.
* @param {Color} backgroundColor The background color for the text.
*/
TextLayer.prototype.writeText = function(string, cellX, cellY, color, backgroundColor) {
  this._pendingTextStrings.push({
    string:string.toString(),
    cellX:cellX,
    cellY:cellY,
    color:color,
    backgroundColor:backgroundColor
  });
};

/** Draws a single symbol to the layer.
* @param {string} pixMapId The name of the symbol to draw, e.g. "BRITISH_POUND".  Refer to {@link CharacterMap} for symbol names.
* @param {integer} cellX The column to write the symbol to.
* @param {integer} cellY The row to write the syymbol to.
* @param {Color} color The color of the symbol.
* @param {Color} backgroundColor The background color for the symbol.
*/
TextLayer.prototype.drawSymbol = function(pixMapId, cellX, cellY, color, backgroundColor) {
  this._pendingTextStrings.push({
    pixMapId:pixMapId,
    cellX:cellX,
    cellY:cellY,
    color:color,
    backgroundColor:backgroundColor
  });
};

/** Return the text prompt
* @returns {TextPrompt}
*/
TextLayer.prototype.getTextPrompt = function() {return this._textPrompt;};

/** Prompt the user for text input.
* @param {string} prompt The text prompt to provide the user, e.g. "Enter your name:".
* @param {integer} x The column to write the text prompt to.
* @param {integer} y The row to write the text prompt to.
* @param {Color} color The color for the text prompt.
* @param {integer} maxLength The maximum allowed length for the input.
* @param {function} callback The function to call when the user has hit the Enter key.
*   The argument to the callback is the text the user entered.
* @see TextPrompt
*/
TextLayer.prototype.prompt = function(prompt, x, y, color, maxLength, callback) {
  return this._textPrompt.prompt(prompt,x,y,color,maxLength,callback);
};

/** Override clearLayer in base class: clear pending strings to prevent
* rendering things the caller expects to be cleared.
*/
TextLayer.prototype.clearLayer = function() {
  Layer.prototype.clearLayer.call(this);
  this._pendingTextStrings = [];
};

export default TextLayer;
