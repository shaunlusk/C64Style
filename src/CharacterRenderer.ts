import { CELLWIDTH, CELLHEIGHT } from './Constants';
import { CharacterMap } from './CharacterMap';
import { ICanvasContextWrapper } from '@shaunlusk/slgfx';
import { IColor } from './Color';
import { IPixPath } from './IPixPath';

export interface ICharacterRenderer {
  clearRect(context: ICanvasContextWrapper, x: number, y: number, length: number, pixelWidth: number, pixelHeight: number): void;
  renderSymbol(context: ICanvasContextWrapper, char: string, x: number, y: number, color: IColor, backgroundColor: IColor, pixelWidth: number, pixelHeight: number): void;
  renderString(context: ICanvasContextWrapper, text: string, x: number, y: number, color: IColor, backgroundColor: IColor, pixelWidth: number, pixelHeight: number): void;
}

/**
* Draws Characters on a layer.
* @constructor
*/
export class CharacterRenderer implements ICharacterRenderer {
  _cx: number;
  _cy: number;
  _color?: IColor;
  _backgroundColor?: IColor;

  constructor() {
    this._cx = 0;
    this._cy = 0;
    this._color = null;
    this._backgroundColor = null;
  }

  /**
  * Clears a length of the screen in preparation for writing characters.
  *
  * @param {CanvasContext} context The canvas context to work on.
  * @param {integer} x The x location to start clearing.
  * @param {integer} y The y location to start clearing.
  * @param {integer} length The length of characters to clear.
  * @param {integer} pixelWidth The width of pixels to draw.
  * @param {integer} pixelHeight The height of pixels to draw.
  */
  public clearRect(context: ICanvasContextWrapper, x: number, y: number, length: number, pixelWidth: number = 1, pixelHeight: number = 1)  {
    this.setCursorLocation(x, y);
    context.clearRect(
      this._cx,
      this._cy,
      length * pixelWidth * CELLWIDTH,
      pixelHeight * CELLHEIGHT);
  }

  /**
  * Draws a symbol on the canvas.
  * @param {CanvasContext} context The canvas context to work on.
  * @param {string} char The name of the character to draw.  Refer to {@link CharacterMap}
  * @param {integer} x The x location to draw the symbol to.
  * @param {integer} y The y location to draw the symbol to.
  * @param {Color} color The color to draw the symbol.
  * @param {Color} backgroundColor Optional. The background color for the symbol.
  * @param {integer} pixelWidth The width of pixels to draw.
  * @param {integer} pixelHeight The height of pixels to draw.
  */
  public renderSymbol(context: ICanvasContextWrapper, char: string, x: number, y: number, color: IColor, backgroundColor: IColor, pixelWidth: number = 1, pixelHeight:number = 1) {
    this.setCursorLocation(x, y);
    this.setColor(color);
    this.setBackgroundColor(backgroundColor);

    this._renderCharacter(context, char, pixelWidth, pixelHeight);
  }

  /**
  * Draws a string on the canvas.
  * @param {CanvasContext} context The canvas context to work on.
  * @param {string} text The text to draw to the canvas.
  * @param {integer} x The x location to draw the symbol to.
  * @param {integer} y The y location to draw the symbol to.
  * @param {Color} color The color to draw the string.
  * @param {Color} backgroundColor Optional. The background color for the string.
  * @param {integer} pixelWidth The width of pixels to draw.
  * @param {integer} pixelHeight The height of pixels to draw.
  */
  public renderString(context: ICanvasContextWrapper, text: string, x: number, y: number, color: IColor, backgroundColor: IColor, pixelWidth: number = 1, pixelHeight: number = 1) {
    this.setCursorLocation(x, y);
    this.setColor(color);
    this.setBackgroundColor(backgroundColor);

    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i);
      this._renderCharacter(context, char, pixelWidth, pixelHeight);
      this.advanceCursor(pixelWidth);
    }
  }

  /**
  * @private
  */
  private _renderCharacter(context: ICanvasContextWrapper, char: string, pixelWidth: number, pixelHeight: number) {
    if (this._backgroundColor) {
      context.setFillStyle(this._backgroundColor.value);
      context.fillRect(this._cx, this._cy, CELLWIDTH * pixelWidth, CELLHEIGHT * pixelHeight);
    }

    if (char === " ") return;
    const pixPathArray = CharacterMap[char];

    if (!pixPathArray) {
      console.log("No pix path found for character:" + char);
      return;
    }
    for (let i = 0; i < pixPathArray.length; i++) {
      this._renderPixPath(context, pixPathArray[i], pixelWidth, pixelHeight);
    }
  }

  /**
  * @private
  */
  private _renderPixPath(context: ICanvasContextWrapper, pixPath: IPixPath, pixelWidth: number, pixelHeight: number) {
    context.setFillStyle(pixPath.color ? pixPath.color.value : this._color.value);
    const tx = (pixPath.x * pixelWidth) + this._cx;
    const ty = (pixPath.y * pixelHeight) + this._cy;
    // switch (pixPath.type) {
    //   case PixPathTypes.PIXEL :
    //     context.fillRect(tx, ty, pixelWidth, pixelHeight);
    //     break;
    //   case PixPathTypes.RECTANGLE :
    //     context.fillRect(
    //       tx,
    //       ty,
    //       pixPath.width * pixelWidth,
    //       pixPath.height * pixelWidth
    //     );
    //     break;
    //   default:
    //     throw new Error("Unknown Pix Path Type");
    // }
    context.fillRect(tx, ty, pixPath.width * pixelWidth, pixPath.height * pixelHeight);
  }

  /**
  * @private
  */
  private setCursorLocation(x: number, y: number) {
    this._cx = x;
    this._cy = y;
  }

  /**
  * @private
  */
  private advanceCursor(pixelWidth: number) {
    this._cx = this._cx + CELLWIDTH * pixelWidth;
  }

  /**
  * @private
  */
  private setColor(color: IColor) {
    this._color = color;
  }

  /**
  * @private
  */
  private setBackgroundColor(backgroundColor: IColor) {
    this._backgroundColor = backgroundColor;
  }

}
