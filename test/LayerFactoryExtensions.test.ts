import * as TypeMoq from 'typemoq';

import { ICanvasContextWrapper, Utils } from '@shaunlusk/slgfx';
import { LayerFactory } from '../src/LayerFactoryExtensions';
import { ITextLayerProps, TextLayer } from '../src/TextLayer';
import { ICharacterRenderer } from '../src/CharacterRenderer';
import { ITextPrompt } from '../src/TextPrompt';

describe("LayerFactory", function() {
  describe("#constructor", function() {
    it("should setup default layer type creator functions", function(done) {
      expect(LayerFactory.DefaultTypes !== null).toBeTruthy();
      expect(Utils.isFunction(LayerFactory.DefaultTypes.GfxLayer)).toBeTruthy();
      expect(Utils.isFunction(LayerFactory.DefaultTypes.BackgroundLayer)).toBeTruthy();
      expect(Utils.isFunction(LayerFactory.DefaultTypes.TextLayer)).toBeTruthy();
      done();
    });
  });
  describe("#getLayer", function() {
    const characterRendererMock: TypeMoq.IMock<ICharacterRenderer> = TypeMoq.Mock.ofType<ICharacterRenderer>();
    const canvasContextWrapperMock: TypeMoq.IMock<ICanvasContextWrapper> = TypeMoq.Mock.ofType<ICanvasContextWrapper>();
    const textPromptMock: TypeMoq.IMock<ITextPrompt> = TypeMoq.Mock.ofType<ITextPrompt>();
    it("should create TextLayer", function(done) {
      const lf = new LayerFactory();

      const result = lf.createLayer<TextLayer, ITextLayerProps>("TextLayer", {
        characterRenderer: characterRendererMock.object,
        canvasContextWrapper: canvasContextWrapperMock.object,
        textPrompt: textPromptMock.object
      });

      expect(result !== null).toBeTruthy();
      expect(result).toBeInstanceOf(TextLayer);
      done();
    });
  });
});
