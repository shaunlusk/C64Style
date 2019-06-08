import TextElement from '../src/TextElement';
import {CELLHEIGHT,CELLWIDTH} from '../src/Constants';
import {Color} from '../src/Color';
import {Mocks} from './Mocks';

describe("TextElement", function() {
  var element, screenContext, parentLayer, props, canvasContext, characterRenderer;

  beforeEach(function() {
    screenContext = Mocks.getMockScreen();
    canvasContext = {
      clearRect : function() {
        this.calledClearRect = true;
      }
    };
    characterRenderer = Mocks.getMockCharacterRenderer();
    props = {
      text : "text",
      characterRenderer : characterRenderer,
      screenContext:screenContext,
      canvasContextWrapper:canvasContext
    };
    element = new TextElement(props);
  });

  describe("#setText()", function() {
    it("should set text", function(done) {
      var expected = "newText";

      element.setText(expected);

      expect(element.getText()).toBe(expected);
      done();
    });
    it("should nullify symbol", function(done) {
      var expected = "newText";
      element._symbolName = "SYMBOL";

      element.setText(expected);

      expect(element.getSymbolName()).toBe(null);
      done();
    });
    it("should set width", function(done) {
      var calledIt = false;
      element._setWidth = function() {calledIt = true;};

      element.setText("testText");

      expect(calledIt).toBeTruthy();
      done();
    });
    it("should set dirty", function(done) {
      element.setDirty(false);

      element.setText("testText");

      expect(element.isDirty()).toBeTruthy();
      done();
    });
  });
  describe("#setSymbolName()", function() {
    it("should set symbol name", function(done) {
      var expected = "newText";

      element.setSymbolName(expected);

      expect(element.getSymbolName()).toBe(expected);
      done();
    });
    it("should nullify text", function(done) {
      var expected = "newText";

      element.setSymbolName(expected);

      expect(element.getText()).toBe(null);
      done();
    });
    it("should set width", function(done) {
      var calledIt = false;
      element._setWidth = function() {calledIt = true;};

      element.setSymbolName("testText");

      expect(calledIt).toBeTruthy();
      done();
    });
    it("should set dirty", function(done) {
      element.setDirty(false);

      element.setSymbolName("testText");

      expect(element.isDirty()).toBeTruthy();
      done();
    });
  });
  describe("#setColor()", function() {
    it("should set color", function(done) {
      var expected = Color.WHITE;

      element.setColor(expected);

      expect(element.getColor()).toBe(expected);
      done();
    });
    it("should set dirty", function(done) {
      element.setDirty(false);

      element.setColor(Color.WHITE);

      expect(element.isDirty()).toBeTruthy();
      done();
    });
  });
  describe("#setBackgroundColor()", function() {
    it("should set backgroundColor", function(done) {
      var expected = Color.WHITE;

      element.setBackgroundColor(expected);

      expect(element.getBackgroundColor()).toBe(expected);
      done();
    });
    it("should set dirty", function(done) {
      element.setDirty(false);

      element.setBackgroundColor(Color.WHITE);

      expect(element.isDirty()).toBeTruthy();
      done();
    });
  });
  describe("#setWidth()", function() {
    it("should set width for text", function(done) {
      var newText = "new text";
      element._text = newText;

      element._setWidth();

      expect(element._lastWidth).toBe(props.text.length * CELLWIDTH);
      expect(element._width).toBe(newText.length * CELLWIDTH);
      done();
    });
    it("should set width for symbol", function(done) {
      element._text = null;
      element._symbolName = "SYMBOL";

      element._setWidth();

      expect(element._lastWidth).toBe(props.text.length * CELLWIDTH);
      expect(element._width).toBe(CELLWIDTH);
      done();
    });
  });
  describe("#clear()", function() {
    it("should clear canvas", function(done) {
      element.clear(1,1);

      expect(canvasContext.calledClearRect).toBeTruthy();
      done();
    });
    it("should clear lastWidth", function(done) {
      element.clear(1,1);

      expect(element._lastWidth).toBe(null,"should have cleared lastWidth");
      done();
    });
  });
  describe("#render()", function() {
    it("should return if hidden", function(done) {
      element.setHidden(true);

      element.render(1,1);

      expect("calledRenderString" in characterRenderer).toBeFalsy();
      expect("calledRenderSymbol" in characterRenderer).toBeFalsy();
      done();
    });
    it("should return if not dirty", function(done) {
      element.setDirty(false);

      element.render(1,1);

      expect("calledRenderString" in characterRenderer).toBeFalsy();
      expect("calledRenderSymbol" in characterRenderer).toBeFalsy();
      done();
    });
    it("should render text", function(done) {
      element.render(1,1);

      expect("calledRenderString" in characterRenderer).toBeTruthy();
      expect("calledRenderSymbol" in characterRenderer).toBeFalsy();
      done();
    });
    it("should render symbol", function(done) {
      element.setSymbolName("SYMBOL");
      element.render(1,1);

      expect("calledRenderString" in characterRenderer).toBeFalsy();
      expect("calledRenderSymbol" in characterRenderer).toBeTruthy();
      done();
    });
  });
});

