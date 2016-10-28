var C64Style = C64Style || {};

C64Style.Screen = function(targetDiv, fpsElem, config) {
  this._targetDiv = targetDiv;
  this._config = config || {};
  this._scaleX = this._config.scaleX || 1;
  this._scaleY = this._config.scaleY || 1;
  this._cols = this._config.cols || 40;
  this._rows = this._config.rows || 25;
  this._width = this._cols * this._scaleX * C64Style.CELLWIDTH;
  this._height = this._rows * this._scaleY * C64Style.CELLHEIGHT;
  this._fpsElem = fpsElem;
  this._avgTime = 0;
  this._last = 0;
  this._mouseX = -1;
  this._mouseY = -1;
  this._mouseRow = -1;
  this._mouseCol = -1;
  this._mouseMoved = false;
  this._mouseUpHandlers = [];
  this._mouseDownHandlers = [];
  this._mouseOverHandlers = [];
  this._paused = false;
  this._unpaused = false;

  this._showFps = true;
  this._fpsMonitorArray = [];
  this._fpsMonitorIndex = 0;

  this._layers = [];

  this._borderSize = this._config.borderSize || 20;
  this._canvasOffsetX = this._targetDiv.offsetLeft + this._borderSize;
  this._canvasOffsetY = this._targetDiv.offsetLeft + this._borderSize;

  this._eventListeners = {
    "ELEMENT_MOVED" : [],
    "BEFORE_RENDER" : [],
    "AFTER_RENDER" : [],
    "ELEMENT_STARTED_MOVING" : [],
    "ELEMENT_STOPPED_MOVING" : [],
    "ELEMENT_COLLISION" : [],
    "ELEMENT_HIT_LEFT_EDGE" : [],
    "ELEMENT_HIT_RIGHT_EDGE" : [],
    "ELEMENT_HIT_TOP_EDGE" : [],
    "ELEMENT_HIT_BOTTOM_EDGE" : [],
    "SCREEN_PAUSED" : [],
    "SCREEN_RESUMED" : [],
    "MOUSE_MOVE" : [],
    "MOUSE_DOWN" : [],
    "MOUSE_UP" : []
  };

  this.frameCount = 0;
};

C64Style.Screen.prototype.initialize = function() {
  this._prepareDiv();
  this._setupEventListeners();
};

C64Style.Screen.prototype._prepareDiv = function() {
  this._targetDiv.style.width = this._width;
  this._targetDiv.style.height = this._height;
  this._targetDiv.style.backgroundColor = this._config.backgroundColor || C64Style.Color.BLUE;
  this._targetDiv.style.border = this._borderSize + "px solid " + C64Style.Color.LIGHTBLUE;
};


C64Style.Screen.prototype._setupEventListeners = function() {
  this._targetDiv.addEventListener("mouseup",this.handleMouseEvent.bind(this), false);
  this._targetDiv.addEventListener("mousedown",this.handleMouseEvent.bind(this), false);
  this._targetDiv.addEventListener("mousemove",this.handleMouseOverEvent.bind(this), false);
};

C64Style.Screen.prototype.setBackgroundColor = function(color) {
  this._targetDiv.style.backgroundColor = color;
};

C64Style.Screen.prototype.setBorderColor = function(color) {
  this._targetDiv.style.border = this._borderSize + "px solid " + color;
};

C64Style.Screen.prototype.setBorderSize = function(size) {
  this._borderSize = size;
  this._canvasOffsetX = this._targetDiv.offsetLeft + size;
  this._canvasOffsetY = this._targetDiv.offsetLeft + size;
};

C64Style.Screen.prototype.getWidth = function() {return this._width;};
C64Style.Screen.prototype.getHeight = function() {return this._height;};
C64Style.Screen.prototype.getRows = function() {return this._rows;};
C64Style.Screen.prototype.getCols = function() {return this._cols;};
C64Style.Screen.prototype.getScaleX = function() {return this._scaleX;};
C64Style.Screen.prototype.getScaleY = function() {return this._scaleY;};
C64Style.Screen.prototype.getMouseX = function() {return this._mouseX;};
C64Style.Screen.prototype.getMouseY = function() {return this._mouseY;};
C64Style.Screen.prototype.getMouseRow = function() {return this._mouseRow;};
C64Style.Screen.prototype.getMouseCol = function() {return this._mouseCol;};

C64Style.Screen.prototype.createLayer = function(type) {
  var canvas = document.createElement("CANVAS");
  this._targetDiv.appendChild(canvas);
  canvas.width = this._width;
  canvas.height = this._height;
  canvas.style.position = "absolute";

  var layer;
  switch(type) {
    case "TextLayer":
      layer = new C64Style.TextLayer(this, canvas, this._config);
      break;
    case "GfxLayer":
      layer = new C64Style.GfxLayer(this, canvas, this._config);
      break;
    default:
      throw new Error("Unrecognized Layer type:" + type);
  }

  this.addLayer(layer);
  return layer;
};

C64Style.Screen.prototype.addLayer = function(layer) {
  this._layers.push(layer);
};

C64Style.Screen.prototype.getLayers = function() {
  return this._layers;
};

