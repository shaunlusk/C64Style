import * as TypeMoq from 'typemoq';

import { ICanvasContextWrapper, IGfxPanel } from '@shaunlusk/slgfx';
import { CELLHEIGHT, CELLWIDTH } from '../src/Constants';
import { TextButton, ITextButtonProps } from '../src/TextButton';
import { Color } from '../src/Color';
import { ICharacterRenderer } from '../src/CharacterRenderer';

describe("TextButton", function() {
  let button, 
    gfxPanelMock: TypeMoq.IMock<IGfxPanel>, 
    characterRendererMock: TypeMoq.IMock<ICharacterRenderer>, 
    canvasContextMock: TypeMoq.IMock<ICanvasContextWrapper>,
    props: ITextButtonProps;

  beforeEach(function() {
    gfxPanelMock = TypeMoq.Mock.ofType<IGfxPanel>();
    characterRendererMock = TypeMoq.Mock.ofType<ICharacterRenderer>();
    canvasContextMock = TypeMoq.Mock.ofType<ICanvasContextWrapper>();

    props = {
      gfxPanel: gfxPanelMock.object,
      text : "test text",
      mouseOverColor: Color.BLACK,
      mouseOverBackgroundColor: Color.YELLOW,
      onClick: () => {},
      newWindow: false,
      windowOpen: () => {},
      setDocumentLocation: (location: string) => {},
      color: Color.ORANGE,
      characterRenderer: characterRendererMock.object
    };
    button = new TextButton(props);
  });

  describe("#_setWidth()", function() {
    it("should set width", function(done) {

      const expected = (button.getText().length + 2) * CELLWIDTH;
      expect(button.getWidth()).toBe(expected);
      done();
    });
    it("should set lastWidth and for symbol", function(done) {
      button.setText(null);

      const expected = 3 * CELLWIDTH;
      expect(button.getWidth()).toBe(expected);
      done();
    });
  });
  describe("#render()", function() {
    it("should return if hidden", function(done) {
      let calledIt = false;
      button.drawTextButton = function() {calledIt = true;};
      button.setHidden(true);

      button.render(canvasContextMock.object, 1,1);

      expect(calledIt).toBeFalsy();
      done();
    });
    it("should return if not dirty", function(done) {
      let calledIt = false;
      button.drawTextButton = function() {calledIt = true;};
      button.setDirty(false);

      button.render(canvasContextMock.object, 1,1);

      expect(calledIt).toBeFalsy();
      done();
    });
    it("should call drawTextButton", function(done) {
      let calledIt = false;
      button.drawTextButton = function() {calledIt = true;};

      button.render(canvasContextMock.object, 1,1);

      expect(calledIt).toBeTruthy();
      done();
    });
  });
});
