import * as TypeMoq from 'typemoq';

import { ICanvasContextWrapper, IGfxPanel } from '@shaunlusk/slgfx';
import {Color} from '../src/Color';
import { IPixRenderer } from '../src/PixRenderer';
import { IPixElementProps, PixElement } from '../src/PixElement';
import { Palette } from '../src/Palette';
import { PixPath } from '../src/PixPath';
import { PixPathRectangle } from '../src/PixPathRectangle';

describe("PixElement", function() {
  var pixImage,  
    canvaseContextMock: TypeMoq.IMock<ICanvasContextWrapper>,
    pixRendererMock: TypeMoq.IMock<IPixRenderer>,
    gfxPanelMock: TypeMoq.IMock<IGfxPanel>
    ;

  beforeEach(function() {
    canvaseContextMock = TypeMoq.Mock.ofType<ICanvasContextWrapper>();
    pixRendererMock = TypeMoq.Mock.ofType<IPixRenderer>();
    gfxPanelMock = TypeMoq.Mock.ofType<IGfxPanel>();

    pixImage = new PixElement({
      defaultPalette: Palette.getDefaultPalette(),
      pixRenderer: pixRendererMock.object,
      gfxPanel: gfxPanelMock.object,
      pixPathArray: [],
    });
  });

  describe("#setDimensions()", function() {
    it("should set dimensions to 0 if no pixPaths", function(done) {
      expect(pixImage.getWidth()).toBe(0);
      expect(pixImage.getHeight()).toBe(0);
      done();
    });
    it("should calculate dimensions correctly", function(done) {
      pixImage = new PixElement({
        defaultPalette: Palette.getDefaultPalette(),
        pixRenderer: pixRendererMock.object,
        gfxPanel: gfxPanelMock.object,
        pixPathArray: [
          new PixPath(1, 1, Color.BLACK),
          new PixPath(2, 2, Color.BLACK)
        ],
      });

      var exectedWidth = 3, expectedHeight = 3;
      expect(pixImage.getWidth()).toBe(exectedWidth);
      expect(pixImage.getHeight()).toBe(expectedHeight);
      done();
    });
    it("should calculate dimensions correctly", function(done) {
      // var mockScreen = Mocks.getMockScreen({scaleX:3, scaleY:4});
      gfxPanelMock.setup(x => x.getScaleX()).returns(() => 3);
      gfxPanelMock.setup(x => x.getScaleY()).returns(() => 4);
      var props: IPixElementProps = {
        scaleX:5,
        scaleY:6,
        gfxPanel: gfxPanelMock.object,
        pixRenderer: pixRendererMock.object,
        defaultPalette: Palette.getDefaultPalette(),
        pixPathArray : [
          new PixPathRectangle(1, 1, 2, 3),
          new PixPathRectangle(1, 2, 3, 4),
          new PixPathRectangle(2, 2, 1, 1)
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
});
