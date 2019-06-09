import C64Screen from '../src/C64Screen';
import Screen from 'slgfx/src/Screen';
import {Mocks} from './Mocks';

describe("C64Screen", function() {
  var scrn, props, targetDiv, layerFactory, fpsElem, config, calledRequestAnimationFrame,
  windowEventListeners = {};

  var requestAnimationFrame = function() {calledRequestAnimationFrame = true;};
  beforeEach(function() {
    // blanket.js weirdness means we have to reset document link each time
    Screen.document = {
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
    layerFactory = Mocks.getMockLayerFactory();
    props = {
      "fpsElem" : fpsElem,
      layerFactory:layerFactory,
      targetDiv:targetDiv
    };
    scrn = new C64Screen(props);
  });

  describe("#xToColumn()", function() {
    it("should return column when scale is 1, view origin is 0", function(done) {
      var c = 10;
      var expected = 1;

      var result = scrn.xToColumn(c);

      expect(result).toBe(expected);
      done();
    });
    it("should return column when scale is 2, view origin is 0", function(done) {
      var c = 10;
      var expected = 0;
      scrn._scaleX = 2;

      var result = scrn.xToColumn(c);

      expect(result).toBe(expected);
      done();
    });
    it("should return column when scale is 1, view origin is not 0", function(done) {
      var c = 20;
      var expected = 0;
      scrn._viewOriginX = 15;

      var result = scrn.xToColumn(c);

      expect(result).toBe(expected);
      done();
    });
    it("should return column when scale is 2, view origin is not 0", function(done) {
      var c = 40;
      var expected = 3;
      scrn._viewOriginX = -10;
      scrn._scaleX = 2;

      var result = scrn.xToColumn(c);

      expect(result).toBe(expected);
      done();
    });
  });
  describe("#yToRow()", function() {
    it("should return row when scale is 1, view origin is 0", function(done) {
      var c = 10;
      var expected = 1;

      var result = scrn.yToRow(c);

      expect(result).toBe(expected);
      done();
    });
    it("should return column when scale is 2, view origin is 0", function(done) {
      var c = 10;
      var expected = 0;
      scrn._scaleY = 2;

      var result = scrn.yToRow(c);

      expect(result).toBe(expected);
      done();
    });
    it("should return column when scale is 1, view origin is not 0", function(done) {
      var c = 20;
      var expected = 0;
      scrn._viewOriginY = 15;

      var result = scrn.yToRow(c);

      expect(result).toBe(expected);
      done();
    });
    it("should return column when scale is 2, view origin is not 0", function(done) {
      var c = 40;
      var expected = 3;
      scrn._viewOriginY = -10;
      scrn._scaleY = 2;

      var result = scrn.yToRow(c);

      expect(result).toBe(expected);
      done();
    });
  });
  describe("#_xToColumnFromMouseEvent()", function() {
    it("should return correct x value", function(done) {
      var c = 20;
      var expected = 2;

      var result = scrn._xToColumnFromMouseEvent(c);

      expect(result).toBe(expected);
      done();
    });
  });
  describe("#_yToColumnFromMouseEvent()", function() {
    it("should return correct y value", function(done) {
      var c = 20;
      var expected = 2;

      var result = scrn._yToRowFromMouseEvent(c);

      expect(result).toBe(expected);
      done();
    });
  });
  describe("#_getCoordinateDataForMouseEvent", function() {
    it("should set row and col", function(done) {
      var x = 10;
      var y = 33;
      var savedFn = Screen.prototype._getCoordinateDataForMouseEvent;
      Screen.prototype._getCoordinateDataForMouseEvent = function() {
        return {
          x: x,
          y: y
        };
      };
      var expected = {
        row : 4,
        col : 1
      };

      var result = scrn._getCoordinateDataForMouseEvent(x, y);

      Screen.prototype._getCoordinateDataForMouseEvent = savedFn;
      expect(result.row).toBe(expected.row);
      expect(result.col).toBe(expected.col);
      done();
    });
  });
});
