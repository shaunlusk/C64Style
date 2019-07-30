import PixRenderer from '../src/PixRenderer';
import {PixPathTypes} from '../src/PixPathTypes';
import {Color} from '../src/Color';
import ColorPointer from '../src/ColorPointer';

describe("PixRenderer", function() {
  var pixRenderer, context, pixPath, palette;

  beforeEach(function() {
    pixRenderer = new PixRenderer(1,1);
    context = {
      fillRect : function(x, y, width, height)  {
        this.calledWithX = x;
        this.calledWithY = y;
        this.calledWithWidth = width;
        this.calledWithHeight = height;
      },
      setFillStyle : function(style) {
        this.style = style;
      }
    };
    pixPath = {
      type: PixPathTypes.PIXEL,
      x : 0,
      y : 0,
      color : Color.BLACK
    };
    palette = [];
  });
  describe('#setFillColor', function() {
    it('should set fill style on CanvasContext by palette index', function(done) {
      pixPath.color = 0;
      palette = [Color.BLUE];

      pixRenderer.setFillColor(context, pixPath, palette);

      expect(context.style).toBe(palette[0]);
      done();
    });
    it('should throw error if specified index does not exist in palette', function(done) {
      pixPath.color = 0;
      expect(() => pixRenderer.setFillColor(context, pixPath, palette) ).toThrow();
      done();
    });
    it('should set fill style on CanvasContext by color pointer', function(done) {
      pixPath.color = new ColorPointer(Color.YELLOW);

      pixRenderer.setFillColor(context, pixPath, palette);

      expect(context.style).toBe(Color.YELLOW);
      done();
    });
    it('should set fill style on CanvasContext by color string', function(done) {
      pixRenderer.setFillColor(context, pixPath, palette);

      expect(context.style).toBe(Color.BLACK);
      done();
    });
  });
});
