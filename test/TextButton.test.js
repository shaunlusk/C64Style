import TextButton from '../src/TextButton';
import {CELLHEIGHT,CELLWIDTH} from '../src/Constants';
import {Mocks} from './Mocks';

describe("TextButton", function() {
  var button, screenContext, canvasContextWrapper, props;
  beforeEach(function() {
    screenContext = Mocks.getMockScreen();
    canvasContextWrapper = Mocks.getMockCanvasContext();
    props = {
      screenContext:screenContext,
      text : "text",
      characterRenderer : Mocks.getMockCharacterRenderer()
    };
    button = new TextButton(props);
  });

  describe("#_setWidth()", function() {
    it("should set lastWidth and width", function(done) {
      button._text = "test text";

      button._setWidth();

      var expected = (button._text.length + 2) * CELLWIDTH;
      expect(button.getWidth()).toBe(expected);
      expected = (props.text.length + 2) * CELLWIDTH;
      expect(button.getLastWidth()).toBe(expected);
      done();
    });
    it("should set lastWidth and for symbol", function(done) {
      button._text = null;

      button._setWidth();

      var expected = 3 * CELLWIDTH;
      expect(button.getWidth()).toBe(expected);
      expected = (props.text.length + 2) * CELLWIDTH;
      expect(button.getLastWidth()).toBe(expected);
      done();
    });
  });
  describe("#render()", function() {
    it("should return if hidden", function(done) {
      var calledIt = false;
      button.drawTextButton = function() {calledIt = true;};
      button.setHidden(true);

      button.render(canvasContextWrapper, 1,1);

      expect(calledIt).toBeFalsy();
      done();
    });
    it("should return if not dirty", function(done) {
      var calledIt = false;
      button.drawTextButton = function() {calledIt = true;};
      button.setDirty(false);

      button.render(canvasContextWrapper, 1,1);

      expect(calledIt).toBeFalsy();
      done();
    });
    it("should call drawTextButton", function(done) {
      var calledIt = false;
      button.drawTextButton = function() {calledIt = true;};

      button.render(canvasContextWrapper, 1,1);

      expect(calledIt).toBeTruthy();
      done();
    });
  });
  describe("#drawTextButton()", function() {
    it("should draw when mouse is over", function(done) {
      button._mouseIsOver = true;

      button.drawTextButton();

      expect(button._characterRenderer.calledRenderSymbol !== undefined && button._characterRenderer.calledRenderSymbol !== null).toBeTruthy();
      done();
    });
    it("should draw", function(done) {
      button.drawTextButton();

      expect(button._characterRenderer.calledRenderSymbol !== undefined && button._characterRenderer.calledRenderSymbol !== null).toBeTruthy();
      done();
    });
  });
});
