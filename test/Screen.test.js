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
      offsetLeft : 0,
      offsetTop : 0
    };
    fpsElem = {};
    config = {};
    c64scrn = new C64Style.Screen(targetDiv, fpsElem, config);
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
  describe("setBackgroundColor", function() {
    it("should set background color", function(done) {
      var color = C64Style.Color.YELLOW;

      c64scrn.setBackgroundColor(color);

      assert(c64scrn.getBackgroundColor() === color, "should have set background color");
      assert(targetDiv.style.backgroundColor === color, "should have set background color on target div");
      done();
    });
  });
});
