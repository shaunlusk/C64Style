import * as TypeMoq from 'typemoq';

import { ICanvasContextWrapper } from '@shaunlusk/slgfx';
import { IPixPath } from '../src/IPixPath';
import { ColorIndexedPixPath } from '../src/ColorIndexedPixPath';
import { Palette } from '../src/Palette';
import { PixRenderer } from '../src/PixRenderer';
import { PixPath } from '../src/PixPath';
import { Color } from '../src/Color';

describe("PixRenderer", function() {
  let pixRenderer: PixRenderer, 
    context: TypeMoq.IMock<ICanvasContextWrapper>, 
    pixPath: IPixPath, 
    palette: Palette;

  beforeEach(function() {
    pixRenderer = new PixRenderer();
    context = TypeMoq.Mock.ofType<ICanvasContextWrapper>();
    pixPath = new PixPath(0, 0, Color.BLACK);
    palette = Palette.getDefaultPalette();
  });
  describe('#setFillColor', function() {
    it('should set fill style on CanvasContext by palette index', function(done) {
      debugger;
      pixPath = new ColorIndexedPixPath(0, 0, 0);
      palette = new Palette([Color.BLUE]);

      // pixRenderer.setFillColor(context, pixPath, palette);
      pixRenderer.renderPixPathArray(context.object, 
        0,
        0,
        pixPath.width,
        pixPath.height,
        [pixPath],
        palette,
        1,
        1,
        false,
        false,
        0);

      // expect(context.style).toBe(palette[0]);
      context.verify(c => c.setFillStyle(palette.colorFromIndex(0).value), TypeMoq.Times.once());
      done();
    });
    it('should throw error if specified index does not exist in palette', function(done) {
      pixPath = new ColorIndexedPixPath(0, 0, 50);
      expect(() => pixRenderer.renderPixPathArray(context.object, 
        0,
        0,
        pixPath.width,
        pixPath.height,
        [pixPath],
        palette,
        1,
        1,
        false,
        false,
        0)).toThrow();
      done();
    });
  });
});
