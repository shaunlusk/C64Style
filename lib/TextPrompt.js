var C64Style = C64Style || {};

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

C64Style.TextPrompt.prototype.reset = function() {
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

C64Style.TextPrompt.prototype.prompt = function(prompt, x, y, color, maxLength, callback) {
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
C64Style.TextPrompt.prototype.render = function() {
  if (!this._on) return;
  if (this._cursorOn) {
    this.drawCursor();
  } else {
    this.clearCursor();
  }
};

C64Style.TextPrompt.prototype._handleEnterKey = function(event) {
  if (event.key === "Enter") {
    if (C64Style.isFunction(this._callback)) this._callback(this.getInput());
    this.clearCursor();
    this._on = false;
    return true;
  }
  return false;
};

C64Style.TextPrompt.prototype._handleBackspaceKey = function(event) {
  if (event.key === "Backspace") {
    this._input.splice(this._input.length - 1, 1);
    this._parentLayer.clearLength(this._cursorX, this._y, 1);
    this._cursorX--;
    return true;
  }
  return false;
};

C64Style.TextPrompt.prototype._handleSpaceKey = function(event) {
  if (event.key === " ") {
    this._input.push(" ");
    this._parentLayer.drawSymbol("SPACE", this._cursorX, this._y, this._color);
    this._cursorX++;
    return true;
  }
  return false;
};

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

C64Style.TextPrompt.prototype.getInput = function() {return this._input.join("");};

C64Style.TextPrompt.prototype.clearInput = function(c) {
  this._parentLayer.clearLength(this._cursorXOrigin, this._y, this._input.length + 1);
  this._input = [];
};

C64Style.TextPrompt.prototype.clearPrompt = function() {
  this._parentLayer.clearLength(this._x, this._y, this._prompt.length);
  this._parentLayer.clearLength(this._cursorXOrigin, this._y, this._input.length + 1);
};

C64Style.TextPrompt.prototype.clearCursor = function() {
  this._parentLayer.clearLength(this._cursorX, this._y, 1);
};

C64Style.TextPrompt.prototype.drawCursor = function() {
  this._parentLayer.drawSymbol("BLOCK", this._cursorX, this._y, this._color);
};
