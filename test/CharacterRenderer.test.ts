import * as TypeMoq from 'typemoq';

import { ICanvasContextWrapper } from '@shaunlusk/slgfx';
import { CharacterRenderer } from '../src/CharacterRenderer';
import { CELLHEIGHT, CELLWIDTH } from '../src/Constants';
import { Color } from '../src/Color';

describe("CharacterRenderer", function() {
  let renderer: CharacterRenderer;
  const canvasContextMock: TypeMoq.IMock<ICanvasContextWrapper> = TypeMoq.Mock.ofType<ICanvasContextWrapper>();

  beforeEach(function() {
    renderer = new CharacterRenderer();
    canvasContextMock.reset();
  });

  describe("#clearRect()", function() {
    it("should clear a rectangle of specified length at specified cell coordinates", function(done) {
      const x = 2, y = 2, length = 3;
      const expected = {
        x : x,
        y : y,
        width : length * CELLWIDTH,
        height : CELLHEIGHT
      };
      renderer.clearRect(canvasContextMock.object, x, y, length);

      canvasContextMock.verify(c => c.clearRect(expected.x, expected.y, expected.width, expected.height), TypeMoq.Times.once());

      done();
    });
    it("should clear a rectangle of specified length at specified cell coordinates (2x2)", function(done) {
      const x = 2, y = 2, length = 3;

      const expected = {
        x : x,
        y : y,
        width : length * CELLWIDTH * 2,
        height : CELLHEIGHT * 2
      };
      renderer.clearRect(canvasContextMock.object, x, y, length, 2, 2);
      // expect(mockContext.x).toBe(expected.x);
      // expect(mockContext.y).toBe(expected.y);
      // expect(mockContext.width).toBe(expected.width);
      // expect(mockContext.height).toBe(expected.height);
      canvasContextMock.verify(c => c.clearRect(expected.x, expected.y, expected.width, expected.height), TypeMoq.Times.once());
      done();
    });
  });
  describe("#renderSymbol()", function() {
    it("should call some other functions", function(done) {
      const char = '.';
      const x = 7, y = 3;
      const color = Color.CYAN, backgroundColor = Color.DARKGREY;

      debugger;
      renderer.renderSymbol(canvasContextMock.object, char, x, y, color, backgroundColor);

      canvasContextMock.verify(c => c.setFillStyle(backgroundColor.value), TypeMoq.Times.once());
      canvasContextMock.verify(c => c.setFillStyle(color.value), TypeMoq.Times.exactly(4));
      canvasContextMock.verify(c => c.fillRect(x, y, CELLWIDTH, CELLHEIGHT), TypeMoq.Times.once());
      done();
    });
  });
});
