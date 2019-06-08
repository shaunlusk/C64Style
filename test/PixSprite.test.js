import PixSprite from '../src/PixSprite';
import {Mocks} from './Mocks';
import PixSpriteFrame from '../src/PixSpriteFrame';
import {Color} from '../src/Color';
import {PixPathTypes} from '../src/PixPathTypes';

describe("PixSprite", function() {
  var pixSprite, mockScreen, mockPixRenderer, mockCanvasContextWrapper;

  beforeEach(function() {
    mockScreen = Mocks.getMockScreen();
    mockCanvasContextWrapper = Mocks.getMockCanvasContext()
    mockPixRenderer = {
      renderPixPathArray : function() {}
    };
    pixSprite = new PixSprite({
      screenContext:mockScreen,
      canvasContextWrapper:mockCanvasContextWrapper,
      pixRenderer:mockPixRenderer
    });
  });

  describe("#_setDimensions()", function() {
    it("should set dimensions to 0 if no pixPaths", function(done) {
      expect(pixSprite.getWidth()).toBe(0);
      expect(pixSprite.getHeight()).toBe(0);
      done();
    });
    it("should calculate dimensions correctly", function(done) {
      var pixSprite = new PixSprite({
        screenContext:mockScreen,
        canvasContextWrapper:mockCanvasContextWrapper,
        pixRenderer:mockPixRenderer,
        frames:[
          new PixSpriteFrame({
            duraton:100, pixArray:[
              {type:PixPathTypes.PIXEL, x:1, y:1, color:Color.BLACK},
              {type:PixPathTypes.PIXEL, x:2, y:2, color:Color.BLACK}
            ]
          })
        ]
      });

      var exectedWidth = 3, expectedHeight = 3;
      expect(pixSprite.getWidth()).toBe(exectedWidth);
      expect(pixSprite.getHeight()).toBe(expectedHeight);
      done();
    });
    it("should calculate dimensions correctly", function(done) {
      var mockScreen = Mocks.getMockScreen({scaleX:3, scaleY:4});
      var props = {
        screenContext:mockScreen,
        canvasContextWrapper:mockCanvasContextWrapper,
        pixRenderer:mockPixRenderer,
        scaleX:5,
        scaleY:6,
        frames : [
          new PixSpriteFrame({
            duration:100,
            pixArray:[
              {type:PixPathTypes.RECTANGLE, x: 1, y: 1, width: 2, height: 3},
              {type:PixPathTypes.RECTANGLE, x: 1, y: 2, width: 3, height: 4}
            ]
          }),
          new PixSpriteFrame({
            duration:100,
            pixArray:[
              {type:PixPathTypes.RECTANGLE, x: 2, y: 2, width: 1, height: 1}
            ]
          })
        ]
      };
      var pixSprite = new PixSprite(props);

      expect(pixSprite.getWidth()).toBe(4);
      expect(pixSprite.getHeight()).toBe(6);
      done();
    });
  });
  describe("#setPaletteColor()", function() {
    it("should set color and dirty", function (done) {
      var expected = "#564321";
      pixSprite.setPaletteColor(0, expected);

      expect(pixSprite._palette[0]).toBe(expected);
      expect(pixSprite.isDirty()).toBeTruthy();
      done();
    });
  });
  describe("#setPalette()", function() {
    it("should set palette and dirty", function (done) {
      var expected = ["#564321"];
      pixSprite.setPalette(expected);

      expect(pixSprite._palette[0]).toBe(expected[0]);
      expect(pixSprite.isDirty()).toBeTruthy();
      done();
    });
  });
  describe("#renderFrame()", function() {
    it("should call renderPixPathArray", function (done) {
      var frame = {
        getPixArray : function() {
          return [
            {type:PixPathTypes.PIXEL, x:0, y:0, color:Color.BLACK},
            {type:PixPathTypes.PIXEL, x:0, y:0, color:Color.BLACK}
          ];
        }
      };
      var calledRenderPixPathArray = false;
      mockPixRenderer.renderPixPathArray = function() {
        calledRenderPixPathArray = true;
      };

      pixSprite.renderFrame(1,1,frame);

      expect(calledRenderPixPathArray).toBeTruthy();
      done();
    });
  });
});
