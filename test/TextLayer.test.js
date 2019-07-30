import TextLayer from '../src/TextLayer';
import {Mocks} from './Mocks';
import {Color} from '../src/Color';
import CharacterRenderer from '../src/CharacterRenderer';
import TextPrompt from '../src/TextPrompt';

describe("TextLayer", function() {
  let layer, screenContext, characterRenderer, textPrompt, canvasContext, props;

  beforeEach(function() {
    screenContext = Mocks.getMockScreen();
    canvasContext = Mocks.getMockCanvasContext();
    characterRenderer = Mocks.getMockCharacterRenderer();
    textPrompt = {
      update : function(time,diff) {
        this.calledUpdate = {time:time,diff:diff};
      },
      render : function() {this.calledRender = true;},
      prompt : function(prompt, x, y, color, maxLength, callback) {
        this.prompt = prompt;
      }
    };
    props = {
      text : "text",
      screenContext : screenContext,
      canvasContext : canvasContext,
      characterRenderer : characterRenderer,
      textPrompt : textPrompt
    };
    layer = new TextLayer(props);
  });

  describe("#update()", function() {
    it("should call textPrompt update", function(done) {
      layer.update(1,1);

      expect(textPrompt.calledUpdate.diff).toBe(1);
      done();
    });
  });
  describe("#render()", function() {
    it("should call textprompt render", function(done) {
      layer.render();

      expect(textPrompt.calledRender).toBeTruthy();
      done();
    });
    it("should clear pending string area", function(done) {
      var calledClearLength = {};
      layer.writeText("string", 0, 0, Color.WHITE, Color.BLACK);
      layer.clearLength = function(x,y, length) {calledClearLength = {x:x,y:y,length:length};};

      layer.render();

      expect(calledClearLength.length).toBe(6);
      done();
    });
    it("should render string", function(done) {
      layer.writeText("string", 0, 0, Color.WHITE, Color.BLACK);

      layer.render();

      expect(characterRenderer.calledRenderString.text).toBe("string");
      done();
    });
    it("should clear pending symbol area", function(done) {
      var calledClearLength = {};
      layer.drawSymbol("string", 0, 0, Color.WHITE, Color.BLACK);
      layer.clearLength = function(x,y, length) {calledClearLength = {x:x,y:y,length:length};};

      layer.render();

      expect(calledClearLength !== null && calledClearLength.length).toBe(undefined);
      done();
    });
    it("should render symbol", function(done) {
      layer.drawSymbol("string", 0, 0, Color.WHITE, Color.BLACK);

      layer.render();

      expect(characterRenderer.calledRenderSymbol.char).toBe("string");
      done();
    });
    it("should clear pending stings", function(done) {
      layer.drawSymbol("string", 0, 0, Color.WHITE, Color.BLACK);

      layer.render();

      expect(layer._pendingTextStrings.length).toBe(0);
      done();
    });
  });
  describe("#clearLength()", function() {
    it("should clear specified length", function(done) {
      layer.clearLength(0,0,5);

      expect(characterRenderer.calledClearRect.length).toBe(5);
      done();
    });
    it("should clear length", function(done) {
      layer.clearLength(0,0);

      expect(characterRenderer.calledClearRect.length).toBe(1);
      done();
    });
  });
  describe("#writeText()", function() {
    it("should add pending string", function(done) {
      layer.writeText("new text",0,0,Color.BLACK, Color.WHITE);

      expect(layer._pendingTextStrings.length).toBe(1);
      expect(layer._pendingTextStrings[0].string).toBe("new text");
      done();
    });
  });
  describe("#drawSymbol()", function() {
    it("should add pending string", function(done) {
      layer.drawSymbol("SYMBOL",0,0,Color.BLACK, Color.WHITE);

      expect(layer._pendingTextStrings.length).toBe(1);
      expect(layer._pendingTextStrings[0].pixMapId).toBe("SYMBOL");
      done();
    });
  });
  describe("#getTextPrompt()", function() {
    it("should return text prompt", function(done) {
      var result = layer.getTextPrompt();

      expect(result).toBe(textPrompt);
      done();
    });
  });
  describe("#prompt()", function() {
    it("should call prompt on text prompt", function(done) {
      layer.prompt("input?", 1,2, Color.ORANGE, 5);

      expect(textPrompt.prompt).toBe("input?");
      done();
    });
  });
});
