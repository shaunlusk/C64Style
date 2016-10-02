var c64Style = c64Style || {};

c64Style.Screen = function(offsetLeft, offsetTop, fpsElem) {
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

c64Style.Screen.prototype.addLayer = function(layer) {
  this._uiLayers.push(layer);
};

c64Style.Screen.prototype.setPaused = function(boolean) {
  if (this._paused && !boolean) this._unpaused = true;
  this._paused = boolean;
  requestAnimationFrame(this.render.bind(this));
};
c64Style.Screen.prototype.getPaused = function() {return this._paused;};


c64Style.Screen.prototype.addMouseUpHandler = function(handler) {
  this._mouseUpHandlers.push(handler);
};
c64Style.Screen.prototype.addMouseDownHandler = function(handler) {
  this._mouseDownHandlers.push(handler);
};
c64Style.Screen.prototype.addMouseOverHandler = function(handler) {
  this._mouseOverHandlers.push(handler);
};
c64Style.Screen.prototype.addMouseEventHandler = function(handler, eventType) {
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

c64Style.Screen.prototype.render = function(time) {
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

c64Style.Screen.prototype._updateFps = function(diff) {
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

c64Style.Screen.prototype._update = function (time,diff) {
  for (var i = 0; i < this._uiLayers.length; i++) {
    this._uiLayers[i].update(time,diff);
  }
};
c64Style.Screen.prototype._render = function() {
  for (var i = 0; i < this._uiLayers.length; i++) {
    this._uiLayers[i].render();
  }
};

c64Style.Screen.prototype.handleMouseEvent = function(e) {
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

c64Style.Screen.prototype.notify_mouseEventHandlers = function(e,element) {
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

c64Style.Screen.prototype.getOffsetX = function(e) {
  return (e.pageX - this._canvasOffsetX);
};
c64Style.Screen.prototype.getOffsetY = function(e) {
  return (e.pageY - this._canvasOffsetY);
};

c64Style.Screen.prototype.addEventListener = function(listenerCallback) {
  this._eventListeners.push(listenerCallback);
};

c64Style.Screen.prototype.notifyEventListeners = function(event) {
  this._eventListeners.forEach(function(listener){
    listener.acceptEvent(event);
  });
};
