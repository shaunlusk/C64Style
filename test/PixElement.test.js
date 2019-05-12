import PixElement from '../src/PixElement';
import {PixPathTypes} from '../src/PixPathTypes';
import {Color} from '../src/Color';
import {Mocks} from './Mocks';

describe("PixElement", function() {
  var pixImage, mockScreen, mockCanvasContextWrapper, mockPixRenderer;

  beforeEach(function() {
    mockScreen = Mocks.getMockScreen();
    mockCanvasContextWrapper = Mocks.getMockCanvasContext();
    mockPixRenderer = {
      renderPixPathArray : function() {}
    };
    pixImage = new PixElement({
      screenContext: mockScreen,
      pixRenderer: mockPixRenderer,
      canvasContextWrapper: mockCanvasContextWrapper
    });
  });

  describe("#setDimensions()", function() {
    it("should set dimensions to 0 if no pixPaths", function(done) {
      expect(pixImage.getWidth()).toBe(0);
      expect(pixImage.getHeight()).toBe(0);
      done();
    });
    it("should calculate dimensions correctly", function(done) {
      debugger;
      var pixImage = new PixElement({
        screenContext: mockScreen,
        canvasContextWrapper: mockCanvasContextWrapper,
        pixPathArray:[
          {type:PixPathTypes.PIXEL, x:1, y:1, color:Color.BLACK},
          {type:PixPathTypes.PIXEL, x:2, y:2, color:Color.BLACK}
        ]
      });

      var exectedWidth = 3, expectedHeight = 3;
      expect(pixImage.getWidth()).toBe(exectedWidth);
      expect(pixImage.getHeight()).toBe(expectedHeight);
      done();
    });
    it("should calculate dimensions correctly", function(done) {
      var mockScreen = Mocks.getMockScreen({scaleX:3, scaleY:4});
      var props = {
        scaleX:5,
        scaleY:6,
        screenContext: mockScreen,
        canvasContextWrapper: mockCanvasContextWrapper,
        pixPathArray : [
          {type:PixPathTypes.RECTANGLE, x: 1, y: 1, width: 2, height: 3},
          {type:PixPathTypes.RECTANGLE, x: 1, y: 2, width: 3, height: 4},
          {type:PixPathTypes.RECTANGLE, x: 2, y: 2, width: 1, height: 1},
        ]
      };
      var pixImage = new PixElement(props);

      expect(pixImage.getWidth()).toBe(4);
      expect(pixImage.getHeight()).toBe(6);
      done();
    });
  });
  describe("#setPalette()", function() {
    it("should set palette", function(done) {
      pixImage.setPalette(["#1234AA", "#FFBB00"]);

      expect(pixImage.getPalette().length).toBe(2);
      done();
    });
  });
  describe("#setPalette()", function() {
    it("should set palette", function(done) {
      var expected = "#1234AA";
      pixImage.setPaletteColor(0, expected);

      expect(pixImage.getPaletteColor(0)).toBe(expected);
      done();
    });
  });
  describe("#render()", function() {
    it("should call renderPixPathArray", function(done) {
      var calledRenderPixPathArray = false;
      mockPixRenderer.renderPixPathArray = function() {
        calledRenderPixPathArray = true;
      };

      pixImage.render(1, 1);

      expect(calledRenderPixPathArray).toBeTruthy();
      done();
    });
  });
});
