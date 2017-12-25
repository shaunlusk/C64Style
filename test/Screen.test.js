describe("C64Screen", function() {
  var scrn, targetDiv, layerFactory, fpsElem, config, calledRequestAnimationFrame,
  windowEventListeners = {};

  requestAnimationFrame = function() {calledRequestAnimationFrame = true;};
  beforeEach(function() {
    // blanket.js weirdness means we have to reset document link each time
    SL.Screen.document = {
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
    layerFactory = SL.Mocks.getMockLayerFactory();
    config = {"fpsElem" : fpsElem};
    scrn = new C64Style.C64Screen(targetDiv, layerFactory, config);
  });

  describe("constructor", function() {
    it("should create C64Screen", function(done) {
      assert(scrn instanceof C64Style.C64Screen, "should have create C64Screen");
      done();
    });
  });

  describe("#xToColumn()", function() {
    it("should return column when scale is 1, view origin is 0", function(done) {
      var c = 10;
      var expected = 1;

      var result = scrn.xToColumn(c);

      assert(result === expected, "expected " + expected + ", actual " + result);
      done();
    });
    it("should return column when scale is 2, view origin is 0", function(done) {
      var c = 10;
      var expected = 0;
      scrn._scaleX = 2;

      var result = scrn.xToColumn(c);

      assert(result === expected, "expected " + expected + ", actual " + result);
      done();
    });
    it("should return column when scale is 1, view origin is not 0", function(done) {
      var c = 20;
      var expected = 0;
      scrn._viewOriginX = 15;

      var result = scrn.xToColumn(c);

      assert(result === expected, "expected " + expected + ", actual " + result);
      done();
    });
    it("should return column when scale is 2, view origin is not 0", function(done) {
      var c = 40;
      var expected = 3;
      scrn._viewOriginX = -10;
      scrn._scaleX = 2;

      var result = scrn.xToColumn(c);

      assert(result === expected, "expected " + expected + ", actual " + result);
      done();
    });
  });
  describe("#yToRow()", function() {
    it("should return row when scale is 1, view origin is 0", function(done) {
      var c = 10;
      var expected = 1;

      var result = scrn.yToRow(c);

      assert(result === expected, "expected " + expected + ", actual " + result);
      done();
    });
    it("should return column when scale is 2, view origin is 0", function(done) {
      var c = 10;
      var expected = 0;
      scrn._scaleY = 2;

      var result = scrn.yToRow(c);

      assert(result === expected, "expected " + expected + ", actual " + result);
      done();
    });
    it("should return column when scale is 1, view origin is not 0", function(done) {
      var c = 20;
      var expected = 0;
      scrn._viewOriginY = 15;

      var result = scrn.yToRow(c);

      assert(result === expected, "expected " + expected + ", actual " + result);
      done();
    });
    it("should return column when scale is 2, view origin is not 0", function(done) {
      var c = 40;
      var expected = 3;
      scrn._viewOriginY = -10;
      scrn._scaleY = 2;

      var result = scrn.yToRow(c);

      assert(result === expected, "expected " + expected + ", actual " + result);
      done();
    });
  });
  describe("#_xToColumnFromMouseEvent()", function() {
    it("should return correct x value", function(done) {
      var c = 20;
      var expected = 2;

      var result = scrn._xToColumnFromMouseEvent(c);

      assert(result === expected, "expected " + expected + ", actual " + result);
      done();
    });
  });
  describe("#_yToColumnFromMouseEvent()", function() {
    it("should return correct y value", function(done) {
      var c = 20;
      var expected = 2;

      var result = scrn._yToRowFromMouseEvent(c);

      assert(result === expected, "expected " + expected + ", actual " + result);
      done();
    });
  });
  describe("#_handleMouseMoveEvent()", function() {
    it("should notify mouse move event", function(done) {
      var eventType = null;
      scrn.notify = function(event) {eventType = event.type;};

      scrn._handleMouseMoveEvent();

      assert(eventType === SL.EventType.MOUSE_MOVE, "should have notified of before mouse move event.");
      done();
    });
    it("should propagate event", function(done) {
      var calledIt = null;
      scrn.propagateMouseEventThroughLayers = function() {calledIt = true;};

      scrn._handleMouseMoveEvent();

      assert(calledIt === true, "should have propagated event.");
      done();
    });
    it("should reset mouseMoved", function(done) {
      scrn._mouseMoved = true;

      scrn._handleMouseMoveEvent();

      assert(scrn._mouseMoved === false, "should have reset mouseMoved.");
      done();
    });
    it("should return proper coordinate data", function(done) {
      var x = 64;
      var y = 73;
      var result;
      scrn._borderSize = 1;
      scrn._mouseX = x - (targetDiv.offsetLeft + scrn._borderSize);// 64 - 17 = 47
      scrn._mouseY = y - (targetDiv.offsetTop + scrn._borderSize); // 73 - 17 = 56
      scrn.notify = function(e) {result = e;};
      scrn._scaleX = 2;
      scrn._scaleY = 3;
      scrn._viewOriginX = 15;
      scrn._viewOriginY = 13;
      var expected = {
        x : 23 - scrn._viewOriginX,  // 23 - 15 = 8
        y : 18 - scrn._viewOriginY, // 18 - 13 = 5
        unscaledX : Math.floor(47 / scrn._scaleX),  // 47 * 2 = 23
        unscaledY : Math.floor(56 / scrn._scaleY), // 56 / 3 = 18
        rawX : scrn._mouseX,
        rawY : scrn._mouseY,
        row : 0,
        col : 1
      };

      scrn._handleMouseMoveEvent(1);

      assert(result.data.x === expected.x, "x : expected " + expected.x + ", actual " + result.data.x);
      assert(result.data.y === expected.y, "y : expected " + expected.y + ", actual " + result.data.y);
      assert(result.data.unscaledX === expected.unscaledX, "unscaledX : expected " + expected.unscaledX + ", actual " + result.data.unscaledX);
      assert(result.data.unscaledY === expected.unscaledY, "unscaledY : expected " + expected.unscaledY + ", actual " + result.data.unscaledY);
      assert(result.data.rawX === expected.rawX, "rawX : expected " + expected.rawX + ", actual " + result.data.rawX);
      assert(result.data.rawY === expected.rawY, "rawY : expected " + expected.rawY + ", actual " + result.data.rawY);
      assert(result.data.row === expected.row, "row expected " + expected.row + ", actual " + result.data.row);
      assert(result.data.col === expected.col, "col expected " + expected.col + ", actual " + result.data.col);
      done();
    });
  });
  describe("#handleMouseEvent()", function() {
    it("should not propagate if paused", function(done) {
      var e = {};
      var calledPropagate = false;
      scrn.setPaused(true);
      scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};

      scrn.handleMouseEvent(e);

      assert(calledPropagate === false, "should not have propagated");
      done();
    });
    it("should return if not in bounds, x < 0", function(done) {
      var e = {};
      var calledPropagate = false;
      scrn.getXFromMouseEvent = function() {return -1;};
      scrn.getYFromMouseEvent = function() {return 1;};
      scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};

      scrn.handleMouseEvent(e);

      assert(calledPropagate === false, "should not have propagated");
      done();
    });
    it("should return if not in bounds, x = width", function(done) {
      var e = {};
      var calledPropagate = false;
      scrn.getXFromMouseEvent = function() {return scrn.getWidth();};
      scrn.getYFromMouseEvent = function() {return 1;};
      scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};

      scrn.handleMouseEvent(e);

      assert(calledPropagate === false, "should not have propagated");
      done();
    });
    it("should return if not in bounds, y < 0", function(done) {
      var e = {};
      var calledPropagate = false;
      scrn.getXFromMouseEvent = function() {return 1;};
      scrn.getYFromMouseEvent = function() {return -1;};
      scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};

      scrn.handleMouseEvent(e);

      assert(calledPropagate === false, "should not have propagated");
      done();
    });
    it("should return if not in bounds, y = height", function(done) {
      var e = {};
      var calledPropagate = false;
      scrn.getXFromMouseEvent = function() {return 1;};
      scrn.getYFromMouseEvent = function() {return scrn.getHeight();};
      scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};

      scrn.handleMouseEvent(e);

      assert(calledPropagate === false, "should not have propagated");
      done();
    });
    it("should notify mouseup", function(done) {
      var e = {
        type:"mouseup",
        button:1
      };
      var calledPropagate = false;
      scrn.getXFromMouseEvent = function() {return 1;};
      scrn.getYFromMouseEvent = function() {return 1;};
      scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};
      var eventType = null;
      scrn.notify = function(event) {eventType = event.type;};

      scrn.handleMouseEvent(e);

      assert(eventType === SL.EventType.MOUSE_UP, "should have notified mouseup event");
      done();
    });
    it("should notify mousedown", function(done) {
      var e = {
        type:"mousedown",
        button:1
      };
      var calledPropagate = false;
      scrn.getXFromMouseEvent = function() {return 1;};
      scrn.getYFromMouseEvent = function() {return 1;};
      scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};
      var eventType = null;
      scrn.notify = function(event) {eventType = event.type;};

      scrn.handleMouseEvent(e);

      assert(eventType === SL.EventType.MOUSE_DOWN, "should have notified mousedown event");
      done();
    });
    it("should propagate", function(done) {
      var e = {
        type:"mousedown",
        button:0
      };
      var calledPropagate = false;
      scrn.getXFromMouseEvent = function() {return 1;};
      scrn.getYFromMouseEvent = function() {return 1;};
      scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};

      scrn.handleMouseEvent(e);

      assert(calledPropagate === true, "should have propagated");
      done();
    });
    it("should return false if button 1", function(done) {
      var e = {
        type:"mousedown",
        button:1
      };
      var calledPropagate = false;
      scrn.getXFromMouseEvent = function() {return 1;};
      scrn.getYFromMouseEvent = function() {return 1;};
      scrn.propagateMouseEventThroughLayers = function() {calledPropagate = true;};

      var result = scrn.handleMouseEvent(e);

      assert(result === false, "should have returned false");
      done();
    });
    it("should return proper coordinate data", function(done) {
      var x = 64;
      var y = 73;
      var e = {
        type:"mousedown",
        button:1,
        pageX:x,
        pageY:y
      };
      var result;
      scrn.notify = function(e) {result = e;};
      scrn._borderSize = 1;
      scrn._scaleX = 2;
      scrn._scaleY = 3;
      scrn._viewOriginX = 15;
      scrn._viewOriginY = 13;
      var expected = {
        x : 23 - scrn._viewOriginX,  // 23 - 15 = 8
        y : 18 - scrn._viewOriginY, // 18 - 13 = 5
        unscaledX : Math.floor(47 / scrn._scaleX),  // 47 * 2 = 23
        unscaledY : Math.floor(56 / scrn._scaleY), // 56 / 3 = 18
        rawX : x - (targetDiv.offsetLeft + scrn._borderSize), // 64 - 17 = 47
        rawY : y - (targetDiv.offsetTop + scrn._borderSize), // 73 - 17 = 56
        row : 0,
        col : 1
      };

      scrn.handleMouseEvent(e);

      assert(result.data.x === expected.x, "x expected " + expected.x + ", actual " + result.data.x);
      assert(result.data.y === expected.y, "y expected " + expected.y + ", actual " + result.data.y);
      assert(result.data.unscaledX === expected.unscaledX, "unscaledX expected " + expected.unscaledX + ", actual " + result.data.unscaledX);
      assert(result.data.unscaledY === expected.unscaledY, "unscaledY expected " + expected.unscaledY + ", actual " + result.data.unscaledY);
      assert(result.data.rawX === expected.rawX, "rawX expected " + expected.rawX + ", actual " + result.data.rawX);
      assert(result.data.rawY === expected.rawY, "rawY expected " + expected.rawY + ", actual " + result.data.rawY);
      assert(result.data.row === expected.row, "row expected " + expected.row + ", actual " + result.data.row);
      assert(result.data.col === expected.col, "col expected " + expected.col + ", actual " + result.data.col);
      done();
    });
  });
});
