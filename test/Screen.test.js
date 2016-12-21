describe("Screen", function() {
  var c64scrn, targetDiv, fpsElem, config, calledRequestAnimationFrame,
    windowEventListeners = {};

  requestAnimationFrame = function() {calledRequestAnimationFrame = true;};
  beforeEach(function() {
    // blanket.js weirdness means we have to reset document link each time
    C64Style.Screen.document = {
      addEventListener : function(event, listener) {
        if (!windowEventListeners[event]) windowEventListeners[event] = [];
        windowEventListeners[event].push(listener);
      }
    };
    windowEventListeners = {};
    calledRequestAnimationFrame = false;
    targetDiv = {
      style : {},
      eventListeners : {},
      addEventListener : function(type, callback, bool) {
        this.eventListeners[type] = callback;
      },
      appendChild : function() {},
      offsetLeft : 16,
      offsetTop : 16
    };
    fpsElem = {};
    config = {"fpsElem" : document.getElementById('info')};
    c64scrn = new C64Style.Screen(targetDiv, config);
  });

  describe("#initialize()", function() {
    it("should call _prepareDiv and _setupEventListeners", function(done) {
      var calledPrepareDiv, calledSetupEventListeners;
      c64scrn._prepareDiv = function() {calledPrepareDiv = true;};
      c64scrn._setupEventListeners = function() {calledSetupEventListeners = true;};

      c64scrn.initialize();

      assert(calledPrepareDiv === true, "should have called _prepareDiv");
      assert(calledSetupEventListeners === true, "should have called _setupEventListeners");
      done();
    });
  });
  describe("#_prepareDiv()", function() {
    it("should set div styles", function(done) {
      c64scrn._prepareDiv();

      assert(targetDiv.style.width === c64scrn._width, "should have set width");
      assert(targetDiv.style.height === c64scrn._height, "should have set heights");
      assert(targetDiv.style.backgroundColor === c64scrn._backgroundColor, "should have set backgroundColor");
      assert(targetDiv.style.border === c64scrn._borderSize + "px solid " + c64scrn._borderColor, "should have set border");
      done();
    });
  });
  describe("#_setupEventListeners()", function() {
    it("should setup event listeners", function(done) {
      c64scrn._setupEventListeners();

      assert(targetDiv.eventListeners.mouseup, "should have set mouseup handler");
      assert(targetDiv.eventListeners.mousedown, "should have set mousedown handler");
      assert(targetDiv.eventListeners.mousemove, "should have set mousemove handler");
      assert(windowEventListeners.visibilitychange !== undefined, "should have set visibilitychange handler");
      done();
    });
  });
  describe("#handleVisibilityChange()", function() {
    it("should unpause", function(done) {
      document.hidden = false;
      c64scrn.handleVisibilityChange();

      assert(c64scrn.isPaused() === false, "should have unpaused");
      done();
    });
    it("should not unpause if explicitly paused", function(done) {
      document.hidden = false;
      c64scrn.setPaused(true);
      c64scrn.handleVisibilityChange();

      assert(c64scrn._unpaused === false, "should not have unpaused");
      done();
    });
  });
  describe("#addEventListener()", function() {
    it("should add event listener to document", function(done) {
      c64scrn.addEventListener("dummyEvent", function() {});

      assert(windowEventListeners.dummyEvent !== undefined, "should have added dummy event");
      done();
    });
  });
  describe("#setBackgroundColor()", function() {
    it("should set background color", function(done) {
      var color = C64Style.Color.YELLOW;

      c64scrn.setBackgroundColor(color);

      assert(c64scrn.getBackgroundColor() === color, "should have set background color");
      assert(targetDiv.style.backgroundColor === color, "should have set background color on target div");
      done();
    });
  });
  describe("#setBorderColor()", function() {
    it("should set border color", function(done) {
      var color = C64Style.Color.LIGHTGREEN;

      c64scrn.setBorderColor(color);

      assert(c64scrn.getBorderColor() === color, "should have set border color");
      assert(targetDiv.style.border === c64scrn._borderSize + "px solid " + color, "should have set border color on target div");
      done();
    });
  });
  describe("#setBorderSize()", function() {
    it("should set border size", function(done) {
      var amount = 50;

      c64scrn.setBorderSize(amount);

      assert(c64scrn.getBorderSize() === amount, "should have set border size");
      assert(targetDiv.style.border === amount + "px solid " + c64scrn._borderColor, "should have set border size on target div");
      done();
    });
  });
  describe("#createLayer()", function() {
    it("should add text layer", function(done) {
      c64scrn.createLayer("TextLayer");

      assert(c64scrn.getLayers()[0] instanceof C64Style.TextLayer, "should have added text layer");
      done();
    });
    it("should add text layer", function(done) {
      c64scrn.createLayer("GfxLayer");

      assert(c64scrn.getLayers()[0] instanceof C64Style.GfxLayer, "should have added gfx layer");
      done();
    });
    it("should throw error on Unknown type", function(done) {
      var result = throwsError(c64scrn.createLayer.bind(c64scrn,"BogusLayer"));

      assert(result === true, "should have thrown error");
      done();
    });
  });
  describe("#setPaused()", function() {
    it("should pause", function(done) {
      var eventType = null;
      c64scrn.notify = function(event) {eventType = event.type;};
      c64scrn.setPaused(true);

      assert(c64scrn.isPaused() === true, "should have set paused");
      assert(c64scrn._unpaused === false, "should not have set unpaused true");
      assert(eventType === C64Style.EventType.SCREEN_PAUSED, "should have notified of pause event");
      assert(calledRequestAnimationFrame === false, "should not have called requestAnimationFrame");
      done();
    });
    it("should unpause", function(done) {
      var eventType = null;
      c64scrn.notify = function(event) {eventType = event.type;};
      c64scrn.setPaused(true);
      c64scrn.setPaused(false);

      assert(c64scrn.isPaused() === false, "should have set paused false");
      assert(c64scrn._unpaused === true, "should have set unpaused true");
      assert(eventType === C64Style.EventType.SCREEN_RESUMED, "should have notified of resume event");
      assert(calledRequestAnimationFrame === true, "should have called requestAnimationFrame");
      done();
    });
  });
  describe("#on()", function(){
    it("should add callback to list", function(done) {
      var eventType = "newType";
      c64scrn.on(eventType, function() {
        assert(true);
        done();
      });
      c64scrn._eventListeners[eventType][0]();
    });
  });
  describe("#clearEventHandlers()", function(){
    it("should add callback to list", function(done) {
      var eventType = "newType";
      c64scrn.on(eventType, function() {});

      c64scrn.clearEventHandlers(eventType);

      assert(c64scrn._eventListeners[eventType].length === 0, "should have cleared handler list");
      done();
    });
    it("should throw error", function(done) {
      var eventType = "newType";

      var result = throwsError(c64scrn.clearEventHandlers.bind(c64scrn, eventType));

      assert(result === true, "should have thrown error");
      done();
    });
  });
  describe("#notify()", function() {
    it("should throw error", function(done) {
      var event = {type:"blerg"};

      var result = throwsError(c64scrn.notify.bind(c64scrn,event));

      assert(result === true, "should have thrown error");
      done();
    });
    it("should notify listeners", function(done) {
      var event = {type:"blerg"};
      c64scrn.getScreenContext = function() {
        return {notify:function(){}};
      };
      var result = false;
      c64scrn.on("blerg", function() {
        result = true;
      });

      c64scrn.notify(event);
      assert(result, "should have notified listeners");
      done();
    });
  });
  describe("#render()", function() {
    it("should return if paused or tab not visible", function(done) {
      c64scrn.setPaused(true);
      var calledInternalRender = false;
      c64scrn._render = function() {calledInternalRender = true;};

      c64scrn.render(1);

      assert(calledInternalRender === false, "should have returned.");
      done();
    });
    it("should call handleMouseMoveEvent if mouse moved", function(done) {
      c64scrn._mouseMoved = true;
      var calledIt = false;
      c64scrn._handleMouseMoveEvent = function() {calledIt = true;};

      c64scrn.render(1);

      assert(calledIt === true, "should have called handleMouseMoveEvent.");
      done();
    });
    it("should notify before and after render event", function(done) {
      var eventTypes = [];
      c64scrn.notify = function(event) {eventTypes.push(event.type);};

      c64scrn.render(1);

      assert(eventTypes[0] === C64Style.EventType.BEFORE_RENDER, "should have notified of before render event.");
      assert(eventTypes[1] === C64Style.EventType.AFTER_RENDER, "should have notified of after render event.");
      done();
    });
    it("should call updateFps", function(done) {
      var calledIt = false;
      c64scrn._updateFps = function() {calledIt = true;};

      c64scrn.render(1);

      assert(calledIt === true, "should have called updateFps.");
      done();
    });
    it("should call _update", function(done) {
      var calledIt = false;
      c64scrn._update = function() {calledIt = true;};

      c64scrn.render(1);

      assert(calledIt === true, "should have called _update.");
      done();
    });
    it("should call _render", function(done) {
      var calledIt = false;
      c64scrn._render = function() {calledIt = true;};

      c64scrn.render(1);

      assert(calledIt === true, "should have called _render.");
      done();
    });
    it("should call requestAnimationFrame", function(done) {
      c64scrn.render(1);

      assert(calledRequestAnimationFrame === true, "should have called requestAnimationFrame.");
      done();
    });
    it("should unpause", function(done) {
      var time = 100;
      c64scrn.setPaused(true);
      c64scrn.setPaused(false);
      assert(c64scrn._unpaused === true, "unpaused should be true here");

      c64scrn.render(time);

      assert(c64scrn._unpaused === false, "should have reset unpaused flag.");
      done();
    });
    it("should calculate diff based on unpause", function(done) {
      var time = 100;
      var calledWithDiff = null;
      c64scrn._update = function(time,diff) {calledWithDiff = diff;};
      c64scrn.setPaused(true);
      c64scrn.setPaused(false);

      c64scrn.render(time);

      assert(calledWithDiff === 1, "should calculated diff properly.");
      done();
    });
  });
  describe("#_handleMouseMoveEvent()", function() {
    it("should notify mouse move event", function(done) {
      var eventType = null;
      c64scrn.notify = function(event) {eventType = event.type;};

      c64scrn._handleMouseMoveEvent();

      assert(eventType === C64Style.EventType.MOUSE_MOVE, "should have notified of before mouse move event.");
      done();
    });
    it("should propagate event", function(done) {
      var calledIt = null;
      c64scrn.propagateMouseEventThroughLayers = function() {calledIt = true;};

      c64scrn._handleMouseMoveEvent();

      assert(calledIt === true, "should have propagated event.");
      done();
    });
    it("should reset mouseMoved", function(done) {
      c64scrn._mouseMoved = true;

      c64scrn._handleMouseMoveEvent();

      assert(c64scrn._mouseMoved === false, "should have reset mouseMoved.");
      done();
    });
  });
  describe("#_updateFps()", function() {
    it("should add fps to _fpsMonitorArray", function(done) {
      c64scrn._showFps = true;

      c64scrn._updateFps(100);

      assert(c64scrn._fpsMonitorArray.length === 1, "Should have pushed fps to _fps");
      assert(c64scrn._fpsMonitorArray[0] === 10, "Should have pushed fps to _fps");
      done();
    });
    it("should add fps to _fpsMonitorArray", function(done) {
      c64scrn._showFps = true;
      for(var i = 0; i < 30; i++) c64scrn._fpsMonitorArray.push(10);
      c64scrn._fpsMonitorIndex = 30;

      c64scrn._updateFps(100);

      assert(c64scrn._fpsMonitorArray.length === 31, "Should have pushed fps to _fps");
      done();
    });
    it("should reset _fpsMonitorIndex", function(done) {
      c64scrn._showFps = true;
      for(var i = 0; i < 29; i++) c64scrn._fpsMonitorArray.push(10);
      c64scrn._fpsMonitorIndex = 29;

      c64scrn._updateFps(100);

      assert(c64scrn._fpsMonitorIndex === 0, "Should have reset _fpsMonitorIndex");
      done();
    });
  });
  describe("#_update()", function() {
    it("should call update on each layer", function(done) {
      var calledUpdate1 = false;
      var layer1 = {
        update : function() {calledUpdate1 = true;}
      };
      var calledUpdate2 = false;
      var layer2 = {
        update : function() {calledUpdate2 = true;}
      };
      c64scrn.addLayer(layer1);
      c64scrn.addLayer(layer2);

      c64scrn._update(1,1);

      assert(calledUpdate1 === true, "should have called update on layer1");
      assert(calledUpdate2 === true, "should have called update on layer2");
      done();
    });
  });
  describe("#_render()", function() {
    it("should call update on each layer", function(done) {
      var calledRender1 = false;
      var layer1 = {
        render : function() {calledRender1 = true;}
      };
      var calledRender2 = false;
      var layer2 = {
        render : function() {calledRender2 = true;}
      };
      c64scrn.addLayer(layer1);
      c64scrn.addLayer(layer2);

      c64scrn._render(1,1);

      assert(calledRender1 === true, "should have called render on layer1");
      assert(calledRender2 === true, "should have called render on layer2");
      done();
    });
  });
  describe("#handleMouseMoveEvent()", function() {
    it("should not update _mouseMoved if paused", function(done) {
      var e = {};
      c64scrn.setPaused(true);
      c64scrn._mouseMoved = false;

      c64scrn.handleMouseMoveEvent(e);

      assert(c64scrn._mouseMoved === false, "should not have updated _mouseMoved");
      done();
    });
    it("should set mouse coords if x < 0", function(done) {
      var e = {};
      c64scrn.getXFromMouseEvent = function() {return -1;};
      c64scrn.getYFromMouseEvent = function() {return 1;};

      c64scrn.handleMouseMoveEvent(e);

      assert(c64scrn._mouseMoved === true, "should have updated _mouseMoved");
      assert(c64scrn._mouseX === -1, "should have updated mouseX");
      assert(c64scrn._mouseY === -1, "should have updated mouseY");
      assert(c64scrn._mouseRow === -1, "should have updated mouseRow");
      assert(c64scrn._mouseCol === -1, "should have updated mouseCol");
      done();
    });
    it("should set mouse coords if y < 0", function(done) {
      var e = {};
      c64scrn.getXFromMouseEvent = function() {return 1;};
      c64scrn.getYFromMouseEvent = function() {return -1;};

      c64scrn.handleMouseMoveEvent(e);

      assert(c64scrn._mouseMoved === true, "should have updated _mouseMoved");
      assert(c64scrn._mouseX === -1, "should have updated mouseX");
      assert(c64scrn._mouseY === -1, "should have updated mouseY");
      assert(c64scrn._mouseRow === -1, "should have updated mouseRow");
      assert(c64scrn._mouseCol === -1, "should have updated mouseCol");
      done();
    });
    it("should set mouse coords if x >= screenWidth", function(done) {
      var e = {};
      c64scrn.getXFromMouseEvent = function() {return c64scrn.getWidth();};
      c64scrn.getYFromMouseEvent = function() {return 1;};

      c64scrn.handleMouseMoveEvent(e);

      assert(c64scrn._mouseMoved === true, "should have updated _mouseMoved");
      assert(c64scrn._mouseX === -1, "should have updated mouseX");
      assert(c64scrn._mouseY === -1, "should have updated mouseY");
      assert(c64scrn._mouseRow === -1, "should have updated mouseRow");
      assert(c64scrn._mouseCol === -1, "should have updated mouseCol");
      done();
    });
    it("should set mouse coords if y >= screen height", function(done) {
      var e = {};
      c64scrn.getXFromMouseEvent = function() {return -1;};
      c64scrn.getYFromMouseEvent = function() {return c64scrn.getHeight();};

      c64scrn.handleMouseMoveEvent(e);

      assert(c64scrn._mouseMoved === true, "should have updated _mouseMoved");
      assert(c64scrn._mouseX === -1, "should have updated mouseX");
      assert(c64scrn._mouseY === -1, "should have updated mouseY");
      assert(c64scrn._mouseRow === -1, "should have updated mouseRow");
      assert(c64scrn._mouseCol === -1, "should have updated mouseCol");
      done();
    });
    it("should set mouse coords", function(done) {
      var e = {};
      c64scrn.getXFromMouseEvent = function() {return 5;};
      c64scrn.getYFromMouseEvent = function() {return 7;};
      c64scrn.getRowFromMouseEvent = function() {return 8;};
      c64scrn.getColFromMouseEvent = function() {return 4;};

      c64scrn.handleMouseMoveEvent(e);

      assert(c64scrn._mouseMoved === true, "should have updated _mouseMoved");
      assert(c64scrn._mouseX === 5, "should have updated mouseX");
      assert(c64scrn._mouseY === 7, "should have updated mouseY");
      assert(c64scrn._mouseRow === 8, "should have updated mouseRow");
      assert(c64scrn._mouseCol === 4, "should have updated mouseCol");
      done();
    });
  });
  describe("#handleMouseEvent()", function() {
    it("should not update _mouseMoved if paused", function(done) {
      var e = {};
      var calledPropagate = false;
      c64scrn.setPaused(true);
      c64scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};

      c64scrn.handleMouseEvent(e);

      assert(calledPropagate === false, "should not have propagated");
      done();
    });
    it("should return if not in bounds, x < 0", function(done) {
      var e = {};
      var calledPropagate = false;
      c64scrn.getXFromMouseEvent = function() {return -1;};
      c64scrn.getYFromMouseEvent = function() {return 1;};
      c64scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};

      c64scrn.handleMouseEvent(e);

      assert(calledPropagate === false, "should not have propagated");
      done();
    });
    it("should return if not in bounds, x = width", function(done) {
      var e = {};
      var calledPropagate = false;
      c64scrn.getXFromMouseEvent = function() {return c64scrn.getWidth();};
      c64scrn.getYFromMouseEvent = function() {return 1;};
      c64scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};

      c64scrn.handleMouseEvent(e);

      assert(calledPropagate === false, "should not have propagated");
      done();
    });
    it("should return if not in bounds, y < 0", function(done) {
      var e = {};
      var calledPropagate = false;
      c64scrn.getXFromMouseEvent = function() {return 1;};
      c64scrn.getYFromMouseEvent = function() {return -1;};
      c64scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};

      c64scrn.handleMouseEvent(e);

      assert(calledPropagate === false, "should not have propagated");
      done();
    });
    it("should return if not in bounds, y = height", function(done) {
      var e = {};
      var calledPropagate = false;
      c64scrn.getXFromMouseEvent = function() {return 1;};
      c64scrn.getYFromMouseEvent = function() {return c64scrn.getHeight();};
      c64scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};

      c64scrn.handleMouseEvent(e);

      assert(calledPropagate === false, "should not have propagated");
      done();
    });
    it("should notify mouseup", function(done) {
      var e = {
        type:"mouseup",
        button:1
      };
      var calledPropagate = false;
      c64scrn.getXFromMouseEvent = function() {return 1;};
      c64scrn.getYFromMouseEvent = function() {return 1;};
      c64scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};
      var eventType = null;
      c64scrn.notify = function(event) {eventType = event.type;};

      c64scrn.handleMouseEvent(e);

      assert(eventType === C64Style.EventType.MOUSE_UP, "should have notified mouseup event");
      done();
    });
    it("should notify mouseup", function(done) {
      var e = {
        type:"mousedown",
        button:1
      };
      var calledPropagate = false;
      c64scrn.getXFromMouseEvent = function() {return 1;};
      c64scrn.getYFromMouseEvent = function() {return 1;};
      c64scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};
      var eventType = null;
      c64scrn.notify = function(event) {eventType = event.type;};

      c64scrn.handleMouseEvent(e);

      assert(eventType === C64Style.EventType.MOUSE_DOWN, "should have notified mousedown event");
      done();
    });
    it("should propagate", function(done) {
      var e = {
        type:"mousedown",
        button:0
      };
      var calledPropagate = false;
      c64scrn.getXFromMouseEvent = function() {return 1;};
      c64scrn.getYFromMouseEvent = function() {return 1;};
      c64scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};

      c64scrn.handleMouseEvent(e);

      assert(calledPropagate === true, "should have propagated");
      done();
    });
    it("should return false if button 1", function(done) {
      var e = {
        type:"mousedown",
        button:1
      };
      var calledPropagate = false;
      c64scrn.getXFromMouseEvent = function() {return 1;};
      c64scrn.getYFromMouseEvent = function() {return 1;};
      c64scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};

      var result = c64scrn.handleMouseEvent(e);

      assert(result === false, "should have returned false");
      done();
    });
  });
  describe("#propagateMouseEventThroughLayers()", function() {
    it("should call handleMouseEvent on each layer", function(done) {
      var calledLayer1 = false;
      var layer1 = {
        handleMouseEvent : function() {calledLayer1 = true;}
      };
      var calledLayer2 = false;
      var layer2 = {
        handleMouseEvent : function() {calledLayer2 = true;}
      };
      c64scrn.addLayer(layer1);
      c64scrn.addLayer(layer2);

      c64scrn.propagateMouseEventThroughLayers();

      assert(calledLayer1 === true, "should have propagated to layer1");
      assert(calledLayer2 === true, "should have propagated to layer2");
      done();
    });
  });
  describe("#getXFromMouseEvent()", function() {
    it("should return y value", function(done) {
      var e = {pageX: 60};

      var result = c64scrn.getXFromMouseEvent(e);

      var expected = e.pageX - (c64scrn._targetDiv.offsetLeft + c64scrn.getBorderSize());
      assert(result === expected, "should have returned correct x value (expected: " + expected + ", actual: " + result + ")");
      done();
    });
  });
  describe("#getYFromMouseEvent()", function() {
    it("should return y value", function(done) {
      var e = {pageY: 43};

      var result = c64scrn.getYFromMouseEvent(e);

      var expected = e.pageY - (c64scrn._targetDiv.offsetTop + c64scrn.getBorderSize());
      assert(result === expected, "should have returned correct y value (expected: " + expected + ", actual: " + result + ")");
      done();
    });
  });
  describe("#getColFromMouseEvent()", function() {
    it("should return col value", function(done) {
      var scaleX = 2;
      c64scrn._scaleX = scaleX;
      var mouseEventX = 50;
      c64scrn.getXFromMouseEvent = function() {return mouseEventX;};

      var result = c64scrn.getColFromMouseEvent();

      var expected = Math.floor(mouseEventX / (C64Style.CELLWIDTH * scaleX));
      assert(result === expected, "should have returned correct col value (expected: " + expected + ", actual: " + result + ")");
      done();
    });
  });
  describe("#getRowFromMouseEvent()", function() {
    it("should return row value", function(done) {
      var scaleY = 2;
      c64scrn._scaleY = scaleY;
      var mouseEventY = 50;
      c64scrn.getYFromMouseEvent = function() {return mouseEventY;};

      var result = c64scrn.getRowFromMouseEvent();

      var expected = Math.floor(mouseEventY / (C64Style.CELLHEIGHT * scaleY));
      assert(result === expected, "should have returned correct row value (expected: " + expected + ", actual: " + result + ")");
      done();
    });
  });
});
