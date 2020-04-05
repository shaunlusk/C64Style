import TextLink from '../src/TextLink';
import {Color} from '../src/Color';
import {Mocks} from './Mocks';
import EventType from 'slgfx/src/EventType';

describe("TextLink", function() {
  var link, screenContext, props, calledWindowOpen;

  beforeEach(function() {
    calledWindowOpen = false;
    screenContext = Mocks.getMockScreen();
    props = {
      text : "text",
      screenContext:screenContext,
      characterRenderer : Mocks.getMockCharacterRenderer(),
      setDocumentLocation : () => {},
      windowOpen : () => {calledWindowOpen = true;}
    };
    link = new TextLink(props);
  });

  describe("#handleMouseEvent()", function() {
    it("should set active when mouse over and wasn't before", function(done) {
      var calledIt = false;
      link._setActive = function() {calledIt = true;};
      var event = {
        type: EventType.MOUSE_MOVE,
        data : {
          x : 1, y: 1,
          scaledX : 1, scaledY: 1,
          row: 0, col: 0,
          viewOriginAdjustedX: 1, viewOriginAdjustedY: 1, rawX: 1, rawY: 1,
          time: 1
        }
      };

      link.handleMouseEvent(event);

      expect(calledIt).toBeTruthy();
      done();
    });
    it("should notify when mouse over and wasn't before", function(done) {
      var eventType = null;
      link.notify = function(event) {eventType = eventType || event.type;};
      var event = {
        type: EventType.MOUSE_MOVE,
        data : {
          x : 1, y: 1,
          scaledX : 1, scaledY: 1,
          row: 0, col: 0,
          viewOriginAdjustedX: 1, viewOriginAdjustedY: 1, rawX: 1, rawY: 1,
          time: 1
        }
      };

      link.handleMouseEvent(event);

      expect(eventType).toBe(EventType.MOUSE_ENTER_ELEMENT);
      done();
    });
    it("should notify mouse move over element", function(done) {
      var eventType = null;
      link.notify = function(event) {eventType = event.type;};
      var event = {
        type: EventType.MOUSE_MOVE,
        data : {
          x : 1, y: 1,
          scaledX : 1, scaledY: 1,
          row: 0, col: 0,
          viewOriginAdjustedX: 1, viewOriginAdjustedY: 1, rawX: 1, rawY: 1,
          time: 1
        }
      };

      link.handleMouseEvent(event);

      expect(eventType).toBe(EventType.MOUSE_MOVE_OVER_ELEMENT);
      done();
    });
    it("should notify mouse down on element", function(done) {
      var eventType = null;
      link.notify = function(event) {eventType = event.type;};
      var event = {
        type: EventType.MOUSE_DOWN,
        data : {
          x : 1, y: 1,
          scaledX : 1, scaledY: 1,
          row: 0, col: 0,
          viewOriginAdjustedX: 1, viewOriginAdjustedY: 1, rawX: 1, rawY: 1,
          time: 1
        }
      };

      link.handleMouseEvent(event);

      expect(eventType).toBe(EventType.MOUSE_DOWN_ON_ELEMENT);
      done();
    });
    it("should notify mouse up on element", function(done) {
      var eventType = null;
      link.notify = function(event) {eventType = event.type;};
      var event = {
        type: EventType.MOUSE_UP,
        data : {
          x : 1, y: 1,
          scaledX : 1, scaledY: 1,
          row: 0, col: 0,
          viewOriginAdjustedX: 1, viewOriginAdjustedY: 1, rawX: 1, rawY: 1,
          time: 1
        }
      };

      link.handleMouseEvent(event);

      expect(eventType).toBe(EventType.MOUSE_UP_ON_ELEMENT);
      done();
    });
    it("should set inactive when mouse moves away", function(done) {
      var calledIt = null;
      link._setActive = function(value) {calledIt = {value:value};};
      link.collidesWithCoordinates = function() {return false;};
      link._mouseIsOver = true;
      var event = {
        type: EventType.MOUSE_UP,
        data : {
          x : 200, y: 200,
          scaledX : 200, scaledY: 200,
          row: 0, col: 0,
          viewOriginAdjustedX: 1, viewOriginAdjustedY: 1, rawX: 1, rawY: 1,
          time: 1
        }
      };

      link.handleMouseEvent(event);

      expect(calledIt.value).toBeFalsy();
      done();
    });
  });
  describe("#_setActive()", function() {
    it("should set mouseisover", function(done) {
      link._setActive(true);

      expect(link._mouseIsOver).toBeTruthy();
      done();
    });
    it("should set mouseisover", function(done) {
      link._setActive(false);

      expect(link._mouseIsOver).toBeFalsy();
      done();
    });
    it("should set dirty", function(done) {
      link._setActive(true);

      expect(link.isDirty()).toBeTruthy();
      done();
    });
    it("should active colors", function(done) {
      link._mouseOverColor = Color.YELLOW;
      link._mouseOverBackgroundColor = Color.RED;

      link._setActive(true);

      expect(link.getColor()).toBe(link._mouseOverColor);
      expect(link.getBackgroundColor()).toBe(link._mouseOverBackgroundColor);
      done();
    });
    it("should inactive colors", function(done) {
      link._baseColor = Color.ORANGE;
      link._baseBackgroundColor = Color.BLACK;

      link._setActive(false);

      expect(link.getColor()).toBe(link._baseColor);
      expect(link.getBackgroundColor()).toBe(link._baseBackgroundColor);
      done();
    });
  });
  describe("#_click()", function() {
    it("should call click handler", function(done) {
      var calledIt = false;
      link._onClick = function() {calledIt = true;};

      link._click();

      expect(calledIt).toBeTruthy();
      done();
    });
    it("should return if click handler returns false", function(done) {
      var calledIt = false;
      link._onClick = function() {calledIt = true; return false;};

      link._click();

      expect(calledWindowOpen).toBeFalsy();
      done();
    });
    it("should open new window", function(done) {
      link._href = "#";
      link._newWindow = true;

      link._click();

      expect(calledWindowOpen).toBeTruthy();
      done();
    });
    it("should set document location", function(done) {
      link._href = "#";
      link._newWindow = false;

      link._click();

      expect(calledWindowOpen).toBeFalsy();
      done();
    });
  });
});
