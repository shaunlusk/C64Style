import * as TypeMoq from 'typemoq';

import { C64Panel, IC64PanelProps } from '../src/C64Panel';

describe("C64Panel", function() {
  const documentMock: TypeMoq.IMock<Document> = TypeMoq.Mock.ofType<Document>();
  let panel: C64Panel, 
    props: IC64PanelProps, 
    targetElement, layerFactory, fpsElement, config, calledRequestAnimationFrame,
  windowEventListeners = {};

  const requestAnimationFrame = function() {calledRequestAnimationFrame = true;};
  beforeEach(function() {

    windowEventListeners = {};
    calledRequestAnimationFrame = false;
    targetElement = {
      style : {},
      eventListeners : {},
      addEventListener : function(type, callback, bool) {
        this.eventListeners[type] = callback;
      },
      appendChild : function() {},
      offsetLeft : 16,
      offsetTop : 16
    };
    fpsElement = {};

    props = {
      fpsElement: fpsElement,
      layerFactory: layerFactory,
      targetElement: targetElement,
      document: documentMock.object,
      requestAnimationFrame: requestAnimationFrame
    };
    panel = new C64Panel(props);
  });

  describe("#xToColumn()", function() {
    it("should return column when scale is 1, view origin is 0", function(done) {
      const c = 10;
      const expected = 1;

      const result = panel.xToColumn(c);

      expect(result).toBe(expected);
      done();
    });
    it("should return column when scale is 2, view origin is 0", function(done) {
      const c = 10;
      const expected = 0;
      props.scaleX = 2;
      panel = new C64Panel(props);

      const result = panel.xToColumn(c);

      expect(result).toBe(expected);
      done();
    });
    it("should return column when scale is 1, view origin is not 0", function(done) {
      const c = 20;
      const expected = 0;
      panel.setViewOriginX(15);
      panel.render();

      const result = panel.xToColumn(c);

      expect(result).toBe(expected);
      done();
    });
    it("should return column when scale is 2, view origin is not 0", function(done) {
      const c = 40;
      const expected = 3;
      props.scaleX = 2;
      panel = new C64Panel(props);
      panel.setViewOriginX(-10);
      panel.render();

      const result = panel.xToColumn(c);

      expect(result).toBe(expected);
      done();
    });
  });
  describe("#yToRow()", function() {
    it("should return row when scale is 1, view origin is 0", function(done) {
      const c = 10;
      const expected = 1;

      const result = panel.yToRow(c);

      expect(result).toBe(expected);
      done();
    });
    it("should return column when scale is 2, view origin is 0", function(done) {
      const c = 10;
      const expected = 0;
      props.scaleY = 2;
      panel = new C64Panel(props);

      const result = panel.yToRow(c);

      expect(result).toBe(expected);
      done();
    });
    it("should return column when scale is 1, view origin is not 0", function(done) {
      const c = 20;
      const expected = 0;
      panel.setViewOriginY(15);
      panel.render();

      const result = panel.yToRow(c);

      expect(result).toBe(expected);
      done();
    });
    it("should return column when scale is 2, view origin is not 0", function(done) {
      const c = 40;
      const expected = 3;
      props.scaleY = 2;
      panel = new C64Panel(props);
      panel.setViewOriginY(-10);
      panel.render();

      const result = panel.yToRow(c);

      expect(result).toBe(expected);
      done();
    });
  });
  // describe("#_xToColumnFromMouseEvent()", function() {
  //   it("should return correct x value", function(done) {
  //     const c = 20;
  //     const expected = 2;

  //     const result = panel._xToColumnFromMouseEvent(c);

  //     expect(result).toBe(expected);
  //     done();
  //   });
  // });
  // describe("#_yToColumnFromMouseEvent()", function() {
  //   it("should return correct y value", function(done) {
  //     const c = 20;
  //     const expected = 2;

  //     const result = panel._yToRowFromMouseEvent(c);

  //     expect(result).toBe(expected);
  //     done();
  //   });
  // });
  // describe("#_getCoordinateDataForMouseEvent", function() {
    // it("should set row and col", function(done) {
      // const x = 10;
      // const y = 33;
      // const savedFn = Screen.prototype._getCoordinateDataForMouseEvent;
      // Screen.prototype._getCoordinateDataForMouseEvent = function() {
      //   return {
      //     x: x,
      //     y: y
      //   };
      // };
      // const expected = {
      //   row : 4,
      //   col : 1
      // };

      // const result = panel._getCoordinateDataForMouseEvent(x, y);

      // Screen.prototype._getCoordinateDataForMouseEvent = savedFn;
      // expect(result.row).toBe(expected.row);
      // expect(result.col).toBe(expected.col);
    //   done();
    // });
  // });
});
