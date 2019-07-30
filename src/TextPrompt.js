import {Color} from './Color';
import {CharacterMap} from './CharacterMap';
import Utils from 'slcommon/src/Utils';

/** Displays a text prompt on the screen and waits for user input.
* The enter key confirms the input.
* Used by {@link TextLayer}
* @constructor
* @param {Object} props Properties
* @param {TextLayer} props.parentLayer The parent layer will receive text prompts.
* @param {function} props.registerKeyHandler A fuction that can register a handler for a keydown event.
*/
function TextPrompt (props) {
  props = props || {};
  this._parentLayer = props.parentLayer;
  this._text = "";
  this._x = 0;
  this._y = 0;
  this._color = Color.LIGHTBLUE;
  this._maxLength = -1;
  this._input = [];
  this._hidden = true;
  this._flashInterval = 500;
  this._cursorOn = false;
  this._callback = null;
  this._elapsed = 0;
  this._on = false;

  props.registerKeyHandler("keydown", this.handleKeyboardEvent.bind(this));
};

/** Reset the text prompt.  This will prepare things for the next prompt.
* This is automatically called when prompt() is called.
*/
TextPrompt.prototype.reset = function() {
  this.clearPrompt();
  this._text = "";
  this._x = 0;
  this._y = 0;
  this._color = Color.LIGHTBLUE;
  this._maxLength = -1;
  this._input = [];
  this._on = false;
  this._cursorOn = false;
  this._callback = null;
  this._elapsed = 0;
};

/** Present a text prompt on the parent layer.
* @param {string} prompt The text to prompt the user with, e.g. "Enter your name:"
* @param {integer} x The column to start rendering the text prompt to.
* @param {integer} y The row to start rendering the text prompt to.
* @param {Color} color The color for the text prompt.
* @param {integer} maxLength The maximum allowed length for the input.
* @param {function} callback The function to call when the user has hit the Enter key.
*   The argument to the callback is the text the user entered.
*/
TextPrompt.prototype.prompt = function(text, x, y, color, maxLength, callback) {
  this.reset();
  this._input = [];
  this._text = text || "";
  this._x = x || 0;
  this._y = y || 0;
  this._cursorXOrigin = this._x + text.length;
  this._cursorX = this._x + text.length;
  this._color = color || Color.LIGHTBLUE;
  this._maxLength = maxLength || -1;
  this._on = true;
  this._callback = callback;
  this._cursorOn = true;
  this._elapsed = 0;
  this._parentLayer.writeText(this._text, this._x, this._y, this._color);
  this.render();
  return this;
};

/** Update this text prompt.
* @param {number} time The current time, in milliseconds.
* @param {number} diff The difference between the previous time and the current time, in milliseconds.
*/
TextPrompt.prototype.update = function(time,diff) {
  if (!this._on) return;
  this._elapsed += diff;
  if (this._elapsed >= this._flashInterval) {
    while (this._elapsed >= this._flashInterval) {
      this._elapsed -= this._flashInterval;
    }
    this._cursorOn = !this._cursorOn;
  }
};

/** Render this text prompt to the parent layer.
*/
TextPrompt.prototype.render = function() {
  if (!this._on) return;
  if (this._cursorOn) {
    this.drawCursor();
  } else {
    this.clearCursor();
  }
};

/** @private */
TextPrompt.prototype._handleEnterKey = function(event) {
  if (event.key === "Enter") {
    this.clearCursor();
    this._on = false;
    if (Utils.isFunction(this._callback)) this._callback(this.getInput());
    return true;
  }
  return false;
};

/** @private */
TextPrompt.prototype._handleBackspaceKey = function(event) {
  if (event.key === "Backspace") {
    if (this._input.length === 0) return true;
    this._input.splice(this._input.length - 1, 1);
    this._parentLayer.clearLength(this._cursorX, this._y, 1);
    this._cursorX--;
    return true;
  }
  return false;
};

/** @private */
TextPrompt.prototype._handleSpaceKey = function(event) {
  if (event.key === " ") {
    this._input.push(" ");
    this._parentLayer.drawSymbol("SPACE", this._cursorX, this._y, this._color);
    this._cursorX++;
    return true;
  }
  return false;
};

/** Handles keyboard events.
* @param {Event} event Keyboard event
*/
TextPrompt.prototype.handleKeyboardEvent = function(event) {
  if (!this._on) return;
  event.preventDefault();

  // if enter, callback with input
  if  (this._handleEnterKey(event)) return;

  // if backspace, x-1, remove last char
  if  (this._handleBackspaceKey(event)) return;

  if (this._input.length >= this._maxLength && this._maxLength > 0) {
    return;
  }

  if  (this._handleSpaceKey(event)) return;

  // if key not found in map, return;
  if (!CharacterMap[event.key]) {
    return;
  }

  this._input.push(event.key);
  this._parentLayer.writeText(event.key, this._cursorX, this._y, this._color);
  this._cursorX++;
};

/** Return the current input.
* @returns {string} The current text input.
*/
TextPrompt.prototype.getInput = function() {return this._input.join("");};

/** Clear the current input.
*/
TextPrompt.prototype.clearInput = function() {
  this._parentLayer.clearLength(this._cursorXOrigin, this._y, this._input.length + 1);
  this._input = [];
};

/** Clear the text prompt and any input on the screen.
*/
TextPrompt.prototype.clearPrompt = function() {
  this._parentLayer.clearLength(this._x, this._y, this._text.length);
  this._parentLayer.clearLength(this._cursorXOrigin, this._y, this._input.length + 1);
};

/** Clear the cursor */
TextPrompt.prototype.clearCursor = function() {
  this._parentLayer.clearLength(this._cursorX, this._y, 1);
};

/** Draw the cursor */
TextPrompt.prototype.drawCursor = function() {
  this._parentLayer.drawSymbol("BLOCK", this._cursorX, this._y, this._color);
};

export default TextPrompt;
