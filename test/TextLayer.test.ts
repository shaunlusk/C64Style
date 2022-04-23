import * as TypeMoq from 'typemoq';

import { ICanvasContextWrapper } from '@shaunlusk/slgfx';
import { ICharacterRenderer } from '../src/CharacterRenderer';
import { Color } from '../src/Color';
import { ITextLayerProps, TextLayer } from "../src/TextLayer";
import { ITextPrompt, TextPrompt } from '../src/TextPrompt';

describe("TextLayer", function() {
  let props: ITextLayerProps,
    layer: TextLayer,
    textPromptMock: TypeMoq.IMock<ITextPrompt>,
    characterRendererMock: TypeMoq.IMock<ICharacterRenderer>,
    canvasContextWrapperMock: TypeMoq.IMock<ICanvasContextWrapper>;

  beforeEach(function() {
    characterRendererMock = TypeMoq.Mock.ofType<ICharacterRenderer>();
    canvasContextWrapperMock = TypeMoq.Mock.ofType<ICanvasContextWrapper>();
    textPromptMock = TypeMoq.Mock.ofType<ITextPrompt>();

    props = {
      canvasContextWrapper: canvasContextWrapperMock.object,
      characterRenderer: characterRendererMock.object,
      textPrompt: textPromptMock.object,
    };
    layer = new TextLayer(props);
  });

  describe("#update()", function() {
    it("should call textPrompt update", function(done) {
      layer.update(1,1);

      textPromptMock.verify(t => t.update(1,1), TypeMoq.Times.once());
      done();
    });
  });
  describe("#render()", function() {
    it("should call textprompt render", function(done) {
      layer.render();

      textPromptMock.verify(t => t.render(), TypeMoq.Times.once());
      done();
    });
    it("should clear pending string area", function(done) {
      layer.writeText("string", 3, 7, Color.WHITE, Color.BLACK);

      layer.render();

      characterRendererMock.verify(x => 
        x.clearRect(TypeMoq.It.isAny(), 3*8, 7*8, 6, 1, 1), 
        TypeMoq.Times.once());
      done();
    });
    it("should render string", function(done) {
      layer.writeText("string", 5, 2, Color.GREEN, Color.BLUE);

      layer.render();

      characterRendererMock.verify(x => 
        x.renderString(TypeMoq.It.isAny(), "string", 5*8, 2*8, Color.GREEN, Color.BLUE, 1, 1),
        TypeMoq.Times.once());
      done();
    });
    it("should clear pending symbol area", function(done) {
      layer.drawSymbol("string", 0, 0, Color.WHITE, Color.BLACK);

      layer.render();

      characterRendererMock.verify(x =>
        x.clearRect(TypeMoq.It.isAny(), 0, 0, 1, 1, 1),
        TypeMoq.Times.once());
      done();
    });
    it("should render symbol", function(done) {
      layer.drawSymbol("string", 0, 0, Color.WHITE, Color.BLACK);

      layer.render();

      characterRendererMock.verify(x =>
        x.renderSymbol(TypeMoq.It.isAny(), "string", 0, 0, Color.WHITE, Color.BLACK, 1, 1),
        TypeMoq.Times.once());
      done();
    });
  });
  describe("#clearLength()", function() {
    it("should clear specified length", function(done) {
      layer.clearLength(0,0,5);

      characterRendererMock.verify(x =>
        x.clearRect(TypeMoq.It.isAny(), 0, 0, 5, 1, 1),
        TypeMoq.Times.once());
      done();
    });
    it("should clear length", function(done) {
      layer.clearLength(0,0);

      // expect(characterRenderer.calledClearRect.length).toBe(1);
      characterRendererMock.verify(x =>
        x.clearRect(TypeMoq.It.isAny(), 0, 0, 1, 1, 1),
        TypeMoq.Times.once());
      done();
    });
  });
  describe("#getTextPrompt()", function() {
    it("should return text prompt", function(done) {
      const result = layer.getTextPrompt();

      expect(result).toBe(textPromptMock.object);
      done();
    });
  });
  describe("#prompt()", function() {
    it("should call prompt on text prompt", function(done) {
      layer.prompt("input?", 1,2, Color.ORANGE, 5, () => {});

      textPromptMock.verify(x => x.prompt("input?", 1,2, Color.ORANGE, 5, TypeMoq.It.isAny()), TypeMoq.Times.once());
      done();
    });
  });
});
