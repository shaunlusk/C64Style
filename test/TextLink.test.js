describe("TextLink", function() {
  var link, screenContext, parentLayer, props;

  beforeEach(function() {
    screenContext = C64Style.Mocks.getMockScreen();
    parentLayer = {
      getCanvasContext : function() {
        return {};
      }
    };
    props = {
      text : "text",
      characterRenderer : C64Style.Mocks.getMockCharacterRenderer()
    };
    link = new C64Style.TextLink(screenContext, parentLayer, props);
  });

  describe("#handleMouseEvent()", function() {
    it("should set active when mouse over and wasn't before", function(done) {
      var calledIt = false;
      link._setActive = function() {calledIt = true;};
      var event = {
        type: C64Style.EventType.MOUSE_MOVE,
        data : {
          x : 1, y: 1,
          scaledX : 1, scaledY: 1,
          row: 0, col: 0,
          time: 1
        }
      };

      link.handleMouseEvent(event);

      assert(calledIt === true, "should have called setActive");
      done();
    });
    it("should notify when mouse over and wasn't before", function(done) {
      var eventType = null;
      link.notify = function(event) {eventType = eventType || event.type;};
      var event = {
        type: C64Style.EventType.MOUSE_MOVE,
        data : {
          x : 1, y: 1,
          scaledX : 1, scaledY: 1,
          row: 0, col: 0,
          time: 1
        }
      };

      link.handleMouseEvent(event);

      assert(eventType === C64Style.EventType.MOUSE_ENTER_ELEMENT, "should have called notify");
      done();
    });
    it("should notify mouse move over element", function(done) {
      var eventType = null;
      link.notify = function(event) {eventType = event.type;};
      var event = {
        type: C64Style.EventType.MOUSE_MOVE,
        data : {
          x : 1, y: 1,
          scaledX : 1, scaledY: 1,
          row: 0, col: 0,
          time: 1
        }
      };

      link.handleMouseEvent(event);

      assert(eventType === C64Style.EventType.MOUSE_MOVE_OVER_ELEMENT, "should have called notify");
      done();
    });
    it("should notify mouse down on element", function(done) {
      var eventType = null;
      link.notify = function(event) {eventType = event.type;};
      var event = {
        type: C64Style.EventType.MOUSE_DOWN,
        data : {
          x : 1, y: 1,
          scaledX : 1, scaledY: 1,
          row: 0, col: 0,
          time: 1
        }
      };

      link.handleMouseEvent(event);

      assert(eventType === C64Style.EventType.MOUSE_DOWN_ON_ELEMENT, "should have called notify");
      done();
    });
    it("should notify mouse up on element", function(done) {
      var eventType = null;
      link.notify = function(event) {eventType = event.type;};
      var event = {
        type: C64Style.EventType.MOUSE_UP,
        data : {
          x : 1, y: 1,
          scaledX : 1, scaledY: 1,
          row: 0, col: 0,
          time: 1
        }
      };

      link.handleMouseEvent(event);

      assert(eventType === C64Style.EventType.MOUSE_UP_ON_ELEMENT, "should have called notify");
      done();
    });
    it("should set inactive when mouse moves away", function(done) {
      var calledIt = null;
      link._setActive = function(value) {calledIt = {value:value};};
      link.collidesWithCoordinates = function() {return false;};
      link._mouseIsOver = true;
      var event = {
        type: C64Style.EventType.MOUSE_UP,
        data : {
          x : 200, y: 200,
          scaledX : 200, scaledY: 200,
          row: 0, col: 0,
          time: 1
        }
      };

      link.handleMouseEvent(event);

      assert(calledIt.value === false, "should have called setActive");
      done();
    });
  });
  describe("#_setActive()", function() {
    it("should set mouseisover", function(done) {
      link._setActive(true);

      assert(link._mouseIsOver === true, "should have set mouseisover");
      done();
    });
    it("should set mouseisover", function(done) {
      link._setActive(false);

      assert(link._mouseIsOver === false, "should have set mouseisover");
      done();
    });
    it("should set dirty", function(done) {
      link._setActive(true);

      assert(link.isDirty() === true, "should have set dirty");
      done();
    });
    it("should active colors", function(done) {
      link._mouseOverColor = C64Style.Color.YELLOW;
      link._mouseOverBackgroundColor = C64Style.Color.RED;

      link._setActive(true);

      assert(link.getColor() === link._mouseOverColor, "should have set color");
      assert(link.getBackgroundColor() === link._mouseOverBackgroundColor, "should have set backgroundColor");
      done();
    });
    it("should inactive colors", function(done) {
      link._baseColor = C64Style.Color.ORANGE;
      link._baseBackgroundColor = C64Style.Color.BLACK;

      link._setActive(false);

      assert(link.getColor() === link._baseColor, "should have set color");
      assert(link.getBackgroundColor() === link._baseBackgroundColor, "should have set backgroundColor");
      done();
    });
  });
  describe("#_click()", function() {
    var savedFn, calledWindowOpen;
    before(function() {
      savedFn = window.open;
      window.open = function() {calledWindowOpen = true;};
    });
    after(function() {
      window.open = savedFn;
    });
    beforeEach(function () {
      calledWindowOpen = false;
    });

    it("should call click handler", function(done) {
      var calledIt = false;
      link._onClick = function() {calledIt = true;};

      link._click();

      assert(calledIt === true, "should have called onClick");
      done();
    });
    it("should return if click handler returns false", function(done) {
      var calledIt = false;
      link._onClick = function() {calledIt = true; return false;};

      link._click();

      assert(calledWindowOpen === false, "should have returned");
      done();
    });
    it("should open new window", function(done) {
      link._href = "#";
      link._newWindow = true;

      link._click();

      assert(calledWindowOpen === true, "should have called window.open");
      done();
    });
    it("should set document location", function(done) {
      link._href = "#";
      link._newWindow = false;

      link._click();

      assert(calledWindowOpen === false, "should not have called window.open");
      done();
    });
  });
});