C64Style.Screen.prototype.setPaused = function(boolean) {
  if (this._paused && !boolean) this._unpaused = true;
  this._paused = boolean;
  this.notify(
    new C64Style.Event(
      this._paused ? C64Style.EventType.SCREEN_PAUSED : C64Style.EventType.SCREEN_RESUMED
    )
  );
  requestAnimationFrame(this.render.bind(this));
};
C64Style.Screen.prototype.getPaused = function() {return this._paused;};

C64Style.Screen.prototype.on = function(eventType, callback) {
  if (!this._eventListeners[eventType]) {
    this._eventListeners[eventType] = [];
  }
  this._eventListeners[eventType].push(callback);
};

C64Style.Screen.prototype.clearEventHandlers = function(event) {
  if (!this._eventListeners[event]) {
    throw new Error("Unknown event type:" + event);
  }
  this._eventListeners[event] = [];
};

C64Style.Screen.prototype.notify = function(event) {
  if (!this._eventListeners[event.type]) {
    throw new Error("Unknown event type:" + event.type);
  }
  for (var i = 0; i < this._eventListeners[event.type].length; i++) {
    if (C64Style.isFunction(this._eventListeners[event.type][i])) this._eventListeners[event.type][i](event);
  }
};

C64Style.Screen.prototype.render = function(time) {
  time = time || 1;
  if (this._paused) return;
  if (this._unpaused) {
    this._unpaused = false;
    this._last = Math.floor(time) + 1;
  }
  time = Math.floor(time);
  var elapsed = Date.now();
  var diff = time - this._last;
  this._last = time;

  if (this._mouseMoved) {
    this.notify(
      new C64Style.Event(C64Style.EventType.MOUSE_MOVE,
      {
        x : this._mouseX,
        y : this._mouseY,
        row : this._mouseRow,
        col : this._mouseCol
      },
      time)
    );
    this._mouseMoved = false;
  }

  this.notify(
    new C64Style.Event(C64Style.EventType.BEFORE_RENDER, null, time)
  );

  this._updateFps(diff);

  this._update(time,diff);
  this._render(time,diff);

  this.notify(
    new C64Style.Event(C64Style.EventType.AFTER_RENDER, null, time)
  );

  elapsed = Date.now() - elapsed;
  if (this._showFps && this._fpsMonitorIndex === 0)
    this._fpsElem.innerHTML += "<br />Avg MS per frame: " + elapsed;

  requestAnimationFrame(this.render.bind(this));
};

C64Style.Screen.prototype._updateFps = function(diff) {
  if (this._showFps) {
    var fps = Math.floor(1000 / diff);
    if (this._fpsMonitorArray.length < 30){
      this._fpsMonitorArray.push(fps);
    } else {
      this._fpsMonitorArray[this._fpsMonitorIndex] = fps;
    }
    this._fpsMonitorIndex++;
    if (this._fpsMonitorIndex >= 30) this._fpsMonitorIndex = 0;

    var fpsa = 1;
    for (var i = 0; i < this._fpsMonitorArray.length; i++){
      fpsa += this._fpsMonitorArray[i] / 30;
    }
    if (this._fpsMonitorIndex === 0)
      this._fpsElem.innerHTML = "fps: " + Math.floor(fpsa);
  }
};

C64Style.Screen.prototype._update = function (time,diff) {
  for (var i = 0; i < this._layers.length; i++) {
    this._layers[i].update(time,diff);
  }
};
C64Style.Screen.prototype._render = function(time,diff) {
  for (var i = 0; i < this._layers.length; i++) {
    this._layers[i].render(time,diff);
  }
};

C64Style.Screen.prototype.handleMouseOverEvent = function(e) {
  if (this._paused) return false;
  this._mouseMoved = true;
  var x = this.getXFromMouseEvent(e);
  var y = this.getYFromMouseEvent(e);

  if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
    this._mouseX = -1;
    this._mouseY = -1;
    return false;
  }
  var row = this.getRowFromMouseEvent(e);
  var col = this.getColFromMouseEvent(e);
  this._mouseX = x;
  this._mouseY = y;
  this._mouseRow = row;
  this._mouseCol = col;
};

C64Style.Screen.prototype.handleMouseEvent = function(e) {
  if (this._paused) return false;
  var x = this.getXFromMouseEvent(e);
  var y = this.getYFromMouseEvent(e);

  if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
    return false;
  }
  var row = this.getRowFromMouseEvent(e);
  var col = this.getColFromMouseEvent(e);

  var type = e.type === "mouseup" ? C64Style.EventType.MOUSE_UP : C64Style.EventType.MOUSE_DOWN;
  this.notify(new C64Style.Event(
    type,
    {
      x : this._mouseX,
      y : this._mouseY,
      row : this._mouseRow,
      col : this._mouseCol
    })
  );
  return true;
};

C64Style.Screen.prototype.getXFromMouseEvent = function(e) {
  return (e.pageX - this._canvasOffsetX);
};
C64Style.Screen.prototype.getYFromMouseEvent = function(e) {
  return (e.pageY - this._canvasOffsetY);
};

C64Style.Screen.prototype.getColFromMouseEvent = function(e) {
  return Math.floor(this.getXFromMouseEvent(e) / (C64Style.CELLWIDTH * this._scaleX));
};
C64Style.Screen.prototype.getRowFromMouseEvent = function(e) {
  return Math.floor(this.getYFromMouseEvent(e) / (C64Style.CELLHEIGHT * this._scaleY));
};