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
});
