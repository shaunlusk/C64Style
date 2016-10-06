var C64Style = C64Style || {};

C64Style.Screen = function(targetDiv, offsetLeft, offsetTop, fpsElem, config) {
  this._targetDiv = targetDiv;
  this._config = config || {};
  this._scaleX = this._config.scaleX || 1;
  this._scaleY = this._config.scaleY || 1;
  this._cols = this._config.cols || 40;
  this._rows = this._config.rows || 25;
  this._fpsElem = fpsElem;
  this._avgTime = 0;
  this._last = 0;
  this._mouseUpHandlers = [];
  this._mouseDownHandlers = [];
  this._mouseOverHandlers = [];
  this._eventListeners = [];
  this._paused = false;
  this._unpaused = false;

  this._showFps = true;
  this._fpsMonitorArray = [];
  this._fpsMonitorIndex = 0;

  this._uiLayers = [];

  this._canvasOffsetX = offsetLeft;
  this._canvasOffsetY = offsetTop;
};

C64Style.Screen.prototype.initialize = function() {
  this._prepareDiv();
};

C64Style.Screen.prototype._prepareDiv = function() {
  this._targetDiv.style.width = this._cols * this._scaleX * C64Style.CELLWIDTH;
  this._targetDiv.style.height = this._rows * this._scaleY * C64Style.CELLHEIGHT;
  this._targetDiv.style.backgroundColor = this._config.backgroundColor || C64Style.Color.BLUE;
  this._targetDiv.style.border = this._config.border || "20px solid rgb(160, 160, 255)";
};

C64Style.Screen.prototype.createLayer = function(type) {
  var canvas = document.createElement("CANVAS");
  this._targetDiv.appendChild(canvas);
  canvas.width = this._cols * this._scaleX * C64Style.CELLWIDTH;
  canvas.height = this._rows * this._scaleY * C64Style.CELLHEIGHT;
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
  this._uiLayers.push(layer);
};

C64Style.Screen.prototype.getLayers = function() {
  return this._uiLayers;
};

C64Style.Screen.prototype.setPaused = function(boolean) {
  if (this._paused && !boolean) this._unpaused = true;
  this._paused = boolean;
  requestAnimationFrame(this.render.bind(this));
};
C64Style.Screen.prototype.getPaused = function() {return this._paused;};


C64Style.Screen.prototype.addMouseUpHandler = function(handler) {
  this._mouseUpHandlers.push(handler);
};
C64Style.Screen.prototype.addMouseDownHandler = function(handler) {
  this._mouseDownHandlers.push(handler);
};
C64Style.Screen.prototype.addMouseOverHandler = function(handler) {
  this._mouseOverHandlers.push(handler);
};
C64Style.Screen.prototype.addMouseEventHandler = function(handler, eventType) {
  switch(eventType) {
    case "mouseup":
      this._mouseUpHandlers.push(handler);
      break;
    case "mousedown":
      this._mouseDownHandlers.push(handler);
      break;
    case "mouseover":
      this._mouseOverHandlers.push(handler);
      break;
    default:
      throw new Error("Unsupported event type.");
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

  this._updateFps(diff);

  this._update(time,diff);
  this._render(time,diff);

  elapsed = Date.now() - elapsed;
  if (this._showFps && this._fpsMonitorIndex === 0)
    this._fpsElem.innerHTML += "<br />elapsed: " + elapsed;

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
  for (var i = 0; i < this._uiLayers.length; i++) {
    this._uiLayers[i].update(time,diff);
  }
};
C64Style.Screen.prototype._render = function() {
  for (var i = 0; i < this._uiLayers.length; i++) {
    this._uiLayers[i].render();
  }
};

C64Style.Screen.prototype.handleMouseEvent = function(e) {
  if (this._paused) return false;
  var element = null;
  var x = this.getOffsetX(e);
  var y = this.getOffsetY(e);
  if ((element = this._uiLayer.handleMouseEvent(e,x,y)) !== null) {
    this.notify_mouseEventHandlers(e,element);
  }
  if (e.endEventPropagation) return;
  if ((element = this._foregroundLayer.handleMouseEvent(e,x,y)) !== null) {
    this.notify_mouseEventHandlers(e,element);
  }
  if (e.endEventPropagation) return;
  this.notify_mouseEventHandlers(e,null);
  return true;
};

C64Style.Screen.prototype.notify_mouseEventHandlers = function(e,element) {
  var handlerList;
  switch(e.type) {
    case "mouseup":
      handlerList = this._mouseUpHandlers;
      break;
    case "mousedown":
      handlerList = this._mouseDownHandlers;
      break;
    case "mouseover":
      handlerList = this._mouseOverHandlers;
      break;
    default:
      break;
  }
  for (var i = 0; i < handlerList.length; i++) {
    handlerList[i].handleMouseEvent(e,element);
  }
};

C64Style.Screen.prototype.getOffsetX = function(e) {
  return (e.pageX - this._canvasOffsetX);
};
C64Style.Screen.prototype.getOffsetY = function(e) {
  return (e.pageY - this._canvasOffsetY);
};

C64Style.Screen.prototype.addEventListener = function(listenerCallback) {
  this._eventListeners.push(listenerCallback);
};

C64Style.Screen.prototype.notifyEventListeners = function(event) {
  this._eventListeners.forEach(function(listener){
    listener.acceptEvent(event);
  });
};
