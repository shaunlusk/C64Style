import { C64Panel } from "../C64Panel";
import { CharacterMap } from "../CharacterMap";
import { Color } from "../Color";
import { TextLayer } from "../TextLayer";

export interface ITextDemoProps {
  targetElement: HTMLElement;

}

export class TextDemo {
  private _panel: C64Panel;
  private _textLayer: TextLayer;

  constructor(props: ITextDemoProps) {
    this._panel = new C64Panel({
      targetElement: props.targetElement
    });

    this._textLayer = this._panel.createLayer("TextLayer");
    this._panel.render();

    // Write some characters to it
    this._textLayer.writeText("This is a demo of the text drawing", 0, 0, Color.LIGHTBLUE);
    this._textLayer.writeText("capabilities of C64Style.", 0, 1, Color.LIGHTBLUE);
    this._textLayer.writeText("Enjoy!", 0, 2, Color.CYAN);

    // Draw all mapped symbols.
    let x = 0, y = 5;
    Object.keys(CharacterMap).forEach(key => {
      this._textLayer.drawSymbol(key, x, y, Color.WHITE);
      // Draw inverse characters
      this._textLayer.drawSymbol(key, x, y + 10, Color.BLUE, Color.LIGHTBLUE);
      x++;
      if (x > 24) {
        x = 0;
        y++;
      }
    });
  }
}
