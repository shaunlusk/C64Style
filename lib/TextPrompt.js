var C64Style = C64Style || {};

/** Displays a text prompt on the screen and waits for user input.
* The enter key confirms the input.
* Used by {@link C64Style.TextLayer}
* @constructor
* @param {C64Style.Screen} screenContext The target screen.
* @param {C64Style.GfxLayer} parentLayer The parent layer will receive text prompts.
* @param {Object} props Properties for this TextPrompt.  No properties supported at this time.
*/
C64Style.TextPrompt = function(screenContext, parentLayer, props) {
  props = props || {};
  this._screenContext = screenContext;
  this._parentLayer = parentLayer;
  this._prompt = "";
  this._x = 0;
  this._y = 0;
  this._color = C64Style.Color.LIGHTBLUE;
  this._maxLength = -1;
  this._input = [];
  this._hidden = true;
  this._flashInterval = 500;
  this._cursorOn = false;
  this._callback = null;
  this._elapsed = 0;
  this._on = false;
  screenContext.addEventListener("keydown", this.handleKeyboardEvent.bind(this));
};

/** Reset the text prompt.  This will prepare things for the next prompt.
* This is automativally called when prompt() is called.
*/
C64Style.TextPrompt.prototype.reset = function() {
  this.clearPrompt();
  this._prompt = "";
  this._x = 0;
  this._y = 0;
  this._color = C64Style.Color.LIGHTBLUE;
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
C64Style.TextPrompt.prototype.prompt = function(prompt, x, y, color, maxLength, callback) {
  this.reset();
  this._input = [];
  this._prompt = prompt || "";
  this._x = x || 0;
  this._y = y || 0;
  this._cursorXOrigin = this._x + prompt.length;
  this._cursorX = this._x + prompt.length;
  this._color = color || C64Style.Color.LIGHTBLUE;
  this._maxLength = maxLength || -1;
  this._on = true;
  this._callback = callback;
  this._cursorOn = true;
  this._elapsed = 0;
  this._parentLayer.writeText(this._prompt, this._x, this._y, this._color);
  this.render();
  return this;
};

/** Update this text prompt.
* @param {number} time The current time, in milliseconds.
* @param {number} diff The difference between the previous time and the current time, in milliseconds.
*/
C64Style.TextPrompt.prototype.update = function(time,diff) {
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
C64Style.TextPrompt.prototype.render = function() {
  if (!this._on) return;
  if (this._cursorOn) {
    this.drawCursor();
  } else {
    this.clearCursor();
  }
};

/** @private */
C64Style.TextPrompt.prototype._handleEnterKey = function(event) {
  if (event.key === "Enter") {
    this.clearCursor();
    this._on = false;
    if (C64Style.isFunction(this._callback)) this._callback(this.getInput());
    return true;
  }
  return false;
};

/** @private */
C64Style.TextPrompt.prototype._handleBackspaceKey = function(event) {
  if (event.key === "Backspace") {
    this._input.splice(this._input.length - 1, 1);
    this._parentLayer.clearLength(this._cursorX, this._y, 1);
    this._cursorX--;
    return true;
  }
  return false;
};

/** @private */
C64Style.TextPrompt.prototype._handleSpaceKey = function(event) {
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
C64Style.TextPrompt.prototype.handleKeyboardEvent = function(event) {
  if (!this._on) return;

  // if enter, callback with input
  if  (this._handleEnterKey(event)) return;

  // if backspace, x-1, remove last char
  if  (this._handleBackspaceKey(event)) return;

  if (this._input.length >= this._maxLength && this._maxLength > 0) {
    return;
  }

  if  (this._handleSpaceKey(event)) return;

  // if key not found in map, return;
  if (!C64Style.CharacterMap[event.key]) {
    return;
  }

  this._input.push(event.key);
  this._parentLayer.writeText(event.key, this._cursorX, this._y, this._color);
  this._cursorX++;
};

/** Return the current input.
* @returns {string} The current text input.
*/
C64Style.TextPrompt.prototype.getInput = function() {return this._input.join("");};

/** Clear the current input.
*/
C64Style.TextPrompt.prototype.clearInput = function() {
  this._parentLayer.clearLength(this._cursorXOrigin, this._y, this._input.length + 1);
  this._input = [];
};

/** Clear the text prompt and any input on the screen.
*/
C64Style.TextPrompt.prototype.clearPrompt = function() {
  this._parentLayer.clearLength(this._x, this._y, this._prompt.length);
  this._parentLayer.clearLength(this._cursorXOrigin, this._y, this._input.length + 1);
};

/** Clear the cursor */
C64Style.TextPrompt.prototype.clearCursor = function() {
  this._parentLayer.clearLength(this._cursorX, this._y, 1);
};

/** Draw the cursor */
C64Style.TextPrompt.prototype.drawCursor = function() {
  this._parentLayer.drawSymbol("BLOCK", this._cursorX, this._y, this._color);
};
